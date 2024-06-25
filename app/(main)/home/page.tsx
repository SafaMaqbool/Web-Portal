import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
    const userInfo=[
     {
        id:'1',
        name:''
     }
    ]
  return (
    <div className='flex justify-between m-2 p-4'>
        <h1>Web Students</h1>
        <Button asChild size={'lg'}>
            <Link href={'/userform'}>Add New
            <FaPlus className='ml-1'/>
            </Link>
        </Button>
    </div>
  )
}

export default HomePage