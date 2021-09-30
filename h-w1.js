    function checkPrompt() {

        const one = prompt('Значение 1:', ''),
        two = prompt('Значение 2:', '');

        const examOne = /^(-?[0-9]\d*)$/;
        const examTwo = /^([0-9]\d*)$/;

        (!(examOne.test(one)) || !(examTwo.test(two)) || !isFinite(one) || !isFinite(two)) ?
            console.log('Некоректный ввод') : console.log((+one).toString(two));

    }



    function verifyPrompt() {

        const one = prompt('Значение 1:', ''),
        two = prompt('Значение 2:', '');

        const exam = /^(-?[0-9]\d*)$/;

        const plus = (+one) + (+two);
        const divide = (+one) / (+two);

        (!(exam.test(one)) || !(exam.test(two)) || !isFinite(one) || !isFinite(two)) ?
            console.log('Некоректный ввод') : console.log(`Oтвет: ${plus}, ${divide}`);

    }