// Initialize the queue with 5 customers
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"]; // Predefined queue of customers

// Function to display the current queue
function displayQueue() {
  console.log("Current Queue:"); // Log the header for the queue
  if (customerQueue.length === 0) { // Check if the queue is empty
    console.log("The queue is empty."); // Inform the user if the queue is empty
  } else {
    customerQueue.forEach((customer, index) => { // Loop through each customer in the queue
      console.log(`${index + 1}. ${customer}`); // Display the customer's position and name
    });
  }
}

// Function to add a new customer to the queue
function addCustomer() {
  let newCustomer = prompt("Enter the name of the new customer:"); // Prompt the user to enter a new customer's name
  if (newCustomer) { // Check if a name was entered
    customerQueue.push(newCustomer); // Add the new customer to the end of the queue
    alert(`${newCustomer} has been added to the queue with number ${customerQueue.length}.`); // Alert the user about the new customer's position
    displayQueue(); // Display the updated queue
  } else {
    alert("No name entered. Customer not added."); // Alert the user if no name was entered
  }
}

// Function to service a customer by their number
function serviceCustomer() {
  let number = parseInt(prompt("Enter the number of the customer to be serviced:")); // Prompt the user to enter the number of the customer to be serviced
  if (number > 0 && number <= customerQueue.length) { // Check if the entered number is valid
    let servicedCustomer = customerQueue.splice(number - 1, 1)[0]; // Remove the customer from the queue and store their name
    alert(`Customer ${servicedCustomer} has been serviced.`); // Alert the user about the serviced customer
    displayQueue(); // Display the updated queue
  } else {
    alert("Invalid number. Please try again."); // Alert the user if the entered number is invalid
  }
}

// Main program loop
function main() {
  let choice; // Variable to store the user's menu choice
  do {
    choice = prompt( // Prompt the user to choose an action
      "Queueing System:\n1. Add Customer\n2. Service Customer\n3. Exit\nEnter your choice:"
    );
    switch (choice) { // Handle the user's choice
      case "1": // If the user chooses to add a customer
        addCustomer(); // Call the function to add a customer
        break;
      case "2": // If the user chooses to service a customer
        serviceCustomer(); // Call the function to service a customer
        break;
      case "3": // If the user chooses to exit
        alert("Exiting the program. Goodbye!"); // Alert the user about exiting
        break;
      default: // If the user enters an invalid choice
        alert("Invalid choice. Please try again."); // Alert the user about the invalid choice
    }
  } while (choice !== "3"); // Repeat the loop until the user chooses to exit
}

// Start the program
main(); // Call the main function to start the program
