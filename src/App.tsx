import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"
import Multiplicador from "./components/Multiplicador/Multiplicador"

function App() {
  return (
    <>
      <Card titulo="A" descricao="AA" />
      <Card titulo="B" descricao="BB" />
      <Card titulo="C" descricao="CC" />
      <Contador />
      <Multiplicador />
      <Task />
    </>
  )
}

export default App
