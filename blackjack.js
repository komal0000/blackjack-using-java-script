// let fcard = Math.floor((Math.random() * 11) + 2)
// let scard = Math.floor((Math.random() * 11) + 2)
// document.getElementById('text1').innerHTML = `Cards: ${fcard} ${scard}`
// let sum = fcard + scard;
// document.getElementById('text2').innerHTML = `Sum: ${sum}`
// function carddrawn() {
//     if (sum < 21) {
//         document.getElementById('entries-el').innerHTML = " you are safe, Draw new card !!"
//     }
//     else if (sum === 21) {
//         document.getElementById('entries-el').innerHTML = "hurraay, you have won black jack !!"
//     }
//     else {
//         document.getElementById('entries-el').innerHTML = " you have lost !!"
//     }
// }
// function newcard() {
//     let ncard = Math.floor((Math.random() * 13) + 1)

// }

let cards = [];
let sum = 0;
let isalive = false
let hasblackJack = false
let message = ""
let cardsEL = document.getElementById('text1')
let sumEL = document.getElementById('text2')
let messageEL = document.getElementById('entries-el')
function randoms() {
    let random = Math.floor((Math.random() * 13) + 1)
    if (random > 10) {
        return 10
    }
    else if (random == 1) {
        return 11
    }
    return random;
}
function carddrawn() {
    isalive = true
    let fcard = randoms();
    let scard = randoms();
    cards = [fcard, scard];
    sum = fcard + scard;
    console.log(sum);
    render()
}
function render() {
    cardsEL.textContent = "Cards: "
    for
        (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Draw a new card"
    }
    else if (sum == 21) {
        message = "you've got Blackjack!"
        hasblackJack = true
    }
    else {
        message = "you're out of the game"
        isalive = false
    }
    messageEL.textContent = message
}

function newcard() {
    if (isalive === true && hasblackJack === false) {
        let card = randoms()
        sum += card
        cards.push(card)
        render()
    }
}