// Part 1: Set name and role, then show a welcome message if role matches
let userName = "Alex"
const userRole = "Team Member"

if (userRole === "Team Member") {
  document.getElementById("welcome").textContent = `Hello, ${userName}!`
} else {
  document.getElementById("welcome").textContent = "Access restricted."
}

// Part 2: Create functions for greeting and BMI calculation
function greet(name) {
  return `Hi, ${name}! Ready to code?`
}

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2)
}

// Part 3: Use loops to show tools and repeat a message
const tools = ["JavaScript", "Git", "VS Code"]

for (let i = 0; i < tools.length; i++) {
  console.log(`Tool ${i + 1}: ${tools[i]}`)
}

let count = 0
while (count < 3) {
  console.log("Looping through...")
  count++
}

// Part 4: Add click action, new list item, and change background
document.getElementById("toggleBtn").addEventListener("click", () => {
  const msg = document.getElementById("message")
  msg.style.display = msg.style.display === "none" ? "block" : "none"
})

const newSkill = document.createElement("li")
newSkill.textContent = "JavaScript"
document.getElementById("skillsList").appendChild(newSkill)

document.body.style.backgroundColor = "#f0f8ff"