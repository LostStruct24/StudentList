import React from "react";
import "./EditableRow.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Firrst name"
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Last name"
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Birth year"
          name="birthYear"
          value={editFormData.birthYear}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="ID number"
          name="identityNumber"
          value={editFormData.identityNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="radio-input"
          placeholder="gender"
          type="text"
          required="required"
          name="gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className='save-btn' type="submit">Save</button>
        <button className='cancel-btn' type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
