import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  background: var(--soft);
  padding:36px 0 48px;
  text-align:center;
  margin-top:40px;
`
const LogoBox = styled.div`
  display:inline-block; padding:8px 18px; background:#fff; border:3px solid var(--accent); border-radius:6px; color:var(--accent); font-weight:700; margin-bottom:12px;
`
const Legal = styled.p`
  color:#d07d78; font-size:12px; max-width:760px; margin:12px auto 0;
`
export default function Footer(){
  return (
    <Foot>
      <LogoBox>efood</LogoBox>
      <div style={{marginTop:12}}>
        <span style={{display:'inline-block', width:10, height:10, borderRadius:6, background:'#f4a9a3', margin:6}}></span>
      </div>
      <Legal>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</Legal>
    </Foot>
  )
}
