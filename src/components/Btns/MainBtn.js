import { styled } from '@mui/material';
import React from 'react'

const MainBtn = ({ Content }) => {

    const MainBtn = styled('botton')(({ theme }) => ({
        padding: theme.spacing(1, 3),
        backgroundColor: "#EB455F",
        justifyContent: 'center',
        border: '2px solid #EB455F',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '1.1rem',
        color: 'white'
    }));

    return (
        <MainBtn>{Content}</MainBtn>
    )
}

export default MainBtn