const button = document.querySelector('button')
const adviceId = document.querySelector('#advice-id')
const advice = document.querySelector('#advice')

button.addEventListener('click', () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(data =>{
        return data.json()
    })
    .then(ad =>{
        advice.innerText =  `"${ad.slip.advice}"`
        adviceId.innerText = ad.slip.id
    })
})