import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v2beta_object_pb from '../../../zitadel/object/v2beta/object_pb'; // proto import: "zitadel/object/v2beta/object.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): Organization;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Organization;
  hasCreationDate(): boolean;
  clearCreationDate(): Organization;

  getChangedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangedDate(value?: google_protobuf_timestamp_pb.Timestamp): Organization;
  hasChangedDate(): boolean;
  clearChangedDate(): Organization;

  getState(): OrgState;
  setState(value: OrgState): Organization;

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
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: OrgState,
    name: string,
    primaryDomain: string,
  }
}

export class OrganizationSearchFilter extends jspb.Message {
  getNameFilter(): OrgNameFilter | undefined;
  setNameFilter(value?: OrgNameFilter): OrganizationSearchFilter;
  hasNameFilter(): boolean;
  clearNameFilter(): OrganizationSearchFilter;

  getDomainFilter(): OrgDomainFilter | undefined;
  setDomainFilter(value?: OrgDomainFilter): OrganizationSearchFilter;
  hasDomainFilter(): boolean;
  clearDomainFilter(): OrganizationSearchFilter;

  getStateFilter(): OrgStateFilter | undefined;
  setStateFilter(value?: OrgStateFilter): OrganizationSearchFilter;
  hasStateFilter(): boolean;
  clearStateFilter(): OrganizationSearchFilter;

  getIdFilter(): OrgIDFilter | undefined;
  setIdFilter(value?: OrgIDFilter): OrganizationSearchFilter;
  hasIdFilter(): boolean;
  clearIdFilter(): OrganizationSearchFilter;

  getFilterCase(): OrganizationSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationSearchFilter): OrganizationSearchFilter.AsObject;
  static serializeBinaryToWriter(message: OrganizationSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationSearchFilter;
  static deserializeBinaryFromReader(message: OrganizationSearchFilter, reader: jspb.BinaryReader): OrganizationSearchFilter;
}

export namespace OrganizationSearchFilter {
  export type AsObject = {
    nameFilter?: OrgNameFilter.AsObject,
    domainFilter?: OrgDomainFilter.AsObject,
    stateFilter?: OrgStateFilter.AsObject,
    idFilter?: OrgIDFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    NAME_FILTER = 1,
    DOMAIN_FILTER = 2,
    STATE_FILTER = 3,
    ID_FILTER = 4,
  }
}

export class OrgNameFilter extends jspb.Message {
  getName(): string;
  setName(value: string): OrgNameFilter;

  getMethod(): zitadel_object_v2beta_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2beta_object_pb.TextQueryMethod): OrgNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrgNameFilter): OrgNameFilter.AsObject;
  static serializeBinaryToWriter(message: OrgNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgNameFilter;
  static deserializeBinaryFromReader(message: OrgNameFilter, reader: jspb.BinaryReader): OrgNameFilter;
}

export namespace OrgNameFilter {
  export type AsObject = {
    name: string,
    method: zitadel_object_v2beta_object_pb.TextQueryMethod,
  }
}

export class OrgDomainFilter extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): OrgDomainFilter;

  getMethod(): zitadel_object_v2beta_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2beta_object_pb.TextQueryMethod): OrgDomainFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgDomainFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrgDomainFilter): OrgDomainFilter.AsObject;
  static serializeBinaryToWriter(message: OrgDomainFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgDomainFilter;
  static deserializeBinaryFromReader(message: OrgDomainFilter, reader: jspb.BinaryReader): OrgDomainFilter;
}

export namespace OrgDomainFilter {
  export type AsObject = {
    domain: string,
    method: zitadel_object_v2beta_object_pb.TextQueryMethod,
  }
}

export class OrgStateFilter extends jspb.Message {
  getState(): OrgState;
  setState(value: OrgState): OrgStateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgStateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrgStateFilter): OrgStateFilter.AsObject;
  static serializeBinaryToWriter(message: OrgStateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgStateFilter;
  static deserializeBinaryFromReader(message: OrgStateFilter, reader: jspb.BinaryReader): OrgStateFilter;
}

export namespace OrgStateFilter {
  export type AsObject = {
    state: OrgState,
  }
}

export class OrgIDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): OrgIDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgIDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrgIDFilter): OrgIDFilter.AsObject;
  static serializeBinaryToWriter(message: OrgIDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgIDFilter;
  static deserializeBinaryFromReader(message: OrgIDFilter, reader: jspb.BinaryReader): OrgIDFilter;
}

export namespace OrgIDFilter {
  export type AsObject = {
    id: string,
  }
}

export class DomainSearchFilter extends jspb.Message {
  getDomainNameFilter(): DomainNameFilter | undefined;
  setDomainNameFilter(value?: DomainNameFilter): DomainSearchFilter;
  hasDomainNameFilter(): boolean;
  clearDomainNameFilter(): DomainSearchFilter;

  getFilterCase(): DomainSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DomainSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DomainSearchFilter): DomainSearchFilter.AsObject;
  static serializeBinaryToWriter(message: DomainSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DomainSearchFilter;
  static deserializeBinaryFromReader(message: DomainSearchFilter, reader: jspb.BinaryReader): DomainSearchFilter;
}

export namespace DomainSearchFilter {
  export type AsObject = {
    domainNameFilter?: DomainNameFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    DOMAIN_NAME_FILTER = 1,
  }
}

export class DomainNameFilter extends jspb.Message {
  getName(): string;
  setName(value: string): DomainNameFilter;

  getMethod(): zitadel_object_v2beta_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2beta_object_pb.TextQueryMethod): DomainNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DomainNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DomainNameFilter): DomainNameFilter.AsObject;
  static serializeBinaryToWriter(message: DomainNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DomainNameFilter;
  static deserializeBinaryFromReader(message: DomainNameFilter, reader: jspb.BinaryReader): DomainNameFilter;
}

export namespace DomainNameFilter {
  export type AsObject = {
    name: string,
    method: zitadel_object_v2beta_object_pb.TextQueryMethod,
  }
}

export class Domain extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): Domain;

  getDomainName(): string;
  setDomainName(value: string): Domain;

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
    domainName: string,
    isVerified: boolean,
    isPrimary: boolean,
    validationType: DomainValidationType,
  }
}

export enum OrgState { 
  ORG_STATE_UNSPECIFIED = 0,
  ORG_STATE_ACTIVE = 1,
  ORG_STATE_INACTIVE = 2,
  ORG_STATE_REMOVED = 3,
}
export enum OrgFieldName { 
  ORG_FIELD_NAME_UNSPECIFIED = 0,
  ORG_FIELD_NAME_NAME = 1,
  ORG_FIELD_NAME_CREATION_DATE = 2,
}
export enum DomainValidationType { 
  DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0,
  DOMAIN_VALIDATION_TYPE_HTTP = 1,
  DOMAIN_VALIDATION_TYPE_DNS = 2,
}
