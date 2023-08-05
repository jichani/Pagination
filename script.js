// Selecting DOM elements
const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".link");

// Setting an initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
  startBtn.disabled = currentStep === 0;
  endBtn.disabled = currentStep === 8;
  prevNext[0].disabled = currentStep === 0;
  prevNext[1].disabled = currentStep === 8;
};

// Function to show the current group of number links
const showCurrentGroup = () => {
  const groupIndex = Math.floor(currentStep / 3); // 3개의 링크가 한 그룹이 됨
  document.querySelectorAll(".links-group").forEach((group, index) => {
    group.classList.toggle("active", index === groupIndex);
  });
};

// Add event listener to the number links
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    // Set the current step to the clicked number link
    currentStep = numIndex;
    numbers.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
    });
    showCurrentGroup(); // Show the current group of number links
    updateBtn(); // Update the button states
  });
});

// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Increment or decrement the current step based on the button clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    currentStep = Math.max(0, Math.min(8, currentStep)); // 최소 0, 최대 8로 제한
    numbers.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
    });
    showCurrentGroup(); // Show the current group of number links
    updateBtn(); // Update the button states
  });
});

// Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
  // Set the current step to the first step
  currentStep = 0;
  numbers.forEach((number, numIndex) => {
    // Toggle the "active" class on the number links based on the current step
    number.classList.toggle("active", numIndex === currentStep);
  });
  showCurrentGroup(); // Show the current group of number links
  updateBtn(); // Update the button states
});

// Add event listener to the "End" button
endBtn.addEventListener("click", () => {
  // Set the current step to the last step
  currentStep = 8;
  numbers.forEach((number, numIndex) => {
    // Toggle the "active" class on the number links based on the current step
    number.classList.toggle("active", numIndex === currentStep);
  });
  showCurrentGroup(); // Show the current group of number links
  updateBtn(); // Update the button states
});
