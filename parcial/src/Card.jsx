//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div className="card">
        <h2>Datos ingresados</h2>
        <p>El nombre de tu animal es: {props.nombre}</p>
        <p>Su edad es: {props.edad}</p>
        <p>Es un: {props.tipo}</p>
    </div>
  );
}

export default Card;