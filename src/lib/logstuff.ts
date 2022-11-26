export interface counterStuff {
    exchangePublicToken: number;
    createLinkToken: number;
    increase: (str: string) => void;
}

export const counter: counterStuff = {
    exchangePublicToken: 0,
    createLinkToken: 0,
    increase: (str: string) => { counter[str]++; }
};