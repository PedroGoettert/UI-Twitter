import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"

import './Timeline.css'



let newTweet = ''

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(
    ['Primeiro Tweet',
      'Testando',
      'Deu certo o Tweet']
  )

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubimit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }


  return (

    <main className='timeline'>

      <Header title='Home' />


      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="Tweet">
          <img src="https://github.com/pedrogoettert.png" alt="Avatar" />
          <textarea
            id='tweet'
            placeholder="what's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubimit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {
        tweets.map((tweets) => {
          return <Tweet content={tweets} key={tweets} />
        })
      }
    </main>
  )
}