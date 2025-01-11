
const codes = document.querySelectorAll('.code');

// Add event listeners to each input field
codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        // Move to the next input if a number is entered
        if (e.target.value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        // Handle backspace key
        if (e.key === 'Backspace') {
            if (!e.target.value && idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });
});
