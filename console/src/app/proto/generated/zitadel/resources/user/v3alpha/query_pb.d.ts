import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_resources_user_v3alpha_user_pb from '../../../../zitadel/resources/user/v3alpha/user_pb'; // proto import: "zitadel/resources/user/v3alpha/user.proto"
import * as zitadel_resources_object_v3alpha_object_pb from '../../../../zitadel/resources/object/v3alpha/object_pb'; // proto import: "zitadel/resources/object/v3alpha/object.proto"


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

  getUserIdFilter(): UserIDFilter | undefined;
  setUserIdFilter(value?: UserIDFilter): SearchFilter;
  hasUserIdFilter(): boolean;
  clearUserIdFilter(): SearchFilter;

  getOrganizationIdFilter(): OrganizationIDFilter | undefined;
  setOrganizationIdFilter(value?: OrganizationIDFilter): SearchFilter;
  hasOrganizationIdFilter(): boolean;
  clearOrganizationIdFilter(): SearchFilter;

  getUsernameFilter(): UsernameFilter | undefined;
  setUsernameFilter(value?: UsernameFilter): SearchFilter;
  hasUsernameFilter(): boolean;
  clearUsernameFilter(): SearchFilter;

  getEmailFilter(): EmailFilter | undefined;
  setEmailFilter(value?: EmailFilter): SearchFilter;
  hasEmailFilter(): boolean;
  clearEmailFilter(): SearchFilter;

  getPhoneFilter(): PhoneFilter | undefined;
  setPhoneFilter(value?: PhoneFilter): SearchFilter;
  hasPhoneFilter(): boolean;
  clearPhoneFilter(): SearchFilter;

  getStateFilter(): StateFilter | undefined;
  setStateFilter(value?: StateFilter): SearchFilter;
  hasStateFilter(): boolean;
  clearStateFilter(): SearchFilter;

  getSchemaIdFilter(): SchemaIDFilter | undefined;
  setSchemaIdFilter(value?: SchemaIDFilter): SearchFilter;
  hasSchemaIdFilter(): boolean;
  clearSchemaIdFilter(): SearchFilter;

  getSchemaTypeFilter(): SchemaTypeFilter | undefined;
  setSchemaTypeFilter(value?: SchemaTypeFilter): SearchFilter;
  hasSchemaTypeFilter(): boolean;
  clearSchemaTypeFilter(): SearchFilter;

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
    userIdFilter?: UserIDFilter.AsObject,
    organizationIdFilter?: OrganizationIDFilter.AsObject,
    usernameFilter?: UsernameFilter.AsObject,
    emailFilter?: EmailFilter.AsObject,
    phoneFilter?: PhoneFilter.AsObject,
    stateFilter?: StateFilter.AsObject,
    schemaIdFilter?: SchemaIDFilter.AsObject,
    schemaTypeFilter?: SchemaTypeFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    OR_FILTER = 1,
    AND_FILTER = 2,
    NOT_FILTER = 3,
    USER_ID_FILTER = 4,
    ORGANIZATION_ID_FILTER = 5,
    USERNAME_FILTER = 6,
    EMAIL_FILTER = 7,
    PHONE_FILTER = 8,
    STATE_FILTER = 9,
    SCHEMA_ID_FILTER = 10,
    SCHEMA_TYPE_FILTER = 11,
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
  getQuery(): SearchFilter | undefined;
  setQuery(value?: SearchFilter): NotFilter;
  hasQuery(): boolean;
  clearQuery(): NotFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NotFilter): NotFilter.AsObject;
  static serializeBinaryToWriter(message: NotFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotFilter;
  static deserializeBinaryFromReader(message: NotFilter, reader: jspb.BinaryReader): NotFilter;
}

export namespace NotFilter {
  export type AsObject = {
    query?: SearchFilter.AsObject,
  }
}

export class UserIDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): UserIDFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): UserIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserIDFilter): UserIDFilter.AsObject;
  static serializeBinaryToWriter(message: UserIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserIDFilter;
  static deserializeBinaryFromReader(message: UserIDFilter, reader: jspb.BinaryReader): UserIDFilter;
}

