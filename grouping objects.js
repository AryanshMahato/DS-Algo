const datum = [
  { alias: "Admin", name: "Aryansh" },
  { alias: "Admin", name: "Nikita" },
  { alias: "Employee", name: "Sourav" },
  { alias: "Employee", name: "Asit" },
  { alias: "Employee", name: "Anjali" },
  { alias: "Customer", name: "Aniket" },
  { alias: "Customer", name: "Pradyum" },
  { alias: "Customer", name: "Dhiraj" }
];

let dataGroup = {};

datum.forEach(data => (dataGroup = { ...dataGroup, [data.alias]: [] }));

datum.forEach(data => {
  dataGroup[data.alias] = [...dataGroup[data.alias], data.name];
});

console.log(dataGroup);
