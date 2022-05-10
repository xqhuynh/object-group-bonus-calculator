const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// // This problem is massive! Break the problem down, take small steps, and test as you go.
// // What is the fewest lines of code I can write and test to get just a little closer?

// // This is not a race. Everyone on your team should understand what is happening.
// // Ask questions when you don't.

// let newEmployeeArray = [];
// // Name property function
// function newEmployeeRecord(name) {
//   let newEmployee = {
//     name: name,
//     bounsPercentage: bounusPercentage,
//     totalCompensation:totalCompensation,
//     totalBouns: totalBouns
//   };
//   newEmployee.push(name);
//   console.log
// }

// console.log(employees);

// // totalBonus & bonusPercentage w/out 5%
// for (let info of employees) {
//   if (info.reviewRating <= 2) {
//     console.log(null);
//   } else if (info.reviewRating === 3) {
//     let ratingThreeBonus = 0.04 * info.annualSalary;
//     console.log(ratingThreeBonus);
//     console.log(`${info.name} receives 4%`);
//   } else if (info.reviewRating === 4) {
//     let ratingFourBonus = 0.06 * info.annualSalary;
//     console.log(ratingFourBonus);
//     console.log(`${info.name} receives 6%`);
//   } else if (info.reviewRating === 5) {
//     let ratingFiveBonus = 0.1 * info.annualSalary;
//     console.log(ratingFiveBonus);
//     console.log(`${info.name} receives 10%`);
//   } else {
//     console.log("you get nothing");
//   }
// }

// // totalBonus & bonusPercentage w/5%
// for (let info2 of employees) {
//   if (info2.employeeNumber < 10000 && info2.reviewRating === 3) {
//     let el = info2.annualSalary * 0.09;
//     console.log(el);
//     console.log(`${info2.name} receives addition 5% bonus`);
//   } else if (info2.employeeNumber < 10000 && info2.reviewRating === 4) {
//     let el2 = info2.annualSalary * 0.11;
//     console.log(el2);
//     console.log(`${info2.name} receives addition 5% bonus`);
//   } else if (info2.employeeNumber < 10000 && info2.reviewRating === 5) {
//     let el3 = info2.annualSalary * 0.12;
//     console.log(el3);
//     console.log(`${info2.name} receives addition 12% bonus`);
//   }
// }

// // new array after pushed

let newEmployeeRecord = [];
function records(array) {
  for (let employee of array) {
    let el = [
      {
        name: employees.name,
        bonusPercentage: employees.reviewRating,
      },
    ];
    newEmployeeRecord.push(employee.name);
    newEmployeeRecord.push(employee.reviewRating);
  }
}

records(employees);
console.log(newEmployeeRecord);
