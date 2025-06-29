const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1
const day = today.getDate();

// 「2024年10月12日」のような形式に整形
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);