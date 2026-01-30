import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class APIConfiguration extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): APIConfiguration;

  getAuthMethodType(): APIAuthMethodType;
  setAuthMethodType(value: APIAuthMethodType): APIConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: APIConfiguration): APIConfiguration.AsObject;
  static serializeBinaryToWriter(message: APIConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIConfiguration;
  static deserializeBinaryFromReader(message: APIConfiguration, reader: jspb.BinaryReader): APIConfiguration;
}

export namespace APIConfiguration {
  export type AsObject = {
    clientId: string,
    authMethodType: APIAuthMethodType,
  }
}

export enum APIAuthMethodType { 
  API_AUTH_METHOD_TYPE_BASIC = 0,
  API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
}
