// const actions = [
//   {
//     name: "Randomize",
//     handler(chart) {
//       chart.data.datasets.forEach((dataset) => {
//         dataset.data = Utils.numbers({
//           count: chart.data.labels.length,
//           min: -100,
//           max: 100,
//         });
//       });
//       chart.update();
//     },
//   },
// ];
// // </block:actions>

// // <block:setup:1>
// const DATA_COUNT = 7;
// const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

// const labels = Utils.months({ count: 7 });
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Utils.CHART_COLORS.red,
//       stack: "Stack 0",
//     },
//     {
//       label: "Dataset 2",
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Utils.CHART_COLORS.blue,
//       stack: "Stack 0",
//     },
//     {
//       label: "Dataset 3",
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Utils.CHART_COLORS.green,
//       stack: "Stack 1",
//     },
//   ],
// };
// // </block:setup>

// // <block:config:0>
// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart - Stacked",
//       },
//     },
//     responsive: true,
//     interaction: {
//       intersect: false,
//     },
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   },
// };
// </block:config>

// module.exports = {
//   actions: actions,
//   config: config,
// };

export const UserData = [
  {
    id: 1,
    year: 20,
    Employer: 10,
    Employee: 110,
    Total_Interest: 200,
  },
  {
    id: 2,
    year: "",
    Employer: 20,
    Employee: 110,
    Total_Interest: 210,
  },
  {
    id: 3,
    year: 25,
    Employer: 30,
    Employee: 120,
    Total_Interest: 220,
  },
  {
    id: 4,
    year: "",
    Employer: 40,
    Employee: 130,
    Total_Interest: 230,
  },
  {
    id: 5,
    year: 30,
    Employer: 50,
    Employee: 135,
    Total_Interest: 235,
  },
  {
    id: 6,
    year: "",
    Employer: 60,
    Employee: 140,
    Total_Interest: 240,
  },
  {
    id: 7,
    year: 35,
    Employer: 70,
    Employee: 145,
    Total_Interest: 245,
  },
  {
    id: 8,
    year: "",
    Employer: 80,
    Employee: 150,
    Total_Interest: 250,
  },
  {
    id: 9,
    year: 40,
    Employer: 90,
    Employee: 160,
    Total_Interest: 255,
  },
  {
    id: 10,
    year: "",
    Employer: 95,
    Employee: 165,
    Total_Interest: 260,
  },
  {
    id: 11,
    year: 60,
    Employer: 110,
    Employee: 189,
    Total_Interest: 270,
  },
  {
    id: 12,
    year: "",
    Employer: 120,
    Employee: 190,
    Total_Interest: 280,
  },
  {
    id: 13,
    year: 65,
    Employer: 130,
    Employee: 210,
    Total_Interest: 300,
  },
];
