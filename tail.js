function tail(words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      continue;
    } else {
      arr.push(words[i])
    } 
  } 
  return arr;
}; 
module.exports = tail;
