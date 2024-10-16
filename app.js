// 1-MISOL. Berilgan mahsulotlarni narx yoki sotuv soni bo 'yicha tartiblash.

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

// 2-MISOL. Talabalarning baholarini hisoblang va o'rtacha bahosi 70 dan past bo'lganlarni ro'yxatlang.

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

// 3 - MISOL.  Mahsulotlarning narxi va miqdoriga qarab, har bir mahsulotning umumiy summasini hisoblang.

// SOLUTION

// const products = [
//     { name: "Laptop", price: 1000, quantity: 2 },
//     { name: "Phone", price: 500, quantity: 3 },
//     { name: "Shoes", price: 100, quantity: 4 },
// ];
// const totalPrice = products.map((product) => {
//     const total = product.price * product.quantity;
//     return { name: product.name, total: total };
// });
// console.log(totalPrice);

// 4 - MISOL. Mahsulotlarning narxi, miqdori va soliqlariga qarab umumiy narxni hisoblang.

// const products = [
//     { name: "Laptop", price: 1000, quantity: 2, tax: 100 },
//     { name: "Phone", price: 500, quantity: 3, tax: 50 },
//     { name: "Shoes", price: 100, quantity: 4, tax: 10 },
// ];

// const totalPrice = products.map((product) => {
//     const total = product.quantity * (product.price + product.tax);
//     return { name: product.name, total: total };
// });
// console.log(totalPrice);