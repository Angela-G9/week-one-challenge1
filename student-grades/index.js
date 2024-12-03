let prompt =require( 'prompt-sync')()
let score = prompt( 'Enter the student marks(0-100)');
score = Number(score);
// Check if input is valid
if (score >= 0 && score <= 100) {
    if (score > 79) {
        console.log('Grade: A');
    } else if (score >= 60) {
        console.log('Grade: B');
    } else if (score >= 50) {
        console.log('Grade: C');
    } else if (score >= 40) {
        console.log('Grade: D');
    } else {
        console.log('Grade: E');
    }
} else {
    console.log('Please enter a valid score between 0 and 100.');
}