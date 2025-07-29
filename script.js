"use strict";

const fruits = prompt("Какиетмтппппп фрукты купить?");
const fruitsNumber = prompt(`Сколько ${fruits} купить?`);

const bag = {
    [fruits]: [fruitsNumber],
};

// console.log(`Пользователь хочет купить ${fruits} в количестве ${bag[fruits]} шт.`);
alert("fruit" in bag);