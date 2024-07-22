import Form from "../Form";
import { FormRepositoryMemory } from "../FormRepository";
import { CopyForm } from "../CopyForm";

test("Deve copiar um formulário", async () => {
  const formRepo = new FormRepositoryMemory();
  const form = new Form("1", "Formulário 1", "Formulário de teste");
  form.addField("text", "name");
  form.addField("email", "email");
  await formRepo.save(form);
  const copyForm = new CopyForm(formRepo);
  const input = {
    fromFormId: "1",
    newFormId: "2",
    newCategory: "Formulário de teste",
    newDescription: "Formulário de teste",
  };
  const copiedForm = await copyForm.execute(input);
  const newForm = await formRepo.getById("2");
  expect(newForm.category).toBe("Formulário de teste");
  expect(newForm.description).toBe("Formulário de teste");
  expect(newForm.fields).toHaveLength(2);
  expect(newForm.fields[0].title).toBe("name");
  expect(newForm.fields[1].title).toBe("email");
});
