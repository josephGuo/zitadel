import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_project_v2beta_query_pb from '../../../zitadel/project/v2beta/query_pb'; // proto import: "zitadel/project/v2beta/query.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"


export class CreateProjectRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): CreateProjectRequest;

  getId(): string;
  setId(value: string): CreateProjectRequest;
  hasId(): boolean;
  clearId(): CreateProjectRequest;

  getName(): string;
  setName(value: string): CreateProjectRequest;

  getProjectRoleAssertion(): boolean;
  setProjectRoleAssertion(value: boolean): CreateProjectRequest;

  getAuthorizationRequired(): boolean;
  setAuthorizationRequired(value: boolean): CreateProjectRequest;

  getProjectAccessRequired(): boolean;
  setProjectAccessRequired(value: boolean): CreateProjectRequest;

  getPrivateLabelingSetting(): zitadel_project_v2beta_query_pb.PrivateLabelingSetting;
  setPrivateLabelingSetting(value: zitadel_project_v2beta_query_pb.PrivateLabelingSetting): CreateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    organizationId: string,
    id?: string,
    name: string,
    projectRoleAssertion: boolean,
    authorizationRequired: boolean,
    projectAccessRequired: boolean,
    privateLabelingSetting: zitadel_project_v2beta_query_pb.PrivateLabelingSetting,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 2,
  }
}

export class CreateProjectResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateProjectResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateProjectResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResponse): CreateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResponse;
  static deserializeBinaryFromReader(message: CreateProjectResponse, reader: jspb.BinaryReader): CreateProjectResponse;
}

export namespace CreateProjectResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProjectRequest;

  getName(): string;
  setName(value: string): UpdateProjectRequest;
  hasName(): boolean;
  clearName(): UpdateProjectRequest;

  getProjectRoleAssertion(): boolean;
  setProjectRoleAssertion(value: boolean): UpdateProjectRequest;
  hasProjectRoleAssertion(): boolean;
  clearProjectRoleAssertion(): UpdateProjectRequest;

  getProjectRoleCheck(): boolean;
  setProjectRoleCheck(value: boolean): UpdateProjectRequest;
  hasProjectRoleCheck(): boolean;
  clearProjectRoleCheck(): UpdateProjectRequest;

  getHasProjectCheck(): boolean;
  setHasProjectCheck(value: boolean): UpdateProjectRequest;
  hasHasProjectCheck(): boolean;
  clearHasProjectCheck(): UpdateProjectRequest;

  getPrivateLabelingSetting(): zitadel_project_v2beta_query_pb.PrivateLabelingSetting;
  setPrivateLabelingSetting(value: zitadel_project_v2beta_query_pb.PrivateLabelingSetting): UpdateProjectRequest;
  hasPrivateLabelingSetting(): boolean;
  clearPrivateLabelingSetting(): UpdateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    id: string,
    name?: string,
    projectRoleAssertion?: boolean,
    projectRoleCheck?: boolean,
    hasProjectCheck?: boolean,
    privateLabelingSetting?: zitadel_project_v2beta_query_pb.PrivateLabelingSetting,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum ProjectRoleAssertionCase { 
    _PROJECT_ROLE_ASSERTION_NOT_SET = 0,
    PROJECT_ROLE_ASSERTION = 3,
  }

  export enum ProjectRoleCheckCase { 
    _PROJECT_ROLE_CHECK_NOT_SET = 0,
    PROJECT_ROLE_CHECK = 4,
  }

  export enum HasProjectCheckCase { 
    _HAS_PROJECT_CHECK_NOT_SET = 0,
    HAS_PROJECT_CHECK = 5,
  }

  export enum PrivateLabelingSettingCase { 
    _PRIVATE_LABELING_SETTING_NOT_SET = 0,
    PRIVATE_LABELING_SETTING = 6,
  }
}

export class UpdateProjectResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateProjectResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectResponse): UpdateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectResponse;
  static deserializeBinaryFromReader(message: UpdateProjectResponse, reader: jspb.BinaryReader): UpdateProjectResponse;
}

export namespace UpdateProjectResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectRequest): DeleteProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectRequest;
  static deserializeBinaryFromReader(message: DeleteProjectRequest, reader: jspb.BinaryReader): DeleteProjectRequest;
}

