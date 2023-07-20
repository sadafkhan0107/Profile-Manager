import { useContext, createContext,  useState} from "react";

const DeleteContext = createContext()

const DeleteProvider = ({children}) => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState()
    
    return(
        <DeleteContext.Provider value={{isDeleteModal,setIsDeleteModal,itemToDelete,setItemToDelete}}>
          {children}
       </DeleteContext.Provider>
    )
}

const useDelete = () => useContext(DeleteContext);

export {useDelete, DeleteProvider}