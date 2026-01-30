import * as jspb from 'google-protobuf'

import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_user_v2_auth_pb from '../../../zitadel/user/v2/auth_pb'; // proto import: "zitadel/user/v2/auth.proto"
import * as zitadel_user_v2_email_pb from '../../../zitadel/user/v2/email_pb'; // proto import: "zitadel/user/v2/email.proto"
import * as zitadel_user_v2_phone_pb from '../../../zitadel/user/v2/phone_pb'; // proto import: "zitadel/user/v2/phone.proto"
import * as zitadel_user_v2_idp_pb from '../../../zitadel/user/v2/idp_pb'; // proto import: "zitadel/user/v2/idp.proto"
import * as zitadel_user_v2_password_pb from '../../../zitadel/user/v2/password_pb'; // proto import: "zitadel/user/v2/password.proto"
import * as zitadel_user_v2_user_pb from '../../../zitadel/user/v2/user_pb'; // proto import: "zitadel/user/v2/user.proto"
import * as zitadel_user_v2_user_service_pb from '../../../zitadel/user/v2/user_service_pb'; // proto import: "zitadel/user/v2/user_service.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_org_v2_org_pb from '../../../zitadel/org/v2/org_pb'; // proto import: "zitadel/org/v2/org.proto"
import * as zitadel_org_v2_query_pb from '../../../zitadel/org/v2/query_pb'; // proto import: "zitadel/org/v2/query.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as zitadel_metadata_v2_metadata_pb from '../../../zitadel/metadata/v2/metadata_pb'; // proto import: "zitadel/metadata/v2/metadata.proto"


export class AddOrganizationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddOrganizationRequest;

  getAdminsList(): Array<AddOrganizationRequest.Admin>;
  setAdminsList(value: Array<AddOrganizationRequest.Admin>): AddOrganizationRequest;
  clearAdminsList(): AddOrganizationRequest;
  addAdmins(value?: AddOrganizationRequest.Admin, index?: number): AddOrganizationRequest.Admin;

  getOrganizationId(): string;
  setOrganizationId(value: string): AddOrganizationRequest;
  hasOrganizationId(): boolean;
  clearOrganizationId(): AddOrganizationRequest;

  getOrgId(): string;
  setOrgId(value: string): AddOrganizationRequest;
  hasOrgId(): boolean;
  clearOrgId(): AddOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrganizationRequest): AddOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: AddOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrganizationRequest;
  static deserializeBinaryFromReader(message: AddOrganizationRequest, reader: jspb.BinaryReader): AddOrganizationRequest;
}

export namespace AddOrganizationRequest {
  export type AsObject = {
    name: string,
    adminsList: Array<AddOrganizationRequest.Admin.AsObject>,
    organizationId?: string,
    orgId?: string,
  }

  export class Admin extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): Admin;

    getHuman(): zitadel_user_v2_user_service_pb.AddHumanUserRequest | undefined;
    setHuman(value?: zitadel_user_v2_user_service_pb.AddHumanUserRequest): Admin;
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
      human?: zitadel_user_v2_user_service_pb.AddHumanUserRequest.AsObject,
      rolesList: Array<string>,
    }

    export enum UserTypeCase { 
      USER_TYPE_NOT_SET = 0,
      USER_ID = 1,
      HUMAN = 2,
    }
  }


  export enum OrganizationIdCase { 
    _ORGANIZATION_ID_NOT_SET = 0,
    ORGANIZATION_ID = 4,
  }

  export enum OrgIdCase { 
    _ORG_ID_NOT_SET = 0,
    ORG_ID = 3,
  }
}

