// CourseListRow.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);

  const rowChecked = { backgroundColor: '#e6e4e4' };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  if (isHeader) {
    return (
      <tr style={checked ? rowChecked : {}}>
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr style={checked ? rowChecked : {}}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

