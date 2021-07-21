import Image from "next/image";
import Sscard from "../../components/sections/screenshots/sscard";


export default function screenshots() {
    return (
        <>
            <section className='p-2'>
                {/* page title */}
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40'>
                    <h1 className='text-center'><Image src="/icons/ss_w.svg" alt="" width={20} height={20} /> Screenshots</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 top-0 left-0 mt-2'>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                    <div>
                        <Sscard src='/images/ss.webp' date='07/14/21' map='Crash' playerName="Indunil" time='1:11 PM' key='1' />
                    </div>
                </div>
            </section>
        </>
    )
};
