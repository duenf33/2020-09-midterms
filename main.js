// Your code below.
const isValidPassword = function(word){
  return word.split(' ').join('') || word.split('.').join('') && word.length < 12 ? false : true;
}

const onlyCs = function(grades){
    let total = [];
    // for(const pass of grades){
    for(let i = 0; i < grades.length; i++){
    if(grades[i] >= 70 && grades[i] <=79){
    total.push(grades[i])
    }
    }
    return total;
}

const countBs = function(count){
  let newCount = [];
  
  for(let i = 0; i < count.length; i++){
    if(count[i] >= 80 && count[i] <= 89){
      newCount.push(count[i])
    }
  }
  console.log()
  return newCount.length;
}

const lastIndexOfPunctuation = function(lastIndex){
  let answer = [];
  for(let i = 0; i < last.length; i++){
  // console.log(i)
    if(last[i] === '.' || last[i] === '!' || last[i] === '?'){
    answer.push(last.lastIndexOf(last[i]))
    }
  }
return answer !== -1 ? answer : -1
}

const deleteMiddleLetters = function(letters){
  const arr = [];
  for(let i = 0; i < letters.length; i++){
    if(letters.length / 2 === 2.5){
      Math.floor()
    // if(letters.length % 1 === 1){
    console.log(i)
  }
    console.log(letters.length / 2)
  }
  return
  // return letters.length
}

const getCenturies = function(centuries){
  for(let i = 0; i < centuries.length; i++){
    return
    }
}








// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
