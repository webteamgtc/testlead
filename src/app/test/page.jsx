'use client'
import React from 'react'
import CommonMainForm from '../components/MainForm'

const page = () => {
  return (
    <section className="py-10 lg:py-[70px] br-primary">
     
      <div className="max-w-[1380px] mx-auto px-4">
       
          <div className="grid grid-cols-1 gap-4 md:gap-8 items-center h-full">

              <div className="max-w-sm mx-auto">
  <CommonMainForm />
              </div>
            
      
          </div>
        
      </div>
    </section>
  )
}

export default page