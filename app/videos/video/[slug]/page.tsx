import { PrismaClient } from "@prisma/client";
//import VideoInfo from './VideoDisplay'
import { redirect } from 'next/navigation';



export default function Page( {params}: { params: { slug: number } } ) {

    async function createVideo(formData : FormData) {
        'use server';
        const prisma = new PrismaClient()
        await prisma.video.update({
            where: {
               id: Number(params.slug)},
            data:{
               name: (String(formData.get('videoname'))),
               length: (Number(formData.get('runtime')))}
           
    })
        redirect('/')
    }

   // return(<div>
     //   <VideoInfo videoId={params.slug} />
     return(<div>
        <form action={createVideo}>
            <label>Video Name: <input type="text" name="videoname" placeholder="Name" /></label>
            <label>Runtime: <input type="text" name="runtime" placeholder="Runtime" /></label>
            <button type="submit">Update</button>
        </form>
    </div>)
}