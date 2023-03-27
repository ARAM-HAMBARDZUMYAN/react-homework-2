import React from 'react';
import './style.scss'
import Men from  '../../assets/images/men.png';
import Women from  '../../assets/images/women.png';

class UsersList extends React.Component {
state = {
     users:[
        {
          firstName: 'test',
          lastName: 'testyan',
          age: 20,
          email: 'tester@gmail.com',
          gender: 'male'
        },
        {
          firstName: 'test',
          lastName: 'testyan',
          age: 20,
          email: 'tester@gmail.com',
          gender: 'female'
        },
        {
          firstName: 'test',
          lastName: 'testyan',
          age: 20,
          email: 'tester@gmail.com',
          gender: 'male'
        },
        {
          firstName: 'test',
          lastName: 'testyan',
          age: 20,
          email: 'tester@gmail.com',
          gender: 'female'
        },
        {
          firstName: 'test',
          lastName: 'testyan',
          age: 20,
          email: 'tester@gmail.com',
          gender: 'male'
        }
      ],
    }
    constructor(props) {
      super();
      console.log(props)
    }
  render() { 
    
  return (
    <div className='P-flex-container'>
        {this.state.users.map((item, index) => {
            return <div className='P-flex-box'  >
            {item.gender==="male"? <img src={Men} alt='male'/> : <img src={Women} alt='female'/>}
            
      <p>firstName:{item.firstName}</p>
      <p>LastName:{item.lastName}</p>
      <p>Age:{item.age}</p>
      <p>Email:{item.email}</p>
      <p>Gender:{item.gender}</p>
    </div>
          })}
    </div>
  );
}}
export default UsersList ;