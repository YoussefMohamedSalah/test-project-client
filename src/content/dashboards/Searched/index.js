import React from 'react'
import { useParams } from 'react-router-dom';

const Searched = () => {
    const params = useParams();
    return (
        <div>You Searched For {params.search}</div>
    )
}

export default Searched