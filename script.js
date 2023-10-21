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

function createTable(dbRow) {
  const tableTemplate = document.querySelector('#table').content
  const tableElement = tableTemplate.querySelector('.table').cloneNode(true)
  const tableTitle = tableElement.querySelector('.table_title')

  tableElement.id = dbRow.id
  tableTitle.textContent = dbRow.serverName

  addTable(tableElement)
}

function searchCurrentTable() {
  serverData.forEach((dbRow) => {
    // если нет таблиц, создай её и выйди
    const allTables = Array.from(document.querySelectorAll('.table'))
    if (allTables.length < 1) {
      createTable(dbRow)
      return
    }
    // получи таблицу, если она есть
    const currentTable = allTables.find((tableNode) => {
      return tableNode.id === dbRow.id
    })

    // если не нашёл таблицу, создай новую
    currentTable ?? createTable(dbRow)
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