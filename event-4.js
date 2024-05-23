document.getElementById('add-product').addEventListener('click',function(){

    const textNew =document.getElementById('text-new')
    const listValue = textNew.value

    const itemList =document.getElementById('item-list')
    const li =document.createElement('li')
    li.innerText = listValue

    itemList.appendChild(li)

    textNew.value =''
     
    
})