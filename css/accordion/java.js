const list = document.querySelector('.list')
const listItem = list.querySelectorAll('.list_item')
console.log(listItem)

listItem.forEach((item)=> {
  console.log(item)


item.addEventListener('click',() =>{
listItem.forEach(Elem => Elem.classList.remove
  ('active'))

 item.classList.add('active') 
})  
})
