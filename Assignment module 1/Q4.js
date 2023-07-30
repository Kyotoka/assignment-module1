function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80 && score <= 89) {
      return 'B';
    } else if (score >= 70 && score <= 79) {
      return 'C';
    } else if (score >= 60 && score <= 69) {
      return 'D';
    } else {
      return 'F';
    }
  }
  const score1 = 97;
  const score2 = 87;
  const score3 = 77;
  const score4 = 67;
  const score5 = 57;
  console.log("Score: " + score1 + ", Grade: " + calculateGrade(score1));
  console.log("Score: " + score2 + ", Grade: " + calculateGrade(score2));
  console.log("Score: " + score3 + ", Grade: " + calculateGrade(score3));
  console.log("Score: " + score4 + ", Grade: " + calculateGrade(score4));
  console.log("Score: " + score5 + ", Grade: " + calculateGrade(score5));
  