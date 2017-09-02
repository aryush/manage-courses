import React, { PropTypes } from 'react';

const TextInput = ({ name, value, label, error, onChange, placeholder }) => {
    let wrapperClass = 'form-group';

    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    onBlur={placeholder}
                    value={value}
                    onChange={onChange}
                />
                  {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};


export default TextInput;
