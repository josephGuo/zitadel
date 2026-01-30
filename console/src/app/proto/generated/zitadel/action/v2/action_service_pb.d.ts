import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_action_v2_target_pb from '../../../zitadel/action/v2/target_pb'; // proto import: "zitadel/action/v2/target.proto"
import * as zitadel_action_v2_execution_pb from '../../../zitadel/action/v2/execution_pb'; // proto import: "zitadel/action/v2/execution.proto"
import * as zitadel_action_v2_query_pb from '../../../zitadel/action/v2/query_pb'; // proto import: "zitadel/action/v2/query.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class CreateTargetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTargetRequest;

  getRestWebhook(): zitadel_action_v2_target_pb.RESTWebhook | undefined;
  setRestWebhook(value?: zitadel_action_v2_target_pb.RESTWebhook): CreateTargetRequest;
  hasRestWebhook(): boolean;
  clearRestWebhook(): CreateTargetRequest;

  getRestCall(): zitadel_action_v2_target_pb.RESTCall | undefined;
  setRestCall(value?: zitadel_action_v2_target_pb.RESTCall): CreateTargetRequest;
  hasRestCall(): boolean;
  clearRestCall(): CreateTargetRequest;

  getRestAsync(): zitadel_action_v2_target_pb.RESTAsync | undefined;
  setRestAsync(value?: zitadel_action_v2_target_pb.RESTAsync): CreateTargetRequest;
  hasRestAsync(): boolean;
  clearRestAsync(): CreateTargetRequest;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): CreateTargetRequest;
  hasTimeout(): boolean;
  clearTimeout(): CreateTargetRequest;

  getEndpoint(): string;
  setEndpoint(value: string): CreateTargetRequest;

  getPayloadType(): zitadel_action_v2_target_pb.PayloadType;
  setPayloadType(value: zitadel_action_v2_target_pb.PayloadType): CreateTargetRequest;

  getTargetTypeCase(): CreateTargetRequest.TargetTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTargetRequest): CreateTargetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTargetRequest;
  static deserializeBinaryFromReader(message: CreateTargetRequest, reader: jspb.BinaryReader): CreateTargetRequest;
}

export namespace CreateTargetRequest {
  export type AsObject = {
    name: string,
    restWebhook?: zitadel_action_v2_target_pb.RESTWebhook.AsObject,
    restCall?: zitadel_action_v2_target_pb.RESTCall.AsObject,
    restAsync?: zitadel_action_v2_target_pb.RESTAsync.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    endpoint: string,
    payloadType: zitadel_action_v2_target_pb.PayloadType,
  }

  export enum TargetTypeCase { 
    TARGET_TYPE_NOT_SET = 0,
    REST_WEBHOOK = 2,
    REST_CALL = 3,
    REST_ASYNC = 4,
  }
}

export class CreateTargetResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateTargetResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateTargetResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateTargetResponse;

  getSigningKey(): string;
  setSigningKey(value: string): CreateTargetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTargetResponse): CreateTargetResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTargetResponse;
  static deserializeBinaryFromReader(message: CreateTargetResponse, reader: jspb.BinaryReader): CreateTargetResponse;
}

export namespace CreateTargetResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signingKey: string,
  }
}