export class AddOrganizationResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): AddOrganizationResponse;
  hasDetails(): boolean;
  clearDetails(): AddOrganizationResponse;

  getOrganizationId(): string;
  setOrganizationId(value: string): AddOrganizationResponse;

  getCreatedAdminsList(): Array<AddOrganizationResponse.CreatedAdmin>;
  setCreatedAdminsList(value: Array<AddOrganizationResponse.CreatedAdmin>): AddOrganizationResponse;
  clearCreatedAdminsList(): AddOrganizationResponse;
  addCreatedAdmins(value?: AddOrganizationResponse.CreatedAdmin, index?: number): AddOrganizationResponse.CreatedAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrganizationResponse): AddOrganizationResponse.AsObject;
  static serializeBinaryToWriter(message: AddOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrganizationResponse;
  static deserializeBinaryFromReader(message: AddOrganizationResponse, reader: jspb.BinaryReader): AddOrganizationResponse;
}

export namespace AddOrganizationResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.Details.AsObject,
    organizationId: string,
    createdAdminsList: Array<AddOrganizationResponse.CreatedAdmin.AsObject>,
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

}

export class UpdateOrganizationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): UpdateOrganizationRequest;

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
    organizationId: string,
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
  getQuery(): zitadel_object_v2_object_pb.ListQuery | undefined;
  setQuery(value?: zitadel_object_v2_object_pb.ListQuery): ListOrganizationsRequest;
  hasQuery(): boolean;
  clearQuery(): ListOrganizationsRequest;

  getSortingColumn(): zitadel_org_v2_query_pb.OrganizationFieldName;
  setSortingColumn(value: zitadel_org_v2_query_pb.OrganizationFieldName): ListOrganizationsRequest;

  getQueriesList(): Array<zitadel_org_v2_query_pb.SearchQuery>;
  setQueriesList(value: Array<zitadel_org_v2_query_pb.SearchQuery>): ListOrganizationsRequest;
  clearQueriesList(): ListOrganizationsRequest;
  addQueries(value?: zitadel_org_v2_query_pb.SearchQuery, index?: number): zitadel_org_v2_query_pb.SearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
    query?: zitadel_object_v2_object_pb.ListQuery.AsObject,
    sortingColumn: zitadel_org_v2_query_pb.OrganizationFieldName,
    queriesList: Array<zitadel_org_v2_query_pb.SearchQuery.AsObject>,
  }
}

export class ListOrganizationsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2_object_pb.ListDetails | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.ListDetails): ListOrganizationsResponse;
  hasDetails(): boolean;
  clearDetails(): ListOrganizationsResponse;

  getSortingColumn(): zitadel_org_v2_query_pb.OrganizationFieldName;
  setSortingColumn(value: zitadel_org_v2_query_pb.OrganizationFieldName): ListOrganizationsResponse;

  getResultList(): Array<zitadel_org_v2_org_pb.Organization>;
  setResultList(value: Array<zitadel_org_v2_org_pb.Organization>): ListOrganizationsResponse;
  clearResultList(): ListOrganizationsResponse;
  addResult(value?: zitadel_org_v2_org_pb.Organization, index?: number): zitadel_org_v2_org_pb.Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
  export type AsObject = {
    details?: zitadel_object_v2_object_pb.ListDetails.AsObject,
    sortingColumn: zitadel_org_v2_query_pb.OrganizationFieldName,
    resultList: Array<zitadel_org_v2_org_pb.Organization.AsObject>,
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): DeleteOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    organizationId: string,
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
  getOrganizationId(): string;
  setOrganizationId(value: string): DeactivateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateOrganizationRequest): DeactivateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateOrganizationRequest;
  static deserializeBinaryFromReader(message: DeactivateOrganizationRequest, reader: jspb.BinaryReader): DeactivateOrganizationRequest;
}

export namespace DeactivateOrganizationRequest {
  export type AsObject = {
    organizationId: string,
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
  getOrganizationId(): string;
  setOrganizationId(value: string): ActivateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateOrganizationRequest): ActivateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateOrganizationRequest;
  static deserializeBinaryFromReader(message: ActivateOrganizationRequest, reader: jspb.BinaryReader): ActivateOrganizationRequest;
}

