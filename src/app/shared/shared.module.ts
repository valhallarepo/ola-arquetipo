import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from '../core/http-loader-factory';
import { MaterialModule } from '../core/material.module';

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            },
            isolate: false
        }),
    ],
    exports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule
        }
    }

}