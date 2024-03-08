// index.js

// CodeCraft - An innovative coding platform designed to inspire creativity and foster collaboration among developers of all skill levels.

// Coding platform functionality
class CodeCraft {
    constructor() {
        this.codingChallenges = [];
        this.projects = [];
    }

    // Method to add a new coding challenge
    addCodingChallenge(title, description, difficulty) {
        const challenge = {
            title: title,
            description: description,
            difficulty: difficulty
        };
        this.codingChallenges.push(challenge);
    }

    // Method to add a new project
    addProject(title, description, members) {
        const project = {
            title: title,
            description: description,
            members: members
        };
        this.projects.push(project);
    }

    // Method to list all coding challenges
    listCodingChallenges() {
        console.log("Coding Challenges:");
        this.codingChallenges.forEach((challenge, index) => {
            console.log(`Challenge ${index + 1}: ${challenge.title}`);
            console.log(`Description: ${challenge.description}`);
            console.log(`Difficulty: ${challenge.difficulty}`);
            console.log("--------------------------");
        });
    }

    // Method to list all projects
    listProjects() {
        console.log("Projects:");
        this.projects.forEach((project, index) => {
            console.log(`Project ${index + 1}: ${project.title}`);
            console.log(`Description: ${project.description}`);
            console.log(`Members: ${project.members.join(", ")}`);
            console.log("--------------------------");
        });
    }
}

// Example usage:
const codeCraftApp = new CodeCraft();

// Adding coding challenges
codeCraftApp.addCodingChallenge("Reverse a String", "Write a function to reverse a string without using built-in reverse methods.", "Easy");
codeCraftApp.addCodingChallenge("Implement Binary Search", "Implement the binary search algorithm to find the index of a target element in a sorted array.", "Medium");

// Adding projects
codeCraftApp.addProject("Chat Application", "Build a real-time chat application using WebSocket technology.", ["user1", "user2", "user3"]);
codeCraftApp.addProject("Task Manager", "Develop a task management application with features for creating, updating, and tracking tasks.", ["user4", "user5", "user6"]);

// Listing coding challenges and projects
codeCraftApp.listCodingChallenges();
codeCraftApp.listProjects();
