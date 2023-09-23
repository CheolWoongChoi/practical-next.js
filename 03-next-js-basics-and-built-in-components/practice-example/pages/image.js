import Image from "next/image";

export default function ImagePage() {
  return (
    <div
      style={{
        width: 500,
        height: 200,
        position: "relative",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        alt="A beautiful English Setter"
        fill
        style={{
          objectFit: "cover",
        }}
        quality={1}
      />
    </div>
  );
}
