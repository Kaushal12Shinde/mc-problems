import { FaRegHeart, FaShareAlt } from 'react-icons/fa';
import './like.css'

const GRAPHIC = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

export default function LikePost() {
  return (
    <div className="card">
      <img
        src={GRAPHIC}
        alt="Person Image"
      />
      <div className="actions">
        <button onClick={postlike} className="hover:text-[#ff2501]">
          <FaRegHeart />
        </button>
        <button className="action-button">
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
}
