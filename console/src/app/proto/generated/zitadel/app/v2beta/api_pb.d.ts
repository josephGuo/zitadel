import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class APIConfig extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): APIConfig;

  getAuthMethodType(): APIAuthMethodType;
  setAuthMethodType(value: APIAuthMethodType): APIConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIConfig.AsObject;
  static toObject(includeInstance: boolean, msg: APIConfig): APIConfig.AsObject;
  static serializeBinaryToWriter(message: APIConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIConfig;
  static deserializeBinaryFromReader(message: APIConfig, reader: jspb.BinaryReader): APIConfig;
}

export namespace APIConfig {
  export type AsObject = {
    clientId: string,
    authMethodType: APIAuthMethodType,
  }
}

export enum APIAuthMethodType { 
  API_AUTH_METHOD_TYPE_BASIC = 0,
  API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
}
