function BMI(){
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let bmi = (weight/(height*height))
    if (bmi < 18.5){
      document.querySelector("p1").innerText="Your BMI is " + bmi.toFixed(2) + ", so you are underweight.";
    }
    else if (bmi < 24.9){
      document.querySelector("p1").innerText="Your BMI is " + bmi.toFixed(2) + ", so you have a normal weight.";
    }
    else if (bmi > 24.9){
      document.querySelector("p1").innerText="Your BMI is " + bmi.toFixed(2) + ", so you are overweight.";
    }
}
