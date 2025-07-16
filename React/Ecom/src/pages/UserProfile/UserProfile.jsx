import React from 'react'
import { useParams } from 'react-router';

const UserProfile = () => {
 const params = useParams();

    return (
      <div>
        <h1>User Profile Page</h1>
        <p>This is the User Profile Page of {params.username}</p>
      </div>
    );
}

export default UserProfile