export namespace ActivateOrganizationRequest {
  export type AsObject = {
    organizationId: string,
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

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListOrganizationDomainsRequest;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationDomainsRequest;

  getFiltersList(): Array<zitadel_org_v2_query_pb.DomainSearchFilter>;
  setFiltersList(value: Array<zitadel_org_v2_query_pb.DomainSearchFilter>): ListOrganizationDomainsRequest;
  clearFiltersList(): ListOrganizationDomainsRequest;
  addFilters(value?: zitadel_org_v2_query_pb.DomainSearchFilter, index?: number): zitadel_org_v2_query_pb.DomainSearchFilter;

  getSortingColumn(): zitadel_org_v2_query_pb.DomainFieldName;
  setSortingColumn(value: zitadel_org_v2_query_pb.DomainFieldName): ListOrganizationDomainsRequest;

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
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    filtersList: Array<zitadel_org_v2_query_pb.DomainSearchFilter.AsObject>,
    sortingColumn: zitadel_org_v2_query_pb.DomainFieldName,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListOrganizationDomainsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListOrganizationDomainsResponse;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationDomainsResponse;

  getDomainsList(): Array<zitadel_org_v2_org_pb.Domain>;
  setDomainsList(value: Array<zitadel_org_v2_org_pb.Domain>): ListOrganizationDomainsResponse;
  clearDomainsList(): ListOrganizationDomainsResponse;
  addDomains(value?: zitadel_org_v2_org_pb.Domain, index?: number): zitadel_org_v2_org_pb.Domain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationDomainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationDomainsResponse): ListOrganizationDomainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationDomainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationDomainsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationDomainsResponse, reader: jspb.BinaryReader): ListOrganizationDomainsResponse;
}

export namespace ListOrganizationDomainsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
    domainsList: Array<zitadel_org_v2_org_pb.Domain.AsObject>,
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

  getType(): zitadel_org_v2_org_pb.DomainValidationType;
  setType(value: zitadel_org_v2_org_pb.DomainValidationType): GenerateOrganizationDomainValidationRequest;

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
    type: zitadel_org_v2_org_pb.DomainValidationType,
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

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListOrganizationMetadataRequest;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationMetadataRequest;

  getFiltersList(): Array<zitadel_metadata_v2_metadata_pb.MetadataSearchFilter>;
  setFiltersList(value: Array<zitadel_metadata_v2_metadata_pb.MetadataSearchFilter>): ListOrganizationMetadataRequest;
  clearFiltersList(): ListOrganizationMetadataRequest;
  addFilters(value?: zitadel_metadata_v2_metadata_pb.MetadataSearchFilter, index?: number): zitadel_metadata_v2_metadata_pb.MetadataSearchFilter;

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
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    filtersList: Array<zitadel_metadata_v2_metadata_pb.MetadataSearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListOrganizationMetadataResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListOrganizationMetadataResponse;
  hasPagination(): boolean;
  clearPagination(): ListOrganizationMetadataResponse;

  getMetadataList(): Array<zitadel_metadata_v2_metadata_pb.Metadata>;
  setMetadataList(value: Array<zitadel_metadata_v2_metadata_pb.Metadata>): ListOrganizationMetadataResponse;
  clearMetadataList(): ListOrganizationMetadataResponse;
  addMetadata(value?: zitadel_metadata_v2_metadata_pb.Metadata, index?: number): zitadel_metadata_v2_metadata_pb.Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMetadataResponse): ListOrganizationMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrganizationMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMetadataResponse;
  static deserializeBinaryFromReader(message: ListOrganizationMetadataResponse, reader: jspb.BinaryReader): ListOrganizationMetadataResponse;
}

export namespace ListOrganizationMetadataResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
    metadataList: Array<zitadel_metadata_v2_metadata_pb.Metadata.AsObject>,
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