export namespace DeleteProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteProjectResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteProjectResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectResponse): DeleteProjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectResponse;
  static deserializeBinaryFromReader(message: DeleteProjectResponse, reader: jspb.BinaryReader): DeleteProjectResponse;
}

export namespace DeleteProjectResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetProjectResponse extends jspb.Message {
  getProject(): zitadel_project_v2beta_query_pb.Project | undefined;
  setProject(value?: zitadel_project_v2beta_query_pb.Project): GetProjectResponse;
  hasProject(): boolean;
  clearProject(): GetProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

export namespace GetProjectResponse {
  export type AsObject = {
    project?: zitadel_project_v2beta_query_pb.Project.AsObject,
  }
}

export class ListProjectsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListProjectsRequest;
  hasPagination(): boolean;
  clearPagination(): ListProjectsRequest;

  getSortingColumn(): zitadel_project_v2beta_query_pb.ProjectFieldName;
  setSortingColumn(value: zitadel_project_v2beta_query_pb.ProjectFieldName): ListProjectsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListProjectsRequest;

  getFiltersList(): Array<zitadel_project_v2beta_query_pb.ProjectSearchFilter>;
  setFiltersList(value: Array<zitadel_project_v2beta_query_pb.ProjectSearchFilter>): ListProjectsRequest;
  clearFiltersList(): ListProjectsRequest;
  addFilters(value?: zitadel_project_v2beta_query_pb.ProjectSearchFilter, index?: number): zitadel_project_v2beta_query_pb.ProjectSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsRequest): ListProjectsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsRequest;
  static deserializeBinaryFromReader(message: ListProjectsRequest, reader: jspb.BinaryReader): ListProjectsRequest;
}

export namespace ListProjectsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_project_v2beta_query_pb.ProjectFieldName,
    filtersList: Array<zitadel_project_v2beta_query_pb.ProjectSearchFilter.AsObject>,
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

export class ListProjectsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListProjectsResponse;
  hasPagination(): boolean;
  clearPagination(): ListProjectsResponse;

  getProjectsList(): Array<zitadel_project_v2beta_query_pb.Project>;
  setProjectsList(value: Array<zitadel_project_v2beta_query_pb.Project>): ListProjectsResponse;
  clearProjectsList(): ListProjectsResponse;
  addProjects(value?: zitadel_project_v2beta_query_pb.Project, index?: number): zitadel_project_v2beta_query_pb.Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectsResponse): ListProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectsResponse;
  static deserializeBinaryFromReader(message: ListProjectsResponse, reader: jspb.BinaryReader): ListProjectsResponse;
}

export namespace ListProjectsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    projectsList: Array<zitadel_project_v2beta_query_pb.Project.AsObject>,
  }
}

export class DeactivateProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeactivateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateProjectRequest): DeactivateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateProjectRequest;
  static deserializeBinaryFromReader(message: DeactivateProjectRequest, reader: jspb.BinaryReader): DeactivateProjectRequest;
}

export namespace DeactivateProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeactivateProjectResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivateProjectResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): DeactivateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateProjectResponse): DeactivateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateProjectResponse;
  static deserializeBinaryFromReader(message: DeactivateProjectResponse, reader: jspb.BinaryReader): DeactivateProjectResponse;
}

export namespace DeactivateProjectResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivateProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ActivateProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateProjectRequest): ActivateProjectRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateProjectRequest;
  static deserializeBinaryFromReader(message: ActivateProjectRequest, reader: jspb.BinaryReader): ActivateProjectRequest;
}

export namespace ActivateProjectRequest {
  export type AsObject = {
    id: string,
  }
}

export class ActivateProjectResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivateProjectResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivateProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateProjectResponse): ActivateProjectResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateProjectResponse;
  static deserializeBinaryFromReader(message: ActivateProjectResponse, reader: jspb.BinaryReader): ActivateProjectResponse;
}

export namespace ActivateProjectResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AddProjectRoleRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): AddProjectRoleRequest;

  getRoleKey(): string;
  setRoleKey(value: string): AddProjectRoleRequest;

  getDisplayName(): string;
  setDisplayName(value: string): AddProjectRoleRequest;

  getGroup(): string;
  setGroup(value: string): AddProjectRoleRequest;
  hasGroup(): boolean;
  clearGroup(): AddProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddProjectRoleRequest): AddProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: AddProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProjectRoleRequest;
  static deserializeBinaryFromReader(message: AddProjectRoleRequest, reader: jspb.BinaryReader): AddProjectRoleRequest;
}

