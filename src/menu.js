export default function myMenu(){
    const content = document.createElement('div')
    content.classList.add('content')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    const headerz = document.createElement('h2');
    headerz.textContent = 'Menu'
    const para = document.createElement('p')
    para.textContent = 'We offer a wide range of products as listed below at city bites at a discount'
    const drinksHeader = document.createElement('h3')
    drinksHeader.textContent = 'DRINKS'
    const uList = document.createElement('ul')
    uList.classList.add('list-items')
    const list1 = document.createElement('li')
    const list2 = document.createElement('li')
    const list3 = document.createElement('li')
    const list4 = document.createElement('li')
    list1.textContent = 'Soda'
    list2.textContent = 'Beer'
    list3.textContent = 'Juices'
    list4.textContent = 'Mineral Water'
    const foodHeader = document.createElement('h3')
    foodHeader.textContent = 'FOOD'
    const foodList = document.createElement('ul')
    foodList.classList.add('list-items')
    const list5 = document.createElement('li')
    const list6 = document.createElement('li')
    const list7 = document.createElement('li')
    const list8 = document.createElement('li')
    list5.textContent = 'Pizza'
    list6.textContent = 'Rice'
    list7.textContent = 'Posho'
    list8.textContent = 'Chicken'
    menuDiv.appendChild(headerz)
    menuDiv.appendChild(para)
    menuDiv.appendChild(drinksHeader)
    uList.appendChild(list1)
    uList.appendChild(list2)
    uList.appendChild(list3)
    uList.appendChild(list4)
    menuDiv.appendChild(uList)



    menuDiv.appendChild(foodHeader)
    foodList.appendChild(list5)
    foodList.appendChild(list6)
    foodList.appendChild(list7)
    foodList.appendChild(list8)
    menuDiv.appendChild(foodList)

    content.appendChild(menuDiv)
    return content
}
