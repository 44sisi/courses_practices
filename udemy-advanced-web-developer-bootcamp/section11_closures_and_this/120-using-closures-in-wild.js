function classRoom() {
  const instructors = ['teacher1', 'teacher2'];
  return {
    getInstructors: () => instructors.slice(),
    addInstructor: (instructor) => {
      instructors.push(instructor);
      return instructors.slice();
    },
  };
}

const classRoom1 = classRoom();
console.log(classRoom1.getInstructors());

classRoom1.addInstructor('teacher3');
console.log(classRoom1.getInstructors());

console.log(classRoom1.getInstructors().pop());    // because it's returning a copy of instructors, pop doesn't modify the internal instructors
console.log(classRoom1.getInstructors());

const classRoom2 = classRoom();
console.log(classRoom2.getInstructors());          // classRoom2's instructors are not affected by classRoom1
