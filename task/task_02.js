function solveFibonacci(n) {
    if (n <= 0) {
        return("Порядковый номер должен быть положительным числом");
    }

    if(typeof n !== "number") {
        return("Порядковый номер должен быть числом");
    }

    if(Number.isFinite(n) && !Number.isInteger(n)) {
        return("Порядковый номер должен быть целым");
    }

    let sequence = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return {
        number: sequence[n - 1], // Число Фибоначчи с порядковым номером n
        sequence: sequence,     // Вся последовательность Фибоначчи до числа с порядковым номером n
    };
}

module.exports = solveFibonacci;
