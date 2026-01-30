import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"
import * as zitadel_internal_permission_v2beta_query_pb from '../../../zitadel/internal_permission/v2beta/query_pb'; // proto import: "zitadel/internal_permission/v2beta/query.proto"


export class ListAdministratorsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListAdministratorsRequest;
  hasPagination(): boolean;
  clearPagination(): ListAdministratorsRequest;

  getSortingColumn(): zitadel_internal_permission_v2beta_query_pb.AdministratorFieldName;
  setSortingColumn(value: zitadel_internal_permission_v2beta_query_pb.AdministratorFieldName): ListAdministratorsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListAdministratorsRequest;

  getFiltersList(): Array<zitadel_internal_permission_v2beta_query_pb.AdministratorSearchFilter>;
  setFiltersList(value: Array<zitadel_internal_permission_v2beta_query_pb.AdministratorSearchFilter>): ListAdministratorsRequest;
  clearFiltersList(): ListAdministratorsRequest;
  addFilters(value?: zitadel_internal_permission_v2beta_query_pb.AdministratorSearchFilter, index?: number): zitadel_internal_permission_v2beta_query_pb.AdministratorSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAdministratorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAdministratorsRequest): ListAdministratorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAdministratorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAdministratorsRequest;
  static deserializeBinaryFromReader(message: ListAdministratorsRequest, reader: jspb.BinaryReader): ListAdministratorsRequest;
}

export namespace ListAdministratorsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_internal_permission_v2beta_query_pb.AdministratorFieldName,
    filtersList: Array<zitadel_internal_permission_v2beta_query_pb.AdministratorSearchFilter.AsObject>,
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

export class ListAdministratorsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListAdministratorsResponse;
  hasPagination(): boolean;
  clearPagination(): ListAdministratorsResponse;

  getAdministratorsList(): Array<zitadel_internal_permission_v2beta_query_pb.Administrator>;
  setAdministratorsList(value: Array<zitadel_internal_permission_v2beta_query_pb.Administrator>): ListAdministratorsResponse;
  clearAdministratorsList(): ListAdministratorsResponse;
  addAdministrators(value?: zitadel_internal_permission_v2beta_query_pb.Administrator, index?: number): zitadel_internal_permission_v2beta_query_pb.Administrator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAdministratorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAdministratorsResponse): ListAdministratorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAdministratorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAdministratorsResponse;
  static deserializeBinaryFromReader(message: ListAdministratorsResponse, reader: jspb.BinaryReader): ListAdministratorsResponse;
}

export namespace ListAdministratorsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    administratorsList: Array<zitadel_internal_permission_v2beta_query_pb.Administrator.AsObject>,
  }
}

export class GetAdministratorRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAdministratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdministratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdministratorRequest): GetAdministratorRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdministratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdministratorRequest;
  static deserializeBinaryFromReader(message: GetAdministratorRequest, reader: jspb.BinaryReader): GetAdministratorRequest;
}

export namespace GetAdministratorRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetAdministratorResponse extends jspb.Message {
  getAdministrator(): zitadel_internal_permission_v2beta_query_pb.Administrator | undefined;
  setAdministrator(value?: zitadel_internal_permission_v2beta_query_pb.Administrator): GetAdministratorResponse;
  hasAdministrator(): boolean;
  clearAdministrator(): GetAdministratorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdministratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdministratorResponse): GetAdministratorResponse.AsObject;
  static serializeBinaryToWriter(message: GetAdministratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdministratorResponse;
  static deserializeBinaryFromReader(message: GetAdministratorResponse, reader: jspb.BinaryReader): GetAdministratorResponse;
}

export namespace GetAdministratorResponse {
  export type AsObject = {
    administrator?: zitadel_internal_permission_v2beta_query_pb.Administrator.AsObject,
  }
}

export class CreateAdministratorRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateAdministratorRequest;

  getResource(): ResourceType | undefined;
  setResource(value?: ResourceType): CreateAdministratorRequest;
  hasResource(): boolean;
  clearResource(): CreateAdministratorRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): CreateAdministratorRequest;
  clearRolesList(): CreateAdministratorRequest;
  addRoles(value: string, index?: number): CreateAdministratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdministratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdministratorRequest): CreateAdministratorRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAdministratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdministratorRequest;
  static deserializeBinaryFromReader(message: CreateAdministratorRequest, reader: jspb.BinaryReader): CreateAdministratorRequest;
}

export namespace CreateAdministratorRequest {
  export type AsObject = {
    userId: string,
    resource?: ResourceType.AsObject,
    rolesList: Array<string>,
  }
}

