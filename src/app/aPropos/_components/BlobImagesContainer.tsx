import Image from 'next/image';

// Import your images here - update these paths to match your actual image imports
import AliBusinessWoman from '../../../../public/images/about/AliBusinessWoman.jpg';
import AlissonProfil from '../../../../public/images/about/AliProfil.jpg';
import AliWorking from '../../../../public/images/about/AliWorking.png';

// Mobile-optimized main center blob (using correct CSS mask like original)
export const BlobShapeA_Mobile = () => {
  return (
    <div className="w-48 h-48 sm:w-56 sm:h-56 relative">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.5,-56.2C75,-44,84,-22,82.8,-1.2C81.7,19.7,70.4,39.4,54.9,53.3C39.4,67.2,19.7,75.4,1.7,73.7C-16.3,72,-32.7,60.5,-46.6,46.6C-60.6,32.7,-72.2,16.3,-74.5,-2.3C-76.8,-20.9,-69.7,-41.8,-55.8,-54C-41.8,-66.3,-20.9,-70,0.5,-70.5C22,-71.1,44,-68.5,59.5,-56.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.5,-56.2C75,-44,84,-22,82.8,-1.2C81.7,19.7,70.4,39.4,54.9,53.3C39.4,67.2,19.7,75.4,1.7,73.7C-16.3,72,-32.7,60.5,-46.6,46.6C-60.6,32.7,-72.2,16.3,-74.5,-2.3C-76.8,-20.9,-69.7,-41.8,-55.8,-54C-41.8,-66.3,-20.9,-70,0.5,-70.5C22,-71.1,44,-68.5,59.5,-56.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AliBusinessWoman}
          alt="Portrait principal d'Alisson"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="(max-width: 640px) 192px, 224px"
        />
      </div>
    </div>
  );
};

// Desktop version with absolute positioning (using original CSS mask)
export const BlobShapeA_Desktop = () => {
  return (
    <div className="absolute top-24 right-12  -translate-x-1/2 -translate-y-1/2 w-5/12 aspect-square z-30">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.5,-56.2C75,-44,84,-22,82.8,-1.2C81.7,19.7,70.4,39.4,54.9,53.3C39.4,67.2,19.7,75.4,1.7,73.7C-16.3,72,-32.7,60.5,-46.6,46.6C-60.6,32.7,-72.2,16.3,-74.5,-2.3C-76.8,-20.9,-69.7,-41.8,-55.8,-54C-41.8,-66.3,-20.9,-70,0.5,-70.5C22,-71.1,44,-68.5,59.5,-56.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.5,-56.2C75,-44,84,-22,82.8,-1.2C81.7,19.7,70.4,39.4,54.9,53.3C39.4,67.2,19.7,75.4,1.7,73.7C-16.3,72,-32.7,60.5,-46.6,46.6C-60.6,32.7,-72.2,16.3,-74.5,-2.3C-76.8,-20.9,-69.7,-41.8,-55.8,-54C-41.8,-66.3,-20.9,-70,0.5,-70.5C22,-71.1,44,-68.5,59.5,-56.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AliBusinessWoman}
          alt="Portrait principal d'Alisson"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="(max-width: 768px) 200px, 300px"
        />
      </div>
    </div>
  );
};

// Mobile-optimized secondary blob
export const BlobShapeB_Mobile = () => {
  return (
    <div className="w-32 h-32 sm:w-36 sm:h-36 relative">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.5,-64.2C61.6,-52.9,61.1,-31.8,64.6,-11.5C68,8.8,75.4,28.3,69.8,42.5C64.2,56.6,45.6,65.4,27.7,68.6C9.8,71.9,-7.3,69.5,-20.9,62.4C-34.5,55.3,-44.5,43.4,-54.9,29.6C-65.3,15.9,-76.1,0.3,-73.4,-12.5C-70.6,-25.3,-54.3,-35.3,-39.8,-45.8C-25.3,-56.4,-12.7,-67.5,4,-72.3C20.7,-77.1,41.4,-75.5,51.5,-64.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.5,-64.2C61.6,-52.9,61.1,-31.8,64.6,-11.5C68,8.8,75.4,28.3,69.8,42.5C64.2,56.6,45.6,65.4,27.7,68.6C9.8,71.9,-7.3,69.5,-20.9,62.4C-34.5,55.3,-44.5,43.4,-54.9,29.6C-65.3,15.9,-76.1,0.3,-73.4,-12.5C-70.6,-25.3,-54.3,-35.3,-39.8,-45.8C-25.3,-56.4,-12.7,-67.5,4,-72.3C20.7,-77.1,41.4,-75.5,51.5,-64.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AlissonProfil}
          alt="Portrait décoratif d'Alisson"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 640px) 128px, 144px"
        />
      </div>
    </div>
  );
};

