import { getSearchTermHandler } from "./dataFunctions";
import { setSearchFocusHandler } from "./searchBar";

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete'){
        initApp();
    }
});

const initApp = () => {
    //set the focus

    //3 listeners clear text

    const form = document.querySelector('[data-form="form"]');

    form.addEventListener('submit', submitTheSearchHandler);
}

//Workflow handlers

const submitTheSearchHandler = (event) => {
    event.preventDefault();

    //delete search results

    processTheSearchHandler();

    setSearchFocusHandler('#search');
}

//Procedural

const processTheSearchHandler = async () => {
    //clear the stats line

    const searchTerm = getSearchTermHandler();

    if(searchTerm('#search') === '') return;

    const resultArray = await retriveSearchResults(searchTerm);
}

