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

  // Add inactive state and opacity 50 to buttons with specific attributes
  const ownerBtns = document.querySelectorAll('[owner-btn-validate="true"]');
  const assetBtns = document.querySelectorAll('[asset-btn-validation="true"]');

  function updateOwnerBtnStyle() {
    const anyOwnerChecked = [...ownerBtns].some(btn => btn.checked);
    ownerBtns.forEach(btn => {
      btn.style.pointerEvents = anyOwnerChecked ? 'auto' : 'none';
      btn.style.opacity = anyOwnerChecked ? '1' : '0.5';
    });
  }

  ownerBtns.forEach(btn => btn.addEventListener('change', updateOwnerBtnStyle));
  updateOwnerBtnStyle();

  // Hide/Show asset type info based on asset selection
  const radioVehicles = document.getElementById('radio-vehicles');
  const radioMarine = document.getElementById('radio-marine');
  const radioAircraft = document.getElementById('radio-aircraft');
  const radioEstate = document.getElementById('radio-estate');
  const radioCfl = document.getElementById('radio-cfl');

  const stepAsset = document.getElementById('step-asset');
  const stepEstate = document.getElementById('step-estate');
  const stepCfl = document.getElementById('step-cfl');
  const stepAfterCfl = document.getElementById('step-after-cfl'); // New step

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
  const radioButtonIds = ['radio-estate', 'radio-vehicles', 'radio-marine', 'radio-aircraft', 'radio-cfl'];
  const inactiveInd = document.getElementById('inactive-ind');

  function checkRadioButtons() {
    const anySelected = radioButtonIds.some(id => {
      const radioButton = document.getElementById(id);
      return radioButton && radioButton.checked;
    });

    assetBtns.forEach(btn => {
      btn.style.pointerEvents = anySelected ? 'auto' : 'none';
      btn.style.opacity = anySelected ? '1' : '0.5';
    });

    const radioCfl = document.getElementById('radio-cfl');
    inactiveInd.style.pointerEvents = radioCfl && radioCfl.checked ? 'none' : 'auto';
    inactiveInd.style.opacity = radioCfl && radioCfl.checked ? '0.5' : '1';
  }

  radioButtonIds.forEach(id => {
    const radioButton = document.getElementById(id);
    if (radioButton) {
      radioButton.addEventListener('change', checkRadioButtons);
    }
  });
  checkRadioButtons();

  // Format estimated asset value field and also, accept only numbers
  const inputField = document.getElementById('Estimated-asset-value');

  inputField.addEventListener('input', function(event) {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = new Intl.NumberFormat('en-US').format(value);
    event.target.value = formattedValue;
  });

  inputField.addEventListener('keydown', function(event) {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    const isNumberKey = /^[0-9]$/i.test(event.key);
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

    individualDetails.style.display = radioIndividual && radioIndividual.checked ? 'flex' : 'none';
    businessDetails.style.display = radioBusiness && radioBusiness.checked ? 'flex' : 'none';
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
