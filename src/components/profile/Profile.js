const Profile = (props) => {
    const { username, tag, location, avatar, statsFollowers, statsViews, statsLikes } = props;
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">{ tag }@pmarica</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{statsFollowers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{statsViews}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{statsLikes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;