import { Observable } from 'rxjs/internal/Observable';
import { BaseModel } from '../model/base.model';

export interface IBaseService {
    get(data: BaseModel): Observable<any>;
    all(data?: BaseModel): Observable<Array<any>>;
    save(data: BaseModel): Observable<any>;
    patch(id: number | string, data: any): Observable<any>;
    remove(data: BaseModel): Observable<any>;
}
