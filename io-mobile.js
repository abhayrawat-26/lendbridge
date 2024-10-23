document.addEventListener('DOMContentLoaded', () => {
  // Get references to the buttons
  const assetBtnMobile = document.getElementById('asset-btn-mobile');
  const ownerBtnMobile = document.getElementById('owner-btn-mobile');

  // Get references to the radio buttons
  const radioButtonsAsset = [
    document.getElementById('radio-estate'),
    document.getElementById('radio-vehicles'),
    document.getElementById('radio-marine'),
    document.getElementById('radio-aircraft'),
    document.getElementById('radio-cfl')
  ];

  const radioButtonsOwner = [
    document.getElementById('owner-individual'),
    document.getElementById('owner-business')
  ];

  // Function to set initial state of buttons
  function setInitialState() {
    assetBtnMobile.style.opacity = '0.5';
    assetBtnMobile.style.pointerEvents = 'none';
    ownerBtnMobile.style.opacity = '0.5';
    ownerBtnMobile.style.pointerEvents = 'none';
  }

  // Function to update asset button state
  function updateAssetButton() {
    const anyAssetSelected = radioButtonsAsset.some(radio => radio.checked);
    if (anyAssetSelected) {
      assetBtnMobile.style.opacity = '1';
      assetBtnMobile.style.pointerEvents = 'auto'; // Enable pointer events
    } else {
      assetBtnMobile.style.opacity = '0.5';
      assetBtnMobile.style.pointerEvents = 'none'; // Disable pointer events
    }
  }

  // Function to update owner button state
  function updateOwnerButton() {
    const anyOwnerSelected = radioButtonsOwner.some(radio => radio.checked);
    if (anyOwnerSelected) {
      ownerBtnMobile.style.opacity = '1';
      ownerBtnMobile.style.pointerEvents = 'auto'; // Enable pointer events
    } else {
      ownerBtnMobile.style.opacity = '0.5';
      ownerBtnMobile.style.pointerEvents = 'none'; // Disable pointer events
    }
  }

  // Add event listeners to asset radio buttons
  radioButtonsAsset.forEach(radio => {
    if (radio) {
      radio.addEventListener('change', updateAssetButton);
    }
  });

  // Add event listeners to owner radio buttons
  radioButtonsOwner.forEach(radio => {
    if (radio) {
      radio.addEventListener('change', updateOwnerButton);
    }
  });

  // Set initial state of buttons
  setInitialState();
});