export namespace AddProjectRoleRequest {
  export type AsObject = {
    projectId: string,
    roleKey: string,
    displayName: string,
    group?: string,
  }

  export enum GroupCase { 
    _GROUP_NOT_SET = 0,
    GROUP = 4,
  }
}

export class AddProjectRoleResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddProjectRoleResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): AddProjectRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProjectRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddProjectRoleResponse): AddProjectRoleResponse.AsObject;
  static serializeBinaryToWriter(message: AddProjectRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProjectRoleResponse;
  static deserializeBinaryFromReader(message: AddProjectRoleResponse, reader: jspb.BinaryReader): AddProjectRoleResponse;
}

export namespace AddProjectRoleResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateProjectRoleRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateProjectRoleRequest;

  getRoleKey(): string;
  setRoleKey(value: string): UpdateProjectRoleRequest;

  getDisplayName(): string;
  setDisplayName(value: string): UpdateProjectRoleRequest;
  hasDisplayName(): boolean;
  clearDisplayName(): UpdateProjectRoleRequest;

  getGroup(): string;
  setGroup(value: string): UpdateProjectRoleRequest;
  hasGroup(): boolean;
  clearGroup(): UpdateProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRoleRequest): UpdateProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRoleRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRoleRequest, reader: jspb.BinaryReader): UpdateProjectRoleRequest;
}

export namespace UpdateProjectRoleRequest {
  export type AsObject = {
    projectId: string,
    roleKey: string,
    displayName?: string,
    group?: string,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 3,
  }

  export enum GroupCase { 
    _GROUP_NOT_SET = 0,
    GROUP = 4,
  }
}

export class UpdateProjectRoleResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateProjectRoleResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateProjectRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRoleResponse): UpdateProjectRoleResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRoleResponse;
  static deserializeBinaryFromReader(message: UpdateProjectRoleResponse, reader: jspb.BinaryReader): UpdateProjectRoleResponse;
}

export namespace UpdateProjectRoleResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RemoveProjectRoleRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): RemoveProjectRoleRequest;

  getRoleKey(): string;
  setRoleKey(value: string): RemoveProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProjectRoleRequest): RemoveProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProjectRoleRequest;
  static deserializeBinaryFromReader(message: RemoveProjectRoleRequest, reader: jspb.BinaryReader): RemoveProjectRoleRequest;
}

export namespace RemoveProjectRoleRequest {
  export type AsObject = {
    projectId: string,
    roleKey: string,
  }
}

export class RemoveProjectRoleResponse extends jspb.Message {
  getRemovalDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRemovalDate(value?: google_protobuf_timestamp_pb.Timestamp): RemoveProjectRoleResponse;
  hasRemovalDate(): boolean;
  clearRemovalDate(): RemoveProjectRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProjectRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProjectRoleResponse): RemoveProjectRoleResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveProjectRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProjectRoleResponse;
  static deserializeBinaryFromReader(message: RemoveProjectRoleResponse, reader: jspb.BinaryReader): RemoveProjectRoleResponse;
}

export namespace RemoveProjectRoleResponse {
  export type AsObject = {
    removalDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListProjectRolesRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListProjectRolesRequest;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListProjectRolesRequest;
  hasPagination(): boolean;
  clearPagination(): ListProjectRolesRequest;

  getSortingColumn(): zitadel_project_v2beta_query_pb.ProjectRoleFieldName;
  setSortingColumn(value: zitadel_project_v2beta_query_pb.ProjectRoleFieldName): ListProjectRolesRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListProjectRolesRequest;

  getFiltersList(): Array<zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter>;
  setFiltersList(value: Array<zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter>): ListProjectRolesRequest;
  clearFiltersList(): ListProjectRolesRequest;
  addFilters(value?: zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter, index?: number): zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRolesRequest): ListProjectRolesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRolesRequest;
  static deserializeBinaryFromReader(message: ListProjectRolesRequest, reader: jspb.BinaryReader): ListProjectRolesRequest;
}

