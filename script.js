import { tg, mainBtn, backBtn, settingsBtn } from './constants.js'
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

// tg.MainButton.showProgress()

// when main page
mainBtn.onClick(goToSecondPage)
backBtn.onClick(goFromSecondPage)