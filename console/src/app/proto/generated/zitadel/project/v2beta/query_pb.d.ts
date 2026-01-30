import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"


export class ProjectGrant extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): ProjectGrant;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): ProjectGrant;
  hasCreationDate(): boolean;
  clearCreationDate(): ProjectGrant;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ProjectGrant;
  hasChangeDate(): boolean;
  clearChangeDate(): ProjectGrant;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): ProjectGrant;

  getGrantedOrganizationName(): string;
  setGrantedOrganizationName(value: string): ProjectGrant;

  getGrantedRoleKeysList(): Array<string>;
  setGrantedRoleKeysList(value: Array<string>): ProjectGrant;
  clearGrantedRoleKeysList(): ProjectGrant;
  addGrantedRoleKeys(value: string, index?: number): ProjectGrant;

  getProjectId(): string;
  setProjectId(value: string): ProjectGrant;

  getProjectName(): string;
  setProjectName(value: string): ProjectGrant;

  getState(): ProjectGrantState;
  setState(value: ProjectGrantState): ProjectGrant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectGrant.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectGrant): ProjectGrant.AsObject;
  static serializeBinaryToWriter(message: ProjectGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectGrant;
  static deserializeBinaryFromReader(message: ProjectGrant, reader: jspb.BinaryReader): ProjectGrant;
}

export namespace ProjectGrant {
  export type AsObject = {
    organizationId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    grantedOrganizationId: string,
    grantedOrganizationName: string,
    grantedRoleKeysList: Array<string>,
    projectId: string,
    projectName: string,
    state: ProjectGrantState,
  }
}

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): Project;

  getOrganizationId(): string;
  setOrganizationId(value: string): Project;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasCreationDate(): boolean;
  clearCreationDate(): Project;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Project;
  hasChangeDate(): boolean;
  clearChangeDate(): Project;

  getName(): string;
  setName(value: string): Project;

  getState(): ProjectState;
  setState(value: ProjectState): Project;

  getProjectRoleAssertion(): boolean;
  setProjectRoleAssertion(value: boolean): Project;

  getAuthorizationRequired(): boolean;
  setAuthorizationRequired(value: boolean): Project;

  getProjectAccessRequired(): boolean;
  setProjectAccessRequired(value: boolean): Project;

  getPrivateLabelingSetting(): PrivateLabelingSetting;
  setPrivateLabelingSetting(value: PrivateLabelingSetting): Project;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): Project;
  hasGrantedOrganizationId(): boolean;
  clearGrantedOrganizationId(): Project;

  getGrantedOrganizationName(): string;
  setGrantedOrganizationName(value: string): Project;
  hasGrantedOrganizationName(): boolean;
  clearGrantedOrganizationName(): Project;

  getGrantedState(): GrantedProjectState;
  setGrantedState(value: GrantedProjectState): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    organizationId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    state: ProjectState,
    projectRoleAssertion: boolean,
    authorizationRequired: boolean,
    projectAccessRequired: boolean,
    privateLabelingSetting: PrivateLabelingSetting,
    grantedOrganizationId?: string,
    grantedOrganizationName?: string,
    grantedState: GrantedProjectState,
  }

  export enum GrantedOrganizationIdCase { 
    _GRANTED_ORGANIZATION_ID_NOT_SET = 0,
    GRANTED_ORGANIZATION_ID = 12,
  }

  export enum GrantedOrganizationNameCase { 
    _GRANTED_ORGANIZATION_NAME_NOT_SET = 0,
    GRANTED_ORGANIZATION_NAME = 13,
  }
}

export class ProjectSearchFilter extends jspb.Message {
  getProjectNameFilter(): ProjectNameFilter | undefined;
  setProjectNameFilter(value?: ProjectNameFilter): ProjectSearchFilter;
  hasProjectNameFilter(): boolean;
  clearProjectNameFilter(): ProjectSearchFilter;

