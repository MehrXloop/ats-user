import { deleteJob, getById, updateJob } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req:Request) => {
    try{
         // get a job by  its id
    const id = req.url.split("jobs/")[1];
    // console.log(id);
    const job = getById(id)
    if(!job){
        return NextResponse.json({message:"Error"},{status:404})
    }
    return NextResponse.json({message:"OK",job},{status:200})
    } 
    catch(err){ 
        return NextResponse.json({message:"Error"},{status:500})

    }
    console.log("GET")
   

}

export const PUT = async(req: Request) =>{
    console.log("PUT")
    // update a job by  its id
    try{
    const {title,desc} = await req.json();
    const id = req.url.split("jobs/")[1];
    updateJob(id,title,desc)
    return NextResponse.json({message:"OK"},{status:200})
    }
    catch (err){
        return NextResponse.json({message:"ERROR"},{status:500})
    }

}
 
export const DELETE = async (req:Request) => {
    console.log("DELETE")
    // DELETE a job by  its id
    try{
        const id = req.url.split("jobs/")[1];
        // console.log(id);
        const job = getById(id)
        if(!job){
            return NextResponse.json({message: "Job Not found"},{status:404})
        }
        deleteJob(id)
        return NextResponse.json({message: "Job deleted successfully"},{status:200})
    }
    catch{
        return NextResponse.json({message:"ERROR"},{status:500})
    }
}