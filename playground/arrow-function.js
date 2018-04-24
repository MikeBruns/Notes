var square = x => x * x; // don't need curly's if it's a one line return

console.log(square(9));

var user = {
  name: 'Michael',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1,2,3);
user.sayHiAlt(1, 2, 3);