export class UpdateTargetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateTargetRequest;

  getName(): string;
  setName(value: string): UpdateTargetRequest;
  hasName(): boolean;
  clearName(): UpdateTargetRequest;

  getRestWebhook(): zitadel_action_v2_target_pb.RESTWebhook | undefined;
  setRestWebhook(value?: zitadel_action_v2_target_pb.RESTWebhook): UpdateTargetRequest;
  hasRestWebhook(): boolean;
  clearRestWebhook(): UpdateTargetRequest;

  getRestCall(): zitadel_action_v2_target_pb.RESTCall | undefined;
  setRestCall(value?: zitadel_action_v2_target_pb.RESTCall): UpdateTargetRequest;
  hasRestCall(): boolean;
  clearRestCall(): UpdateTargetRequest;

  getRestAsync(): zitadel_action_v2_target_pb.RESTAsync | undefined;
  setRestAsync(value?: zitadel_action_v2_target_pb.RESTAsync): UpdateTargetRequest;
  hasRestAsync(): boolean;
  clearRestAsync(): UpdateTargetRequest;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): UpdateTargetRequest;
  hasTimeout(): boolean;
  clearTimeout(): UpdateTargetRequest;

  getEndpoint(): string;
  setEndpoint(value: string): UpdateTargetRequest;
  hasEndpoint(): boolean;
  clearEndpoint(): UpdateTargetRequest;

  getExpirationSigningKey(): google_protobuf_duration_pb.Duration | undefined;
  setExpirationSigningKey(value?: google_protobuf_duration_pb.Duration): UpdateTargetRequest;
  hasExpirationSigningKey(): boolean;
  clearExpirationSigningKey(): UpdateTargetRequest;

  getPayloadType(): zitadel_action_v2_target_pb.PayloadType;
  setPayloadType(value: zitadel_action_v2_target_pb.PayloadType): UpdateTargetRequest;

  getTargetTypeCase(): UpdateTargetRequest.TargetTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTargetRequest): UpdateTargetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTargetRequest;
  static deserializeBinaryFromReader(message: UpdateTargetRequest, reader: jspb.BinaryReader): UpdateTargetRequest;
}

export namespace UpdateTargetRequest {
  export type AsObject = {
    id: string,
    name?: string,
    restWebhook?: zitadel_action_v2_target_pb.RESTWebhook.AsObject,
    restCall?: zitadel_action_v2_target_pb.RESTCall.AsObject,
    restAsync?: zitadel_action_v2_target_pb.RESTAsync.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    endpoint?: string,
    expirationSigningKey?: google_protobuf_duration_pb.Duration.AsObject,
    payloadType: zitadel_action_v2_target_pb.PayloadType,
  }

  export enum TargetTypeCase { 
    TARGET_TYPE_NOT_SET = 0,
    REST_WEBHOOK = 3,
    REST_CALL = 4,
    REST_ASYNC = 5,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum TimeoutCase { 
    _TIMEOUT_NOT_SET = 0,
    TIMEOUT = 6,
  }

  export enum EndpointCase { 
    _ENDPOINT_NOT_SET = 0,
    ENDPOINT = 7,
  }

  export enum ExpirationSigningKeyCase { 
    _EXPIRATION_SIGNING_KEY_NOT_SET = 0,
    EXPIRATION_SIGNING_KEY = 8,
  }
}

export class UpdateTargetResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateTargetResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): UpdateTargetResponse;

  getSigningKey(): string;
  setSigningKey(value: string): UpdateTargetResponse;
  hasSigningKey(): boolean;
  clearSigningKey(): UpdateTargetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTargetResponse): UpdateTargetResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTargetResponse;
  static deserializeBinaryFromReader(message: UpdateTargetResponse, reader: jspb.BinaryReader): UpdateTargetResponse;
}

export namespace UpdateTargetResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signingKey?: string,
  }

  export enum SigningKeyCase { 
    _SIGNING_KEY_NOT_SET = 0,
    SIGNING_KEY = 2,
  }
}

export class DeleteTargetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTargetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTargetRequest): DeleteTargetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTargetRequest;
  static deserializeBinaryFromReader(message: DeleteTargetRequest, reader: jspb.BinaryReader): DeleteTargetRequest;
}

export namespace DeleteTargetRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteTargetResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteTargetResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteTargetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTargetResponse): DeleteTargetResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTargetResponse;
  static deserializeBinaryFromReader(message: DeleteTargetResponse, reader: jspb.BinaryReader): DeleteTargetResponse;
}

export namespace DeleteTargetResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetTargetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTargetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetRequest): GetTargetRequest.AsObject;
  static serializeBinaryToWriter(message: GetTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetRequest;
  static deserializeBinaryFromReader(message: GetTargetRequest, reader: jspb.BinaryReader): GetTargetRequest;
}

