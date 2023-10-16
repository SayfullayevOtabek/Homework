
// Lesson_1-Homeworks
// Begin1.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const S = 4 * a;
// alert(S);


// Begin2.
// const  a = parseInt(prompt("a  qiymat kiriting"));
// const S = a * a;
// alert(S);

// Begin3.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const S = a * b; 
// const P = 2 * (a + b);
// alert(S);
// alert(P);


// Begin4.
// const  d = parseInt(prompt("d ga qiymat kiriting"));
// const L = 3.14 * d;
// alert(L);


// Begin5.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const V = a * a * a; 
// const S = 6 * a * a;
// alert(V);
// alert(S);


// Begin6.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const  c = parseInt(prompt("c ga qiymat kiriting"));
// const V = a * b * c; 
// const S = 2 * (a * b + b * c + a * c);
// alert(V);
// alert(S);



// Begin7.
// const  R = parseInt(prompt("R ga qiymat kiriting"));
// const L = 2 * 3.14 * R; 
// const S = 3.14 * R * R;
// alert(L);
// alert(S);



// Begin8.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const S = (a + b)/2;
// alert(S);

// Lesson_2-Homeworks

// if_1


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num < 0) {
//   alert(false)
// }


// if_2


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num < 0) {
//   alert(num + 2);
// }


// if_3


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num == 0) {
//   alert(num + 10);
// } else if (num < 0) {
//   alert(num + 2);
// }




// if_6


// let a = parseInt(prompt("a ni kriting"));
// let b = parseInt(prompt("b ni kriting"));

// alert(Math.max(a, b));


// if_7


// let a = parseInt(prompt("a ni kriting"));
// let b = parseInt(prompt("b ni kriting"));

// alert(Math.min(a, b));

// Boolean_1

// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert("Musbat son");
// } else if (num < 0) {
//   alert("Manfiy son");
// } 


// Boolean_2_&_3

// let num = parseInt(prompt("sonni kiriting"));

// if (num%2==0) {
//   alert("Juft son");
// } 
// else if (num%2==1 ) {
//   alert("Toq son");
// } 



// Boolean_4

// let A = parseInt(prompt("a sonni kiriting"));
// let B = parseInt(prompt("b sonni kiriting"));

// if (A>2&&B<=3) {
//   alert("True");
// } 



// Boolean_5

// let A = parseInt(prompt("a sonni kiriting"));
// let B = parseInt(prompt("b sonni kiriting"));

// if (A>=0||B<-2) {
//   alert("True");
// } 



// Boolean_6

// let A = parseInt(prompt("A sonni kiriting"));
// let B = parseInt(prompt("B sonni kiriting"));
// let C = parseInt(prompt("C sonni kiriting"));

// if (A<=B<=C) {
//   alert("True");
// } 



// // Boolean_11

// let A = parseInt(prompt("A sonni kiriting"));
// let B = parseInt(prompt("B sonni kiriting"));


// if (A%2==0 && B%2==0 ) {
//   alert("Juft sonlar");
// } 
// else if (A%2==1 && B%2==1) {
//   alert("Toq sonlar");
// } 



// Lesson_3-Homeworks

// For_1

// const n = parseInt(prompt("Please enter the value of N"))

// if(n > 0) {
//     for(let k = 0; k < n; k++) {
//         console.log("N -> ", k)
//     }
// }


// For_4

// const price1kg = 2500;

// for(let i =1; i <= 10; i++) {
//     console.log(`Price of candy for ${i}kg is = ${i * price1kg}`)
// }


// For_5

// const price1kg = 5000;

// for(let i =0.1; i <= 1; i += 0.1) {
//     console.log(`Price of candy for ${i}kg is = ${(i * price1kg).toFixed(2)}`)
// }




// For_7


// const  a = parseInt(prompt("A sonini kiriting"))
// const  b = parseInt(prompt("B sonini kiriting"))
// let sum = 0;

// if(a < b) {
//     for(let i = a; i <= b; i++) {
//         sum += i
//     }
//     console.log(`Sum -> `, sum)
// }

// For_8


// const  a = parseInt(prompt("A sonini kiriting"))
// const  b = parseInt(prompt("B sonini kiriting"))
// let sum = 1;

// if(a < b) {
//     for(let i = a; i <= b; i++) {
//         sum *= i
//     }
//     console.log(`Sum -> `, sum)
// }


// For_10

// const n = parseInt(prompt("N sonini kiriting"))
// let sum = 0;


// if(n > 0) {
//     for(let i = 1; i <= n; i++) {
//         sum += 1/i
//     }
//     console.log("Sum -> ", sum)
// }

// For_11

// const n = parseInt(prompt("N sonini kiriting"))
// let S = 0;

// if(n > 0) {
//     for(let i = 0; i <= n; i++) {
//         S += (i+i)**2
//     }
//     console.log("S -> ", S)
// }

//For_12

// const n = parseInt(prompt("N sonini kiriting"))
// let res = 1;


// if(n > 0) {
//     for(let i = 1; i <= n; i +=0.1) {
//         res *= i
//     }
//     console.log("result -> ", res)
// }


// Lesson_4
// 1-exam

// let fruit =  parseInt(prompt("Mevani nomini kiriting"));

// switch (fruit){
// case `olma`:
//   alert ("olma"); 
// break;   
// case `shaftoli`:
//   alert ("shaftoli"); 
// break;   
// case `anor`:
//   alert ("anor"); 
// break;   
//  default:
//   alert ("bunday meva yoq");
//   break;

// }

// 2-exam

// function sumNumber(){
//     const a = 10;
//     b = 20;
//     let sum = a + b;
//     console. log(sum);
// }
// sumNumber();

// 3-exam
// function find_btn(btn);{
//     switch (btn_small){
//         case `small`:
//         return "100px";
//         case `medium`:
//             return "200px";
//         case `large`:
//             return "300px";
//         default:
//             return "bunday btn yoq"
//     }
// }
// console. log("result", find_btn);


// 4-exam
// function sum_I_N(i, n){
//     let sum = 0;
//     while (i < n){
//         if (i%2==1);
//         sum = sum + i;
//         i = i + 2
        
//     } 
    
    
// console. log ("sum",sum)
// }
// sum_I_N(1, 10);


// Lesson_5
// exam_1
// function schedule(){
//     for (let i = 1; i <= 2; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console. log (`$(i) * $(j) = $(i * j{}`));
//         } 
//     }
// }

// exam_2

// function schedule_stars(p){
//     for (let i = 0; i <= p; i++){
//         let row = "";
//         for (let k = 1; k <= 1; k++){
//             row += "*";
//         }
//         console.log(row);

//     }
// }
// schedule_stars(4);

// Lesson_5_homework


// function kenguru(k_1, v_1, k_2, v_2) {
//     let attempts = 0;
//     while(k_2 < k_1) {
//         k_1 += v_1
//         k_2 += v_2
//         attempts++
//     }

//     return attempts
// }

// let res = kenguru(30, 1, 15, 2)
// // console.log(res)

// function stars(a) {
//     for(let i = 1; i <= 5; i++) {
//         let row = "";
//         for(let j = 1; j <= i; j++) {
//            row += a
//         }
//         console.log(row)
//     }
    
// }

// stars("*")

// function personData(name,surname,age,gender,education) {
//     const text = `Hello my name is ${name} and my surname is ${surname}, I'm ${age} years old  ${gender === "man" ? "man" : "Women"}, and ${education ? "Currently i am a student" : "Now, I'm working"}`
//     return text
// }

// console.log(personData("Ulugbek", "Ortigaliyev", 19, "man", true))




// Function expression that checks whether market is making profit by buing or selling stocks  


// const maxProfit = function(...prices) {
//     let buyingProfit = 0;
//     let sellingProfit = 0;

//     for(let i = 1; i < prices.length; i++) {
//         if(prices[i] > prices[i-1]) {
//             let dif = prices[i] - prices[i-1]
//             buyingProfit += dif
//         }else if(prices[i] < prices[i-1]) {
//             let dif = prices[i-1] - prices[i]
//             sellingProfit += dif
//         }
//     }
//     return `Buying profit is ${buyingProfit} and selling profit is ${sellingProfit}`
// }

// console.log(maxProfit(7,1,5,3,6,4))
// console.log(maxProfit(8,5,3,2,1,6))
// console.log(maxProfit(2,1,12,3,5,7))

