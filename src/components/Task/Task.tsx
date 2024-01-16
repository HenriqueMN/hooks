import { useEffect, useState } from 'react';
import './Task.css'

function Task() {

  const[concluido, setConcluido] = useState(false); // boolean
  const[tarefa, setTarefa] = useState("Pendente"); // string

  useEffect(() => {
    if(concluido == true){
      setTarefa("Concluída");
    }
  }, [concluido]);
  /*
  function concluirTarefa(){
    setConcluido(true);
  }
  */

  return (
    <div className="task">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {tarefa}</h3>
        <button onClick={() => {setConcluido(true)}}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task