import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="pt-12 drop-shadow-2xl">
            <footer id="footer" className="relative z-50 bg-azul-escuro drop-shadow-2xl">

                <div className="py-16 flex flex-col justify-center items-center drop-shadow-2xl">

                    <Link href="javascript:void(0)">
                        <Image src="/Logo.png" width={210} height={85}></Image>
                    </Link>
                    <p className="mt-3 mb-3 text-xs lg:text-sm leading-none text-white-900 dark:text-white-50">2021 Broth. Todos os direitos reservados.</p>

                    <div className="flex items-center">
                        <a href="https://github.com/carloshmedeiros">
                            <div className="text-white-800 dark:text-white-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                                <svg className="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

