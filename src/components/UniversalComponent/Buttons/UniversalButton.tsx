import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './UniversalButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    className?: string

}

const UniversalButton: React.FC<UniversalButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`
    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
};

export default UniversalButton;