export namespace GetTargetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTargetResponse extends jspb.Message {
  getTarget(): zitadel_action_v2_target_pb.Target | undefined;
  setTarget(value?: zitadel_action_v2_target_pb.Target): GetTargetResponse;
  hasTarget(): boolean;
  clearTarget(): GetTargetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetResponse): GetTargetResponse.AsObject;
  static serializeBinaryToWriter(message: GetTargetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetResponse;
  static deserializeBinaryFromReader(message: GetTargetResponse, reader: jspb.BinaryReader): GetTargetResponse;
}

export namespace GetTargetResponse {
  export type AsObject = {
    target?: zitadel_action_v2_target_pb.Target.AsObject,
  }
}

export class ListTargetsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListTargetsRequest;
  hasPagination(): boolean;
  clearPagination(): ListTargetsRequest;

  getSortingColumn(): zitadel_action_v2_query_pb.TargetFieldName;
  setSortingColumn(value: zitadel_action_v2_query_pb.TargetFieldName): ListTargetsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListTargetsRequest;

  getFiltersList(): Array<zitadel_action_v2_query_pb.TargetSearchFilter>;
  setFiltersList(value: Array<zitadel_action_v2_query_pb.TargetSearchFilter>): ListTargetsRequest;
  clearFiltersList(): ListTargetsRequest;
  addFilters(value?: zitadel_action_v2_query_pb.TargetSearchFilter, index?: number): zitadel_action_v2_query_pb.TargetSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsRequest): ListTargetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsRequest;
  static deserializeBinaryFromReader(message: ListTargetsRequest, reader: jspb.BinaryReader): ListTargetsRequest;
}

export namespace ListTargetsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_action_v2_query_pb.TargetFieldName,
    filtersList: Array<zitadel_action_v2_query_pb.TargetSearchFilter.AsObject>,
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

export class ListTargetsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListTargetsResponse;
  hasPagination(): boolean;
  clearPagination(): ListTargetsResponse;

  getTargetsList(): Array<zitadel_action_v2_target_pb.Target>;
  setTargetsList(value: Array<zitadel_action_v2_target_pb.Target>): ListTargetsResponse;
  clearTargetsList(): ListTargetsResponse;
  addTargets(value?: zitadel_action_v2_target_pb.Target, index?: number): zitadel_action_v2_target_pb.Target;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTargetsResponse): ListTargetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTargetsResponse;
  static deserializeBinaryFromReader(message: ListTargetsResponse, reader: jspb.BinaryReader): ListTargetsResponse;
}

export namespace ListTargetsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
    targetsList: Array<zitadel_action_v2_target_pb.Target.AsObject>,
  }
}

export class AddPublicKeyRequest extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): AddPublicKeyRequest;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): AddPublicKeyRequest;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddPublicKeyRequest;
  hasExpirationDate(): boolean;
  clearExpirationDate(): AddPublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPublicKeyRequest): AddPublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: AddPublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPublicKeyRequest;
  static deserializeBinaryFromReader(message: AddPublicKeyRequest, reader: jspb.BinaryReader): AddPublicKeyRequest;
}

export namespace AddPublicKeyRequest {
  export type AsObject = {
    targetId: string,
    publicKey: Uint8Array | string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ExpirationDateCase { 
    _EXPIRATION_DATE_NOT_SET = 0,
    EXPIRATION_DATE = 3,
  }
}

export class AddPublicKeyResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): AddPublicKeyResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): AddPublicKeyResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): AddPublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPublicKeyResponse): AddPublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: AddPublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPublicKeyResponse;
  static deserializeBinaryFromReader(message: AddPublicKeyResponse, reader: jspb.BinaryReader): AddPublicKeyResponse;
}

export namespace AddPublicKeyResponse {
  export type AsObject = {
    keyId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivatePublicKeyRequest extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): ActivatePublicKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): ActivatePublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePublicKeyRequest): ActivatePublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ActivatePublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePublicKeyRequest;
  static deserializeBinaryFromReader(message: ActivatePublicKeyRequest, reader: jspb.BinaryReader): ActivatePublicKeyRequest;
}

