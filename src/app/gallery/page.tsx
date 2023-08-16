import { CloudinaryImage } from "./cloudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />

        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
              alt="An image of something"
              width="400"
              height="300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
