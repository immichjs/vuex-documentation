import { mutations } from '../../store/automaticCounter'
// import { actions } from '../../store/automaticCounter'

const { startAutomaticCounter } = mutations
// const { activateAutomaticCounter } = actions

import { getters } from '../../store/automaticCounter'

describe('Testando mutations do AutomaticCounter', () => {
  it('Mutation: "startAutomaticCounter"', () => {
    const state = { automaticCounter: 0 }
    startAutomaticCounter(state)

    expect(state.automaticCounter).toBe(1)
  })
})


// describe('Testando actions do AutomaticCounter', () => {
//   it('Mutation: "startAutomaticCounter"', async () => {
//     const state = { automaticCounter: 0 }

//     startAutomaticCounter(state)
    
//     expect(state.automaticCounter).toBe(1)
//   })
// })

const { automaticCounter } = getters

describe('Testando getters do AutomaticCounter', () => {
  it('Getter: "automaticCounter"', () => {
    const state = { automaticCounter: 0 }

    expect(automaticCounter(state)).toBe(0)
  })
})
