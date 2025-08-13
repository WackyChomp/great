import React from 'react'

interface ScoreBadgeProps{
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = '';
  let badgeText = '';

  if (score > 70){
    badgeColor= 'bg-green-950 text-green-500';
    badgeText = 'Strong';
  }else if (score > 49){
    badgeColor= 'bg-yellow-950 text-yellow-500';
    badgeText = 'Good Start';
  } else{
    badgeColor= 'bg-red-950 text-red-500';
    badgeText = 'Needs Work';
  }

  return (
    <div className={`px-3 py-5 rounded-full' ${badgeColor}`}>
      <p className='text-sm font-medium'>{badgeText}</p>
    </div>
  )
}

export default ScoreBadge