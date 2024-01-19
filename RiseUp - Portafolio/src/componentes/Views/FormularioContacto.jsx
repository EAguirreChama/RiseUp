import { useState } from 'react';

export default function FormularioContacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        nombreEmpresa: '',
        telefono: '',
        email: '',
        descripcion: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'telefono' && !/^\d*$/.test(value)) {
            return;
        }
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Este campo es obligatorio';
        }

        if (!formData.nombreEmpresa.trim()) {
            newErrors.nombreEmpresa = 'Este campo es obligatorio';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Este campo es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un correo electrónico válido';
        }

        if (formData.telefono.trim() && !/^\d{3}\d{3}\d{4}$/.test(formData.telefono)) {
            newErrors.telefono = 'Ingresa un número de teléfono válido';
        }

        // Actualizar el estado de errores
        setErrors(newErrors);

        // Enviar el formulario si no hay errores
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:3001/enviar-correo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('Correo enviado con éxito');
                    // Puedes redirigir a una página de confirmación o realizar otras acciones aquí
                } else {
                    console.error('Error al enviar el correo');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center mt-5">
            <form className="rounded-3xl mt-10 border border-white px-10 py-8 text-white" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.nombre && 'border-red-500'}`}
                            placeholder="Ernesto"
                            required
                        />
                        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Nombre de la Empresa:</label>
                        <input
                            type="text"
                            name="nombreEmpresa"
                            value={formData.nombreEmpresa}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.nombreEmpresa && 'border-red-500'}`}
                            placeholder="RiseUp"
                            required
                        />
                        {errors.nombreEmpresa && <p className="text-red-500">{errors.nombreEmpresa}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Número de Teléfono:</label>
                        <input
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.telefono && 'border-red-500'}`}
                            placeholder="123-456-7890"
                        />
                        {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`text-black rounded-md ${errors.email && 'border-red-500'}`}
                            placeholder="correo@correo.com"
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col mt-5">
                        <label>Contanos a qué se dedica tu empresa:</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            cols="30"
                            rows="10"
                            className="text-black resize-none h-24 rounded-md"
                        />
                    </div>

                    <button type="submit" className="text-white text-2xl bg-green-600 font-medium py-2 rounded-2xl justify-center mt-8">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
