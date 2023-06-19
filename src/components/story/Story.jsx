import "./Story.css";

const Story = ({ story }) => {
  return (
    <div className="story">
      <div className="Story__image">
        <img src={story?.userImage} alt={story?.username} />
        {story?.isLive && <div className="Story__live">{"LIVE"}</div>}
      </div>
      <p className="Story__username">
        {story?.isUser ? "Your Story" : story.username}
      </p>
    </div>
  );
};

export default Story;

