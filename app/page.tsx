import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video, index) =>
        <li key={index}>
            <div className="label">{video.name}</div>
            <ol>
            <a className = "links" href={"/videos/video/" + video.id}>Edit</a>
            <a className = "links" href={"/videos/video/delete/" + video.id}>Delete</a>
            </ol>
        </li> 
    )

    return( <div>  
        <h2 className = "header">Videos</h2>
        <ul>
            {videoList}

    <br/><br/>
            <a className="header" href={"/videos/video/add"}>Add Video</a>
        </ul>
    </div> )
}

