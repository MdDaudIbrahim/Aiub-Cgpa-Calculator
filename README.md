
# AIUB CGPA Calculator ✨

---

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub issues](https://img.shields.io/github/issues/username/Aiub-Cgpa-Calculator)
![GitHub forks](https://img.shields.io/github/forks/username/Aiub-Cgpa-Calculator)
![GitHub stars](https://img.shields.io/github/stars/username/Aiub-Cgpa-Calculator)

---

## 🤔 Introduction

Navigating academic progress can sometimes feel daunting, especially when keeping track of your Cumulative Grade Point Average (CGPA). The **AIUB CGPA Calculator** is a simple, client-side web application designed specifically for students of American International University-Bangladesh (AIUB) to easily calculate their current semester and cumulative CGPA.

Say goodbye to manual calculations and spreadsheets! This tool allows you to input your previous semester's academic data and add your current semester's courses, grades, and credits to get an instant, accurate calculation of your updated CGPA. It even includes a handy utility to help sum up your previous Total Grade Points (TGP) from the AIUB portal.

Empower yourself with a clear view of your academic standing and plan for success!

---

## ✨ Key Features

*   📊 **Calculate Cumulative CGPA:** Instantly compute your updated CGPA based on previous and current semester data.
*   🔢 **Previous Semester Data Input:** Easily enter total credits completed and total grade points accumulated from previous semesters.
*   ➕ **Current Semester Course Management:** Dynamically add multiple courses for the current semester, specifying credits and achieved grades.
*   🎯 **AIUB Grade Point System:** Utilizes the standard AIUB grade point mapping (`A+`=4.00, `A`=3.75, etc.) for accurate calculations.
*   💡 **Integrated TGP Calculator:** A built-in helper to sum up Total Grade Points from individual semesters listed on the AIUB portal's Grade Reports.
*   📝 **Input Validation:** Ensures required fields are filled before calculation.
*   📚 **AIUB Course Suggestions:** Provides suggestions or a list of common AIUB course names (inferred from `script.js`).
*   📱 **Responsive Design:** (Inferred from viewport meta tag and CSS structure) - Likely works well on different screen sizes.
*   🌐 **Client-Side:** Runs entirely in your browser, no backend needed.

---

## 📸 Showcase

Empowering students to track their academic journey with precision and ease.

![image](https://github.com/user-attachments/assets/8c8d78f5-782f-4e40-922e-3c7663a051d3)


Where to find TGP?
-->Go to the AIUB portal and navigate to the "Grade Reports" section. Then, select "By Semester," where you can view the TGP total points for each semester. ("If you're in the 1st semester, Use your TGP as 0.0). Enter the total TGP points for each semester on TGP calculator Box. You can only input TGP up to based on your completed semesters.

<img width="206" alt="image" src="https://github.com/user-attachments/assets/c45e9f8d-d224-4f3d-bbb2-be73f0bbf044">

<img width="585" alt="image" src="https://github.com/user-attachments/assets/98574c64-6ec8-4f07-b550-83e45ad4c082">


## 💻 Tech Stack & Tools

This project is built using standard web technologies:

*   **HTML5:** Structure and content.
*   **CSS3:** Styling and layout.
*   **JavaScript:** Core logic and calculations.

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

All you need is a modern web browser (like Chrome, Firefox, Safari, Edge, etc.).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/username/Aiub-Cgpa-Calculator.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Aiub-Cgpa-Calculator
    ```

### Running the Project

This is a client-side application. To run it, simply open the `index.html` file in your web browser.

You can usually do this by double-clicking the `index.html` file or by using your browser's "File > Open" menu.

---

## 💡 Usage

1.  Open the `index.html` file in your web browser.
2.  Enter the required information for your previous semesters:
    *   Your current semester number.
    *   Total Credits Completed so far.
    *   Total Grade Points Accumulated (TGP) from all previous semesters. *Use the built-in "TGP Calculator" if you need help summing up your TGPs from the AIUB portal.*
3.  In the "Current Semester Courses" section, click "Add Course" for each course you are taking this semester.
4.  For each added course, enter:
    *   Course Name (suggestions may appear as you type).
    *   Credits for the course.
    *   The Grade you obtained (select from the dropdown).
5.  Once all information is entered, click the "Calculate CGPA" button.
6.  Your results (Current Semester GPA and Updated Cumulative CGPA) will appear below the form.

---

## 📁 Project Structure

```
Aiub-Cgpa-Calculator/
├── img/              # Contains images used in the project (e.g., AIUB logo)
│   └── AIUB.png
├── index.html        # The main HTML file containing the calculator interface
├── script.js         # The JavaScript file with the calculation logic and UI interactions
└── style.css         # The CSS file for styling the application
└── README.md         # This file
```

---

## 👋 Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a Pull Request.

Please ensure your code follows the project's structure and coding style.

*(Optional: Link to `CONTRIBUTING.md` if you create one)*
See `CONTRIBUTING.md` for more details on our contribution guidelines.

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details. *(Note: A `LICENSE` file should be added to the repository)*

---

## 🙏 Acknowledgements

*   Inspired by the need for a simple, dedicated AIUB CGPA calculation tool.
*   Special thanks to AIUB for providing the academic framework this calculator is based on.

---

Star this repository if you find it useful! ⭐

