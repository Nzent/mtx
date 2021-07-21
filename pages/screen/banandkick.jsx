import React from "react";
import { Grid } from 'gridjs-react';
import Image from "next/image";



export default function banandkick() {
    return (
        <>
            <section className='p-2'>
                {/* page title */}
                <div className='w-full text-center text-2xl backdrop-blur-lg bg-black p-5 text-white bg-opacity-40'>
                <h1 className='text-center'><Image src="/icons/ban_w.svg" alt="" width={20} height={20}/> Ban and Kick</h1>
                </div>
                {/* Tabel */}
                <div className='overflow-x-scroll'>
                    <Grid
                        data={[
                            ['1', 'Sl', 'Edens Gate', '@1235', 'Kick', '07/19/21', '07/21/21', '48 hours', 'Camp'],
                            ['2', 'Sl', 'Be_Cool_SL', '@1235', 'PermBan', '07/19/21', '07/19/23', 'Infinite', 'WH'],
                            ['2', 'Sl', 'Indunil', '@1235', 'Kick', '07/19/21', '07/19/23', '2 Month', 'AFK'],
                        ]}
                        className={{ tr: 'bg-green-500', td: 'font-sans font-bold' }}
                        columns={['No', 'Country', 'IGN', 'BanID', 'Type', 'From', 'To', 'Duration', 'Reason']}
                        search={true}
                        pagination={{
                            enabled: true,
                            limit: 100,
                        }}

                    />
                </div>
            </section>
        </>
    )
};

