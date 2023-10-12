import React from 'react';

const Username = (props) => {
  
    return (  
        <div>
            
            Profile 
            <div>
                Username:{props.match.params.Username}
                {/* <div>
                    Month:{props.match.params.Month} 
                </div> */}
                
            </div>
        </div>
    );
}
 
export default Username;