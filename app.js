// 1. Mahsulotlarni Sortlash.
// Vazifa: Berilgan mahsulotlarni narx yoki sotuv soni bo 'yicha tartiblash. Kirish: Mahsulotlar ro'
// yxatidagi obyektlarni tanlang va foydalanuvchi
// belgilagan tartib bo 'yicha saralang ( asc yoki desc ).

// SOLUTION

// const products = [
//     { name: "Laptop", price: 1000, sales: 150 },
//     { name: "Phone", price: 500, sales: 300 },
//     { name: "Watch", price: 200, sales: 100 },
// ];

// Narxi bo'yicha o'suvchi

// const sortProductsPriceAsc = products.sort((a, b) => a.price - b.price);
// console.log("Narxi bo'yicha o'suvchi(Ascending):", sortProductsPriceAsc);

// Narxi bo'yicha kamayuvchi

// const sortProductsPriceDesc = products.sort((a, b) => b.price - a.price);
// console.log("Narxi bo'yicha kamayuvchi(Descendings):", sortProductsPriceDesc);

// Sotuv bo'yicha o'suvchi

// const sortProductsSalesAsc = products.sort((a, b) => a.sales - b.sales);
// console.log("Sotuv bo'yicha o'suvchi(Ascending):", sortProductsSalesAsc);

// Sotuv bo'yicha kamayuvchi

// const sortProductsSalesDesc = products.sort((a, b) => b.sales - a.sales);
// console.log("Sotuv bo'yicha kamayuvchi(Ascending):", sortProductsSalesDesc);

// 2-Masala. Talabalarning baholarini hisoblang va o'rtacha bahosi 70 dan past bo'lganlarni ro'yxatlang.

// SOLUTION

// const students = [
//     { name: "Akmal", grades: [85, 90, 80] },
//     { name: "Salim", grades: [60, 70, 65] },
//     { name: "Nozim", grades: [50, 40, 55] },
// ];
// const belowAverage = students.filter((student) => {
//     const calcAverage =
//         student.grades.reduce((acc, curVal) => acc + curVal, 0) /
//         student.grades.length;
//     return calcAverage < 70;
// });
// console.log(belowAverage);