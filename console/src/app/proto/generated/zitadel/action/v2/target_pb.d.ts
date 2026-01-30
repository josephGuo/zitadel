import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Target extends jspb.Message {
  getId(): string;
  setId(value: string): Target;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Target;
  hasCreationDate(): boolean;
  clearCreationDate(): Target;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Target;
  hasChangeDate(): boolean;
  clearChangeDate(): Target;

  getName(): string;
  setName(value: string): Target;

  getRestWebhook(): RESTWebhook | undefined;
  setRestWebhook(value?: RESTWebhook): Target;
  hasRestWebhook(): boolean;
  clearRestWebhook(): Target;

  getRestCall(): RESTCall | undefined;
  setRestCall(value?: RESTCall): Target;
  hasRestCall(): boolean;
  clearRestCall(): Target;

  getRestAsync(): RESTAsync | undefined;
  setRestAsync(value?: RESTAsync): Target;
  hasRestAsync(): boolean;
  clearRestAsync(): Target;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): Target;
  hasTimeout(): boolean;
  clearTimeout(): Target;

  getEndpoint(): string;
  setEndpoint(value: string): Target;

  getSigningKey(): string;
  setSigningKey(value: string): Target;

  getPayloadType(): PayloadType;
  setPayloadType(value: PayloadType): Target;

  getTargetTypeCase(): Target.TargetTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    restWebhook?: RESTWebhook.AsObject,
    restCall?: RESTCall.AsObject,
    restAsync?: RESTAsync.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    endpoint: string,
    signingKey: string,
    payloadType: PayloadType,
  }

  export enum TargetTypeCase { 
    TARGET_TYPE_NOT_SET = 0,
    REST_WEBHOOK = 5,
    REST_CALL = 6,
    REST_ASYNC = 7,
  }
}

export class RESTWebhook extends jspb.Message {
  getInterruptOnError(): boolean;
  setInterruptOnError(value: boolean): RESTWebhook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RESTWebhook.AsObject;
  static toObject(includeInstance: boolean, msg: RESTWebhook): RESTWebhook.AsObject;
  static serializeBinaryToWriter(message: RESTWebhook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RESTWebhook;
  static deserializeBinaryFromReader(message: RESTWebhook, reader: jspb.BinaryReader): RESTWebhook;
}

export namespace RESTWebhook {
  export type AsObject = {
    interruptOnError: boolean,
  }
}

export class RESTCall extends jspb.Message {
  getInterruptOnError(): boolean;
  setInterruptOnError(value: boolean): RESTCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RESTCall.AsObject;
  static toObject(includeInstance: boolean, msg: RESTCall): RESTCall.AsObject;
  static serializeBinaryToWriter(message: RESTCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RESTCall;
  static deserializeBinaryFromReader(message: RESTCall, reader: jspb.BinaryReader): RESTCall;
}

export namespace RESTCall {
  export type AsObject = {
    interruptOnError: boolean,
  }
}

export class RESTAsync extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RESTAsync.AsObject;
  static toObject(includeInstance: boolean, msg: RESTAsync): RESTAsync.AsObject;
  static serializeBinaryToWriter(message: RESTAsync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RESTAsync;
  static deserializeBinaryFromReader(message: RESTAsync, reader: jspb.BinaryReader): RESTAsync;
}

export namespace RESTAsync {
  export type AsObject = {
  }
}

export class PublicKey extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): PublicKey;

  getActive(): boolean;
  setActive(value: boolean): PublicKey;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): PublicKey;

  getFingerprint(): string;
  setFingerprint(value: string): PublicKey;

  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): PublicKey;
  hasExpirationDate(): boolean;
  clearExpirationDate(): PublicKey;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): PublicKey;
  hasCreationDate(): boolean;
  clearCreationDate(): PublicKey;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): PublicKey;
  hasChangeDate(): boolean;
  clearChangeDate(): PublicKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    keyId: string,
    active: boolean,
    publicKey: Uint8Array | string,
    fingerprint: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum PayloadType { 
  PAYLOAD_TYPE_UNSPECIFIED = 0,
  PAYLOAD_TYPE_JSON = 1,
  PAYLOAD_TYPE_JWT = 2,
  PAYLOAD_TYPE_JWE = 3,
}