  getInProjectIdsFilter(): zitadel_filter_v2beta_filter_pb.InIDsFilter | undefined;
  setInProjectIdsFilter(value?: zitadel_filter_v2beta_filter_pb.InIDsFilter): ProjectSearchFilter;
  hasInProjectIdsFilter(): boolean;
  clearInProjectIdsFilter(): ProjectSearchFilter;

  getProjectResourceOwnerFilter(): zitadel_filter_v2beta_filter_pb.IDFilter | undefined;
  setProjectResourceOwnerFilter(value?: zitadel_filter_v2beta_filter_pb.IDFilter): ProjectSearchFilter;
  hasProjectResourceOwnerFilter(): boolean;
  clearProjectResourceOwnerFilter(): ProjectSearchFilter;

  getProjectGrantResourceOwnerFilter(): zitadel_filter_v2beta_filter_pb.IDFilter | undefined;
  setProjectGrantResourceOwnerFilter(value?: zitadel_filter_v2beta_filter_pb.IDFilter): ProjectSearchFilter;
  hasProjectGrantResourceOwnerFilter(): boolean;
  clearProjectGrantResourceOwnerFilter(): ProjectSearchFilter;

  getProjectOrganizationIdFilter(): zitadel_filter_v2beta_filter_pb.IDFilter | undefined;
  setProjectOrganizationIdFilter(value?: zitadel_filter_v2beta_filter_pb.IDFilter): ProjectSearchFilter;
  hasProjectOrganizationIdFilter(): boolean;
  clearProjectOrganizationIdFilter(): ProjectSearchFilter;

  getFilterCase(): ProjectSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectSearchFilter): ProjectSearchFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectSearchFilter;
  static deserializeBinaryFromReader(message: ProjectSearchFilter, reader: jspb.BinaryReader): ProjectSearchFilter;
}

export namespace ProjectSearchFilter {
  export type AsObject = {
    projectNameFilter?: ProjectNameFilter.AsObject,
    inProjectIdsFilter?: zitadel_filter_v2beta_filter_pb.InIDsFilter.AsObject,
    projectResourceOwnerFilter?: zitadel_filter_v2beta_filter_pb.IDFilter.AsObject,
    projectGrantResourceOwnerFilter?: zitadel_filter_v2beta_filter_pb.IDFilter.AsObject,
    projectOrganizationIdFilter?: zitadel_filter_v2beta_filter_pb.IDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    PROJECT_NAME_FILTER = 1,
    IN_PROJECT_IDS_FILTER = 2,
    PROJECT_RESOURCE_OWNER_FILTER = 3,
    PROJECT_GRANT_RESOURCE_OWNER_FILTER = 4,
    PROJECT_ORGANIZATION_ID_FILTER = 5,
  }
}

export class ProjectNameFilter extends jspb.Message {
  getProjectName(): string;
  setProjectName(value: string): ProjectNameFilter;

  getMethod(): zitadel_filter_v2beta_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2beta_filter_pb.TextFilterMethod): ProjectNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectNameFilter): ProjectNameFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectNameFilter;
  static deserializeBinaryFromReader(message: ProjectNameFilter, reader: jspb.BinaryReader): ProjectNameFilter;
}

export namespace ProjectNameFilter {
  export type AsObject = {
    projectName: string,
    method: zitadel_filter_v2beta_filter_pb.TextFilterMethod,
  }
}

export class ProjectGrantSearchFilter extends jspb.Message {
  getProjectNameFilter(): ProjectNameFilter | undefined;
  setProjectNameFilter(value?: ProjectNameFilter): ProjectGrantSearchFilter;
  hasProjectNameFilter(): boolean;
  clearProjectNameFilter(): ProjectGrantSearchFilter;

  getRoleKeyFilter(): ProjectRoleKeyFilter | undefined;
  setRoleKeyFilter(value?: ProjectRoleKeyFilter): ProjectGrantSearchFilter;
  hasRoleKeyFilter(): boolean;
  clearRoleKeyFilter(): ProjectGrantSearchFilter;

