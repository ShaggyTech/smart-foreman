import { ActionTypes } from '@shaggytools/nhtsa-api-wrapper';
import { TypedVuexStore } from '~/store';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: TypedVuexStore;
  }
}

export type ResultsObjectType = { [propName: string]: any };

export type DecodeVinValuesExtendedResponse = ActionTypes.DecodeVinValuesExtendedResponse;
export type DecodeVinValuesExtendedResults = ActionTypes.DecodeVinValuesExtendedResults;

export interface Validator {
  rules: {
    [propName: string]: any;
  };
  immediate?: boolean;
  vid?: string;
  name?: string;
  customMessages?: {
    [propName: string]: string;
  };
}
