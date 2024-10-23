document.addEventListener("DOMContentLoaded", function() {
  // Hide the buttons initially
  const assetButton = document.querySelector("[asset-mobile-btn='true']");
  const realEstateButton = document.querySelector("[real-estate-mobile-btn='true']");
  const cflButton = document.querySelector("[cfl-btn-mobile='true']");

  function hideAllButtons() {
    assetButton.style.display = "none";
    realEstateButton.style.display = "none";
    cflButton.style.display = "none";
  }

  hideAllButtons(); // Hide buttons on load

  // Function to show the correct button based on selected radio button
  function showButtonBasedOnSelection() {
    const selectedRadio = document.querySelector("input[type='radio']:checked");

    hideAllButtons(); // Hide all buttons first

    if (selectedRadio) {
      const selectedId = selectedRadio.id;

      if (selectedId === "radio-estate") {
        realEstateButton.style.display = "flex";
      } else if (selectedId === "radio-vehicles" || selectedId === "radio-marine" || selectedId === "radio-aircraft") {
        assetButton.style.display = "flex";
      } else if (selectedId === "radio-cfl") {
        cflButton.style.display = "flex";
      }
    }
  }

  // Add event listeners to radio buttons
  document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", showButtonBasedOnSelection);
  });

  // Initially check if any radio is selected on page load
  showButtonBasedOnSelection();
});
