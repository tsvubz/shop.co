import React, { CSSProperties } from 'react';
import { FlexDirection, AlignItems, JustifyContent, FlexWrap, FlexGap } from '@app/utils/styles';


interface FlexProps {
  direction?: FlexDirection;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: FlexGap;
  wrap?:FlexWrap;
  padding?:string;
  margin?:string;
  children: React.ReactNode;
}

const Flex = ({
  direction = FlexDirection.ROW,
  alignItems = AlignItems.CENTER,
  justifyContent = JustifyContent.START,
  gap = FlexGap.SMALL,
  wrap = FlexWrap.NO_WRAP,
  padding = '0',
  margin = '0',
  children,
}: FlexProps ) => {
  const flexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
    flexWrap: wrap,
    gap,
    padding,
    margin,
  };

  return <div style={flexStyle}>{children}</div>;
};

export default Flex;