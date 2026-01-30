import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"


export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): Organization;

  getDetails(): zitadel_object_v2_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2_object_pb.Details): Organization;
  hasDetails(): boolean;
  clearDetails(): Organization;

  getState(): OrganizationState;
  setState(value: OrganizationState): Organization;

  getName(): string;
  setName(value: string): Organization;

  getPrimaryDomain(): string;
  setPrimaryDomain(value: string): Organization;

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
    details?: zitadel_object_v2_object_pb.Details.AsObject,
    state: OrganizationState,
    name: string,
    primaryDomain: string,
  }
}

export class Domain extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): Domain;

  getDomain(): string;
  setDomain(value: string): Domain;

  getIsVerified(): boolean;
  setIsVerified(value: boolean): Domain;

  getIsPrimary(): boolean;
  setIsPrimary(value: boolean): Domain;

  getValidationType(): DomainValidationType;
  setValidationType(value: DomainValidationType): Domain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Domain.AsObject;
  static toObject(includeInstance: boolean, msg: Domain): Domain.AsObject;
  static serializeBinaryToWriter(message: Domain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Domain;
  static deserializeBinaryFromReader(message: Domain, reader: jspb.BinaryReader): Domain;
}

export namespace Domain {
  export type AsObject = {
    organizationId: string,
    domain: string,
    isVerified: boolean,
    isPrimary: boolean,
    validationType: DomainValidationType,
  }
}

export enum OrganizationState { 
  ORGANIZATION_STATE_UNSPECIFIED = 0,
  ORGANIZATION_STATE_ACTIVE = 1,
  ORGANIZATION_STATE_INACTIVE = 2,
  ORGANIZATION_STATE_REMOVED = 3,
}
export enum DomainValidationType { 
  DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
  DOMAIN_VALIDATION_TYPE_HTTP = 1,
  DOMAIN_VALIDATION_TYPE_DNS = 2,
}
