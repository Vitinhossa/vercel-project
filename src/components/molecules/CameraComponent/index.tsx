/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import FilledButtonContainer from '../../molecules/FilledButtonContainer';
import { colors } from '@/utils/colors';
import { CameraForcedStyle } from './style';


interface ICameraComponent {
  photoTaken?: (e: any) => any;
  camError?: () => any;
}
export default function CameraComponent({
  photoTaken,
  camError,
}: ICameraComponent) {

  const [isMirror, setIsMirror] = useState(FACING_MODES.ENVIRONMENT);
  
  function handleTakePhoto(dataUri: any) {
    // Do stuff with the photo...
    console.log(`takePhoto`);
  }

  function handleTakePhotoAnimationDone(dataUri: any) {
    if (photoTaken) {
      photoTaken(dataUri);
    }
  }

  function handleCameraError() {
    if (camError) {
      camError();
    }
  }

  return (
    <CameraForcedStyle>
      <Camera
        isFullscreen={false}
        idealFacingMode={isMirror}
        //isImageMirror={isMirror}
        onTakePhoto={(dataUri: any) => {
          handleTakePhoto(dataUri);
        }}
        onTakePhotoAnimationDone={(dataUri: any) => {
          handleTakePhotoAnimationDone(dataUri);
        }}
        onCameraError={() => {
          handleCameraError();
        }}
      />
      <FilledButtonContainer
            height="46px"
            btnText="Trocar Câmera"
            btnBgColor1={colors.verdeMedium}
            btnIsRounded
            btnRoundedSize="50px"
            btnTextColor={colors.branco}
            margin="32px 0 0 0"
            btnAction={() => {
              if(isMirror == FACING_MODES.USER)
              setIsMirror(FACING_MODES.ENVIRONMENT);
              else
              setIsMirror(FACING_MODES.USER);
            }}/>
    </CameraForcedStyle>
  );
}
