document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("Business-Owner-Business-Owners");
    if (!inputField) {
      console.error("Input field with ID 'Business-Owner-Business-Owners' not found.");
      return;
    }
    var container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    inputField.parentElement.appendChild(container);
    inputField.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); 
        var inputText = inputField.value.trim();
        var regex = /.+\s*-?\d+%$/;
        if (regex.test(inputText)) {
          var existingTags = Array.from(container.children).map(child => child.textContent);
          if (existingTags.includes(inputText)) {
            alert("This entry already exists.");
            return;
          }
          var wrappedText = document.createElement("span");
          wrappedText.textContent = inputText;
          wrappedText.style.backgroundColor = "#E9EAEC";
          wrappedText.style.color = "black";
          wrappedText.style.padding = "2px 4px";
          wrappedText.style.borderRadius = "6px";
          wrappedText.style.margin = "2px";
          wrappedText.style.cursor = "pointer";
          wrappedText.style.border = "1px solid rgba(10, 15, 41, 0.06)";
          wrappedText.addEventListener("click", function() {
            container.removeChild(wrappedText);
          });
          container.appendChild(wrappedText);
          inputField.value = "";
        } else {
          alert("Please enter a text with a numerical value followed by a percentage (e.g., 'Owner Name 25%' or 'Owner Name-25%').");
        }
      }
    });
  });
