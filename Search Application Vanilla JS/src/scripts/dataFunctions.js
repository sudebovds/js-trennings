export const getSearchTermHandler = (id = 'search') => {
    const rawSearchTerm = document.getElementById(id).value.trim();
    const regex = /[ ]{2,}/gi; // checking at two or more ws
    const searchTerm = rawSearchTerm.replaceAll(regex, ' ');

    return searchTerm;
}

export const retriveSearchResults = async (searchTerm) => {
    const wikiSaerchString = getWikiSearchString(searchTerm);
    const wikiSearchResult = await requestData(wikiSaerchString);
    let resultArray = [];

    if(wikiSearchResult.hasOwnProperty('query')){
        resultArray =  processWikiResult(wikiSearchResult.query.pages);
    }

    return resultArray;
}

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChar();
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString = encodeURI(rawSearchString);

    return searchString;
}

const getMaxChar = () => {
    const width = window.innerWidth || document.body.clientWidth;
    let maxChar;

    width < 414 ? maxChar = 65 : null;
    width >= 414 && width < 1400 ? maxChar = 100 : null;
    width >= 1400 ? maxChar = 130 : null;

    return maxChar;
}

const requestData = async (searchString) => {
    try{
        const response = await fetch(searchString)
        const data = await response.json();

        return data;
    }
    catch(e){
        console.error(e);
    }
}

const processWikiResult = (results) => {
    const resultArray = [];

    Object.keys(results).map((key) => {
        const id = key;
        const title = results[key].title;
        const extract = results[key].extract;
        const img = results[key].hasOwnProperty('thumbnail')
            ? results[key].thumbnail.source
            : null;

        const item = {
            id,
            title,
            extract,
            img
        }

        resultArray.push(item);
    });

    return resultArray;
}