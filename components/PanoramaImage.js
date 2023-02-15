import React, {useEffect} from "react";
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
    // const photoSphereRef = React.useRef(<ReactPhotoSphereViewer />);
    // useEffect(() => {
    //     if (photoSphereRef.current) {
    //         // console.log('hello');
    //         // console.log(photoSphereRef.current);
    //         // photoSphereRef.current.toggleAutorotate();
    //     }
    // }, [photoSphereRef]);

    return (
        <ReactPhotoSphereViewer
            // ref={photoSphereRef}
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
    )
}

export default PanaromaImage;
