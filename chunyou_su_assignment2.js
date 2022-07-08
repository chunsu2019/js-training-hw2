//#1
//map

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const newArray = itemsObject.map((item) => {
  return {
    quantity: item.quantity * 2,
    price: item.price * 2,
  };
});

//for of
const newArray2 = [];

for (const item of itemsObject) {
  newArray2.push({
    quantity: item.quantity * 2,
    price: item.price * 2,
  });
}

//#2
//filter

const newArray3 = itemsObject.filter((item) => {
  return item.quantity > 2 && item.price > 300;
});

//for of
const newArray4 = [];

for (const item of itemsObject) {
  if (item.quantity > 2 && item.price > 300) newArray4.push(item);
}

//#3
//reduce
const total = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

//for of
const total2 = (arr) => {
  let sum = 0;

  for (const ele of arr) {
    sum += ele;
  }

  return sum;
};

//#4
const string =
  " Perhaps The Easiest-to-understand  Case  For Reduce Is  To Return The Sum Of  All The Elements In  An Array ";

const editString = (str) => {
  return str
    .toLowerCase()
    .replace(/[\s-]+/g, " ")
    .trim();
};

//#5
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const mergeArr = (arr1, arr2) => {
  const mergedArray = arr1.map((obj) => {
    return {
      ...obj,
      ...arr2.find((item) => item.uuid === obj.uuid),
    };
  });

  mergedArray.push(
    ...arr2.filter((obj) => {
      return !arr1.find((item) => item.uuid === obj.uuid);
    })
  );

  for (const obj of mergedArray) {
    obj.name = obj.name ?? null;
    obj.role = obj.role ?? null;
  }

  mergedArray.sort((a, b) => a.uuid - b.uuid);

  return mergedArray;
};

//
console.log("#1 Double");
console.log(newArray);

console.log("\n\n#2 Filter");
console.log(newArray3);

console.log("\n\n#3 Total value");
console.log(`total of [1, 2, 3 4] = ${total([1, 2, 3, 4])}`);

console.log("\n\n#4 String to lowercase + remove extra spaces");
console.log(editString(string));

console.log("\n\n#5 Merge two arrays");
console.log(mergeArr(first, second));