export namespace ListProjectRolesRequest {
  export type AsObject = {
    projectId: string,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_project_v2beta_query_pb.ProjectRoleFieldName,
    filtersList: Array<zitadel_project_v2beta_query_pb.ProjectRoleSearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 3,
  }
}

export class ListProjectRolesResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListProjectRolesResponse;
  hasPagination(): boolean;
  clearPagination(): ListProjectRolesResponse;

  getProjectRolesList(): Array<zitadel_project_v2beta_query_pb.ProjectRole>;
  setProjectRolesList(value: Array<zitadel_project_v2beta_query_pb.ProjectRole>): ListProjectRolesResponse;
  clearProjectRolesList(): ListProjectRolesResponse;
  addProjectRoles(value?: zitadel_project_v2beta_query_pb.ProjectRole, index?: number): zitadel_project_v2beta_query_pb.ProjectRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRolesResponse): ListProjectRolesResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRolesResponse;
  static deserializeBinaryFromReader(message: ListProjectRolesResponse, reader: jspb.BinaryReader): ListProjectRolesResponse;
}

export namespace ListProjectRolesResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    projectRolesList: Array<zitadel_project_v2beta_query_pb.ProjectRole.AsObject>,
  }
}

export class CreateProjectGrantRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateProjectGrantRequest;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): CreateProjectGrantRequest;

  getRoleKeysList(): Array<string>;
  setRoleKeysList(value: Array<string>): CreateProjectGrantRequest;
  clearRoleKeysList(): CreateProjectGrantRequest;
  addRoleKeys(value: string, index?: number): CreateProjectGrantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectGrantRequest): CreateProjectGrantRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectGrantRequest;
  static deserializeBinaryFromReader(message: CreateProjectGrantRequest, reader: jspb.BinaryReader): CreateProjectGrantRequest;
}

export namespace CreateProjectGrantRequest {
  export type AsObject = {
    projectId: string,
    grantedOrganizationId: string,
    roleKeysList: Array<string>,
  }
}

export class CreateProjectGrantResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateProjectGrantResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateProjectGrantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectGrantResponse): CreateProjectGrantResponse.AsObject;
  static serializeBinaryToWriter(message: CreateProjectGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectGrantResponse;
  static deserializeBinaryFromReader(message: CreateProjectGrantResponse, reader: jspb.BinaryReader): CreateProjectGrantResponse;
}

export namespace CreateProjectGrantResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateProjectGrantRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateProjectGrantRequest;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): UpdateProjectGrantRequest;

  getRoleKeysList(): Array<string>;
  setRoleKeysList(value: Array<string>): UpdateProjectGrantRequest;
  clearRoleKeysList(): UpdateProjectGrantRequest;
  addRoleKeys(value: string, index?: number): UpdateProjectGrantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectGrantRequest): UpdateProjectGrantRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectGrantRequest;
  static deserializeBinaryFromReader(message: UpdateProjectGrantRequest, reader: jspb.BinaryReader): UpdateProjectGrantRequest;
}

export namespace UpdateProjectGrantRequest {
  export type AsObject = {
    projectId: string,
    grantedOrganizationId: string,
    roleKeysList: Array<string>,
  }
}

export class UpdateProjectGrantResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateProjectGrantResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateProjectGrantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectGrantResponse): UpdateProjectGrantResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectGrantResponse;
  static deserializeBinaryFromReader(message: UpdateProjectGrantResponse, reader: jspb.BinaryReader): UpdateProjectGrantResponse;
}

export namespace UpdateProjectGrantResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteProjectGrantRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteProjectGrantRequest;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): DeleteProjectGrantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectGrantRequest): DeleteProjectGrantRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectGrantRequest;
  static deserializeBinaryFromReader(message: DeleteProjectGrantRequest, reader: jspb.BinaryReader): DeleteProjectGrantRequest;
}

export namespace DeleteProjectGrantRequest {
  export type AsObject = {
    projectId: string,
    grantedOrganizationId: string,
  }
}

