import { authors, genres, books } from "./data.js";

const matches = books;
let page = 1;

if (!books || !Array.isArray(books)) {
  throw new Error("Source required");
}
if (!page || typeof page !== "number") {
  throw new Error("Page must be a number");
}

const bookList = document.querySelector("[data-list-items]");
const fragment = document.createDocumentFragment();
let startIndex = 0;
let endIndex = 36;

const extracted = books.slice(startIndex, endIndex);

for (let i = 0; i < extracted.length; i++) {
  const sneakPeak = document.createElement("dl");
  sneakPeak.className = "preview";
  sneakPeak.dataset.id = books[i].id;
  sneakPeak.dataset.title = books[i].title;
  sneakPeak.dataset.image = books[i].image;
  sneakPeak.dataset.subtitle = `${authors[books[i].author]} (${new Date(
    books[i].published
  ).getFullYear()})`;
  sneakPeak.dataset.description = books[i].description;
  sneakPeak.dataset.genre = books[i].genres;

  sneakPeak.innerHTML = `
    <div>
      <img class='preview__image' src="${
        books[i].image
      }" alt="No picture available" />
    </div>
    <div class='preview__info'>
      <dt class='preview__title'>${books[i].title}</dt>
      <dt class='preview__author'>By ${authors[books[i].author]}</dt>
    </div>`;

  fragment.appendChild(sneakPeak);
}

bookList.appendChild(fragment);

const settings = document.querySelector("[data-header-settings]");
settings.addEventListener("click", (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "block";
});

const settingsCancel = document.querySelector("[data-settings-cancel]");
settingsCancel.addEventListener("click", (event) => {
  document.querySelector("[data-settings-overlay]").style.display = "none";
});

// Theme
const themeSelect = document.querySelector("[data-settings-theme]");
const themeMode = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },
  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

const form = document.getElementById("settings");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const theme = themeSelect.value;
  document.documentElement.style.setProperty(
    "--color-dark",
    themeMode[theme].dark
  );
  document.documentElement.style.setProperty(
    "--color-light",
    themeMode[theme].light
  );
});

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const initialTheme = prefersDarkMode ? "night" : "day";
document.documentElement.style.setProperty(
  "--color-dark",
  themeMode[initialTheme].dark
);
document.documentElement.style.setProperty(
  "--color-light",
  themeMode[initialTheme].light
);

const bookPreview = (event) => {
  const overlay = document.querySelector("[data-list-active]");
  const title = document.querySelector("[data-list-title]");
  const subtitle = document.querySelector("[data-list-subtitle]");
  const description = document.querySelector("[data-list-description]");
  const image = document.querySelector("[data-list-image]");
  const imageBlur = document.querySelector("[data-list-blur]");

  if (event.target.dataset.id) {
    overlay.style.display = "block";
  }
  if (event.target.dataset.description) {
    description.innerHTML = event.target.dataset.description;
  }
  if (event.target.dataset.subtitle) {
    subtitle.innerHTML = event.target.dataset.subtitle;
  }
  if (event.target.dataset.title) {
    title.innerHTML = event.target.dataset.title;
  }
  if (event.target.dataset.image) {
    image.setAttribute("src", event.target.dataset.image);
    imageBlur.setAttribute("src", event.target.dataset.image);
  }
};

const detailsClose = document.querySelector("[data-list-close]");
detailsClose.addEventListener("click", () => {
  document.querySelector("[data-list-active]").style.display = "none";
});

bookList.addEventListener("click", bookPreview);

const showMoreButton = document.querySelector("[data-list-button]");

