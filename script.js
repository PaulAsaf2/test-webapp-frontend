import { tg, mainBtn, backBtn, settingsBtn, bioMan } from './constants.js'
import { goToSecondPage, goFromSecondPage } from './scripts/pagination.js'
// import { validationInitData } from './scripts/validationInitData.js'

// validationInitData()

tg.headerColor = '#8dd990'

mainBtn.setParams({
  is_visible: true,
  color: '#214d21',
  text_color: "#e9f7e9"
})
settingsBtn.show()

// tg.showAlert(`
//   Before:
//   bioMan.isInited: ${bioMan.isInited},
//   bioMan.isBiometricAvailable: ${bioMan.isBiometricAvailable}
// `)
console.log(
  bioMan.isInited,
  bioMan.isBiometricAvailable
);

bioMan.init()

console.log(
  bioMan.isInited,
  bioMan.isBiometricAvailable
);
tg.showAlert(`
  After:
  bioMan.isInited: ${bioMan.isInited},
  bioMan.isBiometricAvailable: ${bioMan.isBiometricAvailable}
`)

// when main page
mainBtn.onClick(goToSecondPage)
backBtn.onClick(goFromSecondPage)