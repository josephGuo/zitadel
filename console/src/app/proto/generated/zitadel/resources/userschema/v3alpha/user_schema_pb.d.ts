import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as zitadel_resources_object_v3alpha_object_pb from '../../../../zitadel/resources/object/v3alpha/object_pb'; // proto import: "zitadel/resources/object/v3alpha/object.proto"


export class GetUserSchema extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): GetUserSchema;
  hasDetails(): boolean;
  clearDetails(): GetUserSchema;

  getConfig(): UserSchema | undefined;
  setConfig(value?: UserSchema): GetUserSchema;
  hasConfig(): boolean;
  clearConfig(): GetUserSchema;

  getState(): State;
  setState(value: State): GetUserSchema;

  getRevision(): number;
  setRevision(value: number): GetUserSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSchema.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSchema): GetUserSchema.AsObject;
  static serializeBinaryToWriter(message: GetUserSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSchema;
  static deserializeBinaryFromReader(message: GetUserSchema, reader: jspb.BinaryReader): GetUserSchema;
}

export namespace GetUserSchema {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    config?: UserSchema.AsObject,
    state: State,
    revision: number,
  }
}

export class UserSchema extends jspb.Message {
  getType(): string;
  setType(value: string): UserSchema;

  getSchema(): google_protobuf_struct_pb.Struct | undefined;
  setSchema(value?: google_protobuf_struct_pb.Struct): UserSchema;
  hasSchema(): boolean;
  clearSchema(): UserSchema;

  getPossibleAuthenticatorsList(): Array<AuthenticatorType>;
  setPossibleAuthenticatorsList(value: Array<AuthenticatorType>): UserSchema;
  clearPossibleAuthenticatorsList(): UserSchema;
  addPossibleAuthenticators(value: AuthenticatorType, index?: number): UserSchema;

  getDataTypeCase(): UserSchema.DataTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSchema.AsObject;
  static toObject(includeInstance: boolean, msg: UserSchema): UserSchema.AsObject;
  static serializeBinaryToWriter(message: UserSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSchema;
  static deserializeBinaryFromReader(message: UserSchema, reader: jspb.BinaryReader): UserSchema;
}

export namespace UserSchema {
  export type AsObject = {
    type: string,
    schema?: google_protobuf_struct_pb.Struct.AsObject,
    possibleAuthenticatorsList: Array<AuthenticatorType>,
  }

  export enum DataTypeCase { 
    DATA_TYPE_NOT_SET = 0,
    SCHEMA = 2,
  }
}

export class PatchUserSchema extends jspb.Message {
  getType(): string;
  setType(value: string): PatchUserSchema;
  hasType(): boolean;
  clearType(): PatchUserSchema;

  getSchema(): google_protobuf_struct_pb.Struct | undefined;
  setSchema(value?: google_protobuf_struct_pb.Struct): PatchUserSchema;
  hasSchema(): boolean;
  clearSchema(): PatchUserSchema;

  getPossibleAuthenticatorsList(): Array<AuthenticatorType>;
  setPossibleAuthenticatorsList(value: Array<AuthenticatorType>): PatchUserSchema;
  clearPossibleAuthenticatorsList(): PatchUserSchema;
  addPossibleAuthenticators(value: AuthenticatorType, index?: number): PatchUserSchema;

  getDataTypeCase(): PatchUserSchema.DataTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserSchema.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserSchema): PatchUserSchema.AsObject;
  static serializeBinaryToWriter(message: PatchUserSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserSchema;
  static deserializeBinaryFromReader(message: PatchUserSchema, reader: jspb.BinaryReader): PatchUserSchema;
}

export namespace PatchUserSchema {
  export type AsObject = {
    type?: string,
    schema?: google_protobuf_struct_pb.Struct.AsObject,
    possibleAuthenticatorsList: Array<AuthenticatorType>,
  }

  export enum DataTypeCase { 
    DATA_TYPE_NOT_SET = 0,
    SCHEMA = 3,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 2,
  }
}

export class SearchFilter extends jspb.Message {
  getOrFilter(): OrFilter | undefined;
  setOrFilter(value?: OrFilter): SearchFilter;
  hasOrFilter(): boolean;
  clearOrFilter(): SearchFilter;

  getAndFilter(): AndFilter | undefined;
  setAndFilter(value?: AndFilter): SearchFilter;
  hasAndFilter(): boolean;
  clearAndFilter(): SearchFilter;

  getNotFilter(): NotFilter | undefined;
  setNotFilter(value?: NotFilter): SearchFilter;
  hasNotFilter(): boolean;
  clearNotFilter(): SearchFilter;

  getTypeFilter(): TypeFilter | undefined;
  setTypeFilter(value?: TypeFilter): SearchFilter;
  hasTypeFilter(): boolean;
  clearTypeFilter(): SearchFilter;

  getStateFilter(): StateFilter | undefined;
  setStateFilter(value?: StateFilter): SearchFilter;
  hasStateFilter(): boolean;
  clearStateFilter(): SearchFilter;

