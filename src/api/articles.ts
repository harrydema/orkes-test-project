import Article from "@/models/article";

export const fetchArticles = (
  pageNumber: number
): Promise<{ nodes: { node: Article }[] }> =>
  fetch(`/api/articles/${pageNumber}`).then((response) => response.json());
