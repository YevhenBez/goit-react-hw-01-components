import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from "react-icons/fa";
import { AiTwotoneCloseCircle } from "react-icons/fa";

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li class="item">
            {isOnline ? <span class="status"><AiTwotoneCheckCircle size={16} color="green"/></span> : <span class="status"><AiTwotoneCloseCircle size={16} color="red"/></span>}
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;