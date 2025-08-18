import { Link } from "react-router"
import { useEffect, useState } from "react"
import { usePuterStore } from "~/lib/puter"

import ScoreCircle from "./ScoreCircle"

const ResumeCard = ({resume:{ companyName, id, jobTitle, feedback, imagePath }} : { resume:Resume }) => {
  
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState('')

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath)
      if(!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    }
  
    loadResume();
    
  }, [imagePath])

  return (
    <div className="bg-blue-800">
      <Link to={`/resume/${id}`} className="resume_card animate-in fade-in duration-300">
      <div className="resume_card_header">        
        <div className="flex flex-col gap-4">
          {/* Conditionals to render */}
          {companyName && <h2 className="!text-black font-bold break-words">{companyName}</h2>}
          {jobTitle && <h3 className="text-red-600 text-lg break-words">{jobTitle}</h3>}
          {!companyName && !jobTitle && <h2 className="!text-red-600 font-bold">Resume</h2>}
        </div>

        <div className="shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>

      {/* only displays image if there's a ResumeUrl */}
      {resumeUrl && (
        <div className="gradient_border animate-in fade-in duration-1000">
          <div className="w-full h-full">
            <img src={imagePath} alt='winning_resume' 
              className="w-full h-[370px] max-sm:h-[200px] object-cover"
            />
          </div>
        </div>
      )}

      </Link>
    </div>
  )
}

export default ResumeCard