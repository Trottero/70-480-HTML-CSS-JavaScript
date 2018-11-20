var book = {
  ISBN: '44449944494A',
  genre: 'programming',
  title: 'ms 70-480'
};

// only on page self

function Book() {
  (this.ISBN = '44449944494A'),
    (this.genre = 'programming'),
    (this.title = 'ms 70-480'),
    (this.currentPage = 10),
    (this.flipTo = function flipToPage(pageNr) {
      this.currenPage = pageNr;
    });
}

var bookObject = new Book();

function Book() {}

function Book(title, length, author) {
  this.title = title;
  this.Length = length;
  this.author = author;
}

// Book.prototype = {
//   ISBN: '',
//   Length: -1,
//   genre: '',
//   covering: '',
//   author: '',
//   currentPage: 0,
//   title: '',

//   flipTo: function FlipToAPage(pNum) {
//     this.currentPage = pNum;
//   },

//   turnPageForward: function turnForward() {
//     this.flipTo(this.currentPage++);
//   },

//   turnPageBackward: function turnBackward() {
//     this.flipTo(this.currentPage--);
//   }
// };

var books = new Array(new Book(), new Book('First Edition', 350, 'Random'));
