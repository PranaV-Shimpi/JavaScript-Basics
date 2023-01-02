window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);

  let errorheight = document.querySelector("#errorheight");
  errorheight.style.color = "red";

  let errorweight = document.querySelector("#errorweight");
  errorweight.style.color = "red";

  let result = (document.querySelector("#result"));

  if (height === "" || height <= 0 || isNaN(height) ) {
    errorheight.innerHTML = "Enter Valid Height";
    setTimeout(() => {
      errorheight.innerHTML = "";
    }, 4000);
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    errorweight.innerHTML = "Enter Valid Weight";
    setTimeout(() => {
      errorweight.innerHTML = "";
    }, 4000);
  } else {
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      result.innerHTML = `<span style="color:red;"> Under Weight :  ${BMI}<span>`;
      result.style.cssText =
      "padding:10px; font-size: 24px;border: 1px solid red; font-family: sans-serif; border-radius:5px;"
    } else if (BMI >= 18.6 && BMI < 24.9) {
      result.innerHTML = ` <span style="color:green;">Normal : ${BMI}<span>`;
      result.style.cssText =
      "padding:10px; font-size: 24px;border: 1px solid green; font-family: sans-serif; border-radius:5px;"
    } else {
      result.innerHTML = ` <span style="color:red;">Over Weight :  ${BMI}<span>`;
      result.style.cssText =
      "padding:10px; font-size: 24px;border: 1px solid red; font-family: sans-serif; border-radius:5px;"
    }
  }
}
