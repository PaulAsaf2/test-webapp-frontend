document.addEventListener('DOMContentLoaded', function () {
  var dropdownHeader = document.querySelector('.dropdown-header');
  let selectTitle = dropdownHeader.querySelector('#selected-item')
  let iconTitle = dropdownHeader.querySelector('.icon')
  var dropdownBody = document.querySelector('.dropdown-body');
  let listOfItems = dropdownBody.querySelectorAll('.dropdown-item')

  dropdownHeader.addEventListener('click', function () {
    let displayOn = dropdownBody.style.display === 'block'

    dropdownBody.style.display = displayOn ? 'none' : 'block';
  });

  listOfItems.forEach(function (item) {
    item.addEventListener('click', function () {
      selectTitle.textContent = item.textContent.trim();

      let [, classSecond] =
        item.querySelector('.icon').className.split(' ')

      iconTitle.classList.add(classSecond)
    });
  });

  listOfItems[1].click();
});
