import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import slider from './modules/slider';
import forms from './modules/forms';
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
  // Изменил значение, чтобы не отвлекало
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer();
  cards();;
  slider();
  forms('.form', modalTimerId);
  calc();
});
