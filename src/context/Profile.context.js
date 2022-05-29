
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../misc/Firebase";

const Profilecontext = createContext()

export const ProfileProvider = ({children}) =>{
    const [profile , setProfile] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [carousel, setCarousel] = useState(true)
    useEffect(()=>{
        let useRef;
       const authUnsub =  auth.onAuthStateChanged(authObj=>{
            // console.log(authObj)
            if(authObj)
            {
               useRef = db.ref(`/profiles/${authObj.uid}`);
                useRef.on("value",(snap)=>{
                    // console.log("snap",snap) //shows the object 
                    // const profiledata = snap.val();
                    // console.log(profiledata) // shows the data of database
                    const {Name , CreatedAt,Avatar} = snap.val() //fetching data from database
                    const data = {
                        Avatar,
                        Name ,
                        CreatedAt,
                        uid : authObj.uid,
                        email: authObj.email
                    }
                    setProfile(data)
                    setisLoading(false)
                })
            }
            else
            {
                if(useRef){
                    useRef.off()
                }
                setProfile(null)
                setisLoading(false)
            }})
            return ()=>{
                authUnsub()
                if(useRef){
                    useRef.off()
                }
            }
    },[])

 
   return(
       <Profilecontext.Provider value={{ isLoading, profile, carousel }}>
        {children}
    </Profilecontext.Provider>
   )
}
export const useProfile = () => useContext(Profilecontext)