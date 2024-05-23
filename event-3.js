document.getElementById('post-btn').addEventListener('click', function(){
    const newComment =document.getElementById('new-comment')
    const newText = newComment.value;

    const textWrite =document.getElementById('text')
    const p =document.createElement('p')
    p.innerText = newText
    textWrite.appendChild(p)

    newComment.value =''




})