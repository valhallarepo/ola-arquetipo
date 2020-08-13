import { BaseModel } from 'src/app/core/model/base.model';

export class HomeModel extends BaseModel {
    userId: number;
    title: string;
    completed: boolean;
}
