import NavBar from './components/NavBar.jsx'

const App = () => {
    return (
    <>
        <div className="overflow-x-hidden">
            <NavBar />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gray-50 min-h-screen">
            {/* Aside */}
            <aside className="bg-white shadow-md rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-800">Características</h2>
                <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    <li>Navbar responsivo</li>
                    <li>Estilos modernos</li>
                    <li>Fácil de usar</li>
                </ul>
            </aside>

            {/* Main content */}
            <main className="md:col-span-2 bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Demostración de un Navbar usando React + Vite + TailwindCSS
                </h1>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Esta es una aplicación simple que demuestra cómo implementar un Navbar responsivo con
                    TailwindCSS y React.  
                </p>
                <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 active:scale-95 transition duration-300 w-fit">
                    <a href="https://youtu.be/ladwC6Lrs-M?si=tU6DsKssujWHWa-8">Aprende más</a>
                </button>
            </main>
        </section>
    </>
    )
}

export default App