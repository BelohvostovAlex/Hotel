import React from 'react'

export const Loading = () => {
    return (
        <div>
            {Array(3).fill(0).map(item => <h4>rooms are loading....</h4>)}
        </div>
    )
}
