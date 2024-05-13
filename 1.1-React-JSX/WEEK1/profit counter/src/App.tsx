import './App.css'
import './App.css'
import ProductionCounter from './Production';
import {Card} from "antd";

function App() {

  return (
    <>

        <Card className='card' title="Gestion de Produccion" bordered={false} style={{ width: 300 }}>
            <ProductionCounter />
        </Card>

    </>
  )
}

export default App


