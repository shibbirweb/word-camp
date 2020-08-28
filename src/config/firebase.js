import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.VUE_APP_Firebase_Api_Key,
    authDomain: process.env.VUE_APP_Firebase_Auth_Domain,
    databaseURL: process.env.VUE_APP_Firebase_Database_URL,
    projectId: process.env.VUE_APP_Firebase_Project_Id,
    storageBucket: process.env.VUE_APP_Firebase_Storage_Bucket,
    messagingSenderId: process.env.VUE_APP_Firebase_Messaging_SenderId,
    appId: process.env.VUE_APP_Firebase_App_Id,
    measurementId: process.env.VUE_APP_Firebase_Measurement_Id
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// analytics
export const analytics = firebase.analytics()

// get a firebase auth
export const auth = firebase.auth()

// email auth provider
export const emailAuthProvider = firebase.auth.EmailAuthProvider

// get a firebase firestore
export const firestore = firebase.firestore()

const { Timestamp, GeoPoint, FieldValue } = firebase.firestore
// export server timestamp and geo point
export { firebase, Timestamp, GeoPoint, FieldValue }
