import * as jspb from 'google-protobuf'



export class ErrorDetail extends jspb.Message {
  getId(): string;
  setId(value: string): ErrorDetail;

  getMessage(): string;
  setMessage(value: string): ErrorDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetail): ErrorDetail.AsObject;
  static serializeBinaryToWriter(message: ErrorDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetail;
  static deserializeBinaryFromReader(message: ErrorDetail, reader: jspb.BinaryReader): ErrorDetail;
}

export namespace ErrorDetail {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class CredentialsCheckError extends jspb.Message {
  getId(): string;
  setId(value: string): CredentialsCheckError;

  getMessage(): string;
  setMessage(value: string): CredentialsCheckError;

  getFailedAttempts(): number;
  setFailedAttempts(value: number): CredentialsCheckError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredentialsCheckError.AsObject;
  static toObject(includeInstance: boolean, msg: CredentialsCheckError): CredentialsCheckError.AsObject;
  static serializeBinaryToWriter(message: CredentialsCheckError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredentialsCheckError;
  static deserializeBinaryFromReader(message: CredentialsCheckError, reader: jspb.BinaryReader): CredentialsCheckError;
}

export namespace CredentialsCheckError {
  export type AsObject = {
    id: string,
    message: string,
    failedAttempts: number,
  }
}

export class LocalizedMessage extends jspb.Message {
  getKey(): string;
  setKey(value: string): LocalizedMessage;

  getLocalizedMessage(): string;
  setLocalizedMessage(value: string): LocalizedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizedMessage): LocalizedMessage.AsObject;
  static serializeBinaryToWriter(message: LocalizedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizedMessage;
  static deserializeBinaryFromReader(message: LocalizedMessage, reader: jspb.BinaryReader): LocalizedMessage;
}

export namespace LocalizedMessage {
  export type AsObject = {
    key: string,
    localizedMessage: string,
  }
}

