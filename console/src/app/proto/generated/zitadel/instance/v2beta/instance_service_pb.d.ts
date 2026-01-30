import * as jspb from 'google-protobuf'

import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as zitadel_instance_v2beta_instance_pb from '../../../zitadel/instance/v2beta/instance_pb'; // proto import: "zitadel/instance/v2beta/instance.proto"
import * as zitadel_filter_v2beta_filter_pb from '../../../zitadel/filter/v2beta/filter_pb'; // proto import: "zitadel/filter/v2beta/filter.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"


export class DeleteInstanceRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): DeleteInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstanceRequest): DeleteInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstanceRequest;
  static deserializeBinaryFromReader(message: DeleteInstanceRequest, reader: jspb.BinaryReader): DeleteInstanceRequest;
}

export namespace DeleteInstanceRequest {
  export type AsObject = {
    instanceId: string,
  }
}

export class DeleteInstanceResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteInstanceResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteInstanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstanceResponse): DeleteInstanceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteInstanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstanceResponse;
  static deserializeBinaryFromReader(message: DeleteInstanceResponse, reader: jspb.BinaryReader): DeleteInstanceResponse;
}

export namespace DeleteInstanceResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetInstanceRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): GetInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceRequest): GetInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceRequest;
  static deserializeBinaryFromReader(message: GetInstanceRequest, reader: jspb.BinaryReader): GetInstanceRequest;
}

export namespace GetInstanceRequest {
  export type AsObject = {
    instanceId: string,
  }
}

export class GetInstanceResponse extends jspb.Message {
  getInstance(): zitadel_instance_v2beta_instance_pb.Instance | undefined;
  setInstance(value?: zitadel_instance_v2beta_instance_pb.Instance): GetInstanceResponse;
  hasInstance(): boolean;
  clearInstance(): GetInstanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceResponse): GetInstanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceResponse;
  static deserializeBinaryFromReader(message: GetInstanceResponse, reader: jspb.BinaryReader): GetInstanceResponse;
}

export namespace GetInstanceResponse {
  export type AsObject = {
    instance?: zitadel_instance_v2beta_instance_pb.Instance.AsObject,
  }
}

export class UpdateInstanceRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): UpdateInstanceRequest;

  getInstanceName(): string;
  setInstanceName(value: string): UpdateInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
  static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
  export type AsObject = {
    instanceId: string,
    instanceName: string,
  }
}

export class UpdateInstanceResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateInstanceResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateInstanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceResponse): UpdateInstanceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceResponse;
  static deserializeBinaryFromReader(message: UpdateInstanceResponse, reader: jspb.BinaryReader): UpdateInstanceResponse;
}

export namespace UpdateInstanceResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListInstancesRequest extends jspb.Message {
  getQueriesList(): Array<zitadel_instance_v2beta_instance_pb.Query>;
  setQueriesList(value: Array<zitadel_instance_v2beta_instance_pb.Query>): ListInstancesRequest;
  clearQueriesList(): ListInstancesRequest;
  addQueries(value?: zitadel_instance_v2beta_instance_pb.Query, index?: number): zitadel_instance_v2beta_instance_pb.Query;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListInstancesRequest;
  hasPagination(): boolean;
  clearPagination(): ListInstancesRequest;

  getSortingColumn(): zitadel_instance_v2beta_instance_pb.FieldName;
  setSortingColumn(value: zitadel_instance_v2beta_instance_pb.FieldName): ListInstancesRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListInstancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesRequest): ListInstancesRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesRequest;
  static deserializeBinaryFromReader(message: ListInstancesRequest, reader: jspb.BinaryReader): ListInstancesRequest;
}

export namespace ListInstancesRequest {
  export type AsObject = {
    queriesList: Array<zitadel_instance_v2beta_instance_pb.Query.AsObject>,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_instance_v2beta_instance_pb.FieldName,
  }

  export enum SortingColumnCase { 
    _SORTING_COLUMN_NOT_SET = 0,
    SORTING_COLUMN = 3,
  }
}

export class ListInstancesResponse extends jspb.Message {
  getInstancesList(): Array<zitadel_instance_v2beta_instance_pb.Instance>;
  setInstancesList(value: Array<zitadel_instance_v2beta_instance_pb.Instance>): ListInstancesResponse;
  clearInstancesList(): ListInstancesResponse;
  addInstances(value?: zitadel_instance_v2beta_instance_pb.Instance, index?: number): zitadel_instance_v2beta_instance_pb.Instance;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListInstancesResponse;
  hasPagination(): boolean;
  clearPagination(): ListInstancesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesResponse): ListInstancesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesResponse;
  static deserializeBinaryFromReader(message: ListInstancesResponse, reader: jspb.BinaryReader): ListInstancesResponse;
}

