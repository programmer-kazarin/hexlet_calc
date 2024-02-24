import readlineSync from 'readline-sync';

const calculator = {
  read() {
    this.a = Number(readlineSync.question('a: '));
    this.b = Number(readlineSync.question('b: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

export default calculator;
