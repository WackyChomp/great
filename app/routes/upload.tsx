import React, { useState } from 'react'
import Navbar from '~/components/Navbar'

const upload = () => {
  const imgScanOne = `https://c.tenor.com/4AOeH4XlZ1EAAAAC/tenor.gif`
  const imgScanTwo = `https://c.tenor.com/8PnhbBHUlbQAAAAC/tenor.gif`

  const [isPorcessing, setIsPorcessing] = useState(false);
  const [statusText, setStatusText] = useState('')

  return (
    <main className='bg-green-700 bg-cover'>
      <Navbar />

      <section className='main_section'>
        <div className="page_heading">
          <h1>Actionable advice to secure your next role</h1>

          {isPorcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src={imgScanOne} alt="scan-resume" className='w-full' />
            </>
          ): (
            <h2>Drop your resume here for ATS to rate</h2>
          )}

        </div>
      </section>

    </main>
  )
}

export default upload