import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as zitadel_authorization_v2beta_authorization_pb from '../../../zitadel/authorization/v2beta/authorization_pb'; // proto import: "zitadel/authorization/v2beta/authorization.proto"


export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  getDescription(): string;
  setDescription(value: string): Group;

  getOrganizationId(): string;
  setOrganizationId(value: string): Group;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasChangeDate(): boolean;
  clearChangeDate(): Group;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasCreationDate(): boolean;
  clearCreationDate(): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    organizationId: string,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GroupUser extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): GroupUser;

  getOrganizationId(): string;
  setOrganizationId(value: string): GroupUser;

  getUser(): zitadel_authorization_v2beta_authorization_pb.User | undefined;
  setUser(value?: zitadel_authorization_v2beta_authorization_pb.User): GroupUser;
  hasUser(): boolean;
  clearUser(): GroupUser;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): GroupUser;
  hasCreationDate(): boolean;
  clearCreationDate(): GroupUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupUser.AsObject;
  static toObject(includeInstance: boolean, msg: GroupUser): GroupUser.AsObject;
  static serializeBinaryToWriter(message: GroupUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupUser;
  static deserializeBinaryFromReader(message: GroupUser, reader: jspb.BinaryReader): GroupUser;
}

export namespace GroupUser {
  export type AsObject = {
    groupId: string,
    organizationId: string,
    user?: zitadel_authorization_v2beta_authorization_pb.User.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GroupsSearchFilter extends jspb.Message {
  getGroupIds(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setGroupIds(value?: zitadel_filter_v2_filter_pb.InIDsFilter): GroupsSearchFilter;
  hasGroupIds(): boolean;
  clearGroupIds(): GroupsSearchFilter;

  getNameFilter(): GroupNameFilter | undefined;
  setNameFilter(value?: GroupNameFilter): GroupsSearchFilter;
  hasNameFilter(): boolean;
  clearNameFilter(): GroupsSearchFilter;

  getOrganizationId(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setOrganizationId(value?: zitadel_filter_v2_filter_pb.IDFilter): GroupsSearchFilter;
  hasOrganizationId(): boolean;
  clearOrganizationId(): GroupsSearchFilter;

  getFilterCase(): GroupsSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupsSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: GroupsSearchFilter): GroupsSearchFilter.AsObject;
  static serializeBinaryToWriter(message: GroupsSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupsSearchFilter;
  static deserializeBinaryFromReader(message: GroupsSearchFilter, reader: jspb.BinaryReader): GroupsSearchFilter;
}

export namespace GroupsSearchFilter {
  export type AsObject = {
    groupIds?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    nameFilter?: GroupNameFilter.AsObject,
    organizationId?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    GROUP_IDS = 1,
    NAME_FILTER = 2,
    ORGANIZATION_ID = 3,
  }
}

export class GroupNameFilter extends jspb.Message {
  getName(): string;
  setName(value: string): GroupNameFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): GroupNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: GroupNameFilter): GroupNameFilter.AsObject;
  static serializeBinaryToWriter(message: GroupNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupNameFilter;
  static deserializeBinaryFromReader(message: GroupNameFilter, reader: jspb.BinaryReader): GroupNameFilter;
}

export namespace GroupNameFilter {
  export type AsObject = {
    name: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class GroupUsersSearchFilter extends jspb.Message {
  getUserIds(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setUserIds(value?: zitadel_filter_v2_filter_pb.InIDsFilter): GroupUsersSearchFilter;
  hasUserIds(): boolean;
  clearUserIds(): GroupUsersSearchFilter;

  getGroupIds(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setGroupIds(value?: zitadel_filter_v2_filter_pb.InIDsFilter): GroupUsersSearchFilter;
  hasGroupIds(): boolean;
  clearGroupIds(): GroupUsersSearchFilter;

  getFilterCase(): GroupUsersSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupUsersSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: GroupUsersSearchFilter): GroupUsersSearchFilter.AsObject;
  static serializeBinaryToWriter(message: GroupUsersSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupUsersSearchFilter;
  static deserializeBinaryFromReader(message: GroupUsersSearchFilter, reader: jspb.BinaryReader): GroupUsersSearchFilter;
}

export namespace GroupUsersSearchFilter {
  export type AsObject = {
    userIds?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    groupIds?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    USER_IDS = 1,
    GROUP_IDS = 2,
  }
}

export enum FieldName { 
  FIELD_NAME_UNSPECIFIED = 0,
  FIELD_NAME_ID = 1,
  FIELD_NAME_NAME = 2,
  FIELD_NAME_CREATION_DATE = 3,
  FIELD_NAME_CHANGE_DATE = 4,
}
export enum GroupUserFieldName { 
  GROUP_USER_FIELD_NAME_UNSPECIFIED = 0,
  GROUP_USER_FIELD_NAME_USER_ID = 1,
  GROUP_USER_FIELD_NAME_GROUP_ID = 2,
  GROUP_USER_FIELD_NAME_CREATION_DATE = 3,
}
