// Copyright (C) 2021 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber, constants } from 'ethers';
import { HStack, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { FaUsers } from 'react-icons/fa';
import { QueryResult } from '@apollo/client';

import Layout, {
    PageBody,
    PageHeader,
    PagePanel,
} from '../../components/Layout';
import { useBlockNumber } from '../../services/eth';
import { useStakingPool } from '../../services/pool';
import { useCartesiToken } from '../../services/token';
import useStakingPoolQuery from '../../graphql/hooks/useStakingPool';
import StakingDisclaimer from '../../components/StakingDisclaimer';
import { useStaking } from '../../services/staking';
import AddressText from '../../components/AddressText';
import TransactionFeedback from '../../components/TransactionFeedback';
import BalancePanel from '../../components/pools/BalancePanel';
import PoolStatsPanel from '../../components/pools/PoolStatsPanel';
import UserPool from '../../components/pools/UserPool';
import useBlocks from '../../graphql/hooks/useBlocks';
import { BlocksData, BlocksVars } from '../../graphql/models';
import SectionHeading from '../../components/SectionHeading';

const blockAverageInterval = (
    result: QueryResult<BlocksData, BlocksVars>
): number => {
    const count = result.data?.blocks?.length;
    if (count > 0) {
        const last = result.data.blocks[count - 1];
        const now = Date.now();
        return (now - last.timestamp * 1000) / count;
    }
    return 0;
};

const Pool = () => {
    const { account, chainId } = useWeb3React<Web3Provider>();

    // get pool address from path
    const router = useRouter();
    const address = router.query.pool as string;

    // query block number (continuouly)
    const blockNumber = useBlockNumber();

    // query pool data
    const {
        amount,
        amounts,
        stakedShares,
        paused,
        balance: userBalance,
        withdrawBalance,
        depositTimestamp,
        lockTime,
        transaction,
        amountToShares,
        sharesToAmount,
        deposit,
        stake,
        unstake,
        withdraw,
        rebalance,
    } = useStakingPool(address, account);

    // query user balance and allowance
    const {
        balance,
        allowance,
        transaction: tokenTransaction,
        approve,
    } = useCartesiToken(account, address, blockNumber);

    // query pool contract ERC20 balance
    const { balance: poolBalance } = useCartesiToken(
        address,
        null,
        blockNumber
    );

    // query staking contract with pool address
    const staking = useStaking(address);

    // query thegraph pool data
    const stakingPool = useStakingPoolQuery(address);

    // query 10 latest blocks for average interval
    const productionInterval = blockAverageInterval(
        useBlocks({ producer: address }, 10)
    );

    const stakedBalance = sharesToAmount(stakedShares);

    const onUnstake = (amount?: BigNumber) => {
        if (amount) {
            // convert CTSI to shares
            unstake(amountToShares(amount));
        } else {
            // full unstake
            unstake(stakedShares);
        }
    };

    return (
        <Layout>
            <Head>
                <title>Cartesi - Pool</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHeader>
                <HStack justify="space-between" align="flex-end">
                    <AddressText
                        address={stakingPool?.id}
                        chainId={chainId}
                        icon={FaUsers}
                    >
                        <HStack>
                            <Text>Staking Pool</Text>
                            {stakingPool &&
                                account &&
                                stakingPool.manager ==
                                    account.toLowerCase() && (
                                    <Link href={`/pools/${address}/edit`}>
                                        <EditIcon />
                                    </Link>
                                )}
                        </HStack>
                    </AddressText>
                </HStack>
            </PageHeader>
            <PagePanel>
                <PoolStatsPanel
                    w="100%"
                    productionInterval={productionInterval}
                    stakedBalance={amount}
                    totalBlocks={stakingPool?.user?.totalBlocks}
                    totalReward={stakingPool?.user?.totalReward}
                    totalUsers={stakingPool?.totalUsers}
                    totalCommission={stakingPool?.totalCommission}
                    fee={stakingPool?.fee}
                />
            </PagePanel>
            <PageBody>
                <BalancePanel
                    w="100%"
                    p={10}
                    shadow="lg"
                    amount={amount}
                    pool={poolBalance}
                    stake={amounts?.stake}
                    unstake={amounts?.unstake}
                    withdraw={amounts?.withdraw}
                    stakingMature={staking?.stakedBalance}
                    stakingMaturing={staking?.maturingBalance}
                    stakingReleasing={
                        staking?.releasingTimestamp?.getTime() > Date.now()
                            ? staking.releasingBalance
                            : constants.Zero
                    }
                    stakingReleased={
                        staking?.releasingTimestamp?.getTime() <= Date.now()
                            ? staking.releasingBalance
                            : constants.Zero
                    }
                    stakingMaturingTimestamp={staking?.maturingTimestamp}
                    stakingReleasingTimestamp={staking?.releasingTimestamp}
                    hideZeros={true}
                    onRebalance={rebalance}
                />

                <StakingDisclaimer persistanceKey="readDisclaimer" />
                <SectionHeading>Staking</SectionHeading>
                <TransactionFeedback transaction={transaction}>
                    Sending transaction...
                </TransactionFeedback>
                <TransactionFeedback transaction={tokenTransaction}>
                    Sending transaction...
                </TransactionFeedback>
                <UserPool
                    w="100%"
                    allowance={allowance}
                    balance={balance}
                    paused={paused?.valueOf()}
                    depositTimestamp={depositTimestamp}
                    lockTime={lockTime?.toNumber()}
                    userBalance={userBalance}
                    onApprove={(amount) => approve(address, amount)}
                    onDeposit={deposit}
                    onWithdraw={withdraw}
                    onStake={stake}
                    onUnstake={onUnstake}
                    shares={stakedShares}
                    staked={stakedBalance}
                    withdrawBalance={withdrawBalance}
                />
            </PageBody>
        </Layout>
    );
};

export default Pool;
