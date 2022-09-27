import Typography from '@mui/material/Typography';
import Note from "../components/note/Note";
import AddButton from "../components/addButton/AddButton"
import Alert from '@mui/material/Alert';

const Main = ({ items }) => {

    return (
        <div>
            <Alert severity="info" style={{ marginBottom: "20px" }}>
                If you reload the page, all notes will be reset.
            </Alert>
            <AddButton />
            {items.length > 0 ? items.map(item => {
                return <Note key={item.id} item={item} />
            }) 
            : <Typography>Notebook is empty. Use «Add note» button to add new note.</Typography>}
        </div>
    )
}

export default Main;