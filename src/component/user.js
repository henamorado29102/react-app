import React from 'react';


const User = ({user, removeUser}) =>(
<li>
    {`${user.name} ${user.lastname}, ${user.email}`}
    <button onClick={removeUser}>X</button>
</li>
)

export default User;