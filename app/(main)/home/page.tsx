import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const HomePage = () => {
    const userInfo=[
     {
        id:'1',
        name:'safa',
        semester: 'Semester 8',
        description: 'I am a computer science student'
     },
     {
        id:'2',
        name:'savera',
        semester: 'Semester 8',
        description: 'I am a computer science student'
     },
     {
        id:'3',
        name:'seema',
        semester: 'Semester 8',
        description: 'I am a computer science student'
     },

    ]
  return (
    <>
    <div className='flex justify-between m-2 p-4'>
        <h1 className='text-2xl font-semibold'>Web Students</h1>
        <Button asChild size={'lg'}>
            <Link href={'/userform'}>Add New
            <FaPlus className='ml-1'/>
            </Link>
        </Button>
      
       
        
    </div>

    <div>
    {userInfo.map((userInfo)=>{
            return(
                <Card key={userInfo.id}>
                <CardHeader>
                  <CardTitle>{userInfo.name}</CardTitle>
            
                </CardHeader>
                <CardContent>
                  <p>{userInfo.semester}</p>
                  <p>{userInfo.description}</p>

                </CardContent>
                
              </Card>
              
            )
        })}
    </div>
    </>
  )
}

export default HomePage