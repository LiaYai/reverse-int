module.exports = function reverse (n) {
    let result = '';
    let number = Math.abs(n);
    while (number) {
        result += number % 10;
        number = Math.trunc(number / 10);
    };

    return +result;
}
