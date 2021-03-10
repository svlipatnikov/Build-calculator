import React from 'react';

import BoxForm from '../BoxForm';
import BoxFormSelect from '../BoxFormSelect';

const CalculationOutWall = () => {
  return (
    <>
      <BoxForm name={'Толщина перекрытия'} />
      <BoxFormSelect name={'ОСБ'} />
      <BoxFormSelect name={'Парогидроизоляция'} />
      <BoxFormSelect name={'Ветрозащита'} />
      <BoxFormSelect name={'Утеплитель'} />
    </>
  );
};

export default CalculationOutWall;
