import { FormGroup } from '@angular/forms';

export const resetForm = (form: FormGroup) => {
  if (!form) return;
  form.reset();
  Object.keys(form.controls).forEach((key) => {
    const control = form.controls[key];
    control.setErrors(null);
  });
};

export const copyData = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
