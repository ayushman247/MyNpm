#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import terminalLink from "terminal-link";

// Define colors
const nameColor = chalk.hex("#FFA500").bold; 
const linkColor = chalk.hex("#87CEEB").bold; 

const linkedIn = nameColor("🔗 linkedIn") + ": " + linkColor(terminalLink("", "https://www.linkedin.com/in/ayushman-chaturvedi-084961245/"));
const gitHub = nameColor("💻 gitHub") + ": " + linkColor(terminalLink("", "https://github.com/ayushman247"));
const email = nameColor("📧 email") + ": " + linkColor(terminalLink("", "mailto:ayushman2407@gmail.com"));
const phone = nameColor("📞 phone") + ": " + linkColor(terminalLink("", "tel:6392860360"));

console.log(chalk.yellow.bold("\nHey there! I'm Ayushman Chaturvedi 🤓"));
console.log(chalk.hex("#75fd71").bold("\nI love coding, building cool stuff, and making computers cry with my debugging skills."));

console.log("\n📚 " + chalk.magenta.bold("Education:"));
console.log(chalk.white("Bennett University | B.Tech CSE (2021-2025) | GPA: 9.38 (Yeah, I study sometimes!)"));

console.log("\n💼 " + chalk.magenta.bold("Experience:"));
console.log(chalk.white("🔹 Web Development Intern at Evalueserve - Gurgaon"));
console.log(chalk.white("   - Built RBAC (Role-Based Access Control) | Reduced unauthorized access by 40% 💻"));
console.log(chalk.white("   - Created responsive React UI⚡"));
console.log(chalk.white("   - Integrated SSO | Because logging in 10 times is painful 😩"));
console.log(chalk.white("   - Automated web scraping | Saved humans from 50% manual work 🤖"));

console.log("\n🚀 " + chalk.magenta.bold("Projects:"));
console.log(chalk.white("💬 Chat_It_Up: Real-time chatting for users without logging in"));
console.log(chalk.white("🛒 Price_Wise: Scrapes products daily and Notifies you about price drops 💰"));

console.log("\n🛠️ " + chalk.magenta.bold("Tech Skills:"));
console.log(chalk.white("💻 C++, JavaScript, TypeScript | Web: React.js, Node.js, Express.js | AWS (Basics)"));
console.log(chalk.white("📦 Databases: MongoDB, PostgreSQL, Firebase | Tools: Docker, Git, Postman"));

console.log("\n🌐 " + chalk.magenta.bold("Find me here:"));
console.log(chalk.white(linkedIn));
console.log(chalk.white(gitHub));
console.log(chalk.white(email));
console.log(chalk.white(phone));

console.log("\n📝 " + chalk.gray("Created by Ayushman Chaturvedi"));

// Interactive Exit Prompt
const exitPrompt = async () => {
  const { exit } = await inquirer.prompt([
    {
      type: "confirm",
      name: "exit",
      message: "Do you want to exit?",
      default: true,
    },
  ]);

  if (exit) {
    console.log(chalk.red.bold("\n👋 Okay, Bye! See you soon! \n"));
    process.exit();
  }
};

exitPrompt();
