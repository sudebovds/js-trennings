import { FaceBackground } from '../faceBackground/FaceBackground';
import { Eye } from '../eye/Eye';
import { Mouth } from '../mouth/Mouth';
import { FaceContainer } from '../faceContainer/FaceContainer';

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    radius,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius, 
    mouthWith,
    mouthRadius
  }) => {
    return (
      <>
              <FaceContainer
                width = {width}
                height = {height}
                centerX = {centerX}
                centerY = {centerY}
              >
                <FaceBackground 
                  r={radius}
                  fill="yellow"
                  stroke="black"
                  strokeWidth={strokeWidth}
                />
                <Eye
                  centerX = {- eyeOffsetX} 
                  centerY = {- eyeOffsetY}
                  radius = {eyeRadius}
                />
                <Eye
                  centerX = {eyeOffsetX} 
                  centerY = {- eyeOffsetY}
                  radius = {eyeRadius}
                /> 
                <Mouth
                    mouthWith = {mouthWith}
                    mouthRadius = {mouthRadius}
                />  
              </FaceContainer>   
          </>
    );
  }