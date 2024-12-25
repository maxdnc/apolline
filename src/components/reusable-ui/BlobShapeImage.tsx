import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useMemo } from 'react';

type BlobShapeType = 'blobShapeA' | 'blobShapeB' | 'blobShapeC' | 'default';

const BLOB_SHAPES: Record<BlobShapeType, string> = {
  blobShapeA:
    'M59.5,-56.2C75,-44,84,-22,82.8,-1.2C81.7,19.7,70.4,39.4,54.9,53.3C39.4,67.2,19.7,75.4,1.7,73.7C-16.3,72,-32.7,60.5,-46.6,46.6C-60.6,32.7,-72.2,16.3,-74.5,-2.3C-76.8,-20.9,-69.7,-41.8,-55.8,-54C-41.8,-66.3,-20.9,-70,0.5,-70.5C22,-71.1,44,-68.5,59.5,-56.2Z',
  blobShapeB:
    'M48.6,-46.4C61.5,-35.8,69.2,-17.9,67.6,-1.6C66,14.7,55.1,29.5,42.3,41.3C29.5,53.2,14.7,62.1,-2.4,64.5C-19.5,66.9,-39,62.7,-49.9,50.9C-60.7,39,-62.9,19.5,-62.4,0.5C-61.9,-18.5,-58.8,-37.1,-47.9,-47.6C-37.1,-58.1,-18.5,-60.7,-0.3,-60.4C17.9,-60.1,35.8,-56.9,48.6,-46.4Z',
  blobShapeC:
    'M51.4,-55C62.9,-39.9,66,-19.9,64.1,-1.9C62.2,16.1,55.2,32.2,43.7,45.8C32.2,59.3,16.1,70.4,-2.5,72.9C-21.1,75.4,-42.2,69.3,-57.5,55.7C-72.8,42.2,-82.4,21.1,-79.3,3.1C-76.2,-14.9,-60.4,-29.7,-45.1,-44.9C-29.7,-60.1,-14.9,-75.6,2.5,-78.1C19.9,-80.6,39.9,-70.2,51.4,-55Z',
  default:
    'M51.5,-64.2C61.6,-52.9,61.1,-31.8,64.6,-11.5C68,8.8,75.4,28.3,69.8,42.5C64.2,56.6,45.6,65.4,27.7,68.6C9.8,71.9,-7.3,69.5,-20.9,62.4C-34.5,55.3,-44.5,43.4,-54.9,29.6C-65.3,15.9,-76.1,0.3,-73.4,-12.5C-70.6,-25.3,-54.3,-35.3,-39.8,-45.8C-25.3,-56.4,-12.7,-67.5,4,-72.3C20.7,-77.1,41.4,-75.5,51.5,-64.2Z',
};

interface BlobShapeImageProps {
  imgSrc: StaticImageData | string;
  shape?: BlobShapeType;
  alt?: string;
}

const BlobShapeImage = ({
  imgSrc,
  shape = 'default',
  alt = 'Blob shaped image',
}: BlobShapeImageProps) => {
  // Generate a stable ID for the mask
  const uniqueId = useMemo(
    () => `blob-mask-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  return (
    <div className="w-full h-full relative">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id={uniqueId}>
          <path
            d={BLOB_SHAPES[shape]}
            transform="translate(100 100)"
            fill="white"
          />
        </mask>
        <g mask={`url(#${uniqueId})`}>
          <rect width="200" height="200" fill="transparent" />
          <foreignObject width="200" height="200">
            <div
              className="w-full h-full relative"
              style={{ width: '200px', height: '200px' }}
            >
              <Image
                src={imgSrc}
                alt={alt}
                className="w-full h-full object-cover"
                fill
                priority
                sizes="(max-width: 200px) 100vw, 200px"
              />
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  );
};

export default BlobShapeImage;