export class DeleteProjectGrantResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteProjectGrantResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteProjectGrantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectGrantResponse): DeleteProjectGrantResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectGrantResponse;
  static deserializeBinaryFromReader(message: DeleteProjectGrantResponse, reader: jspb.BinaryReader): DeleteProjectGrantResponse;
}

export namespace DeleteProjectGrantResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeactivateProjectGrantRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeactivateProjectGrantRequest;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): DeactivateProjectGrantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateProjectGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateProjectGrantRequest): DeactivateProjectGrantRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateProjectGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateProjectGrantRequest;
  static deserializeBinaryFromReader(message: DeactivateProjectGrantRequest, reader: jspb.BinaryReader): DeactivateProjectGrantRequest;
}

export namespace DeactivateProjectGrantRequest {
  export type AsObject = {
    projectId: string,
    grantedOrganizationId: string,
  }
}

export class DeactivateProjectGrantResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivateProjectGrantResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): DeactivateProjectGrantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateProjectGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateProjectGrantResponse): DeactivateProjectGrantResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateProjectGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateProjectGrantResponse;
  static deserializeBinaryFromReader(message: DeactivateProjectGrantResponse, reader: jspb.BinaryReader): DeactivateProjectGrantResponse;
}

export namespace DeactivateProjectGrantResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivateProjectGrantRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ActivateProjectGrantRequest;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): ActivateProjectGrantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateProjectGrantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateProjectGrantRequest): ActivateProjectGrantRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateProjectGrantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateProjectGrantRequest;
  static deserializeBinaryFromReader(message: ActivateProjectGrantRequest, reader: jspb.BinaryReader): ActivateProjectGrantRequest;
}

export namespace ActivateProjectGrantRequest {
  export type AsObject = {
    projectId: string,
    grantedOrganizationId: string,
  }
}

export class ActivateProjectGrantResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivateProjectGrantResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivateProjectGrantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateProjectGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateProjectGrantResponse): ActivateProjectGrantResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateProjectGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateProjectGrantResponse;
  static deserializeBinaryFromReader(message: ActivateProjectGrantResponse, reader: jspb.BinaryReader): ActivateProjectGrantResponse;
}

export namespace ActivateProjectGrantResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListProjectGrantsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListProjectGrantsRequest;
  hasPagination(): boolean;
  clearPagination(): ListProjectGrantsRequest;

  getSortingColumn(): zitadel_project_v2beta_query_pb.ProjectGrantFieldName;
  setSortingColumn(value: zitadel_project_v2beta_query_pb.ProjectGrantFieldName): ListProjectGrantsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListProjectGrantsRequest;

  getFiltersList(): Array<zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter>;
  setFiltersList(value: Array<zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter>): ListProjectGrantsRequest;
  clearFiltersList(): ListProjectGrantsRequest;
  addFilters(value?: zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter, index?: number): zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectGrantsRequest): ListProjectGrantsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectGrantsRequest;
  static deserializeBinaryFromReader(message: ListProjectGrantsRequest, reader: jspb.BinaryReader): ListProjectGrantsRequest;
}

export namespace ListProjectGrantsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_project_v2beta_query_pb.ProjectGrantFieldName,
    filtersList: Array<zitadel_project_v2beta_query_pb.ProjectGrantSearchFilter.AsObject>,
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

export class ListProjectGrantsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListProjectGrantsResponse;
  hasPagination(): boolean;
  clearPagination(): ListProjectGrantsResponse;

  getProjectGrantsList(): Array<zitadel_project_v2beta_query_pb.ProjectGrant>;
  setProjectGrantsList(value: Array<zitadel_project_v2beta_query_pb.ProjectGrant>): ListProjectGrantsResponse;
  clearProjectGrantsList(): ListProjectGrantsResponse;
  addProjectGrants(value?: zitadel_project_v2beta_query_pb.ProjectGrant, index?: number): zitadel_project_v2beta_query_pb.ProjectGrant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectGrantsResponse): ListProjectGrantsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectGrantsResponse;
  static deserializeBinaryFromReader(message: ListProjectGrantsResponse, reader: jspb.BinaryReader): ListProjectGrantsResponse;
}

export namespace ListProjectGrantsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    projectGrantsList: Array<zitadel_project_v2beta_query_pb.ProjectGrant.AsObject>,
  }
}

