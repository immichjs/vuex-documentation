import { changeColorMutation } from '../../store/changeColor'

const { changeColor } = changeColorMutation

describe('Testando mutation changeColor', () => {
  it('', () => {
    const state = { color: 'red' }
    changeColor(state, 'black')
    expect(state.color).toBe('black')
  })
})
