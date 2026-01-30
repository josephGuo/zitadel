import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_action_v2_execution_pb from '../../../zitadel/action/v2/execution_pb'; // proto import: "zitadel/action/v2/execution.proto"
import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"


export class ExecutionSearchFilter extends jspb.Message {
  getInConditionsFilter(): InConditionsFilter | undefined;
  setInConditionsFilter(value?: InConditionsFilter): ExecutionSearchFilter;
  hasInConditionsFilter(): boolean;
  clearInConditionsFilter(): ExecutionSearchFilter;

  getExecutionTypeFilter(): ExecutionTypeFilter | undefined;
  setExecutionTypeFilter(value?: ExecutionTypeFilter): ExecutionSearchFilter;
  hasExecutionTypeFilter(): boolean;
  clearExecutionTypeFilter(): ExecutionSearchFilter;

  getTargetFilter(): TargetFilter | undefined;
  setTargetFilter(value?: TargetFilter): ExecutionSearchFilter;
  hasTargetFilter(): boolean;
  clearTargetFilter(): ExecutionSearchFilter;

  getFilterCase(): ExecutionSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionSearchFilter): ExecutionSearchFilter.AsObject;
  static serializeBinaryToWriter(message: ExecutionSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionSearchFilter;
  static deserializeBinaryFromReader(message: ExecutionSearchFilter, reader: jspb.BinaryReader): ExecutionSearchFilter;
}

export namespace ExecutionSearchFilter {
  export type AsObject = {
    inConditionsFilter?: InConditionsFilter.AsObject,
    executionTypeFilter?: ExecutionTypeFilter.AsObject,
    targetFilter?: TargetFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    IN_CONDITIONS_FILTER = 1,
    EXECUTION_TYPE_FILTER = 2,
    TARGET_FILTER = 3,
  }
}

export class InConditionsFilter extends jspb.Message {
  getConditionsList(): Array<zitadel_action_v2_execution_pb.Condition>;
  setConditionsList(value: Array<zitadel_action_v2_execution_pb.Condition>): InConditionsFilter;
  clearConditionsList(): InConditionsFilter;
  addConditions(value?: zitadel_action_v2_execution_pb.Condition, index?: number): zitadel_action_v2_execution_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InConditionsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: InConditionsFilter): InConditionsFilter.AsObject;
  static serializeBinaryToWriter(message: InConditionsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InConditionsFilter;
  static deserializeBinaryFromReader(message: InConditionsFilter, reader: jspb.BinaryReader): InConditionsFilter;
}

export namespace InConditionsFilter {
  export type AsObject = {
    conditionsList: Array<zitadel_action_v2_execution_pb.Condition.AsObject>,
  }
}

export class ExecutionTypeFilter extends jspb.Message {
  getExecutionType(): ExecutionType;
  setExecutionType(value: ExecutionType): ExecutionTypeFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionTypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionTypeFilter): ExecutionTypeFilter.AsObject;
  static serializeBinaryToWriter(message: ExecutionTypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionTypeFilter;
  static deserializeBinaryFromReader(message: ExecutionTypeFilter, reader: jspb.BinaryReader): ExecutionTypeFilter;
}

export namespace ExecutionTypeFilter {
  export type AsObject = {
    executionType: ExecutionType,
  }
}

export class TargetFilter extends jspb.Message {
  getTargetId(): string;
  setTargetId(value: string): TargetFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TargetFilter): TargetFilter.AsObject;
  static serializeBinaryToWriter(message: TargetFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetFilter;
  static deserializeBinaryFromReader(message: TargetFilter, reader: jspb.BinaryReader): TargetFilter;
}

export namespace TargetFilter {
  export type AsObject = {
    targetId: string,
  }
}

export class TargetSearchFilter extends jspb.Message {
  getTargetNameFilter(): TargetNameFilter | undefined;
  setTargetNameFilter(value?: TargetNameFilter): TargetSearchFilter;
  hasTargetNameFilter(): boolean;
  clearTargetNameFilter(): TargetSearchFilter;

  getInTargetIdsFilter(): InTargetIDsFilter | undefined;
  setInTargetIdsFilter(value?: InTargetIDsFilter): TargetSearchFilter;
  hasInTargetIdsFilter(): boolean;
  clearInTargetIdsFilter(): TargetSearchFilter;

  getFilterCase(): TargetSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TargetSearchFilter): TargetSearchFilter.AsObject;
  static serializeBinaryToWriter(message: TargetSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetSearchFilter;
  static deserializeBinaryFromReader(message: TargetSearchFilter, reader: jspb.BinaryReader): TargetSearchFilter;
}

export namespace TargetSearchFilter {
  export type AsObject = {
    targetNameFilter?: TargetNameFilter.AsObject,
    inTargetIdsFilter?: InTargetIDsFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    TARGET_NAME_FILTER = 1,
    IN_TARGET_IDS_FILTER = 2,
  }
}

