import { UntypedFormGroup } from '@angular/forms';

export const resetForm = (form: UntypedFormGroup) => {
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

export const storeToLocal = (data: any) => {
  Object.keys(data).forEach((key: string) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
};
