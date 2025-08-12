import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router'
import { useEffect } from 'react'
import { usePuterStore } from '~/lib/puter'

import Summary from '~/components/Summary'

export const meta = () => ([
  { title: 'GREAT | Review'},
  { name: 'description', content: 'Feedback and overview of your resume' },
])

const Resume = () => {
  const backIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWJpZy1sZWZ0LWljb24gbHVjaWRlLWFycm93LWJpZy1sZWZ0Ij48cGF0aCBkPSJNMTMgOWExIDEgMCAwIDEtMS0xVjUuMDYxYTEgMSAwIDAgMC0xLjgxMS0uNzVsLTYuODM1IDYuODM2YTEuMjA3IDEuMjA3IDAgMCAwIDAgMS43MDdsNi44MzUgNi44MzVhMSAxIDAgMCAwIDEuODExLS43NVYxNmExIDEgMCAwIDEgMS0xaDZhMSAxIDAgMCAwIDEtMXYtNGExIDEgMCAwIDAtMS0xeiIvPjwvc3ZnPg==`
  const magnifyIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaC1pY29uIGx1Y2lkZS1zZWFyY2giPjxwYXRoIGQ9Im0yMSAyMS00LjM0LTQuMzQiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PC9zdmc+`

  const { id } = useParams();
  
  const navigate = useNavigate();
  const { auth, isLoading, fs, kv } = usePuterStore();

  const [imageUrl, setImageUrl] = useState('')
  const [resumeUrl, setResumeUrl] = useState('')
  const [feedback, setFeedback] = useState<Feedback | null>(null)


  // commenting this out disables auth/login
  useEffect(() => {
    if(!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`);
  }, [isLoading])


  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume/${id}`);

      if(!resume) return;
      
      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if(!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], { type:'application/pdf'})
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if(!imageBlob) return;
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);

      console.log({resumeUrl, imageUrl, feedback:data.feedback})
    }
  
    loadResume();
  }, [id])
  
  

  return (
    <main className='!pt-0'>
      <h1 className='text-3xl'>
        Resume {id}
      </h1>

      <nav className='resume_nav'>
        <Link to='/' className='back_button'>
          <img src={backIcon} alt="" />
          <span className='text-gray-800 text-sm font-semibold'>Back to homepage</span>
        </Link>
      </nav>

      <div className="bg-red-500 flex flex-row w-full max-lg:flex-col-reverse">
        {/* Resume Image */}
        <section className='bg-blue-500 feedback_section bg-cover h-[100vh] sticky top-0 items-center justify-center'>
          {imageUrl && resumeUrl && (
            <div className="animate-in fade-in duration-1000 gradient_border max-sm:m-0 h-[90%] max-w-xl:h-fit w-fit">
              <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
                <img src={imageUrl} alt="" title='resume' 
                  className='w-full h-full object-contain rounded-2xl'
                />
              </a>
            </div>
          )}
        </section>

        {/* Feedback Section */}
        <section className='feedback_section'>
          <h2 className='text-4xl !text-yellow-500 font-bold'>Resume Review</h2>

          <div className="flex items-center justify-center">            
            {feedback ? (
              <div className='flex flex-col gap-8 animate-in  fade-in duration-1000'>
                Summary ATS details
                <Summary feedback={feedback} />
              </div>
            ): (
              <img src={magnifyIcon} alt="magnify loading" className='size-20 animate-spin' />
            )}
          </div>

        </section>
      </div>
    
    </main>
  )
}

export default Resume