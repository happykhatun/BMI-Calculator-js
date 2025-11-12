   
   function Calculate(){
    let height = document.getElementById("height").value ;
    let weight = document.getElementById("weight").value ;

    if (height == "" || weight == "") {
        alert("Please enter both height and weight.");
    }
    let bmi = (weight / ((height) ** 2).toFixed(2));
    let result = document.getElementById("result");
    result.innerHTML = "Your BMI is:" + bmi.toFixed(3);
    if(bmi < 18.5){
        result.innerHTML += "(Underweight)";
    }else if(bmi >= 18.5 && bmi <25){
        result.innerHTML += "(Normal weight)";

    }else if(bmi >= 25 && bmi <30){
        result.innerHTML += "(Over weight)";
    }else{
        result.innerHTML += "(Obese)";
    }

   }