// Old habit, adds a log just to be sure the script(s) load
console.log('Check yaself before ya wreck yaself!');

const upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
  '~',
];
const output = document.getElementById('output');

// This will adjust with selected parameters: Upper, Lower, Numbers, Specials
let range = upper.concat(lower).concat(numbers).concat(special);

// This will adjust with a slider and function that reads the value of the slider
const sliderNumber = () => {
  howLong = document.getElementById('myRange').value;
  document.getElementById('rangeNumber').innerText = howLong;
};

const generate = () => {
  let password = '';
  for (i = 0; i < howLong; i++) {
    let rando = range[Math.floor(Math.random() * range.length)];
    password = password + rando;
  }
  output.innerText = password;
};

const copy = () => {
  navigator.clipboard.writeText(output.innerText);
  alert('Your password has been copied!');
};
