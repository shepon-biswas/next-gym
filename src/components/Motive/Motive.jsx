import Image from 'next/image';
import React from 'react';
import clock from "@/assets/alarm-clock.png"
import workout from "@/assets/workout.png"
import checklist from "@/assets/clipboard.png"


const Motive = () => {
    return (
        <>
         <div className='w-10/12 mx-auto mb-14 -mt-14'>
            <div className='grid grid-cols-3 gap-10 justify-between  place-items-center'>
                <div className='bg-blue-50  rounded-tl-3xl rounded-br-3xl py-10 px-8 text-center space-y-3 hover:bg-orange-100'>
                    <Image
                    src={clock}
                    alt='clock image'
                    className='inline-flex justify-center '
                    ></Image>
                    <h1 className='uppercase font-bold text-2xl text-orange-500'>wake up</h1>
                    <p>
                    Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                    </p>
                </div>
                <div className='bg-blue-50  rounded-tl-3xl rounded-br-3xl py-10 px-8 text-center space-y-3 hover:bg-orange-100'>
                    <Image
                    src={workout}
                    alt='workout image'
                    className='inline-flex justify-center '
                    ></Image>
                    <h1 className='uppercase font-bold text-2xl text-orange-500'>workout</h1>
                    <p>
                    Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                    </p>
                </div>
                <div className='bg-blue-50  rounded-tl-3xl rounded-br-3xl py-10 px-8 text-center space-y-3 hover:bg-orange-100'>
                    <Image
                    src={checklist}
                    alt='checklist image'
                    className='inline-flex justify-center '
                    ></Image>
                    <h1 className='uppercase font-bold text-2xl text-orange-500'>checklist</h1>
                    <p>
                    Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                    </p>
                </div>
            </div>
            </div>   
        </>
    );
};

export default Motive;