export default function navBar(){
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const btn1 = document.createElement('button')
    btn1.classList.add('home-btn')
    const btn2 = document.createElement('button')
    btn2.classList.add('menu-btn')
    const btn3 = document.createElement('button')
    btn3.classList.add('contact-btn')
    btn1.textContent = 'Home'
    btn2.textContent = 'Menu'
    btn3.textContent = 'Contact'
    nav.appendChild(btn1)
    nav.appendChild(btn2)
    nav.appendChild(btn3)
    header.appendChild(nav)
    return header;
}
 export function homepage(){
    const body = document.querySelector('body')
    const content = document.createElement('div')
    content.classList.add('content')
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home-page')
    const heading = document.createElement('h1')
    const paragraph = document.createElement('p')
    const orderBtn = document.createElement('button')
    orderBtn.classList.add('order-btn')
    heading.textContent = 'City Bites Restaurant';
    paragraph.textContent = 'Welcome to city bites restaurnt, we offer the best meals you could possible think about here.super delicious and affordable Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt'
    orderBtn.textContent = 'Place Order'
    content.appendChild(homeDiv)
    homeDiv.appendChild(heading)
    homeDiv.appendChild(paragraph)
    homeDiv.appendChild(orderBtn)
    body.appendChild(content)
    return body;
}
 export function footer(){
    const body =document.querySelector('body')
    const footer = document.createElement('footer')
    const graph = document.createElement('p')
    footer.classList.add('footer')
    graph.textContent = 'All rights reserverd -designed by Derrick'
    footer.appendChild(graph)
    body.appendChild(footer)
    return body;
}