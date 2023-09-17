import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { InferSelectModel } from "drizzle-orm";
import { todosSchema } from "~/db/schema";
import { db } from "~/lib/db";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = (async () => {
  const todos = await db.select().from(todosSchema);
  return { todos };
}) satisfies LoaderFunction;

const name = (key: keyof InferSelectModel<typeof todosSchema>) => key;

export default function Index() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <>
      {todos.map((todo) => (
        <Form key={todo.id}>
          <input type="hidden" name={name("id")} defaultValue={todo.id} />
          <input
            type="checkbox"
            name={name("completed")}
            defaultChecked={todo.completed}
          />
          <input type="text" name={name("text")} defaultValue={todo.text} />
          <button className="hidden">submit</button>
        </Form>
      ))}
    </>
  );
}
