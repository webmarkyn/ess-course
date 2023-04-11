const UPPERCASE_REGEX = /[A-Z]/g;
const validatePassword = (password: string) => {
    const errors: string[] = []
    if (password.length < 5 || password.length > 15) errors.push('PWD_LENGTH')
    if (!UPPERCASE_REGEX.test(password)) errors.push('NO_UPPERCASE')
    return {
        isValid: errors.length === 0,
        errors 
    };
}

export default validatePassword;
