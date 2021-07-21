import React from "react";
import { Grid } from 'gridjs-react';
import { html } from "gridjs";
import Image from "next/image";



export default function banandkick() {
    return (
        <>
            <section className='p-2'>
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40'>
                <h1 className='text-center'><Image src="/icons/top_w.svg" alt="" width={20} height={20}/> Top Players</h1>
                </div>
                {/* Tabel */}
                <div className='overflow-x-scroll'>
                    <Grid
                        columns={['Crown', 'Place', 'Country', 'IGN', 'ID', 'Rank']}
                        data={[
                            [html("<img src='/icons/shield_g.svg' alt='shield' className='h-10 w-10'/>"), '1', 'Sl', 'Be_Cool_SL', '@1235', 'Commander'],
                            [html("<img src='/icons/shield_b.svg' alt='shield' className='h-10 w-10'/>"), '2', 'Sl', 'Indunil', '@1235', 'Commander'],
                            [html("<img src='/icons/shield_s.svg' alt='shield' className='h-10 w-10'/>"), '3', 'Sl', 'Edens Gate', '@1235', 'Commander'],
                        ]}
                        className={{ tr: 'bg-green-500', td: 'font-sans font-bold' }}
                        search={true}
                        pagination={{
                            enabled: true,
                            limit: 10,
                        }}
                    />
                </div>
            </section>
        </>
    )
};

