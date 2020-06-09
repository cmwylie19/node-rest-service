import { confirmationMessage } from './server'

describe("confirmationMessage", () => {
  it('should return true if no params are passed', () => {
    let result = confirmationMessage();
    expect(result).toBe(true)
  })
  it('should return false if params are passed', () => {
    let result = confirmationMessage("true");
    expect(result).toBe(false)
  })
})