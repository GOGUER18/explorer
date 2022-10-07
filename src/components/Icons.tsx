// Copyright (C) 2021 Cartesi Pte. Ltd.

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.

// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.

import { createIcon, Icon } from '@chakra-ui/icons';

import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

export const PencilIcon = createIcon({
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.26587 16.0453L1.29133 19.8929H5.27749L20.5089 5.30662L16.4963 1.46484L1.26587 16.0453Z"
            stroke="#232222"
            strokeWidth="1.5"
            fill="currentColor"
        />
    ),
    viewBox: '0 0 22 21',
    defaultProps: { width: '22', height: '21' },
});

export const PencilIconWhite = createIcon({
    displayName: 'PencilIconWhite',
    viewBox: '0 0 24 24',
    path: (
        <g fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_638_4627)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.50073 16.206L4.52163 19.5039H7.79283L20.2924 7.00145L16.9994 3.7085L4.50073 16.206Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.51636 19.5166L7.44786 16.4547L4.51636 19.5166Z"
                    fill="currentColor"
                />
                <path
                    d="M4.51636 19.5166L7.44786 16.4547"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </g>
            <defs>
                <clipPath id="clip0_638_4627">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </g>
    ),
});

export const DashboardIcon = createIcon({
    displayName: 'DashboardIcon',
    viewBox: '0 0 24 24',
    path: (
        <path
            d="M21 3H3V21H21V3ZM4.8 8.625H14.25V12.5625H4.8V8.625ZM4.8 14.8125H14.25V18.75H4.8V14.8125ZM19.2 18.75H16.05V8.625H19.2V18.75Z"
            fill="currentColor"
        />
    ),
});

export const DelegateIcon = createIcon({
    displayName: 'DelegateIcon',
    viewBox: '0 0 25 25',
    path: (
        <path
            d="M19.8525 12.8809V19.8809H5.85254V12.8809H3.85254V19.8809C3.85254 20.9809 4.75254 21.8809 5.85254 21.8809H19.8525C20.9525 21.8809 21.8525 20.9809 21.8525 19.8809V12.8809H19.8525ZM13.8525 13.5509L16.4425 10.9709L17.8525 12.3809L12.8525 17.3809L7.85254 12.3809L9.26254 10.9709L11.8525 13.5509V3.88086H13.8525V13.5509Z"
            fill="currentColor"
        />
    ),
});

export const CheckCircleIcon = createIcon({
    displayName: 'CheckCircleIcon',
    viewBox: '0 0 26 26',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 13C24 19.0751 19.0751 24 13 24C6.92487 24 2 19.0751 2 13C2 6.92487 6.92487 2 13 2C19.0751 2 24 6.92487 24 13ZM26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM7.57631 13.3025L10.8776 16.1015L19.2613 9L20.3776 9.94642L10.8776 18.001L6.45215 14.2489L7.57631 13.3025Z"
            fill="currentColor"
        />
    ),
});

export const PoolBalanceIcon = createIcon({
    displayName: 'PoolBalanceIcon',
    viewBox: '0 0 24 25',
    path: (
        <g
            transform="translate(1.250000, 1.851165)"
            strokeWidth="2.5"
            stroke="currentColor"
        >
            <path
                fill="transparent"
                d="M13.0742,14.5004349 L19.62551,14.5004349 L19.62551,21.0004349 L13.0742,21.0004349 L13.0742,14.5004349 Z M4.4408921e-16,14.5004349 L6.55131,14.5004349 L6.55131,21.0004349 L4.4408921e-16,21.0004349 L4.4408921e-16,14.5004349 Z M4.4408921e-16,1.50039488 L6.55131,1.50039488 L6.55131,8.00039488 L4.4408921e-16,8.00039488 L4.4408921e-16,1.50039488 Z M16.3496164,-4.4408921e-16 L20.9639765,4.61436014 L16.3496164,9.22872029 L11.7352562,4.61436014 L16.3496164,-4.4408921e-16 Z"
            />
        </g>
    ),
});

