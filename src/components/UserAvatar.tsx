import React from 'react';
import styles from '@styles/Avatar.module.css';
import Link from 'next/link';

const UserAvatar = ({ user }) => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img className={styles.isRounded} width="80" src={user.avatar_url} alt="avatar" />
      </div>
      <div className={styles.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  );
};

export default UserAvatar;
