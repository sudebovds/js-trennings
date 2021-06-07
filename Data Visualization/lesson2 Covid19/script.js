const url = `https://gist.githubusercontent.com/sudebovds/0620df3655bfe3638db025cd5e47da50/raw/cssColorsData.csv`;

async function loadData(url){
    const response = await fetch(url)
    const data = await response.text();

    const parsedData = d3.csvParse(data);

    console.log(parsedData);
    console.log(`Weight of data is ${Math.round(data.length / 1024)} kB`);
}

loadData(url);