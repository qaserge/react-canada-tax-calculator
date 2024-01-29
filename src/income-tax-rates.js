// 2024 January
const incomeTaxRates = [
  {
    name: "Newfoundland and Labrador",
    taxRanges: [
      { min: 0, max: 43198, rate: 8.7 },
      { min: 43199, max: 86395, rate: 14.5 },
      { min: 86396, max: 154244, rate: 15.8 },
      { min: 154245, max: 215943, rate: 17.8 },
      { min: 215944, max: 275870, rate: 19.8 },
      { min: 275871, max: 551739, rate: 20.8 },
      { min: 551740, max: 1103478, rate: 21.3 },
      { min: 1103479, max: Infinity, rate: 21.8 },
    ],
  },
  {
    name: "Prince Edward Island",
    taxRanges: [
      { min: 0, max: 32656, rate: 9.65 },
      { min: 32657, max: 64313, rate: 13.63 },
      { min: 64314, max: 105000, rate: 16.65 },
      { min: 105001, max: 140000, rate: 18 },
      { min: 140001, max: Infinity, rate: 18.75 },
    ],
  },
  {
    name: "Nova Scotia",
    taxRanges: [
      { min: 0, max: 29590, rate: 8.79 },
      { min: 29591, max: 59180, rate: 14.95 },
      { min: 59181, max: 93000, rate: 16.67 },
      { min: 93001, max: 150000, rate: 17.5 },
      { min: 150001, max: Infinity, rate: 21 },
    ],
  },
  {
    name: "New Brunswick",
    taxRanges: [
      { min: 0, max: 49958, rate: 9.4 },
      { min: 49959, max: 99916, rate: 14 },
      { min: 99917, max: 185064, rate: 16 },
      { min: 185065, max: Infinity, rate: 19.5 },
    ],
  },
  {
    name: "Quebec",
    taxRanges: [
      { min: 0, max: 51780, rate: 14 },
      { min: 51781, max: 103545, rate: 19 },
      { min: 103546, max: 126000, rate: 24 },
      { min: 126001, max: Infinity, rate: 25.75 },
    ],
  },
  {
    name: "Ontario",
    taxRanges: [
      { min: 0, max: 51446, rate: 5.05 },
      { min: 51447, max: 102894, rate: 9.15 },
      { min: 102895, max: 150000, rate: 11.16 },
      { min: 150001, max: 220000, rate: 12.16 },
      { min: 220001, max: Infinity, rate: 13.16 },
    ],
  },
  {
    name: "Manitoba",
    taxRanges: [
      { min: 0, max: 47000, rate: 10.8 },
      { min: 47001, max: 100000, rate: 12.75 },
      { min: 100001, max: Infinity, rate: 17.4 },
    ],
  },
  {
    name: "Saskatchewan",
    taxRanges: [
      { min: 0, max: 52057, rate: 10.5 },
      { min: 52058, max: 148734, rate: 12.5 },
      { min: 148735, max: Infinity, rate: 14.5 },
    ],
  },
  {
    name: "Alberta",
    taxRanges: [
      { min: 0, max: 148269, rate: 10 },
      { min: 148270, max: 177922, rate: 12 },
      { min: 177923, max: 237230, rate: 13 },
      { min: 237231, max: 355845, rate: 14 },
      { min: 355846, max: Infinity, rate: 15 },
    ],
  },
  {
    name: "British Columbia",
    taxRanges: [
      { min: 0, max: 47937, rate: 5.06 },
      { min: 47938, max: 95875, rate: 7.7 },
      { min: 95876, max: 110076, rate: 10.5 },
      { min: 110077, max: 133664, rate: 12.29 },
      { min: 133665, max: 181232, rate: 14.7 },
      { min: 181233, max: 252752, rate: 16.8 },
      { min: 252753, max: Infinity, rate: 20.5 },
    ],
  },
  {
    name: "Yukon",
    taxRanges: [
      { min: 0, max: 55867, rate: 6.4 },
      { min: 55868, max: 111733, rate: 9 },
      { min: 111734, max: 173205, rate: 10.9 },
      { min: 173206, max: 500000, rate: 12.8 },
      { min: 500001, max: Infinity, rate: 15 },
    ],
  },
  {
    name: "Northwest Territories",
    taxRanges: [
      { min: 0, max: 50597, rate: 5.9 },
      { min: 50598, max: 101198, rate: 8.6 },
      { min: 101199, max: 164525, rate: 12.2 },
      { min: 164526, max: Infinity, rate: 14.05 },
    ],
  },
  {
    name: "Nunavut",
    taxRanges: [
      { min: 0, max: 53268, rate: 4 },
      { min: 53269, max: 106537, rate: 7 },
      { min: 106538, max: 173205, rate: 9 },
      { min: 173206, max: Infinity, rate: 11.5 },
    ],
  },
];

export default incomeTaxRates;
