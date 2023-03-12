import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { expect, test, describe } from 'vitest'
import Avatar from '.'
import avatar1 from '../../assets/avatar1.webp'


function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

describe('Avatar Component Test', () => {
  test('Avatar with Image Showed Correctly', () => {
    const component = renderer.create(
      <Avatar
        name="Budi Mulya"
        size="sm"
        url={avatar1}
      />
    )

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('Avatar with Placeholder Showed Correctly', () => {
    const component = renderer.create(
      <Avatar
        name="Budi Mulya"
        size="sm"
      />
    )

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('Avatar size expected', () => {
    render(<Avatar name="Budy Laode" size="lg" url={avatar1} />)

    const avatarClassName = screen.getByTestId('avatar-image').className

    expect(avatarClassName).contain('lg')
  })

  test('Avatar placeholder with 2 word name expected', () => {
    render(<Avatar name="Budy Laode" size="lg" />)

    const avatarPlaceholder = screen.getByTestId('avatar-placeholder').children[0].textContent

    expect(avatarPlaceholder).toBe("BL")
  })


  test('Avatar placeholder with 1 word name expected', () => {
    render(<Avatar name="Budy" size="lg" />)

    const avatarPlaceholder = screen.getByTestId('avatar-placeholder').children[0].textContent

    expect(avatarPlaceholder).toBe("B")
  })

  test('Avatar placeholder with more 2 word name expected', () => {
    render(<Avatar name="Budy Masasih Laode" size="lg" />)

    const avatarPlaceholder = screen.getByTestId('avatar-placeholder').children[0].textContent

    expect(avatarPlaceholder).toBe("BM")
  })
})