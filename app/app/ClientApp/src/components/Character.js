import React, { Component } from 'react';

export class Character extends Component {
    static displayName = Character.name;

    constructor(props) {
        super(props);
        this.state = { characters: [], loading: true };
    }

    componentDidMount() {
        this.populateCharacter();
    }

    static renderCharacter(characters) {
       console.log(characters)
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstname</th>
                        <th>lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map(character =>
                        <tr key={character.id}>
                            <td>{character.id}</td>
                            <td>{character.firstName}</td>
                            <td>{character.lastName}</td>
                         
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        const character = Character.renderCharacter(this.state.characters)
        return (
            <div>
                <h1>Character</h1>
                {character}
           
            </div>
        );
    }

    async populateCharacter() {
        const response = await fetch("character");
        const data = await response.json();
        this.setState({ characters: data, loading: false });
    }
}