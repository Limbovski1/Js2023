// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function pS(a,b) {
        let x = a * b
        return x;
    }
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function rS(r) {
        let x = r * r * 3.14;
        return x;
    }
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    function cS(r,h) {
        let x = 2 * 3.14 * r * h + 2 * 3.14 * r * r;
        return x;
    }
// - створити функцію яка приймає масив та виводить кожен його елемент
    function arr(array){
        for (let item of array){
            console.log(item)
        }
    }
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
    function pC(paragraph){
        document.write(`<p>${paragraph}</p>`)
    }
    pC('asdfjasfjs')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    function ulCreator(text){
        document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`)
    }
    ulCreator('Hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    function ulCreator2(p,num){
        document.write(`<ul>`)
        for (i = 0; i < num; i ++){
        document.write(`<li>${p}</li>`)
        }
        document.write(`</ul>`)
    }
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    function elementsList(list) {
        document.write(`<ul>`)
        for (const item of list){
            document.write(`<li>${item}</li>`)
        }
        document.write(`</ul>`)
    }
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    function array2(obj){
        for(const item of obj) {
            document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
        }
    }
// - створити функцію яка повертає найменьше число з масиву
    function minNum(numbers){
        let min = numbers[0];
        for(const minimalNum of numbers){
            if (min > minimalNum){
                min = minimalNum;
            }
        }
        return min;
    }


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

    function sum(arr){
        let x = arr[0];
        for (const summary of arr) {
            x = x + arr;
        }
        return x;
    }
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    function swap(arr,index1,index2){
        let a = arr[index1];
        let b = arr[index2];
        arr[index1] = b;
        arr[index2] = a;
        return arr;
    }
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
    function exchange(sumUAH,currencyValues,exchangeCurrency){
        for (const item of currencyValues) {
            if (item.currency === exchangeCurrency){
                return sumUAH / item.value;
            }
        }
    }