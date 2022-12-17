import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState('');
    const Navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        Navigate('searched/' + input)
    };

    return (
        <FormStyled onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder='Search'
                    value={input}
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
  margin: 0rem 8rem;
  div {
    width: 80%;
    position: relative;
  }
  input {
    border: none;
    font-size: 1rem;
    color: rgba(34, 51, 84, 0.5);
    padding: 0.8rem 2.5rem;
    border: 1px solid rgba(34, 51, 84, 0.5);
    border-radius: 2rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: rgba(34, 51, 84, 0.5);
  }
`;

export default Search;