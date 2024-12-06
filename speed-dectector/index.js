function checkSpeed(speed) {

    if (speed === "") {
        return "Please enter a speed.";
        
    }

    const speedLimit = 70;
    const pointsPerExceed = 5;
    const maxPoints = 12;
    
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / pointsPerExceed);

        if (demeritPoints > maxPoints) {
            return  "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
console.log(checkSpeed(250))