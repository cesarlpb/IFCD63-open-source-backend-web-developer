export const getRandomInt = (min, max) => {
    if (min > max) {
        throw new Error("El valor mínimo no puede ser mayor que el valor máximo");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