const handleShowMore = () => {
  const fragment = document.createDocumentFragment();
  startIndex += 36;
  endIndex += 36;
  const extracted = books.slice(startIndex, endIndex);

  for (const {
    author,
    image,
    title,
    id,
    description,
    published,
  } of extracted) {
    const preview = document.createElement("dl");
    preview.className = "preview";
    preview.dataset.id = id;
    preview.dataset.title = title;
    preview.dataset.image = image;
    preview.dataset.subtitle = `${authors[author]} (${new Date(
      published
    ).getFullYear()})`;
    preview.dataset.description = description;

    preview.innerHTML = `
      <div>
        <img class='preview__image' src="${image}" alt="book pic" />
      </div>
      <div class='preview__info'>
        <dt class='preview__title'>${title}</dt>
        <dt class='preview__author'>By ${authors[author]}</dt>
      </div>`;

    fragment.appendChild(preview);
  }

  const bookList = document.querySelector("[data-list-items]");
  bookList.appendChild(fragment);

  const booksLeft = Math.min(books.length - endIndex);
  showMoreButton.innerHTML = `Show More <span>(${booksLeft})</span>`;
};

showMoreButton.addEventListener("click", handleShowMore);

const searchButton = document.querySelector("[data-header-search]");
const searchOverlay = document.querySelector("[data-search-overlay]");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchOverlay.style.display = "block";
});

const dataSearchGenres = document.querySelector("[data-search-genres]");
const genreFragment = document.createDocumentFragment();

// Add the "All genres" option
const allGenresOption = document.createElement("option");
allGenresOption.value = "any";
allGenresOption.innerText = "All genres";
genreFragment.appendChild(allGenresOption);

// Add individual genre options
for (const [id, name] of Object.entries(genres)) {
  const option = document.createElement("option");
  option.value = id;
  option.innerText = name;
  genreFragment.appendChild(option);
}

// Append the genre fragment to the dataSearchGenres element
dataSearchGenres.appendChild(genreFragment);

const dataSearchAuthors = document.querySelector("[data-search-authors]");
const authorFragment = document.createDocumentFragment();

// Add the "All authors" option
const allAuthorsOption = document.createElement("option");
allAuthorsOption.value = "any";
allAuthorsOption.innerText = "All authors";
authorFragment.appendChild(allAuthorsOption);

// Add individual author options
for (const [id, name] of Object.entries(authors)) {
  const option = document.createElement("option");
  option.value = id;
  option.innerText = name;
  authorFragment.appendChild(option);
}

// Append the author fragment to the dataSearchAuthors element
dataSearchAuthors.appendChild(authorFragment);

const dataSearchForm = document.getElementById("search");
dataSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  let result = [];

  for (const book of books) {
    const titleMatch =
      filters.title.trim() === "" ||
      book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch =
      filters.author === "any" || book.author === filters.author;
    let genreMatch = false;

    if (filters.genre === "any") {
      genreMatch = true;
    } else {
      for (const genre of book.genres) {
        if (genre === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  console.log(result);
  const fragment2 = document.createDocumentFragment();
  if (result.length >= 1) {
    for (let i = 0; i < result.length; i++) {
      const sneakPeak = document.createElement("dl");
      sneakPeak.className = "preview";
      sneakPeak.dataset.id = result[i].id;
      sneakPeak.dataset.title = result[i].title;
      sneakPeak.dataset.image = result[i].image;
      sneakPeak.dataset.subtitle = `${authors[result[i].author]} (${new Date(
        result[i].published
      ).getFullYear()})`;
      sneakPeak.dataset.description = result[i].description;
      sneakPeak.dataset.genre = result[i].genres;

      sneakPeak.innerHTML = `
      <div>
        <img class='preview__image' src="${
          result[i].image
        }" alt="No picture available" />
      </div>
      <div class='preview__info'>
        <dt class='preview__title'>${result[i].title}</dt>
        <dt class='preview__author'>By ${authors[result[i].author]}</dt>
      </div>`;

      fragment2.appendChild(sneakPeak);
    }
  }
  const listElement = document.querySelector("main.list");
  listElement.innerHTML = "";
  listElement.appendChild(fragment2);
});

const cancelButton = document.querySelector("[data-search-cancel]");
cancelButton.addEventListener("click", () => {
  document.querySelector("[data-search-overlay]").style.display = "none";
});

const listButton = document.querySelector("[data-list-button]");
listButton.innerText = "Show more";
