import { tg, mainBtn, backBtn, settingsBtn, bioMan } from './constants.js'
import { goToSecondPage, goFromSecondPage } from './scripts/pagination.js'
// import { validationInitData } from './scripts/validationInitData.js'

// validationInitData()

tg.setHeaderColor('#8dd990')
tg.enableClosingConfirmation()

mainBtn.setParams({
  is_visible: true,
  color: '#214d21',
  text_color: "#e9f7e9"
})
settingsBtn.show()

bioMan.init(() => {
  tg.showAlert(`
    bioMan.isInited: ${bioMan.isInited},
    bioMan.isBiometricAvailable: ${bioMan.isBiometricAvailable}
  `)
})

// when main page
mainBtn.onClick(goToSecondPage)
backBtn.onClick(goFromSecondPage)