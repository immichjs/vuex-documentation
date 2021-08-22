import { mutations } from '../../store/counter'
import { getters } from '../../store/counter'

const { add, sub } = mutations
const { count } = getters

describe('Testando mutations do Counter', () => {
  it('Mutation: "add"', () => {
    const state = { count: 0 }
    add(state)

    expect(state.count).toBe(1)
  })

  it('Mutation: "sub"', () => {
    const state = { count: 0 }
    sub(state)

    expect(state.count).toBe(-1)
  })
})

describe('Testando getters do Counter', () => {
  it('Getter: "count"', () => {
    const state = { count: 0 }
    count(state)
    expect(state.count).toBe(0)
  })
})
