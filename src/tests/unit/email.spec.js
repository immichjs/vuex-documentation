import { getters } from '../../store/email'
import { mutations } from '../../store/email'

const { email } = getters
const { updateEmail } = mutations

describe('Testando getters do Email', () => {
  it('Getter: email', () => {
    const state = { email: '' }
    email(state)
    expect(state.email).toBe(state.email)
  })
})

describe('Testando mutations do Email', () => {
  it('Mutation: "updateEmail"', () => {
    const state = { email: '' }
    updateEmail(state, 'mich@dev.com')

    expect(state.email).toBeTruthy()
  })
})
