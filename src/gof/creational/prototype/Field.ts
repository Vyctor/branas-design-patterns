import { Prototype } from "./Prototype";

export class Field implements Prototype {
  constructor(
    readonly fieldId: string,
    readonly type: string,
    readonly title: string
  ) {}

  static create(type: string, title: string): Field {
    const id = crypto.randomUUID();
    return new Field(id, type, title);
  }

  clone(): Field {
    return new Field(this.fieldId, this.type, this.title);
  }
}
