A  Basic Client-Side Input Validator using Typescript

It's a straightforward web form validator developed using TypeScript, HTML, and CSS. This project provided a chance to practice client-side data validation, a key aspect of web security, and to gain practical experience with TypeScript development.

Project's Goal
This project's purpose is to showcase a fundamental understanding of:
-   Client-Side Validation: Setting up instant feedback mechanisms for user inputs in forms on the web.
-   Web Security Principles: Grasping the initial level of protection against common input-related vulnerabilities.
-   TypeScript Development: Utilizing TypeScript syntax, type checking, and compilation for web applications.
-   Front-End Integration: Linking HTML layout, CSS design, and JavaScript/TypeScript functionality.

Functionality 
The `index.html` file contains a user registration form. The primary validation logic is implemented in `src/main.ts`. Upon form submission or when fields lose focus, the TypeScript code checks:
-   Username: Minimum length (3 characters), permitted characters (letters, numbers, hyphens, underscores).
-   Email: Basic format validation for emails.
-   Password: Minimum length (12 characters), requirement for uppercase, lowercase letters, numbers, and special characters (consistent policy as used in previous Python project).
-   Confirm Password: Validates that it matches the password field.

Dynamic error messages are displayed under each input field, and a success message shows up on successful submission.

Files in this Repository
-   `index.html`: The principal structure of the web page.
-   `style.css`: Basic design for the form.
-   `src/main.ts`: The TypeScript source file containing the validation logic.
-   `dist/main.js`: The compiled JavaScript output from `main.ts` (this file is executed by the browser).
-   `tsconfig.json`: Configuration settings for the TypeScript compiler.
-   `package.json`: Configuration for the Node.js project.

How to Run the Validator

1.  Clone the repository
    ```bash
    git clone (https://github.com/zerTK/client-side-validator.git)
    cd client-side-validator
    ```

2.  Verify that Node.js and npm are installed:
    ```bash
    node -v # Expected: vX.X.X
    npm -v  # Expected: X.X.X
    ```

3.  Install necessary project dependencies (TypeScript compiler):
    ```bash
    npm install
    ```

4.  Compile the TypeScript source code:
    ```bash
    npx tsc
    ```
    This will generate `dist/main.js` from `src/main.ts`.

5.  Open the `index.html` file in your web browser:
    Go to the `client-side-validator` directory and double-click on `index.html`, or use your terminal:
    ```bash
    xdg-open index.html
    ```

Expected Interaction

You will observe a "User Registration Form." Attempt to submit with invalid input or leave fields empty to experience the real-time validation feedback. Upon successful validation, a message stating "Registration successful!" will be displayed.

---
Created as part of ongoing cybersecurity skills development, with a focus on the fundamental principles of web application security.
