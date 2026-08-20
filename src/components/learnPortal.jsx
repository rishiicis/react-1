import {createPortal} from 'react-dom';

const LearnPortal =()=>{
    return (
        <>  
            <h1>Create Portal component</h1>
            {createPortal(
                <p>Child component by createPortal</p>,
                //document.body
                document.getElementById('root')
            )}
        </>
    )
}
export default LearnPortal;