import React from 'react';
import { getRepo } from '@src/service/github';
import styles from '@styles/Repo.module.css';
import ButtonLink from '@src/components/shared/button-link';
import UserAvatar from '@src/components/UserAvatar';


const Repo = ({ repo }) => {
  return (
    <div>
      <ButtonLink href="/" text="Back" />

      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner}></UserAvatar>
      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>

      <ButtonLink
        href={repo.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await getRepo(query.id);
  return {
    props: { repo: res.data }
  };
};

export default Repo;