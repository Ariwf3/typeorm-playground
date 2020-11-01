import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Tweet } from "./Tweet";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})   // Peut prendre options @Column({ type: "varchar", length:200 }) @Column({ nullable: true }) etc..
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({type: "int"})
    role: number


    @OneToMany(type => Tweet, tweet => tweet.user)
    tweets: Promise<Tweet[]>   // Retourner promesse permet lazy loading et le tweet.user devra être assigné avec Promise.resolve(user)



}
