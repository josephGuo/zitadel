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
import * as zitadel_resources_user_v3alpha_authenticator_pb from '../../../../zitadel/resources/user/v3alpha/authenticator_pb'; // proto import: "zitadel/resources/user/v3alpha/authenticator.proto"
import * as zitadel_resources_user_v3alpha_communication_pb from '../../../../zitadel/resources/user/v3alpha/communication_pb'; // proto import: "zitadel/resources/user/v3alpha/communication.proto"
import * as zitadel_resources_user_v3alpha_query_pb from '../../../../zitadel/resources/user/v3alpha/query_pb'; // proto import: "zitadel/resources/user/v3alpha/query.proto"
import * as zitadel_resources_user_v3alpha_user_pb from '../../../../zitadel/resources/user/v3alpha/user_pb'; // proto import: "zitadel/resources/user/v3alpha/user.proto"


export class SearchUsersRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): SearchUsersRequest;
  hasInstance(): boolean;
  clearInstance(): SearchUsersRequest;

  getQuery(): zitadel_resources_object_v3alpha_object_pb.SearchQuery | undefined;
  setQuery(value?: zitadel_resources_object_v3alpha_object_pb.SearchQuery): SearchUsersRequest;
  hasQuery(): boolean;
  clearQuery(): SearchUsersRequest;

  getSortingColumn(): zitadel_resources_user_v3alpha_query_pb.FieldName;
  setSortingColumn(value: zitadel_resources_user_v3alpha_query_pb.FieldName): SearchUsersRequest;

  getFiltersList(): Array<zitadel_resources_user_v3alpha_query_pb.SearchFilter>;
  setFiltersList(value: Array<zitadel_resources_user_v3alpha_query_pb.SearchFilter>): SearchUsersRequest;
  clearFiltersList(): SearchUsersRequest;
  addFilters(value?: zitadel_resources_user_v3alpha_query_pb.SearchFilter, index?: number): zitadel_resources_user_v3alpha_query_pb.SearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersRequest): SearchUsersRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersRequest;
  static deserializeBinaryFromReader(message: SearchUsersRequest, reader: jspb.BinaryReader): SearchUsersRequest;
}

export namespace SearchUsersRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    query?: zitadel_resources_object_v3alpha_object_pb.SearchQuery.AsObject,
    sortingColumn: zitadel_resources_user_v3alpha_query_pb.FieldName,
    filtersList: Array<zitadel_resources_user_v3alpha_query_pb.SearchFilter.AsObject>,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class SearchUsersResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.ListDetails | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.ListDetails): SearchUsersResponse;
  hasDetails(): boolean;
  clearDetails(): SearchUsersResponse;

  getResultList(): Array<zitadel_resources_user_v3alpha_user_pb.GetUser>;
  setResultList(value: Array<zitadel_resources_user_v3alpha_user_pb.GetUser>): SearchUsersResponse;
  clearResultList(): SearchUsersResponse;
  addResult(value?: zitadel_resources_user_v3alpha_user_pb.GetUser, index?: number): zitadel_resources_user_v3alpha_user_pb.GetUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersResponse): SearchUsersResponse.AsObject;
  static serializeBinaryToWriter(message: SearchUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersResponse;
  static deserializeBinaryFromReader(message: SearchUsersResponse, reader: jspb.BinaryReader): SearchUsersResponse;
}

export namespace SearchUsersResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.ListDetails.AsObject,
    resultList: Array<zitadel_resources_user_v3alpha_user_pb.GetUser.AsObject>,
  }
}

export class GetUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): GetUserRequest;
  hasInstance(): boolean;
  clearInstance(): GetUserRequest;

  getId(): string;
  setId(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class GetUserResponse extends jspb.Message {
  getUser(): zitadel_resources_user_v3alpha_user_pb.GetUser | undefined;
  setUser(value?: zitadel_resources_user_v3alpha_user_pb.GetUser): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: zitadel_resources_user_v3alpha_user_pb.GetUser.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): CreateUserRequest;
  hasInstance(): boolean;
  clearInstance(): CreateUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): CreateUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): CreateUserRequest;

  getUser(): zitadel_resources_user_v3alpha_user_pb.CreateUser | undefined;
  setUser(value?: zitadel_resources_user_v3alpha_user_pb.CreateUser): CreateUserRequest;
  hasUser(): boolean;
  clearUser(): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    user?: zitadel_resources_user_v3alpha_user_pb.CreateUser.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }
}

export class CreateUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): CreateUserResponse;
  hasDetails(): boolean;
  clearDetails(): CreateUserResponse;

  getEmailCode(): string;
  setEmailCode(value: string): CreateUserResponse;
  hasEmailCode(): boolean;
  clearEmailCode(): CreateUserResponse;

  getPhoneCode(): string;
  setPhoneCode(value: string): CreateUserResponse;
  hasPhoneCode(): boolean;
  clearPhoneCode(): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    emailCode?: string,
    phoneCode?: string,
  }

  export enum EmailCodeCase { 
    _EMAIL_CODE_NOT_SET = 0,
    EMAIL_CODE = 2,
  }

  export enum PhoneCodeCase { 
    _PHONE_CODE_NOT_SET = 0,
    PHONE_CODE = 3,
  }
}

export class PatchUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): PatchUserRequest;
  hasInstance(): boolean;
  clearInstance(): PatchUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): PatchUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): PatchUserRequest;

  getId(): string;
  setId(value: string): PatchUserRequest;

  getUser(): zitadel_resources_user_v3alpha_user_pb.PatchUser | undefined;
  setUser(value?: zitadel_resources_user_v3alpha_user_pb.PatchUser): PatchUserRequest;
  hasUser(): boolean;
  clearUser(): PatchUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserRequest): PatchUserRequest.AsObject;
  static serializeBinaryToWriter(message: PatchUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserRequest;
  static deserializeBinaryFromReader(message: PatchUserRequest, reader: jspb.BinaryReader): PatchUserRequest;
}

export namespace PatchUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    user?: zitadel_resources_user_v3alpha_user_pb.PatchUser.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class PatchUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): PatchUserResponse;
  hasDetails(): boolean;
  clearDetails(): PatchUserResponse;

  getEmailCode(): string;
  setEmailCode(value: string): PatchUserResponse;
  hasEmailCode(): boolean;
  clearEmailCode(): PatchUserResponse;

  getPhoneCode(): string;
  setPhoneCode(value: string): PatchUserResponse;
  hasPhoneCode(): boolean;
  clearPhoneCode(): PatchUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUserResponse): PatchUserResponse.AsObject;
  static serializeBinaryToWriter(message: PatchUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUserResponse;
  static deserializeBinaryFromReader(message: PatchUserResponse, reader: jspb.BinaryReader): PatchUserResponse;
}

