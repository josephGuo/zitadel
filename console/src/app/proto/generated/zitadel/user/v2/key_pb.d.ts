import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class Key extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasCreationDate(): boolean;
  clearCreationDate(): Key;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasChangeDate(): boolean;
  clearChangeDate(): Key;

  getId(): string;
  setId(value: string): Key;

  getUserId(): string;
  setUserId(value: string): Key;

  getOrganizationId(): string;
  setOrganizationId(value: string): Key;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasExpirationDate(): boolean;
  clearExpirationDate(): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    userId: string,
    organizationId: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class KeysSearchFilter extends jspb.Message {
  getKeyIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setKeyIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): KeysSearchFilter;
  hasKeyIdFilter(): boolean;
  clearKeyIdFilter(): KeysSearchFilter;

  getUserIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setUserIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): KeysSearchFilter;
  hasUserIdFilter(): boolean;
  clearUserIdFilter(): KeysSearchFilter;

  getOrganizationIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setOrganizationIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): KeysSearchFilter;
  hasOrganizationIdFilter(): boolean;
  clearOrganizationIdFilter(): KeysSearchFilter;

  getCreatedDateFilter(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setCreatedDateFilter(value?: zitadel_filter_v2_filter_pb.TimestampFilter): KeysSearchFilter;
  hasCreatedDateFilter(): boolean;
  clearCreatedDateFilter(): KeysSearchFilter;

  getExpirationDateFilter(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setExpirationDateFilter(value?: zitadel_filter_v2_filter_pb.TimestampFilter): KeysSearchFilter;
  hasExpirationDateFilter(): boolean;
  clearExpirationDateFilter(): KeysSearchFilter;

  getFilterCase(): KeysSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeysSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: KeysSearchFilter): KeysSearchFilter.AsObject;
  static serializeBinaryToWriter(message: KeysSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeysSearchFilter;
  static deserializeBinaryFromReader(message: KeysSearchFilter, reader: jspb.BinaryReader): KeysSearchFilter;
}

export namespace KeysSearchFilter {
  export type AsObject = {
    keyIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    userIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    organizationIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    createdDateFilter?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
    expirationDateFilter?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    KEY_ID_FILTER = 1,
    USER_ID_FILTER = 2,
    ORGANIZATION_ID_FILTER = 3,
    CREATED_DATE_FILTER = 4,
    EXPIRATION_DATE_FILTER = 5,
  }
}

export enum KeyFieldName { 
  KEY_FIELD_NAME_UNSPECIFIED = 0,
  KEY_FIELD_NAME_CREATED_DATE = 1,
  KEY_FIELD_NAME_ID = 2,
  KEY_FIELD_NAME_USER_ID = 3,
  KEY_FIELD_NAME_ORGANIZATION_ID = 4,
  KEY_FIELD_NAME_KEY_EXPIRATION_DATE = 5,
}
