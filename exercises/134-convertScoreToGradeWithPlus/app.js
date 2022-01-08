function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    return score > 100 || score < 0 ? "INVALID SCORE" : score >= 90 && score <= 92 ? "A-" : score > 92 && score < 98 ? "A" : score >= 98 ? "A+" : score >= 80 && score <= 82 ? "B-" : score > 82 && score < 88 ? "B" : score >= 88 ? "B+" : score >= 70 && score <= 72 ? "C-" : score > 72 && score < 78 ? "C" : score >= 78 ? "C+" : score >= 60 && score <= 62 ? "D-" : score > 62 && score < 68 ? "D" : score >= 68 ? "D+" : "F"
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'