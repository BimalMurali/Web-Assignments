function toggleOtherInput() {
    const categorySelect = document.getElementById('category');
    const otherInput = document.getElementById('otherInput');

    if (categorySelect.value === 'other') {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
    }
}