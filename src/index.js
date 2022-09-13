import './style.css';
import navBar,{homepage} from './popup';
import myMenu from './menu'
import contactsMenu from './contacts'
document.body.appendChild(navBar())
homepage()
// document.body.appendChild(myMenu())
// document.body.appendChild(contactsMenu())
const homeBtn = document.querySelector('.home-btn')
const menuBtn = document.querySelector('.menu-btn')
const contactBtn = document.querySelector('.contact-btn')
menuBtn.addEventListener('click',()=>{
    const elements = document.querySelector('.content')
    document.body.removeChild(elements)
    document.body.appendChild(myMenu())
})
contactBtn.addEventListener('click',()=>{
    const elements = document.querySelector('.content')
    document.body.removeChild(elements)
    document.body.appendChild(contactsMenu())
})
homeBtn.addEventListener('click',()=>{
    const elements = document.querySelector('.content')
    document.body.removeChild(elements)
    homepage()
})