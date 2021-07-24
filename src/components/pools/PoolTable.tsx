// Copyright (C) 2020 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import React, { FunctionComponent } from 'react';
import {
    Table,
    Tbody,
    Td,
    Text,
    Tr,
    Th,
    Thead,
    HStack,
    Spinner,
} from '@chakra-ui/react';
import PoolRow from './PoolRow';
import { StakingPool } from '../../graphql/models';
import { ArrowDownIcon } from '@chakra-ui/icons';

export type Sort =
    | 'totalUsers'
    | 'stakedBalance'
    | 'totalReward'
    | 'commission';

export interface PoolTableProps {
    account?: string;
    loading: boolean;
    data?: StakingPool[];
    sort?: Sort;
    onSort: (order: Sort) => void;
}

const PoolTable: FunctionComponent<PoolTableProps> = ({
    account,
    data,
    loading,
    sort,
    onSort,
}) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Address</Th>
                    <Th isNumeric onClick={() => onSort('totalUsers')}>
                        Total Users
                        {sort == 'totalUsers' && (
                            <i className="fas fa-arrow-down"></i>
                        )}
                    </Th>
                    <Th isNumeric onClick={() => onSort('stakedBalance')}>
                        Total Staked{' '}
                        {sort == 'stakedBalance' && <ArrowDownIcon />}
                    </Th>
                    <Th isNumeric onClick={() => onSort('totalReward')}>
                        Total Rewards{' '}
                        {sort == 'totalReward' && <ArrowDownIcon />}
                    </Th>
                    <Th>Commission</Th>
                    <Th onClick={() => onSort('commission')}>
                        Accrued Commission{' '}
                        {sort == 'commission' && <ArrowDownIcon />}
                    </Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>

            <Tbody>
                {loading && (
                    <Tr>
                        <Td colSpan={6} textAlign="center">
                            <HStack justify="center">
                                <Spinner />
                                <Text>Loading</Text>
                            </HStack>
                        </Td>
                    </Tr>
                )}
                {!loading &&
                    (!data ||
                        (data.length === 0 && (
                            <Tr>
                                <Td colSpan={6} textAlign="center">
                                    <Text>No items</Text>
                                </Td>
                            </Tr>
                        )))}
                {!loading &&
                    data &&
                    data.length > 0 &&
                    data.map((pool) => (
                        <PoolRow key={pool.id} pool={pool} account={account} />
                    ))}
            </Tbody>
        </Table>
    );
};

export default PoolTable;
