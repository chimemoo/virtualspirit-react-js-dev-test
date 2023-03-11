import Avatar from "../Avatar"
import { AvatarSizeTypes } from "../types"
import avatar from '../../assets/avatar.webp'
import './style.css'

interface AvatarGroupProps {
  maxLength: number;
  size: AvatarSizeTypes;
}

function AvatarGroup({
  maxLength,
  size,
}: AvatarGroupProps) {
  return (
    <div className="avatar-group">
      {[...Array(maxLength)].map((item, i) => (
        <Avatar size={size} url={avatar} />
      ))}
    </div>
  )
}

export default AvatarGroup
