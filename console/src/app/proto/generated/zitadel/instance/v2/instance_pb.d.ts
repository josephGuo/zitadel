import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Instance extends jspb.Message {
  getId(): string;
  setId(value: string): Instance;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasChangeDate(): boolean;
  clearChangeDate(): Instance;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasCreationDate(): boolean;
  clearCreationDate(): Instance;

  getState(): State;
  setState(value: State): Instance;

  getName(): string;
  setName(value: string): Instance;

  getVersion(): string;
  setVersion(value: string): Instance;

  getCustomDomainsList(): Array<CustomDomain>;
  setCustomDomainsList(value: Array<CustomDomain>): Instance;
  clearCustomDomainsList(): Instance;
  addCustomDomains(value?: CustomDomain, index?: number): CustomDomain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    id: string,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: State,
    name: string,
    version: string,
    customDomainsList: Array<CustomDomain.AsObject>,
  }
}

export class CustomDomain extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): CustomDomain;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CustomDomain;
  hasCreationDate(): boolean;
  clearCreationDate(): CustomDomain;

  getDomain(): string;
  setDomain(value: string): CustomDomain;

  getPrimary(): boolean;
  setPrimary(value: boolean): CustomDomain;

  getGenerated(): boolean;
  setGenerated(value: boolean): CustomDomain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDomain.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDomain): CustomDomain.AsObject;
  static serializeBinaryToWriter(message: CustomDomain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDomain;
  static deserializeBinaryFromReader(message: CustomDomain, reader: jspb.BinaryReader): CustomDomain;
}

export namespace CustomDomain {
  export type AsObject = {
    instanceId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    domain: string,
    primary: boolean,
    generated: boolean,
  }
}

export class Filter extends jspb.Message {
  getInIdsFilter(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setInIdsFilter(value?: zitadel_filter_v2_filter_pb.InIDsFilter): Filter;
  hasInIdsFilter(): boolean;
  clearInIdsFilter(): Filter;

  getCustomDomainsFilter(): CustomDomainsFilter | undefined;
  setCustomDomainsFilter(value?: CustomDomainsFilter): Filter;
  hasCustomDomainsFilter(): boolean;
  clearCustomDomainsFilter(): Filter;

  getFilterCase(): Filter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    inIdsFilter?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    customDomainsFilter?: CustomDomainsFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    IN_IDS_FILTER = 1,
    CUSTOM_DOMAINS_FILTER = 2,
  }
}

export class CustomDomainsFilter extends jspb.Message {
  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): CustomDomainsFilter;
  clearDomainsList(): CustomDomainsFilter;
  addDomains(value: string, index?: number): CustomDomainsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDomainsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDomainsFilter): CustomDomainsFilter.AsObject;
  static serializeBinaryToWriter(message: CustomDomainsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDomainsFilter;
  static deserializeBinaryFromReader(message: CustomDomainsFilter, reader: jspb.BinaryReader): CustomDomainsFilter;
}

export namespace CustomDomainsFilter {
  export type AsObject = {
    domainsList: Array<string>,
  }
}

export class CustomDomainFilter extends jspb.Message {
  getDomainFilter(): DomainFilter | undefined;
  setDomainFilter(value?: DomainFilter): CustomDomainFilter;
  hasDomainFilter(): boolean;
  clearDomainFilter(): CustomDomainFilter;

  getGeneratedFilter(): boolean;
  setGeneratedFilter(value: boolean): CustomDomainFilter;

  getPrimaryFilter(): boolean;
  setPrimaryFilter(value: boolean): CustomDomainFilter;

  getFilterCase(): CustomDomainFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomDomainFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomDomainFilter): CustomDomainFilter.AsObject;
  static serializeBinaryToWriter(message: CustomDomainFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomDomainFilter;
  static deserializeBinaryFromReader(message: CustomDomainFilter, reader: jspb.BinaryReader): CustomDomainFilter;
}

export namespace CustomDomainFilter {
  export type AsObject = {
    domainFilter?: DomainFilter.AsObject,
    generatedFilter: boolean,
    primaryFilter: boolean,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    DOMAIN_FILTER = 1,
    GENERATED_FILTER = 2,
    PRIMARY_FILTER = 3,
  }
}

export class DomainFilter extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): DomainFilter;

  getMethod(): zitadel_object_v2_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2_object_pb.TextQueryMethod): DomainFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DomainFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DomainFilter): DomainFilter.AsObject;
  static serializeBinaryToWriter(message: DomainFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DomainFilter;
  static deserializeBinaryFromReader(message: DomainFilter, reader: jspb.BinaryReader): DomainFilter;
}

export namespace DomainFilter {
  export type AsObject = {
    domain: string,
    method: zitadel_object_v2_object_pb.TextQueryMethod,
  }
}

export class TrustedDomain extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): TrustedDomain;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): TrustedDomain;
  hasCreationDate(): boolean;
  clearCreationDate(): TrustedDomain;

  getDomain(): string;
  setDomain(value: string): TrustedDomain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrustedDomain.AsObject;
  static toObject(includeInstance: boolean, msg: TrustedDomain): TrustedDomain.AsObject;
  static serializeBinaryToWriter(message: TrustedDomain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrustedDomain;
  static deserializeBinaryFromReader(message: TrustedDomain, reader: jspb.BinaryReader): TrustedDomain;
}

export namespace TrustedDomain {
  export type AsObject = {
    instanceId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    domain: string,
  }
}

export class TrustedDomainFilter extends jspb.Message {
  getDomainFilter(): DomainFilter | undefined;
  setDomainFilter(value?: DomainFilter): TrustedDomainFilter;
  hasDomainFilter(): boolean;
  clearDomainFilter(): TrustedDomainFilter;

  getFilterCase(): TrustedDomainFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrustedDomainFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TrustedDomainFilter): TrustedDomainFilter.AsObject;
  static serializeBinaryToWriter(message: TrustedDomainFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrustedDomainFilter;
  static deserializeBinaryFromReader(message: TrustedDomainFilter, reader: jspb.BinaryReader): TrustedDomainFilter;
}

export namespace TrustedDomainFilter {
  export type AsObject = {
    domainFilter?: DomainFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    DOMAIN_FILTER = 1,
  }
}

export enum State { 
  STATE_UNSPECIFIED = 0,
  STATE_CREATING = 1,
  STATE_RUNNING = 2,
  STATE_STOPPING = 3,
  STATE_STOPPED = 4,
}
export enum FieldName { 
  FIELD_NAME_UNSPECIFIED = 0,
  FIELD_NAME_ID = 1,
  FIELD_NAME_NAME = 2,
  FIELD_NAME_CREATION_DATE = 3,
}
export enum DomainFieldName { 
  DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
  DOMAIN_FIELD_NAME_DOMAIN = 1,
  DOMAIN_FIELD_NAME_PRIMARY = 2,
  DOMAIN_FIELD_NAME_GENERATED = 3,
  DOMAIN_FIELD_NAME_CREATION_DATE = 4,
}
export enum TrustedDomainFieldName { 
  TRUSTED_DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
  TRUSTED_DOMAIN_FIELD_NAME_DOMAIN = 1,
  TRUSTED_DOMAIN_FIELD_NAME_CREATION_DATE = 2,
}
