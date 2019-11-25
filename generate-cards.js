function createCard(){
    for(var i=0; i<10; i++)
    {
        const card = document.createElement('div')
        const blogger = document.createElement('h2')
        blogger.innerHTML = "Engadget"
        card.appendChild(blogger)
        document.body.appendChild(card)
    }
//delete this line
}

createCard()
