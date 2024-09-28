// Function to add a new item to the list
function addItem() {
  const itemInput = document.getElementById("new-item");
  const itemText = itemInput.value.trim();

  if (itemText !== "") {
    const shoppingList = document.getElementById("shopping-list");

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      shoppingList.removeChild(listItem);
    };

    // Append the button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the shopping list
    shoppingList.appendChild(listItem);

    // Clear the input and refocus
    itemInput.value = "";
    itemInput.focus();
  }
}

// Add item when the button is clicked
document.getElementById("add-item").addEventListener("click", addItem);

// Optional: Allow adding the item by pressing 'Enter' key
document.getElementById("new-item").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});