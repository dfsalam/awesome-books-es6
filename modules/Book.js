export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    if (id === undefined) {
      this.createId();
      return;
    }
    this.id = id;
  }

  createHtml() {
    const book = document.createElement('div');
    book.className = 'book';
    book.innerHTML = `
      <p>"<span>${this.title}</span>" by <span>${this.author}</span></p>
      <button class="button--shadow" id="${this.id}">Remove</button>
    `;
    return book;
  }

  createId(tokenLen = 16) {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tokenLen; i += 1) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.id = id;
  }
}
