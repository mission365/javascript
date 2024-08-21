
// const myFunction = function(){
//     console.log('Hello world');
// }
// myFunction();

// console.log(typeof myFunction);

const course = {
    courseName: "Javascript",
    price: "$1000",
    courseInstructor: "Mission"
}
// console.log(coures.courseInstructor);
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);