import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer')
    lessons?: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}