function randomize() {
    let randNumbers = [];

    for (let i = 0; i < 3; i++) {
        randNumbers[i] = Math.round(Math.random() * 255);
    }

    document.getElementById("colorize-block").style.backgroundColor = 'rgb(' + randNumbers[0].toString() + ',' +
        randNumbers[1].toString() + ',' + randNumbers[2].toString() + ')';
    document.getElementById('color').innerText = 'rgb(' + randNumbers[0].toString() + ',' +
        randNumbers[1].toString() + ',' + randNumbers[2].toString() + ')';
}