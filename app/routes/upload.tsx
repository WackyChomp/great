import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import FileUploader from '~/components/FileUploader'
import { usePuterStore } from '~/lib/puter'
import { useNavigate } from 'react-router'


const upload = () => {
  const imgScanOne = `https://c.tenor.com/4AOeH4XlZ1EAAAAC/tenor.gif`
  const imgScanTwo = `https://c.tenor.com/8PnhbBHUlbQAAAAC/tenor.gif`

  const { auth, isLoading, fs, ai, kv } = usePuterStore();    // fs- file storage , kv- key value
  const navigate:any = useNavigate();
  const [isPorcessing, setIsPorcessing] = useState(false);
  const [statusText, setStatusText] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleFileSelect = (file: File | null) => {
    setFile(file)
  }
  
  const handleAnalyze = async ({ companyName, jobTitle, jobDescription, file }: { companyName:string, jobTitle:string, jobDescription: string, file:File}) =>{
    setIsPorcessing(true);
    setStatusText('Uploading the file ... ');
    const uploadedFile = await fs.upload([file]);
    if(!uploadedFile) return setStatusText('Error: failed to upload file')

    setStatusText('Converting to image ...')
  }


  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form:any = e.currentTarget.closest('form');    // get form data without relying on state
    if(!form) return;
    const formData:any = new FormData(form);

    const companyName = formData.get('company-name') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDescription = formData.get('job-Description') as string;

    console.log({ companyName, jobTitle, jobDescription, file })

    if(!file) return;
    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  }



  return (
    <main className='bg-green-700 bg-cover'>
      <Navbar />

      <section className='main_section'>
        <div className="page_heading py-20">
          <h1>Actionable advice to secure your next role</h1>

          {isPorcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src={imgScanOne} alt="scan-resume" className='w-full' />
            </>
          ): (
            <h2>Drop your resume here for ATS to rate</h2>
          )}

          {!isPorcessing && (
            <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-5 mt-8'>
              <div className="form_div">
                <label htmlFor="company-name">Comany Name</label>
                <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
              </div>
              <div className="form_div">
                <label htmlFor="job-title">Job Title</label>
                <input type="text" name='job-title' placeholder='Job Title' id='job-title' />
              </div>
              <div className="form_div bg-red-950">
                <label htmlFor="job-description">Job Description</label>
                <textarea rows={5} name='job-description' placeholder='Job Description' id='job-description' />
              </div>

              <div className="form_div">
                <label htmlFor="uploader">Job Description</label>
                <div className="">Uploader</div>
                <FileUploader onFileSelect={handleFileSelect}/>
              </div>

              <button className='primary_button' type='submit'>
                Analyze Resume
              </button>
            </form>
          )}

        </div>
      </section>

    </main>
  )
}

export default upload