export const generateTargetNumber = (length = 3) => {
    const digits = []

    while (digits.length < length) {
        const randomDigit = Math.floor(Math.random() * 10)

        if (!digits.includes(randomDigit)) digits.push(randomDigit)
    }

    return digits
}