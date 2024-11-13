import { PrismaClient } from "@prisma/client";
import VideoInfo from '../../edit/[slug]/VideoDisplay'


export default function Page( {params}: { params: { slug: number } } ) {

    return(<div>
        <VideoInfo videoId={params.slug} />
    </div>)
}