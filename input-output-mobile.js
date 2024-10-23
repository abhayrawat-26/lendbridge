document.addEventListener('DOMContentLoaded', () => {
  // Get references to the buttons and radio buttons
  const assetBtnMobile = document.getElementById('asset-btn-mobile');
  const ownerBtnMobile = document.getElementById('owner-btn-mobile');

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

  // Function to check asset radio buttons and show/hide the asset button
  function updateAssetButton() {
    const anyAssetSelected = radioButtonsAsset.some(radio => radio.checked);
    assetBtnMobile.style.display = anyAssetSelected ? 'block' : 'none'; // Show or hide the button
  }

  // Function to check owner radio buttons and show/hide the owner button
  function updateOwnerButton() {
    const anyOwnerSelected = radioButtonsOwner.some(radio => radio.checked);
    ownerBtnMobile.style.display = anyOwnerSelected ? 'block' : 'none'; // Show or hide the button
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

  // Initial update on page load
  updateAssetButton();
  updateOwnerButton();
});
