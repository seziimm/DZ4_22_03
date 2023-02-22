const rcsBtn = document.querySelector('.butInp')

rcsBtn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json" )
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach( people => {
            const div = document.createElement('div')
            const div1 = document.createElement('div')
            div.innerHTML = people.name
            div1.innerHTML = people.age
            document.body.append(div)
            document.body.append(div1)
        })
    }
}
