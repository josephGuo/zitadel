import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../../protoc-gen-openapiv2/options/annotations_pb'; // proto import: "protoc-gen-openapiv2/options/annotations.proto"


export class Event extends jspb.Message {
  getAdd(): AddedEvent | undefined;
  setAdd(value?: AddedEvent): Event;
  hasAdd(): boolean;
  clearAdd(): Event;

  getChange(): ChangedEvent | undefined;
  setChange(value?: ChangedEvent): Event;
  hasChange(): boolean;
  clearChange(): Event;

  getRemove(): RemovedEvent | undefined;
  setRemove(value?: RemovedEvent): Event;
  hasRemove(): boolean;
  clearRemove(): Event;

  getEventCase(): Event.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    add?: AddedEvent.AsObject,
    change?: ChangedEvent.AsObject,
    remove?: RemovedEvent.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    ADD = 1,
    CHANGE = 2,
    REMOVE = 3,
  }
}

export class AddedEvent extends jspb.Message {
  getProjectionSleep(): google_protobuf_duration_pb.Duration | undefined;
  setProjectionSleep(value?: google_protobuf_duration_pb.Duration): AddedEvent;
  hasProjectionSleep(): boolean;
  clearProjectionSleep(): AddedEvent;

  getBlob(): string;
  setBlob(value: string): AddedEvent;
  hasBlob(): boolean;
  clearBlob(): AddedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AddedEvent): AddedEvent.AsObject;
  static serializeBinaryToWriter(message: AddedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddedEvent;
  static deserializeBinaryFromReader(message: AddedEvent, reader: jspb.BinaryReader): AddedEvent;
}

export namespace AddedEvent {
  export type AsObject = {
    projectionSleep?: google_protobuf_duration_pb.Duration.AsObject,
    blob?: string,
  }

  export enum BlobCase { 
    _BLOB_NOT_SET = 0,
    BLOB = 2,
  }
}

export class ChangedEvent extends jspb.Message {
  getProjectionSleep(): google_protobuf_duration_pb.Duration | undefined;
  setProjectionSleep(value?: google_protobuf_duration_pb.Duration): ChangedEvent;
  hasProjectionSleep(): boolean;
  clearProjectionSleep(): ChangedEvent;

  getBlob(): string;
  setBlob(value: string): ChangedEvent;
  hasBlob(): boolean;
  clearBlob(): ChangedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ChangedEvent): ChangedEvent.AsObject;
  static serializeBinaryToWriter(message: ChangedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangedEvent;
  static deserializeBinaryFromReader(message: ChangedEvent, reader: jspb.BinaryReader): ChangedEvent;
}

export namespace ChangedEvent {
  export type AsObject = {
    projectionSleep?: google_protobuf_duration_pb.Duration.AsObject,
    blob?: string,
  }

  export enum BlobCase { 
    _BLOB_NOT_SET = 0,
    BLOB = 2,
  }
}

export class RemovedEvent extends jspb.Message {
  getProjectionSleep(): google_protobuf_duration_pb.Duration | undefined;
  setProjectionSleep(value?: google_protobuf_duration_pb.Duration): RemovedEvent;
  hasProjectionSleep(): boolean;
  clearProjectionSleep(): RemovedEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RemovedEvent): RemovedEvent.AsObject;
  static serializeBinaryToWriter(message: RemovedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovedEvent;
  static deserializeBinaryFromReader(message: RemovedEvent, reader: jspb.BinaryReader): RemovedEvent;
}

export namespace RemovedEvent {
  export type AsObject = {
    projectionSleep?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

