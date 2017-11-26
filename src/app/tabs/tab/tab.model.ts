import {Type} from '@angular/core';

export class AppTab {
  constructor(private _id: number = -1, public title: String, public component: Type<any>, public data: any) {
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

}
