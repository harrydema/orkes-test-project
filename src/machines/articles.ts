import { fromPromise, setup, assign, sendParent } from "xstate";

import Article from "@/models/article";
import { fetchArticles } from "@/api/articles";

const ArticlesMachine = setup({
  types: {} as {
    context: { articles: Article[]; pageNumber: number };
  },
  actors: {
    getArticles: fromPromise(
      async ({ input }: { input: { pageNumber: number } }) => {
        const user = await fetchArticles(input.pageNumber);
        return user;
      }
    ),
  },
}).createMachine({
  id: "articles",
  initial: "loading",
  context: {
    articles: [],
    pageNumber: 1,
  },
  states: {
    loading: {
      invoke: {
        src: "getArticles",
        input: ({ context: { pageNumber } }) => ({
          pageNumber,
        }),
        onDone: {
          actions: [
            assign({
              articles: ({ context, event }) => [
                ...context.articles,
                ...event.output.nodes.map((node) => node.node),
              ],
            }),
            ({ context, event, self }) => {
              context.pageNumber += 1;
              if (event.output.nodes.length === 50) {
                self.send({ type: "DONE_MORE" });
              } else {
                self.send({ type: "DONE_COMPLETE" });
              }
            },
          ],
        },
        onError: {
          target: "failure",
        },
      },
      on: {
        DONE_MORE: "more",
        DONE_COMPLETE: "complete",
        FAIL: "failure",
      },
    },
    more: {
      on: {
        LOAD: "loading",
      },
    },
    failure: {
      on: {
        RETRY: "loading",
      },
    },
    complete: {
      type: "final",
    },
  },
});

export default ArticlesMachine;
