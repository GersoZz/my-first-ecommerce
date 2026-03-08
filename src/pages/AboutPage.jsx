import { useState } from 'react'
import {
  ButtonEx1,
  ButtonEx2,
  ButtonEx3,
  ButtonsContainer,
  LinkButton,
  NavBarButtons,
} from '../components/styles/Buttons.styles'

const Card = () => {
  return (
    <div className="flex flex-col bg-card border border-card-line shadow-2xs rounded-xl w-56">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div className="p-4  ">
        <h3 className="font-semibold text-foreground">Card title</h3>
        <p className="mt-1 text-muted-foreground-1">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </div>
  )
}

const Prices = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:p-8 p-4 font-sans bg-slate-100 min-h-screen">
      <div className="lg:w-[23rem] bg-white w-full border-2 lg:border-r-0 border-gray-200 p-5 rounded-2xl lg:rounded-r-none">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <div className="text-xs text-slate-800 mb-2">START</div>
          <h2 className="text-5xl m-0 font-normal">Free</h2>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          10k Visitors/mo
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          10 Funnels, 50 Pages
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          Unlimited Transactions
        </div>
        <div className="mt-auto w-full">
          <button className="bg-white rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
            Get Free
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 12H4.75"
              ></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-slate-600 line-height-2">
            Literally you probably haven't heard of them jean shorts.
          </div>
        </div>
      </div>
      <div className="lg:w-[23rem] bg-white w-full lg:my-0 my-4 border-2 border-gray-200 p-5 rounded-2xl lg:shadow-8">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <div className="text-xs text-slate-800 mb-2">PRO</div>
          <div className="flex items-center">
            <h2 className="text-5xl m-0 font-normal">$38</h2>
            <span className="text-slate-300 ml-1">/mo</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          10k Visitors/mo
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          10 Funnels, 100 Pages
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          Unlimited Transactions
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          Analytics
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          lnstegrations
        </div>
        <div className="mt-auto w-full">
          <button className="!bg-teal-500 rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
            Get Pro
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 12H4.75"
              ></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-slate-600 line-height-2">
            Literally you probably haven't heard of them jean shorts.
          </div>
        </div>
      </div>
      <div className="lg:w-[23rem] bg-white w-full border-2 lg:border-l-0 border-gray-200 p-5 rounded-2xl lg:rounded-l-none">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <div className="text-xs text-slate-800 mb-2">ENTERPRISE</div>
          <div className="flex items-center">
            <h2 className="text-5xl m-0 font-normal">$72</h2>
            <span className="text-slate-300 ml-1">/mo</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          Audience Date
        </div>
        <div className="flex items-center mb-2">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          Premium templates
        </div>
        <div className="flex items-center mb-5">
          <svg width="24" height="24" fill="none" className="text-green-500 mr-1" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
            ></path>
          </svg>
          White Labelling
        </div>
        <div className="mt-auto w-full">
          <button className="bg-white rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
            Get Enterprise
            <svg className="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 12H4.75"
              ></path>
            </svg>
          </button>
          <div className="text-xs mt-3 text-slate-600 line-height-2">
            Literally you probably haven't heard of them jean shorts.
          </div>
        </div>
      </div>
    </div>
  )
}

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
      <Prices />
      <div className="flex gap-4 justify-center my-4">
        <Card />
        <Card />
        <Card />
      </div>
      <hr className="my-8" />
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
