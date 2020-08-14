import { BaseModel } from '../../../core/model/base.model';

export class NotMyHomeModel extends BaseModel {
    userId: number;
    title: string;
    body: string;
}
