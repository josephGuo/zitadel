import * as jspb from 'google-protobuf'

import * as zitadel_app_v2beta_login_pb from '../../../zitadel/app/v2beta/login_pb'; // proto import: "zitadel/app/v2beta/login.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class SAMLConfig extends jspb.Message {
  getMetadataXml(): Uint8Array | string;
  getMetadataXml_asU8(): Uint8Array;
  getMetadataXml_asB64(): string;
  setMetadataXml(value: Uint8Array | string): SAMLConfig;

  getMetadataUrl(): string;
  setMetadataUrl(value: string): SAMLConfig;

  getLoginVersion(): zitadel_app_v2beta_login_pb.LoginVersion | undefined;
  setLoginVersion(value?: zitadel_app_v2beta_login_pb.LoginVersion): SAMLConfig;
  hasLoginVersion(): boolean;
  clearLoginVersion(): SAMLConfig;

  getMetadataCase(): SAMLConfig.MetadataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SAMLConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SAMLConfig): SAMLConfig.AsObject;
  static serializeBinaryToWriter(message: SAMLConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SAMLConfig;
  static deserializeBinaryFromReader(message: SAMLConfig, reader: jspb.BinaryReader): SAMLConfig;
}

export namespace SAMLConfig {
  export type AsObject = {
    metadataXml: Uint8Array | string,
    metadataUrl: string,
    loginVersion?: zitadel_app_v2beta_login_pb.LoginVersion.AsObject,
  }

  export enum MetadataCase { 
    METADATA_NOT_SET = 0,
    METADATA_XML = 1,
    METADATA_URL = 2,
  }
}

