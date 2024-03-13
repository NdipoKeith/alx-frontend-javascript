export default function getStudentsByLocation(listStudents, xtargetLocation) {
  return listStudents.filter(({ location }) => location === xtargetLocation);
}






#CODE EXPLAINED:

Function Declaration:
The code defines a function named getStudentsByLocation.
This function is intended to be used as a default export (indicated by the export default keyword).

It takes two parameters:
listStudents: An array of student objects.
xtargetLocation: A string representing the target location to filter students by.

Function Body:
Inside the function, there is a return statement.
The return statement uses the filter method on the listStudents array.

Filtering Logic:
The filter method iterates through each student object in the listStudents array.
For each student, it checks whether the location property matches the provided xtargetLocation.
If the location matches, that student is included in the filtered result.

Returned Result:
The function returns an array containing only the student objects whose location property matches the xtargetLocation.
In summary, the getStudentsByLocation function filters an array of student objects based on their location, returning only those students who are in the specified target location. 
