import { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';



const { Title, Text } = Typography;

const ProductionCounter = () => {
    const [production, setProduction] = useState(0);
    const [ganancias, setProfit] = useState(0);

    useEffect(() => {
        console.log("Production Counter Initialized");
    }, []);

    const increaseProduction = () => {
        const newProduction = production + 1;
        const newProfit = ganancias + 15; // 
        setProduction(newProduction);
        setProfit(newProfit);
    };

    return (
        <div className='targeta'>
            <Title level={2}> Conteo</Title>
            <div>
                <Text>Producion: {production}</Text>
                <br />
                <Text>Ganancia: ${ganancias }</Text>
            </div>
            <br />
            <Button className='btn'  type="primary" onClick={increaseProduction}>
                Incrementar Produccion
            </Button>
        </div>
    );
}

export default ProductionCounter;