  getInProjectIdsFilter(): zitadel_filter_v2beta_filter_pb.InIDsFilter | undefined;
  setInProjectIdsFilter(value?: zitadel_filter_v2beta_filter_pb.InIDsFilter): ProjectGrantSearchFilter;
  hasInProjectIdsFilter(): boolean;
  clearInProjectIdsFilter(): ProjectGrantSearchFilter;

  getProjectResourceOwnerFilter(): zitadel_filter_v2beta_filter_pb.IDFilter | undefined;
  setProjectResourceOwnerFilter(value?: zitadel_filter_v2beta_filter_pb.IDFilter): ProjectGrantSearchFilter;
  hasProjectResourceOwnerFilter(): boolean;
  clearProjectResourceOwnerFilter(): ProjectGrantSearchFilter;

  getProjectGrantResourceOwnerFilter(): zitadel_filter_v2beta_filter_pb.IDFilter | undefined;
  setProjectGrantResourceOwnerFilter(value?: zitadel_filter_v2beta_filter_pb.IDFilter): ProjectGrantSearchFilter;
  hasProjectGrantResourceOwnerFilter(): boolean;
  clearProjectGrantResourceOwnerFilter(): ProjectGrantSearchFilter;

  getFilterCase(): ProjectGrantSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectGrantSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectGrantSearchFilter): ProjectGrantSearchFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectGrantSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectGrantSearchFilter;
  static deserializeBinaryFromReader(message: ProjectGrantSearchFilter, reader: jspb.BinaryReader): ProjectGrantSearchFilter;
}

export namespace ProjectGrantSearchFilter {
  export type AsObject = {
    projectNameFilter?: ProjectNameFilter.AsObject,
    roleKeyFilter?: ProjectRoleKeyFilter.AsObject,
    inProjectIdsFilter?: zitadel_filter_v2beta_filter_pb.InIDsFilter.AsObject,
    projectResourceOwnerFilter?: zitadel_filter_v2beta_filter_pb.IDFilter.AsObject,
    projectGrantResourceOwnerFilter?: zitadel_filter_v2beta_filter_pb.IDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    PROJECT_NAME_FILTER = 1,
    ROLE_KEY_FILTER = 2,
    IN_PROJECT_IDS_FILTER = 3,
    PROJECT_RESOURCE_OWNER_FILTER = 4,
    PROJECT_GRANT_RESOURCE_OWNER_FILTER = 5,
  }
}

export class ProjectRole extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ProjectRole;

  getKey(): string;
  setKey(value: string): ProjectRole;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): ProjectRole;
  hasCreationDate(): boolean;
  clearCreationDate(): ProjectRole;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ProjectRole;
  hasChangeDate(): boolean;
  clearChangeDate(): ProjectRole;

  getDisplayName(): string;
  setDisplayName(value: string): ProjectRole;

  getGroup(): string;
  setGroup(value: string): ProjectRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRole.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRole): ProjectRole.AsObject;
  static serializeBinaryToWriter(message: ProjectRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRole;
  static deserializeBinaryFromReader(message: ProjectRole, reader: jspb.BinaryReader): ProjectRole;
}

export namespace ProjectRole {
  export type AsObject = {
    projectId: string,
    key: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    displayName: string,
    group: string,
  }
}

export class ProjectRoleSearchFilter extends jspb.Message {
  getRoleKeyFilter(): ProjectRoleKeyFilter | undefined;
  setRoleKeyFilter(value?: ProjectRoleKeyFilter): ProjectRoleSearchFilter;
  hasRoleKeyFilter(): boolean;
  clearRoleKeyFilter(): ProjectRoleSearchFilter;

  getDisplayNameFilter(): ProjectRoleDisplayNameFilter | undefined;
  setDisplayNameFilter(value?: ProjectRoleDisplayNameFilter): ProjectRoleSearchFilter;
  hasDisplayNameFilter(): boolean;
  clearDisplayNameFilter(): ProjectRoleSearchFilter;

  getFilterCase(): ProjectRoleSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRoleSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRoleSearchFilter): ProjectRoleSearchFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectRoleSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRoleSearchFilter;
  static deserializeBinaryFromReader(message: ProjectRoleSearchFilter, reader: jspb.BinaryReader): ProjectRoleSearchFilter;
}

