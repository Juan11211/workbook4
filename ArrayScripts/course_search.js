"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];


// When does the PROG200 course start?
for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId === "PROG200") {
        console.log(courses[i].StartDate);
        break; 
    }
}

// What is the title of the PROJ500 course?
for (let i = 0; i < courses.length; i++) {
    if (courses[i].CourseId === "PROJ500") {
        console.log(courses[i].Title);
        break; 
    }
}

// What are the titles of the courses that cost $50 or less?
for(let i = 0; i < courses.length; i++){
    if(courses[i].Fee <= 50){
        console.log(`These courses are $50 or less: ${courses[i].Title}` )
    } 
}

// What classes meet in "Classroom 1"?
for(let i = 0; i < courses.length; i++){
    if(courses[i].Location === "Classroom 1"){
        console.log(` These classes are located in Classroom 1: ${courses[i].Title}`)
    }
}