export namespace PatchUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    emailCode?: string,
    phoneCode?: string,
  }

  export enum EmailCodeCase { 
    _EMAIL_CODE_NOT_SET = 0,
    EMAIL_CODE = 2,
  }

  export enum PhoneCodeCase { 
    _PHONE_CODE_NOT_SET = 0,
    PHONE_CODE = 3,
  }
}

export class DeactivateUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): DeactivateUserRequest;
  hasInstance(): boolean;
  clearInstance(): DeactivateUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): DeactivateUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): DeactivateUserRequest;

  getId(): string;
  setId(value: string): DeactivateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateUserRequest): DeactivateUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateUserRequest;
  static deserializeBinaryFromReader(message: DeactivateUserRequest, reader: jspb.BinaryReader): DeactivateUserRequest;
}

export namespace DeactivateUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class DeactivateUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): DeactivateUserResponse;
  hasDetails(): boolean;
  clearDetails(): DeactivateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateUserResponse): DeactivateUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateUserResponse;
  static deserializeBinaryFromReader(message: DeactivateUserResponse, reader: jspb.BinaryReader): DeactivateUserResponse;
}

export namespace DeactivateUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class ActivateUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): ActivateUserRequest;
  hasInstance(): boolean;
  clearInstance(): ActivateUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): ActivateUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): ActivateUserRequest;

  getId(): string;
  setId(value: string): ActivateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateUserRequest): ActivateUserRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateUserRequest;
  static deserializeBinaryFromReader(message: ActivateUserRequest, reader: jspb.BinaryReader): ActivateUserRequest;
}

export namespace ActivateUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class ActivateUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): ActivateUserResponse;
  hasDetails(): boolean;
  clearDetails(): ActivateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateUserResponse): ActivateUserResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateUserResponse;
  static deserializeBinaryFromReader(message: ActivateUserResponse, reader: jspb.BinaryReader): ActivateUserResponse;
}

export namespace ActivateUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class LockUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): LockUserRequest;
  hasInstance(): boolean;
  clearInstance(): LockUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): LockUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): LockUserRequest;

  getId(): string;
  setId(value: string): LockUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LockUserRequest): LockUserRequest.AsObject;
  static serializeBinaryToWriter(message: LockUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockUserRequest;
  static deserializeBinaryFromReader(message: LockUserRequest, reader: jspb.BinaryReader): LockUserRequest;
}

export namespace LockUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class LockUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): LockUserResponse;
  hasDetails(): boolean;
  clearDetails(): LockUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LockUserResponse): LockUserResponse.AsObject;
  static serializeBinaryToWriter(message: LockUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockUserResponse;
  static deserializeBinaryFromReader(message: LockUserResponse, reader: jspb.BinaryReader): LockUserResponse;
}

export namespace LockUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class UnlockUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): UnlockUserRequest;
  hasInstance(): boolean;
  clearInstance(): UnlockUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): UnlockUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): UnlockUserRequest;

  getId(): string;
  setId(value: string): UnlockUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockUserRequest): UnlockUserRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockUserRequest;
  static deserializeBinaryFromReader(message: UnlockUserRequest, reader: jspb.BinaryReader): UnlockUserRequest;
}

export namespace UnlockUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class UnlockUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): UnlockUserResponse;
  hasDetails(): boolean;
  clearDetails(): UnlockUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockUserResponse): UnlockUserResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockUserResponse;
  static deserializeBinaryFromReader(message: UnlockUserResponse, reader: jspb.BinaryReader): UnlockUserResponse;
}

export namespace UnlockUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): DeleteUserRequest;
  hasInstance(): boolean;
  clearInstance(): DeleteUserRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): DeleteUserRequest;
  hasOrganization(): boolean;
  clearOrganization(): DeleteUserRequest;

  getId(): string;
  setId(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): DeleteUserResponse;
  hasDetails(): boolean;
  clearDetails(): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class SetContactEmailRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): SetContactEmailRequest;
  hasInstance(): boolean;
  clearInstance(): SetContactEmailRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): SetContactEmailRequest;
  hasOrganization(): boolean;
  clearOrganization(): SetContactEmailRequest;

  getId(): string;
  setId(value: string): SetContactEmailRequest;

  getEmail(): zitadel_resources_user_v3alpha_communication_pb.SetEmail | undefined;
  setEmail(value?: zitadel_resources_user_v3alpha_communication_pb.SetEmail): SetContactEmailRequest;
  hasEmail(): boolean;
  clearEmail(): SetContactEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetContactEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetContactEmailRequest): SetContactEmailRequest.AsObject;
  static serializeBinaryToWriter(message: SetContactEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetContactEmailRequest;
  static deserializeBinaryFromReader(message: SetContactEmailRequest, reader: jspb.BinaryReader): SetContactEmailRequest;
}

export namespace SetContactEmailRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    email?: zitadel_resources_user_v3alpha_communication_pb.SetEmail.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class SetContactEmailResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): SetContactEmailResponse;
  hasDetails(): boolean;
  clearDetails(): SetContactEmailResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): SetContactEmailResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): SetContactEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetContactEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetContactEmailResponse): SetContactEmailResponse.AsObject;
  static serializeBinaryToWriter(message: SetContactEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetContactEmailResponse;
  static deserializeBinaryFromReader(message: SetContactEmailResponse, reader: jspb.BinaryReader): SetContactEmailResponse;
}

export namespace SetContactEmailResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 3,
  }
}

export class VerifyContactEmailRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyContactEmailRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyContactEmailRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyContactEmailRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyContactEmailRequest;

  getId(): string;
  setId(value: string): VerifyContactEmailRequest;

  getVerificationCode(): string;
  setVerificationCode(value: string): VerifyContactEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyContactEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyContactEmailRequest): VerifyContactEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyContactEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyContactEmailRequest;
  static deserializeBinaryFromReader(message: VerifyContactEmailRequest, reader: jspb.BinaryReader): VerifyContactEmailRequest;
}

export namespace VerifyContactEmailRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    verificationCode: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyContactEmailResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyContactEmailResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyContactEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyContactEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyContactEmailResponse): VerifyContactEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyContactEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyContactEmailResponse;
  static deserializeBinaryFromReader(message: VerifyContactEmailResponse, reader: jspb.BinaryReader): VerifyContactEmailResponse;
}

export namespace VerifyContactEmailResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class ResendContactEmailCodeRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): ResendContactEmailCodeRequest;
  hasInstance(): boolean;
  clearInstance(): ResendContactEmailCodeRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): ResendContactEmailCodeRequest;
  hasOrganization(): boolean;
  clearOrganization(): ResendContactEmailCodeRequest;

  getId(): string;
  setId(value: string): ResendContactEmailCodeRequest;

  getSendCode(): zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode | undefined;
  setSendCode(value?: zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode): ResendContactEmailCodeRequest;
  hasSendCode(): boolean;
  clearSendCode(): ResendContactEmailCodeRequest;

  getReturnCode(): zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode | undefined;
  setReturnCode(value?: zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode): ResendContactEmailCodeRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): ResendContactEmailCodeRequest;

  getVerificationCase(): ResendContactEmailCodeRequest.VerificationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendContactEmailCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendContactEmailCodeRequest): ResendContactEmailCodeRequest.AsObject;
  static serializeBinaryToWriter(message: ResendContactEmailCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendContactEmailCodeRequest;
  static deserializeBinaryFromReader(message: ResendContactEmailCodeRequest, reader: jspb.BinaryReader): ResendContactEmailCodeRequest;
}

