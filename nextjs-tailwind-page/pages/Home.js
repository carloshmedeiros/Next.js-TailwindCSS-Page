export default function Home() {

    return (
        
        <div>
            <section class="relative py-24 px-4">
            <div className="lg:px-6 xl:px-0">
                <div className="container mx-auto relative z-20">
                   
                </div>
                <div className="mt-28 mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-2">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-yellow-500 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">O APP DO SEU #SEXTOU!</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-white text-lg lg:text-2xl">O melhor aplicativo para se socializar e achar uma companhia para o happy hour! </h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="py-3 px-10 lg:py-7 lg:px-20 focus:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full focus:outline-none">Saiba Mais</button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/6 md:h-auto m-auto flex items-center overflow-hidden">
                            <img className="md:absolute md:w-1/3 md:-ml-28" src="/celular.png" alt />
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
    )
}
