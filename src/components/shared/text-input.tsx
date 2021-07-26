import React, { FC } from 'react';
import styles from '@styles/Search.module.css'

type Props = {
  value: string, 
  onChange: (any)=> void, 
  placeholder: string, 
  className: string
}
const TextInput:FC<Props> = ( {value, onChange, placeholder, className }) => {
  const textInputClass = className ? `${className} field` : 'field';

  return (
    <div className={textInputClass}>
      <div className={styles.control}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
