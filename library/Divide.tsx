import React from 'react';
import { View, ViewProps } from 'react-native';
import { DivideBase, DivideBaseProps, Float } from './DivideBase';

export type DivideProps = ViewProps &
  DivideBaseProps & {
    visible?: boolean;
    children?: React.ReactNode;
  };

export const Divide: React.FC<DivideProps> & {
  Float: typeof Float;
} = ({
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
}: DivideProps) => {
  const divide = (
    <DivideBase
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

Divide.Float = Float;
