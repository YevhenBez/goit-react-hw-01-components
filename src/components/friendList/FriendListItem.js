import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from "react-icons/fa";
import { AiTwotoneCloseCircle } from "react-icons/fa";

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class={name}></p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;