import { SET_VALUE_NEW_CALC, CLEAR_VALUE_NEW_CALC } from '../actions/types';

const initialState = {
  adress_object_construction: '',
  number_of_floors: '',
  height_of_one_floor: '',
  perimeter_of_external_walls: '',
  base_area: '',
  external_wall_thickness: '',
  internal_wall_length: '',
  OSB_for_external_walls: '',
  steam_waterproofing_external_walls: '',
  windscreen_external_walls: '',
  insulation_external_walls: '',
  // Толщина внутренних стен
  internal_wall_thickness: 2,
  // ОСБ для внутренних стен
  OSB_for_interior_walls: '',
  // расчет перекрытий
  overlap_thickness: '',
  OSB_for_base_area: '',
  steam_waterproofing_base_area: '',
  windscreen_base_area: '',
  insulation_base_area: '',
  step_of_racks: 0.6,
  // двери и окна
  type: '',
  wigthWindow: '',
  heightWindow: '',
  countWindow: '',
  wigthDoorOut: '',
  heightDoorOut: '',
  countDoorOut: '',
  wigthDoorIn: '',
  heightDoorIn: '',
  countDoorIn: '',
};

const getValueNewCalc = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE_NEW_CALC:
      return { ...state, [action.fieldName]: action.payload };
    case CLEAR_VALUE_NEW_CALC:
      return initialState;
    default:
      return state;
  }
};

export default getValueNewCalc;
