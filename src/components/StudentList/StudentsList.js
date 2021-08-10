import React, { useState, Fragment } from "react";
import "./StudentsList.css";
import data from "../../data.json";
import ReadOnlyRow from "../Row/ReadOnlyRow";
import EditableRow from "../Row/EditableRow";
import { nanoid } from "nanoid";

const StudentsList = () => {
  const [students, setStudents] = useState(data);

  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    identityNumber: "",
    gender: ""
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    birthYear: "",
    identityNumber: "",
    gender: ""
  });

  const [editStudentId, setEditStudentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const currentYear = new Date().getFullYear();

    if (currentYear - addFormData.birthYear <= 16) {
      window.alert('You must be older than 16!');
      return;
    }

    for (let i = 0; i < students.length; i++) {
      if (addFormData.identityNumber === students[i].identityNumber) {
        window.alert('Your ID is already on a list!');
        return;
      } 
    }

    const newStudent = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      birthYear: addFormData.birthYear,
      identityNumber: addFormData.identityNumber,
      gender: addFormData.gender,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    
    const editedStudent = {
      id: editStudentId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      birthYear: editFormData.birthYear,
      identityNumber: editFormData.identityNumber,
      gender: editFormData.gender,
    };

    const newStudents = [...students];

    const index = students.findIndex((student) => student.id === editStudentId);

    newStudents[index] = editedStudent;

    setStudents(newStudents);
    setEditStudentId(null);
  };

  const handleEditClick = (event, student) => {
    event.preventDefault();
    setEditStudentId(student.id);

    const formValues = {
      firstName: student.firstName,
      lastName: student.lastName,
      birthYear: student.birthYear,
      identityNumber: student.identityNumber,
      gender: student.gender,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditStudentId(null);
  };

  const handleDeleteClick = (studentId) => {
    const newStudents = [...students];

    const index = students.findIndex((student) => student.id === studentId);

    newStudents.splice(index, 1);

    setStudents(newStudents);
  };


  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
        <div className='searchBox'>
            <input
              className='searchBoxInput'
              type="number"
              placeholder="Filter by ID number"
              onChange={(e) => 
                setSearchTerm(e.target.value)
              }
            />
        </div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Year</th>
              <th>Identity Number</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.filter(value => {
              if (searchTerm === '') {
                return value;
              } else if (
                  value.identityNumber.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              return false;
            }).map((student) => (
              <Fragment key={Math.random()}>
                {editStudentId === student.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    student={student}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

        <div className='formContainer'>
          <div className='wrapper'>
            <h2 className='wrapperTitle'>Add a Student</h2>
            <form className='wrapperForm' onSubmit={handleAddFormSubmit}>
              <div className='inputFields'>
                First name:
                <input
                  type="text"
                  name="firstName"
                  required="required"
                  placeholder="First name"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className='inputFields'>
                Last name:
                <input
                  type="text"
                  name="lastName"
                  required="required"
                  placeholder="Last name"
                  onChange={handleAddFormChange}
                />            
              </div>
              <div className='inputFields'>
                Birth Year:    
                <input
                  type="number"
                  name="birthYear"
                  required="required"
                  placeholder="Birth year"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className='inputFields'>
                ID number:
                <input
                  type="number"
                  name="identityNumber"
                  required="required"
                  placeholder="ID number"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className='inputFields'>
                <input
                  type='radio'
                  id='male'
                  value='male'
                  name='gender'
                  required="required"
                  onChange={handleAddFormChange}
                /> 
                  <label className='input-label' htmlFor="male">Male</label>
              </div>
              <div className='inputFields'>
                <input 
                  type='radio' 
                  id='female' 
                  value='female'
                  name='gender'
                  required="required"
                  onChange={handleAddFormChange}
                />
                  <label className='input-label' htmlFor="female">Female</label>
              </div>
              <div className='inputFields'>
                <button className='add-btn' type="submit">Add</button>
              </div>
            </form> 
          </div>
        </div>
    </div>    
  );
};

export default StudentsList;
