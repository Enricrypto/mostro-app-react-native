import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, findNodeHandle, LayoutChangeEvent } from 'react-native';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', delay = 0, children }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipLayout, setTooltipLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const childRef = useRef<View>(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setTooltipLayout({ x, y, width, height });
  };

  const handleLongPressIn = () => {
    setTimeout(() => setVisible(true), delay);
  };

  const handleLongPressOut = () => {
    setVisible(false);
  };

  const getTooltipPosition = () => {
    const tooltipStyle: any = {};
    switch (position) {
      case 'top':
        tooltipStyle.top = tooltipLayout.y - 50;
        tooltipStyle.left = tooltipLayout.x + tooltipLayout.width / 2 - 50;
        break;
      case 'bottom':
        tooltipStyle.top = tooltipLayout.y + tooltipLayout.height;
        tooltipStyle.left = tooltipLayout.x + tooltipLayout.width / 2 - 50;
        break;
      case 'left':
        tooltipStyle.top = tooltipLayout.y + tooltipLayout.height / 2 - 25;
        tooltipStyle.left = tooltipLayout.x - 110;
        break;
      case 'right':
        tooltipStyle.top = tooltipLayout.y + tooltipLayout.height / 2 - 25;
        tooltipStyle.left = tooltipLayout.x + tooltipLayout.width;
        break;
    }
    return tooltipStyle;
  };

  return (
    <View>
      <TouchableOpacity
        onLongPress={handleLongPressIn}
        onPressOut={handleLongPressOut}
        ref={childRef}
        onLayout={onLayout}
        activeOpacity={1} // To prevent the wrapper from dimming on press
      >
        {children}
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalContainer} onPress={() => setVisible(false)}>
          <View style={[styles.tooltip, getTooltipPosition()]}>
            <Text style={styles.tooltipText}>{content}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
  },
  tooltipText: {
    color: 'white',
  },
});
