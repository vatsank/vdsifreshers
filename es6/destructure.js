
let [bookName,author] = ["Head First Java","KathySieera"];

console.log(bookName);
console.log(author);

let [prefBook,...details] = ["Head First Java","KathySieera","450.00","o'rileey"];

console.log(prefBook);
console.log(details);


let [, ,...other] = ["Head First Java","KathySieera","450.00","o'rileey"];

console.log(other);
