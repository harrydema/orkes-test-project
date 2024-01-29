"use client";
import { Box, Button } from "@mui/material";
import { useMachine } from "@xstate/react";
import { useCallback } from "react";

import Article, { ArticleSkeleton } from "@/components/article";
import ArticlesMachine from "@/machines/articles";
import Error from "@/components/error";
import { useBottomScrollListener } from "@/hooks/useBottomScrollListener";

export default function Home() {
  const [state, send] = useMachine(ArticlesMachine);
  const { articles } = state.context;

  const handleOnDocumentBottom = useCallback(() => {
    if (state.matches("more")) {
      send({ type: "LOAD" });
    }
  }, [send, state]);

  useBottomScrollListener(handleOnDocumentBottom);

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      {articles.map((article, i) => (
        <Box
          key={`article-${i}`}
          sx={{
            mb: 4,
          }}
        >
          <Article article={article} />
        </Box>
      ))}

      {state.matches("loading") &&
        [...Array(10)].map((_, i) => (
          <Box
            key={`article-skeleton-${i}`}
            sx={{
              mb: 4,
            }}
          >
            <ArticleSkeleton />
          </Box>
        ))}

      {state.matches("failure") && (
        <Box
          sx={{
            mt: 2,
            mb: 4,
          }}
        >
          <Error text="There was an error when trying to load the articles" />
          <Box
            sx={{
              mt: 1,
              textAlign: "center",
            }}
          >
            <Button variant="text" onClick={() => send({ type: "RETRY" })}>
              Retry
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
