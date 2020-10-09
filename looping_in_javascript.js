// for - looping
const emojis = [ '😀', '😆', '🙃', '😍' ];
const wavingEmojis = [];

for (let i = 0; i < emojis.length; i++) { wavingEmojis.push(`👋${emojis[i]}👋`); }

// forEach - array method for looping
emojis.forEach((emoji) => console.log(emoji));

// map - array method for looping BUT IT HAS RETURNS
const wavingEmojis = emojis.map((emoji) => `👋${emoji}👋`);

// filter const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const numbersBiggerThanFive = numbers.filter((number) => number > 5);

// sort const numbers = [ 3, 4, 1, 5, 4, 7, 2, 23, 12 ];
const sortFromSmalles = numbers.sort((a, b) => a - b);
const sortFromLargest = numbers.sort((a, b) => b - a);