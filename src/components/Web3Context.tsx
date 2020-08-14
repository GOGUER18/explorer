// Copyright (C) 2020 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import { createContext } from 'react';
import { Web3Provider } from '@ethersproject/providers';

export interface Web3Context {
    provider: Web3Provider;
    connected: boolean;
    chainId: number;
    account: string;
}

export default createContext<Web3Context>(undefined);
