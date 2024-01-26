import { memo, FC, useMemo } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";

import ArticleModel from "@/models/article";

const Article: FC<{ article: ArticleModel }> = ({ article }) => {
  const text = useMemo(() => {
    if (article.title.length > 50) {
      return `${article.title.substring(0, 50)}...`;
    } else {
      return article.title;
    }
  }, [article.title]);
  return (
    <Card
      sx={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{
          width: 160,
          height: 120,
        }}
      >
        <Image
          style={{
            objectFit: "cover",
          }}
          width={160}
          height={120}
          src={article.field_photo_image_section}
          alt="Article Image"
        />
      </CardMedia>
      <CardContent
        sx={{
          flex: 1,
        }}
      >
        <Typography variant="body1" color="text.primary">
          {text}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
          }}
          variant="body2"
          color="text.secondary"
        >
          {moment(article.last_update).format("MMM DD, YYYY hh:mm:ss A")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(Article);
