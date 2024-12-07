// Select elements from the DOM
const inputField = document.getElementById("input");
const addButton = document.getElementById("button");
const taskList = document.getElementById("task-list");

// Add a click event listener to the button
addButton.addEventListener("click", function () {
    // Get the input value
    const task = inputField.value.trim();

    // Check if the input is not empty
    if (task !== "") {
        // Create a new list item
        const listItem = document.createElement("li");

        // Add the task text
        listItem.textContent = task;

        // Create a checkbox for marking as completed
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";
        listItem.prepend(checkbox); // Add checkbox at the beginning of the list item

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        listItem.appendChild(deleteButton); // Add delete button at the end of the list item

        // Add functionality to the delete button
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        // Add functionality to the checkbox
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.style.textDecoration = "line-through";
            } else {
                listItem.style.textDecoration = "none";
            }
        });

        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        inputField.value = "";
    } else {
        // Alert the user if the input is empty
        alert("Please enter a task!");
    }
});
