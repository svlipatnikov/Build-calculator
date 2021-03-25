import { SET_VALUE_NEW_CALC, CLEAR_VALUE_NEW_CALC } from '../actions/types';

const initialState = {
  adress_object_construction: '',
  number_of_floors: '',
  height_of_one_floor: '',
  perimeter_of_external_walls: '',
  base_area: '',
  external_wall_thickness: '50',
  internal_wall_length: '',
  OSB_for_external_walls: 'OSB 9 мм',
  steam_waterproofing_external_walls: 'Ондутис',
  windscreen_external_walls: 'Гидро-ветрозащита Тип А',
  insulation_external_walls: 'Кнауф ТеплоКнауф 100 мм',
  // Толщина внутренних стен
  internal_wall_thickness: '50',
  // ОСБ для внутренних стен
  OSB_for_interior_walls: 'OSB 9 мм',
  // расчет перекрытий
  overlap_thickness: '',
  OSB_for_base_area: 'OSB 9 мм',
  steam_waterproofing_base_area: 'Ондутис',
  windscreen_base_area: 'Гидро-ветрозащита Тип А',
  insulation_base_area: 'Кнауф ТеплоКнауф 100 мм',
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
