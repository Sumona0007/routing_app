import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const handleclick = () =>{
        props.history.push('/username');
       
    }
    const handlefacebook = () =>{
        props.history.push('/repositories');
    }
  
    return ( 
        <div>
            Profile 
           <ul>
               <li onClick={handleclick}><Link to={'/username'}>Username</Link></li>
                <li onClick={handlefacebook}><Link to={'/repositories'}>Repositories</Link></li>
                {/* <li>
              < Link to={'/product/3'}>product 3</Link></li> */}
            </ul>
            
            {/* <div>
                username:{props.match.params.username} 
            </div> */}
            
            {/* <span>{props.match.params.name }</span> */}
        </div>
     );
}
 
export default Profile;