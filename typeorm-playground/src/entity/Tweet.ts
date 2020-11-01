import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({ name: "tweet" })    // propriété 'name'(nom de la table) non obligatoire car prend par défaut nom de classe
export class Tweet {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: 80})
  title: string

  @Column({ type:"varchar", length: 300 })
  content: string

  @ManyToOne(type => User, user => user.tweets)
  user: Promise<User>   // Retourner la promesse permet le lazy loading
}