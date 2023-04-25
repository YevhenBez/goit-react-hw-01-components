import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <li className="friends__item" >
            {isOnline ? <span className="status" ><AiTwotoneCheckCircle size={36} color="green"/></span> : <span className="status"><AiTwotoneCloseCircle size={36} color="red"/></span>}
            <img className="avatar" src={avatar} alt="User avatar" width="98" />
            <p className="name">{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;