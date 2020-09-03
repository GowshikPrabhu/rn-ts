import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  /** Toast message type */
  type?: 'success' | 'warning' | 'error' | 'info';
  /** Toast message */
  message: string;
};

const Toast: React.FC<Props> = (props) => {
  const { type, message } = props;

  return (
    <View>
      <View style={styles.toastContainer}>
        <View style={styles.leftIconContainer}>
          <Icon name="check-circle" color="#F6F6F6" size={25} />
        </View>
        <View style={styles.messageContainer}>
          <Text numberOfLines={3} style={styles.toastMessage}>
            {message}
          </Text>
        </View>
        <View style={styles.rightIconContainer}>
          <Icon
            name="times"
            color="#212121"
            size={20}
            onPress={() => console.log('Clicked close')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    backgroundColor: '#FAFAFA',
    height: 75,
    width: 350,
    paddingHorizontal: 0,
    elevation: 10,
    overflow: 'hidden'
  },
  leftIconContainer: {
    backgroundColor: '#00C851',
    height: 75,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightIconContainer: {
    backgroundColor: 'transparent',
    height: 75,
    paddingTop: 5
  },
  messageContainer: {
    width: 290,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toastMessage: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#212121'
  }
});

export default Toast;
