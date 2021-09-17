import React from 'react';

export const JuniorHighSchool = (props) => {
  return (
    <>
      <Card className='h-60'>
        <h2 className='text-center text-2xl text-white font-semibold p-2'>
          San Joaquin - Kalawaan <br/>
          High School
        </h2>
        <p className='text-center text-lg text-white font-medium flex-1 mt-5'>Honor Student</p>
        <p className='text-center text-base text-white'>Junior High School</p>
      </Card>
    </>
  )
}
export const SeniorHighSchool = (props) => {
  return (
    <>
      <Card className='h-60'>
        <h2 className='text-center text-2xl text-white font-semibold p-2'>
          Buting <br/>
          Senior High School
        </h2>
        <p className='text-center text-lg text-white font-medium flex-1 mt-5'>Graduated with High Honors</p>
        <p className='text-center text-base text-white'>Senior High School</p>
      </Card>
    </>
  )
}
export const College = (props) => {
  
  return (
    <>
      <Card className='h-80'>
        <h2 className='text-center text-4xl text-white font-semibold p-2'>
          Polytechnic University of
          the Philippines
        </h2>
        <div className='flex flex-col flex-1 mt-12 space-y-4'>
          <p className='text-center text-xl text-white font-medium'>Bachelor of Science in Computer Engineering</p>
          <p className='text-center text-lg text-white font-medium'>2020 - 2021: President's Lister</p>
        </div>
        <p className='text-center text-base text-white'>College</p>
      </Card>
    </>
  )
}

const Card = (props) => {
  const { children, className } = props;
  return (
    <>
      <div className={`border-4 border-cxgreen-dark bg-cxgreen flex flex-col items-center justify-center rounded-xl px-2 py-4 ${className} shadow-lg`}>
        {children}
      </div>
    </>
  )
  
}