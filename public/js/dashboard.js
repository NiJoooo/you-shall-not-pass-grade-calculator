const deleteBtn = document.querySelectorAll('.del')
const termItem = document.querySelectorAll('span.not')
const termComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTerm)
})

Array.from(termItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(termComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTerm(){
    const termId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/deleteTerm', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'termIdFromJSFile': termId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const termId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'termIdFromJSFile': termId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const termId = this.parentNode.dataset.id
    try{
        const response = await fetch('dashboard/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'termIdFromJSFile': termId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}