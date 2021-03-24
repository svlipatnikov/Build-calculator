const groupBy = (array, property) => array.reduce((acc, item) => {
  if (!acc[item[property]]) {
    acc[item[property]] = [];
  }

  acc[item[property]].push(item);

  return acc;
}, {});

export default groupBy;