export const PoolAllowenceIcon = createIcon({
    displayName: 'PoolAllowenceIcon',
    viewBox: '0 0 24 24',
    path: (
        <g>
            <path
                d="M18.3752 12.75C17.5795 12.7495 16.816 13.0652 16.2528 13.6276L13.6279 16.2525C13.0657 16.8151 12.7498 17.5779 12.7498 18.3731C12.7498 19.1683 13.0657 19.9311 13.6279 20.4937L16.2528 23.1187C16.8154 23.6808 17.5782 23.9968 18.3734 23.9968C19.1686 23.9968 19.9314 23.6808 20.494 23.1187L23.119 20.4937C23.6811 19.9311 23.9971 19.1683 23.9971 18.3731C23.9971 17.5779 23.6811 16.8151 23.119 16.2525L20.494 13.6276C19.9319 13.066 19.1699 12.7505 18.3752 12.75V12.75ZM18.3752 21L15.7503 18.3751L18.3752 15.7501L21.0001 18.3751L18.3752 21Z"
                fill="currentColor"
            />
            <path
                d="M3.74998 18H10.5V14.9999H3.74998C3.33564 14.9999 3.00005 14.664 3.00005 14.25V3.74998C3.00005 3.33564 3.33565 3.00005 3.74998 3.00005H17.625C17.8238 3.00005 18.0147 3.07905 18.1552 3.21951C18.2959 3.36024 18.3749 3.55093 18.3749 3.74999V10.1249H21.375V3.74999C21.375 2.75544 20.98 1.80147 20.2766 1.09835C19.5735 0.394955 18.6195 0 17.625 0H3.74999C2.75544 0 1.80147 0.394981 1.09835 1.09835C0.394954 1.80147 0 2.75544 0 3.74999V14.25C0 15.2445 0.394981 16.1982 1.09835 16.9016C1.80147 17.6047 2.75543 18 3.74998 18Z"
                fill="currentColor"
            />
            <path
                d="M8.99985 24.0001H10.5V21H0V24.0001H8.99985Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const AllowanceIcon = createIcon({
    displayName: 'AllowanceIcon',
    viewBox: '0 0 21 21',
    path: (
        <g>
            <path
                d="M10.63 20.3643C12.1674 20.3643 13.6834 20.0032 15.0557 19.3101C16.4281 18.617 17.6185 17.6112 18.531 16.3739C19.4436 15.1366 20.0527 13.7022 20.3095 12.1864C20.5663 10.6705 20.4635 9.11554 20.0093 7.6467C19.3613 8.18381 18.5778 8.53203 17.7449 8.65318C18.1628 10.2188 18.0527 11.8785 17.4315 13.3751C16.8104 14.8717 15.7129 16.1216 14.3092 16.9312C12.9055 17.7407 11.274 18.0646 9.66752 17.8527C8.06104 17.6409 6.5693 16.905 5.42351 15.7592C4.27771 14.6134 3.54185 13.1217 3.32997 11.5152C3.11809 9.90871 3.44202 8.2772 4.25156 6.87351C5.06109 5.46983 6.31103 4.37236 7.80764 3.75121C9.30425 3.13005 10.964 3.0199 12.5295 3.43781C12.6501 2.60513 12.9976 1.8217 13.5338 1.17339C12.1829 0.752262 10.7569 0.628129 9.35352 0.80949C7.95015 0.990852 6.60256 1.47342 5.40307 2.22414C4.20358 2.97486 3.18054 3.97599 2.40403 5.15895C1.62752 6.3419 1.11589 7.67873 0.904196 9.07785C0.692499 10.477 0.785736 11.9053 1.17752 13.265C1.5693 14.6248 2.25037 15.8837 3.17407 16.9557C4.09777 18.0277 5.24227 18.8873 6.52918 19.4758C7.81608 20.0642 9.21496 20.3675 10.63 20.3649V20.3643Z"
                fill="currentColor"
            />
            <path
                d="M10.6307 5.94531C10.3083 5.94497 9.98891 6.00819 9.6909 6.13134C9.39289 6.25449 9.12207 6.43517 8.89392 6.66305L6.74674 8.81078C6.51883 9.03861 6.33803 9.30912 6.21467 9.60684C6.09132 9.90457 6.02783 10.2237 6.02783 10.5459C6.02783 10.8682 6.09132 11.1873 6.21467 11.485C6.33803 11.7828 6.51883 12.0533 6.74674 12.2811L8.89392 14.4288C9.35427 14.8887 9.97837 15.1471 10.6291 15.1471C11.2798 15.1471 11.9039 14.8887 12.3643 14.4288L14.512 12.2811C14.9719 11.8208 15.2302 11.1967 15.2302 10.5459C15.2302 9.89523 14.9719 9.27113 14.512 8.81078L12.3643 6.66305C11.9043 6.20358 11.2808 5.94544 10.6307 5.94531ZM10.6307 12.6953L8.48301 10.5476L10.6307 8.39986L12.7785 10.5476L10.6307 12.6953Z"
                fill="currentColor"
            />
            <path
                d="M14.8896 4.54598L16.0495 5.1262L16.6292 6.28553C16.6699 6.36788 16.7329 6.43718 16.811 6.48564C16.8891 6.5341 16.9791 6.55978 17.071 6.55978C17.1629 6.55978 17.253 6.5341 17.3311 6.48564C17.4091 6.43718 17.4721 6.36788 17.5129 6.28553L18.0931 5.12346L19.253 4.54379C19.3353 4.503 19.4047 4.44002 19.4531 4.36195C19.5016 4.28387 19.5272 4.19381 19.5272 4.10192C19.5272 4.01002 19.5016 3.91996 19.4531 3.84189C19.4047 3.76381 19.3353 3.70083 19.253 3.66004L18.0931 3.08257L17.5129 1.92269C17.4721 1.84034 17.4091 1.77103 17.3311 1.72257C17.253 1.67411 17.1629 1.64844 17.071 1.64844C16.9791 1.64844 16.8891 1.67411 16.811 1.72257C16.7329 1.77103 16.6699 1.84034 16.6292 1.92269L16.0495 3.08257L14.8896 3.66278C14.8073 3.70357 14.738 3.76655 14.6895 3.84463C14.641 3.9227 14.6154 4.01276 14.6154 4.10466C14.6154 4.19655 14.641 4.28661 14.6895 4.36469C14.738 4.44276 14.8073 4.50574 14.8896 4.54653V4.54598Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const WalletIcon = createIcon({
    displayName: 'WalletIcon',
    viewBox: '0 0 22 22',
    path: (
        <path
            fill="currentColor"
            d="M23,5 L23,23 L0,23 L0,5 L23,5 Z M20.5,7.5 L2.5,7.5 L2.5,20.5 L20.5,20.5 L20.5,7.5 Z M17.5,13.5 C18.0522847,13.5 18.5,13.9477153 18.5,14.5 C18.5,15.0522847 18.0522847,15.5 17.5,15.5 C16.9477153,15.5 16.5,15.0522847 16.5,14.5 C16.5,13.9477153 16.9477153,13.5 17.5,13.5 Z M0,0 L19,0 L19,3 L0,3 L0,0 Z"
        />
    ),
});

export const TimerIcon = createIcon({
    displayName: 'WalletIcon',
    viewBox: '0 0 22 22',
    path: (
        <path
            d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"
            fill="currentColor"
        />
    ),
});

export const TimeIcon = createIcon({
    displayName: 'TimeIcon',
    viewBox: '0 0 24 24',
    path: (
        <path
            d="M12.293 22C6.76997 22 2.29297 17.523 2.29297 12C2.29297 6.477 6.76997 2 12.293 2C17.816 2 22.293 6.477 22.293 12C22.293 17.523 17.816 22 12.293 22ZM13.293 12V7H11.293V14H17.293V12H13.293Z"
            fill="currentColor"
        />
    ),
});

export const StakeIcon = createIcon({
    displayName: 'StakeIcon',
    viewBox: '0 0 24 24',
    path: (
        <g>
            <path
                d="M9.69568 6.29412C9.84237 6.32213 9.9638 6.42361 10.0163 6.56208L11.4039 10.2221C11.4872 10.4418 11.3748 10.6868 11.1528 10.7693C10.9308 10.8518 10.6833 10.7405 10.6 10.5207L9.45875 7.51031L6.55497 10.658C6.39509 10.8313 6.12357 10.8435 5.9485 10.6852C5.77344 10.5269 5.76113 10.2581 5.92101 10.0848L9.2974 6.42482C9.39815 6.31561 9.54899 6.26611 9.69568 6.29412Z"
                fill="currentColor"
            />
            <path
                d="M7.42848 13.6565C7.65044 13.574 7.89792 13.6853 7.98122 13.905L9.12274 16.916L10.6158 15.3001C10.7759 15.127 11.0474 15.115 11.2223 15.2734C11.3973 15.4318 11.4094 15.7006 11.2493 15.8738L9.28363 18.0012C9.18284 18.1103 9.03203 18.1597 8.88541 18.1316C8.7388 18.1036 8.61744 18.0021 8.56497 17.8637L7.17741 14.2037C7.0941 13.9839 7.20651 13.7389 7.42848 13.6565Z"
                fill="currentColor"
            />
            <path
                d="M10.6176 15.2753L12.0514 13.7427L12.6814 14.3202L11.2475 15.8529L10.6176 15.2753Z"
                fill="currentColor"
            />
            <path
                d="M3.48003 10.1294C3.56022 10.0148 3.69208 9.94642 3.8329 9.94642H8.61998C8.79888 9.94642 8.95902 10.0563 9.02189 10.2221L10.3049 13.6064H14.1519L13.0865 10.7964H10.9788C10.7417 10.7964 10.5496 10.6061 10.5496 10.3714C10.5496 10.1367 10.7417 9.94642 10.9788 9.94642H13.3839C13.5628 9.94642 13.723 10.0563 13.7858 10.2221L15.1734 13.8821C15.2229 14.0126 15.2046 14.1588 15.1244 14.2734C15.0442 14.388 14.9123 14.4564 14.7715 14.4564H10.0075C9.82864 14.4564 9.6685 14.3465 9.60564 14.1807L8.32258 10.7964H4.45253L5.51786 13.6064H7.60244C7.83952 13.6064 8.03172 13.7967 8.03172 14.0314C8.03172 14.2661 7.83952 14.4564 7.60244 14.4564H5.22046C5.04156 14.4564 4.88141 14.3465 4.81855 14.1807L3.43099 10.5207C3.38151 10.3902 3.39984 10.244 3.48003 10.1294Z"
                fill="currentColor"
            />
            <path
                d="M7.26332 13.7438L10.6628 10.0837L11.2948 10.659L7.89531 14.3191L7.26332 13.7438Z"
                fill="currentColor"
            />
            <path
                d="M9.19569 4.41658C4.90733 4.41658 1.43093 7.85811 1.43093 12.1034C1.43093 16.3488 4.90733 19.7903 9.19569 19.7903C13.484 19.7903 16.9604 16.3488 16.9604 12.1034C16.9604 7.85811 13.484 4.41658 9.19569 4.41658ZM0 12.1034C0 7.07575 4.11705 3 9.19569 3C14.2743 3 18.3914 7.07575 18.3914 12.1034C18.3914 17.1311 14.2743 21.2069 9.19569 21.2069C4.11705 21.2069 0 17.1311 0 12.1034Z"
                fill="currentColor"
            />
            <path
                d="M15.2918 20.5227C15.5557 20.551 15.8235 20.5656 16.0944 20.5656C20.4605 20.5656 24 16.7919 24 12.1369C24 7.48192 20.4605 3.70829 16.0944 3.70829C15.8503 3.70829 15.6089 3.72008 15.3704 3.74315L17.2752 5.2318V5.243C20.2239 5.83855 22.5691 8.62201 22.5691 12.1369C22.5691 15.6911 20.1712 18.4974 17.1762 19.05L15.2918 20.5227Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const StakedBalanceIcon = createIcon({
    displayName: 'StakedBalanceIcon',
    viewBox: '0 0 32 32',
    path: (
        <g transform="translate(3 3.25)">
            <path
                d="M21.82,19.364l-2.137-2.125-2.137,2.125,2.137,2.125Zm-2.137-5.651L14,19.364l5.683,5.651,5.683-5.651Z"
                fill="currentColor"
                fillRule="evenodd"
            />
            <path d="M9.428,23.5H11V21H0v2.5Z" fill="currentColor" />
            <path
                d="M0,.75H21.5V10.5H19V3.25H2.5v12.5h8.25v2.5H0Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </g>
    ),
});

export const EffectiveBalanceIcon = createIcon({
    displayName: 'EffectiveBalanceIcon',
    viewBox: '0 0 32 32',
    path: (
        <g>
            <path
                d="M20.72,19.391l1.808,1.336L11.36,28.087,0,20.727l1.817-1.336L11.36,25.37Z"
                transform="translate(4.736 1.5)"
                fill="currentColor"
            />
            <path
                d="M20.72,13.957l1.808,1.187L11.359,23.2,0,15.144l1.817-1.187,9.542,6.253Z"
                transform="translate(4.736 1.5)"
                fill="currentColor"
            />
            <path
                d="M11.264.913,0,9.065l11.264,8.152L22.528,9.065ZM4.408,9.065l6.856-4.891L18.12,9.065l-6.856,4.891Z"
                transform="translate(4.736 1.5)"
                fill="currentColor"
            />
        </g>
    ),
});

export const PoolUsersIcon = createIcon({
    displayName: 'PoolUsersIcon',
    viewBox: '0 0 32 32',
    path: (
        <g transform="translate(1.5 0.653)">
            <path
                d="M3.658,10.269A4.469,4.469,0,1,0,8.127,5.8,4.474,4.474,0,0,0,3.658,10.269Z"
                fill="currentColor"
            />
            <path
                d="M14.448,18.572a5.651,5.651,0,0,0-3.873-1.537h-4.9A5.685,5.685,0,0,0,0,22.714H11.272a7.507,7.507,0,0,1,3.176-4.142Z"
                fill="currentColor"
            />
            <path
                d="M16.4,12.449a4.469,4.469,0,1,0,4.469-4.469A4.474,4.474,0,0,0,16.4,12.449Z"
                fill="currentColor"
            />
            <path
                d="M23.321,19.215h-4.9a5.685,5.685,0,0,0-5.679,5.679H29a5.685,5.685,0,0,0-5.679-5.679Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const PoolProductionIntervalIcon = createIcon({
    displayName: 'PoolProductionIntervalIcon',
    viewBox: '0 0 32 32',
    path: (
        <path
            d="M18.5,3H10L3,8.25v13.5L10,27h8.5l7-5.25V8.25ZM11,6h6.5l4,3-4,3H11L7,9Zm1,9h4.5v9H12ZM6,12l3,2.25V22.5L6,20.25ZM19.5,22.5V14.25l3-2.25v8.25Z"
            transform="translate(1.75 1)"
            fill="currentColor"
        />
    ),
});

export const PoolCommisionIcon = createIcon({
    displayName: 'PoolCommisionIcon',
    viewBox: '0 0 32 32',
    path: (
        <path
            id="Path_366"
            data-name="Path 366"
            d="M5.782,6.147a12,12,0,1,0,16.973,0A12.006,12.006,0,0,0,5.782,6.147ZM20.15,22.212A9.592,9.592,0,0,1,6.69,8.752ZM8.387,7.055a9.61,9.61,0,0,1,3.225-1.646L9.176,7.844Zm2.487,2.487,4.447-4.447a9.178,9.178,0,0,1,1.426.272L11.722,10.39Zm2.546,2.546,5.72-5.72a10.1,10.1,0,0,1,1.01.687l-5.881,5.881Zm8.427,8.427-.789-.789,2.436-2.436A9.609,9.609,0,0,1,21.847,20.514Zm1.96-6.933L19.36,18.028l-.849-.849,5.024-5.024A9.188,9.188,0,0,1,23.807,13.581ZM22.534,9.762l-5.72,5.72-.849-.849,5.881-5.881A10.08,10.08,0,0,1,22.534,9.762Z"
            transform="translate(1.732 1.367)"
            fill="currentColor"
        />
    ),
});

export const DisconnectIcon = createIcon({
    displayName: 'DisconnectIcon',
    viewBox: '0 0 18 18',
    path: (
        <g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79589 7.6304C6.12129 7.9558 6.12129 8.48337 5.79589 8.80877L4.27507 10.3296C4.27489 10.3298 4.27471 10.33 4.27452 10.3301C3.73971 10.8674 3.43942 11.5946 3.43942 12.3525C3.43942 13.1101 3.7395 13.8369 4.27395 14.3741C4.81114 14.9085 5.53792 15.2085 6.29546 15.2085C7.05366 15.2085 7.78112 14.908 8.31835 14.3729C8.64415 14.0483 9.17127 14.0491 9.49613 14.3746C9.82098 14.7001 9.82073 15.2272 9.49557 15.5524L9.49439 15.5536L9.4567 15.5913C9.44549 15.6025 9.43404 15.6133 9.42237 15.6237C8.58047 16.426 7.46103 16.875 6.29546 16.875C5.09636 16.875 3.94623 16.3997 3.0967 15.5536L3.09438 15.5512C2.24824 14.7018 1.77295 13.5516 1.77295 12.3525C1.77295 11.1534 2.24818 10.0031 3.09437 9.15355L4.61752 7.6304C4.94292 7.305 5.47049 7.305 5.79589 7.6304Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2505 3.54147C11.4923 3.54147 10.7649 3.842 10.2277 4.37711C9.90185 4.70164 9.37472 4.70087 9.04987 4.37538C8.72502 4.04989 8.72527 3.52276 9.05044 3.19759L9.08931 3.15872C9.10051 3.14752 9.11194 3.13671 9.1236 3.12629C9.9655 2.32405 11.085 1.875 12.2505 1.875C13.4496 1.875 14.5998 2.35026 15.4493 3.19642L15.4516 3.19875C16.2978 4.04821 16.773 5.19835 16.773 6.39751C16.773 7.59657 16.2978 8.74688 15.4516 9.59644L15.4505 9.59761L13.9285 11.1196C13.6031 11.445 13.0755 11.445 12.7501 11.1196C12.4247 10.7942 12.4247 10.2666 12.7501 9.94122L14.2709 8.42041C14.2711 8.42022 14.2713 8.42004 14.2715 8.41985C14.8063 7.88263 15.1066 7.1554 15.1066 6.39751C15.1066 5.6399 14.8065 4.91309 14.2721 4.37595C13.7349 3.8415 13.0081 3.54147 12.2505 3.54147Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.2391 2.16331C6.66328 1.98487 7.1518 2.18407 7.33025 2.60824L12.7518 15.4956C12.9303 15.9198 12.7311 16.4083 12.3069 16.5867C11.8827 16.7652 11.3942 16.566 11.2157 16.1418L5.79417 3.25445C5.61573 2.83028 5.81493 2.34176 6.2391 2.16331Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const SwitchIcon = createIcon({
    displayName: 'SwitchIcon',
    viewBox: '0 0 18 18',
    path: (
        <g>
            <path
                d="M10.0163 3L9.01863 4.05909L10.8539 6.00165H3V7.5H14.25L10.0163 3Z"
                fill="currentColor"
            />
            <path
                d="M7.23375 14.25L8.23137 13.1909L6.39614 11.2484H14.25V9.75H3L7.23375 14.25Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const PaginationIcon = createIcon({
    displayName: 'PaginationIcon',
    viewBox: '0 0 33 33',
    path: (
        <g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6359 13.5649L16.4609 17.1704L20.2859 13.5649L21.4609 14.6749L16.4609 19.3983L11.4609 14.6749L12.6359 13.5649Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const ArrowsUpDownIcon = createIcon({
    displayName: 'ArrowsUpDownIcon',
    viewBox: '0 0 28 27',
    path: (
        <g>
            <path
                d="M14.2943 22.5008L9.50928 17.7275L11.105 16.1367L14.2943 19.3193L17.4836 16.1367L19.0793 17.7275L14.2943 22.5008Z"
                fill="currentColor"
            />
            <path
                d="M14.2941 5.62416L19.0792 10.3975L17.4834 11.9883L14.2941 8.80566L11.1049 11.9883L9.50913 10.3975L14.2941 5.62416Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const CopyIcon = createIcon({
    displayName: 'CopyIcon',
    viewBox: '0 0 19 19',
    path: (
        <g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.1499 2.31494H12.5999V3.50362H4.4099V12.8149H3.1499V2.31494Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8413 6.16494H7.20861V14.9649H14.8413V6.16494ZM5.51245 4.56494V16.5649H16.5375V4.56494H5.51245Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const PoolPerformanceIcon = createIcon({
    displayName: 'PoolPerformanceIcon',
    viewBox: '0 0 32 32',
    path: (
        <g transform="translate(3.655 3.655)">
            <path
                d="M22.345,17.9a4.6,4.6,0,1,1-4.6-4.6A4.6,4.6,0,0,1,22.345,17.9Z"
                fill="currentColor"
                fillRule="evenodd"
            />
            <path
                d="M2.345,14.222h8.278V22.5H2.345Z"
                fill="currentColor"
                fillRule="evenodd"
            />
            <path
                d="M11.767,1.345,17.746,11H5.788Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </g>
    ),
});

export const EyeIcon = createIcon({
    displayName: 'EyeIcon',
    viewBox: '0 0 24 24',
    path: (
        <g>
            <path
                d="M-1110.337-1941.93a12.915,12.915,0,0,1-4.663-5.888,12.9,12.9,0,0,1,4.663-5.886A12.791,12.791,0,0,1-1103-1956a12.8,12.8,0,0,1,7.339,2.3,12.9,12.9,0,0,1,4.661,5.886,12.921,12.921,0,0,1-4.661,5.888,12.807,12.807,0,0,1-7.339,2.295A12.8,12.8,0,0,1-1110.337-1941.93Zm-2.286-5.888a10.642,10.642,0,0,0,9.623,6,10.642,10.642,0,0,0,9.623-6,10.641,10.641,0,0,0-9.623-6A10.643,10.643,0,0,0-1112.623-1947.818Zm4.714,0a4.916,4.916,0,0,1,4.91-4.91,4.915,4.915,0,0,1,4.908,4.91,4.914,4.914,0,0,1-4.908,4.91A4.915,4.915,0,0,1-1107.908-1947.818Zm2.182,0a2.73,2.73,0,0,0,2.728,2.726,2.73,2.73,0,0,0,2.728-2.726,2.731,2.731,0,0,0-2.728-2.728A2.731,2.731,0,0,0-1105.726-1947.818Z"
                transform="translate(1115 1960)"
                fill="currentColor"
            />
        </g>
    ),
});

export const FilterIcon = createIcon({
    displayName: 'FilterIcon',
    viewBox: '0 0 24 24',
    path: (
        <g>
            <path
                d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const CloseIcon = createIcon({
    displayName: 'CloseIcon',
    viewBox: '0 0 24 24',
    path: (
        <g>
            <path
                d="M12 9.92755L19.2596 2.66797L21.3333 4.74172L14.0737 12.0013L21.3333 19.2609L19.2596 21.3346L12 14.075L4.7404 21.3346L2.66666 19.2609L9.92624 12.0013L2.66666 4.74172L4.7404 2.66797L12 9.92755Z"
                fill="currentColor"
            />
        </g>
    ),
});

export const ViewMoreIcon = createIcon({
    displayName: 'ViewMoreIcon',
    viewBox: '0 0 24 24',
    path: (
        <g transform="translate(-1133 -1946)">
            <path
                d="M4,2A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H4M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
                transform="translate(1133 1946)"
                fill="currentColor"
            />
            <rect
                width="2"
                height="2"
                transform="translate(1138 1951)"
                fill="currentColor"
            />
            <rect
                width="2"
                height="2"
                transform="translate(1138 1955)"
                fill="currentColor"
            />
            <rect
                width="2"
                height="2"
                transform="translate(1138 1959)"
                fill="currentColor"
            />
            <rect
                width="2"
                height="2"
                transform="translate(1138 1963)"
                fill="currentColor"
            />
            <rect
                width="10"
                height="2"
                transform="translate(1142 1951)"
                fill="currentColor"
            />
            <rect
                width="10"
                height="2"
                transform="translate(1142 1955)"
                fill="currentColor"
            />
            <rect
                width="10"
                height="2"
                transform="translate(1142 1959)"
                fill="currentColor"
            />
            <rect
                width="10"
                height="2"
                transform="translate(1142 1963)"
                fill="currentColor"
            />
        </g>
    ),
});

export const PoolsTimer = createIcon({
    displayName: 'PoolsTimer',
    viewBox: '0 0 25 25',
    path: (
        <path
            d="M17.8649 7.38466C16.4609 5.98066 14.6249 5.27266 12.7769 5.27266V12.4727L7.68886 17.5607C10.4969 20.3687 15.0569 20.3687 17.8769 17.5607C20.6849 14.7527 20.6849 10.1927 17.8649 7.38466ZM12.7769 0.472656C6.15286 0.472656 0.776855 5.84866 0.776855 12.4727C0.776855 19.0967 6.15286 24.4727 12.7769 24.4727C19.4009 24.4727 24.7769 19.0967 24.7769 12.4727C24.7769 5.84866 19.4009 0.472656 12.7769 0.472656ZM12.7769 22.0727C7.47286 22.0727 3.17686 17.7767 3.17686 12.4727C3.17686 7.16866 7.47286 2.87266 12.7769 2.87266C18.0809 2.87266 22.3769 7.16866 22.3769 12.4727C22.3769 17.7767 18.0809 22.0727 12.7769 22.0727Z"
            fill="currentColor"
        />
    ),
});

export const StakePlusIcon = (props) => {
    const plusColor = useColorModeValue('white', 'blue.900');

    return (
        <Icon viewBox="0 0 28 32" {...props}>
            <g>
                <g transform="translate(0, 2)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3117 4.98716C12.4948 5.02247 12.6464 5.15045 12.7119 5.32504L14.444 9.9402C14.548 10.2173 14.4077 10.5262 14.1306 10.6302C13.8535 10.7342 13.5446 10.5939 13.4406 10.3168L12.0159 6.52073L8.39108 10.4899C8.1915 10.7084 7.85255 10.7238 7.63402 10.5242C7.41548 10.3246 7.40011 9.98566 7.59969 9.76712L11.8145 5.15197C11.9403 5.01426 12.1286 4.95184 12.3117 4.98716Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.48149 14.2709C9.75858 14.1669 10.0675 14.3072 10.1715 14.5843L11.5965 18.3811L13.4603 16.3435C13.6601 16.1251 13.9991 16.11 14.2174 16.3098C14.4358 16.5095 14.4509 16.8485 14.2512 17.0669L11.7973 19.7494C11.6715 19.887 11.4832 19.9492 11.3002 19.9139C11.1172 19.8785 10.9657 19.7505 10.9002 19.576L9.16808 14.9609C9.06409 14.6838 9.20441 14.3749 9.48149 14.2709Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4626 16.3122L15.2524 14.3796L16.0388 15.1078L14.2489 17.0404L13.4626 16.3122Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.55257 9.8233C4.65267 9.67881 4.81728 9.5926 4.99306 9.5926H10.9689C11.1922 9.5926 11.3921 9.7311 11.4706 9.94018L13.0722 14.2078H17.8744L16.5446 10.6644H13.9135C13.6175 10.6644 13.3776 10.4244 13.3776 10.1285C13.3776 9.83252 13.6175 9.5926 13.9135 9.5926H16.9158C17.1391 9.5926 17.3391 9.7311 17.4175 9.94018L19.1496 14.5553C19.2114 14.7199 19.1885 14.9043 19.0884 15.0488C18.9883 15.1933 18.8237 15.2795 18.6479 15.2795H12.701C12.4777 15.2795 12.2778 15.141 12.1993 14.9319L10.5976 10.6644H5.76656L7.09644 14.2078H9.69865C9.99461 14.2078 10.2345 14.4477 10.2345 14.7436C10.2345 15.0396 9.99461 15.2795 9.69865 15.2795H6.72518C6.50186 15.2795 6.30194 15.141 6.22347 14.9319L4.49135 10.3168C4.42959 10.1522 4.45246 9.9678 4.55257 9.8233Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.27532 14.3809L13.519 9.76576L14.3079 10.4912L10.0643 15.1063L9.27532 14.3809Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6875 2.61964C6.3343 2.61964 1.99464 6.9593 1.99464 12.3125C1.99464 17.6658 6.3343 22.0054 11.6875 22.0054C17.0408 22.0054 21.3804 17.6658 21.3804 12.3125C21.3804 6.9593 17.0408 2.61964 11.6875 2.61964ZM0.208374 12.3125C0.208374 5.97277 5.34777 0.833374 11.6875 0.833374C18.0273 0.833374 23.1667 5.97277 23.1667 12.3125C23.1667 18.6523 18.0273 23.7917 11.6875 23.7917C5.34777 23.7917 0.208374 18.6523 0.208374 12.3125Z"
                        fill="currentColor"
                    />
                </g>
                <g transform="translate(15, 0)">
                    <circle
                        cx="6.75004"
                        cy="6.25004"
                        r="6.04167"
                        fill="currentColor"
                        transform="translate(0, 0.25)"
                    />
                    <path
                        d="M3.75 0.625L4.72908 3.27092L7.375 4.25L4.72908 5.22908L3.75 7.875L2.77092 5.22908L0.125 4.25L2.77092 3.27092L3.75 0.625Z"
                        fill={plusColor}
                        transform="translate(3, 2)"
                    />
                </g>
            </g>
        </Icon>
    );
};

export const StakeCircledIcon = createIcon({
    displayName: 'StakeCircledIcon',
    viewBox: '0 0 44 44',
    path: (
        <g>
            <circle cx="22" cy="22" r="22" fill="#1E1941" />
            <g transform="translate(6, 1) scale(1.75)">
                <path
                    d="M9.69568 6.29412C9.84237 6.32213 9.9638 6.42361 10.0163 6.56208L11.4039 10.2221C11.4872 10.4418 11.3748 10.6868 11.1528 10.7693C10.9308 10.8518 10.6833 10.7405 10.6 10.5207L9.45875 7.51031L6.55497 10.658C6.39509 10.8313 6.12357 10.8435 5.9485 10.6852C5.77344 10.5269 5.76113 10.2581 5.92101 10.0848L9.2974 6.42482C9.39815 6.31561 9.54899 6.26611 9.69568 6.29412Z"
                    fill="white"
                />
                <path
                    d="M7.42848 13.6565C7.65044 13.574 7.89792 13.6853 7.98122 13.905L9.12274 16.916L10.6158 15.3001C10.7759 15.127 11.0474 15.115 11.2223 15.2734C11.3973 15.4318 11.4094 15.7006 11.2493 15.8738L9.28363 18.0012C9.18284 18.1103 9.03203 18.1597 8.88541 18.1316C8.7388 18.1036 8.61744 18.0021 8.56497 17.8637L7.17741 14.2037C7.0941 13.9839 7.20651 13.7389 7.42848 13.6565Z"
                    fill="white"
                />
                <path
                    d="M10.6176 15.2753L12.0514 13.7427L12.6814 14.3202L11.2475 15.8529L10.6176 15.2753Z"
                    fill="white"
                />
                <path
                    d="M3.48003 10.1294C3.56022 10.0148 3.69208 9.94642 3.8329 9.94642H8.61998C8.79888 9.94642 8.95902 10.0563 9.02189 10.2221L10.3049 13.6064H14.1519L13.0865 10.7964H10.9788C10.7417 10.7964 10.5496 10.6061 10.5496 10.3714C10.5496 10.1367 10.7417 9.94642 10.9788 9.94642H13.3839C13.5628 9.94642 13.723 10.0563 13.7858 10.2221L15.1734 13.8821C15.2229 14.0126 15.2046 14.1588 15.1244 14.2734C15.0442 14.388 14.9123 14.4564 14.7715 14.4564H10.0075C9.82864 14.4564 9.6685 14.3465 9.60564 14.1807L8.32258 10.7964H4.45253L5.51786 13.6064H7.60244C7.83952 13.6064 8.03172 13.7967 8.03172 14.0314C8.03172 14.2661 7.83952 14.4564 7.60244 14.4564H5.22046C5.04156 14.4564 4.88141 14.3465 4.81855 14.1807L3.43099 10.5207C3.38151 10.3902 3.39984 10.244 3.48003 10.1294Z"
                    fill="white"
                />
                <path
                    d="M7.26332 13.7438L10.6628 10.0837L11.2948 10.659L7.89531 14.3191L7.26332 13.7438Z"
                    fill="white"
                />
            </g>
        </g>
    ),
});

export const StakeCircledOutlinedIcon = createIcon({
    displayName: 'StakeCircledIcon',
    viewBox: '0 0 46 46',
    path: (
        <g>
            <circle
                cx="23"
                cy="23"
                r="22"
                strokeWidth="1"
                stroke="currentColor"
                fill="transparent"
            />
            <g transform="translate(7, 2) scale(1.75)">
                <path
                    d="M9.69568 6.29412C9.84237 6.32213 9.9638 6.42361 10.0163 6.56208L11.4039 10.2221C11.4872 10.4418 11.3748 10.6868 11.1528 10.7693C10.9308 10.8518 10.6833 10.7405 10.6 10.5207L9.45875 7.51031L6.55497 10.658C6.39509 10.8313 6.12357 10.8435 5.9485 10.6852C5.77344 10.5269 5.76113 10.2581 5.92101 10.0848L9.2974 6.42482C9.39815 6.31561 9.54899 6.26611 9.69568 6.29412Z"
                    fill="currentColor"
                />
                <path
                    d="M7.42848 13.6565C7.65044 13.574 7.89792 13.6853 7.98122 13.905L9.12274 16.916L10.6158 15.3001C10.7759 15.127 11.0474 15.115 11.2223 15.2734C11.3973 15.4318 11.4094 15.7006 11.2493 15.8738L9.28363 18.0012C9.18284 18.1103 9.03203 18.1597 8.88541 18.1316C8.7388 18.1036 8.61744 18.0021 8.56497 17.8637L7.17741 14.2037C7.0941 13.9839 7.20651 13.7389 7.42848 13.6565Z"
                    fill="currentColor"
                />
                <path
                    d="M10.6176 15.2753L12.0514 13.7427L12.6814 14.3202L11.2475 15.8529L10.6176 15.2753Z"
                    fill="currentColor"
                />
                <path
                    d="M3.48003 10.1294C3.56022 10.0148 3.69208 9.94642 3.8329 9.94642H8.61998C8.79888 9.94642 8.95902 10.0563 9.02189 10.2221L10.3049 13.6064H14.1519L13.0865 10.7964H10.9788C10.7417 10.7964 10.5496 10.6061 10.5496 10.3714C10.5496 10.1367 10.7417 9.94642 10.9788 9.94642H13.3839C13.5628 9.94642 13.723 10.0563 13.7858 10.2221L15.1734 13.8821C15.2229 14.0126 15.2046 14.1588 15.1244 14.2734C15.0442 14.388 14.9123 14.4564 14.7715 14.4564H10.0075C9.82864 14.4564 9.6685 14.3465 9.60564 14.1807L8.32258 10.7964H4.45253L5.51786 13.6064H7.60244C7.83952 13.6064 8.03172 13.7967 8.03172 14.0314C8.03172 14.2661 7.83952 14.4564 7.60244 14.4564H5.22046C5.04156 14.4564 4.88141 14.3465 4.81855 14.1807L3.43099 10.5207C3.38151 10.3902 3.39984 10.244 3.48003 10.1294Z"
                    fill="currentColor"
                />
                <path
                    d="M7.26332 13.7438L10.6628 10.0837L11.2948 10.659L7.89531 14.3191L7.26332 13.7438Z"
                    fill="currentColor"
                />
            </g>
        </g>
    ),
});
