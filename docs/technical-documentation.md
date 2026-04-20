# Technical Documentation - Aseel Bawazir Portfolio

## **Architecture Overview**
This application follows a modular front-end architecture, separating concerns into **HTML5** for semantic structure, **CSS3** for responsive styling and themes, and **Vanilla JavaScript (ES6+)** for dynamic behavior, state management, and external API communication.

## **Key Technical Implementations**

### **1. GitHub API Integration**
* **Mechanism:** The application utilizes the `fetch` API combined with `async/await` syntax to perform non-blocking data retrieval. 
* **Data Processing:** Upon receiving the JSON response, the script implements a `.filter()` method to exclude repository forks and entries without descriptions, followed by a `.slice(0, 4)` to display the most relevant recent work.
* **Endpoint:** `https://api.github.com/users/seel88/repos?sort=updated`
* **Error Handling:** A `try...catch` block is implemented to log network errors and prevent the UI from breaking if the GitHub service is unavailable.

### **2. Innovation: Typewriter Animation**
* **Logic:** A custom recursive JavaScript function designed to cycle through an array of professional roles and personal interests. 
* **State Control:** The function manages several internal states: `phraseIndex`, `characterIndex`, and a boolean `isDeleting`. 
* **Dynamic Timing:** It utilizes varying `setTimeout` intervals (100ms for typing, 50ms for erasing, and 2000ms pauses at the end of phrases) to create a natural, human-like typing rhythm.

### **3. Theme Persistence (State Management)**
* **Storage:** The application leverages the **Web Storage API (`localStorage`)** to persist the user's preference for 'dark' or 'light' mode.
* **Execution Logic:** The theme is applied immediately upon `DOMContentLoaded`. This ensures that if a user prefers dark mode, they do not experience a "flash of white" (FOUC) when navigating between sections or refreshing the page.

### **4. Domain-Based Filtering**
* **Engineering Focus:** Unlike generic portfolios that filter by language only, this logic was specifically refactored to filter by **Software Engineering Domains** (e.g., Testing, Database Management, Web Development).
* **Implementation:** The filtering function parses the text content of card tags and uses conditional display logic (`style.display`) to show or hide relevant projects, including both static academic cards and dynamic GitHub cards fetched via API.

## **Deployment & Performance**
* **Hosting:** The site is deployed using **GitHub Pages** with a CI/CD pipeline managed by GitHub Actions.
* **Optimization:** * Modularization of CSS and JS files to keep the root directory clean.
    * Use of system fonts and Google Fonts with `display: swap` for faster initial text rendering.
    * Case-sensitive asset path management to ensure 100% compatibility with Linux-based hosting environments.