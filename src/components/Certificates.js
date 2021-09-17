import React from 'react';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

export const Staging = (props) => {
  const { previousCard, currentCard, nextCard } = props;
  return (
    <div id='staging' className='flex flex-row justify-around relative mb-10'>
      <div id='prev' className='border border-cxdark p-2 w-1/3 shadow-xl flex flex-col justify-center filter blur-xs'>
        {previousCard && (
          <img src={previousCard.src} alt="" />
        )}
      </div>
      <div id='curr' className='border border-cxdark p-2 w-1/3 shadow-2xl z-10 top-8 absolute'>
        {currentCard && (
          <img src={currentCard.src} alt="" />
        )}
      </div>
      <div id='next' className='border border-cxdark p-2 w-1/3 shadow-xl flex flex-col justify-center filter blur-xs'>
        {nextCard && (
          <img src={nextCard.src} alt="" />
        )}
      </div>
    </div>
  )
}
export const Actions = (props) => {
  const { active, handleNext, handlePrevious } = props;
  return (
    <div id='actions' className='flex flex-row p-4 relative'>
      <div className='flex-1 flex flex-row justify-end relative'>
        <button onClick={handlePrevious} className='bg-cxgreen-dark rounded-full'><ArrowLeft fontSize='large' className='text-white' /></button>
      </div>
      <div className='flex flex-grow flex-row items-center justify-center'>
        <div className={`w-4 h-4 mx-2 rounded-full border border-cxdark ${active === 0 ? 'bg-cxgreen-dark' : 'bg-gray-300'} `}></div>
        <div className={`w-4 h-4 mx-2 rounded-full border border-cxdark ${active === 1 ? 'bg-cxgreen-dark' : 'bg-gray-300'} `}></div>
        <div className={`w-4 h-4 mx-2 rounded-full border border-cxdark ${active === 2 ? 'bg-cxgreen-dark' : 'bg-gray-300'} `}></div>
        <div className={`w-4 h-4 mx-2 rounded-full border border-cxdark ${active === 3 ? 'bg-cxgreen-dark' : 'bg-gray-300'} `}></div>
        <div className={`w-4 h-4 mx-2 rounded-full border border-cxdark ${active === 4 ? 'bg-cxgreen-dark' : 'bg-gray-300'} `}></div>
      </div>
      <div className='flex-1 flex flex-row justify-start relative'>
        <button onClick={handleNext} className='bg-cxgreen-dark rounded-full'><ArrowRight fontSize='large' className='text-white' /></button>
      </div>
    </div>
  )
}