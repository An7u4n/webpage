import React, { Component } from 'react';

class Greetings extends Component {
  constructor(props) {
    super(props); // Informacion recibida
    this.state = {
      // Informacion privada del componente, se debe cambiar a traves de setState.
      idArticulo: 10,
    };
  }

  render() {
    return (
      <div>
        <h1 className="greetings">
          id: {this.state.idArticulo}, name: {this.props.name}
          <button onClick={this.plusId}>Plus</button>
        </h1>
      </div>
    );
  }

  plusId = () => {
    this.setState((prevState) => ({ idArticulo: prevState.idArticulo + 1 }));
  };
}

export default Greetings;
