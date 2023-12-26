import { addJob, getJobs } from "@/lib/data"
import { NextResponse } from "next/server"

 export const  GET = async (req:Request, res:Response) => {
    // console.log("GET REQUEST")
    try{
        const jobs = getJobs(); //get data from db
        return NextResponse.json({message: "OK", jobs},{status:200});
    }
    catch(err){
        return NextResponse.json({message: "Error",err},{
            status:500,
        })
    }
 }

 export const  POST = async (req:Request, res:Response) => {
    // console.log("POST REQUEST")
    const {title,desc} = await req.json();
    try{
        const job = {
            title,
            desc,
            date: new Date(),
            id: Date.now().toString()
        }
        addJob(job)
        return NextResponse.json({message:"OK",job},{status:201})
    }
    catch(err){
        return NextResponse.json({message: "Error",err},{
            status:500,
        })
    }
 }

  