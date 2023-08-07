export default async function ShowPage({ params }: { params: { id: string } }) {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/1${params.id}`
  ).then((r) => r.json());
  return <pre>{JSON.stringify(todo, null, 2)}</pre>;
}
