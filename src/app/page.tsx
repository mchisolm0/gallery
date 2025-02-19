import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (images.length === 0) {
    return (
      <div className="h-full w-full p-4 text-center text-2xl">
        Use the upload button above to begin.
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                width={192}
                height={192}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full p-4 text-center text-2xl">
          Please sign in above.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
