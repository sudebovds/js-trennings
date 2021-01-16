import { getSearchTermHandler, retriveSearchResults } from "./dataFunctions";
import { setSearchFocusHandler, showClearTextButton, clearSearchText, clearPushListener } from "./searchBar";
import { buildSearchResults, clearStatsLine, deleteSearchResults, setStatsLine } from "./searchResults";

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete'){
        initApp();
    }
});

const initApp = () => {
    setSearchFocusHandler('search');

    const search = document.getElementById('search');
    search.addEventListener('input', showClearTextButton);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown', clearPushListener);

    const form = document.querySelector('[data-form="form"]');

    form.addEventListener('submit', submitTheSearchHandler);
}

//Workflow handlers

const submitTheSearchHandler = (event) => {
    event.preventDefault();

    deleteSearchResults('searchResults');

    processTheSearchHandler();

    setSearchFocusHandler('search');
}

//Procedural

const processTheSearchHandler = async () => {
   
    clearStatsLine('stats');

    const searchTerm = getSearchTermHandler();

    if(searchTerm === '') return;

    const resultArray = await retriveSearchResults(searchTerm);

    if(resultArray.length) buildSearchResults(resultArray);

    setStatsLine(resultArray.length, 'stats');
}

