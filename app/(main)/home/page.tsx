"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { getUsers } from '@/actions/getUsers';
import { deleteUser } from '@/actions/deleteUser';

import { useRouter } from 'next/navigation';
import { AiFillLike } from "react-icons/ai";
import { updateUser } from '@/actions/updateUser';
  

const HomePage = () => {
  const router = useRouter()
    const [userInfo,setUserInfo] = useState<any>()

    useEffect(()=>{
      getUsers().then((data)=>{
        setUserInfo(data)
      })
      
    },[userInfo])

    const handleDelete = useCallback((userId: string)=>{
         deleteUser(userId).then(()=>{
          router.refresh()
         })
         
    },[])

    const handleLike=useCallback((userId: string)=>{
      updateUser(userId,true).then(()=>{
        router.refresh()
      })
  },[])

  const handleUnLike=useCallback((userId: string)=>{
     updateUser(userId,true).then(()=>{
      router.refresh()
     })
  },[])


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
    {userInfo?.map((userInfo:any)=>{
            return(
                <Card key={userInfo.id}>
                <CardHeader>
                  <CardTitle>{userInfo.name}</CardTitle>
            
                </CardHeader>
                <CardContent>
                  <p>{userInfo.semester}</p>
                  <p>{userInfo.description}</p>

                </CardContent>
                <CardFooter className='flex justify-between'>
                {userInfo.liked ? (
                  <AiFillLike size={25} onClick={() => handleUnLike(userInfo.id)} />
                ) : (
                  <AiOutlineLike
                    size={25}
                    onClick={() => handleLike(userInfo.id)}
                  />
                )}

                  <MdDelete onClick={()=>handleDelete(userInfo.id)}/>

                </CardFooter>
                
              </Card>
              
            )
        })}
    </div>
    </>
  )
}

export default HomePage