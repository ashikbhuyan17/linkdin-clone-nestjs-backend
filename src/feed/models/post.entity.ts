import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { type } from 'os';
@Entity('feed_post')
// export class FeedPostEntity extends BaseEntity 
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

}