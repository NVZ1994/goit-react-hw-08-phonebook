import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAvatar } from '../redux/auth/authOperations';

export function UpdateProfile() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(updateAvatar(file));
    navigate('/profile');
  };

  return (
    <div style={{ marginTop: '70px' }}>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
