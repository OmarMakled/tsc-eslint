import fn from './fn';
import obj from './obj';

fn([1, 2, 3, 4]);
obj({name: 'alex', title: 'dev', country: 'EG'})

const any = (data: Person) => {
  console.log(data);
}

any({name: 'foo', title: 'bar', country: 'any'});

let foo: Team;
foo = 'ss';
console.log(foo);

function sample(): string {
  return 'ss';
}