import { Field } from "./Field";
import { Prototype } from "./Prototype";

export default class Form implements Prototype {
  fields: Field[];

  constructor(
    public formId: string,
    public category: string,
    public description: string
  ) {
    this.fields = [];
  }

  clone(): Form {
    const newForm = new Form(this.formId, this.category, this.description);
    for (const field of this.fields) {
      newForm.fields.push(field.clone());
    }
    return newForm;
  }

  addField(type: string, title: string): void {
    this.fields.push(Field.create(type, title));
  }
}
