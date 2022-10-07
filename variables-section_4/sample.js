var found = true;
var grade = 88.6;
var fName = "Dinesh";
var lName = "kandpal";
console.log(found);
console.log(grade);
console.log(fName);
console.log(lName);
//loop
var names = ["dinesh", "deepak", "divyam", "deepika"];
console.log("=============   looop   ================");
for (var i = 0; i < names.length; i++) {
    console.log(names[i] + "\n");
}
var nums = [1, 7, 8, 67, 9];
console.log("=============   looop-2   ================");
console.log("=============   looop-2  seems like php loop ================");
var sum = 0;
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var i = nums_1[_i];
    sum += i;
}
console.log("sum is : " + sum);
// Dynamic array
console.log("=============   In Type Script Array are mostly dynamic and growable ================");
console.log("=============   defined empty array first ================");
var sports = [];
sports.push("cricket");
sports.push("golf");
sports.push("badminton");
sports.push("tenis");
sports.push("chess");
for (var sport in sports) {
    console.log(sport);
}
