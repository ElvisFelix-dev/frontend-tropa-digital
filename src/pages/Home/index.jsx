import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import {
  Container,
  Content,
  Background,
  EyeIcon,
  InputContainer,
} from './styles'

import imgLogo from '../../assets/imgLogo.png'
import imgDev from '../../assets/imgDev.png'
import { NavLink } from 'react-router-dom'

export function Home() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Tropa Digital" />

        <form action="">
          <h1>
            Bem Vindo ao <strong>painel</strong>
          </h1>

          <InputContainer>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              required
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Digite sua senha"
              required
            />

            <EyeIcon onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </EyeIcon>
          </InputContainer>

          <NavLink to="/dashboard">
            <button to>Acessar</button>
          </NavLink>
        </form>
      </Content>
      <Background>
        <img src={imgDev} alt="imgDev" />
      </Background>
    </Container>
  )
}
