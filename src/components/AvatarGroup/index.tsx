import Avatar from "../Avatar"
import { AvatarSizeTypes } from "../types"
import './style.css'
import { userList } from "./constants";

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
      {userList.map((item, i) => (
        <Avatar
          size={size}
          url={item.avatar}
          name={item.name}
        />
      ))}
    </div>
  )
}

export default AvatarGroup
