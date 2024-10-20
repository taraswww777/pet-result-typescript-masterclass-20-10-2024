interface CopyBook {
  type: 'line' | 'square',
  format: 'A4',
  color: string,
  pageSize: 12 | 24 | 32 | 48 | 96,
}

const copyBook1: CopyBook = {
  type: 'line',
  format: 'A4',
  color: 'white',
  pageSize: 12,
}

const copyBook2: CopyBook = {
  type: 'line',
  format: 'A4',
  color: 'white',
  pageSize: 12,
}

const copyBook3: CopyBook = {
  type: 'line',
  format: 'A4',
  color: 'white',
  pageSize: 32,
}

function getPageSize(copyBook: CopyBook) {
  return copyBook.pageSize;
}

function isBug(copyBook: CopyBook) {
  return copyBook.pageSize > 12;
}

console.log('copyBook:', copyBook1)

console.log('copyBook1 getPageSize:', getPageSize(copyBook1));
console.log('copyBook2 getPageSize:', getPageSize(copyBook2));

console.log('isBug copyBook1:', isBug(copyBook1))
console.log('isBug copyBook2:', isBug(copyBook2))
console.log('isBug copyBook3:', isBug(copyBook3))
