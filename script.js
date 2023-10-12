const zennoPosterTitle = document.querySelector('#zennoPosterLite-title')
const zennoBoxTitle = document.querySelector('#zennoBox-title')
// const tableTitle = document.querySelectorAll('.table_title-row')
const posterTable = document.querySelector('#zennoPosterLite-table')
const boxTable = document.querySelector('#zennoBox-table')

// console.log(tableTitle);
// console.log(table);

function handleOpenTable(table) {
  table.classList.toggle('main-table-out-container-show');
}

zennoPosterTitle.addEventListener('click', function() {
  handleOpenTable(posterTable);
})

zennoBoxTitle.addEventListener('click', function() {
  handleOpenTable(boxTable);
})