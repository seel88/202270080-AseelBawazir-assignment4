# AI Usage Report - Assignment 4 (Final Portfolio)

## **Tools Used & Use Cases**
* **Gemini/ChatGPT:** Used as the primary AI collaborator for final polishing, innovation implementation, and deployment troubleshooting.
* **Use Cases:**
    * **Innovation Feature (Typewriter Logic):** Collaborated with AI to write a custom JavaScript function that cycles through multiple professional roles with typing and deleting animations.
    * **Deployment Debugging:** Used AI to diagnose why assets (images and CV) were returning 404 errors on GitHub Pages, leading to the discovery of case-sensitive pathing issues.
    * **Logic Refinement:** Adjusted the project filtering system to move from language-based sorting (Python) to domain-based sorting (Testing) to better reflect Software Engineering standards.
    * **Presentation Planning:** Utilized AI to structure the 5-7 minute presentation script and slide deck outline.

## **Benefits & Challenges**
* **Benefits:** The AI was instrumental in implementing the typewriter effect quickly, allowing me to focus on the overall UI/UX and professional branding. It also served as a "pair programmer" for rapid debugging during the deployment phase.
* **Challenges:** AI suggestions sometimes used generic file paths (e.g., `assets/cv.pdf`) that did not match my specific repository structure (`assets/images/cv.pdf`). This required manual intervention and a deeper understanding of my own file architecture.

## **Learning Outcomes**
1.  **Deployment Pipelines:** Learned how GitHub Actions builds and deploys static sites and the importance of wait-times and browser caching.
2.  **Advanced Logic:** Mastered `setTimeout` and string manipulation in JavaScript through the implementation of the typewriter effect.
3.  **Technical Professionalism:** Understood how to categorize software projects by "Domain" (e.g., QA/Testing) rather than just "Language," making the portfolio more appealing to engineering recruiters.

## **Responsible Use & Modifications**
To ensure academic integrity and correctness, I performed the following:
* **Manual Refactoring:** I reviewed every line of the AI-generated typewriter code to ensure it integrated properly with my existing `DOMContentLoaded` event listener.
* **Customization:** I hand-picked the phrases used in the typewriter effect to accurately represent my identity as a KFUPM student and a gamer.
* **Path Verification:** I manually corrected all asset paths in `index.html` after AI-suggested code failed to locate the images in my sub-folders.