export namespace ProjectRoleSearchFilter {
  export type AsObject = {
    roleKeyFilter?: ProjectRoleKeyFilter.AsObject,
    displayNameFilter?: ProjectRoleDisplayNameFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    ROLE_KEY_FILTER = 1,
    DISPLAY_NAME_FILTER = 2,
  }
}

export class ProjectRoleKeyFilter extends jspb.Message {
  getKey(): string;
  setKey(value: string): ProjectRoleKeyFilter;

  getMethod(): zitadel_filter_v2beta_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2beta_filter_pb.TextFilterMethod): ProjectRoleKeyFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRoleKeyFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRoleKeyFilter): ProjectRoleKeyFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectRoleKeyFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRoleKeyFilter;
  static deserializeBinaryFromReader(message: ProjectRoleKeyFilter, reader: jspb.BinaryReader): ProjectRoleKeyFilter;
}

export namespace ProjectRoleKeyFilter {
  export type AsObject = {
    key: string,
    method: zitadel_filter_v2beta_filter_pb.TextFilterMethod,
  }
}

export class ProjectRoleDisplayNameFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): ProjectRoleDisplayNameFilter;

  getMethod(): zitadel_filter_v2beta_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2beta_filter_pb.TextFilterMethod): ProjectRoleDisplayNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRoleDisplayNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRoleDisplayNameFilter): ProjectRoleDisplayNameFilter.AsObject;
  static serializeBinaryToWriter(message: ProjectRoleDisplayNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRoleDisplayNameFilter;
  static deserializeBinaryFromReader(message: ProjectRoleDisplayNameFilter, reader: jspb.BinaryReader): ProjectRoleDisplayNameFilter;
}

export namespace ProjectRoleDisplayNameFilter {
  export type AsObject = {
    displayName: string,
    method: zitadel_filter_v2beta_filter_pb.TextFilterMethod,
  }
}

export enum ProjectGrantState { 
  PROJECT_GRANT_STATE_UNSPECIFIED = 0,
  PROJECT_GRANT_STATE_ACTIVE = 1,
  PROJECT_GRANT_STATE_INACTIVE = 2,
}
export enum ProjectState { 
  PROJECT_STATE_UNSPECIFIED = 0,
  PROJECT_STATE_ACTIVE = 1,
  PROJECT_STATE_INACTIVE = 2,
}
export enum GrantedProjectState { 
  GRANTED_PROJECT_STATE_UNSPECIFIED = 0,
  GRANTED_PROJECT_STATE_ACTIVE = 1,
  GRANTED_PROJECT_STATE_INACTIVE = 2,
}
export enum PrivateLabelingSetting { 
  PRIVATE_LABELING_SETTING_UNSPECIFIED = 0,
  PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY = 1,
  PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY = 2,
}
export enum ProjectFieldName { 
  PROJECT_FIELD_NAME_UNSPECIFIED = 0,
  PROJECT_FIELD_NAME_ID = 1,
  PROJECT_FIELD_NAME_CREATION_DATE = 2,
  PROJECT_FIELD_NAME_CHANGE_DATE = 3,
  PROJECT_FIELD_NAME_NAME = 4,
}
export enum ProjectGrantFieldName { 
  PROJECT_GRANT_FIELD_NAME_UNSPECIFIED = 0,
  PROJECT_GRANT_FIELD_NAME_PROJECT_ID = 1,
  PROJECT_GRANT_FIELD_NAME_CREATION_DATE = 2,
  PROJECT_GRANT_FIELD_NAME_CHANGE_DATE = 3,
}
export enum ProjectRoleFieldName { 
  PROJECT_ROLE_FIELD_NAME_UNSPECIFIED = 0,
  PROJECT_ROLE_FIELD_NAME_KEY = 1,
  PROJECT_ROLE_FIELD_NAME_CREATION_DATE = 2,
  PROJECT_ROLE_FIELD_NAME_CHANGE_DATE = 3,
}
