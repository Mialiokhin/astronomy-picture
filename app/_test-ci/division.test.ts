import { describe, expect, it } from "@jest/globals"

// eslint-disable-next-line no-restricted-imports
import { division } from "./test-ci"

describe("division function", () => {
  it("should correctly divide two numbers", () => {
    // Arrange
    const a = 10
    const b = 2

    // Act
    const result = division(a, b)

    // Assert
    expect(result).toEqual(5)
  })

  it("should correctly divide two numbers", () => {
    // Arrange
    const a = 25
    const b = 5

    // Act
    const result = division(a, b)

    // Assert
    expect(result).toEqual(5)
  })
})
