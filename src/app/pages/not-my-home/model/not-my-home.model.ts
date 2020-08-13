import { BaseModel } from 'src/app/core/model/base.model';

export class NotMyHomeModel extends BaseModel {
    userId: number;
    title: string;
    body: string;
}
