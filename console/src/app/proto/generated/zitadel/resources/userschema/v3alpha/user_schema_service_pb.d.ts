import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v3alpha_object_pb from '../../../../zitadel/object/v3alpha/object_pb'; // proto import: "zitadel/object/v3alpha/object.proto"
import * as zitadel_resources_object_v3alpha_object_pb from '../../../../zitadel/resources/object/v3alpha/object_pb'; // proto import: "zitadel/resources/object/v3alpha/object.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_resources_userschema_v3alpha_user_schema_pb from '../../../../zitadel/resources/userschema/v3alpha/user_schema_pb'; // proto import: "zitadel/resources/userschema/v3alpha/user_schema.proto"


export class SearchUserSchemasRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): SearchUserSchemasRequest;
  hasInstance(): boolean;
  clearInstance(): SearchUserSchemasRequest;

  getQuery(): zitadel_resources_object_v3alpha_object_pb.SearchQuery | undefined;
  setQuery(value?: zitadel_resources_object_v3alpha_object_pb.SearchQuery): SearchUserSchemasRequest;
  hasQuery(): boolean;
  clearQuery(): SearchUserSchemasRequest;

  getSortingColumn(): zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName;
  setSortingColumn(value: zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName): SearchUserSchemasRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): SearchUserSchemasRequest;

  getFiltersList(): Array<zitadel_resources_userschema_v3alpha_user_schema_pb.SearchFilter>;
  setFiltersList(value: Array<zitadel_resources_userschema_v3alpha_user_schema_pb.SearchFilter>): SearchUserSchemasRequest;
  clearFiltersList(): SearchUserSchemasRequest;
  addFilters(value?: zitadel_resources_userschema_v3alpha_user_schema_pb.SearchFilter, index?: number): zitadel_resources_userschema_v3alpha_user_schema_pb.SearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserSchemasRequest): SearchUserSchemasRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUserSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserSchemasRequest;
  static deserializeBinaryFromReader(message: SearchUserSchemasRequest, reader: jspb.BinaryReader): SearchUserSchemasRequest;
}

export namespace SearchUserSchemasRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    query?: zitadel_resources_object_v3alpha_object_pb.SearchQuery.AsObject,
    sortingColumn?: zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName,
    filtersList: Array<zitadel_resources_userschema_v3alpha_user_schema_pb.SearchFilter.AsObject>,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum QueryCase { 
    _QUERY_NOT_SET = 0,
    QUERY = 2,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 3,
  }
}

export class SearchUserSchemasResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.ListDetails | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.ListDetails): SearchUserSchemasResponse;
  hasDetails(): boolean;
  clearDetails(): SearchUserSchemasResponse;

  getSortingColumn(): zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName;
  setSortingColumn(value: zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName): SearchUserSchemasResponse;

  getResultList(): Array<zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema>;
  setResultList(value: Array<zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema>): SearchUserSchemasResponse;
  clearResultList(): SearchUserSchemasResponse;
  addResult(value?: zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema, index?: number): zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserSchemasResponse): SearchUserSchemasResponse.AsObject;
  static serializeBinaryToWriter(message: SearchUserSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserSchemasResponse;
  static deserializeBinaryFromReader(message: SearchUserSchemasResponse, reader: jspb.BinaryReader): SearchUserSchemasResponse;
}

export namespace SearchUserSchemasResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.ListDetails.AsObject,
    sortingColumn: zitadel_resources_userschema_v3alpha_user_schema_pb.FieldName,
    resultList: Array<zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema.AsObject>,
  }
}

export class GetUserSchemaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSchemaRequest): GetUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSchemaRequest;
  static deserializeBinaryFromReader(message: GetUserSchemaRequest, reader: jspb.BinaryReader): GetUserSchemaRequest;
}

export namespace GetUserSchemaRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserSchemaResponse extends jspb.Message {
  getUserSchema(): zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema | undefined;
  setUserSchema(value?: zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema): GetUserSchemaResponse;
  hasUserSchema(): boolean;
  clearUserSchema(): GetUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserSchemaResponse): GetUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserSchemaResponse;
  static deserializeBinaryFromReader(message: GetUserSchemaResponse, reader: jspb.BinaryReader): GetUserSchemaResponse;
}

export namespace GetUserSchemaResponse {
  export type AsObject = {
    userSchema?: zitadel_resources_userschema_v3alpha_user_schema_pb.GetUserSchema.AsObject,
  }
}

export class CreateUserSchemaRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): CreateUserSchemaRequest;
  hasInstance(): boolean;
  clearInstance(): CreateUserSchemaRequest;

  getUserSchema(): zitadel_resources_userschema_v3alpha_user_schema_pb.UserSchema | undefined;
  setUserSchema(value?: zitadel_resources_userschema_v3alpha_user_schema_pb.UserSchema): CreateUserSchemaRequest;
  hasUserSchema(): boolean;
  clearUserSchema(): CreateUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserSchemaRequest): CreateUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserSchemaRequest;
  static deserializeBinaryFromReader(message: CreateUserSchemaRequest, reader: jspb.BinaryReader): CreateUserSchemaRequest;
}

