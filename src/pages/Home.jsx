import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import RestaurantCard from '../components/RestaurantCard'
import Footer from '../components/Footer'

const Hero = styled.section`
  background: var(--muted); padding:60px 0; text-align:center; margin-bottom:28px;
`
const HeroTitle = styled.h1`
  font-size:40px; margin:0; color:var(--accent); font-weight:800;
`
const GridWrap = styled.div`
  max-width:1100px; margin:0 auto; padding:0 18px 40px;
`
const Grid = styled.div`
  display:grid; grid-template-columns:repeat(2,1fr); gap:28px; margin-top:28px;
`
const restaurants = Array.from({length:6}).map((_,i)=>({
  id: i+1,
  name: i===0? 'Hioki Sushi' : 'La Dolce Vita Trattoria',
  cuisine: i===0? 'Japonesa' : 'Italiana',
  description: i===0? 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.' : 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.' ,
  image: i===0 ? '/images/receita-de-sushi.jpg' : '/images/pizza-caseira-lucas-alencar.jpg'
}))

export default function Home(){
  return (
    <>
      <Header />
      <Hero>
        <div className="container">
          <HeroTitle>Viva experiências gastronômicas no conforto da sua casa</HeroTitle>
        </div>
      </Hero>

      <GridWrap>
        <Grid>
          {restaurants.map(r=> (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </Grid>
      </GridWrap>

      <Footer />
    </>
  )
}
