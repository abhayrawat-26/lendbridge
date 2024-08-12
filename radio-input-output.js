document.addEventListener('DOMContentLoaded', function() {
  // Get the radio button elements
  var radioVehicles = document.getElementById('radio-vehicles');
  var radioMarine = document.getElementById('radio-marine');
  var radioAircraft = document.getElementById('radio-aircraft');
  var radioEstate = document.getElementById('radio-estate');
  var radioCfl = document.getElementById('radio-cfl');

  // Get the output elements with the specified IDs
  var outputVehicleImage = document.getElementById('vehicle');
  var outputMarineImage = document.getElementById('marine');
  var outputAircraftImage = document.getElementById('airplanne');
  var outputEstateImage = document.getElementById('real-estate');
  var outputCflImage = document.getElementById('cash');

  // Function to update the display based on selected radio button
  function updateDisplay() {
    // Hide all images first
    [outputVehicleImage, outputMarineImage, outputAircraftImage, outputEstateImage, outputCflImage].forEach(img => {
      if (img) img.style.display = 'none';
    });

    // Show the appropriate image based on which radio button is checked
    if (radioVehicles.checked && outputVehicleImage) {
      outputVehicleImage.style.display = 'block';
    } else if (radioMarine.checked && outputMarineImage) {
      outputMarineImage.style.display = 'block';
    } else if (radioAircraft.checked && outputAircraftImage) {
      outputAircraftImage.style.display = 'block';
    } else if (radioEstate.checked && outputEstateImage) {
      outputEstateImage.style.display = 'block';
    } else if (radioCfl.checked && outputCflImage) {
      outputCflImage.style.display = 'block';
    }
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

  // Get the output elements
  var outputVehicleImage = document.getElementById('output-vehicle-image');
  var outputMarineImage = document.getElementById('output-marine-image');
  var outputAircraftImage = document.getElementById('output-aircraft-image');
  var outputEstateImage = document.getElementById('output-estate-image');
  var outputCflImage = document.getElementById('output-cfl-image');

  // Get the asset-type text block
  var assetTypeText = document.getElementById('asset-type');

  // Function to update the display based on selected radio button
  function updateDisplay() {
    // Hide all images first
    [outputVehicleImage, outputMarineImage, outputAircraftImage, outputEstateImage, outputCflImage].forEach(img => {
      if (img) img.style.display = 'none';
    });

    // Show the appropriate image and update asset-type text based on which radio button is checked
    if (radioVehicles.checked) {
      if (outputVehicleImage) outputVehicleImage.style.display = 'block';
      if (assetTypeText) assetTypeText.textContent = 'Vehicle';
    } else if (radioMarine.checked) {
      if (outputMarineImage) outputMarineImage.style.display = 'block';
      if (assetTypeText) assetTypeText.textContent = 'Marine';
    } else if (radioAircraft.checked) {
      if (outputAircraftImage) outputAircraftImage.style.display = 'block';
      if (assetTypeText) assetTypeText.textContent = 'Aircraft';
    } else if (radioEstate.checked) {
      if (outputEstateImage) outputEstateImage.style.display = 'block';
      if (assetTypeText) assetTypeText.textContent = 'Real Estate';
    } else if (radioCfl.checked) {
      if (outputCflImage) outputCflImage.style.display = 'block';
      if (assetTypeText) assetTypeText.textContent = 'Cash Flow Loan';
    }
  }

  // Add event listeners to all the radio buttons
  [radioVehicles, radioMarine, radioAircraft, radioEstate, radioCfl].forEach(radio => {
    if (radio) radio.addEventListener('change', updateDisplay);
  });

  // Initial check when the page loads
  updateDisplay();
});