// Desktop version of secondary blob
export const BlobShapeB_Desktop = () => {
  return (
    <div className="absolute top-32 right-0 w-2/3 aspect-square z-20">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.5,-64.2C61.6,-52.9,61.1,-31.8,64.6,-11.5C68,8.8,75.4,28.3,69.8,42.5C64.2,56.6,45.6,65.4,27.7,68.6C9.8,71.9,-7.3,69.5,-20.9,62.4C-34.5,55.3,-44.5,43.4,-54.9,29.6C-65.3,15.9,-76.1,0.3,-73.4,-12.5C-70.6,-25.3,-54.3,-35.3,-39.8,-45.8C-25.3,-56.4,-12.7,-67.5,4,-72.3C20.7,-77.1,41.4,-75.5,51.5,-64.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.5,-64.2C61.6,-52.9,61.1,-31.8,64.6,-11.5C68,8.8,75.4,28.3,69.8,42.5C64.2,56.6,45.6,65.4,27.7,68.6C9.8,71.9,-7.3,69.5,-20.9,62.4C-34.5,55.3,-44.5,43.4,-54.9,29.6C-65.3,15.9,-76.1,0.3,-73.4,-12.5C-70.6,-25.3,-54.3,-35.3,-39.8,-45.8C-25.3,-56.4,-12.7,-67.5,4,-72.3C20.7,-77.1,41.4,-75.5,51.5,-64.2Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AlissonProfil}
          alt="Portrait décoratif d'Alisson"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 150px, 300px"
        />
      </div>
    </div>
  );
};

// Mobile-optimized third blob
export const BlobShapeC_Mobile = () => {
  return (
    <div className="w-32 h-32 sm:w-36 sm:h-36 relative">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.4,-55C62.9,-39.9,66,-19.9,64.1,-1.9C62.2,16.1,55.2,32.2,43.7,45.8C32.2,59.3,16.1,70.4,-2.5,72.9C-21.1,75.4,-42.2,69.3,-57.5,55.7C-72.8,42.2,-82.4,21.1,-79.3,3.1C-76.2,-14.9,-60.4,-29.7,-45.1,-44.9C-29.7,-60.1,-14.9,-75.6,2.5,-78.1C19.9,-80.6,39.9,-70.2,51.4,-55Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.4,-55C62.9,-39.9,66,-19.9,64.1,-1.9C62.2,16.1,55.2,32.2,43.7,45.8C32.2,59.3,16.1,70.4,-2.5,72.9C-21.1,75.4,-42.2,69.3,-57.5,55.7C-72.8,42.2,-82.4,21.1,-79.3,3.1C-76.2,-14.9,-60.4,-29.7,-45.1,-44.9C-29.7,-60.1,-14.9,-75.6,2.5,-78.1C19.9,-80.6,39.9,-70.2,51.4,-55Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AliWorking}
          alt="Portrait décoratif d'Alisson"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 640px) 128px, 144px"
        />
      </div>
    </div>
  );
};

// Desktop version of third blob
export const BlobShapeC_Desktop = () => {
  return (
    <div className="absolute top-20 left-0 w-1/2 h-auto aspect-square z-0">
      <div
        className="w-full h-full relative"
        style={{
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.4,-55C62.9,-39.9,66,-19.9,64.1,-1.9C62.2,16.1,55.2,32.2,43.7,45.8C32.2,59.3,16.1,70.4,-2.5,72.9C-21.1,75.4,-42.2,69.3,-57.5,55.7C-72.8,42.2,-82.4,21.1,-79.3,3.1C-76.2,-14.9,-60.4,-29.7,-45.1,-44.9C-29.7,-60.1,-14.9,-75.6,2.5,-78.1C19.9,-80.6,39.9,-70.2,51.4,-55Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.4,-55C62.9,-39.9,66,-19.9,64.1,-1.9C62.2,16.1,55.2,32.2,43.7,45.8C32.2,59.3,16.1,70.4,-2.5,72.9C-21.1,75.4,-42.2,69.3,-57.5,55.7C-72.8,42.2,-82.4,21.1,-79.3,3.1C-76.2,-14.9,-60.4,-29.7,-45.1,-44.9C-29.7,-60.1,-14.9,-75.6,2.5,-78.1C19.9,-80.6,39.9,-70.2,51.4,-55Z" transform="translate(100 100)" fill="white"/>
            </svg>
          `)}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={AliWorking}
          alt="Portrait décoratif d'Alisson"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 120px, 300px"
        />
      </div>
    </div>
  );
};

// Mobile container with proper spacing and layout
export const BlobImagesContainer_Mobile = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 py-8 min-h-[400px]">
      <div className="w-full flex justify-center">
        <BlobShapeA_Mobile />
      </div>
      <div className="w-full flex justify-center gap-4">
        <BlobShapeB_Mobile />
        <BlobShapeC_Mobile />
      </div>
    </div>
  );
};

// Desktop container with absolute positioning
export const BlobImagesContainer_Desktop = () => {
  return (
    <>
      <BlobShapeA_Desktop />
      <BlobShapeB_Desktop />
      <BlobShapeC_Desktop />
    </>
  );
};

// Responsive container that switches between mobile and desktop layouts
export const BlobImagesContainer = () => {
  return (
    <>
      {/* Mobile layout */}
      <div className="block lg:hidden">
        <BlobImagesContainer_Mobile />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <BlobImagesContainer_Desktop />
      </div>
    </>
  );
};
