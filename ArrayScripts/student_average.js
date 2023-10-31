"use strict";

let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function studentAvg(student) {
    for (let i = 0; i < student.length; i++) {
        let totalScore = 0;
        let scores = student[i].scores;

        for (let j = 0; j < scores.length; j++) {
            totalScore += scores[j];
        }

        let average = totalScore / scores.length;
        console.log(`${student[i].name}'s average score: ${average}`);
    }
}

console.log(studentAvg(students));
