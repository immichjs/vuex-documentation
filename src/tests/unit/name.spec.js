import { getters } from '../../store/name'
import { mutations } from '../../store/name'

const { name } = getters
const { setName } = mutations

describe('Testando getters do Name', () => {
  it('Getter: name', () => {
    const state = { name: '' }
    name(state)
    expect(state.name).toBe('')
  })
})

describe('Testando mutations do Name', () => {
  it('Mutation: setName', () => {
    const state = { name: '' }
    setName(state)
    expect(state.name).toBe('Mich')
  })
})
