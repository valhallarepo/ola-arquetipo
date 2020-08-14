import { BaseModel } from '../../../core/model/base.model';

export class HomeModel extends BaseModel {
    userId: number;
    title: string;
    completed: boolean;
}
