import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import { expect, test, describe } from 'vitest';
import AvatarGroup from '..';


function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

describe('AvatarGroup Component Test', () => {
  test('Avatar Group with max length 3 and size xs showed correctly', () => {
    const component = renderer.create(
      <AvatarGroup maxLength={3} size="xs" />
    )

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(<AvatarGroup maxLength={3} size="xs" />)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(4)
  })

  test('Avatar Group with max length 4 and size sm showed correctly', () => {
    const ComponentToRender = <AvatarGroup maxLength={4} size="sm" />;
    const component = renderer.create(ComponentToRender)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(ComponentToRender)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(5)
  })


  test('Avatar Group with max length same with dummy data count and size sm showed correctly', () => {
    const ComponentToRender = <AvatarGroup maxLength={6} size="sm" />;
    const component = renderer.create(ComponentToRender)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    render(ComponentToRender)

    const elementCount = screen.getByTestId('avatar-group').childElementCount;
    expect(elementCount).toBe(6)
  })
})