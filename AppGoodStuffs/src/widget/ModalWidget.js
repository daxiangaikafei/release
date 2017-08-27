import React from 'react';
import { Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalWidget = props => (
  <Modal
    animationType={"fade"}
    transparent={true}
    visible={props.modalVisible}
    onRequestClose={()=>{}}
    >
    <View style={styles.cover}>
      <View style={styles.container}>
      {
        !props.noClose && (<TouchableWithoutFeedback onPress={() => {
            props.onPressClose && typeof props.onPressClose === 'function' && props.onPressClose()         
          }}>
          <Ionicons
            name={'ios-close'}
            size={36}
            style={{ color: '#BCAFB2',position:'absolute', top: 0,right:10 }}
          />
        </TouchableWithoutFeedback>)
      }
        
        {props.contentComponent()}
      </View>         
    </View>
  </Modal>
);
ModalWidget.defaultProps = {
  modalVisible: false,
  noClose: false,
}

export default ModalWidget;

const styles = StyleSheet.create({
  cover: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.6)',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  container: {
    backgroundColor:'#fff',
    width:'85%',
    padding:20,
    minHeight:220,
    borderRadius:8,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
})