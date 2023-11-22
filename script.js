document.addEventListener('DOMContentLoaded', function () {
  let dropDown = document.querySelector('.custom-dropdown')
  let dropdownHeader = document.querySelector('.dropdown-header');
  let textTitle = dropdownHeader.querySelector('#selected-item');
  let iconTitle = dropdownHeader.querySelector('.icon');
  let iconArrow = dropdownHeader.querySelector('.icon-arrow');
  let dropdownBody = document.querySelector('.dropdown-body');
  let listOfItems = dropdownBody.querySelectorAll('.dropdown-item');

  dropDown.addEventListener('click', function () {
    let displayNone = dropdownBody.style.display === 'none'

    if (displayNone) {
      dropdownBody.style.display = 'block';
      iconArrow.classList.add('icon-arrow-rotated')
    } else {
      dropdownBody.style.display = 'none';
      iconArrow.classList.remove('icon-arrow-rotated')

      listOfItems.forEach((item) => {
        if (item.classList.contains('dropdown-item-selected')) {
          item.classList.remove('dropdown-item-selected')
        } else if (item.textContent.trim() === textTitle.textContent) {
          item.classList.add('dropdown-item-selected')
        }
      })
    }
  })

  listOfItems.forEach(function (item) {
    item.addEventListener('click', function () {
      let arrayIconClasses = iconTitle.classList
      let [, classSecond] = item.querySelector('.icon').classList

      arrayIconClasses.forEach(classItem => iconTitle.classList.remove(classItem))
      iconTitle.classList.add('icon')
      iconTitle.classList.add(classSecond)
      textTitle.textContent = item.textContent.trim();
    })
  })

  listOfItems[1].click();
});
