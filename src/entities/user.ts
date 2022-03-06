import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('Users')

class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    age: number;

    @Column()
    email: string;
}

export { User }