import { getShowById, getShows } from "../services/service";

export default function showDetailsPage() {
    return <div>HELLO</div>;
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const singleShow = await getShowById(id);
    return {
        props: {
            show: JSON.stringify(singleShow),
        },
    };
}

export async function getStaticPaths() {
    const data = await getShows();
    const paths = data.map((item) => {
        return { params: { id: item.id?.toString() } };
    });
    console.log(paths);
    return {
        paths: paths,
        fallback: false,
    };
}
