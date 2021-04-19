import { csvFormat } from "d3-dsv";

const Message = data => {
    let message = '';
    message = message + `${Math.round(csvFormat(data).length / 1024)} Kb `;
    message += `${data.length} rows `;
    message += `${data.columns.length} columns\n`;

    return message;
}

export default Message; 