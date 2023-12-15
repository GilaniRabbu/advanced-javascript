const students = [
    { id: 12, name: 'John' },
    { id: 18, name: 'Omar' },
    { id: 25, name: 'Max' },
    { id: 30, name: 'Hakim' }
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 20);

const biggerOne = students.find(s => s.id > 20);

console.log(biggerOne);