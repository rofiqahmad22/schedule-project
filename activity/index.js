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
      "dinner",
      "dinner",
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

function findBusiestDays(days) {
  const activitiesCountItems = days.map((day) => {
    return day.activities.length;
  });

  let largest = 0;
  let largestItems = [];

  // Get the largest value first
  activitiesCountItems.forEach((activitiesCount) => {
    if (activitiesCount > largest) {
      largest = activitiesCount;
    }
  });

  // Collect the largest values compared to the largest value
  activitiesCountItems.forEach((activitiesCount, index) => {
    if (activitiesCount >= largest) {
      largestItems.push(index);
    }
  });

  const busiestDays = largestItems.map((day, index) => {
    const dayIndexToFind = largestItems[index]; // Get the day indexes
    return dataDayItems[dayIndexToFind]; // Get the actual days
  });

  return busiestDays;
}

function displayBusiestDays(busiestDaysResult) {
  const busiestDaysNamesArray = busiestDaysResult.map((busiestDay) => {
    return busiestDay.name;
  });

  const busiestDaysString = busiestDaysNamesArray.join(", ");

  console.log(`The busiest days are on ${busiestDaysString}.`);
}

const busiestDaysResult = findBusiestDays(dataDayItems);
displayBusiestDays(busiestDaysResult);
