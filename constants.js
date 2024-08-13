const tg = window.Telegram.WebApp
const mainBtn = tg.MainButton
const backBtn = tg.BackButton
const settingsBtn = tg.SettingsButton
const bioMan = tg.BiometricManager

const main = document.querySelector('.main')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

export {
  tg,
  mainBtn,
  backBtn,
  main,
  second,
  third,
  settingsBtn,
  bioMan,
}