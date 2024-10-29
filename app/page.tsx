import { PrismaClient } from '@prisma/client'


export default async function Page( ) {

const prisma = new PrismaClient()
const videos = await prisma.video.findMany()

const videoList = videos.map((video) =>
<li key = "name">{video.name}</li> )


return( <>
<h4>Videos</h4>
{videoList}
</> )
}

