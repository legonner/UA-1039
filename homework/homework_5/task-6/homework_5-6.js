document.addEventListener('DOMContentLoaded', () => {
    const togglePrice = document.getElementById('togglePrice');
    const toggleDelivery = document.getElementById('toggleDelivery');
    const outPrice = document.getElementById('outprice');
    const promoPrice = document.getElementById('promoValue');
    const promoPriceContainer = document.querySelector('.promo-price');
    const colorButtons = document.querySelectorAll('.color');
    const prices = {
        blue: 170,
        red: 570,
        green: 190,
        orange: 270,
        black: 110
    };

    const updatePrices = (basePrice) => {
        outPrice.textContent = basePrice.toFixed(2);
        promoPrice.textContent = (basePrice * 0.9).toFixed(2);
    };

    const handleColorButtonClick = (colorButton, selectedPrice) => {
        outPrice.textContent = selectedPrice.toFixed(2);
        promoPrice.textContent = (selectedPrice * 0.9).toFixed(2);
        colorButtons.forEach(button => button.classList.remove('active'));
        colorButton.classList.add('active');
    };

    const handleTogglePriceChange = () => {
        const currentPrice = parseFloat(outPrice.textContent);
        outPrice.style.textDecoration = togglePrice.checked ? 'line-through' : 'none';
        promoPriceContainer.style.display = togglePrice.checked ? 'flex' : 'none';
        promoPrice.style.fontSize = togglePrice.checked ? getComputedStyle(outPrice).fontSize : '';
        promoPrice.style.fontWeight = togglePrice.checked ? 'bold' : '';
        updatePrices(currentPrice);
    };

    const handleToggleDeliveryChange = () => {
        const currentPrice = parseFloat(outPrice.textContent);
        const newPrice = toggleDelivery.checked ? currentPrice + 10 : currentPrice - 10;
        updatePrices(newPrice);
    };

    colorButtons.forEach(colorButton => {
        colorButton.addEventListener('click', () => {
            const selectedColor = colorButton.getAttribute('color');
            const selectedPrice = prices[selectedColor];
            handleColorButtonClick(colorButton, selectedPrice);
        });
    });

    togglePrice.addEventListener('change', handleTogglePriceChange);
    toggleDelivery.addEventListener('change', handleToggleDeliveryChange);

    outPrice.style.textDecoration = 'none';
});
