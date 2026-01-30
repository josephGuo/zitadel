import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class Authorization extends jspb.Message {
  getId(): string;
  setId(value: string): Authorization;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Authorization;
  hasCreationDate(): boolean;
  clearCreationDate(): Authorization;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Authorization;
  hasChangeDate(): boolean;
  clearChangeDate(): Authorization;

  getProject(): Project | undefined;
  setProject(value?: Project): Authorization;
  hasProject(): boolean;
  clearProject(): Authorization;

  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): Authorization;
  hasOrganization(): boolean;
  clearOrganization(): Authorization;

  getUser(): User | undefined;
  setUser(value?: User): Authorization;
  hasUser(): boolean;
  clearUser(): Authorization;

  getState(): State;
  setState(value: State): Authorization;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): Authorization;
  clearRolesList(): Authorization;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authorization.AsObject;
  static toObject(includeInstance: boolean, msg: Authorization): Authorization.AsObject;
  static serializeBinaryToWriter(message: Authorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authorization;
  static deserializeBinaryFromReader(message: Authorization, reader: jspb.BinaryReader): Authorization;
}

export namespace Authorization {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    project?: Project.AsObject,
    organization?: Organization.AsObject,
    user?: User.AsObject,
    state: State,
    rolesList: Array<Role.AsObject>,
  }
}

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): Project;

  getName(): string;
  setName(value: string): Project;

  getOrganizationId(): string;
  setOrganizationId(value: string): Project;

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
    name: string,
    organizationId: string,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): Organization;

  getName(): string;
  setName(value: string): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): User;

  getDisplayName(): string;
  setDisplayName(value: string): User;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): User;

  getOrganizationId(): string;
  setOrganizationId(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    preferredLoginName: string,
    displayName: string,
    avatarUrl: string,
    organizationId: string,
  }
}

export class Role extends jspb.Message {
  getKey(): string;
  setKey(value: string): Role;

  getDisplayName(): string;
  setDisplayName(value: string): Role;

  getGroup(): string;
  setGroup(value: string): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    key: string,
    displayName: string,
    group: string,
  }
}

export class AuthorizationsSearchFilter extends jspb.Message {
  getAuthorizationIds(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setAuthorizationIds(value?: zitadel_filter_v2_filter_pb.InIDsFilter): AuthorizationsSearchFilter;
  hasAuthorizationIds(): boolean;
  clearAuthorizationIds(): AuthorizationsSearchFilter;

  getOrganizationId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setOrganizationId(value?: zitadel_filter_v2_filter_pb.IDFilter): AuthorizationsSearchFilter;
  hasOrganizationId(): boolean;
  clearOrganizationId(): AuthorizationsSearchFilter;

  getState(): StateQuery | undefined;
  setState(value?: StateQuery): AuthorizationsSearchFilter;
  hasState(): boolean;
  clearState(): AuthorizationsSearchFilter;

  getInUserIds(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setInUserIds(value?: zitadel_filter_v2_filter_pb.InIDsFilter): AuthorizationsSearchFilter;
  hasInUserIds(): boolean;
  clearInUserIds(): AuthorizationsSearchFilter;

  getUserOrganizationId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setUserOrganizationId(value?: zitadel_filter_v2_filter_pb.IDFilter): AuthorizationsSearchFilter;
  hasUserOrganizationId(): boolean;
  clearUserOrganizationId(): AuthorizationsSearchFilter;

  getUserPreferredLoginName(): UserPreferredLoginNameQuery | undefined;
  setUserPreferredLoginName(value?: UserPreferredLoginNameQuery): AuthorizationsSearchFilter;
  hasUserPreferredLoginName(): boolean;
  clearUserPreferredLoginName(): AuthorizationsSearchFilter;

  getUserDisplayName(): UserDisplayNameQuery | undefined;
  setUserDisplayName(value?: UserDisplayNameQuery): AuthorizationsSearchFilter;
  hasUserDisplayName(): boolean;
  clearUserDisplayName(): AuthorizationsSearchFilter;

  getProjectId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setProjectId(value?: zitadel_filter_v2_filter_pb.IDFilter): AuthorizationsSearchFilter;
  hasProjectId(): boolean;
  clearProjectId(): AuthorizationsSearchFilter;

  getProjectName(): ProjectNameQuery | undefined;
  setProjectName(value?: ProjectNameQuery): AuthorizationsSearchFilter;
  hasProjectName(): boolean;
  clearProjectName(): AuthorizationsSearchFilter;

  getRoleKey(): RoleKeyQuery | undefined;
  setRoleKey(value?: RoleKeyQuery): AuthorizationsSearchFilter;
  hasRoleKey(): boolean;
  clearRoleKey(): AuthorizationsSearchFilter;

  getProjectGrantId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setProjectGrantId(value?: zitadel_filter_v2_filter_pb.IDFilter): AuthorizationsSearchFilter;
  hasProjectGrantId(): boolean;
  clearProjectGrantId(): AuthorizationsSearchFilter;

  getFilterCase(): AuthorizationsSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationsSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationsSearchFilter): AuthorizationsSearchFilter.AsObject;
  static serializeBinaryToWriter(message: AuthorizationsSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationsSearchFilter;
  static deserializeBinaryFromReader(message: AuthorizationsSearchFilter, reader: jspb.BinaryReader): AuthorizationsSearchFilter;
}

export namespace AuthorizationsSearchFilter {
  export type AsObject = {
    authorizationIds?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    organizationId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    state?: StateQuery.AsObject,
    inUserIds?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    userOrganizationId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    userPreferredLoginName?: UserPreferredLoginNameQuery.AsObject,
    userDisplayName?: UserDisplayNameQuery.AsObject,
    projectId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    projectName?: ProjectNameQuery.AsObject,
    roleKey?: RoleKeyQuery.AsObject,
    projectGrantId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    AUTHORIZATION_IDS = 1,
    ORGANIZATION_ID = 2,
    STATE = 3,
    IN_USER_IDS = 4,
    USER_ORGANIZATION_ID = 5,
    USER_PREFERRED_LOGIN_NAME = 6,
    USER_DISPLAY_NAME = 7,
    PROJECT_ID = 8,
    PROJECT_NAME = 9,
    ROLE_KEY = 10,
    PROJECT_GRANT_ID = 11,
  }
}

export class StateQuery extends jspb.Message {
  getState(): State;
  setState(value: State): StateQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: StateQuery): StateQuery.AsObject;
  static serializeBinaryToWriter(message: StateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateQuery;
  static deserializeBinaryFromReader(message: StateQuery, reader: jspb.BinaryReader): StateQuery;
}

export namespace StateQuery {
  export type AsObject = {
    state: State,
  }
}

export class UserPreferredLoginNameQuery extends jspb.Message {
  getLoginName(): string;
  setLoginName(value: string): UserPreferredLoginNameQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): UserPreferredLoginNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPreferredLoginNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: UserPreferredLoginNameQuery): UserPreferredLoginNameQuery.AsObject;
  static serializeBinaryToWriter(message: UserPreferredLoginNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPreferredLoginNameQuery;
  static deserializeBinaryFromReader(message: UserPreferredLoginNameQuery, reader: jspb.BinaryReader): UserPreferredLoginNameQuery;
}

export namespace UserPreferredLoginNameQuery {
  export type AsObject = {
    loginName: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class UserDisplayNameQuery extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): UserDisplayNameQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): UserDisplayNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDisplayNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: UserDisplayNameQuery): UserDisplayNameQuery.AsObject;
  static serializeBinaryToWriter(message: UserDisplayNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDisplayNameQuery;
  static deserializeBinaryFromReader(message: UserDisplayNameQuery, reader: jspb.BinaryReader): UserDisplayNameQuery;
}

