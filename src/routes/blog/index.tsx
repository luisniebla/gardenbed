import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-qwik";
import { component$, useResource$ , Resource } from "@builder.io/qwik";

import { Form, Link } from '@builder.io/qwik-city';
// TO DO: Add your API Key
export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;

const articlesPerPage = 30;

export default component$(() => {
  const articlesRsrc = useResource$(() =>
    fetchOneEntry({
      model: "blog-article",
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: {
        limit: articlesPerPage,
        includeRefs: true,
        omit: "data.blocks",
      },
    })
  );

  return (
    <div>
      <Resource
        value={articlesRsrc}
        onPending={() => <div>Loading articles...</div>}
        onResolved={(articles) => {
          return articles.map((article) => (
            <Link href={`/blog/${article.data.handle}`}>
              <div css={{ overflow: "hidden", width: 300 }}>
                <div css={{ width: 300, height: 200, display: "block" }}>
                  <img src={article.data.image} />
                </div>
                {article.data.title}
                {article.data.description}
              </div>
            </Link>
          ));
        }}
      />
    </div>
  );
});