const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

let age: number = 50;
let userName: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => {
  return 100 + a;
};
///////////////////////
let anything: any = -20;
anything = "Text";
anything = {};
///////////////
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}
/////////////////////
let person: [string, number];
person = ["Max", 21];
///////////

enum Status {
  LOADING,
  READY,
}

const picture = {
  status: Status.LOADING,
};

if (picture.status === Status.LOADING) console.log("loading");
///////////////

//////////////Intersrection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Anton",
  privileges: ["drop-all"],
  startDate: new Date(),
};

//////////////guards

type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//////////guards in obj

type AdminNew = {
  name: string;
  privileges: string[];
};

type EmployeeNew = {
  name: string;
  startDate: Date;
};

type UnknownObject = EmployeeNew | AdminNew;

function showFields(e1: UnknownObject) {
  console.log(e1.name);
  if ("privileges" in e1) {
    console.log(e1.privileges);
  }
  if ("startDate" in e1) {
    console.log(e1.startDate);
  }
}
