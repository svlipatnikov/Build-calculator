/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { osb, insulation, waterproofing, windscreen } from '../const';

import customerNewValueCalc from '../../../redux/selectors/customerNewCalcSelector';
import { setValueNewCalc } from '../../../redux/actions/customerNewCalcAction';

import BoxForm from '../BoxForm';
import BoxFormSelect from '../BoxFormSelect';

const CalculationOutWall = () => {
  const dispatch = useDispatch();

  const {
    overlap_thickness,
    OSB_for_base_area,
    steam_waterproofing_base_area,
    windscreen_base_area,
    insulation_base_area,
  } = useSelector(customerNewValueCalc);

  const handleChangeValue = (prop) => (e) => {
    dispatch(setValueNewCalc(prop, e.target.value));
  };

  return (
    <>
      <BoxForm
        name="Толщина перекрытия"
        value={overlap_thickness}
        title="overlap_thickness"
        handleChangeValues={handleChangeValue}
        measure="мм"
      />
      <BoxFormSelect
        name="ОСБ"
        value={OSB_for_base_area}
        title="OSB_for_base_area"
        handleChangeValues={handleChangeValue}
        currencies={osb}
      />
      <BoxFormSelect
        name="Парогидроизоляция"
        value={steam_waterproofing_base_area}
        title="steam_waterproofing_base_area"
        handleChangeValues={handleChangeValue}
        currencies={waterproofing}
      />
      <BoxFormSelect
        name="Ветрозащита"
        value={windscreen_base_area}
        title="windscreen_base_area"
        handleChangeValues={handleChangeValue}
        currencies={windscreen}
      />
      <BoxFormSelect
        name="Утеплитель"
        value={insulation_base_area}
        title="insulation_base_area"
        handleChangeValues={handleChangeValue}
        currencies={insulation}
      />
    </>
  );
};

export default CalculationOutWall;
