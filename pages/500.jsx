export default function Custom500() {
    return (
        <>
            <section className='bg-error h-screen w-screen  fixed align-middle justify-center '>
                <h1 className='text-center mt-64 text-6xl text-yellow-400'>500</h1>
                <h1 className='text-center text-6xl text-white'>Server side error</h1>
            </section>
        </>
    )
}