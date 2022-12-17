import { styled } from '@mui/material';
import React from 'react'

const SubBtn = ({ Content }) => {

    const SubBtn = styled('botton')(({ theme }) => ({
        padding: theme.spacing(1, 1),
        color: "#EB455F",
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'center',
        border: '2px solid #EB455F',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '1.1rem'
    }));
    return (
        <SubBtn>
            {Content}
        </SubBtn>
    )
}

export default SubBtn