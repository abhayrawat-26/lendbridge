document.addEventListener("DOMContentLoaded", function() {
  const phoneNumberField = document.getElementById("Phone-Number");

  function formatPhoneNumber(value) {
    const cleaned = value.replace(/\D/g, ''); // Remove all non-digit characters
    const trimmed = cleaned.substring(0, 10); // Limit the number of digits to 10
    const match = trimmed.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    let formattedValue = '';
    if (match[1]) {
      formattedValue += `(${match[1]}`;
    }
    if (match[2]) {
      formattedValue += `)-${match[2]}`;
    }
    if (match[3]) {
      formattedValue += `-${match[3]}`;
    }

    return formattedValue;
  }

  phoneNumberField.addEventListener("input", function(event) {
    const formattedValue = formatPhoneNumber(event.target.value);
    event.target.value = formattedValue; // Update the input field with the formatted value
  });

  // Prevent more than 10 digits from being entered
  phoneNumberField.addEventListener("keypress", function(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Prevent non-digit characters from being entered
    }

    const currentLength = event.target.value.replace(/\D/g, '').length;
    if (currentLength >= 10) {
      event.preventDefault(); // Prevent entering more than 10 digits
    }
  });
});
