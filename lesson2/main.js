arr = [true, false, 1, 999, -123, 'oleg', 15, 3.14, -2.8, 'okten'];
console.log(arr);
//
//
book1 = {
    title: 'Harry Poter',
    pageCount: 218,
    genre: 'Fantasy',
}
book2 = {
    title: 'Berserk',
    pageCount: 320,
    genre: 'Horror',
}
book3 = {
    title: 'It ends with us',
    pageCount: 275,
    genre: 'Romance',
}
//
//
book4 = {
    title: 'Harry Poter',
    pageCount: 218,
    genre: 'Fantasy',
    authors: [name = 'Joanne', age = 57]
}
book5 = {
    title: 'Harry Poter',
    pageCount: 218,
    genre: 'Fantasy',
    authors: [name = 'Jacky', age = 32]
}
book6 = {
    title: 'Harry Poter',
    pageCount: 218,
    genre: 'Fantasy',
    authors: [name = 'Rohas', age = 51]
}
//
//
users = [
    user1 = {
    name: 'Olya',
    username: 'Olga12',
    password: 'GoweF182hH',
    },
    user2 = {
    name: 'Sasha',
    username: 'Rustam18',
    password: 'GSADgasd34',
    },
    user3 = {
    name: 'Dima',
    username: 'Deymon1',
    password: 'GoweF182hH',
    },
    user4 = {
    name: 'Ivan',
    username: 'VanyaTankist',
    password: '1295JgRNnF',
    },
    user5 = {
    name: 'Anna',
    username: 'AnnaSophia',
    password: '19g47FJRfhsU',
    },
    user6 = {
    name: 'Yakiv',
    username: 'Trx',
    password: 'GjasdHR17',
    },
    user7 = {
    name: 'Tolik',
    username: 'AnatoliyGlek',
    password: '19brJB7DN4nfs',
    },
    user8 = {
    name: 'Dima',
    username: 'DmitriyNg',
    password: '20ban4jgJGNTs92',
    },
    user9 = {
    name: 'Alex',
    username: 'Alexandr1997',
    password: 'KASusnrj7174',
    },
    user10 = {
    name: 'Alina',
    username: 'Alinina',
    password: 'kNVh23fhsU',
    },
];
console.log(user1.password)
console.log(user2.password)
console.log(user3.password)
console.log(user4.password)
console.log(user5.password)
console.log(user6.password)
console.log(user7.password)
console.log(user8.password)
console.log(user9.password)
console.log(user10.password)
//
//
let x = 9;
if (x!=0)
    console.log('Вірно');
else
    console.log('Невірно');
let a = 1
if (a!=0)
    console.log('Вірно');
else
    console.log('Невірно');
a = 0
if (a!=0)
    console.log('Вірно');
else
    console.log('Невірно');
a = -3
if (a!=0)
    console.log('Вірно');
else
    console.log('Невірно');
//
//
let time = 36;
if (time>=0, time<15)
    console.log('1 Четверть');
else if (time>=15, time<30)
    console.log('2 Четверть');
else if (time>=30, time<45)
    console.log('3 Четверть');
else if (time>=45, time<60)
    console.log('4 Четверть');
//
//
let day = 2;
if (day>=1, day<=10)
    console.log('1 Декада')
else if (day>10, day<=20)
    console.log('2 Декада')
else if (day>20, day<=31)
    console.log('3 Декада');
//
//
let weekday = 3;
switch (weekday) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednessday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(NaN);
        break;
}
//
//
let num1 = 1;
let num2 = 2;
if (num1>num2)
    console.log(num1)
else if (num2>num1)
    console.log(num2)
else if (num1=num2)
    console.log('Числа рівні.');
//
//
let y = '';
let c = y || 'default';
console.log(c);
//
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
    ]
if (coursesAndDurationArray[0].monthDuration >= 5)
    console.log('Супер');
if (coursesAndDurationArray[1].monthDuration >= 5)
    console.log('Супер');
if (coursesAndDurationArray[2].monthDuration >= 5)
    console.log('Супер');
if (coursesAndDurationArray[3].monthDuration >= 5)
    console.log('Супер');
if (coursesAndDurationArray[4].monthDuration >= 5)
    console.log('Супер');
if (coursesAndDurationArray[5].monthDuration >= 5)
    console.log('Супер');
//
//