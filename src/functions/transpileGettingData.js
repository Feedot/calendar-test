export default array => {
  const arrIndexes = array.reduce((arr, item) => {
    if (item.length) {

      const indexes = item.reduce((hours, { bt, et }) => {
        let first = bt / 60, second = Math.round(et / 60);
        for (let i = first; i < second; i++) hours.push(i); return hours }, []);
      arr.push(indexes);

    } else arr.push(false);

    return arr }, []);

  return arrIndexes;
};
