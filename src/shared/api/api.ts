import { TPictures } from "../types/types";

class MainApi {
    #url = "";
    async getPictures(): Promise<TPictures> {
        return [
            {
                id: 1,
                name: '«Сотворение Адама»',
                priceDetails: {
                    currency: 'USD',
                    currentPrice: 2323,
                },
                author: 'Микеланджело',
                images: ['img 2.png', 'img (1).png'],
                description: 'dsaads',
            }, {
                id: 2,
                name: '«Тайная вечеря»',
                priceDetails: {
                    currency: 'RUB',
                    currentPrice: 2323,
                },
                author: 'Леонардо да Винчи',
                images: ['img (3).png', 'img (1).png'],
                description: 'dsaads',
                isSold: true,
            },
            {
                id: 3,
                name: '«Урок анатомии»',
                priceDetails: {
                    currency: 'RUB',
                    oldPrice: 2444,
                    currentPrice: 2323,
                },
                author: 'Рембрандт',
                images: ['img (1).png', 'img (3).png'],
                description: 'dsaads',
            }, {
                id: 4,
                name: '«Рождение Венеры»',
                priceDetails: {
                    currency: 'RUB',
                    currentPrice: 2323,
                },
                author: 'Сандро Боттичелли',
                images: ['img (4).png', 'img (1).png', 'img 2.png'],
                description: 'dsaads',
            },
        ];
    }

    async buyPicture(idPicture: number): Promise<boolean> {
        // mock data
        return new Promise((res) => {
            setTimeout(() => { res(true) }, 2000);
        });
    }

}

export const mainApi = new MainApi();