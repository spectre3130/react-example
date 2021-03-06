import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
  favoriteNumber: 3,
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
