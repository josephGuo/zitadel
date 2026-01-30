import * as jspb from 'google-protobuf'

import * as zitadel_filter_v2_filter_pb from '../../../zitadel/filter/v2/filter_pb'; // proto import: "zitadel/filter/v2/filter.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Metadata extends jspb.Message {
  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Metadata;
  hasCreationDate(): boolean;
  clearCreationDate(): Metadata;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Metadata;
  hasChangeDate(): boolean;
  clearChangeDate(): Metadata;

  getKey(): string;
  setKey(value: string): Metadata;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    key: string,
    value: Uint8Array | string,
  }
}

export class MetadataSearchFilter extends jspb.Message {
  getKeyFilter(): MetadataKeyFilter | undefined;
  setKeyFilter(value?: MetadataKeyFilter): MetadataSearchFilter;
  hasKeyFilter(): boolean;
  clearKeyFilter(): MetadataSearchFilter;

  getFilterCase(): MetadataSearchFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataSearchFilter): MetadataSearchFilter.AsObject;
  static serializeBinaryToWriter(message: MetadataSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataSearchFilter;
  static deserializeBinaryFromReader(message: MetadataSearchFilter, reader: jspb.BinaryReader): MetadataSearchFilter;
}

export namespace MetadataSearchFilter {
  export type AsObject = {
    keyFilter?: MetadataKeyFilter.AsObject,
  }

  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    KEY_FILTER = 1,
  }
}

export class MetadataKeyFilter extends jspb.Message {
  getKey(): string;
  setKey(value: string): MetadataKeyFilter;

  getMethod(): zitadel_filter_v2_filter_pb.TextFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.TextFilterMethod): MetadataKeyFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataKeyFilter.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataKeyFilter): MetadataKeyFilter.AsObject;
  static serializeBinaryToWriter(message: MetadataKeyFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataKeyFilter;
  static deserializeBinaryFromReader(message: MetadataKeyFilter, reader: jspb.BinaryReader): MetadataKeyFilter;
}

export namespace MetadataKeyFilter {
  export type AsObject = {
    key: string,
    method: zitadel_filter_v2_filter_pb.TextFilterMethod,
  }
}

export class MetadataValueFilter extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): MetadataValueFilter;

  getMethod(): zitadel_filter_v2_filter_pb.ByteFilterMethod;
  setMethod(value: zitadel_filter_v2_filter_pb.ByteFilterMethod): MetadataValueFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataValueFilter.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataValueFilter): MetadataValueFilter.AsObject;
  static serializeBinaryToWriter(message: MetadataValueFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataValueFilter;
  static deserializeBinaryFromReader(message: MetadataValueFilter, reader: jspb.BinaryReader): MetadataValueFilter;
}

export namespace MetadataValueFilter {
  export type AsObject = {
    value: Uint8Array | string,
    method: zitadel_filter_v2_filter_pb.ByteFilterMethod,
  }
}

