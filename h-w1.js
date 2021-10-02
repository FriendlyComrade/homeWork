function checkPrompt () {

    const num = prompt('Значение 1:', ''),
    radix = prompt('Значение 2:', '');

    ((radix < 2 || radix > 36) || !Number.isInteger(+num) || !Number.isInteger(+radix)) ?
        console.log('Некорректный ввод!') : console.log((+num).toString(radix));

}


function verifyPrompt () {

    const value1 = prompt('Значение 1:', '');
    let value2;

    if (Number.isInteger(+value1)) { value2 = prompt('Значение 2:', '') }
    
    const sum = (+value1) + (+value2);
    const quotient = (+value1) / (+value2);

    (!Number.isInteger(+value1) || !Number.isInteger(+value2)) ? console.log('Некорректный ввод!') :
    
        console.log(`Oтвет: ${sum}, ${quotient}`);

}