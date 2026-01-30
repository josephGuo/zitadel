import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as zitadel_analytics_v2beta_telemetry_pb from '../../../zitadel/analytics/v2beta/telemetry_pb'; // proto import: "zitadel/analytics/v2beta/telemetry.proto"


export class ReportBaseInformationRequest extends jspb.Message {
  getSystemId(): string;
  setSystemId(value: string): ReportBaseInformationRequest;

  getVersion(): string;
  setVersion(value: string): ReportBaseInformationRequest;

  getInstancesList(): Array<zitadel_analytics_v2beta_telemetry_pb.InstanceInformation>;
  setInstancesList(value: Array<zitadel_analytics_v2beta_telemetry_pb.InstanceInformation>): ReportBaseInformationRequest;
  clearInstancesList(): ReportBaseInformationRequest;
  addInstances(value?: zitadel_analytics_v2beta_telemetry_pb.InstanceInformation, index?: number): zitadel_analytics_v2beta_telemetry_pb.InstanceInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportBaseInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportBaseInformationRequest): ReportBaseInformationRequest.AsObject;
  static serializeBinaryToWriter(message: ReportBaseInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportBaseInformationRequest;
  static deserializeBinaryFromReader(message: ReportBaseInformationRequest, reader: jspb.BinaryReader): ReportBaseInformationRequest;
}

export namespace ReportBaseInformationRequest {
  export type AsObject = {
    systemId: string,
    version: string,
    instancesList: Array<zitadel_analytics_v2beta_telemetry_pb.InstanceInformation.AsObject>,
  }
}

export class ReportBaseInformationResponse extends jspb.Message {
  getReportId(): string;
  setReportId(value: string): ReportBaseInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportBaseInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportBaseInformationResponse): ReportBaseInformationResponse.AsObject;
  static serializeBinaryToWriter(message: ReportBaseInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportBaseInformationResponse;
  static deserializeBinaryFromReader(message: ReportBaseInformationResponse, reader: jspb.BinaryReader): ReportBaseInformationResponse;
}

export namespace ReportBaseInformationResponse {
  export type AsObject = {
    reportId: string,
  }
}

export class ReportResourceCountsRequest extends jspb.Message {
  getSystemId(): string;
  setSystemId(value: string): ReportResourceCountsRequest;

  getReportId(): string;
  setReportId(value: string): ReportResourceCountsRequest;
  hasReportId(): boolean;
  clearReportId(): ReportResourceCountsRequest;

  getResourceCountsList(): Array<zitadel_analytics_v2beta_telemetry_pb.ResourceCount>;
  setResourceCountsList(value: Array<zitadel_analytics_v2beta_telemetry_pb.ResourceCount>): ReportResourceCountsRequest;
  clearResourceCountsList(): ReportResourceCountsRequest;
  addResourceCounts(value?: zitadel_analytics_v2beta_telemetry_pb.ResourceCount, index?: number): zitadel_analytics_v2beta_telemetry_pb.ResourceCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResourceCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResourceCountsRequest): ReportResourceCountsRequest.AsObject;
  static serializeBinaryToWriter(message: ReportResourceCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResourceCountsRequest;
  static deserializeBinaryFromReader(message: ReportResourceCountsRequest, reader: jspb.BinaryReader): ReportResourceCountsRequest;
}

export namespace ReportResourceCountsRequest {
  export type AsObject = {
    systemId: string,
    reportId?: string,
    resourceCountsList: Array<zitadel_analytics_v2beta_telemetry_pb.ResourceCount.AsObject>,
  }

  export enum ReportIdCase { 
    _REPORT_ID_NOT_SET = 0,
    REPORT_ID = 2,
  }
}

export class ReportResourceCountsResponse extends jspb.Message {
  getReportId(): string;
  setReportId(value: string): ReportResourceCountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResourceCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResourceCountsResponse): ReportResourceCountsResponse.AsObject;
  static serializeBinaryToWriter(message: ReportResourceCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResourceCountsResponse;
  static deserializeBinaryFromReader(message: ReportResourceCountsResponse, reader: jspb.BinaryReader): ReportResourceCountsResponse;
}

export namespace ReportResourceCountsResponse {
  export type AsObject = {
    reportId: string,
  }
}

