const gradePoints = {
    'A+': 4.00, 'A': 3.75, 'B+': 3.50, 'B': 3.25, 'C+': 3.00,
    'C': 2.75, 'D+': 2.50, 'D': 2.25, 'F': 0.00
};

// List of available courses
const courses = [
    "Differential Calculus & Co-ordinate Geometry",
    "Physics 1",
    "Physics 1 Lab",
    "English Reading Skills & Public Speaking",
    "Introduction to Programming",
    "Introduction to Programming Lab",
    "Introduction to Computer Studies",
    "Discrete Mathematics",
    "Integral Calculus & Ordinary Differential Equations",
    "Object Oriented Programming 1",
    "Physics 2",
    "Physics 2 Lab",
    "English Writing Skills & Communication",
    "Introduction to Electrical Circuits",
    "Introduction to Electrical Circuits Lab",
    "Chemistry",
    "Complex Variable, Laplace & Z-Transformation",
    "Introduction to Database",
    "Electronic Devices Lab",
    "Principles of Accounting",
    "Electronic Devices",
    "Data Structure",
    "Data Structure Lab",
    "Computer Aided Design & Drafting",
    "Algorithms",
    "Matrices, Vectors, Fourier Analysis",
    "Object Oriented Programming 2",
    "Object Oriented Analysis and Design",
    "Bangladesh Studies",
    "Digital Logic and Circuits",
    "Digital Logic and Circuits Lab",
    "Computational Statistics and Probability",
    "Theory of Computation",
    "Principles of Economics",
    "Business Communication",
    "Numerical Methods for Science and Engineering",
    "Data Communication",
    "Microprocessor and Embedded System",
    "Software Engineering",
    "Artificial Intelligence and Expert Systems",
    "Computer Networks",
    "Computer Organization and Architecture",
    "Operating System",
    "Web Technologies",
    "Engineering Ethics",
    "Compiler Design",
    "Computer Graphics",
    "COS Elective 1",
    "Engineering Management",
    "Research Methodology",
    "CSE Major 1",
    "CSE Major 2",
    "CSE Major 3",
    "Thesis / Project",
    "COS Elective 2",
    "Internship",
    "Advanced Database Management System",
    "Basic Mechanical Engineering",
    "Computer Science Mathematics",
    "Management Information System",
    "Signals & Linear System",
    "Basic Graph Theory",
    "Digital System Design",
    "Image Processing",
    "Multimedia Systems",
    "Simulation & Modeling",
    "Enterprise Resource Planning",
    "Data Warehouse and Data Mining",
    "Natural Language Processing",
    "Software Development Project Management",
    "Human Computer Interaction",
    "Advanced Computer Networks",
    "Software Requirement Engineering",
    "Computer Vision and Pattern Recognition",
    "Linear Programming",
    "Network Security",
    "Software Quality and Testing",
    "Advanced Operating System",
    "Digital Design with System [ Verilog, VHDL & FPGAS ]",
    "Robotics Engineering",
    "Business Intelligence and Decision Support",
    "Telecommunications Engineering",
    "Programming in Python",
    "Advanced Programming with Java",
    "Advanced Programming with .NET",
    "Advanced Programming in Web Technology",
    "Advanced Algorithm Techniques",
    "Network Resource Management & Organization",
    "Introduction to Data Science",
    "Cyber Laws & Information Security",
    "Bioinformatics",
    "Parallel Computing",
    "Machine Learning",
    "Wireless Sensor Networks",
    "Industrial Electronics, Drives & Instrumentation",
    "Mobile Application Development",
    "Software Architecture and Design Patterns",
    "Digital Marketing",
    "E-Commerce, E-Governance & E-Series",
    "Digital Signal Processing",
    "VLSI Circuit Design"
];

const cgpaForm = document.getElementById('cgpaForm');
const addCourseBtn = document.getElementById('addCourse');
const coursesContainer = document.getElementById('coursesContainer');
const resultDiv = document.getElementById('result');
const calculateCgpaBtn = document.getElementById('calculateCGPA');

console.log("Initial DOM elements:", { cgpaForm, addCourseBtn, coursesContainer, resultDiv, calculateCgpaBtn });

