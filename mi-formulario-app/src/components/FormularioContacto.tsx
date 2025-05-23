import { useState, FormEvent } from 'react';
export default function FormularioContacto() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);
    const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre}, Mensaje: ${mensaje}`);
        setEnviado(true);

    };
    return (
        <div>
            <h2>Formulario de Contacto</h2>

            {enviado && <p style={{ color: 'green' }}>¡Gracias por tu mensaje!</p>}
            <form onSubmit={manejarEnvio}>
                <div style={{ marginTop: '10px', background: '#e0ffe0', padding: '10px' }}>
                    <p>Gracias, <strong>{nombre}</strong>.</p>
                    <p>Tu mensaje fue: "{mensaje}"</p>
                </div>
                <div>
                    <label htmlFor="nombre">Nombre:</label><br />
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje:</label><br />
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}