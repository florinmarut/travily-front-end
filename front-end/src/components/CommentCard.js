import { UserMiniCard } from "./UserMiniCard";

export const CommentCard = ({postId, userId, content, votes, date, updateDate}) => {
    return (
        <div>
            <UserMiniCard userId={userId}/>
            <p>Content: {content}</p>
            <p>Votes: {votes}</p>
            <p>Created at: {date}</p>
            <p>Updated at: {updateDate}</p>
        </div>
    )
}

export default CommentCard;
