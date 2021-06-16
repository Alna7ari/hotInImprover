function registerHotInputElements() {
    let registerInputs = document.querySelectorAll('input[improve-input]')
    registerInputs.forEach((element) => {
        element.addEventListener('input', function (evt) {
            onChangeInputValue(this)
        });
    })
}

function onChangeInputValue(el) {
    let value = el.value

    if (el.hasAttribute('rm-white-spaces'))
        value = value.split(' ').join('');
    if (el.hasAttribute('to-lower'))
        value = value.toLowerCase();
    if (el.hasAttribute('to-upper'))
        value = value.toUpperCase();
    if (el.hasAttribute('to-arabic-numbers'))
        value = toArabicNumbers(value);
    if (el.hasAttribute('only-numbers'))
        value = value.replace(/\D/g,'');
    if (el.hasAttribute('no-numbers'))
        value = value.replace(/[0-9]/g, '');
    if (el.hasAttribute('only-alphanumeric'))
        value = value.replace(/[^0-9a-z]/gi, '');

    el.value = value
    console.log('value changed: ' + el.value)
}

function toArabicNumbers(value) {
    return value.replace(new RegExp(":", 'g'), "0") //obfuscate macs
        .replace(new RegExp(String.fromCharCode(1632), 'g'), "0")
        .replace(new RegExp(String.fromCharCode(1633), 'g'), "1")
        .replace(new RegExp(String.fromCharCode(1634), 'g'), "2")
        .replace(new RegExp(String.fromCharCode(1635), 'g'), "3")
        .replace(new RegExp(String.fromCharCode(1636), 'g'), "4")
        .replace(new RegExp(String.fromCharCode(1637), 'g'), "5")
        .replace(new RegExp(String.fromCharCode(1638), 'g'), "6")
        .replace(new RegExp(String.fromCharCode(1639), 'g'), "7")
        .replace(new RegExp(String.fromCharCode(1640), 'g'), "8")
        .replace(new RegExp(String.fromCharCode(1641), 'g'), "9")
}

document.addEventListener('DOMContentLoaded', function () {
    registerHotInputElements()
}, false);