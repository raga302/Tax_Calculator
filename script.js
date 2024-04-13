
const submit = document.querySelector(".submit_btn");
let gross_annual_income = document.querySelector(".gross_annual_income");
let extra_income = document.querySelector(".extra_income");
let age = document.querySelector(".age");
let total_deduction = document.querySelector(".total_deduction");
const error_message = document.querySelector(".error_message");
let input_icon = document.querySelector(".input_icon");
let extra_input_icon = document.querySelector(".extra_input_icon");
let deduction_input_icon = document.querySelector(".deduction_input_icon");
let form = document.querySelector(".form-data");
let result = document.querySelector(".result");
let timer = document.querySelector(".timer");


submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (!gross_annual_income.value) {
        input_icon.style.display = "flex";
        extra_input_icon.style.display = "none";
        deduction_input_icon.style.display = "none";
        error_message.innerHTML = "Error ! Please Enter Valid Gross Annual Income (Only Numbers) !";
    } else if (!extra_income.value) {
        error_message.innerHTML = "Error ! Please Enter Valid Extra Income (Only Numbers) !";
        extra_input_icon.style.display = "flex";
        input_icon.style.display = "none";
        deduction_input_icon.style.display = "none";
    } else if (!age.value) {
        input_icon.style.display = "none";
        extra_input_icon.style.display = "none";
        deduction_input_icon.style.display = "none";
        error_message.innerHTML = "Error ! Please Select Valid Age Group !"
    } else if (!total_deduction.value) {
        error_message.innerHTML = "Error ! Please Enter Valid Total Deduction (Only Numbers)";
        deduction_input_icon.style.display = "flex";
        input_icon.style.display = "none";
        extra_input_icon.style.display = "none";
    }
    else {
        error_message.innerHTML = ""
        input_icon.style.display = "none";
        extra_input_icon.style.display = "none";
        deduction_input_icon.style.display = "none";

        gross_annual_income = parseInt(gross_annual_income.value)
        extra_income = parseInt(extra_income.value)
        total_deduction = parseInt(total_deduction.value)

        let total_amount = gross_annual_income + extra_income - total_deduction
        console.log(total_amount);
        if (total_amount < 800000) {
            result.innerHTML = "You can't Pay Tax Because Your Income Less then 8 Lakh !";
        } else {
            if (age.value === "Less then 40") {
                let payable = 0.3 * (gross_annual_income - 800000)
                result.innerHTML = "Net Tax Payable :- " + payable;
                
                
            } else if (age.value === "Between 40 To 60") {
                let payable = 0.4 * (gross_annual_income - 800000)
                result.innerHTML = "Net Tax Payable :- " + payable;
                console.log(payable);
            } else {
                let payable = 0.1 * (gross_annual_income - 800000)
                result.innerHTML = "Net Tax Payable :- " + payable;
                console.log(payable);
            }

        }


        var timeLeft = 10;
    
        
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
          if (timeLeft == -1) {
            clearTimeout(timerId);
            location.reload();
          } else {
            timer.innerHTML = 'In <span class="text-light">'+ timeLeft + '</span> seconds Page will be Reload !';
            timeLeft--;
          }
        }

    }
    

})