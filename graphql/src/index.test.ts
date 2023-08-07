import { expect, test } from "bun:test";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const yoga = createYoga({ schema });

test("hello query", async () => {
  const res = await yoga.fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ hello }" }),
  });
  const json = await res.json();

  expect(json).toMatchObject({ data: { hello: "Hello from Yoga!" } });
});
