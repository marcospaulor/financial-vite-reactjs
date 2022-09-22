import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Table from './Table'
import Request from './Request'
import './App.css'

function App() {
  // data list state with json data
  const [list, setList] = useState([])
  // list state if null or not
  const [isList, setIsList] = useState(false)

  // console.log(list)
  
  return (
    <div className="App">
      <a href="/"><h1>Financial APP</h1></a>
      <div className="card">
        <input type="text" name="id" placeholder='Digite o código do ativo (PETR4)' id="id" minLength="3" maxLength="6"/>
        <button onClick={
          async () => {
            if(document.getElementById('id').value === ''){
              alert('Digite o código do ativo')
              if(isList) setIsList(false)
              
            }else{
              // get the input value
              const ativo = document.getElementById('id').value.toUpperCase()
              const data = await Request(ativo)
              if(data['Error Message']){
                alert('Ativo não encontrado')
                if(isList) setIsList(false)
              } else {
                setList(data)
                setIsList(true)
                // clear the input
                document.getElementById('id').value = ''
              }
            }
            
          }
        }>
          Pesquisar
        </button>
      </div>
      <p className="read-the-docs">
        Logo abaixo, a cotação de <strong>{isList !== false ?
        (list['Meta Data']['2. Symbol']).replace(".SA",""):
        "Ativo"}</strong> 👇
      </p>
      <Table setList = {list}/>
    </div>
  )
}

export default App
