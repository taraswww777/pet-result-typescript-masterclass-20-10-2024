enum TypeCopyBook {
  line = 'line',
  square = 'square',
}

interface CopyBook {
  type: TypeCopyBook | keyof typeof TypeCopyBook,
  format: 'A4',
  color: string,
  countPages: 12 | 24 | 32 | 48 | 96,
}

const copyBook1: CopyBook = {
  type: TypeCopyBook.line,
  format: 'A4',
  color: 'white',
  countPages: 12,
}

const copyBook2: CopyBook = {
  type: 'line',
  format: 'A4',
  color: 'white',
  countPages: 12,
}

const copyBook3: CopyBook = {
  type: 'square',
  format: 'A4',
  color: 'white',
  countPages: 32,
}

const copyBook4: CopyBook = {
  type: 'square',
  format: 'A4',
  color: 'white',
  countPages: 48,
}

function getPageSize(copyBook: CopyBook) {
  return copyBook.countPages;
}

function isBug(copyBook: CopyBook) {
  return copyBook.countPages > 12;
}

console.log('copyBook:', copyBook1)

console.log('copyBook1 getPageSize:', getPageSize(copyBook1));
console.log('copyBook2 getPageSize:', getPageSize(copyBook2));

console.log('isBug copyBook1:', isBug(copyBook1))
console.log('isBug copyBook2:', isBug(copyBook2))
console.log('isBug copyBook3:', isBug(copyBook3))
console.log('isBug copyBook4:', isBug(copyBook4))
