document.addEventListener("DOMContentLoaded", function() {
  // Helper function to check if all fields in a given list are filled
  function areAllFieldsFilled(fields) {
    return fields.every(field => field && field.value.trim() !== "");
  }

  // Function to validate fields and update the submit button state
  function validateAndToggleSubmitButton() {
    // Case 1: Check owner details fields
    const ownerNameField = document.querySelector("[owner-detail-name='true']");
    const ownerSSNField = document.querySelector("[owner-detail-ssn='true']");
    const ownerAddressField = document.querySelector("[owner-detail-address='true']");

    // Case 2: Check business details fields
    const businessNameField = document.querySelector("[business-name='true']");
    const businessAddressField = document.querySelector("[business-address='true']");
    const businessEINField = document.querySelector("[business-ein='true']");

    // Submit button
    const submitButton = document.querySelector("[submit-btn='true']");

    // Check if all fields in Case 1 are filled
    const case1Filled = areAllFieldsFilled([ownerNameField, ownerSSNField, ownerAddressField]);

    // Check if all fields in Case 2 are filled
    const case2Filled = areAllFieldsFilled([businessNameField, businessAddressField, businessEINField]);

    // Determine if the submit button should be active or inactive
    if (submitButton) {
      if (case1Filled || case2Filled) {
        submitButton.style.opacity = "100%";
        submitButton.style.pointerEvents = "auto";
      } else {
        submitButton.style.opacity = "50%";
        submitButton.style.pointerEvents = "none";
      }
    }
  }

  // Attach event listeners to relevant fields
  const ownerNameField = document.querySelector("[owner-detail-name='true']");
  const ownerSSNField = document.querySelector("[owner-detail-ssn='true']");
  const ownerAddressField = document.querySelector("[owner-detail-address='true']");

  const businessNameField = document.querySelector("[business-name='true']");
  const businessAddressField = document.querySelector("[business-address='true']");
  const businessEINField = document.querySelector("[business-ein='true']");

  // Attach click event listener to submit button
  const submitButton = document.querySelector("[submit-btn='true']");
  const form = submitButton.closest("form"); // Get the closest form element

  submitButton.addEventListener("click", function(event) {
    const case1Filled = areAllFieldsFilled([ownerNameField, ownerSSNField, ownerAddressField]);

    // Check if Case 1 is true and trigger form submission
    if (case1Filled) {
      event.preventDefault(); // Prevent the default click behavior
      // Use Webflow's built-in submit functionality or handle custom logic
      form.requestSubmit(); // Triggers the form's submit event without reloading
    }
  });

  // Event listener for input changes in the relevant fields
  [ownerNameField, ownerSSNField, ownerAddressField, businessNameField, businessAddressField, businessEINField].forEach(field => {
    if (field) {
      field.addEventListener("input", validateAndToggleSubmitButton);
      field.addEventListener("change", validateAndToggleSubmitButton);
    }
  });

  // Initial call to set the button's state on page load
  validateAndToggleSubmitButton();
});
