import Navbar from '../components/Nav'

export default function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center">
                <div className="absolute top-40 bg-azul-escuro shadow-xl rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-200">Fale com a gente!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="w-full flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-200">Nome</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded-lg border-gray-200 placeholder-gray-100 resize-none" placeholder="Please input  name" />
                        </div>
                        
                    </div>
                    <div className="w-full items-center mt-8">
                        <div className="w-full flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-200">Email</label>
                            <input tabIndex={0} role="input" arial-label="Please input email" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded-lg border-gray-200 placeholder-gray-100 " placeholder="Please input email" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-200">Mensagem</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded-lg border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-300 mt-4">Clique em enviar para confirmar o encaminhamento do email para nossa equipe!</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-yellow-500 rounded-full hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellor-700 focus:outline-none">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

