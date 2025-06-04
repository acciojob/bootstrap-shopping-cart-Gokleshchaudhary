//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Get all quantity inputs
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    // Function to update totals
    function updateTotals() {
        let subtotal = 0;
        
        // Calculate subtotal
        quantityInputs.forEach(input => {
            const quantity = parseInt(input.value) || 0;
            const price = 120; // Price per item
            subtotal += quantity * price;
        });
        
        // Update summary section
        document.querySelector('.summary-row:nth-child(1) span:last-child').textContent = `$${subtotal}`;
        document.querySelector('.total span:last-child').textContent = `$${subtotal}`; // Assuming no shipping/discount
    }
    
    // Add event listeners to quantity inputs
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotals);
    });
    
    // Handle remove links
    const removeLinks = document.querySelectorAll('.remove-link');
    removeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const cartItem = this.closest('.cart-item');
            cartItem.querySelector('.quantity-input').value = '0';
            updateTotals();
        });
    });
    
    // Handle checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        const total = document.querySelector('.total span:last-child').textContent;
        alert(`Proceeding to checkout. Total: ${total}`);
    });
});