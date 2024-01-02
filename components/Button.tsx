"use client";
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function Button() {
   const searchParams = useSearchParams();
   console.log("button component called")
   console.log("name property using serach params",searchParams.get('title'))
  return (
    <div>
      Button
    </div>
  )
}
