import { DateTime } from './luxon.min.js';

const date = () => {
  const now = DateTime.now();
  const display = now.toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.header__date').innerHTML = display;
};

export default date;
