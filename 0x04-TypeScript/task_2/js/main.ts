// Define the DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class that implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing the createEmployee function
console.log(createEmployee(200));   // Output: Teacher
console.log(createEmployee(1000));  // Output: Director
console.log(createEmployee('$500')); // Output: Director

// Define the Employee interface with common methods
interface Employee {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

// Define separate interfaces for Director and Teacher
interface Director extends Employee {
  workDirectorTasks(): string;
  role: "Director"; // Discriminant property
}

interface Teacher extends Employee {
  workTeacherTasks(): string;
  role: "Teacher"; // Discriminant property
}

// Define the isDirector type predicate function
function isDirector(employee: Employee): employee is Director {
  return 'workDirectorTasks' in employee;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher) {
  if (employee.role === "Director") {
    console.log(employee.workDirectorTasks());
  } else if (employee.role === "Teacher") {
    console.log(employee.workTeacherTasks());
  }
}

// Testing the executeWork function
const employee1: Director | Teacher = createEmployee(200);
executeWork(employee1);  // Output: "Getting to work"

const employee2: Director | Teacher = createEmployee(1000);
executeWork(employee2);  // Output: "Getting to director tasks"