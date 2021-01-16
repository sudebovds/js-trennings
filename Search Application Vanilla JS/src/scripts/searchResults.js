export const deleteSearchResults = (id = 'searchResults') => {
    const parentElement = document.getElementById(id);
    let child = parentElement.lastElementChild;

    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

export const buildSearchResults = (resultArray) => {
    resultArray.map((result) => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement('div');

        resultContents.classList.add('result__item_contents');
        if(result.img){
            const resultImage = createResultImage(result);
            resultContents.append(resultImage);
        }

        const resultText = createResultText(result);
        resultContents.append(resultText);

        resultItem.append(resultContents);

        const searchResults = document.getElementById('searchResults');
        searchResults.append(resultItem);
    })
};

const createResultItem = (result) => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result__item');

    const resultTitle = document.createElement('div');
    resultTitle.classList.add('result__item_title');

    const link = document.createElement('a');
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = '_blank';
    resultTitle.append(link);

    resultItem.append(resultTitle);

    return resultItem;
}

const createResultImage = (result) => {
    const resultImage = document.createElement('div');
    resultImage.classList.add('result__item_image');

    const img = document.createElement('img');
    img.src = result.img;
    img.alt = result.title;
    img.classList.add('item__img');
    resultImage.append(img);

    return resultImage;
}

const createResultText = (result) => {
    const resultText = document.createElement('div');
    resultText.classList.add('result__item_text');

    const resultDescription = document.createElement('p');
    resultDescription.classList.add('result__item_description');
    resultDescription.textContent = result.extract;
    
    resultText.append(resultDescription);

    return resultText;
}

export const clearStatsLine = (id = 'stats') => {
    document.getElementById(id).textContent = '';
}

export const setStatsLine = (numberOfResults, id = 'stats') => {
    const statLine = document.getElementById(id);

    if(numberOfResults){
        statLine.textContent = `Displaying ${numberOfResults} results.`;
    }else{
        statLine.textContent = 'Sorry, no results';
    }
}

