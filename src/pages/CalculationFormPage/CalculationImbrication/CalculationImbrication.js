/* eslint-disable camelcase */
import React from 'react';
import BoxFormSelect from '../BoxFormSelect';

const CalculationOutWall = () => (
  <>
    <BoxFormSelect
      name="Толщина перекрытия"
      title="frame.overlap_thickness"
      currency="externalWall"
    />
    <BoxFormSelect
      name="ОСБ"
      title="frame.OSB_for_base_area"
      currency="osb"
    />
    <BoxFormSelect
      name="Парогидроизоляция"
      title="frame.steam_waterproofing_base_area"
      currency="waterproofing"
    />
    <BoxFormSelect
      name="Ветрозащита"
      title="frame.windscreen_base_area"
      currency="windscreen"
    />
    <BoxFormSelect
      name="Утеплитель"
      title="frame.insulation_base_area"
      currency="insulation"
    />
  </>
);

export default CalculationOutWall;
