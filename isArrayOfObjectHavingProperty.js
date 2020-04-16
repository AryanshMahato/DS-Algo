const array = [
  [
    {
      Alias: "",
      Businessname: "abc"
    },
    {
      Alias: "xyz",
      Businessname: "abc"
    }
  ],
  [
    {
      Alias: 123,
      Businessname: "abc"
    }
  ]
];

// We flat array here to simplify the iteration
const flattenArray = array.flat(Infinity);

const checkAlias = flattenArray => {
  let flag = true;
  flattenArray.forEach(item => {
    if (!item.Alias) {
      flag = false;
    }
  });
  return flag;
};

const shouldButtonBeActive = checkAlias(flattenArray);

console.log(shouldButtonBeActive);
