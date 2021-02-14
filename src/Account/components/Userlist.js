import Button from '../../shared/UIElements/Button';

import './css/Userlist.css';

const Userlist = ({ users }) => {
  const clickHandler = id => {
    console.log('click!' + id);
  };

  return (
    <ul className='mt-2'>
      {users.map(user => (
        <li key={user._id} className='flex flex-center-align mt-1'>
          <img
            className='account-image'
            src={user.profile_image_url}
            alt='User'
          />
          <h3 className='userlist__username'>{user.display_name}</h3>
          <Button text='Approve' onClick={() => clickHandler(user._id)} />
        </li>
      ))}
    </ul>
  );
};

export default Userlist;