export namespace ResendContactEmailCodeRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    sendCode?: zitadel_resources_user_v3alpha_communication_pb.SendEmailVerificationCode.AsObject,
    returnCode?: zitadel_resources_user_v3alpha_communication_pb.ReturnEmailVerificationCode.AsObject,
  }

  export enum VerificationCase { 
    VERIFICATION_NOT_SET = 0,
    SEND_CODE = 4,
    RETURN_CODE = 5,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class ResendContactEmailCodeResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): ResendContactEmailCodeResponse;
  hasDetails(): boolean;
  clearDetails(): ResendContactEmailCodeResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): ResendContactEmailCodeResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): ResendContactEmailCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendContactEmailCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendContactEmailCodeResponse): ResendContactEmailCodeResponse.AsObject;
  static serializeBinaryToWriter(message: ResendContactEmailCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendContactEmailCodeResponse;
  static deserializeBinaryFromReader(message: ResendContactEmailCodeResponse, reader: jspb.BinaryReader): ResendContactEmailCodeResponse;
}

export namespace ResendContactEmailCodeResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 2,
  }
}

export class SetContactPhoneRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): SetContactPhoneRequest;
  hasInstance(): boolean;
  clearInstance(): SetContactPhoneRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): SetContactPhoneRequest;
  hasOrganization(): boolean;
  clearOrganization(): SetContactPhoneRequest;

  getId(): string;
  setId(value: string): SetContactPhoneRequest;

  getPhone(): zitadel_resources_user_v3alpha_communication_pb.SetPhone | undefined;
  setPhone(value?: zitadel_resources_user_v3alpha_communication_pb.SetPhone): SetContactPhoneRequest;
  hasPhone(): boolean;
  clearPhone(): SetContactPhoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetContactPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetContactPhoneRequest): SetContactPhoneRequest.AsObject;
  static serializeBinaryToWriter(message: SetContactPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetContactPhoneRequest;
  static deserializeBinaryFromReader(message: SetContactPhoneRequest, reader: jspb.BinaryReader): SetContactPhoneRequest;
}

export namespace SetContactPhoneRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    phone?: zitadel_resources_user_v3alpha_communication_pb.SetPhone.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class SetContactPhoneResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): SetContactPhoneResponse;
  hasDetails(): boolean;
  clearDetails(): SetContactPhoneResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): SetContactPhoneResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): SetContactPhoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetContactPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetContactPhoneResponse): SetContactPhoneResponse.AsObject;
  static serializeBinaryToWriter(message: SetContactPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetContactPhoneResponse;
  static deserializeBinaryFromReader(message: SetContactPhoneResponse, reader: jspb.BinaryReader): SetContactPhoneResponse;
}

export namespace SetContactPhoneResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 3,
  }
}

export class VerifyContactPhoneRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyContactPhoneRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyContactPhoneRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyContactPhoneRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyContactPhoneRequest;

  getId(): string;
  setId(value: string): VerifyContactPhoneRequest;

  getVerificationCode(): string;
  setVerificationCode(value: string): VerifyContactPhoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyContactPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyContactPhoneRequest): VerifyContactPhoneRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyContactPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyContactPhoneRequest;
  static deserializeBinaryFromReader(message: VerifyContactPhoneRequest, reader: jspb.BinaryReader): VerifyContactPhoneRequest;
}

export namespace VerifyContactPhoneRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    verificationCode: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyContactPhoneResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyContactPhoneResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyContactPhoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyContactPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyContactPhoneResponse): VerifyContactPhoneResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyContactPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyContactPhoneResponse;
  static deserializeBinaryFromReader(message: VerifyContactPhoneResponse, reader: jspb.BinaryReader): VerifyContactPhoneResponse;
}

export namespace VerifyContactPhoneResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class ResendContactPhoneCodeRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): ResendContactPhoneCodeRequest;
  hasInstance(): boolean;
  clearInstance(): ResendContactPhoneCodeRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): ResendContactPhoneCodeRequest;
  hasOrganization(): boolean;
  clearOrganization(): ResendContactPhoneCodeRequest;

  getId(): string;
  setId(value: string): ResendContactPhoneCodeRequest;

  getSendCode(): zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode | undefined;
  setSendCode(value?: zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode): ResendContactPhoneCodeRequest;
  hasSendCode(): boolean;
  clearSendCode(): ResendContactPhoneCodeRequest;

  getReturnCode(): zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode | undefined;
  setReturnCode(value?: zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode): ResendContactPhoneCodeRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): ResendContactPhoneCodeRequest;

  getVerificationCase(): ResendContactPhoneCodeRequest.VerificationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendContactPhoneCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendContactPhoneCodeRequest): ResendContactPhoneCodeRequest.AsObject;
  static serializeBinaryToWriter(message: ResendContactPhoneCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendContactPhoneCodeRequest;
  static deserializeBinaryFromReader(message: ResendContactPhoneCodeRequest, reader: jspb.BinaryReader): ResendContactPhoneCodeRequest;
}

export namespace ResendContactPhoneCodeRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    sendCode?: zitadel_resources_user_v3alpha_communication_pb.SendPhoneVerificationCode.AsObject,
    returnCode?: zitadel_resources_user_v3alpha_communication_pb.ReturnPhoneVerificationCode.AsObject,
  }

  export enum VerificationCase { 
    VERIFICATION_NOT_SET = 0,
    SEND_CODE = 4,
    RETURN_CODE = 5,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class ResendContactPhoneCodeResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): ResendContactPhoneCodeResponse;
  hasDetails(): boolean;
  clearDetails(): ResendContactPhoneCodeResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): ResendContactPhoneCodeResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): ResendContactPhoneCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendContactPhoneCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendContactPhoneCodeResponse): ResendContactPhoneCodeResponse.AsObject;
  static serializeBinaryToWriter(message: ResendContactPhoneCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendContactPhoneCodeResponse;
  static deserializeBinaryFromReader(message: ResendContactPhoneCodeResponse, reader: jspb.BinaryReader): ResendContactPhoneCodeResponse;
}

export namespace ResendContactPhoneCodeResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 2,
  }
}

