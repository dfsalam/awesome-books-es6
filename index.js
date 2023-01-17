import Books from './modules/Books.js';
//import date from './modules/Date.js'

const booksCnt = document.getElementById('booksCnt');
const frmAddBook = document.getElementById('frmAddBook');
const btnsPages = document.querySelectorAll('button[to-open]');

btnsPages.forEach((btnPage) => {
  btnPage.addEventListener('click', () => {
    const opened = document.querySelector('[open]');
    opened.removeAttribute('open');
    const toOpen = document.getElementById(`${btnPage.getAttribute('to-open')}`);
    toOpen.setAttribute('open', '');

    document.querySelector('.header__button--active').classList.remove('header__button--active');
    btnPage.classList.add('header__button--active');
  });
});

const books = new Books(booksCnt);

frmAddBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = frmAddBook.title.value.trim();
  const author = frmAddBook.author.value.trim();
  books.add(title, author);
  frmAddBook.reset();
  frmAddBook.title.focus();
});

window.onload = () => {
    date();
  };

