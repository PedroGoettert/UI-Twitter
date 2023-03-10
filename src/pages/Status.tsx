import { useState, FormEvent, KeyboardEvent, } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweets"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"



export function Status() {

  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState(
    ['Concordo...',
      'Olha, faz sentido',
      'Parabéns pelo progresso!']
  )

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotKeySubimit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  console.log('Renderizou!')

  return (
    <main className='status'>

      <Header title='tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quos nostrum ipsum sint praesentium doloribus hic officia corporis debitis. Sint eaque unde vero obcaecati nulla nam esse id omnis repellendus." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="Tweet">
          <img src="https://github.com/pedrogoettert.png" alt="Avatar" />
          <textarea id='tweet'
            placeholder="Tweet your answer?"
            value={newAnswers}
            onKeyDown={handleHotKeySubimit}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }} />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>


      {
        answers.map((answer) => {
          return <Tweet content={answer} key={answer} />
        })
      }
    </main>
  )
}