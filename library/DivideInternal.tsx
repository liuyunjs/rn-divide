import React from 'react';
import { ColorValue, StyleSheet, View, ViewStyle } from 'react-native';
import { modulo } from '@liuyunjs/utils/lib/modulo';

export enum Float {
  top,
  right,
  bottom,
  left,
}

export type DivideInternalProps = {
  float?: Float;
  start?: number;
  end?: number;
  offset?: number;
  tintColor?: ColorValue;
  size?: number;
  horizontal?: boolean;
};

export const DivideInternal: React.FC<DivideInternalProps> = ({
  float,
  end,
  size = 1,
  start,
  offset = 0,
  tintColor = '#eee',
  horizontal,
}) => {
  start = start ?? offset;
  end = end ?? offset;

  size = size * StyleSheet.hairlineWidth;
  const isHorizontal = horizontal !== false;
  const style: ViewStyle = isHorizontal
    ? {
        paddingStart: start,
        paddingEnd: end,
        width: '100%',
        height: size,
      }
    : {
        paddingTop: start,
        paddingBottom: end,
        height: '100%',
        width: size,
      };

  const isFloat = typeof float === 'number';

  if (isFloat) {
    if (__DEV__) {
      if (isHorizontal) {
        if (float === Float.left || float === Float.right) {
          console.warn('当渲染水平方向的分割线时，不能设置浮动到左边或者右边');
        }
      } else {
        if (float === Float.top || float === Float.bottom) {
          console.warn('当渲染垂直方向的分割线时，不能设置浮动到上方或者底部');
        }
      }
    }

    if (style.width === '100%') delete style.width;
    if (style.height === '100%') delete style.height;
    // @ts-ignore
    style[Float[float]] = 0;
    // @ts-ignore
    style[Float[modulo(float - 2, 4)]] = 'auto';
  }

  return (
    <View style={[isFloat && StyleSheet.absoluteFill, style]}>
      <View style={[styles.divide, { backgroundColor: tintColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  divide: {
    width: '100%',
    height: '100%',
  },
});
