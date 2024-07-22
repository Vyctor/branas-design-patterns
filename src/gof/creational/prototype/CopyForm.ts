import { Field } from "./Field";
import Form from "./Form";
import { FormRepository } from "./FormRepository";

export class CopyForm {
  constructor(readonly formRepository: FormRepository) {}

  async execute(input: Input) {
    const form = await this.formRepository.getById(input.fromFormId);
    if (!form) {
      throw new Error("Form not found");
    }
    const newForm = form.clone();
    newForm.category = input.newCategory;
    newForm.description = input.newDescription;
    newForm.formId = input.newFormId;

    await this.formRepository.save(newForm);
    return newForm;
  }
}

type Input = {
  fromFormId: string;
  newFormId: string;
  newCategory: string;
  newDescription: string;
};
