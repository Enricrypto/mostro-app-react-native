import { List } from "phosphor-react-native";
import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  findNodeHandle,
  Dimensions,
} from "react-native";

interface MenuItem {
  id: string;
  label: string;
  onPress: () => void;
}

interface MenuProps {
  items: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuLayout, setMenuLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const menuButtonRef = useRef<TouchableOpacity>(null);

  const handleMenuPress = () => {
    if (menuButtonRef.current) {
      menuButtonRef.current.measure((fx, fy, width, height, px, py) => {
        setMenuLayout({ x: px, y: py, width, height });
        setIsVisible(true);
      });
    }
  };

  return (
    <View>
      <TouchableOpacity
        ref={menuButtonRef}
        style={styles.menuButton}
        onPress={handleMenuPress}
      >
        <List size={24} color="#000" />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <View
            style={[
              styles.menuContainer,
              { top: menuLayout.y + menuLayout.height + 8, right: Dimensions.get('window').width - menuLayout.x - menuLayout.width },
            ]}
          >
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => {
                  setIsVisible(false);
                  item.onPress();
                }}
              >
                <Text style={styles.menuItemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: "#71D6FB",
    padding: 8,
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
  },
  menuContainer: {
    position: "absolute",
    backgroundColor: "#121B2B",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 150,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    color: "#fff",
    fontSize: 16,
  },
});
