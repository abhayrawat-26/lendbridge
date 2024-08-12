document.addEventListener('DOMContentLoaded', function () {
    const ssnField = document.getElementById('Individual-Owner---SSN');
    const einField = document.getElementById('Business-Owner---EIN');

    function formatSSN(value) {
        let cleanedValue = value.replace(/\D/g, ''); // Remove all non-digit characters
        if (cleanedValue.length > 9) {
            cleanedValue = cleanedValue.slice(0, 9); // Limit to 9 digits
        }

        let formattedValue = '';
        if (cleanedValue.length > 5) {
            formattedValue = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 5)}-${cleanedValue.slice(5)}`;
        } else if (cleanedValue.length > 3) {
            formattedValue = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3)}`;
        } else {
            formattedValue = cleanedValue;
        }

        return formattedValue;
    }

    function formatEIN(value) {
        let cleanedValue = value.replace(/\D/g, ''); // Remove all non-digit characters
        if (cleanedValue.length > 9) {
            cleanedValue = cleanedValue.slice(0, 9); // Limit to 9 digits
        }

        let formattedValue = '';
        if (cleanedValue.length > 2) {
            formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(2)}`;
        } else {
            formattedValue = cleanedValue;
        }

        return formattedValue;
    }

    ssnField.addEventListener('input', function () {
        ssnField.value = formatSSN(ssnField.value);
    });

    einField.addEventListener('input', function () {
        einField.value = formatEIN(einField.value);
    });

    function allowOnlyNumbers(event) {
        const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (controlKeys.includes(event.key)) {
            return;
        }

        if (!/\d/.test(event.key)) {
            event.preventDefault();
        }
    }

    ssnField.addEventListener('keydown', allowOnlyNumbers);
    einField.addEventListener('keydown', allowOnlyNumbers);
});
