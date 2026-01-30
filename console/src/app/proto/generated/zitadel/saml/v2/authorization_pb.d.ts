import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class SAMLRequest extends jspb.Message {
  getId(): string;
  setId(value: string): SAMLRequest;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): SAMLRequest;
  hasCreationDate(): boolean;
  clearCreationDate(): SAMLRequest;

  getIssuer(): string;
  setIssuer(value: string): SAMLRequest;

  getAssertionConsumerService(): string;
  setAssertionConsumerService(value: string): SAMLRequest;

  getRelayState(): string;
  setRelayState(value: string): SAMLRequest;

  getBinding(): string;
  setBinding(value: string): SAMLRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SAMLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SAMLRequest): SAMLRequest.AsObject;
  static serializeBinaryToWriter(message: SAMLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SAMLRequest;
  static deserializeBinaryFromReader(message: SAMLRequest, reader: jspb.BinaryReader): SAMLRequest;
}

export namespace SAMLRequest {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issuer: string,
    assertionConsumerService: string,
    relayState: string,
    binding: string,
  }
}

export class AuthorizationError extends jspb.Message {
  getError(): ErrorReason;
  setError(value: ErrorReason): AuthorizationError;

  getErrorDescription(): string;
  setErrorDescription(value: string): AuthorizationError;
  hasErrorDescription(): boolean;
  clearErrorDescription(): AuthorizationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationError.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationError): AuthorizationError.AsObject;
  static serializeBinaryToWriter(message: AuthorizationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationError;
  static deserializeBinaryFromReader(message: AuthorizationError, reader: jspb.BinaryReader): AuthorizationError;
}

export namespace AuthorizationError {
  export type AsObject = {
    error: ErrorReason,
    errorDescription?: string,
  }

  export enum ErrorDescriptionCase { 
    _ERROR_DESCRIPTION_NOT_SET = 0,
    ERROR_DESCRIPTION = 2,
  }
}

export enum ErrorReason { 
  ERROR_REASON_UNSPECIFIED = 0,
  ERROR_REASON_VERSION_MISSMATCH = 1,
  ERROR_REASON_AUTH_N_FAILED = 2,
  ERROR_REASON_INVALID_ATTR_NAME_OR_VALUE = 3,
  ERROR_REASON_INVALID_NAMEID_POLICY = 4,
  ERROR_REASON_REQUEST_DENIED = 5,
  ERROR_REASON_REQUEST_UNSUPPORTED = 6,
  ERROR_REASON_UNSUPPORTED_BINDING = 7,
}
