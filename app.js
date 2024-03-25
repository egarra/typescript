var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age = 50;
var userName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
///////////////////////
var anything = -20;
anything = 'Text';
anything = {};
///////////////
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
/////////////////////
var person;
person = ['Max', 21];
///////////
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var picture = {
    status: Status.LOADING
};
if (picture.status === Status.LOADING)
    console.log('loading');
///////////////
