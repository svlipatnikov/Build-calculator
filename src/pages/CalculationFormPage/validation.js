const twoDecimalPlacesRegex = /^([0-9]+(\.[0-9][0-9]?)?)$/;
const positiveIntegerRegex = /^[1-9]+$/;

export default (title) => {
  switch (title) {
    case 'frame.number_of_floors':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 1, message: 'Минимальное количество этажей 1' },
        max: { value: 3, message: 'Максимальное количество этажей 3' },
        pattern: { value: positiveIntegerRegex, message: 'Только целые числа' },
        valueAsNumber: true,
      };

    case 'frame.height_of_one_floor':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 2, message: 'Минимальная высота этажа 2' },
        max: { value: 3, message: 'Максимальная высота этажа 3' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'frame.perimeter_of_external_walls':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 8, message: 'Минимальный периметр 8' },
        max: { value: 200, message: 'Максимальный периметр 200' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'frame.base_area':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 5, message: 'Минимальная площадь 5' },
        max: { value: 400, message: 'Максимальная площадь 400' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'frame.internal_wall_length':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 0.1, message: 'Минимальная длина 0,1' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'window.heightWindow':
    case 'doorIn.heightDoorIn':
    case 'doorOut.heightDoorOut':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 0.1, message: 'Минимальная высота 0,1' },
        max: { value: 3, message: 'Максимальная высота 3' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'window.wigthWindow':
    case 'doorIn.wigthDoorIn':
    case 'doorOut.wigthDoorOut':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        min: { value: 0.1, message: 'Минимальная ширина 0,1' },
        pattern: { value: twoDecimalPlacesRegex, message: 'Округлите до сотых' },
        valueAsNumber: true,
      };

    case 'window.countWindow':
    case 'doorIn.countDoorIn':
    case 'doorOut.countDoorOut':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        pattern: { value: positiveIntegerRegex, message: 'Количество может быть только целым и положительным' },
        valueAsNumber: true,
      };

    case 'frame.overlap_thickness':
    case 'frame.internal_wall_thickness':
    case 'frame.external_wall_thickness':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        valueAsNumber: true,
      };

    default:
      return {
        required: { value: true, message: 'Это поле обязательно' },
      };
  }
};