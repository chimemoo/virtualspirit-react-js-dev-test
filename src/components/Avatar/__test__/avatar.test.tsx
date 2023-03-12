import renderer from 'react-test-renderer'
import { expect, test, describe } from 'vitest';
import Avatar from '..';
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
})