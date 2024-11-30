export interface IPicture {
    id: number,
    name: string;
    author: string;
    priceDetails: {
        currency: 'USD' | 'RUB',
        oldPrice?: number;
        currentPrice: number;
    }
    images?: string[];
    description: string;
    isSold?: boolean;
}

export type TPictures = IPicture[];