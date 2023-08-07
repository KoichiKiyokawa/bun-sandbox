import Link from "next/link";

export default async function Home() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (r) => r.json()
  );
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Link
          href={`${todo.id}`}
          key={todo.id}
          className="block border shadow p-4"
        >
          <h2>{todo.title}</h2>
        </Link>
      ))}
    </div>
  );
}
