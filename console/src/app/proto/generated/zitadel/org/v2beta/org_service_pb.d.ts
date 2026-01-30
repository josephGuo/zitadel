import * as jspb from 'google-protobuf'

import * as zitadel_object_v2beta_object_pb from '../../../zitadel/object/v2beta/object_pb'; // proto import: "zitadel/object/v2beta/object.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_user_v2beta_auth_pb from '../../../zitadel/user/v2beta/auth_pb'; // proto import: "zitadel/user/v2beta/auth.proto"
import * as zitadel_org_v2beta_org_pb from '../../../zitadel/org/v2beta/org_pb'; // proto import: "zitadel/org/v2beta/org.proto"
import * as zitadel_metadata_v2beta_metadata_pb from '../../../zitadel/metadata/v2beta/metadata_pb'; // proto import: "zitadel/metadata/v2beta/metadata.proto"
import * as zitadel_user_v2beta_user_service_pb from '../../../zitadel/user/v2beta/user_service_pb'; // proto import: "zitadel/user/v2beta/user_service.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"


export class CreateOrganizationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateOrganizationRequest;

  getId(): string;
  setId(value: string): CreateOrganizationRequest;
  hasId(): boolean;
  clearId(): CreateOrganizationRequest;

  getAdminsList(): Array<CreateOrganizationRequest.Admin>;
  setAdminsList(value: Array<CreateOrganizationRequest.Admin>): CreateOrganizationRequest;
  clearAdminsList(): CreateOrganizationRequest;
  addAdmins(value?: CreateOrganizationRequest.Admin, index?: number): CreateOrganizationRequest.Admin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    name: string,
    id?: string,
    adminsList: Array<CreateOrganizationRequest.Admin.AsObject>,
  }

  export class Admin extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): Admin;

    getHuman(): zitadel_user_v2beta_user_service_pb.AddHumanUserRequest | undefined;
    setHuman(value?: zitadel_user_v2beta_user_service_pb.AddHumanUserRequest): Admin;
    hasHuman(): boolean;
    clearHuman(): Admin;

    getRolesList(): Array<string>;
    setRolesList(value: Array<string>): Admin;
    clearRolesList(): Admin;
    addRoles(value: string, index?: number): Admin;

    getUserTypeCase(): Admin.UserTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Admin.AsObject;
    static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
    static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Admin;
    static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
  }

  export namespace Admin {
    export type AsObject = {
      userId: string,
      human?: zitadel_user_v2beta_user_service_pb.AddHumanUserRequest.AsObject,
      rolesList: Array<string>,
    }

    export enum UserTypeCase { 
      USER_TYPE_NOT_SET = 0,
      USER_ID = 1,
      HUMAN = 2,
    }
  }


  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 2,
  }
}

export class CreatedAdmin extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreatedAdmin;

  getEmailCode(): string;
  setEmailCode(value: string): CreatedAdmin;
  hasEmailCode(): boolean;
  clearEmailCode(): CreatedAdmin;

  getPhoneCode(): string;
  setPhoneCode(value: string): CreatedAdmin;
  hasPhoneCode(): boolean;
  clearPhoneCode(): CreatedAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedAdmin): CreatedAdmin.AsObject;
  static serializeBinaryToWriter(message: CreatedAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedAdmin;
  static deserializeBinaryFromReader(message: CreatedAdmin, reader: jspb.BinaryReader): CreatedAdmin;
}

export namespace CreatedAdmin {
  export type AsObject = {
    userId: string,
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

export class AssignedAdmin extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AssignedAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignedAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: AssignedAdmin): AssignedAdmin.AsObject;
  static serializeBinaryToWriter(message: AssignedAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignedAdmin;
  static deserializeBinaryFromReader(message: AssignedAdmin, reader: jspb.BinaryReader): AssignedAdmin;
}

export namespace AssignedAdmin {
  export type AsObject = {
    userId: string,
  }
}

export class OrganizationAdmin extends jspb.Message {
  getCreatedAdmin(): CreatedAdmin | undefined;
  setCreatedAdmin(value?: CreatedAdmin): OrganizationAdmin;
  hasCreatedAdmin(): boolean;
  clearCreatedAdmin(): OrganizationAdmin;

