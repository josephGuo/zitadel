import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class Administrator extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Administrator;
  hasCreationDate(): boolean;
  clearCreationDate(): Administrator;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Administrator;
  hasChangeDate(): boolean;
  clearChangeDate(): Administrator;

  getUser(): User | undefined;
  setUser(value?: User): Administrator;
  hasUser(): boolean;
  clearUser(): Administrator;

  getInstance(): boolean;
  setInstance(value: boolean): Administrator;

  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): Administrator;
  hasOrganization(): boolean;
  clearOrganization(): Administrator;

  getProject(): Project | undefined;
  setProject(value?: Project): Administrator;
  hasProject(): boolean;
  clearProject(): Administrator;

  getProjectGrant(): ProjectGrant | undefined;
  setProjectGrant(value?: ProjectGrant): Administrator;
  hasProjectGrant(): boolean;
  clearProjectGrant(): Administrator;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): Administrator;
  clearRolesList(): Administrator;
  addRoles(value: string, index?: number): Administrator;

  getResourceCase(): Administrator.ResourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Administrator.AsObject;
  static toObject(includeInstance: boolean, msg: Administrator): Administrator.AsObject;
  static serializeBinaryToWriter(message: Administrator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Administrator;
  static deserializeBinaryFromReader(message: Administrator, reader: jspb.BinaryReader): Administrator;
}

export namespace Administrator {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    user?: User.AsObject,
    instance: boolean,
    organization?: Organization.AsObject,
    project?: Project.AsObject,
    projectGrant?: ProjectGrant.AsObject,
    rolesList: Array<string>,
  }

  export enum ResourceCase { 
    RESOURCE_NOT_SET = 0,
    INSTANCE = 4,
    ORGANIZATION = 5,
    PROJECT = 6,
    PROJECT_GRANT = 7,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): User;

  getDisplayName(): string;
  setDisplayName(value: string): User;

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

export class ProjectGrant extends jspb.Message {
  getId(): string;
  setId(value: string): ProjectGrant;

  getProjectId(): string;
  setProjectId(value: string): ProjectGrant;

  getProjectName(): string;
  setProjectName(value: string): ProjectGrant;

  getOrganizationId(): string;
  setOrganizationId(value: string): ProjectGrant;

  getGrantedOrganizationId(): string;
  setGrantedOrganizationId(value: string): ProjectGrant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectGrant.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectGrant): ProjectGrant.AsObject;
  static serializeBinaryToWriter(message: ProjectGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectGrant;
  static deserializeBinaryFromReader(message: ProjectGrant, reader: jspb.BinaryReader): ProjectGrant;
}

export namespace ProjectGrant {
  export type AsObject = {
    id: string,
    projectId: string,
    projectName: string,
    organizationId: string,
    grantedOrganizationId: string,
  }
}

