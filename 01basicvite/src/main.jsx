import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const element = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click to google me'
}

function MyApp(){
  return(
    <div> <h1> Custom React App</h1></div>
  )

}
const bf = "Bharath"

const AnotherElement = (
  <>
  <a href="https://google.com" target="_blank">Visit Google</a>
  <h1> Hi {bf}</h1>
  </>
)

const AreactElement = React.createElement(
  'a',
  {href:'https://google.com', target: "_blank"},
  'Click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  App()
)
