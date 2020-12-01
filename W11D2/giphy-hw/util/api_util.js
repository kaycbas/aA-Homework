
export const fetchSearchGiphys = (searchTerm) => {
    const apiKey = 'NsJmr3rTAwbDV9pULKyQuuzI53KwDhDU';
    return $.ajax({
        method: 'get',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=2`
    })
}