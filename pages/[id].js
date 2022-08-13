import { getShowById, getShows } from "../services/service";

import Image from "next/image";
import {
    ImageContainer,
    ShowDetailWrapper,
    ShowImageWrapper,
    ShowInfoContainer,
    TextElement,
} from "../components/ShowDetails/style.showDetails";

export default function ShowDetailsPage(props) {
    const { tvShowData } = props;
    return (
        <ShowDetailWrapper>
            <ShowImageWrapper>
                <ImageContainer>
                    <Image
                        src={tvShowData.image.original}
                        objectFit="cover"
                        width="400"
                        height="500"
                        quality={100}
                    />
                </ImageContainer>
            </ShowImageWrapper>
            <ShowInfoContainer>
                <TextElement fs="2rem" fw="bold">
                    {tvShowData.name}
                </TextElement>
                <TextElement p="0.7rem 0" fs="1.2rem">
                    {tvShowData.language}
                </TextElement>
                <TextElement display="flex" gap=".5rem">
                    {tvShowData.genres.map((item) => (
                        <span
                            style={{
                                padding: "0.3rem",
                                outline: "1px solid white",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </TextElement>
                <TextElement p="0.7rem 0">{tvShowData.summary}</TextElement>
            </ShowInfoContainer>
        </ShowDetailWrapper>
    );
}

export async function getStaticProps({ params }) {
    const showId = params.id;

    const data = await getShowById(showId);

    return {
        props: {
            tvShowData: data,
        },
    };
}

export async function getStaticPaths() {
    const data = await getShows();
    const paths = data.slice(0, 100).map((show) => ({
        params: { id: show.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}
