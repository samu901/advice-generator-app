const url = "https://api.adviceslip.com/advice";
const id = document.getElementById('id');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice');


const getRandomAdvice = async function(url){
    const data = await fetch(url, {method:'GET'}).then(res => {
        return res.json();
    }).then(res => {
        return res;
    });

    return data;
};


dice.addEventListener('click', () => {
    getRandomAdvice(url).then(res => {
        id.innerText = res["slip"]["id"];
        advice.innerText = `"${res["slip"]["advice"]}"`;
    });
})


document.addEventListener('DOMContentLoaded', () => {
    dice.click();
})