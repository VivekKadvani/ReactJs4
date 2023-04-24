import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

  return (
    <div>User ID: {userId}</div>
  );
};

export default UserDetail