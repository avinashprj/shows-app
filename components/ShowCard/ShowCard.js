import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ show }) {
    if (show) {
        return (
            <Link href={`/${show.id}`}>
                <Card
                    sx={{
                        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                        transition: "0.2s all",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            alt="green iguana"
                            sx={{ objectFit: "cover", position: "relative" }}
                        >
                            <Image
                                src={show.image?.original}
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="cover"
                            />
                        </CardMedia>

                        <CardContent>
                            <Typography variant="h6" component="div">
                                {show.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        );
    }
}
