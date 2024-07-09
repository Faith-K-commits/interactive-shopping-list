document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const shoppingList = document.getElementById('shoppingList');

    // Load items from local storage
    let items = JSON.parse(localStorage.getItem('shoppingListItems')) || [];

    // Function to render items
    function renderItems() {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.text;
            li.classList.toggle('purchased', item.purchased);
            li.dataset.index = index;
            li.addEventListener('click', togglePurchased);
            li.addEventListener('dblclick', editItem);
            shoppingList.appendChild(li);
        });
    }

    // Function to add item
    function addItem() {
        const newItem = itemInput.value.trim();
        if (newItem) {
            items.push({ text: newItem, purchased: false });
            itemInput.value = '';
            saveAndRenderItems();
        }
    }

    // Function to toggle purchased state
    function togglePurchased(event) {
        const index = event.target.dataset.index;
        items[index].purchased = !items[index].purchased;
        saveAndRenderItems();
    }

    // Function to clear all items
    function clearList() {
        items = [];
        saveAndRenderItems();
    }

    // Function to edit item
    function editItem(event) {
        const index = event.target.dataset.index;
        const newText = prompt('Edit item:', items[index].text);
        if (newText !== null) {
            items[index].text = newText.trim();
            saveAndRenderItems();
        }
    }

    // Function to save items to local storage and render them
    function saveAndRenderItems() {
        localStorage.setItem('shoppingListItems', JSON.stringify(items));
        renderItems();
    }

    // Event listeners
    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);

    // Initial render
    renderItems();
});
