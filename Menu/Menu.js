/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const createMenu = (arr) => {
  let menuDiv = document.createElement('div')
  menuDiv.classList.add('menu')

  let ul = document.createElement('ul')
  let listItems = arr.map(item => {
    let li = document.createElement('li')
    li.innerText = item
    li.style.listStyle = 'none'
    li.addEventListener('mouseenter', (event) => {
      li.style.color = 'black'
      li.style.cursor = 'pointer'
    })
    li.addEventListener('mouseleave', (event) => {
      li.style.color = 'white'
    })
    return li
  })
  listItems.forEach(item => ul.appendChild(item))
  menuDiv.appendChild(ul)

  let menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('mouseenter', (event) => {
    menuButton.style.cursor = 'pointer'
  })

  menuButton.addEventListener('click', (event) => {
    if(Object.values(menuDiv.classList).indexOf('menu--open') >= 0){
      return menuDiv.classList.remove('menu--open')
    } else {
      return menuDiv.classList.add('menu--open')
    }
  })
  return menuDiv
}

let header = document.querySelector('.header')
let menu = createMenu(menuItems)

let addButton = document.createElement('img')
addButton.setAttribute('src', './assets/add.png')
Object.assign(addButton.style, {
  height: '2rem',
  position: 'absolute',
  right: '2%',
  cursor: 'pointer'
})
addButton.addEventListener('click', (event) => {
  let formCover = document.querySelector('.form-cover')
  let titleInput = document.querySelector('.title-input')
  let dateInput = document.querySelector('.date-input')
  let textInput = document.querySelector('.text-input')
  formCover.style.display = 'flex'
  titleInput.focus()
  titleInput.value = ''
  dateInput.value = ''
  textInput.value = ''
})

header.prepend(menu)
header.append(addButton)