  getAssignedAdmin(): AssignedAdmin | undefined;
  setAssignedAdmin(value?: AssignedAdmin): OrganizationAdmin;
  hasAssignedAdmin(): boolean;
  clearAssignedAdmin(): OrganizationAdmin;

  getOrganizationadminCase(): OrganizationAdmin.OrganizationadminCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationAdmin): OrganizationAdmin.AsObject;
  static serializeBinaryToWriter(message: OrganizationAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationAdmin;
  static deserializeBinaryFromReader(message: OrganizationAdmin, reader: jspb.BinaryReader): OrganizationAdmin;
}

export namespace OrganizationAdmin {
  export type AsObject = {
    createdAdmin?: CreatedAdmin.AsObject,
    assignedAdmin?: AssignedAdmin.AsObject,
  }

  export enum OrganizationadminCase { 
    ORGANIZATIONADMIN_NOT_SET = 0,
    CREATED_ADMIN = 1,
    ASSIGNED_ADMIN = 2,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateOrganizationResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateOrganizationResponse;

  getId(): string;
  setId(value: string): CreateOrganizationResponse;

  getOrganizationAdminsList(): Array<OrganizationAdmin>;
  setOrganizationAdminsList(value: Array<OrganizationAdmin>): CreateOrganizationResponse;
  clearOrganizationAdminsList(): CreateOrganizationResponse;
  addOrganizationAdmins(value?: OrganizationAdmin, index?: number): OrganizationAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    organizationAdminsList: Array<OrganizationAdmin.AsObject>,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateOrganizationRequest;

  getName(): string;
  setName(value: string): UpdateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateOrganizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateOrganizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListOrganizationsRequest;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationsRequest;

  getSortingColumn(): zitadel_org_v2beta_org_pb.OrgFieldName;
  setSortingColumn(value: zitadel_org_v2beta_org_pb.OrgFieldName): ListOrganizationsRequest;

  getFilterList(): Array<zitadel_org_v2beta_org_pb.OrganizationSearchFilter>;
  setFilterList(value: Array<zitadel_org_v2beta_org_pb.OrganizationSearchFilter>): ListOrganizationsRequest;
  clearFilterList(): ListOrganizationsRequest;
  addFilter(value?: zitadel_org_v2beta_org_pb.OrganizationSearchFilter, index?: number): zitadel_org_v2beta_org_pb.OrganizationSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn: zitadel_org_v2beta_org_pb.OrgFieldName,
    filterList: Array<zitadel_org_v2beta_org_pb.OrganizationSearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 1,
  }
}

export class ListOrganizationsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListOrganizationsResponse;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationsResponse;

  getOrganizationsList(): Array<zitadel_org_v2beta_org_pb.Organization>;
  setOrganizationsList(value: Array<zitadel_org_v2beta_org_pb.Organization>): ListOrganizationsResponse;
  clearOrganizationsList(): ListOrganizationsResponse;
  addOrganizations(value?: zitadel_org_v2beta_org_pb.Organization, index?: number): zitadel_org_v2beta_org_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    organizationsList: Array<zitadel_org_v2beta_org_pb.Organization.AsObject>,
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteOrganizationResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteOrganizationResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteOrganizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationResponse): DeleteOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationResponse, reader: jspb.BinaryReader): DeleteOrganizationResponse;
}

export namespace DeleteOrganizationResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeactivateOrganizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeactivateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateOrganizationRequest): DeactivateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateOrganizationRequest;
  static deserializeBinaryFromReader(message: DeactivateOrganizationRequest, reader: jspb.BinaryReader): DeactivateOrganizationRequest;
}

