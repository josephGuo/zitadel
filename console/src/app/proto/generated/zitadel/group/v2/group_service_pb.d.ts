import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as zitadel_group_v2_group_pb from '../../../zitadel/group/v2/group_pb'; // proto import: "zitadel/group/v2/group.proto"


export class CreateGroupRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): CreateGroupRequest;

  getName(): string;
  setName(value: string): CreateGroupRequest;

  getDescription(): string;
  setDescription(value: string): CreateGroupRequest;

  getId(): string;
  setId(value: string): CreateGroupRequest;
  hasId(): boolean;
  clearId(): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    description: string,
    id?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 4,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateGroupResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateGroupResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListGroupsRequest extends jspb.Message {
  getFiltersList(): Array<zitadel_group_v2_group_pb.GroupsSearchFilter>;
  setFiltersList(value: Array<zitadel_group_v2_group_pb.GroupsSearchFilter>): ListGroupsRequest;
  clearFiltersList(): ListGroupsRequest;
  addFilters(value?: zitadel_group_v2_group_pb.GroupsSearchFilter, index?: number): zitadel_group_v2_group_pb.GroupsSearchFilter;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListGroupsRequest;
  hasPagination(): boolean;
  clearPagination(): ListGroupsRequest;

  getSortingColumn(): zitadel_group_v2_group_pb.FieldName;
  setSortingColumn(value: zitadel_group_v2_group_pb.FieldName): ListGroupsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsRequest): ListGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsRequest;
  static deserializeBinaryFromReader(message: ListGroupsRequest, reader: jspb.BinaryReader): ListGroupsRequest;
}

export namespace ListGroupsRequest {
  export type AsObject = {
    filtersList: Array<zitadel_group_v2_group_pb.GroupsSearchFilter.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_group_v2_group_pb.FieldName,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 3,
  }
}

export class ListGroupsResponse extends jspb.Message {
  getGroupsList(): Array<zitadel_group_v2_group_pb.Group>;
  setGroupsList(value: Array<zitadel_group_v2_group_pb.Group>): ListGroupsResponse;
  clearGroupsList(): ListGroupsResponse;
  addGroups(value?: zitadel_group_v2_group_pb.Group, index?: number): zitadel_group_v2_group_pb.Group;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListGroupsResponse;
  hasPagination(): boolean;
  clearPagination(): ListGroupsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsResponse): ListGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsResponse;
  static deserializeBinaryFromReader(message: ListGroupsResponse, reader: jspb.BinaryReader): ListGroupsResponse;
}

export namespace ListGroupsResponse {
  export type AsObject = {
    groupsList: Array<zitadel_group_v2_group_pb.Group.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
  }
}

export class GetGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetGroupResponse extends jspb.Message {
  getGroup(): zitadel_group_v2_group_pb.Group | undefined;
  setGroup(value?: zitadel_group_v2_group_pb.Group): GetGroupResponse;
  hasGroup(): boolean;
  clearGroup(): GetGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupResponse): GetGroupResponse.AsObject;
  static serializeBinaryToWriter(message: GetGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupResponse;
  static deserializeBinaryFromReader(message: GetGroupResponse, reader: jspb.BinaryReader): GetGroupResponse;
}

export namespace GetGroupResponse {
  export type AsObject = {
    group?: zitadel_group_v2_group_pb.Group.AsObject,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateGroupRequest;

  getName(): string;
  setName(value: string): UpdateGroupRequest;
  hasName(): boolean;
  clearName(): UpdateGroupRequest;

  getDescription(): string;
  setDescription(value: string): UpdateGroupRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    id: string,
    name?: string,
    description?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }
}

export class UpdateGroupResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateGroupResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupResponse): UpdateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupResponse;
  static deserializeBinaryFromReader(message: UpdateGroupResponse, reader: jspb.BinaryReader): UpdateGroupResponse;
}

export namespace UpdateGroupResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteGroupResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteGroupResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupResponse): DeleteGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupResponse;
  static deserializeBinaryFromReader(message: DeleteGroupResponse, reader: jspb.BinaryReader): DeleteGroupResponse;
}

