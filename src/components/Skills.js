import React from 'react';

export const Skills = (props) => {
  const { title, description, proficiency, url } = props;
  const level = proficiency === 'Basic' ? 1 : proficiency === 'Working' ? 2 : 3
  return (
    <Card >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProficiencyBar level={level}  />
      <ProficiencyText>{proficiency} Proficiency</ProficiencyText>
    </Card>
  )
}
const Card = (props) => {
  return (
    <div className='border-2 border-cxgreen-dark bg-cxgreen-light flex flex-col items-center p-6 w-1/5 rounded-xl shadow-lg'>
      {props.children}
    </div>
  )
}
const Title = (props) => {
  return (
    <h3 className='text-cxdark text-center text-xl font-medium mb-2'>{props.children}</h3>
  )
}
const Description = (props) => {
  return (
    <h4 className='text-cxdark text-center text-lg'>{props.children}</h4>
  )
}
const ProficiencyBar = ({level}) => {
  // console.log(level)
  return (
    <div className='grid grid-cols-3 gap-x-2 w-full my-7'>
      <div className={`${level >= 1 ? 'bg-cxgreen-dark' : 'bg-gray-300'} h-6 rounded-3xl`}></div>
      <div className={`${level >= 2 ? 'bg-cxgreen-dark' : 'bg-gray-300'} h-6 rounded-3xl`}></div>
      <div className={`${level >= 3 ? 'bg-cxgreen-dark' : 'bg-gray-300'} h-6 rounded-3xl`}></div>
    </div>
  )
}
const ProficiencyText = ({children}) => {
  return (
    <p className='text-cxdark text-center text-base italic mt-auto'>{children}</p>
  )
}