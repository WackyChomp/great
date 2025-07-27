import { Link } from "react-router"
import ScoreCircle from "./ScoreCircle"

const ResumeCard = ({resume} : { resume:Resume }) => {
  return (
    <div className="bg-blue-800">
      <Link to={`/resume/${resume.id}`} className="resume_card animate-in fade-in duration-300">
      <div className="resume_card_header">        
        <div className="flex flex-col gap-4">
          <h2 className="!text-black font-bold break-words">{resume.companyName}</h2>
          <h3 className="text-red-600 text-lg break-words">{resume.jobTitle}</h3>
        </div>

        <div className="shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>

      <div className="gradient_border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img src={resume.imagePath} alt='winning_resume' 
            className="w-full h-[370px] max-sm:h-[200px] object-cover"
          />
        </div>
      </div>
      </Link>
    </div>
  )
}

export default ResumeCard