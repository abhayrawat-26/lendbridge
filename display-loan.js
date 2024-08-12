document.addEventListener("DOMContentLoaded", function() {
  function handleLoanChange(groupName, targetAttr) {
    const selectedRadio = document.querySelector(`input[name="${groupName}"]:checked`);
    const targetElement = document.querySelector(`[${targetAttr}="yes"]`);
    
    if (selectedRadio && selectedRadio.value === "yes") {
      targetElement.style.display = "flex";
    } else {
      targetElement.style.display = "none";
    }
  }
  const individualLoanRadios = document.querySelectorAll('input[name="individual-loan"]');
  individualLoanRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {
      handleLoanChange("individual-loan", "individual-loan");
    });
  });
  const businessLoanRadios = document.querySelectorAll('input[name="business-loan"]');
  businessLoanRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {
      handleLoanChange("business-loan", "business-loan");
    });
  });
  handleLoanChange("individual-loan", "individual-loan");
  handleLoanChange("business-loan", "business-loan");
});
