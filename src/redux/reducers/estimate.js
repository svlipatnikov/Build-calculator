const initialState = {
  list: [
    { param: 'Доска на стойки внутренние', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
    { param: 'Количество стоек на внутренние стены', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
    { param: 'Количество досок на внешние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
    { param: 'Количество досок на внутренние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
    { param: <b>Общий объем пиломатериала для основных элементов каркаса</b>, size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  ],
};

export default function estimateReducer(state = initialState, action) {
  switch (action.type) {
    default: 
      return state;
  }
}