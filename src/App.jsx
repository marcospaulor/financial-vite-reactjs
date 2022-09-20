import { useState } from 'react'
import {Link} from 'react-router-dom'
import Table from './Table'
import Request from './Request'
import './App.css'

function App() {
  // data list state with json data
  const [list, setList] = useState({})
  return (
    <div className="App">
      <h1>Financial APP</h1>
      <div className="card">
        <input type="text" name="id" id="id" minLength="3" maxLength="6"/>
        <button onClick={async () =>{
          var input = document.getElementById('id')
          var data = input.value.toUpperCase()
          console.log(data)
          await setList(Request(data))
          console.log(list)
        }}>
          Submit
        </button>
      </div>
      <p className="read-the-docs">
        Logo abaixo, o índice do ativo pesquisado 👇
      </p>
      <Table/>
    </div>
  )
}

export default App
