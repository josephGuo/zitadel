import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class PersonalAccessToken extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): PersonalAccessToken;
  hasCreationDate(): boolean;
  clearCreationDate(): PersonalAccessToken;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): PersonalAccessToken;
  hasChangeDate(): boolean;
  clearChangeDate(): PersonalAccessToken;

  getId(): string;
  setId(value: string): PersonalAccessToken;

  getUserId(): string;
  setUserId(value: string): PersonalAccessToken;

  getOrganizationId(): string;
  setOrganizationId(value: string): PersonalAccessToken;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): PersonalAccessToken;
  hasExpirationDate(): boolean;
  clearExpirationDate(): PersonalAccessToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalAccessToken.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalAccessToken): PersonalAccessToken.AsObject;
  static serializeBinaryToWriter(message: PersonalAccessToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalAccessToken;
  static deserializeBinaryFromReader(message: PersonalAccessToken, reader: jspb.BinaryReader): PersonalAccessToken;
}

export namespace PersonalAccessToken {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    userId: string,
    organizationId: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PersonalAccessTokensSearchFilter extends jspb.Message {
  getTokenIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setTokenIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): PersonalAccessTokensSearchFilter;
  hasTokenIdFilter(): boolean;
  clearTokenIdFilter(): PersonalAccessTokensSearchFilter;

  getUserIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setUserIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): PersonalAccessTokensSearchFilter;
  hasUserIdFilter(): boolean;
  clearUserIdFilter(): PersonalAccessTokensSearchFilter;

  getOrganizationIdFilter(): zitadel_filter_v2_filter_pb.IDFilter | undefined;
  setOrganizationIdFilter(value?: zitadel_filter_v2_filter_pb.IDFilter): PersonalAccessTokensSearchFilter;
  hasOrganizationIdFilter(): boolean;
  clearOrganizationIdFilter(): PersonalAccessTokensSearchFilter;

  getCreatedDateFilter(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setCreatedDateFilter(value?: zitadel_filter_v2_filter_pb.TimestampFilter): PersonalAccessTokensSearchFilter;
  hasCreatedDateFilter(): boolean;
  clearCreatedDateFilter(): PersonalAccessTokensSearchFilter;

  getExpirationDateFilter(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setExpirationDateFilter(value?: zitadel_filter_v2_filter_pb.TimestampFilter): PersonalAccessTokensSearchFilter;
  hasExpirationDateFilter(): boolean;
  clearExpirationDateFilter(): PersonalAccessTokensSearchFilter;

  getFilterCase(): PersonalAccessTokensSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalAccessTokensSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalAccessTokensSearchFilter): PersonalAccessTokensSearchFilter.AsObject;
  static serializeBinaryToWriter(message: PersonalAccessTokensSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalAccessTokensSearchFilter;
  static deserializeBinaryFromReader(message: PersonalAccessTokensSearchFilter, reader: jspb.BinaryReader): PersonalAccessTokensSearchFilter;
}

export namespace PersonalAccessTokensSearchFilter {
  export type AsObject = {
    tokenIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    userIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    organizationIdFilter?: zitadel_filter_v2_filter_pb.IDFilter.AsObject,
    createdDateFilter?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
    expirationDateFilter?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    TOKEN_ID_FILTER = 1,
    USER_ID_FILTER = 2,
    ORGANIZATION_ID_FILTER = 3,
    CREATED_DATE_FILTER = 4,
    EXPIRATION_DATE_FILTER = 5,
  }
}

export enum PersonalAccessTokenFieldName { 
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_UNSPECIFIED = 0,
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_CREATED_DATE = 1,
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_ID = 2,
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_USER_ID = 3,
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_ORGANIZATION_ID = 4,
  PERSONAL_ACCESS_TOKEN_FIELD_NAME_EXPIRATION_DATE = 5,
}
