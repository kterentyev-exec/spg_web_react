import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span className="globalFilter">
            <p>Search: {' '}</p>
            <input value={filter || ''}
            onChange={e => setFilter(e.target.value)} />
        </span>
    )
}
