export const currencyFormatter = (data: number, currency: string) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency', currency, minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(data)
}