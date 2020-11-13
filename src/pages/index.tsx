// Copyright (C) 2020 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import Layout from '../components/Layout';

import useTickets from '../graphql/hooks/useTickets';
import useWorkers from '../graphql/hooks/useWorkers';
import useSummary from '../graphql/hooks/useSummary';

import { useMarketInformation } from '../services/market';
import { useCartesiToken } from '../services/token';
import { useBlockNumber } from '../services/eth';
import { useStaking } from '../services/staking';

const Home = () => {
    const {
        marketInformation,
        error: marketInfomationError,
    } = useMarketInformation();
    const { account } = useWeb3React<Web3Provider>();

    const blockNumber = useBlockNumber();
    const { balance, formatCTSI } = useCartesiToken(account, null, blockNumber);
    const { stakedBalance } = useStaking();

    const { workers, refreshWorkers } = useWorkers();
    const { tickets, refreshTickets } = useTickets();
    const { summary, refreshSummary } = useSummary();

    const [workerPage, setWorkerPage] = useState(1);
    const [workerSearch, setWorkerSearch] = useState('');

    const totalWorkerPages =
        summary && workerSearch == ''
            ? Math.ceil(summary.totalWorkers / 10)
            : 1;

    const tinyString = (str: string) => {
        str = str.slice(2);
        if (str.length > 8) {
            return str.slice(0, 4) + '...' + str.slice(-4);
        }
        return str;
    };

    const timeAgo = (timestamp: number) => {
        const ticketTime = new Date(timestamp * 1000);
        const currentTime = new Date();
        const offset = (currentTime.getTime() - ticketTime.getTime()) / 1000;

        // const h = offset > 3600 ? `${Math.floor(offset / 3600)}:` : '';
        const m = offset > 60 ? `${Math.floor(offset / 60)}` : '';
        const s = offset < 300 ? `:${Math.floor(offset % 60)}` : '';

        return m + s + ' minutes ago';
    };

    const themes = [
        'frogideas',
        'sugarsweets',
        'heatwave',
        'daisygarden',
        'seascape',
        'summerwarmth',
        'bythepool',
        'duskfalling',
        'berrypie',
    ];

    const tinyGraphUrl = (ticket) => {
        return `https://www.tinygraphs.com/labs/isogrids/hexa/${
            ticket.round
        }?theme=${
            themes[ticket.round % themes.length]
        }&numcolors=4&size=220&fmt=svg`;
    };

    return (
        <Layout className="landing">
            <Head>
                <title>Cartesi</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="landing-header row">
                {!marketInfomationError && (
                    <>
                        <div className="col col-12 col-md-4 col-lg-2">
                            <div className="caption white-text">CTSI Price</div>
                            <div className="info-text-sm dark-white-text">
                                {`$${marketInformation.price}  `}
                                <span className="caption">USD</span>
                            </div>
                        </div>

                        <div className="col col-12 col-md-4 col-lg-2">
                            <div className="caption white-text">
                                CTSI Market Cap
                            </div>
                            <div className="info-text-sm dark-white-text">
                                {`$${marketInformation.marketCap}  `}
                                <span className="caption">USD</span>
                            </div>
                        </div>

                        <div className="col col-12 col-md-4 col-lg-2">
                            <div className="caption white-text">
                                Circ. Supply
                            </div>
                            <div className="info-text-sm dark-white-text">
                                {`${marketInformation.circulatingSupply}  `}
                                <span className="caption">CTSI</span>
                            </div>
                        </div>

                        <div className="col col-12 col-md-6 col-lg-3">
                            <div className="sub-title-2 white-text">
                                <img src="/images/wallet.png" />
                                &nbsp; Wallet Balance
                            </div>
                            <div className="info-text-md dark-white-text">
                                {`${account ? formatCTSI(balance) : 'N/A'}  `}
                                <span className="caption">CTSI</span>
                            </div>
                        </div>

                        <div className="col col-12 col-md-6 col-lg-3">
                            <div className="sub-title-2 white-text">
                                <img src="/images/staked.png" />
                                &nbsp; Staked Balance
                            </div>
                            <div className="info-text-md dark-white-text">
                                {`${
                                    account ? formatCTSI(stakedBalance) : 'N/A'
                                }`}
                                <span className="caption"> CTSI</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="landing-dashboard">
                <div className="landing-dashboard-content row">
                    <div className="col-3 landing-dashboard-content-item">
                        <div className="sub-title-1"># Active Nodes</div>
                        <div className="info-text-bg">
                            {summary
                                ? summary.totalWorkers.toLocaleString()
                                : 0}
                        </div>
                    </div>
                    <div className="col-3 landing-dashboard-content-item">
                        <div className="sub-title-1"># Active Stakers</div>
                        <div className="info-text-bg">
                            {summary
                                ? summary.totalStakers.toLocaleString()
                                : 0}
                        </div>
                    </div>
                    <div className="col-3 landing-dashboard-content-item">
                        <div className="sub-title-1">Annual Yield</div>
                        <div className="info-text-bg">8.3%</div>
                    </div>
                    <div className="col-3 landing-dashboard-content-item">
                        <div className="sub-title-1">Participation Rate</div>
                        <div className="info-text-bg">23.2%</div>
                    </div>
                </div>
            </div>

            <div className="landing-lottery">
                <h5>|&ensp;Lottery</h5>

                <div className="landing-lottery-tickets">
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => refreshTickets()}
                    >
                        <img src="/images/refresh.svg" />
                    </button>
                    {tickets.slice(0, 4).map((ticket) => {
                        return (
                            <div
                                className="landing-lottery-ticket"
                                key={ticket.id}
                            >
                                <div className="landing-lottery-ticket-time sub-title-4">
                                    <img src="/images/clock.png" />
                                    {' ' + timeAgo(ticket.timestamp)}
                                </div>
                                <div className="landing-lottery-ticket-content">
                                    <div className="landing-lottery-ticket-content-header body-text-2">
                                        Ticket #{ticket.round}
                                    </div>
                                    <div className="landing-lottery-ticket-content-content">
                                        <div className="landing-lottery-ticket-content-content-text">
                                            <div className="body-text-2">
                                                Claimer
                                                <div className="sub-title-3 mt-1">
                                                    {tinyString(ticket.user.id)}
                                                </div>
                                            </div>
                                            <div className="body-text-2 mt-4">
                                                Node
                                                <div className="mt-1">
                                                    {tinyString(
                                                        ticket.worker.id
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <img
                                            className="landing-lottery-ticket-content-content-image"
                                            src={tinyGraphUrl(ticket)}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="landing-noether">
                <div className="landing-noether-title">
                    <h5>|&ensp;Noether Node Runners</h5>

                    <div className="input-group">
                        <span>
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={workerSearch}
                            onChange={(e) => (
                                setWorkerSearch(e.target.value),
                                setWorkerPage(1),
                                refreshWorkers(-2, e.target.value)
                            )}
                        />
                    </div>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="table-header-text">Node</th>
                            <th className="table-header-text">
                                #Tickets Claimed
                            </th>
                            <th className="table-header-text">Total Staked</th>
                            <th className="table-header-text">Total Rewards</th>
                            <th className="table-header-text">
                                Total Uptime Days
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {workers.map((worker) => {
                            const now = new Date();
                            const uptimeDays = Math.ceil(
                                (now.getTime() - worker.timestamp * 1000) /
                                    1000 /
                                    60 /
                                    24
                            );
                            return (
                                <tr key={worker.id} className="body-text-2">
                                    <td>{tinyString(worker.id)}</td>
                                    <td>{worker.totalTickets}</td>
                                    <td>
                                        {formatCTSI(worker.owner.stakedBalance)}{' '}
                                        CTSI
                                    </td>
                                    <td>{formatCTSI(worker.totalReward)}</td>
                                    <td>{uptimeDays}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="landing-noether-pagination body-text-2">
                    <button
                        className="btn"
                        type="button"
                        disabled={workerPage <= 1}
                        onClick={() => (
                            setWorkerPage(workerPage - 1),
                            refreshWorkers(-1, workerSearch)
                        )}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    Page {workerPage} of {totalWorkerPages}
                    <button
                        className="btn"
                        type="button"
                        disabled={workerPage >= totalWorkerPages}
                        onClick={() => (
                            setWorkerPage(workerPage + 1),
                            refreshWorkers(1, workerSearch)
                        )}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
