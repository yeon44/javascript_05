let ex_01 = new Date();
let ex_01year = ex_01.getFullYear();
let ex_01month = ex_01.getMonth() + 1;
let ex_01day = ex_01.getDate();

let ex_01week = ex_01.getDay();
let ex_01weekarr = ["일", "월", "화", "수", "목", "금", "토"];
let ex_01hours = ex_01.getHours();
let ex_01min = ex_01.getMinutes();
let ex_01sec = ex_01.getSeconds();

console.log(
  `오늘은 ${ex_01year}년 ${ex_01month}웛 ${ex_01day}일 ${ex_01weekarr[ex_01week]}요일 ${ex_01hours}시 ${ex_01min}분 ${ex_01sec}초 입니다.`
);
// if (ex_01week == 0) {
//   console.log("일");
// } else if (ex_01week == 1) {
//   console.log("월");
// } else if (ex_01week == 2) {
//   console.log("화");
// } else if (ex_01week == 3) {
//   console.log("수");
// } else if (ex_01week == 4) {
//   console.log("목");
// } else if (ex_01week == 5) {
//   console.log("금");
// } else if (ex_01week == 6) {
//   console.log("토");
// }

let ex_02 = {
  firstpig: "첫째 아기 돼지",
  firstpigh: "움막",
  secpig: "둘째 아기 돼지",
  secpigh: "나무집",
  thrpig: "막내 아기 돼지",
  thrpigh: "벽돌집",
};

console.log(ex_02);

console.log(
  `${ex_02.firstpig}는 ${ex_02.firstpigh}을 지었고, ${ex_02.secpig}는 ${ex_02.secpigh}을 지었고, ${ex_02.thrpig}는 ${ex_02.thrpigh}을 지었습니다.`
);

const ex_03 = [];
const ex_03f = ["사과", "오렌지", "바나나", "포도", "자두"];
for (i = 0; i < 5; i++) {
  console.log(i);
  console.log(ex_03f[i]);
  console.log(ex_03f[ex_03[i]]);
}

const ex_04 = ["HTML", "CSS", "JAVASCRIPT", "JQUERY"];
const ex_04splice = ex_04.splice(1, 1, "WEB");
console.log(ex_04);

const ex_05 = ["red", "yellow", "green", "blue"];
const ex_05splice = ex_05.splice(1, 0, "orange");
console.log(ex_05);

const ex_06 = ["korea", "USA", "Brazil", "France"];
const ex_06splice = ex_06.splice(1, 0, "Japan") + ex_06.splice(5, 0, "China");
console.log(ex_06);

const ex_07 = ["red", "yellow", "green", "blue"];
const ex_07slice = ex_07.slice(1, 3);
console.log(ex_07slice);

const ex_08 = ["red", "yellow", "green", "blue"];
const ex_08slice = ex_08.slice(1, 2);

console.log(ex_08slice);
ex_08slice.push("blue");
console.log(ex_08slice);

const ex_08join = ex_08slice.join();
console.count(ex_08join);

const ex_09 = "2024-10-06";

//방법1

// const ex_09split = ex_09.split("-");
// const ex_09join = ex_09split.join("");
// console.log(ex_09split);
// console.log(ex_09join);

const ex_09split = ex_09.split("-").join("");
console.log(ex_09split);

//방법2

const ex_09replace = ex_09.replace(/-/g, "");
console.log(ex_09replace);
