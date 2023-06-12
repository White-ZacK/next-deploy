import { IconContext } from 'react-icons';

const CustomIcon = ({ icon }) => {
  const IconComponent = icon;
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

export default CustomIcon;