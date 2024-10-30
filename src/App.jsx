import React, { useState } from 'react'
import './index.css';
import image from './images/image.png';

function App() {
  const [activeSection, setActiveSection] = useState('presentacion')
  const [selectedTab, setSelectedTab] = useState("principiante")
  const [selectedDay, setSelectedDay] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userLevel, setUserLevel] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const rutinas = {
    principiante: [
      { 
        dia: "Lunes",
        focus: "Pecho, Tríceps y Hombro",
        ejercicios: [
          { nombre: "Press de banca plano", series: "3", repeticiones: "12-15" },
          { nombre: "Apertura en máquina", series: "3", repeticiones: "12-15" },
          { nombre: "Press de banca inclinado con barra", series: "3", repeticiones: "12-15" },
          { nombre: "Press militar con mancuernas", series: "3", repeticiones: "15" },
          { nombre: "Elevación lateral con mancuernas", series: "3", repeticiones: "12" },
          { nombre: "Extensión de tríceps en polea alta", series: "3", repeticiones: "15" },
          { nombre: "Copa con mancuernas sentado", series: "3", repeticiones: "15" },
        ],
        notas: "Prioriza la ejecución correcta en cada ejercicio. Hidrátate adecuadamente y usa ropa adecuada para el entrenamiento."
      },
      { 
        dia: "Martes",
        focus: "Piernas",
        ejercicios: [
          { nombre: "Sentadilla libre con barra", series: "4", repeticiones: "10" },
          { nombre: "Desplantes con mancuernas", series: "3", repeticiones: "10" },
          { nombre: "Prensa", series: "4", repeticiones: "15" },
          { nombre: "Extensión de cuádriceps", series: "4", repeticiones: "15" },
          { nombre: "Aducción sentado en máquina", series: "3", repeticiones: "15" },
          { nombre: "Elevación de talones de pie", series: "3", repeticiones: "20" },
        ],
        notas: "Calienta adecuadamente antes de los ejercicios de pierna y mantén una buena forma durante todos los movimientos."
      },
      { 
        dia: "Miércoles",
        focus: "Espalda y Bíceps",
        ejercicios: [
          { nombre: "Jalón en polea alta", series: "3", repeticiones: "15" },
          { nombre: "Remo con barra", series: "4", repeticiones: "15" },
          { nombre: "Remo en polea sentado", series: "3", repeticiones: "15" },
          { nombre: "Remo con mancuernas unilateral", series: "3", repeticiones: "15" },
          { nombre: "Curl de bíceps con mancuernas de pie", series: "3", repeticiones: "12" },
          { nombre: "Curl de bíceps agarre neutro", series: "3", repeticiones: "15" },
        ],
        notas: "Prioriza la ejecución correcta en cada ejercicio y progresa en cargas de manera controlada."
      },
    ],
    intermedio: [
      { 
        dia: "Lunes",
        focus: "Pecho, Hombros y Tríceps",
        ejercicios: [
          { nombre: "Press mancuerna", series: "4", repeticiones: "12-15" },
          { nombre: "Apertura en máquina", series: "4", repeticiones: "12-15" },
          { nombre: "Press mancuerna inclinado", series: "4", repeticiones: "12-15" },
          { nombre: "Press militar sentado con mancuernas", series: "4", repeticiones: "10-12" },
          { nombre: "Elevaciones laterales con mancuernas de pie", series: "4", repeticiones: "15-20" },
          { nombre: "Pull face en polea", series: "4", repeticiones: "15-20" },
          { nombre: "Press francés acostado con mancuernas", series: "4", repeticiones: "15" },
          { nombre: "Extensión de tríceps en polea con barra recta", series: "4", repeticiones: "15-20" },
          { nombre: "Fondos", series: "4", repeticiones: "15" },
          { nombre: "Abdominales crunch acostado", series: "4", repeticiones: "30" },
        ],
        notas: "Enfócate en mantener una buena forma y control en cada repetición, especialmente en los ejercicios de hombros."
      },
      { 
        dia: "Martes",
        focus: "Tren Inferior (Cuádriceps y Aductores)",
        ejercicios: [
          { nombre: "Sentadilla libre con barra", series: "4", repeticiones: "12-15" },
          { nombre: "Desplantes con mancuernas", series: "4 vueltas", repeticiones: "" },
          { nombre: "Prensa", series: "4", repeticiones: "15" },
          { nombre: "Extensiones de cuádriceps", series: "4", repeticiones: "12-15" },
          { nombre: "Sentadilla sumo con mancuernas", series: "4", repeticiones: "15" },
          { nombre: "Aducción sentado", series: "4", repeticiones: "20" },
          { nombre: "Elevación de tobillos de pie", series: "4", repeticiones: "20" },
          { nombre: "Elevación de tobillos sentado", series: "4", repeticiones: "20" },
        ],
        notas: "Mantén la postura correcta durante las sentadillas y desplantes para evitar lesiones."
      },
      { 
        dia: "miercoles",
        focus: "Espalda y Bíceps",
        ejercicios: [
          { nombre: "Remo con barra", series: "4", repeticiones: "12-15" },
          { nombre: "Jalón pecho en polea alta", series: "4", repeticiones: "15" },
          { nombre: "Remo sentado en polea", series: "4", repeticiones: "15" },
          { nombre: "Pull over en polea con barra", series: "4", repeticiones: "15" },
          { nombre: "Remo con mancuernas unilateral", series: "4", repeticiones: "12 cada brazo" },
          { nombre: "Curls de bíceps en predicador", series: "4", repeticiones: "15" },
          { nombre: "Curls martillo con mancuernas de pie", series: "4", repeticiones: "15" },
        ],
        notas: "Mantén la espalda recta en los ejercicios de remo y controla el peso durante los curls."
      },
      { 
        dia: "Jueves",
        focus: "Tren Inferior (Glúteos y Femoral)",
        ejercicios: [
          { nombre: "Peso muerto con barra", series: "4", repeticiones: "12-15" },
          { nombre: "Curl femoral acostado", series: "4", repeticiones: "20" },
          { nombre: "Curl femoral sentado", series: "4", repeticiones: "12" },
          { nombre: "Hip thrust con barra o en máquina", series: "4", repeticiones: "15" },
          { nombre: "Patada de glúteos en máquina o en polea", series: "4", repeticiones: "20 por pierna" },
          { nombre: "Elevación de talones de pie", series: "4", repeticiones: "15" },
          { nombre: "Elevación de talones sentado", series: "4", repeticiones: "15" },
        ],
        notas: "Concéntrate en activar los glúteos en cada repetición. Controla bien la carga en el peso muerto."
      },
    ],
    avanzado: [
      { 
        dia: "Lunes",
        focus: "Pecho y Tríceps",
        ejercicios: [
          { nombre: "Press de banca", series: "5", repeticiones: "6-8" },
          { nombre: "Press inclinado con barra", series: "4", repeticiones: "8-10" },
          { nombre: "Aperturas con mancuernas", series: "3", repeticiones: "10-12" },
          { nombre: "Fondos lastrados", series: "4", repeticiones: "8-10" },
          { nombre: "Extensiones de tríceps en polea", series: "4", repeticiones: "10-12" },
          { nombre: "Press cerrado", series: "3", repeticiones: "8-10" },
        ],
        notas: "Utiliza pesos desafiantes. Incorpora técnicas de intensidad como series descendentes en los últimos ejercicios."
      },
      { 
        dia: "Martes",
        focus: "Espalda y Bíceps",
        ejercicios: [
          { nombre: "Dominadas lastradas", series: "4", repeticiones: "6-8" },
          { nombre: "Remo con barra", series: "4", repeticiones: "8-10" },
          { nombre: "Pulldown", series: "3", repeticiones: "10-12" },
          { nombre: "Remo en T", series: "3", repeticiones: "10-12" },
          { nombre: "Curl con barra", series: "4", repeticiones: "8-10" },
          { nombre: "Curl de martillo", series: "3", repeticiones: "10-12" },
        ],
        notas: "Enfócate en la contracción y el estiramiento completo en cada repetición. Usa straps si es necesario para los ejercicios de espalda pesados."
      },
      { 
        dia: "Miércoles",
        focus: "Piernas",
        ejercicios: [
          { nombre: "Sentadillas", series: "5", repeticiones: "5-7" },
          { nombre: "Peso muerto", series: "4", repeticiones: "6-8" },
          { nombre: "Prensa de piernas", series: "4", repeticiones: "10-12" },
          { nombre: "Extensiones de cuádriceps", series: "3", repeticiones: "12-15" },
          { nombre: "Curl de isquiotibiales", series: "3", repeticiones: "12-15" },
          { nombre: "Elevaciones de pantorrilla", series: "4", repeticiones: "15-20" },
        ],
        notas: "Utiliza un cinturón para los ejercicios pesados. Mantén una técnica impecable, especialmente cuando manejes cargas altas."
      },
      { 
        dia: "Jueves",
        focus: "Hombros y Trapecios",
        ejercicios: [
          { nombre: "Press militar", series: "5", repeticiones: "6-8" },
          { nombre: "Press Arnold", series: "3", repeticiones: "10-12" },
          { nombre: "Elevaciones laterales", series: "4", repeticiones: "12-15" },
          { nombre: "Remo alto", series: "3", repeticiones: "10-12" },
          { nombre: "Encogimientos", series: "4", repeticiones: "12-15" },
          { nombre: "Face pulls", series: "3", repeticiones: "15-20" },
        ],
        notas: "Mantén una postura estricta en todos los ejercicios. Varía entre press por delante y por detrás en el press militar."
      },
      { 
        dia: "Viernes",
        focus: "Brazos y Abdominales",
        ejercicios: [
          { nombre: "Curl con barra EZ", series: "4", repeticiones: "8-10" },
          { nombre: "Curl de predicador", series: "3", repeticiones: "10-12" },
          { nombre: "Extensiones de tríceps con barra", series: "4", repeticiones: "8-10" },
          { nombre: "Extensiones de tríceps a una mano", series: "3", repeticiones: "10-12" },
          { nombre: "Crunch en máquina", series: "4", repeticiones: "15-20" },
          { nombre: "Elevaciones de piernas", series: "3", repeticiones: "15-20" },
          { nombre: "Rueda abdominal", series: "3", repeticiones: "10-15" },
        ],
        notas: "Enfócate en la contracción pico en los ejercicios de brazos. Mantén el core tenso durante todos los ejercicios abdominales."
      },
      { 
        dia: "Sábado",
        focus: "Entrenamiento de Fuerza",
        ejercicios: [
          { nombre: "Sentadillas", series: "5", repeticiones: "3-5" },
          { nombre: "Press de banca", series: "5", repeticiones: "3-5" },
          { nombre: "Peso muerto", series: "5", repeticiones: "3-5" },
          { nombre: "Press militar", series: "4", repeticiones: "6-8" },
          { nombre: "Remo con barra", series: "4", repeticiones: "6-8" },
        ],
        notas: "Este es un día de fuerza pura. Utiliza pesos muy pesados y asegúrate de tener un compañero de entrenamiento para mayor seguridad."
      },
    ],
  }

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "alumnocat1@gmail.com" && password === "passcat1prm") {
      setUserLevel("principiante");
      setActiveSection('rutinas');
    } else if (email === "alumnocat2@gmail.com" && password === "passcat2in") {
      setUserLevel("intermedio");
      setActiveSection('rutinas');
    } else if (email === "alumnocat3@gmail.com" && password === "passcat3avanzado") {
      setUserLevel("avanzado");
      setActiveSection('rutinas');
    } else if (email === "coachnarvaez@gmail.com" && password === "narvaezadmin") {
      setUserLevel("admin");
      setActiveSection('rutinas');
    } else {
      setErrorMessage("Datos erróneos");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {activeSection === 'presentacion' && (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-b from-blue-100 to-gray-100">
          <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Lic. Freddy Narvaez</h1>
              <h4 className="text-4xl font-bold mb-4">Entrenador Personal Elite</h4>
              <p className="text-xl mb-6">5 años transformando vidas a través del fitness</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5.586L5.707  6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.586V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Entrenamientos personalizados
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Salud Y bienestar fisico
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Entrenador a domicilio 
                </span>
              </div>
              <p className="mb-8 text-gray-600">
                Especializado en ayudar a mis clientes a superar sus límites y alcanzar una versión mejorada de sí mismos. 
                Mi enfoque se basa en la ciencia del ejercicio y la nutrición para garantizar resultados duraderos y una vida más saludable.
              </p>
              <button 
                onClick={() => setActiveSection('login')} 
                className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition duration-300"
              >
                Explora Nuestras Rutinas 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
               <img src={image} alt="Descripción de la imagen" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>
      )}

      {activeSection === 'login' && (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-b from-blue-100 to-gray-100">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-2">Iniciar Sesión</h2>
            <p className="text-gray-600 mb-6">Ingresa tus credenciales para ver las rutinas</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="ingresa tu correo" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Iniciar Sesión
              </button>
            </form>
            {errorMessage && (
              <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
            )}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">¿No tienes membresía?</p>
              <a 
                href="https://api.whatsapp.com/send?phone=50582746286&text=Hola%20coach%20Narvaez%20necesito%20mas%20informacion%20sobre%20un%20entrenamiento%20personalizado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center justify-center mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'rutinas' && (
        <main className="container mx-auto px-4 py-8">
          <button 
            onClick={() => setActiveSection('presentacion')} 
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Volver a la Presentación
          </button>
          <h2 className="text-3xl font-bold mb-6">Rutinas de Entrenamiento Personalizadas</h2>
          <div className="w-full">
            <div className="grid w-full grid-cols-3 gap-2 mb-6">
              <button 
                onClick={() => setSelectedTab("principiante")}
                className={`px-4 py-2 rounded ${selectedTab === "principiante" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} ${userLevel !== "principiante" && userLevel !== "admin" ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={userLevel !== "principiante" && userLevel !== "admin"}
              >
                Principiante
              </button>
              <button 
                onClick={() => setSelectedTab("intermedio")}
                className={`px-4 py-2 rounded ${selectedTab === "intermedio" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} ${userLevel !== "intermedio" && userLevel !== "admin" ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={userLevel !== "intermedio" && userLevel !== "admin"}
              >
                Intermedio
              </button>
              <button 
                onClick={() => setSelectedTab("avanzado")}
                className={`px-4 py-2 rounded ${selectedTab === "avanzado" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} ${userLevel !== "avanzado" && userLevel !== "admin" ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={userLevel !== "avanzado" && userLevel !== "admin"}
              >
                Avanzado
              </button>
            </div>
            {Object.entries(rutinas).map(([nivel, dias]) => (
              <div key={nivel} className={selectedTab === nivel ? "" : "hidden"}>
                {(nivel === userLevel || userLevel === "admin") && (
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Rutina {nivel.charAt(0).toUpperCase() + nivel.slice(1)}</h3>
                    <p className="text-gray-600 mb-4">
                      {nivel === "principiante" ? "3 días a la semana" : 
                       nivel === "intermedio" ? "4 días a la semana" : "6 días a la semana"}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2 mb-6">
                      {dias.map((dia, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 rounded ${selectedDay === dia.dia ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                          onClick={() => setSelectedDay(dia.dia)}
                        >
                          {dia.dia}
                        </button>
                      ))}
                    </div>
                    {selectedDay && dias.find(d => d.dia === selectedDay) && (
                      <div>
                        <h4 className="text-2xl font-semibold mb-4">{selectedDay} - {dias.find(d => d.dia === selectedDay)?.focus}</h4>
                        <ul className="space-y-2 mb-4">
                          {dias.find(d => d.dia === selectedDay)?.ejercicios.map((ejercicio, eIndex) => (
                            <li key={eIndex} className="flex justify-between items-center border-b pb-2">
                              <span>{ejercicio.nombre}</span>
                              <span className="text-gray-600">{ejercicio.series} x {ejercicio.repeticiones}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Notas:</h5>
                          <p>{dias.find(d => d.dia === selectedDay)?.notas}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  )
}

export default App