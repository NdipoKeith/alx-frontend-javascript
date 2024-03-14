#QUESTION

Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco



#CODE

export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}



#CODE EXPLAINED

Function Declaration:
The code defines a function named getListStudents.
This function does not take any parameters (it has an empty parameter list).
The function is intended to be used as a default export (indicated by the export default keyword).
Function Body:
Inside the function, there is a return statement.
The return statement provides an array of student objects.
Array of Student Objects:
The array contains three student objects, each represented by an object literal enclosed in curly braces {}.
Each student object has the following properties:
id: An integer representing the student’s unique identifier.
firstName: A string representing the student’s first name.
location: A string representing the student’s location (e.g., city or country).
Student Data:
The data for the three students is as follows:
Student 1:
id: 1
firstName: ‘Guillaume’
location: ‘San Francisco’
Student 2:
id: 2
firstName: ‘James’
location: ‘Columbia’
Student 3:
id: 5
firstName: ‘Serena’
location: ‘San Francisco’
In summary, the getListStudents function returns an array of student objects, where each object contains information 
about a student’s ID, first name, and location. The data appears to represent a list of students and their associated details
