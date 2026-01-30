import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class OrganizationSettings extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): OrganizationSettings;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): OrganizationSettings;
  hasCreationDate(): boolean;
  clearCreationDate(): OrganizationSettings;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): OrganizationSettings;
  hasChangeDate(): boolean;
  clearChangeDate(): OrganizationSettings;

  getOrganizationScopedUsernames(): boolean;
  setOrganizationScopedUsernames(value: boolean): OrganizationSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationSettings.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationSettings): OrganizationSettings.AsObject;
  static serializeBinaryToWriter(message: OrganizationSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationSettings;
  static deserializeBinaryFromReader(message: OrganizationSettings, reader: jspb.BinaryReader): OrganizationSettings;
}

export namespace OrganizationSettings {
  export type AsObject = {
    organizationId: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationScopedUsernames: boolean,
  }
}

export class OrganizationSettingsSearchFilter extends jspb.Message {
  getInOrganizationIdsFilter(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setInOrganizationIdsFilter(value?: zitadel_filter_v2_filter_pb.InIDsFilter): OrganizationSettingsSearchFilter;
  hasInOrganizationIdsFilter(): boolean;
  clearInOrganizationIdsFilter(): OrganizationSettingsSearchFilter;

  getOrganizationScopedUsernamesFilter(): OrganizationScopedUsernamesFilter | undefined;
  setOrganizationScopedUsernamesFilter(value?: OrganizationScopedUsernamesFilter): OrganizationSettingsSearchFilter;
  hasOrganizationScopedUsernamesFilter(): boolean;
  clearOrganizationScopedUsernamesFilter(): OrganizationSettingsSearchFilter;

  getFilterCase(): OrganizationSettingsSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationSettingsSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationSettingsSearchFilter): OrganizationSettingsSearchFilter.AsObject;
  static serializeBinaryToWriter(message: OrganizationSettingsSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationSettingsSearchFilter;
  static deserializeBinaryFromReader(message: OrganizationSettingsSearchFilter, reader: jspb.BinaryReader): OrganizationSettingsSearchFilter;
}

export namespace OrganizationSettingsSearchFilter {
  export type AsObject = {
    inOrganizationIdsFilter?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    organizationScopedUsernamesFilter?: OrganizationScopedUsernamesFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    IN_ORGANIZATION_IDS_FILTER = 1,
    ORGANIZATION_SCOPED_USERNAMES_FILTER = 2,
  }
}

export class OrganizationScopedUsernamesFilter extends jspb.Message {
  getOrganizationScopedUsernames(): boolean;
  setOrganizationScopedUsernames(value: boolean): OrganizationScopedUsernamesFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationScopedUsernamesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationScopedUsernamesFilter): OrganizationScopedUsernamesFilter.AsObject;
  static serializeBinaryToWriter(message: OrganizationScopedUsernamesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationScopedUsernamesFilter;
  static deserializeBinaryFromReader(message: OrganizationScopedUsernamesFilter, reader: jspb.BinaryReader): OrganizationScopedUsernamesFilter;
}

export namespace OrganizationScopedUsernamesFilter {
  export type AsObject = {
    organizationScopedUsernames: boolean,
  }
}

export enum OrganizationSettingsFieldName { 
  ORGANIZATION_SETTINGS_FIELD_NAME_UNSPECIFIED = 0,
  ORGANIZATION_SETTINGS_FIELD_NAME_ORGANIZATION_ID = 1,
  ORGANIZATION_SETTINGS_FIELD_NAME_CREATION_DATE = 2,
  ORGANIZATION_SETTINGS_FIELD_NAME_CHANGE_DATE = 3,
}
