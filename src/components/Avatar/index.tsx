import { AvatarSizeTypes } from '../types';
import './style.css';

interface AvatarProps {
  size: AvatarSizeTypes;
  url: string;
}

function Avatar({
  size,
  url,
}: AvatarProps) {
  return (
    <div className={`avatar ${size}`}>
      <img src={url} />
    </div>
  )
}

export default Avatar;