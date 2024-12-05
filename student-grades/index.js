function studentGrade(Number){
// Convert the input to a number
//score = Number(score);
// Check if input is valid
if (Number >= 0 && Number <= 100) {
    if (Number > 79) {
        return('Grade: A');
    } else if (Number >= 60 && Number>= 78) {
        return('Grade: B');
    } else if (Number>= 50 && Number>= 59) {
        return('Grade: C');
    } else if (Number>= 40 &&Number >= 49) {
        return('Grade: D');
    } else if (Number<40 && Number>= 0)
        return('Grade: E');
    }
    else {
    console.log('Invalid score. Please enter a value between 0 and 100.');
}
}
console.log(studentGrade(10))