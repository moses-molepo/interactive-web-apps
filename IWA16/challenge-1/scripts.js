// scripts.js

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment
/**
 *this will append the existing html file by adding information regarding the athletes to the webpage
 * @param {*} athlete
 * @returns The new information added to our web page via Javascript
 */
const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete; //deconstruction off the data object on line 29 to get the details of the athletes
  const [latestRace] = races.slice(-1); //deconstruction used to access the last race listed in the race array
  const { date, time } = latestRace; // deconstruction used to access the date and time keys within that object

  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  const raceDay = new Date(date);
  const day = raceDay.getDate();
  const month = MONTHS[raceDay.getMonth()];
  const year = raceDay.getFullYear();

  const [first, second, third, fourth] = time;
  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  list.innerHTML =
    /* html */
    `<dt>Athlete</dt>
      <dd>${firstName}${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} </dd>
      `;

  fragment.appendChild(list);

  return fragment;
};

const NM372 = data.response.data.NM372;
const SV782 = data.response.data.SV782;

document
  .querySelector(`section[data-athlete="${NM372.id}"]`)
  .appendChild(createHtml(NM372));
document
  .querySelector(`section[data-athlete="${SV782.id}"]`)
  .appendChild(createHtml(SV782));
