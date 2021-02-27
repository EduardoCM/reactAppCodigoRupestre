import React, {Component} from 'react';


class Registros extends Component {
  constructor(props){
    super(props);
    this.state = {
      registros: []
    }
  }

  componentDidMount () {
    fetch('http://8f0c420f45dc.ngrok.io/api/v1/usuario')
        .then(res => res.json())
        .then(data => {
          this.setState({registros: data })

          console.log("Se recuperar registros");
          console.log(this.state.registros);
        })
  }


  render(){
    return (
      <div>
        <h1>Mostrar Lista de registros</h1>
        <ul>
           {
             this.state.registros.map((registro, indice) =>
             <li key={indice}><strong>Nombre: </strong> {registro.nombre} <strong>Email: </strong> {registro.correo} </li>

           )
           }

        </ul>

      </div>
    )
  }
}


class Formulario extends Component {

 constructor(props) {
   super(props);
   this.state = {
     nombre: "",
     apellidos: "",
     correo: "",
     password: "",
     username: ""
   }
 }


 enviarRegistro = (e) => {
   e.preventDefault();
   console.log("Se enviar valores");
   console.log(this.state);

   fetch('http://localhost:8280/api/v1/usuario', {
     method: 'POST',
     body: JSON.stringify({
       nombre: this.state.nombre,
       apellidos: this.state.apellidos,
       correo: this.state.correo,
       password: this.state.password,
       userName: this.state.username
     }),
     headers: {
       "Content-type": "Application/json; charset=UTF-8"
     }
   })
   .then(response => response.json())
   .then(json => {
     console.log(json);
     console.log("Envio de peticion de forma correcta");
     this.limpiarDatos();
   })
 }

 limpiarDatos = () => {
   console.log("Metodo para limpiar formulario");
   this.setState({nombre: ""})
   this.setState({apellidos: ""})
   this.setState({correo: ""})
   this.setState({password: ""})
   this.setState({username: ""})
   console.log("Datos limpios");
 }


 render() {

   return (
     <form onSubmit={this.enviarRegistro}>
       <div>
         <label> Nombre </label>
         <input type="text"
                id="nombre"
                value={this.state.nombre}
                onChange={ev => this.setState({nombre: ev.target.value})} />
        </div>

        <div>
          <label> Apellidos </label>
          <input type="text"
                 id="apellidos"
                 value={this.state.apellidos}
                 onChange={ev => this.setState({apellidos: ev.target.value})} />
         </div>

         <div>
           <label> Correo </label>
           <input type="text"
                  id="correo"
                  value={this.state.correo}
                  onChange={ev => this.setState({correo: ev.target.value})} />
          </div>

          <div>
            <label> Password </label>
            <input type="password"
                   id="password"
                   value={this.state.password}
                   onChange={ev => this.setState({password: ev.target.value})} />
           </div>

           <div>
             <label> User name </label>
             <input type="text"
                    id="username"
                    value={this.state.username}
                    onChange={ev => this.setState({username: ev.target.value})} />
            </div>

       <input type="submit" value="Enviar" />
     </form>
   )
 }
}


class MiPrimerFormulario extends Component {
  render(){
    return(
      <div>
        <Formulario />
        <Registros />
      </div>
    )
  }
}

export default MiPrimerFormulario;
