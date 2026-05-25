import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Hero = styled.div`
  position:relative;
  height:320px;
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:flex-end;
  padding:32px 32px 24px;
  color:#fff;
  overflow:hidden;
  &::before {
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.65) 100%);
  }
`
const HeroContent = styled.div`
  position:relative;
  z-index:1;
  max-width:1100px;
`
const HeroLabel = styled.span`
  display:inline-block;
  background: rgba(255,255,255,0.18);
  color:#fff;
  padding:10px 16px;
  border-radius:999px;
  font-size:14px;
  letter-spacing:0.02em;
`
const RestaurantDescription = styled.p`
  max-width:760px;
  margin:28px auto 0;
  color:#7f3f3b;
  font-size:15px;
  line-height:1.75;
`
const HeroTitle = styled.h1`
  margin:18px 0 0;
  font-size:42px;
  line-height:1.05;
  max-width:760px;
`
const Container = styled.div`
  max-width:1100px;
  margin:24px auto 40px;
  padding:0 18px;
`
const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
  gap:24px;
  margin-top:26px;
`
const Card = styled.div`
  background:#fff;
  border:1px solid rgba(226, 96, 88, 0.18);
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 20px 40px rgba(0,0,0,0.04);
  transition:transform .2s ease;
  &:hover{ transform: translateY(-4px); }
`
const DishImage = styled.img`
  width:100%;
  height:220px;
  object-fit:cover;
  display:block;
`
const DishBody = styled.div`
  padding:18px;
`
const DishTitle = styled.h3`
  margin:0 0 10px;
  font-size:18px;
  color:var(--accent);
`
const DishDesc = styled.p`
  margin:0;
  font-size:14px;
  color:#8a3c39;
  line-height:1.75;
`
const DishFooter = styled.div`
  margin-top:18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const Price = styled.span`
  font-weight:700;
  color:#c2504c;
`
const AddButton = styled.button`
  border:none;
  background:var(--accent);
  color:#fff;
  border-radius:8px;
  padding:10px 16px;
  cursor:pointer;
  font-weight:700;
`

const restaurants = {
  1: {
    id: 1,
    name: 'Hioki Sushi',
    cuisine: 'Japonesa',
    heroImage: '/images/receita-de-sushi.jpg',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.'
  },
  default: {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    cuisine: 'Italiana',
    heroImage: '/images/deliciosos-espaguetes-bolognese-com-tomates-cereja-e-manjericao_191095-79432.png',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.'
  }
}

const sushiDishes = [
  {
    id: 1,
    name: 'Combo Hioki Salmon',
    desc: 'Sushis de salmão fresco, arroz temperado e molho especial.',
    price: 'R$ 45,00',
    image: '/images/sushi.jpg'
  },
  {
    id: 2,
    name: 'Temaki Especial',
    desc: 'Temaki recheado com salmão, queijo cremoso e cebolinha crocante.',
    price: 'R$ 38,00',
    image: '/images/sushiem.jpg'
  },
  {
    id: 3,
    name: 'Sashimi Premium',
    desc: 'Fatias finas de atum e salmão selecionado servidas com molho shoyu.',
    price: 'R$ 52,00',
    image: '/images/receita-de-sushi.jpg'
  },
  {
    id: 4,
    name: 'Sushi California',
    desc: 'Rolls com kani, abacate e maionese especial.',
    price: 'R$ 40,00',
    image: '/images/sushi.jpg'
  },
  {
    id: 5,
    name: 'Hot Roll',
    desc: 'Roll empanado e crocante com recheio de salmão e cream cheese.',
    price: 'R$ 42,00',
    image: '/images/sushiem.jpg'
  },
  {
    id: 6,
    name: 'Combo Misto',
    desc: 'Um mix de sushis e sashimis para compartilhar.',
    price: 'R$ 55,00',
    image: '/images/receita-de-sushi.jpg'
  }
]

const pizzaDishes = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: 'Pizza Marguerita',
  desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
  price: 'R$ 28,00',
  image: '/images/pizza-caseira-lucas-alencar.jpg'
}))

export default function Restaurant(){
  const { id } = useParams()
  const restaurant = restaurants[Number(id)] || restaurants.default
  const dishes = Number(id) === 1 ? sushiDishes : pizzaDishes

  return (
    <>
      <Header />
      <Hero style={{ backgroundImage: `url('${restaurant.heroImage}')` }}>
        <HeroContent>
          <HeroLabel>{restaurant.cuisine}</HeroLabel>
          <HeroTitle>{restaurant.name}</HeroTitle>
        </HeroContent>
      </Hero>
      <Container>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        <Grid>
          {dishes.map(d => (
            <Card key={d.id}>
              <DishImage src={d.image} alt={d.name} />
              <DishBody>
                <DishTitle>{d.name}</DishTitle>
                <DishDesc>{d.desc}</DishDesc>
                <DishFooter>
                  <Price>{d.price}</Price>
                  <AddButton>Adicionar ao carrinho</AddButton>
                </DishFooter>
              </DishBody>
            </Card>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
