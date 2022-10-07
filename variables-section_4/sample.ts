let found: boolean = true;
let grade: number = 88.6;
let fName: string = "Dinesh";
let lName: string = "kandpal"


console.log(found);
console.log(grade);
console.log(fName);
console.log(lName);

//loop
let names: string[] = ["dinesh", "deepak", "divyam", "deepika"];

console.log("=============   looop   ================");
for(let i=0; i<names.length; i++){
    console.log(names[i]+"\n")
}
    

let nums: number[] = [1, 7,8,67,9];

console.log("=============   looop-2   ================");
console.log("=============   looop-2  seems like php loop ================");
let sum: number = 0;
for(let i of nums){
    sum+=i;
}
console.log("sum is : "+ sum);


// Dynamic array
console.log("=============   In Type Script Array are mostly dynamic and growable ================");
console.log("=============   defined empty array first ================");

let sports: string[] = [];

sports.push("cricket");
sports.push("golf");
sports.push("badminton");
sports.push("tenis");
sports.push("chess");

console.log("=============   looop-2  either in or of both can be used  ================");
for(let sport in sports){
    console.log(sport)
}