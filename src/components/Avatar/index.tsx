import { CSSProperties } from 'react'
import { getFirstTwoChars } from '../../utils'
import { AvatarSizeType } from '../types'
import './style.css'

interface AvatarProps {
  size: AvatarSizeType
  name: string
  url?: string
}

function Avatar({
  size,
  url,
  name,
}: AvatarProps) {
  if (!url) {
    return (
      <div className={`avatar placeholder ${size}`} data-testid="avatar-placeholder">
        <span>{getFirstTwoChars(name)}</span>
      </div>
    )
  }

  return (
    <div className={`avatar ${size}`} data-testid="avatar-image">
      <img src={url} alt={name} />
    </div>
  )
}

export default Avatar;