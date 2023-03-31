// let firstcard = 5;
// let secondcard = 6;
// let sum = firstcard + secondcard;
// console.log(sum);
function check() {
    let age = document.getElementById('check').value;
    if (age < 21) {
        document.getElementById('show').innerHTML = "ohhhh ,sorry sir you are not allowed to enter our club !!"
    }
    else {
        document.getElementById('show').innerHTML = "You are welcome sir !!"
    }
}