export namespace ActivatePublicKeyRequest {
  export type AsObject = {
    targetId: string,
    keyId: string,
  }
}

export class ActivatePublicKeyResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivatePublicKeyResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivatePublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePublicKeyResponse): ActivatePublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ActivatePublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePublicKeyResponse;
  static deserializeBinaryFromReader(message: ActivatePublicKeyResponse, reader: jspb.BinaryReader): ActivatePublicKeyResponse;
}

export namespace ActivatePublicKeyResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeactivatePublicKeyRequest extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): DeactivatePublicKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): DeactivatePublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatePublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatePublicKeyRequest): DeactivatePublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeactivatePublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatePublicKeyRequest;
  static deserializeBinaryFromReader(message: DeactivatePublicKeyRequest, reader: jspb.BinaryReader): DeactivatePublicKeyRequest;
}

export namespace DeactivatePublicKeyRequest {
  export type AsObject = {
    targetId: string,
    keyId: string,
  }
}

export class DeactivatePublicKeyResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): DeactivatePublicKeyResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): DeactivatePublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivatePublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivatePublicKeyResponse): DeactivatePublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: DeactivatePublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivatePublicKeyResponse;
  static deserializeBinaryFromReader(message: DeactivatePublicKeyResponse, reader: jspb.BinaryReader): DeactivatePublicKeyResponse;
}

export namespace DeactivatePublicKeyResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RemovePublicKeyRequest extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): RemovePublicKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): RemovePublicKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePublicKeyRequest): RemovePublicKeyRequest.AsObject;
  static serializeBinaryToWriter(message: RemovePublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePublicKeyRequest;
  static deserializeBinaryFromReader(message: RemovePublicKeyRequest, reader: jspb.BinaryReader): RemovePublicKeyRequest;
}

export namespace RemovePublicKeyRequest {
  export type AsObject = {
    targetId: string,
    keyId: string,
  }
}

export class RemovePublicKeyResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): RemovePublicKeyResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): RemovePublicKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePublicKeyResponse): RemovePublicKeyResponse.AsObject;
  static serializeBinaryToWriter(message: RemovePublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePublicKeyResponse;
  static deserializeBinaryFromReader(message: RemovePublicKeyResponse, reader: jspb.BinaryReader): RemovePublicKeyResponse;
}

export namespace RemovePublicKeyResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListPublicKeysRequest extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): ListPublicKeysRequest;

  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListPublicKeysRequest;
  hasPagination(): boolean;
  clearPagination(): ListPublicKeysRequest;

  getSortingColumn(): zitadel_action_v2_query_pb.PublicKeyFieldName;
  setSortingColumn(value: zitadel_action_v2_query_pb.PublicKeyFieldName): ListPublicKeysRequest;

  getFiltersList(): Array<zitadel_action_v2_query_pb.PublicKeySearchFilter>;
  setFiltersList(value: Array<zitadel_action_v2_query_pb.PublicKeySearchFilter>): ListPublicKeysRequest;
  clearFiltersList(): ListPublicKeysRequest;
  addFilters(value?: zitadel_action_v2_query_pb.PublicKeySearchFilter, index?: number): zitadel_action_v2_query_pb.PublicKeySearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicKeysRequest): ListPublicKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListPublicKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicKeysRequest;
  static deserializeBinaryFromReader(message: ListPublicKeysRequest, reader: jspb.BinaryReader): ListPublicKeysRequest;
}

export namespace ListPublicKeysRequest {
  export type AsObject = {
    targetId: string,
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn: zitadel_action_v2_query_pb.PublicKeyFieldName,
    filtersList: Array<zitadel_action_v2_query_pb.PublicKeySearchFilter.AsObject>,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 2,
  }
}

