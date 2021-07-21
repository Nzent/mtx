import Image from "next/image";
import Logincard from "../../components/sections/auth/logincard";

export default function auth() {
    return (
        <>
            <section className='p-2'>
                {/* Page title */}
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40 mb-2'>
                <h1 className='text-center'><Image src="/icons/auth_w.svg" alt="" width={20} height={20}/> Authentication</h1>
                </div>

                <div className='grid grid-cols-2'>
                    {/* Left */}
                    <div className='m-4'>
                        <Logincard />
                    </div>

                    {/* Right */}
                    <div className='m-4'>
                        <Logincard />
                    </div>
                </div>
            </section>
        </>
    )
};

