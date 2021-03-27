const cyrillicPattern = /^[\u0400-\u04FF]+$/;

export default (field) => {
  switch (field) {
    case 'lastName':
    case 'firstName':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        maxLength: { value: 255, message: 'Максимальное количество символов 255' },
        pattern: { value: cyrillicPattern, message: 'Только кириллица' },
      };

    case 'secondName':
      return {
        maxLength: { value: 255, message: 'Максимальное количество символов 255' },
        pattern: { value: cyrillicPattern, message: 'Только кириллица' },
      };

    case 'phone':
      return {
        required: { value: true, message: 'Это поле обязательно' },
        maxLength: { value: 20, message: 'Максимальное количество символов 20' },
        pattern: { value: /^((\+7|7|8)+([0-9]){10})$/, message: 'Неверный формат телефона' },
      };

    case 'email':
      return {
        maxLength: { value: 255, message: 'Максимальное количество символов 255' },
        pattern: {
          // eslint-disable-next-line
          value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Неверный формат почты',
        },
      };

    case 'adress':
      return {
        maxLength: { value: 1000, message: 'Максимальное количество символов 1000' },
        pattern: { value: /^[\u0400-\u04FF .,/()0-9]+$/, message: 'Введены недопустимые символы' },
      };

    default:
      return {};
  }
};