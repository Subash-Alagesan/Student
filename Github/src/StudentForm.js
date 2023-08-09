import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    studentname: '',
    fathername:'',
    age: '',
    mobileno:'',
    address: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      const updatedStudents = students.map((student) =>
        student.id === formData.id ? formData : student
      );
      setStudents(updatedStudents);
    } else {
        setStudents([...students, { ...formData, id: Date.now().toString() }]);
    }
    setFormData({ id: '', studentname: '', fathername: '', age: '',mobileno:'',address:'' });
  };

  const handleEdit = (student) => {
    setFormData(student);
  };

  const handleDelete = (student) => {
    const updatedStudents = students.filter((s) => s.id !== student.id);
    setStudents(updatedStudents);
  };
  
  return (
    <div>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="studentname">Student Name:</label>
          <input
            type="text"
            id="studentname"
            name="studentname"
            value={formData.studentname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fathername">Father Name:</label>
          <input
            type="text"
            id="fathername"
            name="fathername"
            value={formData.fathername}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileno">Mobile No:</label>
          <input
            type="number"
            id="mobileno"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        
        <button>Register</button>
     
        
      </form>
      <h2>Student List</h2>
     
     <ul>

     {students.map((student) => (
       <li key={student.id}>
         <table> 
         <tr>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Age</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>{student.studentname}</td>
            <td>{student.fathername}</td>
            <td>{student.age}</td>
            <td>{student.mobileno}</td>
            <td>{student.address} </td>
            <td>{student.address} </td>
        </tr>
            
         <button onClick={() => handleEdit(student)}>Edit</button>
         <button onClick={() => handleDelete(student)}>Delete</button>
         </table>
       </li>
     ))}
   
   </ul>
  
    
    </div>
    
  );
}

export default StudentForm;