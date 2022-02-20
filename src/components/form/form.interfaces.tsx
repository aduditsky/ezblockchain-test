import { MutableRefObject } from 'react';

export interface IHeader {}

export interface IFormData {
  name: string;
  email: string;
  commentary: string;
  companyName: string;
  phone: string;
  typeRequest: string;
  attachments: FileList;
}

export interface IForm {
  formRef: MutableRefObject<null>;
  closeHandler: () => void;
}
