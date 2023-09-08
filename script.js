/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.'),
);