export class AddUsernameRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): AddUsernameRequest;
  hasInstance(): boolean;
  clearInstance(): AddUsernameRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): AddUsernameRequest;
  hasOrganization(): boolean;
  clearOrganization(): AddUsernameRequest;

  getId(): string;
  setId(value: string): AddUsernameRequest;

  getUsername(): zitadel_resources_user_v3alpha_authenticator_pb.SetUsername | undefined;
  setUsername(value?: zitadel_resources_user_v3alpha_authenticator_pb.SetUsername): AddUsernameRequest;
  hasUsername(): boolean;
  clearUsername(): AddUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsernameRequest): AddUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: AddUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsernameRequest;
  static deserializeBinaryFromReader(message: AddUsernameRequest, reader: jspb.BinaryReader): AddUsernameRequest;
}

export namespace AddUsernameRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    username?: zitadel_resources_user_v3alpha_authenticator_pb.SetUsername.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class AddUsernameResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): AddUsernameResponse;
  hasDetails(): boolean;
  clearDetails(): AddUsernameResponse;

  getUsernameId(): string;
  setUsernameId(value: string): AddUsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUsernameResponse): AddUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: AddUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUsernameResponse;
  static deserializeBinaryFromReader(message: AddUsernameResponse, reader: jspb.BinaryReader): AddUsernameResponse;
}

export namespace AddUsernameResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    usernameId: string,
  }
}

export class RemoveUsernameRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveUsernameRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveUsernameRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveUsernameRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveUsernameRequest;

  getId(): string;
  setId(value: string): RemoveUsernameRequest;

  getUsernameId(): string;
  setUsernameId(value: string): RemoveUsernameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsernameRequest): RemoveUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsernameRequest;
  static deserializeBinaryFromReader(message: RemoveUsernameRequest, reader: jspb.BinaryReader): RemoveUsernameRequest;
}

export namespace RemoveUsernameRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    usernameId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveUsernameResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveUsernameResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveUsernameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUsernameResponse): RemoveUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUsernameResponse;
  static deserializeBinaryFromReader(message: RemoveUsernameResponse, reader: jspb.BinaryReader): RemoveUsernameResponse;
}

export namespace RemoveUsernameResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class SetPasswordRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): SetPasswordRequest;
  hasInstance(): boolean;
  clearInstance(): SetPasswordRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): SetPasswordRequest;
  hasOrganization(): boolean;
  clearOrganization(): SetPasswordRequest;

  getId(): string;
  setId(value: string): SetPasswordRequest;

  getNewPassword(): zitadel_resources_user_v3alpha_authenticator_pb.SetPassword | undefined;
  setNewPassword(value?: zitadel_resources_user_v3alpha_authenticator_pb.SetPassword): SetPasswordRequest;
  hasNewPassword(): boolean;
  clearNewPassword(): SetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPasswordRequest): SetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: SetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPasswordRequest;
  static deserializeBinaryFromReader(message: SetPasswordRequest, reader: jspb.BinaryReader): SetPasswordRequest;
}

export namespace SetPasswordRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    newPassword?: zitadel_resources_user_v3alpha_authenticator_pb.SetPassword.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class SetPasswordResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): SetPasswordResponse;
  hasDetails(): boolean;
  clearDetails(): SetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPasswordResponse): SetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: SetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPasswordResponse;
  static deserializeBinaryFromReader(message: SetPasswordResponse, reader: jspb.BinaryReader): SetPasswordResponse;
}

export namespace SetPasswordResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class RequestPasswordResetRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RequestPasswordResetRequest;
  hasInstance(): boolean;
  clearInstance(): RequestPasswordResetRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RequestPasswordResetRequest;
  hasOrganization(): boolean;
  clearOrganization(): RequestPasswordResetRequest;

  getId(): string;
  setId(value: string): RequestPasswordResetRequest;

  getSendEmail(): zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail | undefined;
  setSendEmail(value?: zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail): RequestPasswordResetRequest;
  hasSendEmail(): boolean;
  clearSendEmail(): RequestPasswordResetRequest;

  getSendSms(): zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS | undefined;
  setSendSms(value?: zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS): RequestPasswordResetRequest;
  hasSendSms(): boolean;
  clearSendSms(): RequestPasswordResetRequest;

  getReturnCode(): zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode | undefined;
  setReturnCode(value?: zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode): RequestPasswordResetRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): RequestPasswordResetRequest;

  getMediumCase(): RequestPasswordResetRequest.MediumCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPasswordResetRequest): RequestPasswordResetRequest.AsObject;
  static serializeBinaryToWriter(message: RequestPasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPasswordResetRequest;
  static deserializeBinaryFromReader(message: RequestPasswordResetRequest, reader: jspb.BinaryReader): RequestPasswordResetRequest;
}

export namespace RequestPasswordResetRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    sendEmail?: zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetEmail.AsObject,
    sendSms?: zitadel_resources_user_v3alpha_authenticator_pb.SendPasswordResetSMS.AsObject,
    returnCode?: zitadel_resources_user_v3alpha_authenticator_pb.ReturnPasswordResetCode.AsObject,
  }

  export enum MediumCase { 
    MEDIUM_NOT_SET = 0,
    SEND_EMAIL = 4,
    SEND_SMS = 5,
    RETURN_CODE = 6,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RequestPasswordResetResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RequestPasswordResetResponse;
  hasDetails(): boolean;
  clearDetails(): RequestPasswordResetResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): RequestPasswordResetResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): RequestPasswordResetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPasswordResetResponse): RequestPasswordResetResponse.AsObject;
  static serializeBinaryToWriter(message: RequestPasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPasswordResetResponse;
  static deserializeBinaryFromReader(message: RequestPasswordResetResponse, reader: jspb.BinaryReader): RequestPasswordResetResponse;
}

export namespace RequestPasswordResetResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 2,
  }
}

export class StartWebAuthNRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): StartWebAuthNRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): StartWebAuthNRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): StartWebAuthNRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): StartWebAuthNRegistrationRequest;

  getId(): string;
  setId(value: string): StartWebAuthNRegistrationRequest;

  getRegistration(): zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration | undefined;
  setRegistration(value?: zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration): StartWebAuthNRegistrationRequest;
  hasRegistration(): boolean;
  clearRegistration(): StartWebAuthNRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartWebAuthNRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartWebAuthNRegistrationRequest): StartWebAuthNRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: StartWebAuthNRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartWebAuthNRegistrationRequest;
  static deserializeBinaryFromReader(message: StartWebAuthNRegistrationRequest, reader: jspb.BinaryReader): StartWebAuthNRegistrationRequest;
}

export namespace StartWebAuthNRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    registration?: zitadel_resources_user_v3alpha_authenticator_pb.StartWebAuthNRegistration.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class StartWebAuthNRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): StartWebAuthNRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): StartWebAuthNRegistrationResponse;

  getWebAuthNId(): string;
  setWebAuthNId(value: string): StartWebAuthNRegistrationResponse;

  getPublicKeyCredentialCreationOptions(): google_protobuf_struct_pb.Struct | undefined;
  setPublicKeyCredentialCreationOptions(value?: google_protobuf_struct_pb.Struct): StartWebAuthNRegistrationResponse;
  hasPublicKeyCredentialCreationOptions(): boolean;
  clearPublicKeyCredentialCreationOptions(): StartWebAuthNRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartWebAuthNRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartWebAuthNRegistrationResponse): StartWebAuthNRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: StartWebAuthNRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartWebAuthNRegistrationResponse;
  static deserializeBinaryFromReader(message: StartWebAuthNRegistrationResponse, reader: jspb.BinaryReader): StartWebAuthNRegistrationResponse;
}

