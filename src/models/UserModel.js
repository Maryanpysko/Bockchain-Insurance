export default class UserModel{
    transactions =[];
    constructor(data){
        this.name = data.name;
        this.password = data.password;
        if(Array.isArray(data.transactions) && data.transactions.length > 0) {
            this.transactions = data.transactions;
        }
    }
}