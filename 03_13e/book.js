class Book {
  constructor(name, b_pages, id, boughtdate, read, currpage) {
    this.name = name;
    this.b_pages = b_pages;
    this.id = id;
    this.boughtdate = boughtdate;
    this.read = read;
    this.currpage = currpage;
  }

  toogleread(read) {
    this.read = read;
  }
  current_page(currpage) {
    this.currpage = currpage;
  }
  Age() {
    let now = new Date();
    let acquired = new Date(this.boughtdate);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}
export default Book;
