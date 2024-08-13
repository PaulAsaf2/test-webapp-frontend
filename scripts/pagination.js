import { mainBtn, backBtn, main, second, third, tg } from '../constants.js'

export function goToSecondPage() {
  second.classList.add('show')
  main.classList.add('hide')

  backBtn.show()
  tg.HapticFeedback.impactOccurred('medium')

  mainBtn.offClick(goToSecondPage)
  mainBtn.onClick(goToThirdPage)
}

function goToThirdPage() {
  second.classList.remove('show')
  third.classList.add('show')

  tg.HapticFeedback.impactOccurred('medium')

  backBtn.offClick(goFromSecondPage)
  backBtn.onClick(goFromThirdPage)
}

export function goFromSecondPage() {
  second.classList.remove('show')
  main.classList.remove('hide')

  backBtn.hide()
  tg.HapticFeedback.impactOccurred('light')

  mainBtn.offClick(goToThirdPage)
  mainBtn.onClick(goToSecondPage)
}

function goFromThirdPage() {
  third.classList.remove('show')
  second.classList.add('show')

  tg.HapticFeedback.impactOccurred('light')

  backBtn.offClick(goFromThirdPage)
  backBtn.onClick(goFromSecondPage)
}

