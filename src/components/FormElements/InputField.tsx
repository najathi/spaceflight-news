import React, { ReactNode } from 'react'

interface InputFieldProps {
    className?: string;
    type: string;
    label: string;
    multiLine?: boolean;
    [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({ className, type, label, multiLine = false, ...rest }) => {
    const Element = multiLine ? 'textarea' : 'input';

    return (
        <Element
            type={type}
            placeholder={label}
            className={`input input-bordered ${className}`}
            {...rest}
        />
    );
}

export default InputField;