export default class HistoryStack {
    constructor() {
      this.stack = [];
      this.currentIndex = -1;
    }
  
    pushState(action) {
      this.stack.splice(this.currentIndex + 1, this.stack.length - this.currentIndex - 1);
      this.stack.push(action);
      this.currentIndex = this.stack.length - 1;
    }
  
    replaceState(action) {
      if (this.currentIndex >= 0) {
        this.stack[this.currentIndex] = action;
      } else {
        this.stack.push(action);
        this.currentIndex = 0;
      }
    }
  
    popState() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        return this.stack[this.currentIndex];
      }
      return null;
    }
  
    forwardState() {
      if (this.currentIndex < this.stack.length - 1) {
        this.currentIndex++;
        return this.stack[this.currentIndex];
      }
      return null;
    }
  
    get length() {
      return this.stack.length;
    }
  
    get current() {
      if (this.currentIndex >= 0) {
        return this.stack[this.currentIndex];
      }
      return null;
    }
  
    get previous() {
      if (this.currentIndex > 0) {
        return this.stack[this.currentIndex - 1];
      }
      return null;
    }
  
    get next() {
      if (this.currentIndex < this.stack.length - 1) {
        return this.stack[this.currentIndex + 1];
      }
      return null;
    }
  }
  