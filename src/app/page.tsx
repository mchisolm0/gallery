import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
