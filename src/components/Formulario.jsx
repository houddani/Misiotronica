import "../App.css";
import { useState } from "react";

const Formulario = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(data)
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>Contactanos aquí</h2>
      <input
        type="text"
        name="name"
        id=""
        onChange={handleChange}
        value={data.name}
        placeholder="Ingrese su nombre"
      />
      <input
        type="email"
        name="email"
        id=""
        onChange={handleChange}
        value={data.email}
        placeholder="Ingrese su correo"
      />
      <input
        type="prone"
        name="phoe"
        id=""
        onChange={handleChange}
        value={data.phone}
        placeholder="+54"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
        value={data.message}
        placeholder="Escriba aquí..."
      />
      <button type="submit">Enviar</button>
      
    </form>
  );
};

export default Formulario;
