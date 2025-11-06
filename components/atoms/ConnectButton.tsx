import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, findNodeHandle } from 'react-native';
import { CaretDown } from 'phosphor-react-native';

interface ConnectButtonProps {
  onConnect: () => void;
  onDisconnect: () => void;
  isConnected: boolean;
  address?: string;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({ onConnect, onDisconnect, isConnected, address }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [buttonLayout, setButtonLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const buttonRef = useRef<React.ElementRef<typeof TouchableOpacity>>(null);

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handlePress = () => {
    if (buttonRef.current) {
      const nodeHandle = findNodeHandle(buttonRef.current);
      if (nodeHandle) {
        buttonRef.current.measure((fx, fy, width, height, px, py) => {
          setButtonLayout({ x: px, y: py, width, height });
          setDropdownVisible(true);
        });
      }
    }
  };

  if (isConnected && address) {
    return (
      <View>
        <TouchableOpacity ref={buttonRef} style={styles.connectedButton} onPress={handlePress}>
          <Image source={require('../../assets/logo.png')} style={styles.avatar} />
          <Text style={styles.addressText}>{truncateAddress(address)}</Text>
          <CaretDown size={20} color="#000" />
        </TouchableOpacity>
        <Modal visible={dropdownVisible} transparent animationType="fade">
          <TouchableOpacity style={styles.modalContainer} onPress={() => setDropdownVisible(false)}>
            <View style={[styles.dropdown, { top: buttonLayout.y + buttonLayout.height + 8, left: buttonLayout.x }]}>
              <TouchableOpacity onPress={() => { setDropdownVisible(false); onDisconnect(); }}>
                <Text style={styles.dropdownText}>Disconnect</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.connectButton} onPress={onConnect}>
      <Text style={styles.connectButtonText}>Connect</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  connectButton: {
    backgroundColor: '#71D6FB',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  connectButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  connectedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#71D6FB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  addressText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  modalContainer: {
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
});
