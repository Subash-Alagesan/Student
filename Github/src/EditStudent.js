
import React, { useState } from 'react';


function EditStudent(){
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    studentname: '',
    fathername:'',
    age: '',
    mobileno:'',
    address: '',
    
  });

  const handleEdit = (student) => {
    setFormData(student);
  };

  const handleDelete = (student) => {
    const updatedStudents = students.filter((s) => s.id !== student.id);
    setStudents(updatedStudents);
  };

    return(
        <div>
               <h2>Student List</h2>
     
     <ul>
     {students.map((student) => (
       <li key={student.id}>
         {student.studentname}  {student.fathername} {student.age} {student.mobileno} {student.address} 
         <button onClick={() => handleEdit(student)}>Edit</button>
         <button onClick={() => handleDelete(student)}>Delete</button>
       </li>
     ))}
   
   </ul>
        </div>
    )
}
export default EditStudent;