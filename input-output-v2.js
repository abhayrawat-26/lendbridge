document.addEventListener('DOMContentLoaded', () => {
  // Get references to the input fields and the output elements
  const emailInput = document.getElementById('Email-ID');
  const outputEmail = document.getElementById('output-email');
  
  const nameInput = document.getElementById('Full-Name');
  const outputName = document.getElementById('output-name');

  const phoneInput = document.getElementById('Phone-Number');
  const outputPhone = document.getElementById('output-phone');

  const assetValueInput = document.getElementById('Estimated-asset-value');
  const outputValue = document.getElementById('output-value');

  const dropdownElement = document.getElementById('Vehicle-Boat-Plane---Year');
  const outputYear = document.getElementById('output-year');

  // New select elements
  const makeYearSelect = document.getElementById('Vehicle-Boat-Plane---Make-Year');
  const conditionSelect = document.getElementById('Vehicle-Boat-Plane---Condition');
  const titleStatusSelect = document.getElementById('Vehicle-Boat-Plane---Title-Status');
  const durationOwnershipSelect = document.getElementById('Vehicle-Boat-Plane---Duration-of-Ownership');

  // New input fields
  const businessNameInput = document.getElementById('Business-Owner---Entity-Name');
  const einInput = document.getElementById('Business-Owner---EIN');
  const businessOwnersInput = document.getElementById('Business-Owner-Business-Owners');

  // New output elements
  const makeOutput = document.getElementById('make');
  const conditionOutput = document.getElementById('condition');
  const titleStatusOutput = document.getElementById('title-status');
  const durationOwnershipOutput = document.getElementById('duration-ownership');
  const businessNameOutput = document.getElementById('business-name');
  const einOutput = document.getElementById('ein');
  const beneficialOwnersOutput = document.getElementById('beneficial-owners');

  // Function to update output text
  function updateOutput(inputElement, outputElement) {
    if (inputElement && outputElement) {
      inputElement.addEventListener('input', () => {
        outputElement.textContent = inputElement.value;
      });
    }
  }

  // Function to update output text for select elements
  function updateSelectOutput(selectElement, outputElement) {
    if (selectElement && outputElement) {
      selectElement.addEventListener('change', () => {
        outputElement.textContent = selectElement.value;
      });
    }
  }

  // Add event listeners to the input fields to detect changes
  updateOutput(emailInput, outputEmail);
  updateOutput(nameInput, outputName);
  updateOutput(phoneInput, outputPhone);
  updateOutput(assetValueInput, outputValue);
  updateOutput(businessNameInput, businessNameOutput);
  updateOutput(einInput, einOutput);
  updateOutput(businessOwnersInput, beneficialOwnersOutput);

  // Add event listeners to the select elements
  updateSelectOutput(dropdownElement, outputYear);
  updateSelectOutput(makeYearSelect, makeOutput);
  updateSelectOutput(conditionSelect, conditionOutput);
  updateSelectOutput(titleStatusSelect, titleStatusOutput);
  updateSelectOutput(durationOwnershipSelect, durationOwnershipOutput);

  // Add inactive state and opacity 50 to button
  var ownerIndividual = document.getElementById('owner-individual');
  var ownerBusiness = document.getElementById('owner-business');
  var ownerBtnMobile = document.getElementById('owner-btn-mobile');

  function updateOwnerBtnStyle() {
    if (!ownerIndividual.checked && !ownerBusiness.checked) {
      ownerBtnMobile.style.pointerEvents = 'none';
      ownerBtnMobile.style.opacity = '0.5';
    } else {
      ownerBtnMobile.style.pointerEvents = 'auto';
      ownerBtnMobile.style.opacity = '1';
    }
  }

  ownerIndividual.addEventListener('change', updateOwnerBtnStyle);
  ownerBusiness.addEventListener('change', updateOwnerBtnStyle);
  updateOwnerBtnStyle();

  // Hide/Show asset type info based on asset selection
  var radioVehicles = document.getElementById('radio-vehicles');
  var radioMarine = document.getElementById('radio-marine');
  var radioAircraft = document.getElementById('radio-aircraft');
  var radioEstate = document.getElementById('radio-estate');
  var radioCfl = document.getElementById('radio-cfl');

  var stepAsset = document.getElementById('step-asset');
  var stepEstate = document.getElementById('step-estate');
  var stepCfl = document.getElementById('step-cfl');
  var stepAfterCfl = document.getElementById('step-after-cfl'); // New step

  function updateDisplay() {
    if (radioVehicles.checked || radioMarine.checked || radioAircraft.checked) {
      stepAsset.style.display = 'flex';
      stepEstate.style.display = 'none';
      stepCfl.style.display = 'none';
      stepAfterCfl.style.display = 'none';
    } else if (radioEstate.checked) {
      stepEstate.style.display = 'flex';
      stepAsset.style.display = 'none';
      stepCfl.style.display = 'none';
      stepAfterCfl.style.display = 'none';
    } else if (radioCfl.checked) {
      stepAfterCfl.style.display = 'flex'; // Show the step after CFL
      stepAsset.style.display = 'none';
      stepEstate.style.display = 'none';
      stepCfl.style.display = 'none'; // Hide the CFL step
    }
  }

  radioVehicles.addEventListener('change', updateDisplay);
  radioMarine.addEventListener('change', updateDisplay);
  radioAircraft.addEventListener('change', updateDisplay);
  radioEstate.addEventListener('change', updateDisplay);
  radioCfl.addEventListener('change', updateDisplay);
  updateDisplay();

  // Make buttons/selections inactive depending on asset type selections
  var radioButtonIds = ['radio-estate', 'radio-vehicles', 'radio-marine', 'radio-aircraft', 'radio-cfl'];
  var assetBtnMobile = document.getElementById('asset-btn-mobile');
  var inactiveInd = document.getElementById('inactive-ind');

  function checkRadioButtons() {
    var anySelected = radioButtonIds.some(function(id) {
      var radioButton = document.getElementById(id);
      return radioButton && radioButton.checked;
    });

    if (anySelected) {
      assetBtnMobile.style.pointerEvents = 'auto';
      assetBtnMobile.style.opacity = '1';
    } else {
      assetBtnMobile.style.pointerEvents = 'none';
      assetBtnMobile.style.opacity = '0.5';
    }

    var radioCfl = document.getElementById('radio-cfl');
    if (radioCfl && radioCfl.checked) {
      inactiveInd.style.pointerEvents = 'none';
      inactiveInd.style.opacity = '0.5';
    } else {
      inactiveInd.style.pointerEvents = 'auto';
      inactiveInd.style.opacity = '1';
    }
  }

  radioButtonIds.forEach(function(id) {
    var radioButton = document.getElementById(id);
    if (radioButton) {
      radioButton.addEventListener('change', checkRadioButtons);
    }
  });
  checkRadioButtons();

  // Format estimated asset value field and also, accept only numbers
  var inputField = document.getElementById('Estimated-asset-value');

  inputField.addEventListener('input', function(event) {
    var value = event.target.value.replace(/\D/g, '');
    var formattedValue = new Intl.NumberFormat('en-US').format(value);
    event.target.value = formattedValue;
  });

  inputField.addEventListener('keydown', function(event) {
    var allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    var isNumberKey = /^[0-9]$/i.test(event.key);
    if (!allowedKeys.includes(event.key) && !isNumberKey) {
      event.preventDefault();
    }
  });

  // Display Owner details for Individual or Business
  function handleOwnerChange() {
    const radioIndividual = document.getElementById('owner-individual');
    const radioBusiness = document.getElementById('owner-business');
    const individualDetails = document.getElementById('individual-details');
    const businessDetails = document.getElementById('business-details');

    if (radioIndividual && radioIndividual.checked) {
      if (individualDetails) individualDetails.style.display = 'flex';
    } else {
      if (individualDetails) individualDetails.style.display = 'none';
    }

    if (radioBusiness && radioBusiness.checked) {
      if (businessDetails) businessDetails.style.display = 'flex';
    } else {
      if (businessDetails) businessDetails.style.display = 'none';
    }
  }

  const radioIndividual = document.getElementById('owner-individual');
  const radioBusiness = document.getElementById('owner-business');

  if (radioIndividual) radioIndividual.addEventListener('change', handleOwnerChange);
  if (radioBusiness) radioBusiness.addEventListener('change', handleOwnerChange);

  handleOwnerChange();

 /* If required fields aren't filled, add a class of inactive to the buttons. Also, validate the form entries */
  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    
    if (!value) return false;

    switch (type) {
      /*case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);*/
      case 'tel':
        return value.replace(/\D/g, '').length >= 10;
      case 'number':
        return !isNaN(value);
      case 'text':
        return value.length > 0;
      default:
        return true;
    }
  }
});