export namespace DeleteGroupResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AddUsersToGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AddUsersToGroupRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): AddUsersToGroupRequest;
  clearUserIdsList(): AddUsersToGroupRequest;
  addUserIds(value: string, index?: number): AddUsersToGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToGroupRequest): AddUsersToGroupRequest.AsObject;
  static serializeBinaryToWriter(message: AddUsersToGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToGroupRequest;
  static deserializeBinaryFromReader(message: AddUsersToGroupRequest, reader: jspb.BinaryReader): AddUsersToGroupRequest;
}

export namespace AddUsersToGroupRequest {
  export type AsObject = {
    id: string,
    userIdsList: Array<string>,
  }
}

export class AddUsersToGroupResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): AddUsersToGroupResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): AddUsersToGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsersToGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsersToGroupResponse): AddUsersToGroupResponse.AsObject;
  static serializeBinaryToWriter(message: AddUsersToGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsersToGroupResponse;
  static deserializeBinaryFromReader(message: AddUsersToGroupResponse, reader: jspb.BinaryReader): AddUsersToGroupResponse;
}

export namespace AddUsersToGroupResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RemoveUsersFromGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveUsersFromGroupRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): RemoveUsersFromGroupRequest;
  clearUserIdsList(): RemoveUsersFromGroupRequest;
  addUserIds(value: string, index?: number): RemoveUsersFromGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsersFromGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsersFromGroupRequest): RemoveUsersFromGroupRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveUsersFromGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsersFromGroupRequest;
  static deserializeBinaryFromReader(message: RemoveUsersFromGroupRequest, reader: jspb.BinaryReader): RemoveUsersFromGroupRequest;
}

export namespace RemoveUsersFromGroupRequest {
  export type AsObject = {
    id: string,
    userIdsList: Array<string>,
  }
}

export class RemoveUsersFromGroupResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): RemoveUsersFromGroupResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): RemoveUsersFromGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsersFromGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsersFromGroupResponse): RemoveUsersFromGroupResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveUsersFromGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsersFromGroupResponse;
  static deserializeBinaryFromReader(message: RemoveUsersFromGroupResponse, reader: jspb.BinaryReader): RemoveUsersFromGroupResponse;
}

export namespace RemoveUsersFromGroupResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListGroupUsersRequest extends jspb.Message {
  getFiltersList(): Array<zitadel_group_v2_group_pb.GroupUsersSearchFilter>;
  setFiltersList(value: Array<zitadel_group_v2_group_pb.GroupUsersSearchFilter>): ListGroupUsersRequest;
  clearFiltersList(): ListGroupUsersRequest;
  addFilters(value?: zitadel_group_v2_group_pb.GroupUsersSearchFilter, index?: number): zitadel_group_v2_group_pb.GroupUsersSearchFilter;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListGroupUsersRequest;
  hasPagination(): boolean;
  clearPagination(): ListGroupUsersRequest;

  getSortingColumn(): zitadel_group_v2_group_pb.GroupUserFieldName;
  setSortingColumn(value: zitadel_group_v2_group_pb.GroupUserFieldName): ListGroupUsersRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListGroupUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupUsersRequest): ListGroupUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListGroupUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupUsersRequest;
  static deserializeBinaryFromReader(message: ListGroupUsersRequest, reader: jspb.BinaryReader): ListGroupUsersRequest;
}

export namespace ListGroupUsersRequest {
  export type AsObject = {
    filtersList: Array<zitadel_group_v2_group_pb.GroupUsersSearchFilter.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_group_v2_group_pb.GroupUserFieldName,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 3,
  }
}

export class ListGroupUsersResponse extends jspb.Message {
  getGroupUsersList(): Array<zitadel_group_v2_group_pb.GroupUser>;
  setGroupUsersList(value: Array<zitadel_group_v2_group_pb.GroupUser>): ListGroupUsersResponse;
  clearGroupUsersList(): ListGroupUsersResponse;
  addGroupUsers(value?: zitadel_group_v2_group_pb.GroupUser, index?: number): zitadel_group_v2_group_pb.GroupUser;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListGroupUsersResponse;
  hasPagination(): boolean;
  clearPagination(): ListGroupUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupUsersResponse): ListGroupUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupUsersResponse;
  static deserializeBinaryFromReader(message: ListGroupUsersResponse, reader: jspb.BinaryReader): ListGroupUsersResponse;
}

export namespace ListGroupUsersResponse {
  export type AsObject = {
    groupUsersList: Array<zitadel_group_v2_group_pb.GroupUser.AsObject>,
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
  }
}

