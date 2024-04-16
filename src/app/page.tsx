import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ea268d97-b6e2-4644-92ee-2495bbcdf427-1xcfy8.jpeg",
  "https://utfs.io/f/78c8f8b2-a7ce-403e-87e3-f6115dbc01b0-1xcfy6.jpeg",
  "https://utfs.io/f/0661b133-a3fa-4f1c-8a35-bb3bfe14f0ec-1xcfcj.jpeg",
  "https://utfs.io/f/8e0fe275-b012-48c1-ac43-1b4266515391-1xcfz0.jpeg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
