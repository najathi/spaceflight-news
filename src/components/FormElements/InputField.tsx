import React from 'react'
import { twMerge } from 'tailwind-merge';

interface InputFieldProps {
    className?: string;
    type: string;
    label: string;
    multiLine?: boolean;
    [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({ className, type, label, multiLine = false, ...rest }) => {
    const classes = twMerge(`input input-bordered ${className ?? ""}`);
    const Element = multiLine ? 'textarea' : 'input';

    return (
        <Element
            type={type}
            placeholder={label}
            className={classes}
            {...rest}
        />
    );
}

export default InputField;