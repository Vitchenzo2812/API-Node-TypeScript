interface IUser {
    name: string,
    age: number,
    email: string
}

class createUserService{
    execute({ name, age, email }: IUser){
        const data = [];

        data.push({ name, age, email });

        return data;
    }
}

export { createUserService }