export namespace ListInstancesResponse {
  export type AsObject = {
    instancesList: Array<zitadel_instance_v2beta_instance_pb.Instance.AsObject>,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
  }
}

export class AddCustomDomainRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): AddCustomDomainRequest;

  getDomain(): string;
  setDomain(value: string): AddCustomDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomDomainRequest): AddCustomDomainRequest.AsObject;
  static serializeBinaryToWriter(message: AddCustomDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomDomainRequest;
  static deserializeBinaryFromReader(message: AddCustomDomainRequest, reader: jspb.BinaryReader): AddCustomDomainRequest;
}

export namespace AddCustomDomainRequest {
  export type AsObject = {
    instanceId: string,
    domain: string,
  }
}

export class AddCustomDomainResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddCustomDomainResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): AddCustomDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomDomainResponse): AddCustomDomainResponse.AsObject;
  static serializeBinaryToWriter(message: AddCustomDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomDomainResponse;
  static deserializeBinaryFromReader(message: AddCustomDomainResponse, reader: jspb.BinaryReader): AddCustomDomainResponse;
}

export namespace AddCustomDomainResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RemoveCustomDomainRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): RemoveCustomDomainRequest;

  getDomain(): string;
  setDomain(value: string): RemoveCustomDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCustomDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCustomDomainRequest): RemoveCustomDomainRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveCustomDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCustomDomainRequest;
  static deserializeBinaryFromReader(message: RemoveCustomDomainRequest, reader: jspb.BinaryReader): RemoveCustomDomainRequest;
}

export namespace RemoveCustomDomainRequest {
  export type AsObject = {
    instanceId: string,
    domain: string,
  }
}

export class RemoveCustomDomainResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): RemoveCustomDomainResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): RemoveCustomDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCustomDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCustomDomainResponse): RemoveCustomDomainResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveCustomDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCustomDomainResponse;
  static deserializeBinaryFromReader(message: RemoveCustomDomainResponse, reader: jspb.BinaryReader): RemoveCustomDomainResponse;
}

export namespace RemoveCustomDomainResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListCustomDomainsRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): ListCustomDomainsRequest;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListCustomDomainsRequest;
  hasPagination(): boolean;
  clearPagination(): ListCustomDomainsRequest;

  getSortingColumn(): zitadel_instance_v2beta_instance_pb.DomainFieldName;
  setSortingColumn(value: zitadel_instance_v2beta_instance_pb.DomainFieldName): ListCustomDomainsRequest;

  getQueriesList(): Array<zitadel_instance_v2beta_instance_pb.DomainSearchQuery>;
  setQueriesList(value: Array<zitadel_instance_v2beta_instance_pb.DomainSearchQuery>): ListCustomDomainsRequest;
  clearQueriesList(): ListCustomDomainsRequest;
  addQueries(value?: zitadel_instance_v2beta_instance_pb.DomainSearchQuery, index?: number): zitadel_instance_v2beta_instance_pb.DomainSearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomDomainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomDomainsRequest): ListCustomDomainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomDomainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomDomainsRequest;
  static deserializeBinaryFromReader(message: ListCustomDomainsRequest, reader: jspb.BinaryReader): ListCustomDomainsRequest;
}

export namespace ListCustomDomainsRequest {
  export type AsObject = {
    instanceId: string,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn: zitadel_instance_v2beta_instance_pb.DomainFieldName,
    queriesList: Array<zitadel_instance_v2beta_instance_pb.DomainSearchQuery.AsObject>,
  }
}

export class ListCustomDomainsResponse extends jspb.Message {
  getDomainsList(): Array<zitadel_instance_v2beta_instance_pb.Domain>;
  setDomainsList(value: Array<zitadel_instance_v2beta_instance_pb.Domain>): ListCustomDomainsResponse;
  clearDomainsList(): ListCustomDomainsResponse;
  addDomains(value?: zitadel_instance_v2beta_instance_pb.Domain, index?: number): zitadel_instance_v2beta_instance_pb.Domain;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListCustomDomainsResponse;
  hasPagination(): boolean;
  clearPagination(): ListCustomDomainsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomDomainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomDomainsResponse): ListCustomDomainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomDomainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomDomainsResponse;
  static deserializeBinaryFromReader(message: ListCustomDomainsResponse, reader: jspb.BinaryReader): ListCustomDomainsResponse;
}

export namespace ListCustomDomainsResponse {
  export type AsObject = {
    domainsList: Array<zitadel_instance_v2beta_instance_pb.Domain.AsObject>,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
  }
}

export class AddTrustedDomainRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): AddTrustedDomainRequest;

  getDomain(): string;
  setDomain(value: string): AddTrustedDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTrustedDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddTrustedDomainRequest): AddTrustedDomainRequest.AsObject;
  static serializeBinaryToWriter(message: AddTrustedDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTrustedDomainRequest;
  static deserializeBinaryFromReader(message: AddTrustedDomainRequest, reader: jspb.BinaryReader): AddTrustedDomainRequest;
}

