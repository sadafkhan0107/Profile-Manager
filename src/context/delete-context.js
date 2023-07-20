import { useContext, createContext,  useState} from "react";

const DeleteContext = createContext()

const DeleteProvider = ({children}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState()
    
    return(
        <DeleteContext.Provider value={{isDeleteModalOpen, setIsDeleteModalOpen, itemToDelete,setItemToDelete}}>
          {children}
       </DeleteContext.Provider>
    )
}

const useDelete = () => useContext(DeleteContext);

export {useDelete, DeleteProvider}