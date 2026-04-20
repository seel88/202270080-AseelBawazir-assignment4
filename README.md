# 202270080-AseelBawazir-assignment4

## 📌 Project Description
This is the final, production-ready personal web application developed for the Software Engineering curriculum at KFUPM. This portfolio serves as a comprehensive showcase of technical expertise, academic projects (such as SWE 326 and ICS 321), and professional growth. 

The application is fully responsive, optimized for performance, and deployed to a live server to demonstrate real-world readiness.

## 🚀 Live Demo
**View the application here:** [https://seel88.github.io/202270080-AseelBawazir-assignment4/](https://seel88.github.io/202270080-AseelBawazir-assignment4/)

## ✨ Key Features & Innovation
* **Innovation (Typewriter Effect):** A custom-built JavaScript animation that dynamically cycles through professional roles and interests, providing a modern and engaging user experience.
* **External API Integration:** Real-time data fetching from the GitHub REST API to showcase active development repositories.
* **Professional Filtering Logic:** Projects are categorized by engineering domains (e.g., Testing, SQL, JavaScript) rather than just languages, reflecting a Software Engineering mindset.
* **Persistent State Management:** A theme-switching system (Dark/Light mode) that remembers user preferences across sessions using `localStorage`.
* **Advanced Validation:** Custom contact form logic with KFUPM-specific email validation and length constraints.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Deployment:** GitHub Pages (CI/CD via GitHub Actions)
* **Architecture:** Modular file structure with separated logic, styles, and assets.
* **Design:** Professional typography (Inter/Poppins), Glassmorphism UI, and responsive grid layouts.

## 💻 Setup Instructions
To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/seel88/202270080-AseelBawazir-assignment4.git](https://github.com/seel88/202270080-AseelBawazir-assignment4.git)
    ```
2.  **Open the project:**
    Navigate to the root folder and open `index.html` in any modern web browser.
3.  **Note:** An active internet connection is required for API fetching and Google Fonts.

## 🤖 AI Integration Summary
AI (Gemini/ChatGPT) was utilized as a collaborative partner for:
* **Feature Development:** Implementing the custom Typewriter logic and optimizing the Project Filtering system for domain-specific categories.
* **Deployment & Debugging:** Troubleshooting GitHub Pages deployment issues and ensuring cross-browser compatibility.
* **Documentation Support:** Structuring professional reports and presentation outlines.

*Detailed logs are available in `docs/ai-usage-report.md`.*

## 📂 Folder Structure
```text
202270080-AseelBawazir-assignment4/
├── index.html          # Main entry point (Polished & Deployed)
├── css/
│   └── styles.css      # Optimized professional styling
├── js/
│   └── script.js       # Core logic, API integration, and Innovation feature
├── assets/
│   ├── cv.pdf          # Professional CV (located in assets/images/)
│   └── images/         # Compressed project screenshots
├── docs/
│   ├── ai-usage-report.md          # Full AI transparency log
│   └── technical-documentation.md  # Deep dive into architecture
├── presentation/
│   ├── slides.pdf       # Project presentation slides
│   └── demo-video.mp4   # 5-7 minute professional demonstration
└── README.md           # Project overview and deployment links