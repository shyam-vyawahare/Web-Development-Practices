
/*
    User Module
    Demonstrates exporting objects and reusable functions.
*/

// Named export
export const user = {
    name: "Ultrex",
    role: "Developer",
    skills: ["JavaScript", "Python", "React"]
};

// Named export
export function getUserDetails() {
    return `${user.name} is a ${user.role}.`;
}

// Named export
export function getSkills() {
    return user.skills.join(", ");
}
