import React from 'react'

import { Link } from 'react-router-dom'

export const Button = ({btnClass, toPath, btnText}) => {
    return (
        <Link className={btnClass} to={toPath}>{btnText}</Link>
    )
}
