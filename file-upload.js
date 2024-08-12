document.addEventListener("DOMContentLoaded", function() {
    // Initially hide elements with IDs upload-2 and upload-3
    document.getElementById("upload-2").style.display = "none";
    document.getElementById("upload-3").style.display = "none";

    // Function to check the display property of uploaded-1 and uploaded-2 and show respective uploads
    function checkVisibility() {
        const uploaded1 = document.getElementById("uploaded-1");
        const uploaded2 = document.getElementById("uploaded-2");

        if (uploaded1 && window.getComputedStyle(uploaded1).display === "inline-block") {
            document.getElementById("upload-2").style.display = "block";
        }

        if (uploaded2 && window.getComputedStyle(uploaded2).display === "inline-block") {
            document.getElementById("upload-3").style.display = "block";
        }
    }

    // Set up a MutationObserver to detect changes in the display properties of uploaded-1 and uploaded-2
    const observer = new MutationObserver(function(mutationsList) {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                checkVisibility();
            }
        });
    });

    // Observe changes to the display property of uploaded-1 and uploaded-2
    const uploaded1Element = document.getElementById("uploaded-1");
    const uploaded2Element = document.getElementById("uploaded-2");

    if (uploaded1Element) {
        observer.observe(uploaded1Element, { attributes: true, attributeFilter: ['style'] });
    }

    if (uploaded2Element) {
        observer.observe(uploaded2Element, { attributes: true, attributeFilter: ['style'] });
    }
});
