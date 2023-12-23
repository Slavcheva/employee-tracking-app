function convertStrToArr(str) {
    return str.split(/(\r\n|\r|\n)/g)
        .filter(x => x.trim().length !== 0);
}

function convertArrToMatrix(arr) {
    return arr.map(x => x
        .split(',')
        .map(cell => {
            return cell.trim();
        }));
}

function removeEmptyElements(arr) {
    return arr.map(row=>row.filter(e=>e.length!==0));
}

function sanitizeData(str) {
    const arrData = convertStrToArr(str);
    const convertedData = convertArrToMatrix(arrData)

    return removeEmptyElements(convertedData);

}

export default sanitizeData;