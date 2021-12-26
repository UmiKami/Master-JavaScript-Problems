function isOldEnoughToVote(age) {
  // your code here
  return age < 18 ? false : true
}

var output = isOldEnoughToVote(22);
console.log(output);