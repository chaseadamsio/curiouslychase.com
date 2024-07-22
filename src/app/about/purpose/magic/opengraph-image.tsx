import { metadataBasic } from "@/app/about/purpose/magic/page";
import {
  OpenGraphImageResponse,
  openGraphMetadata,
} from "@/components/OpenGraphImage/OpenGraphImage";

// Route segment config
export const { runtime, size, contentType } = openGraphMetadata;

// Image generation
export default async function Image() {
  return await OpenGraphImageResponse(metadataBasic);
}
