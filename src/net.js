const net = {
    network: [
        {
            id: 1,
            chainID: '1',
            rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            name: 'Ethereum Mainnet',
            icon: 'network-icon network-icon-mainnet',
        },
        {
            id: 2,
            chainID: '56',
            rpcUrl: 'https://bsc-dataseed.binance.org/',
            name: 'Binance Smart Chain',
            icon: 'network-icon network-icon-binance',
        },

        {
            id: 6,
            chainID: '137',
            rpcUrl: "https://polygon-mainnet.infura.io/v3/512aa5e452cd4d549689b1be18a47853", //'https://rpc-mainnet.matic.network', //https://polygon-mainnet.infura.io/v3/512aa5e452cd4d549689b1be18a47853
            name: 'Matic Network',
            icon: 'network-icon network-icon-matic',
        },

        
        
    ]
};

export default net;