import React from 'react';
import { Link } from 'react-router-dom';

const Repositories = (props) => {
    const handleclick = () =>{
        props.history.push('/facebook')
    }
    return (
        <div>
            
            <li onClick={handleclick}><Link to={'/facebook'}>Facebook</Link></li>
           
        </div>
    );
}
 
export default Repositories;