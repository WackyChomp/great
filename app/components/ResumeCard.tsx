import { Link } from "react-router"



const ResumeCard = ({resume} : { resume:Resume }) => {
  return (
    <div className="bg-blue-800">
      <Link to={`/resume/${resume.id}`} className="resume_card animate-in fade-in duration-300">
        <div className="flex flex-col gap-4">
          <h2 className="!text-black font-bold break-words">
            {resume.companyName}
          </h2>
          <h3 className="text-red-600 text-lg break-words">
            {resume.jobTitle}
          </h3>
        </div>
      </Link>
    </div>
  )
}

export default ResumeCard