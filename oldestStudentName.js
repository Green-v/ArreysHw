let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];

let maxAge = 0;

let oldestStudent;

for(let i = 0; i < students.length; i++) {
    const studentAge1 = students[i][1];
    if( maxAge <=  studentAge1){
        maxAge=studentAge1;
        oldestStudent = students[i];
    }
    
}

console.log(`The oldest student is ${oldestStudent[2]} ${oldestStudent[3]}. He is ${oldestStudent[1]} years old`);

// Expexted output:
//The oldest student is Ivan Ivanov. He is 24 years old.