const dropdown = document.getElementById('dropdown');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', () => {
    const selectedIndex = dropdown.selectedIndex;
    if (selectedIndex !== -1) {
        dropdown.remove(selectedIndex);
    }
});