function randomtext() {
    var randomtxt = [
        'Practice',
        'AI Practice',
        'Smooth Knockback'];
    return randomtxt[Math.floor((Math.random() * 5.99))];
}

document.getElementById("spam").innerHTML = randomtext();