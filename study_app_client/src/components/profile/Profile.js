import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import profile from './profile.png';
import { FaPen, FaCoins } from 'react-icons/fa';

function Profile() {
  const [profileData, setProfileData] = useState({
    userId: '2398447',
    username: 'exampleUser',
    email: 'user23@gmail.com',
    country: 'Malaysia',
    dateOfBirth: '01/01/1990',
  });
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    if (!editMode) {
      setEditedUserData({});
    }
  }, [editMode]);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedUserData({
      userId: profileData.userId,
      username: profileData.username,
      email: profileData.email,
      country: profileData.country,
      dateOfBirth: profileData.dateOfBirth,
    });
  };

  const handleSaveClick = () => {
    setProfileData({
      ...profileData,
      ...editedUserData,
    });
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setEditedUserData({
      ...editedUserData,
      [field]: value,
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">User Profile</h2>
      </div>
      <div className="profile-content">
        <img src={profile} alt="profile" />
        {editMode ? (
          <div>
            <table className="profile-table">
              <tbody>
                <tr>
                  <td><strong>User ID:</strong></td>
                  <td>
                    <input
                      type="text"
                      value={editedUserData.userId}
                      onChange={(e) => handleInputChange('userId', e.target.value)}
                      style={{ width: '200px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong>Username:</strong></td>
                  <td>
                    <input
                      type="text"
                      value={editedUserData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      style={{ width: '200px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>
                    <input
                      type="text"
                      value={editedUserData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      style={{ width: '200px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong>Country/Region:</strong></td>
                  <td>
                    <input
                      type="text"
                      value={editedUserData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      style={{ width: '200px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong>Date of Birth:</strong></td>
                  <td>
                    <input
                      type="text"
                      value={editedUserData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      style={{ width: '200px' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <table className="profile-table">
            <tbody>
              <tr>
                <td><strong>User ID:</strong></td>
                <td>{profileData.userId}</td>
                <td>
                </td>
              </tr>
              <tr>
                <td><strong>Username:</strong></td>
                <td>{profileData.username}</td>
                <td>
                  <FaPen
                    onClick={handleEditClick}
                    className="edit-icon"
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{profileData.email}</td>
                <td>
                  <FaPen
                    onClick={handleEditClick}
                    className="edit-icon"
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
              <tr>
                <td><strong>Country/Region:</strong></td>
                <td>{profileData.country}</td>
                <td>
                  <FaPen
                    onClick={handleEditClick}
                    className="edit-icon"
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
              <tr>
                <td><strong>Date of Birth:</strong></td>
                <td>{profileData.dateOfBirth}</td>
                <td>
                  <FaPen
                    onClick={handleEditClick}
                    className="edit-icon"
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
              <tr>
                <td><strong>Current Coins:</strong></td>
                <td>50</td>
                <td>
                  <FaCoins className="coin-icon" size={20} color={"#FFD700"} />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Profile;