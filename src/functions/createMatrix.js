import transpileData from "./transpileGettingData";

export default function CreateMatrix(payload) {
  let matrix = new Array(7).fill(true).reduce(arr => {
      arr.push(new Array(24).fill(false).slice());
      return arr; }, []),
    trueIndexes = transpileData(Object.values(payload));
  trueIndexes.map((item, dayIndex) => {
    if (item) item.map(hour => matrix[dayIndex][hour] = !matrix[dayIndex][hour])});
  return matrix;
}
