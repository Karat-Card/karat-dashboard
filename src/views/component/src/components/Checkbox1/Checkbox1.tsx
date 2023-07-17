/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import Vector1Image from 'src/assets/images/Checkbox_Vector_1.png';
import { styled } from '@mui/material/styles';
import { Checkbox1Props } from 'src/types';

const StateUnchecked: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `16px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(206, 212, 218, 1)`,
  boxSizing: `border-box`,
  borderRadius: `4px`,
  width: `18px`,
  height: `18px`,
  position: `absolute`,
  left: `-1px`,
  top: `-1px`,
}));

const HeroiconsMiniCheck: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `20px`,
  height: `20px`,
  left: `0px`,
  top: `-4px`,
  overflow: `hidden`,
});

const Rectangle11: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(251, 244, 235, 1)`,
  border: `1px solid rgba(217, 140, 51, 1)`,
  boxSizing: `border-box`,
  borderRadius: `4px`,
  width: `18px`,
  height: `18px`,
  position: `absolute`,
  left: `-1px`,
  top: `-1px`,
}));

const Vector1: any = styled('img')({
  height: `4.77px`,
  width: `8.99px`,
  position: `absolute`,
  left: `7px`,
  top: `7px`,
});

const HeroiconsMiniCheck1: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `20px`,
  height: `20px`,
  left: `0px`,
  top: `-4px`,
  overflow: `hidden`,
});

function Checkbox1(props: Checkbox1Props): JSX.Element {
  return (
    <StateUnchecked className={props.className}>
      <Rectangle1></Rectangle1>
      <HeroiconsMiniCheck></HeroiconsMiniCheck>
      {false && <Rectangle11></Rectangle11>}
      {false && <Vector1 src={Vector1Image} loading="lazy" alt={'Vector 1'} />}
      {false && <HeroiconsMiniCheck1></HeroiconsMiniCheck1>}
    </StateUnchecked>
  );
}

export default Checkbox1;
