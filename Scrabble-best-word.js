/*
You're playing scrabble, but counting points is hard.
You decide to create a script to calculate the best possible value.

The function takes two arguments :
 `points` : an array of integers representing each of the letters from A to Z and their points.
  `words` : an array of strings, uppercase.

You must return the index of the shortest word which realizes the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/


// Solution

function getBestWord(points,words){
	let by_score     = (a,b) => scoreWord(points,a) - scoreWord(points,b)
  let by_shortest  = (a,b) => b.length - a.length 
  let by_index     = (a,b) => words.indexOf(b) - words.indexOf(a)
  let sorted = words.slice().sort( (a,b) => by_score(a,b) || by_shortest(a,b) || by_index(a,b) )
  return words.indexOf(sorted.pop())
}

function scoreWord(points,word){
	return word.split('').map( c => points[c.charCodeAt(0)-65] ).reduce( (a,b) => a+b )
}