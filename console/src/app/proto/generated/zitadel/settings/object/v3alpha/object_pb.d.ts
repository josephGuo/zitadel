import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as zitadel_object_v3alpha_object_pb from '../../../../zitadel/object/v3alpha/object_pb'; // proto import: "zitadel/object/v3alpha/object.proto"


export class Details extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): Details;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Details;
  hasChangeDate(): boolean;
  clearChangeDate(): Details;

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
    sequence: number,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    owner?: zitadel_object_v3alpha_object_pb.Owner.AsObject,
  }
}

