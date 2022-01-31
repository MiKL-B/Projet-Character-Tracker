import React, { Component } from 'react';

export class Test extends Component {
    static displayName = Test.name;

    constructor(props) {
        super(props);
        this.state = { pizzas: [], loading: true };
    }
    
    componentDidMount() {
        this.getPizza();
    }
    
    static rendPizza(pizzas) {
        console.log(pizzas)
        return(
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
    
    render() {
        const pizza = Test.rendPizza(this.state.pizzas)
        
        return (
            <div>
                <h1>Test</h1>
                {pizza}
            </div>
        );
    }

    async getPizza() {
        const response = await fetch("pizza");
        const data = await response.json();
        this.setState({ pizzas: data, loading: false });
    }
}