import React from 'react';

const Category = ({ title, score } : {title:string, score:number}) => {
  return(
    <div className="">
      {title}
    </div>
  )
}

const Summary = ({ feedback } : { feedback: Feedback }) => {
  return (
    <div className='bg-green-500 rounded-2xl shadow-md w-full'>
      <div className="flex flex-row items-center p-4 gap-9">

        <div>{feedback.overallScore}</div>

        <div className="flex flex-col gap-3">
          <h2 className='text-2xl font-bold'>Your Resume Score</h2>
          <p className='text-sm'>
            This score is calculated based on the variables listed below
          </p>
        </div>
      </div>

      <div className="">
        {feedback.toneAndStyle.score}
      </div>
    </div>
  )
}

export default Summary