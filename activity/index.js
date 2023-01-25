const dataDayItems = [
  {
    id: 1,
    name: "sunday",
    activities: [
      "pray",
      "playingLaptop",
      "pray",
      "readReference",
      "pray",
      "playingLaptop",
      "pray",
      "dinner",
      "pray",
      "playingMobilePhone",
      "sleep",
    ],
  },
  {
    id: 2,
    name: "monday",
    activities: [
      "pray",
      "celanBedroom",
      "playingLaptop",
      "pray",
      "sleep",
      "pray",
      "readReference",
      "pray",
      "dinner",
      "doingExercises",
      "pray",
      "sleep",
    ],
  },
  {
    id: 3,
    name: "tuesday",
    activities: [
      "pray",
      "cleanBedroom",
      "breakfast",
      "pray",
      "doingExercise",
      "pray",
      "pray",
      "dinner",
      "pray",
      "sleep",
    ],
  },
  {
    id: 4,
    name: "wednesday",
    activities: [
      "pray",
      "cleanBedroom",
      "breakfast",
      "playingLaptop",
      "pray",
      "readReference",
      "pray",
      "playingLaptop",
      "pray",
      "dinner",
      "pray",
      "playingMobilePhone",
      "sleep",
    ],
  },
  {
    id: 5,
    name: "thursday",
    activities: [
      "pray",
      "cleanBedroom",
      "breakfast",
      "playingLaptop",
      "pray",
      "watchingMovie",
      "pray",
      "pray",
      "dinner",
      "pray",
      "sleep",
    ],
  },
  {
    id: 6,
    name: "friday",
    activities: [
      "pray",
      "cleanBedroom",
      "breakfast",
      "playingBasketball",
      "pray",
      "watchingMovie",
      "pray",
      "playingMobilePhone",
      "pray",
      "dinner",
      "pray",
      "playingLaptop",
      "sleep",
    ],
  },
  {
    id: 7,
    name: "saturday",
    activities: [
      "pray",
      "celanBedroom",
      "breakfast",
      "playingLaptop",
      "pray",
      "pray",
      "pray",
      "dinner",
      "readReference",
      "doingExercises",
      "pray",
    ],
  },
];

// console.log(dataDayItems);

// const day = dataDayItems.find((day) => {
//   return day.id == 3;
// });

// console.log({ day });

function findBusiestDay(days) {
  const activitiesCountItems = days.map((day) => {
    return day.activities.length;
  });
  console.log(activitiesCountItems);
}

console.log(findBusiestDay(dataDayItems));
