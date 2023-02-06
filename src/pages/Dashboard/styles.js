import styled from 'styled-components'
// import { shade } from 'polished'

export const Container = styled.main`
  background-color: ${(props) => props.theme['white-200']};
`

export const Content = styled.main`
  background-color: ${(props) => props.theme['white-200']};
  height: 1200px;

  .side-bar {
    position: absolute;
    top: 0px;
    background-color: ${(props) => props.theme['white-100']};
    width: 240px;
    height: 1800px;
    padding-left: 20px;
  }
  .logo img {
    margin-top: 40px;
    width: 200px;
    height: 80px;
  }

  ul {
    margin: 50px 0;
  }

  li:first-child {
    background-color: ${(props) => props.theme['white-200']};
    width: 100%;
    color: black;
  }

  li {
    width: 88%;
    height: 50px;
    margin-left: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme['blue-100']};
    color: ${(props) => props.theme['white-100']};

    list-style: none;
    padding: 10px;

    align-items: center;
  }

  li > p {
    font-family: 'Advent Pro';
    position: relative;
    margin-left: 1.9rem;

    bottom: 1.5rem;
  }

  .welcome {
    margin-left: 280px;
    background-color: ${(props) => props.theme['white-200']};
  }

  .welcome h2 {
    padding: 40px 0;
    font-weight: 400;
    color: ${(props) => props.theme['gray-200']};
    border-bottom: 1px solid ${(props) => props.theme['gray-100']};
    max-width: 90%;
    font-family: 'Advent Pro';
  }

  .welcome h2 span {
    color: ${(props) => props.theme['gray-300']};
    font-weight: bold;

    font-family: 'Advent Pro';
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    height: 100%;
    margin-top: 40px;
    border-radius: 8px;
  }

  .content-boxes {
    width: 550px;
    height: 270px;
    margin: 20px;
    background-color: ${(props) => props.theme['white-100']};
    border-radius: 8px;
  }

  .content-boxes img {
    padding: 15px;
    width: 550px;
    height: 200px;
    border-radius: 25px;
  }

  .content-boxes article {
    width: 120%;
    padding: 0 20px;
  }

  .content-boxes h3 {
    color: black;
    font-size: 14px;
  }

  .content-boxes p {
    font-size: 13px;
  }
`
