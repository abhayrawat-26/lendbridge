document.addEventListener("DOMContentLoaded", function() {
  // Function to validate file fields and update the button state
  function validateAssetFilesAndToggleButton() {
    const assetFileFields = document.querySelectorAll("[asset-file='true']");
    const cflButton = document.querySelector("[cfl-btn='true']");

    if (assetFileFields.length > 0 && cflButton) {
      let allFilesUploaded = true;

      // Check if all asset file fields have files uploaded
      assetFileFields.forEach(fileField => {
        if (fileField.files.length === 0) {
          allFilesUploaded = false;
        }
      });

      if (allFilesUploaded) {
        cflButton.style.opacity = "100%";
        cflButton.style.pointerEvents = "auto";
      } else {
        cflButton.style.opacity = "50%";
        cflButton.style.pointerEvents = "none";
      }
    }
  }

  // Attach event listeners to all asset file fields
  const assetFileFields = document.querySelectorAll("[asset-file='true']");
  if (assetFileFields.length > 0) {
    assetFileFields.forEach(fileField => {
      fileField.addEventListener("change", validateAssetFilesAndToggleButton);
    });
  }

  // Initial call to set the button's state on page load
  validateAssetFilesAndToggleButton();
});
