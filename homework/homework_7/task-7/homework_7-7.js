const countryDropdown = document.getElementById('country');
const citiesDropdown = document.getElementById('cities');
const selectedInfo = document.getElementById('selectedInfo');

const citiesByCountry = {
    ger: ['Berlin', 'Frankfurt', 'Hamburg'],
    usa: ['New York', 'Las Vegas', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Rivne']
};

const updateCitiesDropdown = (country) => {
    citiesDropdown.innerHTML = '';
    citiesByCountry[country].forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase();
        option.textContent = city;
        citiesDropdown.appendChild(option);
    });
};

countryDropdown.addEventListener('change', () => {
    const selectedCountry = countryDropdown.value;
    updateCitiesDropdown(selectedCountry);
    selectedInfo.textContent = `${countryDropdown.options[countryDropdown.selectedIndex].text} `;
    selectedInfo.textContent += ` | `;
});

citiesDropdown.addEventListener('change', () => {
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent += citiesDropdown.options[citiesDropdown.selectedIndex].text;
});

updateCitiesDropdown(countryDropdown.value);