export class TargetNameFilter extends jspb.Message {
  getTargetName(): string;
  setTargetName(value: string): TargetNameFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): TargetNameFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetNameFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TargetNameFilter): TargetNameFilter.AsObject;
  static serializeBinaryToWriter(message: TargetNameFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetNameFilter;
  static deserializeBinaryFromReader(message: TargetNameFilter, reader: jspb.BinaryReader): TargetNameFilter;
}

export namespace TargetNameFilter {
  export type AsObject = {
    targetName: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class InTargetIDsFilter extends jspb.Message {
  getTargetIdsList(): Array<string>;
  setTargetIdsList(value: Array<string>): InTargetIDsFilter;
  clearTargetIdsList(): InTargetIDsFilter;
  addTargetIds(value: string, index?: number): InTargetIDsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InTargetIDsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: InTargetIDsFilter): InTargetIDsFilter.AsObject;
  static serializeBinaryToWriter(message: InTargetIDsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InTargetIDsFilter;
  static deserializeBinaryFromReader(message: InTargetIDsFilter, reader: jspb.BinaryReader): InTargetIDsFilter;
}

export namespace InTargetIDsFilter {
  export type AsObject = {
    targetIdsList: Array<string>,
  }
}

export class PublicKeySearchFilter extends jspb.Message {
  getKeyIdsFilter(): zitadel_filter_v2_filter_pb.InIDsFilter | undefined;
  setKeyIdsFilter(value?: zitadel_filter_v2_filter_pb.InIDsFilter): PublicKeySearchFilter;
  hasKeyIdsFilter(): boolean;
  clearKeyIdsFilter(): PublicKeySearchFilter;

  getActiveFilter(): boolean;
  setActiveFilter(value: boolean): PublicKeySearchFilter;

  getExpirationDateFilter(): zitadel_filter_v2_filter_pb.TimestampFilter | undefined;
  setExpirationDateFilter(value?: zitadel_filter_v2_filter_pb.TimestampFilter): PublicKeySearchFilter;
  hasExpirationDateFilter(): boolean;
  clearExpirationDateFilter(): PublicKeySearchFilter;

  getFilterCase(): PublicKeySearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeySearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeySearchFilter): PublicKeySearchFilter.AsObject;
  static serializeBinaryToWriter(message: PublicKeySearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeySearchFilter;
  static deserializeBinaryFromReader(message: PublicKeySearchFilter, reader: jspb.BinaryReader): PublicKeySearchFilter;
}

export namespace PublicKeySearchFilter {
  export type AsObject = {
    keyIdsFilter?: zitadel_filter_v2_filter_pb.InIDsFilter.AsObject,
    activeFilter: boolean,
    expirationDateFilter?: zitadel_filter_v2_filter_pb.TimestampFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    KEY_IDS_FILTER = 1,
    ACTIVE_FILTER = 2,
    EXPIRATION_DATE_FILTER = 3,
  }
}

export enum TargetFieldName { 
  TARGET_FIELD_NAME_UNSPECIFIED = 0,
  TARGET_FIELD_NAME_ID = 1,
  TARGET_FIELD_NAME_CREATED_DATE = 2,
  TARGET_FIELD_NAME_CHANGED_DATE = 3,
  TARGET_FIELD_NAME_NAME = 4,
  TARGET_FIELD_NAME_TARGET_TYPE = 5,
  TARGET_FIELD_NAME_URL = 6,
  TARGET_FIELD_NAME_TIMEOUT = 7,
  TARGET_FIELD_NAME_INTERRUPT_ON_ERROR = 8,
}
export enum ExecutionType { 
  EXECUTION_TYPE_UNSPECIFIED = 0,
  EXECUTION_TYPE_REQUEST = 1,
  EXECUTION_TYPE_RESPONSE = 2,
  EXECUTION_TYPE_EVENT = 3,
  EXECUTION_TYPE_FUNCTION = 4,
}
export enum ExecutionFieldName { 
  EXECUTION_FIELD_NAME_UNSPECIFIED = 0,
  EXECUTION_FIELD_NAME_ID = 1,
  EXECUTION_FIELD_NAME_CREATED_DATE = 2,
  EXECUTION_FIELD_NAME_CHANGED_DATE = 3,
}
export enum PublicKeyFieldName { 
  PUBLIC_KEY_FIELD_NAME_UNSPECIFIED = 0,
  PUBLIC_KEY_FIELD_NAME_CREATION_DATE = 1,
  PUBLIC_KEY_FIELD_NAME_CHANGE_DATE = 2,
  PUBLIC_KEY_FIELD_NAME_EXPIRATION_DATE = 3,
}
