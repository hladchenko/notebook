import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EditNote = () => {
    return (
        <>
            <Button><EditIcon /></Button>
            <Button size="small"><DeleteIcon /></Button>
        </>
    )
}

export default EditNote;