export namespace UserDisplayNameQuery {
  export type AsObject = {
    displayName: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class ProjectNameQuery extends jspb.Message {
  getName(): string;
  setName(value: string): ProjectNameQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): ProjectNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectNameQuery): ProjectNameQuery.AsObject;
  static serializeBinaryToWriter(message: ProjectNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectNameQuery;
  static deserializeBinaryFromReader(message: ProjectNameQuery, reader: jspb.BinaryReader): ProjectNameQuery;
}

export namespace ProjectNameQuery {
  export type AsObject = {
    name: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class OrganizationNameQuery extends jspb.Message {
  getName(): string;
  setName(value: string): OrganizationNameQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): OrganizationNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationNameQuery): OrganizationNameQuery.AsObject;
  static serializeBinaryToWriter(message: OrganizationNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationNameQuery;
  static deserializeBinaryFromReader(message: OrganizationNameQuery, reader: jspb.BinaryReader): OrganizationNameQuery;
}

export namespace OrganizationNameQuery {
  export type AsObject = {
    name: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class RoleKeyQuery extends jspb.Message {
  getKey(): string;
  setKey(value: string): RoleKeyQuery;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): RoleKeyQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleKeyQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RoleKeyQuery): RoleKeyQuery.AsObject;
  static serializeBinaryToWriter(message: RoleKeyQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleKeyQuery;
  static deserializeBinaryFromReader(message: RoleKeyQuery, reader: jspb.BinaryReader): RoleKeyQuery;
}

export namespace RoleKeyQuery {
  export type AsObject = {
    key: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export enum State { 
  STATE_UNSPECIFIED = 0,
  STATE_ACTIVE = 1,
  STATE_INACTIVE = 2,
}
export enum AuthorizationFieldName { 
  AUTHORIZATION_FIELD_NAME_UNSPECIFIED = 0,
  AUTHORIZATION_FIELD_NAME_CREATED_DATE = 1,
  AUTHORIZATION_FIELD_NAME_CHANGED_DATE = 2,
  AUTHORIZATION_FIELD_NAME_ID = 3,
  AUTHORIZATION_FIELD_NAME_USER_ID = 4,
  AUTHORIZATION_FIELD_NAME_PROJECT_ID = 5,
  AUTHORIZATION_FIELD_NAME_ORGANIZATION_ID = 6,
  AUTHORIZATION_FIELD_NAME_USER_ORGANIZATION_ID = 7,
}
