/**
 * @param title required title to shorten
 * @param length optional paramater - default 50
 * 
 * @returns string
 */
export function shortenTitle(title: string, length = 50) {
    return title?.length > length
        ? `${title.slice(0, length)}...`
        : title;
}