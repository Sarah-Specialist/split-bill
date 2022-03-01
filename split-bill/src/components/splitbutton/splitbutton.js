import {useHistory} from 'react-router-dom';
import './splitbutton.css';

export default function SplitButton() {

    //const history = useHistory();
    
    return (
        <>
            <button type="submit" 
                className="submit" 
                >
                  Split my bill!
            </button>
        </>
    )
}
//onClick={() => {history.push('/select')}}