export interface INetwork {
    code: string,
    server: string,
    clientOrigin?: string
    matcher?: string
}

export enum ENetworkByte {
    MAINNET = 65,   // W
}

export const networks = {
    'mainnet': {
        server: 'https://node.youngmarket.net/',
        code: 'A',
        clientOrigin: 'https://youngmarket.net/signer/'
    },
};

export const Network = {

    getNetworkByByte: (byte: number): INetwork | undefined => {
        return networks.mainnet;
    }

}
