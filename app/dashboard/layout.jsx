import React from 'react'
import Header from './_componets/Header'

function DashboardLayout({children}) {
  return (
    <div className='mx-5 md:mx-20 lg:mx-36'>
      <Header/>
      {children}
    </div>
  )
}

export default DashboardLayout
