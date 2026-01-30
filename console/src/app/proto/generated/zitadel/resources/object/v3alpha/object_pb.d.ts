import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_object_v3alpha_object_pb from '../../../../zitadel/object/v3alpha/object_pb'; // proto import: "zitadel/object/v3alpha/object.proto"


export class Details extends jspb.Message {
  getId(): string;
  setId(value: string): Details;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Details;
  hasCreated(): boolean;
  clearCreated(): Details;

  getChanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChanged(value?: google_protobuf_timestamp_pb.Timestamp): Details;
  hasChanged(): boolean;
  clearChanged(): Details;

  getOwner(): zitadel_object_v3alpha_object_pb.Owner | undefined;
  setOwner(value?: zitadel_object_v3alpha_object_pb.Owner): Details;
  hasOwner(): boolean;
  clearOwner(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    id: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changed?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    owner?: zitadel_object_v3alpha_object_pb.Owner.AsObject,
  }
}

export class SearchQuery extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): SearchQuery;

  getLimit(): number;
  setLimit(value: number): SearchQuery;

  getDesc(): boolean;
  setDesc(value: boolean): SearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    offset: number,
    limit: number,
    desc: boolean,
  }
}

export class ListDetails extends jspb.Message {
  getAppliedLimit(): number;
  setAppliedLimit(value: number): ListDetails;

  getTotalResult(): number;
  setTotalResult(value: number): ListDetails;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ListDetails;
  hasTimestamp(): boolean;
  clearTimestamp(): ListDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ListDetails): ListDetails.AsObject;
  static serializeBinaryToWriter(message: ListDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDetails;
  static deserializeBinaryFromReader(message: ListDetails, reader: jspb.BinaryReader): ListDetails;
}

export namespace ListDetails {
  export type AsObject = {
    appliedLimit: number,
    totalResult: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum TextFilterMethod { 
  TEXT_FILTER_METHOD_EQUALS = 0,
  TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE = 1,
  TEXT_FILTER_METHOD_STARTS_WITH = 2,
  TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE = 3,
  TEXT_FILTER_METHOD_CONTAINS = 4,
}
