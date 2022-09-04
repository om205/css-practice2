const btn = document.getElementById('btn');
const ID  = document.getElementById('id')
const adv = document.getElementById('advice')

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        ID.innerText = data.slip.id;
        adv.innerText = data.slip.advice
    }) }

getAdvice()
btn.addEventListener('click', e => getAdvice())