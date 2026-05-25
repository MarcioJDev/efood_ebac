import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  background:#fff; border:2px solid var(--card-border); border-radius:6px; overflow:hidden;
  box-shadow: 0 2px 0 rgba(0,0,0,0.02);
`
const ImgWrap = styled.div`
  position:relative;
`
const Img = styled.img`
  width:100%; height:200px; object-fit:cover; display:block;
`
const Badge = styled.span`
  position:absolute; right:12px; top:12px; background:var(--accent); color:#fff; padding:6px 10px; border-radius:4px; font-size:12px;
`
const Body = styled.div`
  padding:16px;
`
const Row = styled.div`
  display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;
`
const Title = styled.h3`
  margin:0; font-size:16px; color:var(--accent);
`
const Rating = styled.div`
  color:#f5a623; font-weight:700; display:flex; align-items:center; gap:6px;
`
const Desc = styled.p`
  margin:0 0 12px 0; font-size:13px; color:#b04f4a; line-height:1.3;
`
const MoreBtn = styled(Link)`
  display:inline-block; background:var(--accent); color:#fff; padding:8px 12px; border-radius:4px; font-size:13px;
`
export default function RestaurantCard({r}){
  return (
    <Card>
      <Link to={`/restaurant/${r.id}`} style={{color:'inherit', textDecoration:'none'}}>
        <ImgWrap>
          <Img src={r.image} alt={r.name} />
          <Badge>{r.cuisine}</Badge>
        </ImgWrap>
        <Body>
          <Row>
            <Title>{r.name}</Title>
            <Rating>4.6 <span>★</span></Rating>
          </Row>
          <Desc>{r.description}</Desc>
          <MoreBtn to={`/restaurant/${r.id}`}>Saiba mais</MoreBtn>
        </Body>
      </Link>
    </Card>
  )
}
