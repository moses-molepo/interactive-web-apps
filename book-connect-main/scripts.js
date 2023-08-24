/* eslint-disable object-curly-newline */
/* eslint-disable no-restricted-syntax */
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

import { createAndAppendAuthorOptions, createAndAppendGenreOptions, setPreferredColorScheme, attachColorSchemeChangeListener, setThemeFromSelect } from './utilities.js';

const themeSelect = document.querySelector('[data-settings-theme]');
themeSelect.addEventListener('change', () => {
  setThemeFromSelect(themeSelect); // Call the function to update the theme
});

const settingsForm = document.getElementById('settings');

// Add event listener to the form's "submit" event
settingsForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  document.querySelector('[data-settings-overlay]').open = false;
  setThemeFromSelect(themeSelect);
});
// Call the function initially to set the color scheme
setPreferredColorScheme();

// Attach an event listener to update the color scheme dynamically
attachColorSchemeChangeListener();

createAndAppendAuthorOptions(authors);

createAndAppendGenreOptions(genres); // Call the function with your 'genres' object

let page = 1;
let matches = books;

// eslint-disable-next-line no-shadow
function createAndAppendBookPreviews(matches, startIndex, endIndex) {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(startIndex, endIndex)) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;

    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
}

const startingIndex = 0;
const endingIndex = BOOKS_PER_PAGE;
createAndAppendBookPreviews(matches, startingIndex, endingIndex);

document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0;

document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`;

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = true;
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  document.querySelector('[data-list-active]').open = false;
});

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) { genreMatch = true; }
    }

    if (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase()))
      && (filters.author === 'any' || book.author === filters.author)
      && genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  if (result.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message_show');
  } else {
    document.querySelector('[data-list-message]').classList.remove('list__message_show');
  }

  document.querySelector('[data-list-items]').innerHTML = '';
  const newItems = document.createDocumentFragment();

  for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

    newItems.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(newItems);
  document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;

  document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('[data-search-overlay]').open = false;
});

function createBookPreviewElement({ id, image, title, author }) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
    <img class="preview__image" src="${image}" />
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return element;
}

function displayNextPageOfBookPreviews() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of
    matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
    const bookPreview = createBookPreviewElement({ author, id, image, title });
    fragment.appendChild(bookPreview);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
  page += 1;
}

document.querySelector('[data-list-button]').addEventListener('click', displayNextPageOfBookPreviews);

function updateActiveBookDetails(activeBook) {
  if (activeBook) {
    const activeContainer = document.querySelector('[data-list-active]');
    const blurImage = document.querySelector('[data-list-blur]');
    const listImage = document.querySelector('[data-list-image]');
    const titleElement = document.querySelector('[data-list-title]');
    const subtitleElement = document.querySelector('[data-list-subtitle]');
    const descriptionElement = document.querySelector('[data-list-description]');

    activeContainer.open = true;
    blurImage.src = activeBook.image;
    listImage.src = activeBook.image;
    titleElement.innerText = activeBook.title;
    subtitleElement.innerText = `${authors[activeBook.author]} (${new Date(activeBook.published).getFullYear()})`;
    descriptionElement.innerText = activeBook.description;
  }
}

function findActiveBook(node) {
  for (const singleBook of books) {
    if (singleBook.id === node?.dataset?.preview) {
      return singleBook;
    }
  }
  return null;
}

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      active = findActiveBook(node);
      if (active) break;
    }
  }

  updateActiveBookDetails(active);
});
