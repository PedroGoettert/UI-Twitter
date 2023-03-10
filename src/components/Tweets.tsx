import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface tweetsProps {
  content: string
}

export function Tweet(props: tweetsProps) {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/pedrogoettert.png" alt="Avatar" />

      <div className="tweet-content">
        <div className='tweet-content-header'>
          <strong>Pedro Goettert</strong>
          <span>@PGoettert</span>

        </div>

        <p>{props.content}</p>

        <div className='tweet-content-footer'>

          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            30
          </button>

        </div>

      </div>
    </Link>
  )
}