document.addEventListener('DOMContentLoaded', function() {
  // Get the radio button elements
  var radioVehicles = document.getElementById('radio-vehicles');
  var radioMarine = document.getElementById('radio-marine');
  var radioAircraft = document.getElementById('radio-aircraft');
  var radioEstate = document.getElementById('radio-estate');
  var radioCfl = document.getElementById('radio-cfl');

  // Get the asset-type text block
  var assetTypeText = document.getElementById('asset-type');

  // Get the text blocks for vehicles, planes, and boats
  var vehiclesText = document.getElementById('vehicles-text');
  var planesText = document.getElementById('planes-text');
  var boatsText = document.getElementById('boats-text');

  // Get the info divs
  var realEstateInfo = document.getElementById('real-estate-info');
  var vehicleInfo = document.getElementById('vehicle-info');

  // Function to update the display based on selected radio button
  function updateDisplay() {
    // Hide all text blocks
    [vehiclesText, planesText, boatsText].forEach(text => {
      if (text) text.style.display = 'none';
    });

    // Update asset-type text and show/hide info divs based on which radio button is checked
    if (radioVehicles.checked) {
      if (vehiclesText) vehiclesText.style.display = 'block';
      showVehicleInfo();
    } else if (radioMarine.checked) {
      if (boatsText) boatsText.style.display = 'block';
      showVehicleInfo();
    } else if (radioAircraft.checked) {
      if (planesText) planesText.style.display = 'block';
      showVehicleInfo();
    } else if (radioEstate.checked) {
      showRealEstateInfo();
    } else if (radioCfl.checked) {
      showVehicleInfo();
    }
  }

  function showRealEstateInfo() {
    if (realEstateInfo) realEstateInfo.style.display = 'flex';
    if (vehicleInfo) vehicleInfo.style.display = 'none';
  }

  function showVehicleInfo() {
    if (realEstateInfo) realEstateInfo.style.display = 'none';
    if (vehicleInfo) vehicleInfo.style.display = 'flex';
  }

  // Add event listeners to all the radio buttons
  [radioVehicles, radioMarine, radioAircraft, radioEstate, radioCfl].forEach(radio => {
    if (radio) radio.addEventListener('change', updateDisplay);
  });

  // Initial check when the page loads
  updateDisplay();
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the radio button elements
  var radioVehicles = document.getElementById('radio-vehicles');
  var radioMarine = document.getElementById('radio-marine');
  var radioAircraft = document.getElementById('radio-aircraft');
  var radioEstate = document.getElementById('radio-estate');
  var radioCfl = document.getElementById('radio-cfl');

  // Get the asset-type text block
  var assetTypeText = document.getElementById('asset-type');

  // Get the text blocks for vehicles, planes, and boats
  var vehiclesText = document.getElementById('vehicles-text');
  var planesText = document.getElementById('planes-text');
  var boatsText = document.getElementById('boats-text');

  // Get the info divs
  var realEstateInfo = document.getElementById('real-estate-info');
  var vehicleInfo = document.getElementById('vehicle-info');

  // Get the input fields and select dropdowns
  var raAddressInput = document.getElementById('Real-Estate---Address');
  var raDurationOwnershipSelect = document.getElementById('Real-Estate---Duration-Of-Ownership');
  var raCurrentUseSelect = document.getElementById('Real-Estate---Current-Use');
  var raDescriptionTextarea = document.getElementById('Real-Estate---Description-of-Asset');

  // Get the output text blocks
  var raAddressOutput = document.getElementById('ra-address');
  var raDurationOwnershipOutput = document.getElementById('ra-duration-ownership');
  var raCurrentUseOutput = document.getElementById('current-use');
  var raDescriptionOutput = document.getElementById('description');

  // Function to update the display based on selected radio button
  function updateDisplay() {
    // Hide all text blocks
    [vehiclesText, planesText, boatsText].forEach(text => {
      if (text) text.style.display = 'none';
    });

 // Update asset-type text and show/hide info divs based on which radio button is checked
    if (radioVehicles.checked) {
      if (assetTypeText) assetTypeText.textContent = 'Vehicle';
      if (vehiclesText) vehiclesText.style.display = 'block';
      showVehicleInfo();
    } else if (radioMarine.checked) {
      if (assetTypeText) assetTypeText.textContent = 'Marine';
      if (boatsText) boatsText.style.display = 'block';
      showVehicleInfo();
    } else if (radioAircraft.checked) {
      if (assetTypeText) assetTypeText.textContent = 'Airplane';
      if (planesText) planesText.style.display = 'block';
      showVehicleInfo();
    } else if (radioEstate.checked) {
      if (assetTypeText) assetTypeText.textContent = 'Real Estaste';
      showRealEstateInfo();
    } else if (radioCfl.checked) {
      if (assetTypeText) assetTypeText.textContent = 'Cash Flow Statement';
      showVehicleInfo();
    }

    // Update real estate text blocks
    updateRealEstateTextBlocks();
  }

  function showRealEstateInfo() {
    if (realEstateInfo) realEstateInfo.style.display = 'flex';
    if (vehicleInfo) vehicleInfo.style.display = 'none';
  }

  function showVehicleInfo() {
    if (realEstateInfo) realEstateInfo.style.display = 'none';
    if (vehicleInfo) vehicleInfo.style.display = 'flex';
  }

  function updateRealEstateTextBlocks() {
    if (raAddressInput && raAddressOutput) {
      raAddressOutput.textContent = raAddressInput.value;
    }
    if (raDurationOwnershipSelect && raDurationOwnershipOutput) {
      raDurationOwnershipOutput.textContent = raDurationOwnershipSelect.value;
    }
    if (raCurrentUseSelect && raCurrentUseOutput) {
      raCurrentUseOutput.textContent = raCurrentUseSelect.value;
    }
    if (raDescriptionTextarea && raDescriptionOutput) {
      raDescriptionOutput.textContent = raDescriptionTextarea.value;
    }
  }

  // Add event listeners to all the radio buttons
  [radioVehicles, radioMarine, radioAircraft, radioEstate, radioCfl].forEach(radio => {
    if (radio) radio.addEventListener('change', updateDisplay);
  });

  // Add event listeners to the input fields and select dropdowns
  [raAddressInput, raDurationOwnershipSelect, raCurrentUseSelect, raDescriptionTextarea].forEach(element => {
    if (element) {
      element.addEventListener('input', updateRealEstateTextBlocks);
      element.addEventListener('change', updateRealEstateTextBlocks);
    }
  });

  // Initial check when the page loads
  updateDisplay();
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    // ... (previous elements)
    radios: {
      vehicles: document.getElementById('radio-vehicles'),
      marine: document.getElementById('radio-marine'),
      aircraft: document.getElementById('radio-aircraft'),
      estate: document.getElementById('radio-estate'),
      cfl: document.getElementById('radio-cfl'),
    },
    infoDivs: {
      vehicleInfo: document.getElementById('vehicle-info'),
      realEstateInfo: document.getElementById('real-estate-info'),
    },
    // ... (other elements)
  };

  // ... (previous code)

  // Function to update visibility of info divs
  function updateInfoDivs() {
    const { vehicleInfo, realEstateInfo } = elements.infoDivs;
    const { vehicles, marine, aircraft, estate, cfl } = elements.radios;

    // Hide both info divs by default
    if (vehicleInfo) vehicleInfo.style.display = 'none';
    if (realEstateInfo) realEstateInfo.style.display = 'none';

    // Show vehicle info for vehicles, marine, aircraft, and cfl
    if (vehicles.checked || marine.checked || aircraft.checked || cfl.checked) {
      if (vehicleInfo) vehicleInfo.style.display = 'flex';
    }

    // Show real estate info for estate
    if (estate.checked) {
      if (realEstateInfo) realEstateInfo.style.display = 'flex';
    }
  }

  // Update asset display and info divs
  function updateAssetDisplay() {
    const { vehicles, marine, aircraft, estate, cfl } = elements.radios;
    const { asset, estate: estateStep, cfl: cflStep, afterCfl } = elements.steps;

    if (vehicles.checked || marine.checked || aircraft.checked) {
      [asset, estateStep, cflStep, afterCfl].forEach(step => step.style.display = step === asset ? 'flex' : 'none');
    } else if (estate.checked) {
      [asset, estateStep, cflStep, afterCfl].forEach(step => step.style.display = step === estateStep ? 'flex' : 'none');
    } else if (cfl.checked) {
      [asset, estateStep, cflStep, afterCfl].forEach(step => step.style.display = step === afterCfl ? 'flex' : 'none');
    }

    updateInfoDivs();
  }

  // Add event listeners to radio buttons
  Object.values(elements.radios).forEach(radio => {
    radio.addEventListener('change', updateAssetDisplay);
  });

  // Initial update
  updateAssetDisplay();

  // ... (rest of the code)
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    radios: {
      vehicles: document.getElementById('radio-vehicles'),
      marine: document.getElementById('radio-marine'),
      aircraft: document.getElementById('radio-aircraft'),
      estate: document.getElementById('radio-estate'),
      cfl: document.getElementById('radio-cfl'),
    },
    steps: {
      asset: document.getElementById('step-asset'),
      estate: document.getElementById('step-estate'),
      cfl: document.getElementById('step-cfl'),
      afterCfl: document.getElementById('step-after-cfl'),
    },
  };

  function updateStepVisibility() {
    const { vehicles, marine, aircraft, estate, cfl } = elements.radios;
    const { asset, estate: estateStep, cfl: cflStep, afterCfl } = elements.steps;

    // Hide all steps initially
    [asset, estateStep, cflStep, afterCfl].forEach(step => {
      if (step) step.style.display = 'none';
    });

    // Show appropriate step based on radio selection
    if (cfl.checked) {
      if (cflStep) cflStep.style.display = 'flex';
    } else if (estate.checked) {
      if (estateStep) estateStep.style.display = 'flex';
    } else if (vehicles.checked || marine.checked || aircraft.checked) {
      if (asset) asset.style.display = 'flex';
    }
  }

  // Add event listeners to radio buttons
  Object.values(elements.radios).forEach(radio => {
    if (radio) {
      radio.addEventListener('change', updateStepVisibility);
    }
  });

  // Initial update
  updateStepVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
  // ... (previous code remains the same)

  // New input fields and output elements
  const individualNameInput = document.getElementById('Individual-Owner---Name');
  const individualNameOutput = document.getElementById('single-name');

  const ssnInput = document.getElementById('Individual-Owner---SSN');
  const ssnOutput = document.getElementById('ssn');

  const individualAddressInput = document.getElementById('Individual-Owner---Address');
  const individualAddressOutput = document.getElementById('s-address');

  const businessNameInput = document.getElementById('Business-Owner---Entity-Name');
  const businessNameOutput = document.getElementById('Business-Owner---Entity-Name');

  const businessAddressInput = document.getElementById('Business-Owner---Address');
  const businessAddressOutput = document.getElementById('Business-Owner---Address');

  const einInput = document.getElementById('Business-Owner---EIN');
  const einOutput = document.getElementById('ein');

  const businessOwnersInput = document.getElementById('Business-Owner-Business-Owners');
  const businessOwnersOutput = document.getElementById('beneficial-owners');

  // Function to update output text
  function updateOutput(inputElement, outputElement) {
    if (inputElement && outputElement) {
      inputElement.addEventListener('input', () => {
        outputElement.textContent = inputElement.value;
      });
    }
  }

  // Add event listeners to the new input fields
  updateOutput(individualNameInput, individualNameOutput);
  updateOutput(ssnInput, ssnOutput);
  updateOutput(individualAddressInput, individualAddressOutput);
  updateOutput(businessNameInput, businessNameOutput);
  updateOutput(businessAddressInput, businessAddressOutput);
  updateOutput(einInput, einOutput);
  updateOutput(businessOwnersInput, businessOwnersOutput);

  // ... (previous code remains the same)

  // Display Owner details for Individual or Business
  function handleOwnerChange() {
    const radioIndividual = document.getElementById('owner-individual');
    const radioBusiness = document.getElementById('owner-business');
    const singleDiv = document.getElementById('single');
    const businessDiv = document.getElementById('business');

    if (radioIndividual && radioIndividual.checked) {
      if (singleDiv) singleDiv.style.display = 'block';
      if (businessDiv) businessDiv.style.display = 'none';
    } else if (radioBusiness && radioBusiness.checked) {
      if (singleDiv) singleDiv.style.display = 'none';
      if (businessDiv) businessDiv.style.display = 'block';
    }
  }

  const radioIndividual = document.getElementById('owner-individual');
  const radioBusiness = document.getElementById('owner-business');

  if (radioIndividual) radioIndividual.addEventListener('change', handleOwnerChange);
  if (radioBusiness) radioBusiness.addEventListener('change', handleOwnerChange);

  // Function to update visibility based on radio-cfl
  function updateCflVisibility() {
    const radioCfl = document.getElementById('radio-cfl');
    const divsToHide = ['vehicle-info', 'real-estate-info', 'business', 'single'];

    divsToHide.forEach(divId => {
      const div = document.getElementById(divId);
      if (div) {
        div.style.display = radioCfl.checked ? 'none' : 'block';
      }
    });
  }

  const radioCfl = document.getElementById('radio-cfl');
  if (radioCfl) radioCfl.addEventListener('change', updateCflVisibility);

  // Function to initially hide specified divs
  function initialHideDivs() {
    const divsToHide = ['vehicle-info', 'real-estate-info', 'business', 'single'];

    divsToHide.forEach(divId => {
      const div = document.getElementById(divId);
      if (div) {
        div.style.display = 'none';
      }
    });
  }

  // Call functions for initial setup
  handleOwnerChange();
  updateCflVisibility();
  initialHideDivs();

  // ... (rest of the previous code remains the same)
});

document.addEventListener('DOMContentLoaded', () => {
  // Get references to the radio buttons and the asset type div
  const radioVehicle = document.getElementById('radio-vehicle');
  const radioMarine = document.getElementById('radio-marine');
  const radioAircraft = document.getElementById('radio-aircraft');
  const assetTypeDiv = document.getElementById('step-asset'); // Assuming 'step-asset' is the id of your asset type div

  // Function to update visibility of the asset type div
  function updateAssetTypeVisibility() {
    if (radioVehicle.checked || radioMarine.checked || radioAircraft.checked) {
      assetTypeDiv.style.display = 'flex'; // or 'block', depending on your layout needs
    } else {
      assetTypeDiv.style.display = 'none';
    }
  }

  // Add event listeners to the radio buttons
  [radioVehicle, radioMarine, radioAircraft].forEach(radio => {
    radio.addEventListener('change', updateAssetTypeVisibility);
  });

  // Initial check when the page loads
  updateAssetTypeVisibility();
});
