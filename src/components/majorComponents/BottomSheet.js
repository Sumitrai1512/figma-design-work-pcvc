"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { Button } from '../ui/button'
import { DatePicker } from '../ui/date-picker'
import { CrossIconButton } from '../common/icons'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin']
})

const BottomSheet = () => {
    return (
        <div className='flex flex-col gap-[16px] h-[294px] rounded-t-[20px] py-[23px] px-[24px]  border fixed bottom-0 left-0 right-0 bg-white'>
            <div className='flex flex-row  w-[342px] h-[84px] gap-[8px]'>
                <div>
                    <div className={`${poppins.className}  h-[28px] font-semibold text-grey-900 leading-[28px]`}>Verify Yourself</div>
                    <div className={`${poppins.className} leading-[24px] text-[#475467]`}>Please Enter Date of Birth to Proceed Further</div>
                </div>
                <CrossIconButton />
            </div>

            <div className={`${poppins.className}  h-[60px]`}>
                <div className={`${poppins.className} font-medium text-[#4B5563]`}>Date of Birth</div>
                <DatePicker />
            </div>

            <div className='w-[342px] h-[72px] mt-[16px]'>
                <Button
                    size="md"
                    variant="primary"
                   
                >
                    Proceed
                </Button>
            </div>
        </div>
    )
}

export default BottomSheet