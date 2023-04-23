import React from 'react';

const About = props => {
    console.log(props);
    return (
        
    <aside>
        <img src={props.img} alt={props.alt} />
        {props.children}
    </aside>
    
    
    )
}

export default About