import { useContext, createContext,  useState, useEffect } from "react";
import getAllProfiles from "../services/getAllProfile";

const ProfileContext = createContext()

const ProfileProvider = ({children}) => {
    const [data, setData] = useState();
    useEffect(() => {
      (async () => {
        const {data : {data: {getAllProfiles : {profiles}}}} = await getAllProfiles();
        console.log(profiles)
        setData(profiles);
      })()
      }, [])
    return(
        <ProfileContext.Provider value={{data,setData}}>
          {children}
       </ProfileContext.Provider>
    )
}

const useProfile = () => useContext(ProfileContext);

export {useProfile, ProfileProvider}