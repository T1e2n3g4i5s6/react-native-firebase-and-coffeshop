import { Text, StyleSheet, View, Image, Button } from "react-native";
import {initializeApp} from 'firebase/app'
import { getFirestore , setDoc, doc} from 'firebase/firestore'
  const HomePage = () => {
     
    const firebaseConfig = {
      apiKey: "AIzaSyCE96p_BevgVNEWW8JbGCk_UY3TntOdT3c",
      authDomain: "coffeeshop-b3b96.firebaseapp.com",
      projectId: "coffeeshop-b3b96",
      storageBucket: "coffeeshop-b3b96.appspot.com",
      messagingSenderId: "762040283929",
      appId: "1:762040283929:web:7c89c18b235dd7f9ff4b88",
      measurementId: "G-YM8QNP48RZ"
    };
    initializeApp(firebaseConfig);

    const SendDataFirebase = async () => {
      const fireStore = getFirestore();

      await setDoc(doc(fireStore, "users", "user:id2"), {
        id:"061696",
        name:"Juliana",
        age:"23"
      })
    };

    return (
        <View>
            {/* <View style={styles.topContainer}>

            </View> */}
            <Text>HelloWorld</Text>
            <Button title="Send data" onPress={SendDataFirebase}></Button>
        </View>
    )
  }
  export default HomePage;

  const styles = StyleSheet.create({
    Logo:{
        width:100,
        height:20,
    }
  })