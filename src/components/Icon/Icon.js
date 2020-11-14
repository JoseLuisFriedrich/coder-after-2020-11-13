const Icon = ({ iconName, callback }) => {
  return <i className={`fas fa-${iconName}`} onClick={callback} />;
};

export default Icon;
