import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutiline?: boolean
}

export function Button({isOutiline = false, ...props}: ButtonProps) {
    return (
        <button className={`button ${isOutiline ? 'outline' : ''}`} {...props} />
    )
}

