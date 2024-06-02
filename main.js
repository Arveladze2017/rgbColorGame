
let h1 = document.querySelector("#h1");
let divs = document.querySelectorAll(".container>div")
let mode = document.querySelector('.mode')
let newColors = document.querySelector(".newColors")
let easy = document.querySelector('#easy')
let hard = document.querySelector('#hard')
let header = document.querySelector('header')
let span = document.querySelector('span')


function rgbgenerator() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}
let targetColor = rgbgenerator();







h1.innerHTML = targetColor
mode.innerHTML = 'hard'

let randomNum = Math.round(Math.random() * 5);
for (let i = 0; i < 6; i ++) {

    if (randomNum == i){
        divs[i].style.backgroundColor = targetColor;
    }
    else {
        divs[i].style.backgroundColor = rgbgenerator()
    }
}






function givingColors() {
    let targetColor = rgbgenerator();
    h1.innerHTML = targetColor
    header.style.backgroundColor = '#337bb6'
    span.innerHTML = ''
    if(mode.innerHTML == 'hard'){
        let randomNum = Math.round(Math.random() * 5);
        divs[0].classList.remove('none');
        divs[1].classList.remove('none');
        divs[2].classList.remove('none');
        divs[3].classList.remove('none');
        divs[4].classList.remove('none');
        divs[5].classList.remove('none');
        for (let i = 0; i < 6; i ++) {

            if (randomNum == i){
                divs[i].style.backgroundColor = targetColor;
            }
            else {
                divs[i].style.backgroundColor = rgbgenerator()
            }
        }
    }
    else if (mode.innerHTML == 'easy'){
        let randomNum = Math.round(Math.random() * 2);
        divs[0].classList.remove('none');
        divs[1].classList.remove('none');
        divs[2].classList.remove('none');
        divs[3].classList.add('none');
        divs[4].classList.add('none');
        divs[5].classList.add('none');
        for (let i = 0; i < 3; i ++) {

            if (randomNum == i) {
                divs[i].style.backgroundColor = targetColor;
            }
            else {
                divs[i].style.backgroundColor = rgbgenerator()
            }
        }
    }
}
newColors.addEventListener('click', () => {
    givingColors();
    newColors.innerHTML = 'NEW COLORS'
})


easy.addEventListener('click', () => {
    header.style.backgroundColor = '#337bb6'
    mode.innerHTML = 'easy';
    givingColors()
})

hard.addEventListener('click', () => {
    header.style.backgroundColor = '#337bb6'
    mode.innerHTML = 'hard';
    givingColors()
})



divs.forEach(div => div.addEventListener('click', () => {
    if(mode.innerHTML == 'hard' && div.style.backgroundColor == h1.innerHTML) {
        newColors.innerHTML = 'PLAY AGAIN';
        header.style.backgroundColor = h1.innerHTML;
        span.innerHTML = 'CORRECT!'
        divs.forEach(remove => {
            remove.classList.remove('none');
            remove.style.backgroundColor = h1.innerHTML;
        })
    }
    else if (mode.innerHTML == 'easy' && div.style.backgroundColor == h1.innerHTML) {
        newColors.innerHTML = 'play again';
        header.style.backgroundColor = h1.innerHTML;
        span.innerHTML = 'CORRECT!'
        for(let i = 0; i<3 ; i++) {
            divs[i].classList.remove('none');
            divs[i].style.backgroundColor = h1.innerHTML;
            console.log(divs[i])
        }
    }
    else {
        div.classList.add("none")
        span.innerHTML = 'INCORRECT!'
    }
}))




// update --- კოდი გავხადე შედარებით უფრო მარტივი.
// სწორი ფერის აღმოჩენის შემთხვევაში NEW COLOR ღილაკი იცვლება Play again-ით და შემდგომ ისევ იგივე მნიშვნელობას უბრუნდება.
// ახალი ფერების ჩატვირთვისას correct და incorrect ქრება და თავიდან იწყებს მუშაობას არჩეული div-ის შესაბამისად
// წინასგან განსხვავებით easy და hard ღილაკი ერთი და იგივე ფუნქციას იძახებს სადაც ორივე ვარიანტია გაწერილი. შესაბამისად ერთი დამატებით ფუნქცია აღარაა საჭირო.
// page-ის გახსნისას ავტომატურად ირთვება hard mode, ამიტომ divs.forEach(div => div.addEventListener...-ს ერთი else if მოაკლდა იმ შემთხვევისთვის როცა თავიდან mode განსაზღვრული არ იყო.
// რამოდენიმე for loop ამოვიღე, როცა უფრო მარტივად ინდექსის მითითებით შეიძლებოდა.
// თამაში ისევ გამართულია.


// future update ---შემდეგში hard და easy მაჩვენებელს მარცხენა შუა ნაწილში გავაქრობდი. ეს უფრო დიზაინის საკითხია :)))