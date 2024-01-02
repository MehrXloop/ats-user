import React from 'react'
import Button from '@/components/Button';

export default function AboutPage(
    {searchParams}:{
    searchParams:{
        name:string;
        age: string;
    }
}
) 
{
    // console.log("name : ",searchParams.name)
  return (
    <div> 
      About pg
      <Button />
    </div>
  )
}
