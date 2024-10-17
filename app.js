// Get DOM elements
const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const totalExpenseDisplay = document.getElementById("totalExpense");
const expenseList = document.getElementById("expenseList");
const clearExpensesBtn = document.getElementById("clearExpenses");

// Local storage key for expenses
const EXPENSES_KEY = "expenses";

// Initialize expenses array from local storage
let expenses = JSON.parse(localStorage.getItem(EXPENSES_KEY)) || [];

// Function to calculate total expenses
function calculateTotalExpense() {
  const total = expenses.reduce((acc, expense) => acc + expense.price, 0);
  totalExpenseDisplay.textContent = total.toFixed(2);
}

// Function to render expenses to the UI
function renderExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "p-2",
      "bg-gray-100",
      "rounded-lg",
      "text-black"
    );
    li.innerHTML = `<span>${
      expense.description
    }</span><span>₹${expense.price.toFixed(2)}</span>`;
    expenseList.appendChild(li);
  });
  calculateTotalExpense();
}

// Function to add new expense
function addExpense(description, price) {
  expenses.push({ description, price });
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  renderExpenses();
}

// Event listener for form submission
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = descriptionInput.value;
  const price = parseFloat(priceInput.value);
  if (!description || isNaN(price) || price <= 0) {
    alert("Please enter valid values.");
    return;
  }

  addExpense(description, price);

  // Clear input fields
  descriptionInput.value = "";
  priceInput.value = "";
});

// Event listener to clear all expenses
clearExpensesBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all expenses?")) {
    expenses = [];
    localStorage.removeItem(EXPENSES_KEY);
    renderExpenses();
  }
});

// Show current date
const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
currentDateElement.textContent = `${currentDate}`;

// Toggle Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const icon = darkModeToggle.querySelector("i");
  if (document.documentElement.classList.contains("dark")) {
    icon.classList.remove("ri-moon-line");
    icon.classList.add("ri-sun-line");
  } else {
    icon.classList.remove("ri-sun-line");
    icon.classList.add("ri-moon-line");
  }
});

// Initial render of expenses from local storage
renderExpenses();
