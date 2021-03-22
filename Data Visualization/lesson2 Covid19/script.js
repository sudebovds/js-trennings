const url = `https://gist.githubusercontent.com/sudebovds/0620df3655bfe3638db025cd5e47da50/raw/cssColorsData.csv`;

async function loadData(url){
    const response = await fetch(url)
    const data = await response.text();

    console.log(data);
}

loadData(url);