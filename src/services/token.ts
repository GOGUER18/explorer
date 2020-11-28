// Copyright (C) 2020 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import { useState, useEffect } from 'react';
import { useCartesiTokenContract } from '../services/contract';
import { BigNumber, BigNumberish, ContractTransaction } from 'ethers';
import { formatUnits, parseUnits } from '@ethersproject/units';

export const useCartesiToken = (
    account: string = null,
    spender: string = null,
    blockNumber: number = 0
) => {
    const [error, setError] = useState<string>();
    const token = useCartesiTokenContract();
    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [allowance, setAllowance] = useState<BigNumber>(BigNumber.from(0));
    const [transaction, setTransaction] = useState<
        Promise<ContractTransaction>
    >();

    // balances
    useEffect(() => {
        if (token && account) {
            token.balanceOf(account).then(setBalance);
            if (spender) {
                token.allowance(account, spender).then(setAllowance);
            }
        }
    }, [token, account, spender, blockNumber]);

    const approve = (spender: string, amount: BigNumberish) => {
        if (token) {
            try {
                // send transaction
                const transaction = token.approve(spender, amount);
                setTransaction(transaction);
            } catch (e) {
                setError(e.message);
                // XXX: show we really clear the transaction
                setTransaction(undefined);
            }
        }
    };

    const parseCTSI = (amount: BigNumberish): BigNumber => {
        return parseUnits(amount.toString(), 18);
    };

    const formatCTSI = (amount: BigNumberish): string => {
        return parseFloat(formatUnits(amount, 18)).toLocaleString();
    };

    const clearStates = () => {
        // setError(null);
        setTransaction(null);
    };

    return {
        allowance,
        balance,
        error,
        transaction,
        clearStates,
        approve,
        parseCTSI,
        formatCTSI,
    };
};
