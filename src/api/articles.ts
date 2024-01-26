import Article from "@/models/article";

export const fetchArticles = (
  pageNumber: number
): Promise<{ nodes: { node: Article }[] }> =>
  fetch(
    `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${pageNumber}`
  ).then((response) => response.json());