export namespace StartWebAuthNRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    webAuthNId: string,
    publicKeyCredentialCreationOptions?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class VerifyWebAuthNRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyWebAuthNRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyWebAuthNRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyWebAuthNRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyWebAuthNRegistrationRequest;

  getId(): string;
  setId(value: string): VerifyWebAuthNRegistrationRequest;

  getWebAuthNId(): string;
  setWebAuthNId(value: string): VerifyWebAuthNRegistrationRequest;

  getVerify(): zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration | undefined;
  setVerify(value?: zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration): VerifyWebAuthNRegistrationRequest;
  hasVerify(): boolean;
  clearVerify(): VerifyWebAuthNRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyWebAuthNRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyWebAuthNRegistrationRequest): VerifyWebAuthNRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyWebAuthNRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyWebAuthNRegistrationRequest;
  static deserializeBinaryFromReader(message: VerifyWebAuthNRegistrationRequest, reader: jspb.BinaryReader): VerifyWebAuthNRegistrationRequest;
}

export namespace VerifyWebAuthNRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    webAuthNId: string,
    verify?: zitadel_resources_user_v3alpha_authenticator_pb.VerifyWebAuthNRegistration.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyWebAuthNRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyWebAuthNRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyWebAuthNRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyWebAuthNRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyWebAuthNRegistrationResponse): VerifyWebAuthNRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyWebAuthNRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyWebAuthNRegistrationResponse;
  static deserializeBinaryFromReader(message: VerifyWebAuthNRegistrationResponse, reader: jspb.BinaryReader): VerifyWebAuthNRegistrationResponse;
}

export namespace VerifyWebAuthNRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class CreateWebAuthNRegistrationLinkRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): CreateWebAuthNRegistrationLinkRequest;
  hasInstance(): boolean;
  clearInstance(): CreateWebAuthNRegistrationLinkRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): CreateWebAuthNRegistrationLinkRequest;
  hasOrganization(): boolean;
  clearOrganization(): CreateWebAuthNRegistrationLinkRequest;

  getId(): string;
  setId(value: string): CreateWebAuthNRegistrationLinkRequest;

  getSendLink(): zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink | undefined;
  setSendLink(value?: zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink): CreateWebAuthNRegistrationLinkRequest;
  hasSendLink(): boolean;
  clearSendLink(): CreateWebAuthNRegistrationLinkRequest;

  getReturnCode(): zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode | undefined;
  setReturnCode(value?: zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode): CreateWebAuthNRegistrationLinkRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): CreateWebAuthNRegistrationLinkRequest;

  getMediumCase(): CreateWebAuthNRegistrationLinkRequest.MediumCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebAuthNRegistrationLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebAuthNRegistrationLinkRequest): CreateWebAuthNRegistrationLinkRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebAuthNRegistrationLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebAuthNRegistrationLinkRequest;
  static deserializeBinaryFromReader(message: CreateWebAuthNRegistrationLinkRequest, reader: jspb.BinaryReader): CreateWebAuthNRegistrationLinkRequest;
}

export namespace CreateWebAuthNRegistrationLinkRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    sendLink?: zitadel_resources_user_v3alpha_authenticator_pb.SendWebAuthNRegistrationLink.AsObject,
    returnCode?: zitadel_resources_user_v3alpha_authenticator_pb.ReturnWebAuthNRegistrationCode.AsObject,
  }

  export enum MediumCase { 
    MEDIUM_NOT_SET = 0,
    SEND_LINK = 4,
    RETURN_CODE = 5,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class CreateWebAuthNRegistrationLinkResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): CreateWebAuthNRegistrationLinkResponse;
  hasDetails(): boolean;
  clearDetails(): CreateWebAuthNRegistrationLinkResponse;

  getCode(): zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode | undefined;
  setCode(value?: zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode): CreateWebAuthNRegistrationLinkResponse;
  hasCode(): boolean;
  clearCode(): CreateWebAuthNRegistrationLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebAuthNRegistrationLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebAuthNRegistrationLinkResponse): CreateWebAuthNRegistrationLinkResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebAuthNRegistrationLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebAuthNRegistrationLinkResponse;
  static deserializeBinaryFromReader(message: CreateWebAuthNRegistrationLinkResponse, reader: jspb.BinaryReader): CreateWebAuthNRegistrationLinkResponse;
}

export namespace CreateWebAuthNRegistrationLinkResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    code?: zitadel_resources_user_v3alpha_authenticator_pb.AuthenticatorRegistrationCode.AsObject,
  }

  export enum CodeCase { 
    _CODE_NOT_SET = 0,
    CODE = 2,
  }
}

export class RemoveWebAuthNAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveWebAuthNAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveWebAuthNAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveWebAuthNAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveWebAuthNAuthenticatorRequest;

  getId(): string;
  setId(value: string): RemoveWebAuthNAuthenticatorRequest;

  getWebAuthNId(): string;
  setWebAuthNId(value: string): RemoveWebAuthNAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebAuthNAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebAuthNAuthenticatorRequest): RemoveWebAuthNAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveWebAuthNAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebAuthNAuthenticatorRequest;
  static deserializeBinaryFromReader(message: RemoveWebAuthNAuthenticatorRequest, reader: jspb.BinaryReader): RemoveWebAuthNAuthenticatorRequest;
}

export namespace RemoveWebAuthNAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    webAuthNId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveWebAuthNAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveWebAuthNAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveWebAuthNAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWebAuthNAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWebAuthNAuthenticatorResponse): RemoveWebAuthNAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveWebAuthNAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWebAuthNAuthenticatorResponse;
  static deserializeBinaryFromReader(message: RemoveWebAuthNAuthenticatorResponse, reader: jspb.BinaryReader): RemoveWebAuthNAuthenticatorResponse;
}

export namespace RemoveWebAuthNAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class StartTOTPRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): StartTOTPRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): StartTOTPRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): StartTOTPRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): StartTOTPRegistrationRequest;

  getId(): string;
  setId(value: string): StartTOTPRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTOTPRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartTOTPRegistrationRequest): StartTOTPRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: StartTOTPRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTOTPRegistrationRequest;
  static deserializeBinaryFromReader(message: StartTOTPRegistrationRequest, reader: jspb.BinaryReader): StartTOTPRegistrationRequest;
}

