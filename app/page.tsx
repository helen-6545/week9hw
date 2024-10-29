import { PrismaClient } from '@prisma/client'


export default async function Page( ) {

const prisma = new PrismaClient()
let videos = await prisma.video.findMany()

const videoList = videos.map((video) =>
<li>{video.name}</li> )


return( <>
<h4>Videos</h4>
{videoList}
</> )
}

