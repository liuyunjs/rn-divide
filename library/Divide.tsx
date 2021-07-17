import React from 'react';
import { ColorValue, View, ViewProps } from 'react-native';
import { darkly } from 'rn-darkly';
import { DivideBase, DivideBaseProps, Float } from './DivideBase';

export type DivideProps = ViewProps &
  DivideBaseProps & {
    visible?: boolean;
    children?: React.ReactNode;
  };

const DivideInternal: React.FC<DivideProps> & { Float: typeof Float } = ({
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

DivideInternal.Float = Float;

export const Divide = darkly<
  typeof DivideInternal,
  { darkTintColor?: ColorValue }
>(DivideInternal);
