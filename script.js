document.getElementById("calculate").addEventListener("click", function () {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
    const loanTerm = parseFloat(document.getElementById("loan-term").value);
  
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
  
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      Monthly Payment: $${monthlyPayment.toFixed(2)}<br>
      Total Payment: $${totalPayment.toFixed(2)}<br>
      Total Interest: $${totalInterest.toFixed(2)}
    `;
  });
  