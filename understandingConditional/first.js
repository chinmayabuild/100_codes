console.log("js is running...");


// Valid voter
function checkVoter() {
    const ageInput = document.getElementById('ageInput').value;
    const age = Number(ageInput);
    const result = document.getElementById('result');
  
    if (isNaN(age)) {
      result.innerText = "Please enter a valid number.";
    } else if (age >= 18) {
      result.innerText = "You can vote!";
    } else {
      result.innerText = "You can't vote.";
    }
  }

  // shop discount
  let amount = Number(prompt("Enter amount"));
  
  if()

  