import React, { useState } from "react";
import "../styles/contacStyle.css";
import csLogo from "../IMAGES/cslogo.jpg";

const Contac = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', { nombre, apellido, email, mensaje });
        alert('Mensaje enviado con éxito.');
        
        // Limpiar campos después de enviar
        setNombre('');
        setApellido('');
        setEmail('');
        setMensaje('');
    };

    return (
        <>
            <header className="logo-header">
                <div className="logoynombre">
                    <img id="logo" src={csLogo} alt="cslogo" />
                    <h1 id="nombre">
                        Pibardo <br />
                        Skins
                    </h1>
                </div>
            </header>

            <div className="container">
                <h2>Contacto - Pibardo Skins</h2>
                <p>Para consultas, puedes comunicarte con nosotros:</p>
                <p>Email: <a className="contact-email" href="mailto:soporte@pibardoskins.com">soporte@pibardoskins.com</a></p>
                <p>Teléfono: +54 9 11 1234-5678</p>
                <p>Dirección: Calle Falsa 123, Buenos Aires, Argentina</p>

                <h3>Formulario de Contacto</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <input 
                            type="text" 
                            value={apellido} 
                            onChange={(e) => setApellido(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Mensaje:</label>
                        <textarea 
                            value={mensaje} 
                            onChange={(e) => setMensaje(e.target.value)} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <footer className="footer">
                <p className="footer-text">
                    Derechos reservados a GiuseppeSkinsTecnolgi™
                </p>
                <p className="footer-text">Última Fecha de Modificaciones: 27/9/2024</p>
            </footer>
        </>
    );
};

export default Contac;
