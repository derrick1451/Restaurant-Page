 export default function contactsMenu(){
    const content = document.createElement('div')
    content.classList.add('content')
    const contactsDiv = document.createElement('div')
    contactsDiv.classList.add('contacts')
    const heading = document.createElement('h1')
    heading.textContent = 'CONTACTS'
    const paragraph = document.createElement('p')
    paragraph.textContent = 'We are always happy to serve you here a city bites and anytime you want to reach out to us you can use the following socials and contacts'
    const uList = document.createElement('ul')
    uList.classList.add('list-items')
    const list1 = document.createElement('li')
    const list2 = document.createElement('li')
    const list3 = document.createElement('li')
    const list4 = document.createElement('li')
    list1.textContent = '+256-758642938'
    list2.textContent = 'Twitter @cityBites'
    list3.textContent = 'Facebook CityBites'
    list4.textContent = 'Instagram #cityBites'
    contactsDiv.appendChild(heading)
    contactsDiv.appendChild(paragraph)
    uList.appendChild(list1)
    uList.appendChild(list2)
    uList.appendChild(list3)
    uList.appendChild(list4)
    contactsDiv.appendChild(uList)
    content.appendChild(contactsDiv)
    return content;
}