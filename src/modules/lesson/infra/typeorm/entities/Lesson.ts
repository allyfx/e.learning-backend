import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    // ManyToOne,
    // JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

// import Course from '@modules/course/infra/typeorm/entities/Course';

@Entity('lessons')
class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('decimal')
    duration: number;

    @Column()
    course_id: string;

    @Column()
    description: string;

    @Column()
    video_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Lesson;