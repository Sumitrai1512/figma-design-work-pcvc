"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Button } from '../ui/button'
import { useModal } from '@/context/ModelContext'
import BottomSheet from './BottomSheet'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin']
})

const GetStarted = () => {
    const { open, setOpen, handleClick } = useModal();

    return (
        <>
            <div className='flex flex-col pt-[61px] px-[31px] '>
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={58.58}
                    height={38}
                />

                <div className='mt-[52px] space-y-2'>
                    <div className={`w-[290px] h-[28px] ${poppins.className} text-xl leading-[28px]  align-middle text-grey-900`}>Welcome to</div>
                    <div className={`w-[290px] h-[48px] ${poppins.className} text-4xl font-bold leading-[48px] flex items-center bg-gradient-to-r from-[#ED1C24] to-[#005E9E] bg-clip-text text-transparent`}>Non-assisted</div>
                    <div className={`${poppins.className} w-[290px] h-[28px] text-xl leading-[28px] align-middle text-grey-900`}>Pre-conversion verification</div>
                </div>

                <div className="relative mt-[46px] w-[330px] mx-auto">
                    <div className="absolute bottom-0 left-0 w-full h-[90%] bg-[#D1EDFF] rounded-[36px]" />
                    <Image
                        src="/images/man.svg"
                        alt="Man"
                        width={330}
                        height={300}
                        className="relative z-10 object-contain"
                    />
                </div>

                <div className={`w-[344px] h-[28px] mt-[25px] ${poppins.className} text-lg leading-[28px] font-normal text-center flex items-center justify-center text-[#1C2633]`}>Review applicant details and confirm.</div>

                <div className='flex justify-center items-center max-[320px] h-[40px] mt-[83px] mb-[30px]'>
                    <Button
                        onClick={handleClick}
                        size="medium"
                        variant="secondary"
                        textStyle="poppinsMd"
                        className={`${poppins.className}`}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
            {/* BottomSheet overlay */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-end bg-black/30 transition-opacity">
                    <div className="w-full bg-white rounded-t-2xl p-6 shadow-lg transform transition-transform duration-300 animate-slideup">
                        <BottomSheet />
                    </div>
                </div>
            )}

        </>
    )
}

export default GetStarted

