import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Top = styled.header`
  background: var(--muted);
  padding: 28px 0 18px;
  border-bottom: 4px solid rgba(0,0,0,0.02);
  display:flex; align-items:center; justify-content:center; position:relative;
`
const LogoBox = styled(Link)`
  display:inline-block; padding:8px 18px; background:#fff; border:3px solid var(--accent); border-radius:6px; color:var(--accent); font-weight:700; text-decoration:none;
`
const TopLeft = styled.div`
  position:absolute; left:18px; top:14px; color:var(--accent); font-size:14px;
`
const TopRight = styled.div`
  position:absolute; right:18px; top:14px; color:#9b4440; font-size:13px;
`

export default function Header(){
  return (
    <Top>
      <TopLeft>Restaurantes</TopLeft>
      <LogoBox to="/">efood</LogoBox>
      <TopRight>0 produto(s) no carrinho</TopRight>
    </Top>
  )
}
