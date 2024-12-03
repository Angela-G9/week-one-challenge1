function checkSpeed() {
    const speed = document.getElementById("speed").value;
    const result = document.getElementById("result");

    if (speed === "") {
        result.textContent = "Please enter a speed.";
        return;
    }

    const speedLimit = 70;
    const pointsPerExceed = 5;
    const maxPoints = 12;
    
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        result.textContent = "Ok";
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / pointsPerExceed);

        if (demeritPoints > maxPoints) {
            result.textContent = "License suspended";
        } else {
            result.textContent = `Points: ${demeritPoints}`;
        }
    }
}
