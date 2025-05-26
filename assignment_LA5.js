// Hash table to store customers
let customers = {};

// Predefined customers
let initialNames = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Simple hash function to generate a key
function getHashKey(name) {
  return name.length; // Use the length of the name as the hash key
}

// Display the current hash table
function showCustomers() {
  console.log("Current Customers:");
  for (let key in customers) {
    console.log(`${key}: ${customers[key]}`);
  }
}

// Add a new customer
function addCustomer() {
  let name = prompt("Enter the name of the new customer:");
  if (name) {
    let key = getHashKey(name); // Generate a hash key
    if (customers[key]) {
      alert("Hash collision detected! Customer not added.");
    } else {
      customers[key] = name; // Add to hash table
      alert(`${name} added with key ${key}.`);
      showCustomers();
    }
  } else {
    alert("No name entered.");
  }
}

// Service a customer
function serveCustomer() {
  let key = prompt("Enter the hash key of the customer to be served:");
  if (customers[key]) {
    alert(`Customer ${customers[key]} has been served.`);
    delete customers[key]; // Remove from hash table
    showCustomers();
  } else {
    alert("Invalid key.");
  }
}

// Initialize the hash table with predefined customers
function initialCustomers() {
  initialNames.forEach((name) => {
    let key = getHashKey(name);
    customers[key] = name; // Add to hash table
  });
}

// Main program
function main() {
  initialCustomers(); // Add initial customers
  showCustomers(); // Show initial table

  let choice;
  do {
    choice = prompt(
      "Queueing System:\n1. Add Customer\n2. Serve Customer\n3. Exit\nEnter your choice:"
    );
    if (choice === "1") addCustomer();
    else if (choice === "2") serveCustomer();
    else if (choice === "3") alert("Goodbye!");
    else alert("Invalid choice.");
  } while (choice !== "3");
}

// Start the program
main();
