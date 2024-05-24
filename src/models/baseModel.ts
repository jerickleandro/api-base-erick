import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('base')
export class Base extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}