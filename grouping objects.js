const groupData = (data, groupBy, toBeGrouped) => {
  let dataGroup = {};

  data.forEach(data => (dataGroup = { ...dataGroup, [data[groupBy]]: [] }));

  data.forEach(data => {
    dataGroup[data[groupBy]] = [...dataGroup[data[groupBy]], data[toBeGrouped]];
  });

  return dataGroup;
};

// EXAMPLE
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

groupData(datum, "alias", "name");

/*
  RETURNS:
    {
      Admin: [ 'Aryansh', 'Nikita' ],
      Employee: [ 'Sourav', 'Asit', 'Anjali' ],
      Customer: [ 'Aniket', 'Pradyum', 'Dhiraj' ]
    }
*/
