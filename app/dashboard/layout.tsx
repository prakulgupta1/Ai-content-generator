"use client";

import { useState } from 'react';
import { TotalUsageContext } from '../(context)/TotalUsageContext'; 
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext'; 
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import React from 'react'; 

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalCredits, setTotalCredits] = useState(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState(Date.now());

  return (
    <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
<<<<<<< HEAD
      {/* Corrected: Pass an object to TotalUsageContext.Provider */}
=======
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
      <TotalUsageContext.Provider value={{ totalUsage: totalCredits, setTotalUsage: setTotalCredits }}>
        <div className='bg-slate-100 h-screen'>
          <div className="md:w-64 hidden md:block fixed h-full">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </TotalUsageContext.Provider>
    </UpdateCreditUsageContext.Provider>
  );
}