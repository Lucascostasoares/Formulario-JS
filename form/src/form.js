import React from 'react';
import './/style.css'

class Form extends React.Component {

    constructor(porps){
        super(porps);
        
        this.state ={
            nome: '',
            idade: null
            cidade: ''
        }
    }
    nome = (evente) => {
        console.log(evente.target.value);
        this.setState({
            nome:evente.Target.value
        })

        idade = (evente) => {
            console.log(evente.target.value);
            this.setState({
                nome:evente.Target.value
            })
        }

        cidade = (evente) => {
            console.log(evente.target.value);
            this.setState({
                nome:evente.Target.value
            })
        }
    }
    render() {
    return (
            <form>
                <label>
                    Nome:
                    <input type='text'
                    onChange={this.mudarnome}
                    value={this.state.nome}
                    />
                </label>
                <p>{this.state.nome</p>
            </form>
        )
    }
}
export default form;