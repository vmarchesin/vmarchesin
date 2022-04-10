import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="not-found">
      <div className="error">404</div>
      <div className="info">{`There's nothing here.`}</div>
    </div>
  );
};

export default NotFound;
