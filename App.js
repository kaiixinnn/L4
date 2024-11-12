// =============Exercise 1 ===========
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style = {{fontSize: 24, color: 'red'}}>RP Values</Text>
//         <Text style = {{color: 'green'}}>Excellent</Text>
//         <Text style = {{backgroundColor: 'yellow'}}>Customer-Centric</Text>
//         <Text style = {{ fontStyle: 'italic' }}>Integrity</Text>
//         <Text style = {{textAlign: 'center'}}>Teamwork</Text>
//         <Text style = {{backgroundColor: 'black', color: 'white'}}>Enterprising</Text>
//
//       </View>
//   )
// }
//
// export default Exercise1;

// =============Exercise 2 ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox:{
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold',
//   }
// })
//
// const Exercise2 = () => {
//   return (
//       <View >
//         {/*second styles name is the same as your styles const*/}
//         <View style={styles.greenBox}>
//           {/*if i want to put two together i need to [] it*/}
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise2;

// =============Exercise 3A ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent:{
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
//
// })
//
// const Exercise3A = () => {
//   return (
//       <View style={[styles.parent, {marginTop:50}]}>
//         <Text style = {[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3A;

// =============Exercise 3B ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent:{
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flex: 1,
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
//
// })
//
// const Exercise3B = () => {
//   return (
//       <View style={[styles.parent, {marginTop:50}]}>
//         <Text style = {[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3B;

// =============Exercise 3C ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent:{
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flex: 1,
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
//
// })
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.parent, {marginTop:50}]}>
//         <Text style = {[styles.child, {backgroundColor: 'powderblue', maxWidth:90}]}>
//           Child One
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'steelblue', maxHeight:120}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3C;

// =============Exercise 3D ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent:{
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
//
// })
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.parent, {marginTop:50}]}>
//         <Text style = {[styles.child, {backgroundColor: 'powderblue', flex: 1}]}>
//           Child One
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>
//           Child Two
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3D;

// =============Exercise 3D ===========
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent:{
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
//
// })
//
// const Exercise3E = () => {
//   return (
//       <View style={[styles.parent, {marginTop:50}]}>
//         <Text style = {[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style = {[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3E;

// =============Exercise 4 ===========
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'whitesmoke',
    marginTop: 50,
    flex: 1,                 // Make parent view take up full screen height
    justifyContent: 'space-around', // Center vertically
    alignItems: 'center',     // Center horizontally
    flexDirection: 'row',     // Align children in a row
  },
  child: {
    width: 80,
    height: 80,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});


const Exercise4 = () => {
  return (
      <View style={styles.parent}>
        <Text style={[styles.child, {backgroundColor: 'lightblue'}]}>
          Square 1
        </Text>
        <Text style={[styles.child, {backgroundColor: 'lightgreen'}]}>
          Square 2
        </Text>
        <Text style={[styles.child, {backgroundColor: 'red'}]}>
          Square 3
        </Text>
      </View>
  );
};

export default Exercise4;