export namespace DeactivateOrganizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeactivateOrganizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivateOrganizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): DeactivateOrganizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateOrganizationResponse): DeactivateOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateOrganizationResponse;
  static deserializeBinaryFromReader(message: DeactivateOrganizationResponse, reader: jspb.BinaryReader): DeactivateOrganizationResponse;
}

export namespace DeactivateOrganizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivateOrganizationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ActivateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateOrganizationRequest): ActivateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateOrganizationRequest;
  static deserializeBinaryFromReader(message: ActivateOrganizationRequest, reader: jspb.BinaryReader): ActivateOrganizationRequest;
}

export namespace ActivateOrganizationRequest {
  export type AsObject = {
    id: string,
  }
}

export class ActivateOrganizationResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivateOrganizationResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivateOrganizationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateOrganizationResponse): ActivateOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateOrganizationResponse;
  static deserializeBinaryFromReader(message: ActivateOrganizationResponse, reader: jspb.BinaryReader): ActivateOrganizationResponse;
}

export namespace ActivateOrganizationResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AddOrganizationDomainRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): AddOrganizationDomainRequest;

  getDomain(): string;
  setDomain(value: string): AddOrganizationDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrganizationDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrganizationDomainRequest): AddOrganizationDomainRequest.AsObject;
  static serializeBinaryToWriter(message: AddOrganizationDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrganizationDomainRequest;
  static deserializeBinaryFromReader(message: AddOrganizationDomainRequest, reader: jspb.BinaryReader): AddOrganizationDomainRequest;
}

export namespace AddOrganizationDomainRequest {
  export type AsObject = {
    organizationId: string,
    domain: string,
  }
}

export class AddOrganizationDomainResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddOrganizationDomainResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): AddOrganizationDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrganizationDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrganizationDomainResponse): AddOrganizationDomainResponse.AsObject;
  static serializeBinaryToWriter(message: AddOrganizationDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrganizationDomainResponse;
  static deserializeBinaryFromReader(message: AddOrganizationDomainResponse, reader: jspb.BinaryReader): AddOrganizationDomainResponse;
}

export namespace AddOrganizationDomainResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationDomainsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): ListOrganizationDomainsRequest;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListOrganizationDomainsRequest;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationDomainsRequest;

  getFiltersList(): Array<zitadel_org_v2beta_org_pb.DomainSearchFilter>;
  setFiltersList(value: Array<zitadel_org_v2beta_org_pb.DomainSearchFilter>): ListOrganizationDomainsRequest;
  clearFiltersList(): ListOrganizationDomainsRequest;
  addFilters(value?: zitadel_org_v2beta_org_pb.DomainSearchFilter, index?: number): zitadel_org_v2beta_org_pb.DomainSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationDomainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationDomainsRequest): ListOrganizationDomainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationDomainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationDomainsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationDomainsRequest, reader: jspb.BinaryReader): ListOrganizationDomainsRequest;
}

export namespace ListOrganizationDomainsRequest {
  export type AsObject = {
    organizationId: string,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    filtersList: Array<zitadel_org_v2beta_org_pb.DomainSearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListOrganizationDomainsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListOrganizationDomainsResponse;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationDomainsResponse;

  getDomainsList(): Array<zitadel_org_v2beta_org_pb.Domain>;
  setDomainsList(value: Array<zitadel_org_v2beta_org_pb.Domain>): ListOrganizationDomainsResponse;
  clearDomainsList(): ListOrganizationDomainsResponse;
  addDomains(value?: zitadel_org_v2beta_org_pb.Domain, index?: number): zitadel_org_v2beta_org_pb.Domain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationDomainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationDomainsResponse): ListOrganizationDomainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationDomainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationDomainsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationDomainsResponse, reader: jspb.BinaryReader): ListOrganizationDomainsResponse;
}

export namespace ListOrganizationDomainsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    domainsList: Array<zitadel_org_v2beta_org_pb.Domain.AsObject>,
  }
}

export class DeleteOrganizationDomainRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): DeleteOrganizationDomainRequest;

  getDomain(): string;
  setDomain(value: string): DeleteOrganizationDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationDomainRequest): DeleteOrganizationDomainRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationDomainRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationDomainRequest, reader: jspb.BinaryReader): DeleteOrganizationDomainRequest;
}

export namespace DeleteOrganizationDomainRequest {
  export type AsObject = {
    organizationId: string,
    domain: string,
  }
}

export class DeleteOrganizationDomainResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteOrganizationDomainResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteOrganizationDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationDomainResponse): DeleteOrganizationDomainResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationDomainResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationDomainResponse, reader: jspb.BinaryReader): DeleteOrganizationDomainResponse;
}

export namespace DeleteOrganizationDomainResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GenerateOrganizationDomainValidationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): GenerateOrganizationDomainValidationRequest;

  getDomain(): string;
  setDomain(value: string): GenerateOrganizationDomainValidationRequest;

  getType(): zitadel_org_v2beta_org_pb.DomainValidationType;
  setType(value: zitadel_org_v2beta_org_pb.DomainValidationType): GenerateOrganizationDomainValidationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateOrganizationDomainValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateOrganizationDomainValidationRequest): GenerateOrganizationDomainValidationRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateOrganizationDomainValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateOrganizationDomainValidationRequest;
  static deserializeBinaryFromReader(message: GenerateOrganizationDomainValidationRequest, reader: jspb.BinaryReader): GenerateOrganizationDomainValidationRequest;
}

export namespace GenerateOrganizationDomainValidationRequest {
  export type AsObject = {
    organizationId: string,
    domain: string,
    type: zitadel_org_v2beta_org_pb.DomainValidationType,
  }
}

export class GenerateOrganizationDomainValidationResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): GenerateOrganizationDomainValidationResponse;

  getUrl(): string;
  setUrl(value: string): GenerateOrganizationDomainValidationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateOrganizationDomainValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateOrganizationDomainValidationResponse): GenerateOrganizationDomainValidationResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateOrganizationDomainValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateOrganizationDomainValidationResponse;
  static deserializeBinaryFromReader(message: GenerateOrganizationDomainValidationResponse, reader: jspb.BinaryReader): GenerateOrganizationDomainValidationResponse;
}

export namespace GenerateOrganizationDomainValidationResponse {
  export type AsObject = {
    token: string,
    url: string,
  }
}

export class VerifyOrganizationDomainRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): VerifyOrganizationDomainRequest;

  getDomain(): string;
  setDomain(value: string): VerifyOrganizationDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOrganizationDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOrganizationDomainRequest): VerifyOrganizationDomainRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOrganizationDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOrganizationDomainRequest;
  static deserializeBinaryFromReader(message: VerifyOrganizationDomainRequest, reader: jspb.BinaryReader): VerifyOrganizationDomainRequest;
}

export namespace VerifyOrganizationDomainRequest {
  export type AsObject = {
    organizationId: string,
    domain: string,
  }
}

export class VerifyOrganizationDomainResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): VerifyOrganizationDomainResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): VerifyOrganizationDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOrganizationDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOrganizationDomainResponse): VerifyOrganizationDomainResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyOrganizationDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOrganizationDomainResponse;
  static deserializeBinaryFromReader(message: VerifyOrganizationDomainResponse, reader: jspb.BinaryReader): VerifyOrganizationDomainResponse;
}

export namespace VerifyOrganizationDomainResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Metadata extends jspb.Message {
  getKey(): string;
  setKey(value: string): Metadata;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    key: string,
    value: Uint8Array | string,
  }
}

export class SetOrganizationMetadataRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): SetOrganizationMetadataRequest;

  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): SetOrganizationMetadataRequest;
  clearMetadataList(): SetOrganizationMetadataRequest;
  addMetadata(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrganizationMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrganizationMetadataRequest): SetOrganizationMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: SetOrganizationMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrganizationMetadataRequest;
  static deserializeBinaryFromReader(message: SetOrganizationMetadataRequest, reader: jspb.BinaryReader): SetOrganizationMetadataRequest;
}

