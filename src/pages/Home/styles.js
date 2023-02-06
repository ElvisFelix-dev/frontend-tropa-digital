import styled from 'styled-components'
import { shade } from 'polished'

import imgBg from '../../assets/imgBg.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  padding: 2rem;

  background-color: ${(props) => props.theme['orange-100']};

  @media (max-width: 768px) {
    margin: 15px;
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;

  max-width: 500px;
  max-height: 800px;
  margin-left: 9rem;

  background-color: ${(props) => props.theme['white-100']};

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  img {
    width: 259px;
    height: 90px;
    margin-top: 50px;

    margin-left: 3rem;
  }

  form {
    margin: 80px 0;
    width: 340px;
    padding: 20px;

    h1 {
      margin-bottom: 24px;
      font-family: 'Advent Pro';
      color: ${(props) => props.theme['black-rgba']};
    }

    strong {
      margin-bottom: 24px;
      color: ${(props) => props.theme['orange-100']};
    }

    input {
      width: 313px;
      background: ${(props) => props.theme['white-100']};
      border: 1px solid ${(props) => props.theme['black-rgba-1']};
      border-radius: 5px;
      padding: 12px;
      & + input {
        margin-top: 13px;
      }
    }

    button {
      width: 151px;
      height: 40px;
      border-radius: 5px;
      padding: 0 6px;
      margin-top: 13px;
      background: ${(props) => props.theme['blue-100']};
      color: ${(props) => props.theme['white-100']};
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#2EAFB2')};
      }

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 186.5%; //or 26px
      text-align: center;
      cursor: pointer;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    &[type='email'] {
      margin-bottom: 10px;
    }
  }

  span {
    position: relative;
    left: 8rem;
    top: -1.3rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`

export const EyeIcon = styled.span`
  font-size: 18px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

export const Background = styled.div`
  flex: 1;
  background: url(${imgBg}) no-repeat center;
  background-size: cover;
  display: block;

  img {
    position: absolute;
    width: 30rem;
    height: 31rem;
    left: 500px;
    display: block;
    margin-top: 4.7rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`
