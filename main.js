//Still learning Js 
// Part of Js was written with AI


//welcome address 
alert("Welcome to VTU,we are cheap, fast & reliable");
// Select Elements
const form = document.getElementById('vtu-form');
const phoneNumberInput = document.getElementById('phone-number');
const operatorSelect = document.getElementById('operator');
const amountInput = document.getElementById('amount');
const rechargeBtn = document.getElementById('recharge-btn');
const responseDiv = document.getElementById('response');
const loaderContainer = document.querySelector('.loader-container');

// Add Event Listener to Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const phoneNumber = phoneNumberInput.value;
  const operator = operatorSelect.value;
  const amount = amountInput.value;
  
  // Check if fields are empty
  if (phoneNumber === '' || operator === '' || amount === '') {
    responseDiv.innerHTML = 'Please fill in all fields!';
    return;
  }
  
  // Show Loader
  loaderContainer.style.display = 'block';
  
  // API Call to process transaction
  // link unavailable = API link
  fetch('(link unavailable)', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone_number: phoneNumber,
      operator: operator,
      amount: amount
    })
  })
  .then((response) => response.json())
  .then((data) => {
    loaderContainer.style.display = 'none';
    responseDiv.innerHTML = `Recharge successful! ${data.message}`;
  })