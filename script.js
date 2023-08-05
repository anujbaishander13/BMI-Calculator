function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid values for weight, height, and age.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let resultText = "";
    if (bmi < 18.5) {
        resultText = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText = "Normal";
    } else {
        resultText = "Overweight";
    }

    document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${resultText}.`;
}
