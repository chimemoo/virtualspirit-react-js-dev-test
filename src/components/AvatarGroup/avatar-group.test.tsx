import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { expect, test, describe } from 'vitest'
import AvatarGroup from '.'
import userList from './__mocks__/userlist'


function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

describe('AvatarGroup Component Test', () => {
  test('Avatar Group with max length 3 and size xs showed correctly', () => {
    const component = renderer.create(
      <AvatarGroup userList={userList} maxLength={3} size="xs" />
    )

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(<AvatarGroup userList={userList} maxLength={3} size="xs" />)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(4)
  })

  test('Avatar Group with max length 4 and size sm showed correctly', () => {
    const ComponentToRender = <AvatarGroup userList={userList} maxLength={4} size="sm" />
    const component = renderer.create(ComponentToRender)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(ComponentToRender)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(5)
  })


  test('Avatar Group with maxLength same with number of user list showed correctly', () => {
    const newUserList = userList.slice(0, 5) // get only 5 user list
    const ComponentToRender = <AvatarGroup userList={newUserList} maxLength={5} size="sm" />
    const component = renderer.create(ComponentToRender)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(ComponentToRender)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(5)
  })

  test('Avatar Group with maxLength above the number of user list showed correctly', () => {
    const newUserList = userList.slice(0, 3) // get only 3 user list
    const ComponentToRender = <AvatarGroup userList={newUserList} maxLength={5} size="sm" />
    const component = renderer.create(ComponentToRender)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(ComponentToRender)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(3)
  })
})