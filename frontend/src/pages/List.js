import {useState, useContext} from 'react'
import ListHeader from '../components/list/ListHeader'
import ListItems from '../components/list/ListItems'
import AddListModal from '../components/list/AddListModal'
import ListContext from '../contexts/list/listContext'

const List =  () => {
    const [showAddModal, setAddModal] = useState(false)
    
    const listContext = useContext(ListContext)
    const {deleteSelected, list} = listContext

    const onDeleteSelected = async e => {
        e.preventDefault()
        deleteSelected(list)
    }

    const addItemClick = (e) => {
        e.preventDefault()
        setAddModal(!showAddModal)
        window.scrollTo(0,0)
        document.body.style.overflow = 'hidden'
    }

    const closeModals = (e) => {
        if(e.target.classList.contains("modal--background")){
            setAddModal(false)
            document.body.style.overflow = 'unset'
        }
    }

    return (
        <>
            <AddListModal showAddModal={showAddModal} closeModals={closeModals} setAddModal={setAddModal}/>
            <main>
                <ListHeader addItemClick={addItemClick} onDeleteSelected={onDeleteSelected}/>
                <ListItems/>
            </main>
        </>
    )
}

export default List
