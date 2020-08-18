const functions = {
    multiply:(num1,num2) => num1 * num2,
    
    createUser: () => {
        const user = {firstname: 'Anand'}
        user['lastname'] = 'Salimeda';
        return user;
    }
}
    module.exports = functions;