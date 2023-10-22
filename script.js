const serverData = [
  {
    id: '1',
    userId: '4',
    serverName: 'Название сервера 1',
    status: 'stop',
    browser: 'mozilla',
    taskName: 'Проект цвет круг по краям новый генератор',
    setting: '',
    progress: '97%',
    doneSuccessfully: '55',
    numberOfTries: '',
    streams: '1',
    maximum: '1',
  },
  {
    id: '1',
    userId: '4',
    serverName: 'Название сервера 1',
    status: 'run',
    browser: 'chrome',
    taskName: 'Обработчик 1',
    setting: '',
    progress: '80%',
    doneSuccessfully: '88',
    numberOfTries: '0',
    streams: '0',
    maximum: '2',
  },
  {
    id: '2',
    userId: '5',
    serverName: 'Название сервера 2',
    status: 'stop',
    browser: 'chrome',
    taskName: 'Обработчик 2 этап v2',
    setting: '',
    progress: '100%',
    doneSuccessfully: '16',
    numberOfTries: '5',
    streams: '2',
    maximum: '3',
  },
  {
    id: '2',
    userId: '5',
    serverName: 'Название сервера 2',
    status: 'stop',
    browser: 'mozilla',
    taskName: 'Переключатель 3',
    setting: '',
    progress: '99%',
    doneSuccessfully: '155',
    numberOfTries: '1',
    streams: '3',
    maximum: '5',
  },
]

function addTable(table) {
  const products = document.querySelector('.products')
  products.append(table)
}

function addRow(rowElement, tableElement) {
  const tableBody = tableElement.querySelector('.table_body')
  tableBody.append(rowElement)
}

// КОНТЕКСТНОЕ МЕНЮ ---------------------

function closeContextMenu() {
  document.querySelector('.context-menu').style.display = 'none'
  document.querySelector('.popup').style.display = 'none'

  const tableRow = Array.from(document.querySelectorAll('.table_row'))
  tableRow.forEach((row) => {
    row.classList.remove('table_row-select')
  })
}

(function () {
  const popup = document.querySelector('.popup')
  popup.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
      closeContextMenu()
    }
  })
})()

function contextMenuHandler() {
  const contextMenu = document.querySelector('.context-menu')
  contextMenu.addEventListener('contextmenu', function(event) {
    event.preventDefault()
  })

  const menuItems = Array.from(document.querySelectorAll('.context-menu_item'))
  menuItems.forEach(item => item.addEventListener('click', closeContextMenu.bind(null)))
}

function openContextMenu(event) {
  event.preventDefault()

  event.currentTarget.classList.add('table_row-select')

  const popup = document.querySelector('.popup')
  popup.style.display = 'block'

  const contextMenu = document.querySelector('.context-menu')
  contextMenu.style.display = 'block'
  contextMenu.style.left = event.pageX + 'px'
  contextMenu.style.top = event.pageY + 'px'

  contextMenuHandler()
}

// --------------------------------------

function createRow(tableElement, dbRow) {
  const rowTemplate = document.querySelector('#row').content
  const rowElement = rowTemplate.querySelector('tr').cloneNode(true)

  const status = rowElement.querySelector('.td-status')
  const browser = rowElement.querySelector('.td-browser')
  const name = rowElement.querySelector('.td-name')
  const setting = rowElement.querySelector('.td-setting')
  const progress = rowElement.querySelector('.td-progress')
  const done = rowElement.querySelector('.td-done')
  const tries = rowElement.querySelector('.td-tries')
  const streams = rowElement.querySelector('.td-streams')
  const maximum = rowElement.querySelector('.td-maximum')

  status.textContent = dbRow.status
  browser.textContent = dbRow.browser
  name.textContent = dbRow.taskName
  setting.textContent = dbRow.setting
  progress.textContent = dbRow.progress
  done.textContent = dbRow.doneSuccessfully
  tries.textContent = dbRow.numberOfTries
  streams.textContent = dbRow.streams
  maximum.textContent = dbRow.maximum

  rowElement.addEventListener('contextmenu', openContextMenu.bind(null))

  addRow(rowElement, tableElement)
}

function createTable(dbRow) {
  const tableTemplate = document.querySelector('#table').content
  const tableElement = tableTemplate.querySelector('.table').cloneNode(true)
  const tableTitleRow = tableElement.querySelector('.table_title-row')
  const tableTitleText = tableElement.querySelector('.table_title-text')
  // const tableTitle = tableElement.querySelector('.table_title')
  const mainTable = tableElement.querySelector('.main-table-out-container')

  tableElement.id = dbRow.id
  tableTitleText.textContent = dbRow.serverName

  tableTitleRow.addEventListener('click', function () {
    mainTable.classList.toggle('main-table-out-container-show')
  })

  addTable(tableElement)
  createRow(tableElement, dbRow)
}

function searchCurrentTable() {
  serverData.forEach((dbRow) => {
    const allTables = Array.from(document.querySelectorAll('.table'))
    if (allTables.length < 1) {
      createTable(dbRow)
      return
    }

    const currentTable = allTables.find((tableNode) => {
      return tableNode.id === dbRow.id
    })

    if (typeof currentTable === 'undefined') {
      createTable(dbRow)
      return
    } else {
      createRow(currentTable, dbRow)
    }
  })
}

searchCurrentTable()




// function handleOpenTable(table) {
//   table.classList.toggle('main-table-out-container-show');
// }

// zennoPosterTitle.addEventListener('click', function () {
//   handleOpenTable(posterTable);
// })

// zennoBoxTitle.addEventListener('click', function () {
//   handleOpenTable(boxTable);
// })

// document.getElementById('btn_setting').click()

// // открытие внутренних вкладок
// function openTab(event, tab) {
//   let tabContent = document.querySelectorAll('.tab')
//   for (let i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = 'none'
//   }

//   document.getElementById(tab).style.display = 'block'
//   console.log(document.querySelector('.tab_button').classList.contains('tab_button_active'));
//   console.log(event.currentTarget.id);
//   event.currentTarget.classList.add('tab_button_active')
// }


// const serverData = [
//   {
//     id: '1',
//     userId: '1',
//     name: 'Название сервера 1',
//     status: 'stop',
//     browser: 'mozilla',
//     taskName: 'Проект цвет круг по краям новый генератор',
//     progress: '100%',
//     doneSuccessfully: '830',
//     numberOfTries: '2',
//     streams: '0',
//     maximum: '1',
//   },
//   {
//     id: '2',
//     userId: '1',
//     name: 'Название сервера 2',
//     status: 'stop',
//     browser: 'chrome',
//     taskName: 'Обработчик 2 этап v2',
//     progress: '100%',
//     doneSuccessfully: '4',
//     numberOfTries: '',
//     streams: '1',
//     maximum: '1',
//   },
// ]