var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

document.write('<h1>Number sorting</h1>');
document.write('Default: <br/>');
document.write(numbers);
document.write('<br/>')

numbers.reverse();

document.write('Reversed: <br/>');
document.write(numbers);
document.write('<br/>')

document.write('Default sort: <br/>');
document.write(numbers.sort());
document.write('<br/>')

document.write('My sort: <br/>');
numbers.sort(function (a, b){
  return a-b;
});
document.write(numbers);

document.write('<h1>Age sorting</h1>');
var friends = [
  {name: 'Sebas', age: 27},
  {name: 'Maru', age: 24},
  {name: 'Vicky', age: 64},
  {name: 'Carlo', age: 66},
];

document.write('<p>Original</p>');
printPeople(friends);

function printPeople(people) {
  people.forEach(function (i, v) {
    document.write(i.name);
  });
}

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }

  return 0;
}


document.write('<p>...Sorting people...</p>');
document.write('<p>Sorted</p>');
printPeople(friends.sort(comparePerson));
