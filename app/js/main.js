let filterVisible = false

const filter = () => {
    const filterItems = document.querySelector('.filter__link-wrapper')
    filterItems.style.display = filterVisible ? 'none' : 'block'
    main.style.paddingTop = filterVisible ? '120px' : '320px'
    filterVisible = !filterVisible
}

const filterButton = document.querySelector('.filter__button')
filterButton.addEventListener('click', filter)

const widthHeader = document.querySelector('.head__wrapper')
const widthNav = document.querySelector('.navigate')
const main = document.querySelector('main')

console.log()
 
widthNav.onmouseover = () => {
    widthHeader.style.paddingLeft = '200px'
    main.style.paddingLeft = '200px'
}
widthNav.onmouseout = () => {
    widthHeader.style.paddingLeft = '100px'
    main.style.paddingLeft = '100px'
}




