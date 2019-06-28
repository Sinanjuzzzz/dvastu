import React from 'react';
import styles from './index.css';
import UsersComponent from '../../components/Users/Users';

function Users() {
  return (
    <div className={styles.normal}>
      <UsersComponent />
    </div>
  );
}

export default Users;
