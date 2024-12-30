import React from 'react';
import '../CSS/ProfileCard.css';

const ProfileCard = (props) => {
  return (
   
    <div className='card-container'>
        <div className='card'>
            <span className={props.status? "status online":"status offline"}>{props.status? "online":"offline"}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUf_xilk3Ref3CB1oOefZM809nR-r7g7hEng9zIitchtfPj8gtVzXnmbkm3EMaEuu5c3M&usqp=CAU" alt="" />
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.role}</p>
            <div className='skills'>
            <h2>Skills</h2>
            <ul>
            {props.skills.map((SKILL,INDEX)=>{

            return <li key={INDEX}>{SKILL}</li>
            })}

            </ul>
        </div>
        </div>
        
        <div className='buttons'>
                <button className='btn'>Message</button>
                <button className='btn1'>Following</button>
            </div>
      
    </div>
   
  )
  
}


export default ProfileCard