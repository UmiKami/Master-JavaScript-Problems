function convertScoreToGrade(score) {
    // your code here
    return score > 100 ? "INVALID SCORE" : score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : score >= 0 ? "F" : "INVALID SCORE"
}

var output = convertScoreToGrade(101);
console.log(output); // --> 'A'