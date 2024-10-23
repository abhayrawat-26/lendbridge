document.addEventListener("DOMContentLoaded", function() {
  // Function to validate fields and update the corresponding buttons' states
  function validateFieldsAndToggleButtons() {
    const emailField = document.querySelector("[email-field='true']");
    const emailButtons = document.querySelectorAll("[email-btn='true']");
    const fullNameField = document.querySelector("[full-name-field='true']");
    const fullNameButtons = document.querySelectorAll("[full-name-btn='true']");
    const phoneNumberField = document.querySelector("[phone-number='true']");
    const phoneButtons = document.querySelectorAll("[phone-btn='true']");
    const assetDropdowns = document.querySelectorAll("[asset-dropdown='true']");
    const assetModelField = document.querySelector("[asset-model='true']");
    const assetButtons = document.querySelectorAll("[asset-btn='true']");
    const realEstateContentField = document.querySelector("[real-estate-content='true']");
    const realEstateDropdowns = document.querySelectorAll("[real-estate-dropdown='true']");
    const realEstateButtons = document.querySelectorAll("[real-estate-btn='true']");
    const estimatedValueField = document.querySelector("[estimated-value='true']");
    const estimatedValueButtons = document.querySelectorAll("[estimated-value-btn='true']");
    const assetImageField = document.getElementById('asset-image');
    const assetImageButtons = document.querySelectorAll("[asset-image-btn='true']");

    // Helper function to toggle button states based on validation
    function toggleButtonsState(buttons, isEnabled) {
      buttons.forEach(button => {
        button.style.opacity = isEnabled ? "100%" : "50%";
        button.style.pointerEvents = isEnabled ? "auto" : "none";
      });
    }

    // Validate Email Field
    if (emailField && emailButtons.length > 0) {
      const emailValue = emailField.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      toggleButtonsState(emailButtons, emailValue !== "" && emailPattern.test(emailValue));
    }

    // Validate Full Name Field
    if (fullNameField && fullNameButtons.length > 0) {
      const fullNameValue = fullNameField.value.trim();
      toggleButtonsState(fullNameButtons, fullNameValue !== "");
    }

    // Validate Phone Number Field
    if (phoneNumberField && phoneButtons.length > 0) {
      const phoneNumberValue = phoneNumberField.value.trim();
      toggleButtonsState(phoneButtons, phoneNumberValue !== "");
    }

    // Validate Asset Dropdowns and Asset Model Field
    if (assetButtons.length > 0) {
      let allDropdownsSelected = true;

      assetDropdowns.forEach(dropdown => {
        if (dropdown.value === "") {
          allDropdownsSelected = false;
        }
      });

      const assetModelValue = assetModelField ? assetModelField.value.trim() : "";
      toggleButtonsState(assetButtons, allDropdownsSelected && assetModelValue !== "");
    }

    // Validate Real Estate Content and Dropdown Fields
    if (realEstateButtons.length > 0) {
      let allRealEstateDropdownsSelected = true;

      realEstateDropdowns.forEach(dropdown => {
        if (dropdown.value === "") {
          allRealEstateDropdownsSelected = false;
        }
      });

      const realEstateContentValue = realEstateContentField ? realEstateContentField.value.trim() : "";
      toggleButtonsState(realEstateButtons, allRealEstateDropdownsSelected && realEstateContentValue !== "");
    }

    // Validate Estimated Value Field
    if (estimatedValueField && estimatedValueButtons.length > 0) {
      const estimatedValue = estimatedValueField.value.trim();
      toggleButtonsState(estimatedValueButtons, estimatedValue !== "");
    }

    // Validate Asset Image Upload Field
    if (assetImageField && assetImageButtons.length > 0) {
      const isFileSelected = assetImageField.files.length > 0;
      toggleButtonsState(assetImageButtons, isFileSelected);
    }
  }

  // Function to restrict input to numbers only
  function restrictToNumbers(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  // Attach event listeners to relevant fields
  const emailField = document.querySelector("[email-field='true']");
  const fullNameField = document.querySelector("[full-name-field='true']");
  const phoneNumberField = document.querySelector("[phone-number='true']");
  const assetDropdowns = document.querySelectorAll("[asset-dropdown='true']");
  const assetModelField = document.querySelector("[asset-model='true']");
  const realEstateContentField = document.querySelector("[real-estate-content='true']");
  const realEstateDropdowns = document.querySelectorAll("[real-estate-dropdown='true']");
  const estimatedValueField = document.querySelector("[estimated-value='true']");
  const assetImageField = document.getElementById('asset-image');

  if (emailField) {
    emailField.addEventListener("input", validateFieldsAndToggleButtons);
    emailField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  if (fullNameField) {
    fullNameField.addEventListener("input", validateFieldsAndToggleButtons);
    fullNameField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  if (phoneNumberField) {
    phoneNumberField.addEventListener("input", validateFieldsAndToggleButtons);
    phoneNumberField.addEventListener("change", validateFieldsAndToggleButtons);
    phoneNumberField.addEventListener("keypress", restrictToNumbers);
  }

  if (assetDropdowns.length > 0) {
    assetDropdowns.forEach(dropdown => {
      dropdown.addEventListener("change", validateFieldsAndToggleButtons);
    });
  }

  if (assetModelField) {
    assetModelField.addEventListener("input", validateFieldsAndToggleButtons);
    assetModelField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  if (realEstateContentField) {
    realEstateContentField.addEventListener("input", validateFieldsAndToggleButtons);
    realEstateContentField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  if (realEstateDropdowns.length > 0) {
    realEstateDropdowns.forEach(dropdown => {
      dropdown.addEventListener("change", validateFieldsAndToggleButtons);
    });
  }

  if (estimatedValueField) {
    estimatedValueField.addEventListener("input", validateFieldsAndToggleButtons);
    estimatedValueField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  if (assetImageField) {
    assetImageField.addEventListener("change", validateFieldsAndToggleButtons);
  }

  // Initial call to set the buttons' states on page load
  validateFieldsAndToggleButtons();
});
