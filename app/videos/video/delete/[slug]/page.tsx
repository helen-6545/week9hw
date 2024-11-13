import { PrismaClient } from "@prisma/client";
//import VideoInfo from './VideoDisplay'
import { redirect } from 'next/navigation';

/*async function deleteVideo({params}: { params: { slug: number } }) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.video.delete({
        where: {
            id: Number(params.slug)
        }
    })
    redirect('/')
}*/
    

export default async function Page( {params}: { params: { slug: number } }) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.video.delete({
        where: {
            id: Number(params.slug)
        }
    })
    redirect('/')

    /*return(<div>
\
        <button onClick={()=>deleteVideo}>Confirm Delete</button>
        <a href={'/'}>Go Back</a>
\
    </div>)*/
}