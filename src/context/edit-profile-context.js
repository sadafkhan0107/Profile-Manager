import { useContext, createContext,  useState} from "react";

const EditProfileContext = createContext()

const EditProfileProvider = ({children}) => {
    // const [isEditProfileModal, setIsEditProfileModal] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editId, setEditId] = useState()
    
    return(
        <EditProfileContext.Provider value={{editOpen, setEditOpen, editId,  setEditId}}>
          {children}
       </EditProfileContext.Provider>
    )
}

const useEditProfile = () => useContext(EditProfileContext);

export {useEditProfile, EditProfileProvider}