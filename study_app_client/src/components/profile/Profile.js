import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import './Profile.css';
import { useSelector } from 'react-redux';
import profile from './profile.png';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    fetchUserProfile(userId);
  }, [userId]);

  const fetchUserProfile = async (userId) => {
    try {
      if (userId === null) {
        return <div>Loading profile...</div>;
      }
      const response = await api.get(`/api/users/${userId}`);
      if (response.status === 200) {
        const profileData = response.data;
        setProfileData(profileData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (!profileData) {
  //   return <div>Loading profile...</div>;
  // }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">User Profile</h2>
      </div>
      <div className="profile-content">
      <img src={profile} alt="profile" />
        <table className="profile-table">
          
          <tbody>
            <tr>
              <td><strong>User ID:</strong></td>
              {/* <td>{profileData.userId}</td> */}
            </tr>
            <tr>
              <td><strong>Username:</strong></td>
              {/* <td>{profileData.username}</td> */}
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              {/* <td>{profileData.email}</td> */}
            </tr>
            <tr>
              <td><strong>Coins:</strong>
              
              </td>
              {/* <td>{profileData.funds ? profileData.funds.toFixed(2) : '0.00'}</td> */}
            </tr>
            
          </tbody>
          
        </table>
        
      </div>

    </div>
  );
}

export default Profile;