export namespace UserIDFilter {
  export type AsObject = {
    id: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class OrganizationIDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): OrganizationIDFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): OrganizationIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationIDFilter): OrganizationIDFilter.AsObject;
  static serializeBinaryToWriter(message: OrganizationIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationIDFilter;
  static deserializeBinaryFromReader(message: OrganizationIDFilter, reader: jspb.BinaryReader): OrganizationIDFilter;
}

export namespace OrganizationIDFilter {
  export type AsObject = {
    id: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class UsernameFilter extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UsernameFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): UsernameFilter;

  getIsOrganizationSpecific(): boolean;
  setIsOrganizationSpecific(value: boolean): UsernameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsernameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UsernameFilter): UsernameFilter.AsObject;
  static serializeBinaryToWriter(message: UsernameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsernameFilter;
  static deserializeBinaryFromReader(message: UsernameFilter, reader: jspb.BinaryReader): UsernameFilter;
}

export namespace UsernameFilter {
  export type AsObject = {
    username: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
    isOrganizationSpecific: boolean,
  }
}

export class EmailFilter extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): EmailFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): EmailFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EmailFilter): EmailFilter.AsObject;
  static serializeBinaryToWriter(message: EmailFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailFilter;
  static deserializeBinaryFromReader(message: EmailFilter, reader: jspb.BinaryReader): EmailFilter;
}

export namespace EmailFilter {
  export type AsObject = {
    address: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class PhoneFilter extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): PhoneFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): PhoneFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneFilter): PhoneFilter.AsObject;
  static serializeBinaryToWriter(message: PhoneFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneFilter;
  static deserializeBinaryFromReader(message: PhoneFilter, reader: jspb.BinaryReader): PhoneFilter;
}

export namespace PhoneFilter {
  export type AsObject = {
    number: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export class StateFilter extends jspb.Message {
  getState(): zitadel_resources_user_v3alpha_user_pb.State;
  setState(value: zitadel_resources_user_v3alpha_user_pb.State): StateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StateFilter): StateFilter.AsObject;
  static serializeBinaryToWriter(message: StateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateFilter;
  static deserializeBinaryFromReader(message: StateFilter, reader: jspb.BinaryReader): StateFilter;
}

export namespace StateFilter {
  export type AsObject = {
    state: zitadel_resources_user_v3alpha_user_pb.State,
  }
}

export class SchemaIDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): SchemaIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaIDFilter): SchemaIDFilter.AsObject;
  static serializeBinaryToWriter(message: SchemaIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaIDFilter;
  static deserializeBinaryFromReader(message: SchemaIDFilter, reader: jspb.BinaryReader): SchemaIDFilter;
}

export namespace SchemaIDFilter {
  export type AsObject = {
    id: string,
  }
}

export class SchemaTypeFilter extends jspb.Message {
  getType(): string;
  setType(value: string): SchemaTypeFilter;

  getMethod(): zitadel_resources_object_v3alpha_object_pb.TextFilterMethod;
  setMethod(value: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod): SchemaTypeFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaTypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaTypeFilter): SchemaTypeFilter.AsObject;
  static serializeBinaryToWriter(message: SchemaTypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaTypeFilter;
  static deserializeBinaryFromReader(message: SchemaTypeFilter, reader: jspb.BinaryReader): SchemaTypeFilter;
}

export namespace SchemaTypeFilter {
  export type AsObject = {
    type: string,
    method: zitadel_resources_object_v3alpha_object_pb.TextFilterMethod,
  }
}

export enum FieldName { 
  FIELD_NAME_UNSPECIFIED = 0,
  FIELD_NAME_ID = 1,
  FIELD_NAME_CREATION_DATE = 2,
  FIELD_NAME_CHANGE_DATE = 3,
  FIELD_NAME_EMAIL = 4,
  FIELD_NAME_PHONE = 5,
  FIELD_NAME_STATE = 6,
  FIELD_NAME_SCHEMA_ID = 7,
  FIELD_NAME_SCHEMA_TYPE = 8,
}
