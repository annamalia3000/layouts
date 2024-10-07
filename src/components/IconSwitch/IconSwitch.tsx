import classes from './iconSwitch.module.css';

type IconSwitchProps = {
    icon: string;
    onSwitch: () => void;
  };

export const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
  return (
    <div className={classes['icon-switch']}>
        <span 
            className='material-icons'
            onClick={onSwitch}
            >
              {icon}
        </span>
    </div>
  )
}