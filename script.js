const zennoPosterTitle = document.querySelector('#zennoPosterLite-title')
const zennoBoxTitle = document.querySelector('#zennoBox-title')

const posterTable = document.querySelector('#zennoPosterLite-table')
const boxTable = document.querySelector('#zennoBox-table')

console.log(jsonData);

function handleOpenTable(table) {
  table.classList.toggle('main-table-out-container-show');
}

zennoPosterTitle.addEventListener('click', function () {
  handleOpenTable(posterTable);
})

zennoBoxTitle.addEventListener('click', function () {
  handleOpenTable(boxTable);
})

  document.getElementById('btn_setting').click()

// открытие внутренних вкладок
function openTab(event, tab) {
  let tabContent = document.querySelectorAll('.tab')
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }

  document.getElementById(tab).style.display = 'block'
  console.log(document.querySelector('.tab_button').classList.contains('tab_button_active'));
  console.log(event.currentTarget.id);
  event.currentTarget.classList.add('tab_button_active')
}