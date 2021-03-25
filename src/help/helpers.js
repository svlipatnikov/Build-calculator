export const groupBy = (array, property) => array.reduce((acc, item) => {
  if (!acc[item[property]]) {
    acc[item[property]] = [];
  }

  acc[item[property]].push(item);

  return acc;
}, {});

export const getObjPropertyByPath = (obj, path) => path.split('.').reduce((acc, prop) => acc && acc[prop], obj);