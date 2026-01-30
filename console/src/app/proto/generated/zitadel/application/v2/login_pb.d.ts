import * as jspb from 'google-protobuf'



export class LoginVersion extends jspb.Message {
  getLoginV1(): LoginV1 | undefined;
  setLoginV1(value?: LoginV1): LoginVersion;
  hasLoginV1(): boolean;
  clearLoginV1(): LoginVersion;

  getLoginV2(): LoginV2 | undefined;
  setLoginV2(value?: LoginV2): LoginVersion;
  hasLoginV2(): boolean;
  clearLoginV2(): LoginVersion;

  getVersionCase(): LoginVersion.VersionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginVersion.AsObject;
  static toObject(includeInstance: boolean, msg: LoginVersion): LoginVersion.AsObject;
  static serializeBinaryToWriter(message: LoginVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginVersion;
  static deserializeBinaryFromReader(message: LoginVersion, reader: jspb.BinaryReader): LoginVersion;
}

export namespace LoginVersion {
  export type AsObject = {
    loginV1?: LoginV1.AsObject,
    loginV2?: LoginV2.AsObject,
  }

  export enum VersionCase { 
    VERSION_NOT_SET = 0,
    LOGIN_V1 = 1,
    LOGIN_V2 = 2,
  }
}

export class LoginV1 extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginV1.AsObject;
  static toObject(includeInstance: boolean, msg: LoginV1): LoginV1.AsObject;
  static serializeBinaryToWriter(message: LoginV1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginV1;
  static deserializeBinaryFromReader(message: LoginV1, reader: jspb.BinaryReader): LoginV1;
}

export namespace LoginV1 {
  export type AsObject = {
  }
}

export class LoginV2 extends jspb.Message {
  getBaseUri(): string;
  setBaseUri(value: string): LoginV2;
  hasBaseUri(): boolean;
  clearBaseUri(): LoginV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginV2.AsObject;
  static toObject(includeInstance: boolean, msg: LoginV2): LoginV2.AsObject;
  static serializeBinaryToWriter(message: LoginV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginV2;
  static deserializeBinaryFromReader(message: LoginV2, reader: jspb.BinaryReader): LoginV2;
}

export namespace LoginV2 {
  export type AsObject = {
    baseUri?: string,
  }

  export enum BaseUriCase { 
    _BASE_URI_NOT_SET = 0,
    BASE_URI = 1,
  }
}

