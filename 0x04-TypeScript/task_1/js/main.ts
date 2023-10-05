interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location?: string;
  contract: boolean | undefined;
};

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  const initial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return initial + '. ' + formattedLastName;
}

// Define an interface for the StudentClass
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define an interface to describe the constructor of the class
interface IStudentClassConstructor {
  new(firstName: string, lastName: string): IStudentClass;
}

// Implement the class using the described interfaces
class StudentClass implements IStudentClass {
  constructor(private firstName: string, private lastName: string) { }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}