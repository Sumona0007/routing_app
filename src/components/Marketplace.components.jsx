import React  from 'react';
import { Link } from 'react-router-dom';

const Marketplace = (props) => {
    const handleclick = () =>{
        props.history.push('/cli_arg');
    }
    return (
        <div>
            Marketplace
            <div>
                <li onClick={handleclick}>
                   <Link  to='/cli-arg'>1. Cli-Argument</Link>
                </li>
            </div>
        </div>
    );
}
 
export default Marketplace;