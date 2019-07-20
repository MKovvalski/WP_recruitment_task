import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTING_MAP } from '../utils/consts'

const LinkWrapper = ({ children, pathTo }) => (
    <Link
        to={pathTo ? ROUTING_MAP[pathTo] : ROUTING_MAP.index}
    >
        {children}
    </Link>
)

export default LinkWrapper