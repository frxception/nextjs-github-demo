import React, { FC } from 'react';
import styles from '@styles/Search.module.css'

type Props = {
  label: string, 
  value: string, 
  onChange: (any)=> void, 
  placeholder: string, 
  options: any,
  className: string
}
const Select: FC<Props> = ({ label, value, onChange, options, className }) => {
  const selectClass = className ? `${className} field` : 'field';

  return (
    <div className={selectClass}>
      <div className="control">
        <div className="select">
          <select className={styles.selectInput} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
