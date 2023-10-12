import React, { Component } from 'react';

const Cli_Arg = (props) => {
    const handleclick = () =>{
        props.history.push('/cli-arg')
    }
    return (
        <div onClick={handleclick}>
            cli-arg
        </div>
    );
}
 
export default Cli_Arg;