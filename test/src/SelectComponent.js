import React from 'react';

function SelectComponent(props) {
  return (
    <div>
      <label htmlFor={props.labelFor}>{props.description}: </label>
      <select
        id={props.selectId}
        onChange={props.handleChange}
        style={props.inputStyle}
      >
        <option></option>
        {props.options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
