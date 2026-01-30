import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"
import * as validate_validate_pb from '../../../validate/validate_pb'; // proto import: "validate/validate.proto"


export class WebKey extends jspb.Message {
  getId(): string;
  setId(value: string): WebKey;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): WebKey;
  hasCreationDate(): boolean;
  clearCreationDate(): WebKey;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): WebKey;
  hasChangeDate(): boolean;
  clearChangeDate(): WebKey;

  getState(): State;
  setState(value: State): WebKey;

  getRsa(): RSA | undefined;
  setRsa(value?: RSA): WebKey;
  hasRsa(): boolean;
  clearRsa(): WebKey;

  getEcdsa(): ECDSA | undefined;
  setEcdsa(value?: ECDSA): WebKey;
  hasEcdsa(): boolean;
  clearEcdsa(): WebKey;

  getEd25519(): ED25519 | undefined;
  setEd25519(value?: ED25519): WebKey;
  hasEd25519(): boolean;
  clearEd25519(): WebKey;

  getKeyCase(): WebKey.KeyCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebKey.AsObject;
  static toObject(includeInstance: boolean, msg: WebKey): WebKey.AsObject;
  static serializeBinaryToWriter(message: WebKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebKey;
  static deserializeBinaryFromReader(message: WebKey, reader: jspb.BinaryReader): WebKey;
}

export namespace WebKey {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: State,
    rsa?: RSA.AsObject,
    ecdsa?: ECDSA.AsObject,
    ed25519?: ED25519.AsObject,
  }

  export enum KeyCase { 
    KEY_NOT_SET = 0,
    RSA = 5,
    ECDSA = 6,
    ED25519 = 7,
  }
}

export class RSA extends jspb.Message {
  getBits(): RSABits;
  setBits(value: RSABits): RSA;

  getHasher(): RSAHasher;
  setHasher(value: RSAHasher): RSA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RSA.AsObject;
  static toObject(includeInstance: boolean, msg: RSA): RSA.AsObject;
  static serializeBinaryToWriter(message: RSA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RSA;
  static deserializeBinaryFromReader(message: RSA, reader: jspb.BinaryReader): RSA;
}

export namespace RSA {
  export type AsObject = {
    bits: RSABits,
    hasher: RSAHasher,
  }
}

export class ECDSA extends jspb.Message {
  getCurve(): ECDSACurve;
  setCurve(value: ECDSACurve): ECDSA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ECDSA.AsObject;
  static toObject(includeInstance: boolean, msg: ECDSA): ECDSA.AsObject;
  static serializeBinaryToWriter(message: ECDSA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ECDSA;
  static deserializeBinaryFromReader(message: ECDSA, reader: jspb.BinaryReader): ECDSA;
}

export namespace ECDSA {
  export type AsObject = {
    curve: ECDSACurve,
  }
}

export class ED25519 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ED25519.AsObject;
  static toObject(includeInstance: boolean, msg: ED25519): ED25519.AsObject;
  static serializeBinaryToWriter(message: ED25519, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ED25519;
  static deserializeBinaryFromReader(message: ED25519, reader: jspb.BinaryReader): ED25519;
}

export namespace ED25519 {
  export type AsObject = {
  }
}

export enum State { 
  STATE_UNSPECIFIED = 0,
  STATE_INITIAL = 1,
  STATE_ACTIVE = 2,
  STATE_INACTIVE = 3,
  STATE_REMOVED = 4,
}
export enum RSABits { 
  RSA_BITS_UNSPECIFIED = 0,
  RSA_BITS_2048 = 1,
  RSA_BITS_3072 = 2,
  RSA_BITS_4096 = 3,
}
export enum RSAHasher { 
  RSA_HASHER_UNSPECIFIED = 0,
  RSA_HASHER_SHA256 = 1,
  RSA_HASHER_SHA384 = 2,
  RSA_HASHER_SHA512 = 3,
}
export enum ECDSACurve { 
  ECDSA_CURVE_UNSPECIFIED = 0,
  ECDSA_CURVE_P256 = 1,
  ECDSA_CURVE_P384 = 2,
  ECDSA_CURVE_P512 = 3,
}
