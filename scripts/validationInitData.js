import { tg } from '../constants.js'

export function validationInitData() {
  fetch('https://127.0.0.1:3001/validateInitData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ initData: tg.initData })
  })
    .then(res => {
      if (!res.ok) throw new Error('Something went wrong.')
      return res.json()
    })
    .then(initValidatedData => {
      const userData = initValidatedData.data
    })
    .catch(err => {
      console.error(err)
    })
}