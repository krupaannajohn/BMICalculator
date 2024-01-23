function CalculateBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let result = eval(weight) /(eval(height)/100)**2;
    let resultCol = document.getElementById("resultCol");

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = 'Your BMI is: ' + result.toFixed(2);
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "You are Underweight. More nutrition required.";
            resultCol.className = "column underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Great! You are Healthy";
            resultCol.className = "column healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "You are Overweight. We need to work on that!";
            resultCol.className = "column overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "You are Obese. Health needs to be a priority.";
            resultCol.className = "column obese";
        }
    }
    

            // Show the result container
    document.getElementById('result').style.display = 'block';
}