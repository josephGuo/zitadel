import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class PaginationRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): PaginationRequest;

  getLimit(): number;
  setLimit(value: number): PaginationRequest;

  getAsc(): boolean;
  setAsc(value: boolean): PaginationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
  static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationRequest;
  static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    asc: boolean,
  }
}

export class PaginationResponse extends jspb.Message {
  getTotalResult(): number;
  setTotalResult(value: number): PaginationResponse;

  getAppliedLimit(): number;
  setAppliedLimit(value: number): PaginationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
  static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResponse;
  static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
  export type AsObject = {
    totalResult: number,
    appliedLimit: number,
  }
}

export class IDFilter extends jspb.Message {
  getId(): string;
  setId(value: string): IDFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDFilter.AsObject;
  static toObject(includeInstance: boolean, msg: IDFilter): IDFilter.AsObject;
  static serializeBinaryToWriter(message: IDFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDFilter;
  static deserializeBinaryFromReader(message: IDFilter, reader: jspb.BinaryReader): IDFilter;
}

export namespace IDFilter {
  export type AsObject = {
    id: string,
  }
}

export class TimestampFilter extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimestampFilter;
  hasTimestamp(): boolean;
  clearTimestamp(): TimestampFilter;

  getMethod(): TimestampFilterMethod;
  setMethod(value: TimestampFilterMethod): TimestampFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampFilter): TimestampFilter.AsObject;
  static serializeBinaryToWriter(message: TimestampFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampFilter;
  static deserializeBinaryFromReader(message: TimestampFilter, reader: jspb.BinaryReader): TimestampFilter;
}

export namespace TimestampFilter {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    method: TimestampFilterMethod,
  }
}

export class InIDsFilter extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InIDsFilter;
  clearIdsList(): InIDsFilter;
  addIds(value: string, index?: number): InIDsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InIDsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: InIDsFilter): InIDsFilter.AsObject;
  static serializeBinaryToWriter(message: InIDsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InIDsFilter;
  static deserializeBinaryFromReader(message: InIDsFilter, reader: jspb.BinaryReader): InIDsFilter;
}

export namespace InIDsFilter {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export enum TextFilterMethod { 
  TEXT_FILTER_METHOD_EQUALS = 0,
  TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE = 1,
  TEXT_FILTER_METHOD_STARTS_WITH = 2,
  TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE = 3,
  TEXT_FILTER_METHOD_CONTAINS = 4,
  TEXT_FILTER_METHOD_CONTAINS_IGNORE_CASE = 5,
  TEXT_FILTER_METHOD_ENDS_WITH = 6,
  TEXT_FILTER_METHOD_ENDS_WITH_IGNORE_CASE = 7,
}
export enum ListFilterMethod { 
  LIST_FILTER_METHOD_IN = 0,
}
export enum TimestampFilterMethod { 
  TIMESTAMP_FILTER_METHOD_EQUALS = 0,
  TIMESTAMP_FILTER_METHOD_GREATER = 1,
  TIMESTAMP_FILTER_METHOD_GREATER_OR_EQUALS = 2,
  TIMESTAMP_FILTER_METHOD_LESS = 3,
  TIMESTAMP_FILTER_METHOD_LESS_OR_EQUALS = 4,
}
