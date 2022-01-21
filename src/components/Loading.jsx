import React from 'react'

export const Loading = () => {
    return (
        <div>
            {Array(3).fill(0).map((item,i) => <h4 key={i}>rooms are loading....</h4>)}
        </div>
    )
}
