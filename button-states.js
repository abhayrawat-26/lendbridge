document.addEventListener("DOMContentLoaded", function() {
  // Function to validate fields and update the corresponding buttons' states
  function validateFieldsAndToggleButtons() {
    const emailField = document.querySelector("[email-field='true']");
    const emailButton = document.querySelector("[email-btn='true']");
    const fullNameField = document.querySelector("[full-name-field='true']");
    const fullNameButton = document.querySelector("[full-name-btn='true']");
    const phoneNumberField = document.querySelector("[phone-number='true']");
    const phoneButton = document.querySelector("[phone-btn='true']");
    const assetDropdowns = document.querySelectorAll("[asset-dropdown='true']");
    const assetModelField = document.querySelector("[asset-model='true']");
    const assetButton = document.querySelector("[asset-btn='true']");
    const realEstateContentField = document.querySelector("[real-estate-content='true']");
    const realEstateDropdowns = document.querySelectorAll("[real-estate-dropdown='true']");
    const realEstateButton = document.querySelector("[real-estate-btn='true']");
    const estimatedValueField = document.querySelector("[estimated-value='true']");
    const estimatedValueButton = document.querySelector("[estimated-value-btn='true']");
    const assetImageField = document.getElementById('asset-image');
    const assetImageButton = document.querySelector("[asset-image-btn='true']");

    // Validate Email Field
    if (emailField && emailButton) {
      const emailValue = emailField.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === "" || !emailPattern.test(emailValue)) {
        emailButton.style.opacity = "50%";
        emailButton.style.pointerEvents = "none";
      } else {
        emailButton.style.opacity = "100%";
        emailButton.style.pointerEvents = "auto";
      }
    }

    // Validate Full Name Field
    if (fullNameField && fullNameButton) {
      const fullNameValue = fullNameField.value.trim();

      if (fullNameValue === "") {
        fullNameButton.style.opacity = "50%";
        fullNameButton.style.pointerEvents = "none";
      } else {
        fullNameButton.style.opacity = "100%";
        fullNameButton.style.pointerEvents = "auto";
      }
    }

    // Validate Phone Number Field
    if (phoneNumberField && phoneButton) {
      const phoneNumberValue = phoneNumberField.value.trim();

      if (phoneNumberValue === "") {
        phoneButton.style.opacity = "50%";
        phoneButton.style.pointerEvents = "none";
      } else {
        phoneButton.style.opacity = "100%";
        phoneButton.style.pointerEvents = "auto";
      }
    }

    // Validate Asset Dropdowns and Asset Model Field
    if (assetButton) {
      let allDropdownsSelected = true;

      assetDropdowns.forEach(dropdown => {
        if (dropdown.value === "") {
          allDropdownsSelected = false;
        }
      });

      const assetModelValue = assetModelField ? assetModelField.value.trim() : "";

      if (!allDropdownsSelected || assetModelValue === "") {
        assetButton.style.opacity = "50%";
        assetButton.style.pointerEvents = "none";
      } else {
        assetButton.style.opacity = "100%";
        assetButton.style.pointerEvents = "auto";
      }
    }

    // Validate Real Estate Content and Dropdown Fields
    if (realEstateButton) {
      let allRealEstateDropdownsSelected = true;

      realEstateDropdowns.forEach(dropdown => {
        if (dropdown.value === "") {
          allRealEstateDropdownsSelected = false;
        }
      });

      const realEstateContentValue = realEstateContentField ? realEstateContentField.value.trim() : "";

      if (!allRealEstateDropdownsSelected || realEstateContentValue === "") {
        realEstateButton.style.opacity = "50%";
        realEstateButton.style.pointerEvents = "none";
      } else {
        realEstateButton.style.opacity = "100%";
        realEstateButton.style.pointerEvents = "auto";
      }
    }

    // Validate Estimated Value Field
    if (estimatedValueField && estimatedValueButton) {
      const estimatedValue = estimatedValueField.value.trim();

      if (estimatedValue === "") {
        estimatedValueButton.style.opacity = "50%";
        estimatedValueButton.style.pointerEvents = "none";
      } else {
        estimatedValueButton.style.opacity = "100%";
        estimatedValueButton.style.pointerEvents = "auto";
      }
    }

    // Validate Asset Image Upload Field
    if (assetImageField && assetImageButton) {
      // Check if the file input has a file selected
      if (assetImageField.files.length === 0) {
        assetImageButton.style.opacity = "50%";
        assetImageButton.style.pointerEvents = "none";
      } else {
        assetImageButton.style.opacity = "100%";
        assetImageButton.style.pointerEvents = "auto";
      }
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
