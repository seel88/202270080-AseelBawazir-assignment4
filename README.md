# 202270080-AseelBawazir-assignment3

## 📌 Project Description
This project is a professional portfolio web application developed as part of the Software Engineering curriculum at KFUPM. It showcases technical skills, academic projects, and live development activity by integrating external data and implementing advanced interactive features. 

The application has been evolved from a static site into a dynamic platform that demonstrates modern web development practices, including asynchronous programming and state management.

## 🚀 Key Features
* **External API Integration:** Connects to the GitHub REST API to fetch and display real-time repository data.
* **Complex Logic & Filtering:** Includes a custom-built filtering system that allows visitors to sort projects by programming language (JavaScript, Python, SQL, etc.).
* **State Management:** Implements a Light/Dark mode toggle that persists across page refreshes using `localStorage`.
* **Advanced Form Validation:** A functional contact form with JavaScript-based validation for email domains and message length.
* **Dynamic UX:** Features a time-sensitive greeting system and staggered animations for project card reveals.

## 🛠️ Tech Stack
* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **API:** GitHub REST API
* **Styling:** Modern CSS Variables, Glassmorphism, and Responsive Grid Layouts
* **Fonts:** Inter & Poppins (Google Fonts)

## 💻 Setup Instructions
To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/aseel-bawazir/202270080-AseelBawazir-assignment3.git](https://github.com/aseel-bawazir/202270080-AseelBawazir-assignment3.git)
    ```
2.  **Open the project:**
    Navigate to the root folder and open `index.html` in any modern web browser.
3.  **Note:** An active internet connection is required to load the dynamic GitHub projects and professional fonts.

## 🤖 AI Integration Summary
This project was developed with the assistance of AI tools (Gemini/ChatGPT) for:
* **Code Refactoring:** Transforming static Assignment 2 components into dynamic JavaScript-driven elements.
* **Problem Solving:** Debugging pathing issues for assets and optimizing asynchronous `fetch` requests.
* **UI/UX Improvements:** Implementing modern design trends such as Glassmorphism and theme persistence logic.

For a full breakdown of the AI collaboration process, please see `docs/ai-usage-report.md`.

## 📂 Folder Structure
```text
202270080-AseelBawazir-assignment3/
├── index.html          # Main application structure
├── css/
│   └── styles.css      # Professional styling & Dark Mode themes
├── js/
│   └── script.js       # API logic, filtering, and state management
├── assets/
│   ├── cv.pdf          # Professional Resume (inside assets/images/)
│   └── images/         # Project assets (ICS326.png, ICS321.png)
├── docs/
│   ├── ai-usage-report.md          # Detailed documentation of AI collaboration
│   └── technical-documentation.md  # Detailed technical feature breakdown
└── README.md           # Project overview and setup