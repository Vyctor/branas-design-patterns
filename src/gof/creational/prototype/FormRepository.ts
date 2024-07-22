import Form from "./Form";

export interface FormRepository {
  save(form: Form): Promise<void>;
  getById(formId: string): Promise<Form>;
}

export class FormRepositoryMemory implements FormRepository {
  forms: Array<Form>;

  constructor() {
    this.forms = new Array<Form>();
  }

  async save(form: Form): Promise<void> {
    const formAlreadyExists = this.forms.find(
      (existantForm) => existantForm.formId === form.formId
    );

    if (formAlreadyExists) {
      throw new Error("Form already exists");
    }

    this.forms.push(form);
  }

  async getById(formId: string): Promise<Form> {
    const form = this.forms.find((form) => form.formId === formId);

    if (!form) {
      throw new Error("Form not found");
    }

    return form;
  }
}
