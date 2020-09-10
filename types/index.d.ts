import { ActionTypes } from '@shaggytools/nhtsa-api-wrapper';
import { TypedVuexStore as _TypedVuexStore } from '~/store';

export type TypedVuexStore = _TypedVuexStore;

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