export class AdministratorSearchFilter extends jspb.Message {
  getCreationDate(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setCreationDate(value?: zitadel_filter_v2_filter_pb.TimestampFilter): AdministratorSearchFilter;
  hasCreationDate(): boolean;
  clearCreationDate(): AdministratorSearchFilter;

  getChangeDate(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setChangeDate(value?: zitadel_filter_v2_filter_pb.TimestampFilter): AdministratorSearchFilter;
  hasChangeDate(): boolean;
  clearChangeDate(): AdministratorSearchFilter;

  getInUserIdsFilter(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setInUserIdsFilter(value?: zitadel_filter_v2_filter_pb.InIDsFilter): AdministratorSearchFilter;
  hasInUserIdsFilter(): boolean;
  clearInUserIdsFilter(): AdministratorSearchFilter;

  getUserOrganizationId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setUserOrganizationId(value?: zitadel_filter_v2_filter_pb.IDFilter): AdministratorSearchFilter;
  hasUserOrganizationId(): boolean;
  clearUserOrganizationId(): AdministratorSearchFilter;

  getUserPreferredLoginName(): UserPreferredLoginNameFilter | undefined;
  setUserPreferredLoginName(value?: UserPreferredLoginNameFilter): AdministratorSearchFilter;
  hasUserPreferredLoginName(): boolean;
  clearUserPreferredLoginName(): AdministratorSearchFilter;

  getUserDisplayName(): UserDisplayNameFilter | undefined;
  setUserDisplayName(value?: UserDisplayNameFilter): AdministratorSearchFilter;
  hasUserDisplayName(): boolean;
  clearUserDisplayName(): AdministratorSearchFilter;

  getResource(): ResourceFilter | undefined;
  setResource(value?: ResourceFilter): AdministratorSearchFilter;
  hasResource(): boolean;
  clearResource(): AdministratorSearchFilter;

  getRole(): RoleFilter | undefined;
  setRole(value?: RoleFilter): AdministratorSearchFilter;
  hasRole(): boolean;
  clearRole(): AdministratorSearchFilter;

  getAnd(): AndFilter | undefined;
  setAnd(value?: AndFilter): AdministratorSearchFilter;
  hasAnd(): boolean;
  clearAnd(): AdministratorSearchFilter;

  getOr(): OrFilter | undefined;
  setOr(value?: OrFilter): AdministratorSearchFilter;
  hasOr(): boolean;
  clearOr(): AdministratorSearchFilter;

  getNot(): NotFilter | undefined;
  setNot(value?: NotFilter): AdministratorSearchFilter;
  hasNot(): boolean;
  clearNot(): AdministratorSearchFilter;

  getFilterCase(): AdministratorSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministratorSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AdministratorSearchFilter): AdministratorSearchFilter.AsObject;
  static serializeBinaryToWriter(message: AdministratorSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministratorSearchFilter;
  static deserializeBinaryFromReader(message: AdministratorSearchFilter, reader: jspb.BinaryReader): AdministratorSearchFilter;
}

export namespace AdministratorSearchFilter {
  export type AsObject = {
    creationDate?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
    changeDate?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
    inUserIdsFilter?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    userOrganizationId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    userPreferredLoginName?: UserPreferredLoginNameFilter.AsObject,
    userDisplayName?: UserDisplayNameFilter.AsObject,
    resource?: ResourceFilter.AsObject,
    role?: RoleFilter.AsObject,
    and?: AndFilter.AsObject,
    or?: OrFilter.AsObject,
    not?: NotFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    CREATION_DATE = 1,
    CHANGE_DATE = 2,
    IN_USER_IDS_FILTER = 3,
    USER_ORGANIZATION_ID = 4,
    USER_PREFERRED_LOGIN_NAME = 5,
    USER_DISPLAY_NAME = 6,
    RESOURCE = 7,
    ROLE = 8,
    AND = 9,
    OR = 10,
    NOT = 11,
  }
}

export class UserPreferredLoginNameFilter extends jspb.Message {
  getPreferredLoginName(): string;
  setPreferredLoginName(value: string): UserPreferredLoginNameFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): UserPreferredLoginNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPreferredLoginNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserPreferredLoginNameFilter): UserPreferredLoginNameFilter.AsObject;
  static serializeBinaryToWriter(message: UserPreferredLoginNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPreferredLoginNameFilter;
  static deserializeBinaryFromReader(message: UserPreferredLoginNameFilter, reader: jspb.BinaryReader): UserPreferredLoginNameFilter;
}

export namespace UserPreferredLoginNameFilter {
  export type AsObject = {
    preferredLoginName: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class UserDisplayNameFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): UserDisplayNameFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): UserDisplayNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDisplayNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserDisplayNameFilter): UserDisplayNameFilter.AsObject;
  static serializeBinaryToWriter(message: UserDisplayNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDisplayNameFilter;
  static deserializeBinaryFromReader(message: UserDisplayNameFilter, reader: jspb.BinaryReader): UserDisplayNameFilter;
}

export namespace UserDisplayNameFilter {
  export type AsObject = {
    displayName: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class ResourceFilter extends jspb.Message {
  getInstance(): boolean;
  setInstance(value: boolean): ResourceFilter;

  getOrganizationId(): string;
  setOrganizationId(value: string): ResourceFilter;

  getProjectId(): string;
  setProjectId(value: string): ResourceFilter;

  getProjectGrant(): ResourceFilter.ProjectGrant | undefined;
  setProjectGrant(value?: ResourceFilter.ProjectGrant): ResourceFilter;
  hasProjectGrant(): boolean;
  clearProjectGrant(): ResourceFilter;

  getResourceCase(): ResourceFilter.ResourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceFilter): ResourceFilter.AsObject;
  static serializeBinaryToWriter(message: ResourceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceFilter;
  static deserializeBinaryFromReader(message: ResourceFilter, reader: jspb.BinaryReader): ResourceFilter;
}

export namespace ResourceFilter {
  export type AsObject = {
    instance: boolean,
    organizationId: string,
    projectId: string,
    projectGrant?: ResourceFilter.ProjectGrant.AsObject,
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

export class RoleFilter extends jspb.Message {
  getRoleKey(): string;
  setRoleKey(value: string): RoleFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: RoleFilter): RoleFilter.AsObject;
  static serializeBinaryToWriter(message: RoleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleFilter;
  static deserializeBinaryFromReader(message: RoleFilter, reader: jspb.BinaryReader): RoleFilter;
}

export namespace RoleFilter {
  export type AsObject = {
    roleKey: string,
  }
}

export class AndFilter extends jspb.Message {
  getQueriesList(): Array<AdministratorSearchFilter>;
  setQueriesList(value: Array<AdministratorSearchFilter>): AndFilter;
  clearQueriesList(): AndFilter;
  addQueries(value?: AdministratorSearchFilter, index?: number): AdministratorSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndFilter.AsObject;
  static toObject(includeInstance: boolean, msg: AndFilter): AndFilter.AsObject;
  static serializeBinaryToWriter(message: AndFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndFilter;
  static deserializeBinaryFromReader(message: AndFilter, reader: jspb.BinaryReader): AndFilter;
}

export namespace AndFilter {
  export type AsObject = {
    queriesList: Array<AdministratorSearchFilter.AsObject>,
  }
}

export class OrFilter extends jspb.Message {
  getQueriesList(): Array<AdministratorSearchFilter>;
  setQueriesList(value: Array<AdministratorSearchFilter>): OrFilter;
  clearQueriesList(): OrFilter;
  addQueries(value?: AdministratorSearchFilter, index?: number): AdministratorSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrFilter): OrFilter.AsObject;
  static serializeBinaryToWriter(message: OrFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrFilter;
  static deserializeBinaryFromReader(message: OrFilter, reader: jspb.BinaryReader): OrFilter;
}

export namespace OrFilter {
  export type AsObject = {
    queriesList: Array<AdministratorSearchFilter.AsObject>,
  }
}

export class NotFilter extends jspb.Message {
  getQuery(): AdministratorSearchFilter | undefined;
  setQuery(value?: AdministratorSearchFilter): NotFilter;
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
    query?: AdministratorSearchFilter.AsObject,
  }
}

export enum AdministratorFieldName { 
  ADMINISTRATOR_FIELD_NAME_UNSPECIFIED = 0,
  ADMINISTRATOR_FIELD_NAME_USER_ID = 1,
  ADMINISTRATOR_FIELD_NAME_CREATION_DATE = 2,
  ADMINISTRATOR_FIELD_NAME_CHANGE_DATE = 3,
}
