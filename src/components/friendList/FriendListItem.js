import PropTypes from 'prop-types';
import css from './css/friendList.module.css';
import { AiTwotoneCheckCircle } from "react-icons/ai";

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li className={css.friends__item} >
            <span className = {isOnline ? css.statusGreen : css.statusRed } ><AiTwotoneCheckCircle size={36} /></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="98" />
            <p className="name">{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;