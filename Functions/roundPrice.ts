export function roundPrice(price: number, format: string = '%PRICE% SEK'): string {
    const roundedPrice = price.toFixed(2);
    return format.replace('%PRICE%', roundedPrice);
}