export namespace StartTOTPRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class StartTOTPRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): StartTOTPRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): StartTOTPRegistrationResponse;

  getTotpId(): string;
  setTotpId(value: string): StartTOTPRegistrationResponse;

  getUri(): string;
  setUri(value: string): StartTOTPRegistrationResponse;

  getSecret(): string;
  setSecret(value: string): StartTOTPRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartTOTPRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartTOTPRegistrationResponse): StartTOTPRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: StartTOTPRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartTOTPRegistrationResponse;
  static deserializeBinaryFromReader(message: StartTOTPRegistrationResponse, reader: jspb.BinaryReader): StartTOTPRegistrationResponse;
}

export namespace StartTOTPRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    totpId: string,
    uri: string,
    secret: string,
  }
}

export class VerifyTOTPRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyTOTPRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyTOTPRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyTOTPRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyTOTPRegistrationRequest;

  getId(): string;
  setId(value: string): VerifyTOTPRegistrationRequest;

  getTotpId(): string;
  setTotpId(value: string): VerifyTOTPRegistrationRequest;

  getCode(): string;
  setCode(value: string): VerifyTOTPRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTOTPRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTOTPRegistrationRequest): VerifyTOTPRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyTOTPRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTOTPRegistrationRequest;
  static deserializeBinaryFromReader(message: VerifyTOTPRegistrationRequest, reader: jspb.BinaryReader): VerifyTOTPRegistrationRequest;
}

export namespace VerifyTOTPRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    totpId: string,
    code: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyTOTPRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyTOTPRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyTOTPRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTOTPRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTOTPRegistrationResponse): VerifyTOTPRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyTOTPRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTOTPRegistrationResponse;
  static deserializeBinaryFromReader(message: VerifyTOTPRegistrationResponse, reader: jspb.BinaryReader): VerifyTOTPRegistrationResponse;
}

export namespace VerifyTOTPRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class RemoveTOTPAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveTOTPAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveTOTPAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveTOTPAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveTOTPAuthenticatorRequest;

  getId(): string;
  setId(value: string): RemoveTOTPAuthenticatorRequest;

  getTotpId(): string;
  setTotpId(value: string): RemoveTOTPAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTOTPAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTOTPAuthenticatorRequest): RemoveTOTPAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTOTPAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTOTPAuthenticatorRequest;
  static deserializeBinaryFromReader(message: RemoveTOTPAuthenticatorRequest, reader: jspb.BinaryReader): RemoveTOTPAuthenticatorRequest;
}

export namespace RemoveTOTPAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    totpId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveTOTPAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveTOTPAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveTOTPAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTOTPAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTOTPAuthenticatorResponse): RemoveTOTPAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveTOTPAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTOTPAuthenticatorResponse;
  static deserializeBinaryFromReader(message: RemoveTOTPAuthenticatorResponse, reader: jspb.BinaryReader): RemoveTOTPAuthenticatorResponse;
}

export namespace RemoveTOTPAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class AddOTPSMSAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): AddOTPSMSAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): AddOTPSMSAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): AddOTPSMSAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): AddOTPSMSAuthenticatorRequest;

  getId(): string;
  setId(value: string): AddOTPSMSAuthenticatorRequest;

  getPhone(): zitadel_resources_user_v3alpha_communication_pb.SetPhone | undefined;
  setPhone(value?: zitadel_resources_user_v3alpha_communication_pb.SetPhone): AddOTPSMSAuthenticatorRequest;
  hasPhone(): boolean;
  clearPhone(): AddOTPSMSAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOTPSMSAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOTPSMSAuthenticatorRequest): AddOTPSMSAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: AddOTPSMSAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOTPSMSAuthenticatorRequest;
  static deserializeBinaryFromReader(message: AddOTPSMSAuthenticatorRequest, reader: jspb.BinaryReader): AddOTPSMSAuthenticatorRequest;
}

export namespace AddOTPSMSAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    phone?: zitadel_resources_user_v3alpha_communication_pb.SetPhone.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class AddOTPSMSAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): AddOTPSMSAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): AddOTPSMSAuthenticatorResponse;

  getOtpSmsId(): string;
  setOtpSmsId(value: string): AddOTPSMSAuthenticatorResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): AddOTPSMSAuthenticatorResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): AddOTPSMSAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOTPSMSAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOTPSMSAuthenticatorResponse): AddOTPSMSAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: AddOTPSMSAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOTPSMSAuthenticatorResponse;
  static deserializeBinaryFromReader(message: AddOTPSMSAuthenticatorResponse, reader: jspb.BinaryReader): AddOTPSMSAuthenticatorResponse;
}

export namespace AddOTPSMSAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    otpSmsId: string,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 3,
  }
}

export class VerifyOTPSMSRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyOTPSMSRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyOTPSMSRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyOTPSMSRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyOTPSMSRegistrationRequest;

  getId(): string;
  setId(value: string): VerifyOTPSMSRegistrationRequest;

  getOtpSmsId(): string;
  setOtpSmsId(value: string): VerifyOTPSMSRegistrationRequest;

  getCode(): string;
  setCode(value: string): VerifyOTPSMSRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPSMSRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPSMSRegistrationRequest): VerifyOTPSMSRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPSMSRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPSMSRegistrationRequest;
  static deserializeBinaryFromReader(message: VerifyOTPSMSRegistrationRequest, reader: jspb.BinaryReader): VerifyOTPSMSRegistrationRequest;
}

export namespace VerifyOTPSMSRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    otpSmsId: string,
    code: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyOTPSMSRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyOTPSMSRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyOTPSMSRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPSMSRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPSMSRegistrationResponse): VerifyOTPSMSRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPSMSRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPSMSRegistrationResponse;
  static deserializeBinaryFromReader(message: VerifyOTPSMSRegistrationResponse, reader: jspb.BinaryReader): VerifyOTPSMSRegistrationResponse;
}

export namespace VerifyOTPSMSRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class RemoveOTPSMSAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveOTPSMSAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveOTPSMSAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveOTPSMSAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveOTPSMSAuthenticatorRequest;

  getId(): string;
  setId(value: string): RemoveOTPSMSAuthenticatorRequest;

  getOtpSmsId(): string;
  setOtpSmsId(value: string): RemoveOTPSMSAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOTPSMSAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOTPSMSAuthenticatorRequest): RemoveOTPSMSAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveOTPSMSAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOTPSMSAuthenticatorRequest;
  static deserializeBinaryFromReader(message: RemoveOTPSMSAuthenticatorRequest, reader: jspb.BinaryReader): RemoveOTPSMSAuthenticatorRequest;
}

export namespace RemoveOTPSMSAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    otpSmsId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveOTPSMSAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveOTPSMSAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveOTPSMSAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOTPSMSAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOTPSMSAuthenticatorResponse): RemoveOTPSMSAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveOTPSMSAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOTPSMSAuthenticatorResponse;
  static deserializeBinaryFromReader(message: RemoveOTPSMSAuthenticatorResponse, reader: jspb.BinaryReader): RemoveOTPSMSAuthenticatorResponse;
}

