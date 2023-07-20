import { useContext, createContext,  useState} from "react";

const EditProfileContext = createContext()

const EditProfileProvider = ({children}) => {
    const [isEditProfileModal, setIsEditProfileModal] = useState(false);
    const [editId, setEditId] = useState()
    
    return(
        <EditProfileContext.Provider value={{isEditProfileModal, setIsEditProfileModal, editId,  setEditId}}>
          {children}
       </EditProfileContext.Provider>
    )
}

const useEditProfile = () => useContext(EditProfileContext);

export {useEditProfile, EditProfileProvider}