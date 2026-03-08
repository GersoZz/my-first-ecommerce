import { useState } from 'react'
import {
  ButtonEx1,
  ButtonEx2,
  ButtonEx3,
  ButtonsContainer,
  LinkButton,
  NavBarButtons,
} from '../components/styles/Buttons.styles'

const CartButton = () => {
  const [added, setAdded] = useState(false)

  return (
    <ButtonEx3 onClick={() => setAdded((p) => !p)} $active={added}>
      {added ? 'Added' : 'Add to Cart'}
    </ButtonEx3>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NavBarButtons>
        <li>Home</li>
        <li>About</li>
        <li>Add Product</li>
      </NavBarButtons>
      <ButtonsContainer>
        <ButtonEx1>Click me</ButtonEx1>
        <LinkButton href="https://www.google.com" target="_blank">
          Go to Google
        </LinkButton>
        <h2>This is a title</h2>
        <ButtonEx2>Click me</ButtonEx2>
        <CartButton />
      </ButtonsContainer>
    </div>
  )
}

export default AboutPage
