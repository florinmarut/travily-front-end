import { UserMiniCard } from "./UserMiniCard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const CommentCard = ({postId, userId, content, votes, date, updateDate}) => {
    return (
<Card sx={{ maxWidth: 500 }} style={{ margin: '25px auto 75px auto'}}>
      <CardContent>
      <div>
            <UserMiniCard userId={userId}/>
            <p>Content: {content}</p>
            <p>Votes: {votes}</p>
            <p>Created at: {date}</p>
            <p>Updated at: {updateDate}</p>
        </div>
      </CardContent>
      
    </Card>
    )
}

export default CommentCard;
