const copyBook1 = {
  // type: 'line', 'square',
  type: 'line',
  format: 'a4',
  color: 'white',
  pageSize: 12,
}

const copyBook2 = {
  // type: 'line', 'square',
  type: 'line',
  format: 'a4',
  color: 'white',
  pageSize: 'двенадцать',
}

const copyBook3 = {
  // type: 'line', 'square',
  type: 'line',
  format: 'a4',
  color: 'white',
  pageSize: 'тридцать два',
}

function getPageSize(copyBook) {
  return copyBook.pageSize;
}

function isBug(copyBook) {
  return copyBook.pageSize > 12;
}

console.log('copyBook:', copyBook1)

console.log('copyBook1 getPageSize:', getPageSize(copyBook1));
console.log('copyBook2 getPageSize:', getPageSize(copyBook2));

console.log('isBug copyBook1:', isBug(copyBook1))
console.log('isBug copyBook2:', isBug(copyBook2))
console.log('isBug copyBook3:', isBug(copyBook3))
