# Interactive Shopping List

This project is an interactive shopping list application that allows users to add items, mark items as purchased, and clear the list. It also supports editing existing items and uses local storage to save the list even after the page is reloaded. Here is the [link](https://wk2-code-challenge.netlify.app/) to the live site.

## Features

- Add new items to the shopping list.
- Mark items as purchased with a single click.
- Edit existing items with a double-click.
- Clear the entire list with a single click.
- Persist the list using local storage.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Faith-K-commits/interactive-shopping-list.git
    ```
2. Navigate to the project directory:
    ```bash
    cd interactive-shopping-list
    ```
3. Open `index.html` in your browser to see the application in action.

## Usage

1. **Add Items**: Type the name of the item in the input field and click the "Add" button.
2. **Mark as Purchased**: Click on an item in the list to toggle its purchased state.
3. **Edit Items**: Double-click on an item in the list to edit its text.
4. **Clear List**: Click the "Clear List" button to remove all items from the list.
5. **Persist Data**: The shopping list is saved in local storage and will be reloaded when the page is refreshed.

## JavaScript Logic

1. Loading items from local storage when the DOM is loaded.
2. Rendering the list items dynamically.
3. Adding new items to the list.
4. Marking items as purchased by toggling their state.
5. Clearing the entire list.
6. Editing existing items.
7. Saving items to local storage

# Conclusion

This interactive shopping list application demonstrates the use of array iteration, DOM manipulation, and event handling in JavaScript. It also showcases the use of local storage for data persistence.
