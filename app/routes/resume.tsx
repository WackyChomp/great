import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'

export const meta = () => ([
  { title: 'GREAT | Review'},
  { name: 'description', content: 'Feedback and overview of your resume' },
])

const Resume = () => {
  const backIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWJpZy1sZWZ0LWljb24gbHVjaWRlLWFycm93LWJpZy1sZWZ0Ij48cGF0aCBkPSJNMTMgOWExIDEgMCAwIDEtMS0xVjUuMDYxYTEgMSAwIDAgMC0xLjgxMS0uNzVsLTYuODM1IDYuODM2YTEuMjA3IDEuMjA3IDAgMCAwIDAgMS43MDdsNi44MzUgNi44MzVhMSAxIDAgMCAwIDEuODExLS43NVYxNmExIDEgMCAwIDEgMS0xaDZhMSAxIDAgMCAwIDEtMXYtNGExIDEgMCAwIDAtMS0xeiIvPjwvc3ZnPg==`
  const { id } = useParams();
  

  return (
    <main className='!pt-0'>
      <h1 className='text-3xl'>
        Resume {id}
      </h1>

      <nav className='resume_nav'>
        <Link to='/' className='back_button'>
          <img src={backIcon} alt="" />
        </Link>
      </nav>
    
    </main>
  )
}

export default Resume