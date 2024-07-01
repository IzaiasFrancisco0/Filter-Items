document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filter');
    const items = document.querySelectorAll('.item');

    function filterItems() {
        items.forEach(item => {
            item.classList.remove('visible');
        });
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const categoryItems = document.querySelectorAll('.' + checkbox.id);
                categoryItems.forEach(categoryItem => {
                    categoryItem.classList.add('visible');
                });
            }
        });
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterItems);
    });

    filterItems(); // Initial call to display the checked categories
});
