# AI Usage Report - Assignment 3

## **Tools Used & Use Cases**
* **Gemini/ChatGPT:** Used as a primary collaborator for refactoring Assignment 2 code into a dynamic web application.
* **Use Cases:**
    * **Logic Generation:** Developing the asynchronous GitHub API fetch and filtering system.
    * **State Management:** Implementing persistent Dark Mode using `localStorage`.
    * **UI/UX Design:** Suggesting modern CSS styles (Gradients and Glassmorphism) to improve visual hierarchy.
    * **Debugging:** Troubleshooting pathing issues for the CV download and broken image links.

## **Benefits & Challenges**
* **Benefits:** AI helped speed up the transition from static content to dynamic API-driven content. It provided a structured way to handle errors (try/catch) that I hadn't used extensively before.
* **Challenges:** The AI initially suggested paths that didn't match my specific folder structure (like the CV being inside the images folder), which required manual debugging and path correction.

## **Learning Outcomes**
Through this AI collaboration, I learned:
1.  How to fetch and filter data from a REST API using `async/await`.
2.  The importance of `localStorage` in maintaining a consistent User Experience (State Management).
3.  How to use CSS variables to create a seamless theme-switching logic.

## **Responsible Use & Modifications**
I did not simply copy the AI output. I modified the code to:
* Ensure all repository names are formatted correctly (removing hyphens).
* Add custom validation logic for KFUPM-specific email domains.
* Update all file paths to match my unique repository structure.
* Hand-code the "Skills" section to reflect my specific Software Engineering focus areas.