import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="not-found">
      <div className="error noselect">404</div>
      <div className="info noselect">{`There's nothing here.`}</div>
    </div>
  );
};

export default NotFound;
