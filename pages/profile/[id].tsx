import React, {FC} from 'react';
import { getProfile } from '@src/service/github';
import styles from '@styles/Profile.module.css';
import ButtonLink from '@src/components/shared/button-link';

const Profile:FC<any> = ({ profile }) => {

  return (
    <div style={{ padding: '50px'}}>

      <h2>{profile.name}</h2>
      {profile.bio && <div className={styles.text}>{profile.bio}</div>}
      {profile.email && <div className={styles.text}>{profile.email}</div>}
      {profile.blog && <div className={styles.text}>{profile.blog}</div>}
      {profile.location && (
        <div className={styles.text}>{profile.location}</div>
      )}

      <div className={styles.text}>Public repos: {profile.public_repos}</div>
      <div className={styles.text}>Public gists: {profile.public_gists}</div>
      <div className={styles.counters}>
        <div>Followers: {profile.followers}</div>
        <div>Following: {profile.following}</div>
      </div>

      <ButtonLink
        href={profile.html_url}
        text={`Go to Github page `}
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await getProfile(query.id);
  return {
    props: { profile: res.data }
  };
};

export default Profile;
