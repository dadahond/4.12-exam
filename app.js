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

// 5-MISOL. Har bir muallifning yozgan kitoblarini ro'yxatlang va har bir muallifni faqat bir marta ko'rsating.

// SOLUTION

// const books = [
//     { title: "Book A", author: "Author A" },
//     { title: "Book B", author: "Author A" },
//     { title: "Book C", author: "Author B" },
//     { title: "Book D", author: "Author C" },
// ];
// const result = books.reduce((acc, curVal) => {
//     const item = acc.find((book) => curVal.author == book.author);
//     if (item) {
//         item.books.push(curVal.title);
//     } else {
//         acc.push({ author: curVal.author, books: [curVal.title] });
//     }
//     return acc;
// }, []);
// console.log(result);

// 6 - MISOL.Tadbirlarning sanalarini eski yoki yangi sanalar bo 'yicha saralang.

// const dates = [
//     { event: "Event A", date: new Date("2023-10-01") },
//     { event: "Event B", date: new Date("2022-12-15") },
//     { event: "Event C", date: new Date("2024-01-10") },
// ];
// const sanalar = dates.sort((a, b) => a.date - b.date);
// console.log(sanalar);

// 7 - MISOL.Berilgan mahsulotlarning o 'rtacha narxini hisoblang.

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Shoes", price: 100 },
// ];
// const totalPrice = products.reduce((acc, curVal) => acc + curVal.price, 0);
// const averagePrice = totalPrice / products.length;

// console.log(
//     "Maxsulotlarning o'rtacha narxi yaxlitlanganda:",
//     Math.round(averagePrice)
// );

// 8-MISOL. Kitoblarni chop etilgan yil bo'yicha tartiblang (ko'tarilish yoki tushish
// tartibida).

// SOLUTION
// const books = [
//     { title: "Book A", year: 2001 },
//     { title: "Book B", year: 1995 },
//     { title: "Book C", year: 2010 },
//     { title: "Book D", year: 2020 },
// ];
// const byPublishedYear = books.sort((a, b) => a.year - b.year);
// console.log("Chop etilgan yili:", byPublishedYear);

// 9-MISOL. Berilgan mahsulotlar ro'yxatidagi barcha mahsulotlarni sotildi deb
// belgilang.

// const products = [
//     { name: "Laptop", price: 1000, sold: false },
//     { name: "Phone", price: 500, sold: false },
//     { name: "Shoes", price: 100, sold: false },
// ];
// products.map(allSold);

// function allSold(product) {
//     product.sold = true;
// }
// console.log(products);

// 10 - MISOL.Berilgan mahsulotlarning jami miqdorini hisoblang.

// const products = [
//     { name: "Laptop", price: 1000, quantity: 2 },
//     { name: "Phone", price: 500, quantity: 3 },
//     { name: "Shoes", price: 100, quantity: 4 },
// ];
// const jamiSoni = products
//     .map((jami) => jami.quantity)
//     .reduce((acc, curVal) => acc + curVal);
// const jamiNarxi = products
//     .map((jami) => jami.price * jami.quantity)
//     .reduce((acc, curVal) => acc + curVal);

// console.log("Soni bo'yicha miqdori:", jamiSoni);
// console.log("Jami narxi:", jamiNarxi);

// 11 - MISOL. Bir xil nomdagi mahsulotlarni birlashtirib, ularning miqdorini jamlang.

// const products = [
//     { name: "Laptop", quantity: 2 },
//     { name: "Phone", quantity: 3 },
//     { name: "Laptop", quantity: 1 },
//     { name: "Shoes", quantity: 4 },
// ];
// const result = products.reduce((acc, curVal) => {
//     const item = acc.find((product) => curVal.name == product.name);
//     if (item) {
//         item.quantity = item.quantity + curVal.quantity;
//     } else {
//         acc.push({ name: curVal.name, quantity: curVal.quantity });
//     }
//     return acc;
// }, []);
// console.log(result);

// 12 - MISOL.Mahsulotlarni toifalar bo 'yicha guruhlang.
// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Shoes", category: "Fashion" },
// ];
// const byName = products.map((nom) => nom.name);
// const byCategory = products.map((cat) => cat.category);
// console.log("Nomlari bo'yicha:", byName);
// console.log("Kategoriyalari bo'yicha:", byCategory);