export class ResourceType extends jspb.Message {
  getInstance(): boolean;
  setInstance(value: boolean): ResourceType;

  getOrganizationId(): string;
  setOrganizationId(value: string): ResourceType;

  getProjectId(): string;
  setProjectId(value: string): ResourceType;

  getProjectGrant(): ResourceType.ProjectGrant | undefined;
  setProjectGrant(value?: ResourceType.ProjectGrant): ResourceType;
  hasProjectGrant(): boolean;
  clearProjectGrant(): ResourceType;

  getResourceCase(): ResourceType.ResourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceType.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceType): ResourceType.AsObject;
  static serializeBinaryToWriter(message: ResourceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceType;
  static deserializeBinaryFromReader(message: ResourceType, reader: jspb.BinaryReader): ResourceType;
}

export namespace ResourceType {
  export type AsObject = {
    instance: boolean,
    organizationId: string,
    projectId: string,
    projectGrant?: ResourceType.ProjectGrant.AsObject,
  }

  export class ProjectGrant extends jspb.Message {
    getProjectId(): string;
    setProjectId(value: string): ProjectGrant;

    getOrganizationId(): string;
    setOrganizationId(value: string): ProjectGrant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectGrant.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectGrant): ProjectGrant.AsObject;
    static serializeBinaryToWriter(message: ProjectGrant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectGrant;
    static deserializeBinaryFromReader(message: ProjectGrant, reader: jspb.BinaryReader): ProjectGrant;
  }

  export namespace ProjectGrant {
    export type AsObject = {
      projectId: string,
      organizationId: string,
    }
  }


  export enum ResourceCase { 
    RESOURCE_NOT_SET = 0,
    INSTANCE = 1,
    ORGANIZATION_ID = 2,
    PROJECT_ID = 3,
    PROJECT_GRANT = 4,
  }
}

export class CreateAdministratorResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateAdministratorResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateAdministratorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdministratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdministratorResponse): CreateAdministratorResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAdministratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdministratorResponse;
  static deserializeBinaryFromReader(message: CreateAdministratorResponse, reader: jspb.BinaryReader): CreateAdministratorResponse;
}

export namespace CreateAdministratorResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateAdministratorRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UpdateAdministratorRequest;

  getResource(): ResourceType | undefined;
  setResource(value?: ResourceType): UpdateAdministratorRequest;
  hasResource(): boolean;
  clearResource(): UpdateAdministratorRequest;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): UpdateAdministratorRequest;
  clearRolesList(): UpdateAdministratorRequest;
  addRoles(value: string, index?: number): UpdateAdministratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdministratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdministratorRequest): UpdateAdministratorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAdministratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdministratorRequest;
  static deserializeBinaryFromReader(message: UpdateAdministratorRequest, reader: jspb.BinaryReader): UpdateAdministratorRequest;
}

export namespace UpdateAdministratorRequest {
  export type AsObject = {
    userId: string,
    resource?: ResourceType.AsObject,
    rolesList: Array<string>,
  }
}

export class UpdateAdministratorResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateAdministratorResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateAdministratorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAdministratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAdministratorResponse): UpdateAdministratorResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAdministratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAdministratorResponse;
  static deserializeBinaryFromReader(message: UpdateAdministratorResponse, reader: jspb.BinaryReader): UpdateAdministratorResponse;
}

export namespace UpdateAdministratorResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteAdministratorRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DeleteAdministratorRequest;

  getResource(): ResourceType | undefined;
  setResource(value?: ResourceType): DeleteAdministratorRequest;
  hasResource(): boolean;
  clearResource(): DeleteAdministratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAdministratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAdministratorRequest): DeleteAdministratorRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAdministratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAdministratorRequest;
  static deserializeBinaryFromReader(message: DeleteAdministratorRequest, reader: jspb.BinaryReader): DeleteAdministratorRequest;
}

export namespace DeleteAdministratorRequest {
  export type AsObject = {
    userId: string,
    resource?: ResourceType.AsObject,
  }
}

export class DeleteAdministratorResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteAdministratorResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteAdministratorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAdministratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAdministratorResponse): DeleteAdministratorResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAdministratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAdministratorResponse;
  static deserializeBinaryFromReader(message: DeleteAdministratorResponse, reader: jspb.BinaryReader): DeleteAdministratorResponse;
}

export namespace DeleteAdministratorResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

