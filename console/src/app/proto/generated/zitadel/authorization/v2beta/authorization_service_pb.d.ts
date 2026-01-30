import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_authorization_v2beta_authorization_pb from '../../../zitadel/authorization/v2beta/authorization_pb'; // proto import: "zitadel/authorization/v2beta/authorization.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"


export class ListAuthorizationsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListAuthorizationsRequest;
  hasPagination(): boolean;
  clearPagination(): ListAuthorizationsRequest;

  getSortingColumn(): zitadel_authorization_v2beta_authorization_pb.AuthorizationFieldName;
  setSortingColumn(value: zitadel_authorization_v2beta_authorization_pb.AuthorizationFieldName): ListAuthorizationsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListAuthorizationsRequest;

  getFiltersList(): Array<zitadel_authorization_v2beta_authorization_pb.AuthorizationsSearchFilter>;
  setFiltersList(value: Array<zitadel_authorization_v2beta_authorization_pb.AuthorizationsSearchFilter>): ListAuthorizationsRequest;
  clearFiltersList(): ListAuthorizationsRequest;
  addFilters(value?: zitadel_authorization_v2beta_authorization_pb.AuthorizationsSearchFilter, index?: number): zitadel_authorization_v2beta_authorization_pb.AuthorizationsSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorizationsRequest): ListAuthorizationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAuthorizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorizationsRequest;
  static deserializeBinaryFromReader(message: ListAuthorizationsRequest, reader: jspb.BinaryReader): ListAuthorizationsRequest;
}

export namespace ListAuthorizationsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_authorization_v2beta_authorization_pb.AuthorizationFieldName,
    filtersList: Array<zitadel_authorization_v2beta_authorization_pb.AuthorizationsSearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 1,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 2,
  }
}

export class ListAuthorizationsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListAuthorizationsResponse;
  hasPagination(): boolean;
  clearPagination(): ListAuthorizationsResponse;

  getAuthorizationsList(): Array<zitadel_authorization_v2beta_authorization_pb.Authorization>;
  setAuthorizationsList(value: Array<zitadel_authorization_v2beta_authorization_pb.Authorization>): ListAuthorizationsResponse;
  clearAuthorizationsList(): ListAuthorizationsResponse;
  addAuthorizations(value?: zitadel_authorization_v2beta_authorization_pb.Authorization, index?: number): zitadel_authorization_v2beta_authorization_pb.Authorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorizationsResponse): ListAuthorizationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAuthorizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorizationsResponse;
  static deserializeBinaryFromReader(message: ListAuthorizationsResponse, reader: jspb.BinaryReader): ListAuthorizationsResponse;
}

export namespace ListAuthorizationsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    authorizationsList: Array<zitadel_authorization_v2beta_authorization_pb.Authorization.AsObject>,
  }
}

export class CreateAuthorizationRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateAuthorizationRequest;

  getProjectId(): string;
  setProjectId(value: string): CreateAuthorizationRequest;

  getOrganizationId(): string;
  setOrganizationId(value: string): CreateAuthorizationRequest;
  hasOrganizationId(): boolean;
  clearOrganizationId(): CreateAuthorizationRequest;

  getRoleKeysList(): Array<string>;
  setRoleKeysList(value: Array<string>): CreateAuthorizationRequest;
  clearRoleKeysList(): CreateAuthorizationRequest;
  addRoleKeys(value: string, index?: number): CreateAuthorizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthorizationRequest): CreateAuthorizationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthorizationRequest;
  static deserializeBinaryFromReader(message: CreateAuthorizationRequest, reader: jspb.BinaryReader): CreateAuthorizationRequest;
}

export namespace CreateAuthorizationRequest {
  export type AsObject = {
    userId: string,
    projectId: string,
    organizationId?: string,
    roleKeysList: Array<string>,
  }

  export enum OrganizationIdCase { 
    _ORGANIZATION_ID_NOT_SET = 0,
    ORGANIZATION_ID = 3,
  }
}

export class CreateAuthorizationResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateAuthorizationResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateAuthorizationResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateAuthorizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAuthorizationResponse): CreateAuthorizationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAuthorizationResponse;
  static deserializeBinaryFromReader(message: CreateAuthorizationResponse, reader: jspb.BinaryReader): CreateAuthorizationResponse;
}

export namespace CreateAuthorizationResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateAuthorizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateAuthorizationRequest;

  getRoleKeysList(): Array<string>;
  setRoleKeysList(value: Array<string>): UpdateAuthorizationRequest;
  clearRoleKeysList(): UpdateAuthorizationRequest;
  addRoleKeys(value: string, index?: number): UpdateAuthorizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthorizationRequest): UpdateAuthorizationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthorizationRequest;
  static deserializeBinaryFromReader(message: UpdateAuthorizationRequest, reader: jspb.BinaryReader): UpdateAuthorizationRequest;
}

export namespace UpdateAuthorizationRequest {
  export type AsObject = {
    id: string,
    roleKeysList: Array<string>,
  }
}

export class UpdateAuthorizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateAuthorizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateAuthorizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAuthorizationResponse): UpdateAuthorizationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAuthorizationResponse;
  static deserializeBinaryFromReader(message: UpdateAuthorizationResponse, reader: jspb.BinaryReader): UpdateAuthorizationResponse;
}

export namespace UpdateAuthorizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteAuthorizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteAuthorizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthorizationRequest): DeleteAuthorizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthorizationRequest;
  static deserializeBinaryFromReader(message: DeleteAuthorizationRequest, reader: jspb.BinaryReader): DeleteAuthorizationRequest;
}

export namespace DeleteAuthorizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteAuthorizationResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteAuthorizationResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteAuthorizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAuthorizationResponse): DeleteAuthorizationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAuthorizationResponse;
  static deserializeBinaryFromReader(message: DeleteAuthorizationResponse, reader: jspb.BinaryReader): DeleteAuthorizationResponse;
}

export namespace DeleteAuthorizationResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivateAuthorizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ActivateAuthorizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateAuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateAuthorizationRequest): ActivateAuthorizationRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateAuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateAuthorizationRequest;
  static deserializeBinaryFromReader(message: ActivateAuthorizationRequest, reader: jspb.BinaryReader): ActivateAuthorizationRequest;
}

export namespace ActivateAuthorizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class ActivateAuthorizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivateAuthorizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivateAuthorizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateAuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateAuthorizationResponse): ActivateAuthorizationResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateAuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateAuthorizationResponse;
  static deserializeBinaryFromReader(message: ActivateAuthorizationResponse, reader: jspb.BinaryReader): ActivateAuthorizationResponse;
}

export namespace ActivateAuthorizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeactivateAuthorizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeactivateAuthorizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateAuthorizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateAuthorizationRequest): DeactivateAuthorizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateAuthorizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateAuthorizationRequest;
  static deserializeBinaryFromReader(message: DeactivateAuthorizationRequest, reader: jspb.BinaryReader): DeactivateAuthorizationRequest;
}

export namespace DeactivateAuthorizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeactivateAuthorizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivateAuthorizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): DeactivateAuthorizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateAuthorizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateAuthorizationResponse): DeactivateAuthorizationResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateAuthorizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateAuthorizationResponse;
  static deserializeBinaryFromReader(message: DeactivateAuthorizationResponse, reader: jspb.BinaryReader): DeactivateAuthorizationResponse;
}

export namespace DeactivateAuthorizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

