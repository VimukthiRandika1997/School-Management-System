import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'vithushan',
            email:'vithu@gmail.com',
            password:bcrypt.hashSync('12345'),
            isAdmin:true
        },
        {
            name:'vithusha',
            email:'vithusa@gmail.com',
            password:bcrypt.hashSync('12345'),
            isAdmin:false
        }

    ]
}

export default data;