export class ListPublicKeysResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListPublicKeysResponse;
  hasPagination(): boolean;
  clearPagination(): ListPublicKeysResponse;

  getPublicKeysList(): Array<zitadel_action_v2_target_pb.PublicKey>;
  setPublicKeysList(value: Array<zitadel_action_v2_target_pb.PublicKey>): ListPublicKeysResponse;
  clearPublicKeysList(): ListPublicKeysResponse;
  addPublicKeys(value?: zitadel_action_v2_target_pb.PublicKey, index?: number): zitadel_action_v2_target_pb.PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPublicKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPublicKeysResponse): ListPublicKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListPublicKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPublicKeysResponse;
  static deserializeBinaryFromReader(message: ListPublicKeysResponse, reader: jspb.BinaryReader): ListPublicKeysResponse;
}

export namespace ListPublicKeysResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
    publicKeysList: Array<zitadel_action_v2_target_pb.PublicKey.AsObject>,
  }
}

export class SetExecutionRequest extends jspb.Message {
  getCondition(): zitadel_action_v2_execution_pb.Condition | undefined;
  setCondition(value?: zitadel_action_v2_execution_pb.Condition): SetExecutionRequest;
  hasCondition(): boolean;
  clearCondition(): SetExecutionRequest;

  getTargetsList(): Array<string>;
  setTargetsList(value: Array<string>): SetExecutionRequest;
  clearTargetsList(): SetExecutionRequest;
  addTargets(value: string, index?: number): SetExecutionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetExecutionRequest): SetExecutionRequest.AsObject;
  static serializeBinaryToWriter(message: SetExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetExecutionRequest;
  static deserializeBinaryFromReader(message: SetExecutionRequest, reader: jspb.BinaryReader): SetExecutionRequest;
}

export namespace SetExecutionRequest {
  export type AsObject = {
    condition?: zitadel_action_v2_execution_pb.Condition.AsObject,
    targetsList: Array<string>,
  }
}

export class SetExecutionResponse extends jspb.Message {
  getSetDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSetDate(value?: google_protobuf_timestamp_pb.Timestamp): SetExecutionResponse;
  hasSetDate(): boolean;
  clearSetDate(): SetExecutionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetExecutionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetExecutionResponse): SetExecutionResponse.AsObject;
  static serializeBinaryToWriter(message: SetExecutionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetExecutionResponse;
  static deserializeBinaryFromReader(message: SetExecutionResponse, reader: jspb.BinaryReader): SetExecutionResponse;
}

export namespace SetExecutionResponse {
  export type AsObject = {
    setDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListExecutionsRequest extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationRequest | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationRequest): ListExecutionsRequest;
  hasPagination(): boolean;
  clearPagination(): ListExecutionsRequest;

  getSortingColumn(): zitadel_action_v2_query_pb.ExecutionFieldName;
  setSortingColumn(value: zitadel_action_v2_query_pb.ExecutionFieldName): ListExecutionsRequest;
  hasSortingColumn(): boolean;
  clearSortingColumn(): ListExecutionsRequest;

  getFiltersList(): Array<zitadel_action_v2_query_pb.ExecutionSearchFilter>;
  setFiltersList(value: Array<zitadel_action_v2_query_pb.ExecutionSearchFilter>): ListExecutionsRequest;
  clearFiltersList(): ListExecutionsRequest;
  addFilters(value?: zitadel_action_v2_query_pb.ExecutionSearchFilter, index?: number): zitadel_action_v2_query_pb.ExecutionSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionsRequest): ListExecutionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListExecutionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionsRequest;
  static deserializeBinaryFromReader(message: ListExecutionsRequest, reader: jspb.BinaryReader): ListExecutionsRequest;
}

export namespace ListExecutionsRequest {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationRequest.AsObject,
    sortingColumn?: zitadel_action_v2_query_pb.ExecutionFieldName,
    filtersList: Array<zitadel_action_v2_query_pb.ExecutionSearchFilter.AsObject>,
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

export class ListExecutionsResponse extends jspb.Message {
  getPagination(): zitadel_filter_v2_filter_pb.PaginationResponse | undefined;
  setPagination(value?: zitadel_filter_v2_filter_pb.PaginationResponse): ListExecutionsResponse;
  hasPagination(): boolean;
  clearPagination(): ListExecutionsResponse;