function createCourseElement() {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.innerHTML = `
        <label class="courseLabel">Course Name:</label>
        <input type="text" class="courseName" required>
        <div class="suggestions"></div>
        <label>Course Grade:</label>
        <select class="courseGrade" required>
            ${Object.keys(gradePoints).map(grade => `<option value="${grade}">${grade}</option>`).join('')}
        </select>
        <label>Course Credit:</label>
        <select class="courseCredit" required>
            ${[0,1, 2, 3, 4].map(credit => `<option value="${credit}">${credit}</option>`).join('')}
        </select>
    `;
    return courseDiv;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function updateCourseLabels() {
    const courseLabels = document.querySelectorAll('.courseLabel');
    courseLabels.forEach((label, index) => {
        label.textContent = `${getOrdinal(index + 1)} Course Name:`;
    });
}

function showSuggestions(input, suggestionsContainer) {
    const query = input.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'none';
    
    if (query.length > 0) {
        const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));
        if (filteredCourses.length > 0) {
            suggestionsContainer.style.display = 'block';
            filteredCourses.forEach(course => {
                const div = document.createElement('div');
                div.textContent = course;
                div.addEventListener('click', () => {
                    input.value = course;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(div);
            });
        }
    }
}

addCourseBtn.addEventListener('click', () => {
    console.log("Add Course button clicked");
    const newCourse = createCourseElement();
    coursesContainer.appendChild(newCourse);
    updateCourseLabels();
});

function calculateCGPA(e) {
    e.preventDefault();

    // Get input values
    const prevSemesters = document.getElementById('prevSemesters').value;
    const prevCredits = document.getElementById('prevCredits').value;
    const prevPoints = document.getElementById('prevPoints').value;

    // Check if any field is empty
    if (!prevSemesters || !prevCredits || !prevPoints) {
        alert("Please fill in all required fields: \n* Enter your Current Semester\n* Total Credits Completed\n* Total Grade Points Accumulated (TGP)");
        return;
    }

    const prevSemestersInt = parseInt(prevSemesters) || 0;
    const prevCreditsFloat = parseFloat(prevCredits) || 0;
    const prevPointsFloat = parseFloat(prevPoints) || 0;

    let currentCredits = 0;
    let currentPoints = 0;

    document.querySelectorAll('.course').forEach(course => {
        const grade = course.querySelector('.courseGrade').value;
        const credit = parseFloat(course.querySelector('.courseCredit').value);
        currentCredits += credit;
        currentPoints += gradePoints[grade] * credit;
    });

    // if (currentCredits === 0) {
    //     alert("Please add at least one course before calculating.");
    //     return;
    // }

    const currentGPA = currentPoints / currentCredits;
    const totalCredits = prevCreditsFloat + currentCredits;
    const cgpa = (prevPointsFloat + currentPoints) / totalCredits;

    document.getElementById('gpaResult').textContent = `Your GPA for this semester is: ${currentGPA.toFixed(2)}`;
    document.getElementById('cgpaResult').textContent = `Your Overall CGPA is: ${cgpa.toFixed(2)}`;
    resultDiv.classList.remove('hidden');
}


// Attach the calculateCGPA function to both form submission and button click
if (cgpaForm) {
    cgpaForm.addEventListener('submit', calculateCGPA);
} else if (calculateCgpaBtn) {
    calculateCgpaBtn.addEventListener('click', calculateCGPA);
} else {
    console.error("CGPA form or calculate button not found in the document");
}

document.addEventListener('input', function (e) {
    if (e.target && e.target.classList.contains('courseName')) {
        const suggestionsContainer = e.target.nextElementSibling;
        showSuggestions(e.target, suggestionsContainer);
    }
});

// Initialize with one course
coursesContainer.appendChild(createCourseElement());
updateCourseLabels();

// TGP Calculator
const calculateTGPBtn = document.getElementById('calculateTGP');
const tgpCalculator = document.getElementById('tgpCalculator');
const tgpInputContainer = document.getElementById('tgpInputContainer');
const addTGPInputBtn = document.getElementById('addTGPInput');
const calculateTotalTGPBtn = document.getElementById('calculateTotalTGP');
const prevPointsInput = document.getElementById('prevPoints');
const prevCreditsInput = document.getElementById('prevCredits');
const prevSemestersInput = document.getElementById('prevSemesters');

let semesterCount = 2;
let maxAllowedTGPInputs = 0;

prevSemestersInput.addEventListener('change', updateMaxAllowedTGPInputs);

function updateMaxAllowedTGPInputs() {
    maxAllowedTGPInputs = Math.max(0, parseInt(prevSemestersInput.value) - 1);
    updateTGPInputs();
}

function updateTGPInputs() {
    tgpInputContainer.innerHTML = '';
    for (let i = 1; i <= maxAllowedTGPInputs; i++) {
        tgpInputContainer.appendChild(createTGPInputElement(i));
    }
    semesterCount = maxAllowedTGPInputs;
}

function createTGPInputElement(semesterNumber) {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('tgp-input-group');
    
    const label = document.createElement('label');
    label.htmlFor = `tgp${semesterNumber}`;
    label.textContent = `${getOrdinal(semesterNumber)} Semester TGP:`;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `tgp${semesterNumber}`;
    input.classList.add('tgpInput');
    input.min = '0';
    input.step = '0.01';
    input.required = true;
    
    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    return inputGroup;
}

calculateTGPBtn.addEventListener('click', () => {
    updateMaxAllowedTGPInputs();
    tgpCalculator.classList.toggle('hidden');
});

addTGPInputBtn.addEventListener('click', () => {
    if (semesterCount < maxAllowedTGPInputs) {
        semesterCount++;
        tgpInputContainer.appendChild(createTGPInputElement(semesterCount));
    } else {
        alert(`You can only input TGP up to the ${getOrdinal(maxAllowedTGPInputs)} semester based on your completed semesters.`);
    }
});

calculateTotalTGPBtn.addEventListener('click', () => {
    let totalTGP = 0;
    let allInputsFilled = true;

    tgpInputContainer.querySelectorAll('.tgpInput').forEach(input => {
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            allInputsFilled = false;
        } else {
            totalTGP += value;
        }
    });

    if (allInputsFilled) {
        prevPointsInput.value = totalTGP.toFixed(2);
        tgpCalculator.classList.add('hidden');
    } else {
        alert("Please fill in all TGP inputs before calculating the total.");
    }
});

// Responsive design for suggestions
window.addEventListener('resize', function() {
    const suggestionsContainers = document.querySelectorAll('.suggestions');
    suggestionsContainers.forEach(container => {
        if (window.innerWidth <= 480) {
            container.style.width = '100%';
            container.style.left = '0';
        } else {
            container.style.width = 'calc(100% - 2rem)';
            container.style.left = 'auto';
        }
    });
});

// Back to Top functionality
const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Disable mousewheel scroll on number input
document.addEventListener("wheel", function(event) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
}, { passive: true });

// Disable arrow key scrolling on number input
document.addEventListener('keydown', function(event) {
    if (document.activeElement.type === 'number' && 
       (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
        event.preventDefault();
    }
});

console.log("Script initialization complete");