export namespace AddTrustedDomainRequest {
  export type AsObject = {
    instanceId: string,
    domain: string,
  }
}

export class AddTrustedDomainResponse extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddTrustedDomainResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): AddTrustedDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddTrustedDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddTrustedDomainResponse): AddTrustedDomainResponse.AsObject;
  static serializeBinaryToWriter(message: AddTrustedDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddTrustedDomainResponse;
  static deserializeBinaryFromReader(message: AddTrustedDomainResponse, reader: jspb.BinaryReader): AddTrustedDomainResponse;
}

export namespace AddTrustedDomainResponse {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RemoveTrustedDomainRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): RemoveTrustedDomainRequest;

  getDomain(): string;
  setDomain(value: string): RemoveTrustedDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTrustedDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTrustedDomainRequest): RemoveTrustedDomainRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveTrustedDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTrustedDomainRequest;
  static deserializeBinaryFromReader(message: RemoveTrustedDomainRequest, reader: jspb.BinaryReader): RemoveTrustedDomainRequest;
}

export namespace RemoveTrustedDomainRequest {
  export type AsObject = {
    instanceId: string,
    domain: string,
  }
}

export class RemoveTrustedDomainResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): RemoveTrustedDomainResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): RemoveTrustedDomainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveTrustedDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveTrustedDomainResponse): RemoveTrustedDomainResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveTrustedDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveTrustedDomainResponse;
  static deserializeBinaryFromReader(message: RemoveTrustedDomainResponse, reader: jspb.BinaryReader): RemoveTrustedDomainResponse;
}

export namespace RemoveTrustedDomainResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListTrustedDomainsRequest extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): ListTrustedDomainsRequest;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationRequest): ListTrustedDomainsRequest;
  hasPagination(): boolean;
  clearPagination(): ListTrustedDomainsRequest;

  getSortingColumn(): zitadel_instance_v2beta_instance_pb.TrustedDomainFieldName;
  setSortingColumn(value: zitadel_instance_v2beta_instance_pb.TrustedDomainFieldName): ListTrustedDomainsRequest;

  getQueriesList(): Array<zitadel_instance_v2beta_instance_pb.TrustedDomainSearchQuery>;
  setQueriesList(value: Array<zitadel_instance_v2beta_instance_pb.TrustedDomainSearchQuery>): ListTrustedDomainsRequest;
  clearQueriesList(): ListTrustedDomainsRequest;
  addQueries(value?: zitadel_instance_v2beta_instance_pb.TrustedDomainSearchQuery, index?: number): zitadel_instance_v2beta_instance_pb.TrustedDomainSearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrustedDomainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrustedDomainsRequest): ListTrustedDomainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTrustedDomainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrustedDomainsRequest;
  static deserializeBinaryFromReader(message: ListTrustedDomainsRequest, reader: jspb.BinaryReader): ListTrustedDomainsRequest;
}

export namespace ListTrustedDomainsRequest {
  export type AsObject = {
    instanceId: string,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationRequest.AsObject,
    sortingColumn: zitadel_instance_v2beta_instance_pb.TrustedDomainFieldName,
    queriesList: Array<zitadel_instance_v2beta_instance_pb.TrustedDomainSearchQuery.AsObject>,
  }
}

export class ListTrustedDomainsResponse extends jspb.Message {
  getTrustedDomainList(): Array<zitadel_instance_v2beta_instance_pb.TrustedDomain>;
  setTrustedDomainList(value: Array<zitadel_instance_v2beta_instance_pb.TrustedDomain>): ListTrustedDomainsResponse;
  clearTrustedDomainList(): ListTrustedDomainsResponse;
  addTrustedDomain(value?: zitadel_instance_v2beta_instance_pb.TrustedDomain, index?: number): zitadel_instance_v2beta_instance_pb.TrustedDomain;

  getPagination(): zitadel_filter_v2beta_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2beta_filter_pb.PaginationResponse): ListTrustedDomainsResponse;
  hasPagination(): boolean;
  clearPagination(): ListTrustedDomainsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrustedDomainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrustedDomainsResponse): ListTrustedDomainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTrustedDomainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrustedDomainsResponse;
  static deserializeBinaryFromReader(message: ListTrustedDomainsResponse, reader: jspb.BinaryReader): ListTrustedDomainsResponse;
}

export namespace ListTrustedDomainsResponse {
  export type AsObject = {
    trustedDomainList: Array<zitadel_instance_v2beta_instance_pb.TrustedDomain.AsObject>,
    pagination?: zitadel_filter_v2beta_filter_pb.PaginationResponse.AsObject,
  }
}

