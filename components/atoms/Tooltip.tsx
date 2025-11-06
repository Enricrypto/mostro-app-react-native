import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, findNodeHandle } from 'react-native';

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

  const handlePress = () => {
    if (childRef.current) {
      const nodeHandle = findNodeHandle(childRef.current);
      if (nodeHandle) {
        childRef.current.measure((fx, fy, width, height, px, py) => {
          setTooltipLayout({ x: px, y: py, width, height });
          setTimeout(() => setVisible(true), delay);
        });
      }
    }
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
      {React.cloneElement(children, { onPress: handlePress, ref: childRef })}
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
