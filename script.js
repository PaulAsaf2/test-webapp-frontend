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

// ОБРАБОТКА ВЫДЕЛЕНИЯ СТРОКИ

function addSelectRow(row) {
  row.classList.add('table_row-select')
}

function removeSelectRow() {
  const tableRow = Array.from(document.querySelectorAll('.table_row'))
  tableRow.forEach((row) => {
    row.classList.remove('table_row-select')
  })
}

// КОНТЕКСТНОЕ МЕНЮ ---------------------

function closeContextMenu() {
  document.querySelector('.context-menu').style.display = 'none'
  document.querySelector('.popup').style.display = 'none'

  removeSelectRow()
}

(function () {
  const popup = document.querySelector('.popup')
  popup.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closeContextMenu()
    }
  })
})()

function contextMenuHandler() {
  const contextMenu = document.querySelector('.context-menu')
  contextMenu.addEventListener('contextmenu', function (event) {
    event.preventDefault()
  })

  const menuItems = Array.from(document.querySelectorAll('.context-menu_item'))
  menuItems.forEach(item => item.addEventListener('click', closeContextMenu))
}

function openContextMenu(event) {
  event.preventDefault()

  const row = event.currentTarget
  const popup = document.querySelector('.popup')
  const contextMenu = document.querySelector('.context-menu')

  popup.style.display = 'block'
  contextMenu.style.display = 'block'
  contextMenu.style.left = event.pageX + 'px'
  contextMenu.style.top = event.pageY + 'px'

  addSelectRow(row)
  contextMenuHandler()
}

// МЕНЮ НАСТРОЕК ---------------------

function openTabMenu(tab, tableRow) {
  const table = tableRow.parentElement
  table.append(tab)
}

function handleTabMenu(tabElement, tableRow) {
  let rowIsSelect = tableRow.classList.contains('table_row-select')
  if (rowIsSelect) {
    tableRow.addEventListener('click', function () {
      tabElement.remove()
      // removeSelectRow()
    })
  }
}



function createTabMenu(event) {
  const tableRow = event.currentTarget
  const rowIsSelect = tableRow.classList.contains('table_row-select')
  const table = tableRow.parentElement
  let tab = table.querySelector('.tab_row')

  if (!rowIsSelect && !tab) {
    addSelectRow(tableRow)
  } else {
    tableRow.classList.remove('table_row-select')
  }

  if (!tab) {
    const tabTemplate = document.querySelector('#tab').content
    const tabElement = tabTemplate.querySelector('.tab_row').cloneNode(true)
    const tabs = Array.from(tabElement.querySelectorAll('.tab_item'))
    const btnSetting = tabElement.querySelector('#btn_setting')
    const btnLog = tabElement.querySelector('#btn_log')

    function openTabItem(event, tabItem, tabElement) {
      const tab = tabElement.querySelector(`#${tabItem}`)
      tabs.forEach(tab => tab.style.display = 'none')
      tab.style.display = 'block'

      if (event.currentTarget.id === 'btn_setting') {
        event.currentTarget.classList.add('tab_button_active')
        event.currentTarget.classList.remove('tab_button_inactive')

        const inactiveBtn = tabElement.querySelector('#btn_log')
        inactiveBtn.classList.add('tab_button_inactive')

        const patch = tabElement.querySelector('.tab_patch')
        patch.classList.add('tab_patch-left')
        patch.classList.remove('tab_patch-right')
      } else {
        event.currentTarget.classList.add('tab_button_active')
        event.currentTarget.classList.remove('tab_button_inactive')

        const inactiveBtn = tabElement.querySelector('#btn_setting')
        inactiveBtn.classList.add('tab_button_inactive')

        const patch = tabElement.querySelector('.tab_patch')
        patch.classList.add('tab_patch-right')
        patch.classList.remove('tab_patch-left')
      }
    }

    btnSetting.addEventListener('click', function (event) {
      openTabItem(event, 'tab_setting', tabElement)
    })

    btnSetting.click()

    btnLog.addEventListener('click', function (event) {
      openTabItem(event, 'tab_log', tabElement)
    })

    openTabMenu(tabElement, tableRow)
    addSelectRow(tableRow)
    handleTabMenu(tabElement, tableRow)
  }
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
  rowElement.addEventListener('click', createTabMenu.bind(null))

  addRow(rowElement, tableElement)
}

function changeServerName(event) {
  event.stopPropagation();

  const nameContainer = event.currentTarget.parentElement
  const serverName = nameContainer.querySelector('.table_title-text')
  const input = nameContainer.querySelector('.table_title-input')
  const changeBtn = nameContainer.querySelector('.table_title_change-text')
  const canselBtn = nameContainer.querySelector('.table_title_cansel')
  const doneBtn = nameContainer.querySelector('.table_title_done')

  serverName.style.display = 'none'

  input.style.display = 'block'
  input.setAttribute('value', serverName.textContent)

  changeBtn.style.display = 'none';
  canselBtn.style.display = 'block';
  doneBtn.style.display = 'block';

  canselBtn.addEventListener('click', function (event) {
    event.stopPropagation()
    changeBtn.style.display = 'block';
    canselBtn.style.display = 'none';
    doneBtn.style.display = 'none';
    serverName.style.display = 'block'
    input.style.display = 'none'
  })

  doneBtn.addEventListener('click', function (event) {
    event.stopPropagation()
  })
  input.addEventListener('click', function (event) {
    event.stopPropagation()
  })
}

function createTable(dbRow) {
  const tableTemplate = document.querySelector('#table').content
  const tableElement = tableTemplate.querySelector('.table').cloneNode(true)
  const mainTable = tableElement.querySelector('.main-table-out-container')
  const tableTitleRow = tableElement.querySelector('.table_title-row')
  const tableTitleText = tableElement.querySelector('.table_title-text')
  const changeServerNameBtn = tableElement.querySelector('.table_title_change-text')

  tableElement.id = dbRow.id
  tableTitleText.textContent = dbRow.serverName

  tableTitleRow.addEventListener('click', function () {
    mainTable.classList.toggle('main-table-out-container-show')
  })

  changeServerNameBtn.addEventListener('click', changeServerName.bind(null))

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
