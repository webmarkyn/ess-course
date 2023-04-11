const validatePassword = (password: string) => {
    const errors: string[] = []
    if (password.length < 5 || password.length > 15) errors.push('PWD_LENGTH')
    return {
        isValid: errors.length === 0,
        errors 
    };
}

export default validatePassword;
