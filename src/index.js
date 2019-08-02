import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const Backspin = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Toolbar
      isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => {
        if (isActive) {
          setTimeout(() => {
            setIsActive(false)
          }, 3000)
        }
      }}
    >
      <span className='toolbar-trigger'>></span>
      <a to='#'>Some admin link</a>
    </Toolbar>
  )
}

const Toolbar = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  background: white;
  bottom: 10%;
  color: black;
  transform: translateX(-100%);
  transition: 0.3s ease all;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
      transition: 0.3s all easeOutQuart;
    `}
  a,
  button {
    color: black
    display: block;
    padding: 10px;
    text-align: right;
    text-decoration: none;
    font-weight: 100;
    &:hover span {
      opacity: 1;
    }
    span {
      display: inline-block;
      margin-right: 20px;
      opacity: 0.6;
    }
  }
  .toolbar-trigger {
    background: white;
    position: absolute;
    left: 100%;
  }
`
export default Backspin
