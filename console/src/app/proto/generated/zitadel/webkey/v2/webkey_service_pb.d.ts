import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb'; // proto import: "google/api/field_behavior.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb'; // proto import: "zitadel/protoc_gen_zitadel/v2/options.proto"
import * as zitadel_webkey_v2_key_pb from '../../../zitadel/webkey/v2/key_pb'; // proto import: "zitadel/webkey/v2/key.proto"


export class CreateWebKeyRequest extends jspb.Message {
  getRsa(): zitadel_webkey_v2_key_pb.RSA | undefined;
  setRsa(value?: zitadel_webkey_v2_key_pb.RSA): CreateWebKeyRequest;
  hasRsa(): boolean;
  clearRsa(): CreateWebKeyRequest;

  getEcdsa(): zitadel_webkey_v2_key_pb.ECDSA | undefined;
  setEcdsa(value?: zitadel_webkey_v2_key_pb.ECDSA): CreateWebKeyRequest;
  hasEcdsa(): boolean;
  clearEcdsa(): CreateWebKeyRequest;

  getEd25519(): zitadel_webkey_v2_key_pb.ED25519 | undefined;
  setEd25519(value?: zitadel_webkey_v2_key_pb.ED25519): CreateWebKeyRequest;
  hasEd25519(): boolean;
  clearEd25519(): CreateWebKeyRequest;

  getKeyCase(): CreateWebKeyRequest.KeyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebKeyRequest): CreateWebKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebKeyRequest;
  static deserializeBinaryFromReader(message: CreateWebKeyRequest, reader: jspb.BinaryReader): CreateWebKeyRequest;
}

export namespace CreateWebKeyRequest {
  export type AsObject = {
    rsa?: zitadel_webkey_v2_key_pb.RSA.AsObject,
    ecdsa?: zitadel_webkey_v2_key_pb.ECDSA.AsObject,
    ed25519?: zitadel_webkey_v2_key_pb.ED25519.AsObject,
  }

  export enum KeyCase { 
    KEY_NOT_SET = 0,
    RSA = 1,
    ECDSA = 2,
    ED25519 = 3,
  }
}

export class CreateWebKeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebKeyResponse;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateWebKeyResponse;
  hasCreationDate(): boolean;
  clearCreationDate(): CreateWebKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebKeyResponse): CreateWebKeyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebKeyResponse;
  static deserializeBinaryFromReader(message: CreateWebKeyResponse, reader: jspb.BinaryReader): CreateWebKeyResponse;
}

export namespace CreateWebKeyResponse {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ActivateWebKeyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ActivateWebKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateWebKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateWebKeyRequest): ActivateWebKeyRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateWebKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateWebKeyRequest;
  static deserializeBinaryFromReader(message: ActivateWebKeyRequest, reader: jspb.BinaryReader): ActivateWebKeyRequest;
}

export namespace ActivateWebKeyRequest {
  export type AsObject = {
    id: string,
  }
}

export class ActivateWebKeyResponse extends jspb.Message {
  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): ActivateWebKeyResponse;
  hasChangeDate(): boolean;
  clearChangeDate(): ActivateWebKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateWebKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateWebKeyResponse): ActivateWebKeyResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateWebKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateWebKeyResponse;
  static deserializeBinaryFromReader(message: ActivateWebKeyResponse, reader: jspb.BinaryReader): ActivateWebKeyResponse;
}

export namespace ActivateWebKeyResponse {
  export type AsObject = {
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteWebKeyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebKeyRequest): DeleteWebKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebKeyRequest;
  static deserializeBinaryFromReader(message: DeleteWebKeyRequest, reader: jspb.BinaryReader): DeleteWebKeyRequest;
}

export namespace DeleteWebKeyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteWebKeyResponse extends jspb.Message {
  getDeletionDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletionDate(value?: google_protobuf_timestamp_pb.Timestamp): DeleteWebKeyResponse;
  hasDeletionDate(): boolean;
  clearDeletionDate(): DeleteWebKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebKeyResponse): DeleteWebKeyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebKeyResponse;
  static deserializeBinaryFromReader(message: DeleteWebKeyResponse, reader: jspb.BinaryReader): DeleteWebKeyResponse;
}

export namespace DeleteWebKeyResponse {
  export type AsObject = {
    deletionDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListWebKeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebKeysRequest): ListWebKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebKeysRequest;
  static deserializeBinaryFromReader(message: ListWebKeysRequest, reader: jspb.BinaryReader): ListWebKeysRequest;
}

export namespace ListWebKeysRequest {
  export type AsObject = {
  }
}

export class ListWebKeysResponse extends jspb.Message {
  getWebKeysList(): Array<zitadel_webkey_v2_key_pb.WebKey>;
  setWebKeysList(value: Array<zitadel_webkey_v2_key_pb.WebKey>): ListWebKeysResponse;
  clearWebKeysList(): ListWebKeysResponse;
  addWebKeys(value?: zitadel_webkey_v2_key_pb.WebKey, index?: number): zitadel_webkey_v2_key_pb.WebKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebKeysResponse): ListWebKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebKeysResponse;
  static deserializeBinaryFromReader(message: ListWebKeysResponse, reader: jspb.BinaryReader): ListWebKeysResponse;
}

export namespace ListWebKeysResponse {
  export type AsObject = {
    webKeysList: Array<zitadel_webkey_v2_key_pb.WebKey.AsObject>,
  }
}

