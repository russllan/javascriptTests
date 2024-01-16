function solveQuadraticEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Два корня: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        return `Один корень: x = ${x}`;
    } else {
        return "Нет вещественных корней";
    }
}

// Примеры использования
console.log(solveQuadraticEquation(1, -3, 2));

module.exports = solveQuadraticEquation;