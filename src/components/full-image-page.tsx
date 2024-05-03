import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);

  const image = await getImage(idAsNumber);
  return <img src={image.url} className="w-96" alt={image.name} />;
}
