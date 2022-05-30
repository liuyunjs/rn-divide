import React from 'react';
import { View, ViewProps } from 'react-native';
import { darkly } from 'rn-darkly';
import { DivideInternal, DivideInternalProps } from './DivideInternal';

export type DivideProps = ViewProps &
  DivideInternalProps & {
    visible?: boolean;
    children?: React.ReactNode;
  };

const Divide: React.FC<DivideProps> = ({
  visible = true,
  start,
  end,
  offset,
  tintColor,
  float,
  children,
  style,
  size,
  horizontal,
  ...rest
}) => {
  const divide = (
    <DivideInternal
      size={size}
      start={start}
      end={end}
      offset={offset}
      horizontal={horizontal}
      tintColor={tintColor}
      float={float}
    />
  );
  if (!children) return divide;

  return (
    <View
      {...rest}
      style={[horizontal === false && { flexDirection: 'row' }, style]}>
      {children}
      {visible && divide}
    </View>
  );
};

export const DarklyDivide = darkly(Divide, 'tintColor');

DarklyDivide.defaultProps = {
  dark_tintColor: '#444',
};
