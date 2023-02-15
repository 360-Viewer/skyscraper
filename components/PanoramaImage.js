import React, {createRef, useEffect} from "react";
import dynamic from 'next/dynamic'
import { srcLink } from "./Utils";

const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
)

function PanaromaImage({src}) {
  const photoSphereRef = createRef(<ReactPhotoSphereViewer />);

  React.useEffect(() => {
    if (!photoSphereRef.current)
      return;
    console.log("photoSphereRef.current");
    photoSphereRef.current.toggleAutorotate();
  }, [photoSphereRef]);

    return (
      <div>
        <ReactPhotoSphereViewer
            ref={photoSphereRef}
            width={"100%"}
            height={'100vh'}
            src={src}
            loadingImg={srcLink("/favicon.ico")}  
            defaultZoomLvl={10}
            navbar={
                [
                    'autorotate',
                    'zoom',
                    'moveLeft',
                    'moveRight',
                    'fullscreen'
                ]
            }
        ></ReactPhotoSphereViewer>
      </div>
    )
}

export default PanaromaImage;
