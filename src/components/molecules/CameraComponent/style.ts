import styled from 'styled-components';
// import { colors } from '@/utils/colors';

const CameraForcedStyle = styled.div`
  height: 100%;
  /*max-height: 600px;*/
  width: 100%;
  .react-html5-camera-photo {
    height: 100%;
    width: 100%;
    video {
      //transform: rotateY(180deg) rotateZ(270deg) !important;
     // height: 100% !important;
    }

    img {
      //transform: rotateZ(90deg) !important;
      /* height: 100% !important; */
      margin-top: 85px;
    }

    #container-circles {
      left: 52% !important;
      bottom: 65px !important;

      #outer-circle {
        width: 56px !important;
        height: 56px !important;
        background: linear-gradient(to right, #f1206c, #ff4085) !important;

        #inner-circle {
          background-color: #fff !important;
          opacity: 0.3 !important;
          left: 53% !important;
          top: 30px !important;
          height: 40px !important;
          width: 40px !important;
        }
      }
    }
  }
`;

export { CameraForcedStyle };
