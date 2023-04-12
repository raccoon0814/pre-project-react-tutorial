// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { increase, decrease } from '../App';
import { useDispatch, useSelector } from 'react-redux';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UpdownButton = styled.button`
  width: 30px;
  height: 30px;
`;

const NumberContainer = styled.div`
  text-align: center;
  color: rgb(36, 19, 15);
  margin-bottom: 20px;
  font-weight: 700;
`;

function CountUpDown() {
  const dispatch = useDispatch();

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  const counter = useSelector((state) => state);

  return (
    <div>
      <NumberContainer>{`Counter: ${counter}`}</NumberContainer>

      <ButtonContainer>
        <UpdownButton onClick={plusNum}> + </UpdownButton>
        <UpdownButton onClick={minusNum}> - </UpdownButton>
      </ButtonContainer>
    </div>
  );
}

export default CountUpDown;
