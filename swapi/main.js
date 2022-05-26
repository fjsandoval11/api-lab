// const axios = require('axios')
const button = document.querySelector('button')


// const controllerFile = require('./controller')


buttonClicked = () => {
    console.log('button clicked')
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`).then(res => {
        const {residents} = res.data.results[0]
        console.log(residents)
        for(i = 0; i < residents.length; i++){
            axios.get(residents[i]).then(response => {
                console.log(response.data)
                let residentTitle = document.createElement('h1')
                let residentHeight = document.createElement('span')
                residentTitle.textContent = response.data.name
                residentHeight.textContent = response.data.height
                residentTitle.appendChild(residentHeight)
                document.body.appendChild(residentTitle)
                
            })
        }
    }).catch()
}

button.addEventListener('click', buttonClicked)