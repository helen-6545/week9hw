import { PrismaClient } from "@prisma/client"

export default async function VideoInfo( {videoId}: { videoId : number } ) {
 const prisma = new PrismaClient()
 const video = await prisma.video.findUnique({
     where: {
        id: Number(videoId),
        },
    })
if(video!=null){
    return(<div>{video.name}</div>)}
}