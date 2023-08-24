/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */

export const createAndAppendAuthorOptions = function authorPlaceholder(authors) {
  const authorsHtml = document.createDocumentFragment();
  const firstAuthorElement = document.createElement('option');
  firstAuthorElement.value = 'any';
  firstAuthorElement.innerText = 'All Authors';
  authorsHtml.appendChild(firstAuthorElement);

  for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
  }
  document.querySelector('[data-search-authors]').appendChild(authorsHtml);
};

export const createAndAppendGenreOptions = function genrePlaceholder(genres) {
  const genreHtml = document.createDocumentFragment();
  const firstGenreElement = document.createElement('option');
  firstGenreElement.value = 'any';
  firstGenreElement.innerText = 'All Genres';
  genreHtml.appendChild(firstGenreElement);

  for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
  }

  document.querySelector('[data-search-genres]').appendChild(genreHtml);
};

// colorSchemeUtils.js

export function setPreferredColorScheme() {
  const isDarkModePreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkModePreferred) {
    document.querySelector('[data-settings-theme]').value = 'night';
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
    document.querySelector('[data-settings-theme]').value = 'day';
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }
}

export function attachColorSchemeChangeListener() {
  // Define the change listener
  const colorSchemeChangeListener = (event) => {
    event.preventDefault();
    setPreferredColorScheme(); // Call the function when the color scheme changes
  };

  // Attach the listener to the event
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSchemeChangeListener);
}

// Call the function initially to set the color scheme
setPreferredColorScheme();

export function setThemeFromSelect(selectElement) {
  const selectedValue = selectElement.value;
  if (selectedValue === 'day') {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  } else if (selectedValue === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  }
}
