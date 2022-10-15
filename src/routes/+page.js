/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const url = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await fetch(url);

    return response;
    
}