export namespace RemoveOTPSMSAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class AddOTPEmailAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): AddOTPEmailAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): AddOTPEmailAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): AddOTPEmailAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): AddOTPEmailAuthenticatorRequest;

  getId(): string;
  setId(value: string): AddOTPEmailAuthenticatorRequest;

  getEmail(): zitadel_resources_user_v3alpha_communication_pb.SetEmail | undefined;
  setEmail(value?: zitadel_resources_user_v3alpha_communication_pb.SetEmail): AddOTPEmailAuthenticatorRequest;
  hasEmail(): boolean;
  clearEmail(): AddOTPEmailAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOTPEmailAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOTPEmailAuthenticatorRequest): AddOTPEmailAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: AddOTPEmailAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOTPEmailAuthenticatorRequest;
  static deserializeBinaryFromReader(message: AddOTPEmailAuthenticatorRequest, reader: jspb.BinaryReader): AddOTPEmailAuthenticatorRequest;
}

export namespace AddOTPEmailAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    email?: zitadel_resources_user_v3alpha_communication_pb.SetEmail.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class AddOTPEmailAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): AddOTPEmailAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): AddOTPEmailAuthenticatorResponse;

  getOtpEmailId(): string;
  setOtpEmailId(value: string): AddOTPEmailAuthenticatorResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): AddOTPEmailAuthenticatorResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): AddOTPEmailAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOTPEmailAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOTPEmailAuthenticatorResponse): AddOTPEmailAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: AddOTPEmailAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOTPEmailAuthenticatorResponse;
  static deserializeBinaryFromReader(message: AddOTPEmailAuthenticatorResponse, reader: jspb.BinaryReader): AddOTPEmailAuthenticatorResponse;
}

export namespace AddOTPEmailAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    otpEmailId: string,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 3,
  }
}

export class VerifyOTPEmailRegistrationRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): VerifyOTPEmailRegistrationRequest;
  hasInstance(): boolean;
  clearInstance(): VerifyOTPEmailRegistrationRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): VerifyOTPEmailRegistrationRequest;
  hasOrganization(): boolean;
  clearOrganization(): VerifyOTPEmailRegistrationRequest;

  getId(): string;
  setId(value: string): VerifyOTPEmailRegistrationRequest;

  getOtpEmailId(): string;
  setOtpEmailId(value: string): VerifyOTPEmailRegistrationRequest;

  getCode(): string;
  setCode(value: string): VerifyOTPEmailRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPEmailRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPEmailRegistrationRequest): VerifyOTPEmailRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPEmailRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPEmailRegistrationRequest;
  static deserializeBinaryFromReader(message: VerifyOTPEmailRegistrationRequest, reader: jspb.BinaryReader): VerifyOTPEmailRegistrationRequest;
}

export namespace VerifyOTPEmailRegistrationRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    otpEmailId: string,
    code: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class VerifyOTPEmailRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): VerifyOTPEmailRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyOTPEmailRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPEmailRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPEmailRegistrationResponse): VerifyOTPEmailRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPEmailRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPEmailRegistrationResponse;
  static deserializeBinaryFromReader(message: VerifyOTPEmailRegistrationResponse, reader: jspb.BinaryReader): VerifyOTPEmailRegistrationResponse;
}

export namespace VerifyOTPEmailRegistrationResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class RemoveOTPEmailAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveOTPEmailAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveOTPEmailAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveOTPEmailAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveOTPEmailAuthenticatorRequest;

  getId(): string;
  setId(value: string): RemoveOTPEmailAuthenticatorRequest;

  getOtpEmailId(): string;
  setOtpEmailId(value: string): RemoveOTPEmailAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOTPEmailAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOTPEmailAuthenticatorRequest): RemoveOTPEmailAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveOTPEmailAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOTPEmailAuthenticatorRequest;
  static deserializeBinaryFromReader(message: RemoveOTPEmailAuthenticatorRequest, reader: jspb.BinaryReader): RemoveOTPEmailAuthenticatorRequest;
}

export namespace RemoveOTPEmailAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    otpEmailId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveOTPEmailAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveOTPEmailAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveOTPEmailAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveOTPEmailAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveOTPEmailAuthenticatorResponse): RemoveOTPEmailAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveOTPEmailAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveOTPEmailAuthenticatorResponse;
  static deserializeBinaryFromReader(message: RemoveOTPEmailAuthenticatorResponse, reader: jspb.BinaryReader): RemoveOTPEmailAuthenticatorResponse;
}

export namespace RemoveOTPEmailAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class StartIdentityProviderIntentRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): StartIdentityProviderIntentRequest;
  hasInstance(): boolean;
  clearInstance(): StartIdentityProviderIntentRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): StartIdentityProviderIntentRequest;
  hasOrganization(): boolean;
  clearOrganization(): StartIdentityProviderIntentRequest;

  getIdpId(): string;
  setIdpId(value: string): StartIdentityProviderIntentRequest;

  getUrls(): zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs | undefined;
  setUrls(value?: zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs): StartIdentityProviderIntentRequest;
  hasUrls(): boolean;
  clearUrls(): StartIdentityProviderIntentRequest;

  getLdap(): zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials | undefined;
  setLdap(value?: zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials): StartIdentityProviderIntentRequest;
  hasLdap(): boolean;
  clearLdap(): StartIdentityProviderIntentRequest;

  getContentCase(): StartIdentityProviderIntentRequest.ContentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIdentityProviderIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartIdentityProviderIntentRequest): StartIdentityProviderIntentRequest.AsObject;
  static serializeBinaryToWriter(message: StartIdentityProviderIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIdentityProviderIntentRequest;
  static deserializeBinaryFromReader(message: StartIdentityProviderIntentRequest, reader: jspb.BinaryReader): StartIdentityProviderIntentRequest;
}

export namespace StartIdentityProviderIntentRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    idpId: string,
    urls?: zitadel_resources_user_v3alpha_authenticator_pb.RedirectURLs.AsObject,
    ldap?: zitadel_resources_user_v3alpha_authenticator_pb.LDAPCredentials.AsObject,
  }

  export enum ContentCase { 
    CONTENT_NOT_SET = 0,
    URLS = 4,
    LDAP = 5,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class StartIdentityProviderIntentResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): StartIdentityProviderIntentResponse;
  hasDetails(): boolean;
  clearDetails(): StartIdentityProviderIntentResponse;

  getAuthUrl(): string;
  setAuthUrl(value: string): StartIdentityProviderIntentResponse;

  getIdpIntent(): zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent | undefined;
  setIdpIntent(value?: zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent): StartIdentityProviderIntentResponse;
  hasIdpIntent(): boolean;
  clearIdpIntent(): StartIdentityProviderIntentResponse;

  getPostForm(): Uint8Array | string;
  getPostForm_asU8(): Uint8Array;
  getPostForm_asB64(): string;
  setPostForm(value: Uint8Array | string): StartIdentityProviderIntentResponse;

  getNextStepCase(): StartIdentityProviderIntentResponse.NextStepCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIdentityProviderIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartIdentityProviderIntentResponse): StartIdentityProviderIntentResponse.AsObject;
  static serializeBinaryToWriter(message: StartIdentityProviderIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIdentityProviderIntentResponse;
  static deserializeBinaryFromReader(message: StartIdentityProviderIntentResponse, reader: jspb.BinaryReader): StartIdentityProviderIntentResponse;
}

export namespace StartIdentityProviderIntentResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    authUrl: string,
    idpIntent?: zitadel_resources_user_v3alpha_authenticator_pb.IdentityProviderIntent.AsObject,
    postForm: Uint8Array | string,
  }

  export enum NextStepCase { 
    NEXT_STEP_NOT_SET = 0,
    AUTH_URL = 2,
    IDP_INTENT = 3,
    POST_FORM = 4,
  }
}

export class GetIdentityProviderIntentRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): GetIdentityProviderIntentRequest;
  hasInstance(): boolean;
  clearInstance(): GetIdentityProviderIntentRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): GetIdentityProviderIntentRequest;
  hasOrganization(): boolean;
  clearOrganization(): GetIdentityProviderIntentRequest;

  getIdpIntentId(): string;
  setIdpIntentId(value: string): GetIdentityProviderIntentRequest;

  getIdpIntentToken(): string;
  setIdpIntentToken(value: string): GetIdentityProviderIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityProviderIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityProviderIntentRequest): GetIdentityProviderIntentRequest.AsObject;
  static serializeBinaryToWriter(message: GetIdentityProviderIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityProviderIntentRequest;
  static deserializeBinaryFromReader(message: GetIdentityProviderIntentRequest, reader: jspb.BinaryReader): GetIdentityProviderIntentRequest;
}

export namespace GetIdentityProviderIntentRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    idpIntentId: string,
    idpIntentToken: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class GetIdentityProviderIntentResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): GetIdentityProviderIntentResponse;
  hasDetails(): boolean;
  clearDetails(): GetIdentityProviderIntentResponse;

  getIdpInformation(): zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation | undefined;
  setIdpInformation(value?: zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation): GetIdentityProviderIntentResponse;
  hasIdpInformation(): boolean;
  clearIdpInformation(): GetIdentityProviderIntentResponse;

  getId(): string;
  setId(value: string): GetIdentityProviderIntentResponse;
  hasId(): boolean;
  clearId(): GetIdentityProviderIntentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityProviderIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityProviderIntentResponse): GetIdentityProviderIntentResponse.AsObject;
  static serializeBinaryToWriter(message: GetIdentityProviderIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityProviderIntentResponse;
  static deserializeBinaryFromReader(message: GetIdentityProviderIntentResponse, reader: jspb.BinaryReader): GetIdentityProviderIntentResponse;
}

export namespace GetIdentityProviderIntentResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
    idpInformation?: zitadel_resources_user_v3alpha_authenticator_pb.IDPInformation.AsObject,
    id?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 3,
  }
}

export class AddIDPAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): AddIDPAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): AddIDPAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): AddIDPAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): AddIDPAuthenticatorRequest;

  getId(): string;
  setId(value: string): AddIDPAuthenticatorRequest;

  getAuthenticator(): zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator | undefined;
  setAuthenticator(value?: zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator): AddIDPAuthenticatorRequest;
  hasAuthenticator(): boolean;
  clearAuthenticator(): AddIDPAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIDPAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddIDPAuthenticatorRequest): AddIDPAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: AddIDPAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIDPAuthenticatorRequest;
  static deserializeBinaryFromReader(message: AddIDPAuthenticatorRequest, reader: jspb.BinaryReader): AddIDPAuthenticatorRequest;
}

export namespace AddIDPAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    authenticator?: zitadel_resources_user_v3alpha_authenticator_pb.IDPAuthenticator.AsObject,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class AddIDPAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): AddIDPAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): AddIDPAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIDPAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddIDPAuthenticatorResponse): AddIDPAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: AddIDPAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIDPAuthenticatorResponse;
  static deserializeBinaryFromReader(message: AddIDPAuthenticatorResponse, reader: jspb.BinaryReader): AddIDPAuthenticatorResponse;
}

export namespace AddIDPAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

export class RemoveIDPAuthenticatorRequest extends jspb.Message {
  getInstance(): zitadel_object_v3alpha_object_pb.Instance | undefined;
  setInstance(value?: zitadel_object_v3alpha_object_pb.Instance): RemoveIDPAuthenticatorRequest;
  hasInstance(): boolean;
  clearInstance(): RemoveIDPAuthenticatorRequest;

  getOrganization(): zitadel_object_v3alpha_object_pb.Organization | undefined;
  setOrganization(value?: zitadel_object_v3alpha_object_pb.Organization): RemoveIDPAuthenticatorRequest;
  hasOrganization(): boolean;
  clearOrganization(): RemoveIDPAuthenticatorRequest;

  getId(): string;
  setId(value: string): RemoveIDPAuthenticatorRequest;

  getIdpId(): string;
  setIdpId(value: string): RemoveIDPAuthenticatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIDPAuthenticatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIDPAuthenticatorRequest): RemoveIDPAuthenticatorRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveIDPAuthenticatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIDPAuthenticatorRequest;
  static deserializeBinaryFromReader(message: RemoveIDPAuthenticatorRequest, reader: jspb.BinaryReader): RemoveIDPAuthenticatorRequest;
}

export namespace RemoveIDPAuthenticatorRequest {
  export type AsObject = {
    instance?: zitadel_object_v3alpha_object_pb.Instance.AsObject,
    organization?: zitadel_object_v3alpha_object_pb.Organization.AsObject,
    id: string,
    idpId: string,
  }

  export enum InstanceCase { 
    _INSTANCE_NOT_SET = 0,
    INSTANCE = 1,
  }

  export enum OrganizationCase { 
    _ORGANIZATION_NOT_SET = 0,
    ORGANIZATION = 2,
  }
}

export class RemoveIDPAuthenticatorResponse extends jspb.Message {
  getDetails(): zitadel_resources_object_v3alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_resources_object_v3alpha_object_pb.Details): RemoveIDPAuthenticatorResponse;
  hasDetails(): boolean;
  clearDetails(): RemoveIDPAuthenticatorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveIDPAuthenticatorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveIDPAuthenticatorResponse): RemoveIDPAuthenticatorResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveIDPAuthenticatorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveIDPAuthenticatorResponse;
  static deserializeBinaryFromReader(message: RemoveIDPAuthenticatorResponse, reader: jspb.BinaryReader): RemoveIDPAuthenticatorResponse;
}

export namespace RemoveIDPAuthenticatorResponse {
  export type AsObject = {
    details?: zitadel_resources_object_v3alpha_object_pb.Details.AsObject,
  }
}

