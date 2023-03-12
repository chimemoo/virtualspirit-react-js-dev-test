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
  const showedAvatar = maxLength < userList.length
    ? userList.slice(0, maxLength)
    : userList

  const showMorePlaceholder = maxLength < userList.length

  return (
    <div className="avatar-group" data-testid="avatar-group">
      {showedAvatar.map((item, i) => (
        <Avatar
          size={size}
          url={item.avatar}
          name={item.name}
          key={item.key}
        />
      ))}
      {showMorePlaceholder && (
        <div className={`avatar more ${size}`}>
          <span>{`+${userList.length - maxLength}`}</span>
        </div>
      )}
    </div>
  )
}

export default AvatarGroup
