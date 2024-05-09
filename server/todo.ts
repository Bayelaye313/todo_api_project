import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Itodo } from "./model/Itodo";

@Entity()
export class todo implements Itodo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    task:string;

    @Column()
    dateDue:Date;

    @Column()
    done:boolean;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}