export namespace SetOrganizationMetadataRequest {
  export type AsObject = {
    organizationId: string,
    metadataList: Array<Metadata.AsObject>,
  }
}

export class SetOrganizationMetadataResponse extends jspb.Message {
  getSetDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSetDate(value?: google_protobuf_timestamp_pb.Timestamp): SetOrganizationMetadataResponse;
  hasSetDate(): boolean;
  clearSetDate(): SetOrganizationMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrganizationMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrganizationMetadataResponse): SetOrganizationMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: SetOrganizationMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrganizationMetadataResponse;
  static deserializeBinaryFromReader(message: SetOrganizationMetadataResponse, reader: jspb.BinaryReader): SetOrganizationMetadataResponse;
}

export namespace SetOrganizationMetadataResponse {
  export type AsObject = {
    setDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationMetadataRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): ListOrganizationMetadataRequest;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListOrganizationMetadataRequest;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationMetadataRequest;

  getFilterList(): Array<zitadel_metadata_v2beta_metadata_pb.MetadataQuery>;
  setFilterList(value: Array<zitadel_metadata_v2beta_metadata_pb.MetadataQuery>): ListOrganizationMetadataRequest;
  clearFilterList(): ListOrganizationMetadataRequest;
  addFilter(value?: zitadel_metadata_v2beta_metadata_pb.MetadataQuery, index?: number): zitadel_metadata_v2beta_metadata_pb.MetadataQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMetadataRequest): ListOrganizationMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMetadataRequest;
  static deserializeBinaryFromReader(message: ListOrganizationMetadataRequest, reader: jspb.BinaryReader): ListOrganizationMetadataRequest;
}

export namespace ListOrganizationMetadataRequest {
  export type AsObject = {
    organizationId: string,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    filterList: Array<zitadel_metadata_v2beta_metadata_pb.MetadataQuery.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListOrganizationMetadataResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListOrganizationMetadataResponse;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationMetadataResponse;

  getMetadataList(): Array<zitadel_metadata_v2beta_metadata_pb.Metadata>;
  setMetadataList(value: Array<zitadel_metadata_v2beta_metadata_pb.Metadata>): ListOrganizationMetadataResponse;
  clearMetadataList(): ListOrganizationMetadataResponse;
  addMetadata(value?: zitadel_metadata_v2beta_metadata_pb.Metadata, index?: number): zitadel_metadata_v2beta_metadata_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMetadataResponse): ListOrganizationMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMetadataResponse;
  static deserializeBinaryFromReader(message: ListOrganizationMetadataResponse, reader: jspb.BinaryReader): ListOrganizationMetadataResponse;
}

export namespace ListOrganizationMetadataResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
    metadataList: Array<zitadel_metadata_v2beta_metadata_pb.Metadata.AsObject>,
  }
}

export class DeleteOrganizationMetadataRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): DeleteOrganizationMetadataRequest;

  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): DeleteOrganizationMetadataRequest;
  clearKeysList(): DeleteOrganizationMetadataRequest;
  addKeys(value: string, index?: number): DeleteOrganizationMetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationMetadataRequest): DeleteOrganizationMetadataRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationMetadataRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationMetadataRequest, reader: jspb.BinaryReader): DeleteOrganizationMetadataRequest;
}

export namespace DeleteOrganizationMetadataRequest {
  export type AsObject = {
    organizationId: string,
    keysList: Array<string>,
  }
}

export class DeleteOrganizationMetadataResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteOrganizationMetadataResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteOrganizationMetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationMetadataResponse): DeleteOrganizationMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationMetadataResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationMetadataResponse, reader: jspb.BinaryReader): DeleteOrganizationMetadataResponse;
}

export namespace DeleteOrganizationMetadataResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

