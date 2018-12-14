import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'

// saludo()
// despedida()
activeMenu()
const showMenu = (toggleId,id1,id2,id3,id35, id4, navId ) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    headerItems= document.getElementById(id1),
    headerItem1= document.getElementById(id2),
    headerItem2= document.getElementById(id3),
    headerItem3= document.getElementById(id35),
    mainList= document.getElementById(id4)
  if( toggle && nav && headerItems){
    toggle.addEventListener('click', ()=> {
      nav.classList.toggle('main-header__item2__active')
      nav.classList.toggle('main-header__item2')
      headerItems.classList.toggle('main-header__item3__active')
      headerItems.classList.toggle('main-header__item3')
      headerItem1.classList.toggle('main-header__item3__active__first')
      headerItem2.classList.toggle('main-header__item3__active__second')     
      headerItem3.classList.toggle('main-header__item3__active__third')     
      mainList.classList.toggle('main-menu-list__active') 
      })
  }
  console.log('hi')
}
showMenu('boton-main','header-items','header-items-1','header-items-2',"header-items-3",'main-list','nav-main')