  getIdFilter(): IDFilter | undefined;
  setIdFilter(value?: IDFilter): SearchFilter;
  hasIdFilter(): boolean;
  clearIdFilter(): SearchFilter;

  getFilterCase(): SearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFilter): SearchFilter.AsObject;
  static serializeBinaryToWriter(message: SearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFilter;
  static deserializeBinaryFromReader(message: SearchFilter, reader: jspb.BinaryReader): SearchFilter;
}

export namespace SearchFilter {
  export type AsObject = {
    orFilter?: OrFilter.AsObject,
    andFilter?: AndFilter.AsObject,
    notFilter?: NotFilter.AsObject,
    typeFilter?: TypeFilter.AsObject,
    stateFilter?: StateFilter.AsObject,
    idFilter?: IDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    OR_FILTER = 1,
    AND_FILTER = 2,
    NOT_FILTER = 3,
    TYPE_FILTER = 5,
    STATE_FILTER = 6,
    ID_FILTER = 7,
  }
}

export class OrFilter extends jspb.Message {
  getQueriesList(): Array<SearchFilter>;
  setQueriesList(value: Array<SearchFilter>): OrFilter;
  clearQueriesList(): OrFilter;
  addQueries(value?: SearchFilter, index?: number): SearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrFilter): OrFilter.AsObject;
  static serializeBinaryToWriter(message: OrFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrFilter;
  static deserializeBinaryFromReader(message: OrFilter, reader: jspb.BinaryReader): OrFilter;
}

export namespace OrFilter {
  export type AsObject = {
    queriesList: Array<SearchFilter.AsObject>,
  }
}

export class AndFilter extends jspb.Message {
  getQueriesList(): Array<SearchFilter>;
  setQueriesList(value: Array<SearchFilter>): AndFilter;
  clearQueriesList(): AndFilter;
  addQueries(value?: SearchFilter, index?: number): SearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AndFilter): AndFilter.AsObject;
  static serializeBinaryToWriter(message: AndFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndFilter;
  static deserializeBinaryFromReader(message: AndFilter, reader: jspb.BinaryReader): AndFilter;
}

export namespace AndFilter {
  export type AsObject = {
    queriesList: Array<SearchFilter.AsObject>,
  }
}

export class NotFilter extends jspb.Message {
  getFilter(): SearchFilter | undefined;
  setFilter(value?: SearchFilter): NotFilter;
  hasFilter(): boolean;
  clearFilter(): NotFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NotFilter): NotFilter.AsObject;
  static serializeBinaryToWriter(message: NotFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotFilter;
  static deserializeBinaryFromReader(message: NotFilter, reader: jspb.BinaryReader): NotFilter;
}

export namespace NotFilter {
  export type AsObject = {
    filter?: SearchFilter.AsObject,
  }
}

export class IDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): IDFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): IDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: IDFilter): IDFilter.AsObject;
  static serializeBinaryToWriter(message: IDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDFilter;
  static deserializeBinaryFromReader(message: IDFilter, reader: jspb.BinaryReader): IDFilter;
}

export namespace IDFilter {
  export type AsObject = {
    id: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class TypeFilter extends jspb.Message {
  getType(): string;
  setType(value: string): TypeFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): TypeFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TypeFilter): TypeFilter.AsObject;
  static serializeBinaryToWriter(message: TypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeFilter;
  static deserializeBinaryFromReader(message: TypeFilter, reader: jspb.BinaryReader): TypeFilter;
}

export namespace TypeFilter {
  export type AsObject = {
    type: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class StateFilter extends jspb.Message {
  getState(): State;
  setState(value: State): StateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StateFilter): StateFilter.AsObject;
  static serializeBinaryToWriter(message: StateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateFilter;
  static deserializeBinaryFromReader(message: StateFilter, reader: jspb.BinaryReader): StateFilter;
}

export namespace StateFilter {
  export type AsObject = {
    state: State,
  }
}

export enum FieldName { 
  FIELD_NAME_UNSPECIFIED = 0,
  FIELD_NAME_TYPE = 1,
  FIELD_NAME_STATE = 2,
  FIELD_NAME_REVISION = 3,
  FIELD_NAME_CHANGE_DATE = 4,
  FIELD_NAME_CREATION_DATE = 5,
}
export enum State { 
  STATE_UNSPECIFIED = 0,
  STATE_ACTIVE = 1,
  STATE_INACTIVE = 2,
}
export enum AuthenticatorType { 
  AUTHENTICATOR_TYPE_UNSPECIFIED = 0,
  AUTHENTICATOR_TYPE_USERNAME = 1,
  AUTHENTICATOR_TYPE_PASSWORD = 2,
  AUTHENTICATOR_TYPE_WEBAUTHN = 3,
  AUTHENTICATOR_TYPE_TOTP = 4,
  AUTHENTICATOR_TYPE_OTP_EMAIL = 5,
  AUTHENTICATOR_TYPE_OTP_SMS = 6,
  AUTHENTICATOR_TYPE_AUTHENTICATION_KEY = 7,
  AUTHENTICATOR_TYPE_IDENTITY_PROVIDER = 8,
}
