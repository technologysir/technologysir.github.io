//import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [prevanswer, setprevAnswer] = useState('')

  const handleSubmit = (e) =>  {
      e.preventDefault();
      setQuestion(e.target.elements.question.value);
      //console.log(answer)
      
    }
  useEffect (()=>{

    const getAnswer = async() => {
    let response = await fetch(`http://127.0.0.1:5000/ask?q=${question}`)
    response = await response.json()
    setAnswer(response.answers)
    setAnswer( prev => prev + answer )
    }
    question !== '' && getAnswer()
    setQuestion('');
  }, [question]);
  
  

  return (

    <div className='container'>
    <pre className='answer-area'>
      {prevanswer}<br/>
      {answer}</pre>
    <form onSubmit={handleSubmit} className='question-form' >
      <input name="question" type="text"/>
      <input type="submit" value="Ask"/>
    </form>
    </div>

  );
}

export default App;
