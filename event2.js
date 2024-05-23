function handleClick(){
    const clickHandle = document.getElementById('handle-click')
    clickHandle.innerText= 'Muhsina'

}

//opotion 2

document.getElementById('event-listener').addEventListener('click',function(){
    const clickHandle =document.getElementById('handle-click')
    clickHandle.innerText ='Miraj'
})

document.getElementById('update-btn').addEventListener('click',function(){
    const inputField =document.getElementById('input-field')
    const  inputText =inputField.value;
    const p =document.getElementById('input-text')
    p.innerText = inputText;
    inputField.value ='' 
})