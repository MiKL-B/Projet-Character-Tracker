import {useEffect, useState} from 'react';

const TestHook = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('pizza');
      const data = await response.json();
      setPizzas(data);
    };

    fetchData();
  }, []);

  const RendPizza = () => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>GlutenFree</th>
        </tr>
        </thead>
        <tbody>
        {pizzas.map(pizza =>
          <tr key={pizza.id}>
            <td>{pizza.id}</td>
            <td>{pizza.name}</td>
            <td>{pizza.isGlutenFree.toString()}</td>
          </tr>
        )}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>Test</h1>
      <RendPizza/>
    </div>
  )
}

export default TestHook;