
let menuDefaulth = document.querySelectorAll('.menu_prevent_defaulth')
let menuSub = document.querySelectorAll('.menu_sub')

menuDefaulth.forEach(item => {
    item.addEventListener('click', showMenu)
});


function showMenu(event) {
    event.preventDefault()

    let target = event.target.nextElementSibling
    for (let i = 0; i < menuSub.length; i++) {
        if (menuSub[i] !== target && menuSub[i].classList.contains('menu_active')) {
          menuSub[i].classList.remove('menu_active');
        }
      }
      target.classList.toggle('menu_active');
}