  getExecutionsList(): Array<zitadel_action_v2_execution_pb.Execution>;
  setExecutionsList(value: Array<zitadel_action_v2_execution_pb.Execution>): ListExecutionsResponse;
  clearExecutionsList(): ListExecutionsResponse;
  addExecutions(value?: zitadel_action_v2_execution_pb.Execution, index?: number): zitadel_action_v2_execution_pb.Execution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionsResponse): ListExecutionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListExecutionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionsResponse;
  static deserializeBinaryFromReader(message: ListExecutionsResponse, reader: jspb.BinaryReader): ListExecutionsResponse;
}

export namespace ListExecutionsResponse {
  export type AsObject = {
    pagination?: zitadel_filter_v2_filter_pb.PaginationResponse.AsObject,
    executionsList: Array<zitadel_action_v2_execution_pb.Execution.AsObject>,
  }
}

export class ListExecutionFunctionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionFunctionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionFunctionsRequest): ListExecutionFunctionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListExecutionFunctionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionFunctionsRequest;
  static deserializeBinaryFromReader(message: ListExecutionFunctionsRequest, reader: jspb.BinaryReader): ListExecutionFunctionsRequest;
}

export namespace ListExecutionFunctionsRequest {
  export type AsObject = {
  }
}

export class ListExecutionFunctionsResponse extends jspb.Message {
  getFunctionsList(): Array<string>;
  setFunctionsList(value: Array<string>): ListExecutionFunctionsResponse;
  clearFunctionsList(): ListExecutionFunctionsResponse;
  addFunctions(value: string, index?: number): ListExecutionFunctionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionFunctionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionFunctionsResponse): ListExecutionFunctionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListExecutionFunctionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionFunctionsResponse;
  static deserializeBinaryFromReader(message: ListExecutionFunctionsResponse, reader: jspb.BinaryReader): ListExecutionFunctionsResponse;
}

export namespace ListExecutionFunctionsResponse {
  export type AsObject = {
    functionsList: Array<string>,
  }
}

export class ListExecutionMethodsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionMethodsRequest): ListExecutionMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: ListExecutionMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionMethodsRequest;
  static deserializeBinaryFromReader(message: ListExecutionMethodsRequest, reader: jspb.BinaryReader): ListExecutionMethodsRequest;
}

export namespace ListExecutionMethodsRequest {
  export type AsObject = {
  }
}

export class ListExecutionMethodsResponse extends jspb.Message {
  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): ListExecutionMethodsResponse;
  clearMethodsList(): ListExecutionMethodsResponse;
  addMethods(value: string, index?: number): ListExecutionMethodsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionMethodsResponse): ListExecutionMethodsResponse.AsObject;
  static serializeBinaryToWriter(message: ListExecutionMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionMethodsResponse;
  static deserializeBinaryFromReader(message: ListExecutionMethodsResponse, reader: jspb.BinaryReader): ListExecutionMethodsResponse;
}

export namespace ListExecutionMethodsResponse {
  export type AsObject = {
    methodsList: Array<string>,
  }
}

export class ListExecutionServicesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionServicesRequest): ListExecutionServicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListExecutionServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionServicesRequest;
  static deserializeBinaryFromReader(message: ListExecutionServicesRequest, reader: jspb.BinaryReader): ListExecutionServicesRequest;
}

export namespace ListExecutionServicesRequest {
  export type AsObject = {
  }
}

export class ListExecutionServicesResponse extends jspb.Message {
  getServicesList(): Array<string>;
  setServicesList(value: Array<string>): ListExecutionServicesResponse;
  clearServicesList(): ListExecutionServicesResponse;
  addServices(value: string, index?: number): ListExecutionServicesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExecutionServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExecutionServicesResponse): ListExecutionServicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListExecutionServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExecutionServicesResponse;
  static deserializeBinaryFromReader(message: ListExecutionServicesResponse, reader: jspb.BinaryReader): ListExecutionServicesResponse;
}

export namespace ListExecutionServicesResponse {
  export type AsObject = {
    servicesList: Array<string>,
  }
}

