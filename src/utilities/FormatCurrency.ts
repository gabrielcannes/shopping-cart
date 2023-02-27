const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency:'USD', style: 'currency'})

export function FormatCurrency(price: number) {
    return CURRENCY_FORMATTER.format(price)
}