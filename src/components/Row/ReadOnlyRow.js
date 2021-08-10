import React from "react";
import './ReadOnlyRow.css';

const ReadOnlyRow = ({ student, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.birthYear}</td>
      <td>{student.identityNumber}</td>
      <td>{student.gender}</td>
      <td>
        <button
          className='edit-btn'
          type="button"
          onClick={(event) => handleEditClick(event, student)}
        >
          Edit
        </button>
        <button           
          className='delete-btn'
          type="button" 
          onClick={() => handleDeleteClick(student.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
