# Expense Tracker
A simple web-based Expense Tracker app built with HTML, CSS (TailwindCSS), and JavaScript. The app allows users to add, display, and track their daily expenses. It includes features like dark mode, live date display, and a clean user interface to manage your expenses efficiently.

## 🚀 Features
### Expense Tracking: Add, view, and track your expenses with a total expense summary.
### Dark Mode: Toggle between light and dark mode for better user experience.
### Live Date Display: The app shows the current date at the top of the interface.
### Clear All Expenses: Easily reset your list of expenses with one click.
### Local Storage: Automatically saves your expenses in the browser's local storage, allowing you to persist data even after refreshing the page.
### Responsive Design: Works seamlessly on both desktop and mobile devices.

## 📚 Tech Stack
HTML5: Structuring the web page.
TailwindCSS: Styling the app with utility-first CSS.
JavaScript (ES6): Handling logic, dynamic rendering of expenses, and theme switching.
## 🖥️ How to Use
Add an Expense: Enter the description and price of your expense and click "Add Expense". Your expense will be added to the list, and the total will be updated.
Clear Expenses: Use the "Clear All Expenses" button to reset the list of expenses.
Dark Mode: Toggle the dark mode using the button with the moon icon in the header.
## 🛠️ Code Overview
### HTML
The structure is defined using basic HTML with a form to input expenses, a section to display the total, and a list to show added expenses.

### CSS (Tailwind)
TailwindCSS is used to style the components. Responsive and dark mode are handled using utility classes.

### JavaScript
The logic to add expenses, calculate the total, and manage dark mode is handled in app.js. The app also listens for user events to dynamically update the content. Additionally, local storage is utilized to save expenses, ensuring that user data persists across page reloads.

## 🌗 Dark Mode
To switch between light and dark mode, Tailwind’s dark mode configuration is used. JavaScript manages the toggling of the dark theme.

## Screenshots
### Dark mode
![Expense Tracker Screenshot](/darkmode-demo.webp)

### Light Mode
![Expense Tracker Screenshot](/lightmode_demo.webp)

**Demo**
[Click Here to view](https://shafi3m.github.io/ExpenseTracker/)
