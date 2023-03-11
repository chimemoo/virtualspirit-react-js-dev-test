import { CSSProperties } from 'react'
import { getFirstTwoChars } from '../../utils'
import { AvatarSizeTypes } from '../types'
import './style.css'

interface AvatarProps {
  size: AvatarSizeTypes
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
      <div className={`avatar placeholder ${size}`}>
        <span>{getFirstTwoChars(name)}</span>
      </div>
    )
  }

  return (
    <div className={`avatar ${size}`}>
      <img src={url} alt={name} />
    </div>
  )
}

export default Avatar;