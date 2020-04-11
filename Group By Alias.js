const response = [
  {
    alias: "SBI",
    differentBusinessName: "AAASDSAD",
    address: "street1",
    abn: {
      sAD: "asd",
      wqw: "saddwq"
    }
  },
  {
    alias: "SBI",
    differentBusinessName: "iyqwuei",
    address: "street2",
    abn: {
      sAD: "asd",
      wqw: "saddwq"
    }
  },
  {
    alias: "PNB",
    differentBusinessName: "AAASDSAD",
    address: "street3",
    abn: {
      sAD: "asd",
      wqw: "saddwq"
    }
  },
  {
    alias: "SBI",
    differentBusinessName: "AAASDSAD",
    address: "street4",
    abn: {
      sAD: "asd",
      wqw: "saddwq"
    }
  }
];

const aliases = {};

// Alias contains different bank names
response.forEach(data => {
  aliases[data.alias] = [];
});

response.forEach(data => {
  aliases[data.alias] = [...aliases[data.alias], { ...data, alias: undefined }];
});

let groupedData = [];

for (const alias in aliases) {
  groupedData = [
    ...groupedData,
    { alias: alias, subpart: [...aliases[alias]] }
  ];
}

console.log(groupedData);

//
// let groupedArray = [];
// let alias = {};
//
// response.forEach(data => {
//   alias = {
//     ...alias,
//     [data["alias"]]: []
//   };
// });
//
// for (const key in alias) {
//   response.forEach(data => {
//     if (key === data["alias"]) {
//       alias = {
//         ...alias,
//         [key]: [...alias[key], data["differentBusinessName"]]
//       };
//     }
//   });
// }
//
// for (const key in alias) {
//   // response.forEach(data => {
//   //   console.log(data.alias === key);
//   //   if (data["alias"] === key) {
//   //     data.alias = undefined;
//   //     const subpart = { ...data };
//   //     groupedArray = [
//   //       ...groupedArray,
//   //       {
//   //         alias: key,
//   //         subpart: subpart
//   //       }
//   //     ];
//   //   }
//   // });
//   response.forEach(data => {
//     alias[key].forEach(bank => {
//       console.log(bank);
//     });
//   });
// }
//
// console.log(alias);
