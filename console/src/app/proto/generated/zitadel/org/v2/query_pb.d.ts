import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_org_v2_org_pb from '../../../zitadel/org/v2/org_pb'; // proto import: "zitadel/org/v2/org.proto"
import * as zitadel_object_v2_object_pb from '../../../zitadel/object/v2/object_pb'; // proto import: "zitadel/object/v2/object.proto"


export class SearchQuery extends jspb.Message {
  getNameQuery(): OrganizationNameQuery | undefined;
  setNameQuery(value?: OrganizationNameQuery): SearchQuery;
  hasNameQuery(): boolean;
  clearNameQuery(): SearchQuery;

  getDomainQuery(): OrganizationDomainQuery | undefined;
  setDomainQuery(value?: OrganizationDomainQuery): SearchQuery;
  hasDomainQuery(): boolean;
  clearDomainQuery(): SearchQuery;

  getStateQuery(): OrganizationStateQuery | undefined;
  setStateQuery(value?: OrganizationStateQuery): SearchQuery;
  hasStateQuery(): boolean;
  clearStateQuery(): SearchQuery;

  getIdQuery(): OrganizationIDQuery | undefined;
  setIdQuery(value?: OrganizationIDQuery): SearchQuery;
  hasIdQuery(): boolean;
  clearIdQuery(): SearchQuery;

  getDefaultQuery(): DefaultOrganizationQuery | undefined;
  setDefaultQuery(value?: DefaultOrganizationQuery): SearchQuery;
  hasDefaultQuery(): boolean;
  clearDefaultQuery(): SearchQuery;

  getQueryCase(): SearchQuery.QueryCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    nameQuery?: OrganizationNameQuery.AsObject,
    domainQuery?: OrganizationDomainQuery.AsObject,
    stateQuery?: OrganizationStateQuery.AsObject,
    idQuery?: OrganizationIDQuery.AsObject,
    defaultQuery?: DefaultOrganizationQuery.AsObject,
  }

  export enum QueryCase { 
    QUERY_NOT_SET = 0,
    NAME_QUERY = 1,
    DOMAIN_QUERY = 2,
    STATE_QUERY = 3,
    ID_QUERY = 4,
    DEFAULT_QUERY = 5,
  }
}

export class OrganizationNameQuery extends jspb.Message {
  getName(): string;
  setName(value: string): OrganizationNameQuery;

  getMethod(): zitadel_object_v2_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2_object_pb.TextQueryMethod): OrganizationNameQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationNameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationNameQuery): OrganizationNameQuery.AsObject;
  static serializeBinaryToWriter(message: OrganizationNameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationNameQuery;
  static deserializeBinaryFromReader(message: OrganizationNameQuery, reader: jspb.BinaryReader): OrganizationNameQuery;
}

export namespace OrganizationNameQuery {
  export type AsObject = {
    name: string,
    method: zitadel_object_v2_object_pb.TextQueryMethod,
  }
}

export class OrganizationDomainQuery extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): OrganizationDomainQuery;

  getMethod(): zitadel_object_v2_object_pb.TextQueryMethod;
  setMethod(value: zitadel_object_v2_object_pb.TextQueryMethod): OrganizationDomainQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationDomainQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationDomainQuery): OrganizationDomainQuery.AsObject;
  static serializeBinaryToWriter(message: OrganizationDomainQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationDomainQuery;
  static deserializeBinaryFromReader(message: OrganizationDomainQuery, reader: jspb.BinaryReader): OrganizationDomainQuery;
}

export namespace OrganizationDomainQuery {
  export type AsObject = {
    domain: string,
    method: zitadel_object_v2_object_pb.TextQueryMethod,
  }
}

export class OrganizationStateQuery extends jspb.Message {
  getState(): zitadel_org_v2_org_pb.OrganizationState;
  setState(value: zitadel_org_v2_org_pb.OrganizationState): OrganizationStateQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationStateQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationStateQuery): OrganizationStateQuery.AsObject;
  static serializeBinaryToWriter(message: OrganizationStateQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationStateQuery;
  static deserializeBinaryFromReader(message: OrganizationStateQuery, reader: jspb.BinaryReader): OrganizationStateQuery;
}

export namespace OrganizationStateQuery {
  export type AsObject = {
    state: zitadel_org_v2_org_pb.OrganizationState,
  }
}

export class OrganizationIDQuery extends jspb.Message {
  getId(): string;
  setId(value: string): OrganizationIDQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationIDQuery.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationIDQuery): OrganizationIDQuery.AsObject;
  static serializeBinaryToWriter(message: OrganizationIDQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationIDQuery;
  static deserializeBinaryFromReader(message: OrganizationIDQuery, reader: jspb.BinaryReader): OrganizationIDQuery;
}

export namespace OrganizationIDQuery {
  export type AsObject = {
    id: string,
  }
}

export class DefaultOrganizationQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultOrganizationQuery.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultOrganizationQuery): DefaultOrganizationQuery.AsObject;
  static serializeBinaryToWriter(message: DefaultOrganizationQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultOrganizationQuery;
  static deserializeBinaryFromReader(message: DefaultOrganizationQuery, reader: jspb.BinaryReader): DefaultOrganizationQuery;
}

export namespace DefaultOrganizationQuery {
  export type AsObject = {
  }
}

export class DomainSearchFilter extends jspb.Message {
  getDomainFilter(): OrganizationDomainQuery | undefined;
  setDomainFilter(value?: OrganizationDomainQuery): DomainSearchFilter;
  hasDomainFilter(): boolean;
  clearDomainFilter(): DomainSearchFilter;

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
    domainFilter?: OrganizationDomainQuery.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    DOMAIN_FILTER = 1,
  }
}

export enum OrganizationFieldName { 
  ORGANIZATION_FIELD_NAME_UNSPECIFIED = 0,
  ORGANIZATION_FIELD_NAME_NAME = 1,
  ORGANIZATION_FIELD_NAME_CREATION_DATE = 2,
}
export enum DomainFieldName { 
  DOMAIN_FIELD_NAME_UNSPECIFIED = 0,
  DOMAIN_FIELD_NAME_NAME = 1,
  DOMAIN_FIELD_NAME_CREATION_DATE = 2,
}