export namespace CreateUserSchemaRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    userSchema?: zitadel_resources_userschema_v3alpha_user_schema_pb.UserSchema.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class CreateUserSchemaResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): CreateUserSchemaResponse;
  hasDetails(): boolean;
  clearDetails(): CreateUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserSchemaResponse): CreateUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserSchemaResponse;
  static deserializeBinaryFromReader(message: CreateUserSchemaResponse, reader: jspb.BinaryReader): CreateUserSchemaResponse;
}

export namespace CreateUserSchemaResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class PatchUserSchemaRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): PatchUserSchemaRequest;
  hasInstance(): boolean;
  clearInstance(): PatchUserSchemaRequest;

  getId(): string;
  setId(value: string): PatchUserSchemaRequest;

  getUserSchema(): zitadel_resources_userschema_v3alpha_user_schema_pb.PatchUserSchema | undefined;
  setUserSchema(value?: zitadel_resources_userschema_v3alpha_user_schema_pb.PatchUserSchema): PatchUserSchemaRequest;
  hasUserSchema(): boolean;
  clearUserSchema(): PatchUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserSchemaRequest): PatchUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: PatchUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserSchemaRequest;
  static deserializeBinaryFromReader(message: PatchUserSchemaRequest, reader: jspb.BinaryReader): PatchUserSchemaRequest;
}

export namespace PatchUserSchemaRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    id: string,
    userSchema?: zitadel_resources_userschema_v3alpha_user_schema_pb.PatchUserSchema.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class PatchUserSchemaResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): PatchUserSchemaResponse;
  hasDetails(): boolean;
  clearDetails(): PatchUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserSchemaResponse): PatchUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: PatchUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserSchemaResponse;
  static deserializeBinaryFromReader(message: PatchUserSchemaResponse, reader: jspb.BinaryReader): PatchUserSchemaResponse;
}

export namespace PatchUserSchemaResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class DeactivateUserSchemaRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): DeactivateUserSchemaRequest;
  hasInstance(): boolean;
  clearInstance(): DeactivateUserSchemaRequest;

  getId(): string;
  setId(value: string): DeactivateUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateUserSchemaRequest): DeactivateUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateUserSchemaRequest;
  static deserializeBinaryFromReader(message: DeactivateUserSchemaRequest, reader: jspb.BinaryReader): DeactivateUserSchemaRequest;
}

export namespace DeactivateUserSchemaRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 2,
  }
}

export class DeactivateUserSchemaResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): DeactivateUserSchemaResponse;
  hasDetails(): boolean;
  clearDetails(): DeactivateUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateUserSchemaResponse): DeactivateUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateUserSchemaResponse;
  static deserializeBinaryFromReader(message: DeactivateUserSchemaResponse, reader: jspb.BinaryReader): DeactivateUserSchemaResponse;
}

export namespace DeactivateUserSchemaResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class ReactivateUserSchemaRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): ReactivateUserSchemaRequest;
  hasInstance(): boolean;
  clearInstance(): ReactivateUserSchemaRequest;

  getId(): string;
  setId(value: string): ReactivateUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateUserSchemaRequest): ReactivateUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: ReactivateUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateUserSchemaRequest;
  static deserializeBinaryFromReader(message: ReactivateUserSchemaRequest, reader: jspb.BinaryReader): ReactivateUserSchemaRequest;
}

export namespace ReactivateUserSchemaRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 2,
  }
}

export class ReactivateUserSchemaResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): ReactivateUserSchemaResponse;
  hasDetails(): boolean;
  clearDetails(): ReactivateUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactivateUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReactivateUserSchemaResponse): ReactivateUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: ReactivateUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactivateUserSchemaResponse;
  static deserializeBinaryFromReader(message: ReactivateUserSchemaResponse, reader: jspb.BinaryReader): ReactivateUserSchemaResponse;
}

export namespace ReactivateUserSchemaResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class DeleteUserSchemaRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): DeleteUserSchemaRequest;
  hasInstance(): boolean;
  clearInstance(): DeleteUserSchemaRequest;

  getId(): string;
  setId(value: string): DeleteUserSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserSchemaRequest): DeleteUserSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserSchemaRequest;
  static deserializeBinaryFromReader(message: DeleteUserSchemaRequest, reader: jspb.BinaryReader): DeleteUserSchemaRequest;
}

export namespace DeleteUserSchemaRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 2,
  }
}

export class DeleteUserSchemaResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): DeleteUserSchemaResponse;
  hasDetails(): boolean;
  clearDetails(): DeleteUserSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserSchemaResponse): DeleteUserSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserSchemaResponse;
  static deserializeBinaryFromReader(message: DeleteUserSchemaResponse, reader: jspb.BinaryReader): DeleteUserSchemaResponse;
}

export namespace DeleteUserSchemaResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

