import { UserMiniCard } from "./UserMiniCard";

export const PostCard = ({ showUser, userId, content, createDate, updateDate, votes, location }) => {
    return (
        <div>

            {showUser && <UserMiniCard userId={userId}/>}
            <p>Location: {location}</p>
            <p>Content: {content}</p>
            <p>Created at: {createDate}</p>
            <p>Updated at: {updateDate}</p>
            <p>Votes: {votes}</p>
        </div>
    )
}

export default PostCard;