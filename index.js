

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, message) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
  }
  return newArray
}

function countDown(number){
    while (number >= 0) {
        console.log(number--);
      }
}