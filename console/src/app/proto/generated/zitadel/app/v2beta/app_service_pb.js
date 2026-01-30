// source: zitadel/app/v2beta/app_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var zitadel_app_v2beta_login_pb = require('../../../zitadel/app/v2beta/login_pb.js');
goog.object.extend(proto, zitadel_app_v2beta_login_pb);
var zitadel_app_v2beta_oidc_pb = require('../../../zitadel/app/v2beta/oidc_pb.js');
goog.object.extend(proto, zitadel_app_v2beta_oidc_pb);
var zitadel_app_v2beta_api_pb = require('../../../zitadel/app/v2beta/api_pb.js');
goog.object.extend(proto, zitadel_app_v2beta_api_pb);
var zitadel_app_v2beta_app_pb = require('../../../zitadel/app/v2beta/app_pb.js');
goog.object.extend(proto, zitadel_app_v2beta_app_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateAPIApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateAPIApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationRequest.CreationRequestTypeCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateApplicationResponse.CreationResponseTypeCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateOIDCApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateOIDCApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateSAMLApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.MetadataCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.CreateSAMLApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeactivateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeactivateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeleteApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeleteApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeleteApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.DeleteApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.GetApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.GetApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.GetApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.GetApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ListApplicationKeysRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ListApplicationKeysRequest.ResourceIdCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ListApplicationKeysResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ListApplicationsRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ListApplicationsResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ReactivateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.ReactivateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.RegenerateClientSecretRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.RegenerateClientSecretRequest.AppTypeCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.RegenerateClientSecretResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateApplicationRequest.UpdateRequestTypeCase', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.MetadataCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.CreateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateApplicationRequest.displayName = 'proto.zitadel.app.v2beta.CreateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.CreateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateApplicationResponse.displayName = 'proto.zitadel.app.v2beta.CreateApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateOIDCApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.displayName = 'proto.zitadel.app.v2beta.CreateOIDCApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateOIDCApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.displayName = 'proto.zitadel.app.v2beta.CreateOIDCApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.CreateSAMLApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.displayName = 'proto.zitadel.app.v2beta.CreateSAMLApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateSAMLApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.displayName = 'proto.zitadel.app.v2beta.CreateSAMLApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateAPIApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateAPIApplicationRequest.displayName = 'proto.zitadel.app.v2beta.CreateAPIApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateAPIApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateAPIApplicationResponse.displayName = 'proto.zitadel.app.v2beta.CreateAPIApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.UpdateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.UpdateApplicationRequest.displayName = 'proto.zitadel.app.v2beta.UpdateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.UpdateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.UpdateApplicationResponse.displayName = 'proto.zitadel.app.v2beta.UpdateApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.displayName = 'proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.displayName = 'proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.displayName = 'proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.GetApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.GetApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.GetApplicationRequest.displayName = 'proto.zitadel.app.v2beta.GetApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.GetApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.GetApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.GetApplicationResponse.displayName = 'proto.zitadel.app.v2beta.GetApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeleteApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeleteApplicationRequest.displayName = 'proto.zitadel.app.v2beta.DeleteApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeleteApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeleteApplicationResponse.displayName = 'proto.zitadel.app.v2beta.DeleteApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeactivateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeactivateApplicationRequest.displayName = 'proto.zitadel.app.v2beta.DeactivateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeactivateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeactivateApplicationResponse.displayName = 'proto.zitadel.app.v2beta.DeactivateApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.ReactivateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ReactivateApplicationRequest.displayName = 'proto.zitadel.app.v2beta.ReactivateApplicationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.ReactivateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ReactivateApplicationResponse.displayName = 'proto.zitadel.app.v2beta.ReactivateApplicationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.RegenerateClientSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.RegenerateClientSecretRequest.displayName = 'proto.zitadel.app.v2beta.RegenerateClientSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.RegenerateClientSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.RegenerateClientSecretResponse.displayName = 'proto.zitadel.app.v2beta.RegenerateClientSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ListApplicationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.ListApplicationsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.ListApplicationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ListApplicationsRequest.displayName = 'proto.zitadel.app.v2beta.ListApplicationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ListApplicationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.ListApplicationsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.ListApplicationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ListApplicationsResponse.displayName = 'proto.zitadel.app.v2beta.ListApplicationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateApplicationKeyRequest.displayName = 'proto.zitadel.app.v2beta.CreateApplicationKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.CreateApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.CreateApplicationKeyResponse.displayName = 'proto.zitadel.app.v2beta.CreateApplicationKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeleteApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.displayName = 'proto.zitadel.app.v2beta.DeleteApplicationKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.DeleteApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.displayName = 'proto.zitadel.app.v2beta.DeleteApplicationKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.GetApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.GetApplicationKeyRequest.displayName = 'proto.zitadel.app.v2beta.GetApplicationKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.app.v2beta.GetApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.GetApplicationKeyResponse.displayName = 'proto.zitadel.app.v2beta.GetApplicationKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.app.v2beta.ListApplicationKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ListApplicationKeysRequest.displayName = 'proto.zitadel.app.v2beta.ListApplicationKeysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.app.v2beta.ListApplicationKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.app.v2beta.ListApplicationKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.app.v2beta.ListApplicationKeysResponse.displayName = 'proto.zitadel.app.v2beta.ListApplicationKeysResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_ = [[4,5,6]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.CreationRequestTypeCase = {
  CREATION_REQUEST_TYPE_NOT_SET: 0,
  OIDC_REQUEST: 4,
  SAML_REQUEST: 5,
  API_REQUEST: 6
};

/**
 * @return {proto.zitadel.app.v2beta.CreateApplicationRequest.CreationRequestTypeCase}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getCreationRequestTypeCase = function() {
  return /** @type {proto.zitadel.app.v2beta.CreateApplicationRequest.CreationRequestTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
oidcRequest: (f = msg.getOidcRequest()) && proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.toObject(includeInstance, f),
samlRequest: (f = msg.getSamlRequest()) && proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.toObject(includeInstance, f),
apiRequest: (f = msg.getApiRequest()) && proto.zitadel.app.v2beta.CreateAPIApplicationRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateApplicationRequest;
  return proto.zitadel.app.v2beta.CreateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.zitadel.app.v2beta.CreateOIDCApplicationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.deserializeBinaryFromReader);
      msg.setOidcRequest(value);
      break;
    case 5:
      var value = new proto.zitadel.app.v2beta.CreateSAMLApplicationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.deserializeBinaryFromReader);
      msg.setSamlRequest(value);
      break;
    case 6:
      var value = new proto.zitadel.app.v2beta.CreateAPIApplicationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateAPIApplicationRequest.deserializeBinaryFromReader);
      msg.setApiRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOidcRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSamlRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getApiRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.app.v2beta.CreateAPIApplicationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CreateOIDCApplicationRequest oidc_request = 4;
 * @return {?proto.zitadel.app.v2beta.CreateOIDCApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getOidcRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateOIDCApplicationRequest, 4));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateOIDCApplicationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setOidcRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.clearOidcRequest = function() {
  return this.setOidcRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.hasOidcRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CreateSAMLApplicationRequest saml_request = 5;
 * @return {?proto.zitadel.app.v2beta.CreateSAMLApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getSamlRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest, 5));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateSAMLApplicationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setSamlRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.clearSamlRequest = function() {
  return this.setSamlRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.hasSamlRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CreateAPIApplicationRequest api_request = 6;
 * @return {?proto.zitadel.app.v2beta.CreateAPIApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.getApiRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateAPIApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateAPIApplicationRequest, 6));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateAPIApplicationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.setApiRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.app.v2beta.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.clearApiRequest = function() {
  return this.setApiRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationRequest.prototype.hasApiRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.CreationResponseTypeCase = {
  CREATION_RESPONSE_TYPE_NOT_SET: 0,
  OIDC_RESPONSE: 3,
  SAML_RESPONSE: 4,
  API_RESPONSE: 5
};

/**
 * @return {proto.zitadel.app.v2beta.CreateApplicationResponse.CreationResponseTypeCase}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getCreationResponseTypeCase = function() {
  return /** @type {proto.zitadel.app.v2beta.CreateApplicationResponse.CreationResponseTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
oidcResponse: (f = msg.getOidcResponse()) && proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.toObject(includeInstance, f),
samlResponse: (f = msg.getSamlResponse()) && proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.toObject(includeInstance, f),
apiResponse: (f = msg.getApiResponse()) && proto.zitadel.app.v2beta.CreateAPIApplicationResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateApplicationResponse;
  return proto.zitadel.app.v2beta.CreateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = new proto.zitadel.app.v2beta.CreateOIDCApplicationResponse;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.deserializeBinaryFromReader);
      msg.setOidcResponse(value);
      break;
    case 4:
      var value = new proto.zitadel.app.v2beta.CreateSAMLApplicationResponse;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.deserializeBinaryFromReader);
      msg.setSamlResponse(value);
      break;
    case 5:
      var value = new proto.zitadel.app.v2beta.CreateAPIApplicationResponse;
      reader.readMessage(value,proto.zitadel.app.v2beta.CreateAPIApplicationResponse.deserializeBinaryFromReader);
      msg.setApiResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOidcResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.serializeBinaryToWriter
    );
  }
  f = message.getSamlResponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.serializeBinaryToWriter
    );
  }
  f = message.getApiResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.app.v2beta.CreateAPIApplicationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CreateOIDCApplicationResponse oidc_response = 3;
 * @return {?proto.zitadel.app.v2beta.CreateOIDCApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getOidcResponse = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateOIDCApplicationResponse, 3));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateOIDCApplicationResponse|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.setOidcResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.clearOidcResponse = function() {
  return this.setOidcResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.hasOidcResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CreateSAMLApplicationResponse saml_response = 4;
 * @return {?proto.zitadel.app.v2beta.CreateSAMLApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getSamlResponse = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateSAMLApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateSAMLApplicationResponse, 4));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateSAMLApplicationResponse|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.setSamlResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.clearSamlResponse = function() {
  return this.setSamlResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.hasSamlResponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CreateAPIApplicationResponse api_response = 5;
 * @return {?proto.zitadel.app.v2beta.CreateAPIApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.getApiResponse = function() {
  return /** @type{?proto.zitadel.app.v2beta.CreateAPIApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.CreateAPIApplicationResponse, 5));
};


/**
 * @param {?proto.zitadel.app.v2beta.CreateAPIApplicationResponse|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.setApiResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.app.v2beta.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.clearApiResponse = function() {
  return this.setApiResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationResponse.prototype.hasApiResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.repeatedFields_ = [1,2,3,6,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
responseTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
grantTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
appType: jspb.Message.getFieldWithDefault(msg, 4, 0),
authMethodType: jspb.Message.getFieldWithDefault(msg, 5, 0),
postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
version: jspb.Message.getFieldWithDefault(msg, 7, 0),
devMode: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
accessTokenType: jspb.Message.getFieldWithDefault(msg, 9, 0),
accessTokenRoleAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
idTokenRoleAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
idTokenUserinfoAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
clockSkew: (f = msg.getClockSkew()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
additionalOriginsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
skipNativeAppSuccessPage: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
backChannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 16, ""),
loginVersion: (f = msg.getLoginVersion()) && zitadel_app_v2beta_login_pb.LoginVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateOIDCApplicationRequest;
  return proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addResponseTypes(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrantTypes(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCAppType} */ (reader.readEnum());
      msg.setAppType(value);
      break;
    case 5:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCVersion} */ (reader.readEnum());
      msg.setVersion(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDevMode(value);
      break;
    case 9:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCTokenType} */ (reader.readEnum());
      msg.setAccessTokenType(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessTokenRoleAssertion(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIdTokenRoleAssertion(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIdTokenUserinfoAssertion(value);
      break;
    case 13:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setClockSkew(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addAdditionalOrigins(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipNativeAppSuccessPage(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackChannelLogoutUri(value);
      break;
    case 17:
      var value = new zitadel_app_v2beta_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_app_v2beta_login_pb.LoginVersion.deserializeBinaryFromReader);
      msg.setLoginVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getAppType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDevMode();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAccessTokenType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAccessTokenRoleAssertion();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIdTokenRoleAssertion();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getIdTokenUserinfoAssertion();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getClockSkew();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getSkipNativeAppSuccessPage();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getBackChannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getLoginVersion();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      zitadel_app_v2beta_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string redirect_uris = 1;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 2;
 * @return {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCResponseType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 3;
 * @return {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCGrantType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional OIDCAppType app_type = 4;
 * @return {!proto.zitadel.app.v2beta.OIDCAppType}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getAppType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCAppType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCAppType} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setAppType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional OIDCAuthMethodType auth_method_type = 5;
 * @return {!proto.zitadel.app.v2beta.OIDCAuthMethodType}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCAuthMethodType} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated string post_logout_redirect_uris = 6;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * optional OIDCVersion version = 7;
 * @return {!proto.zitadel.app.v2beta.OIDCVersion}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getVersion = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCVersion} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool dev_mode = 8;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getDevMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setDevMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional OIDCTokenType access_token_type = 9;
 * @return {!proto.zitadel.app.v2beta.OIDCTokenType}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getAccessTokenType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCTokenType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCTokenType} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setAccessTokenType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional bool access_token_role_assertion = 10;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getAccessTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setAccessTokenRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool id_token_role_assertion = 11;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getIdTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setIdTokenRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool id_token_userinfo_assertion = 12;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getIdTokenUserinfoAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setIdTokenUserinfoAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional google.protobuf.Duration clock_skew = 13;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getClockSkew = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 13));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setClockSkew = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearClockSkew = function() {
  return this.setClockSkew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.hasClockSkew = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string additional_origins = 14;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getAdditionalOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setAdditionalOriginsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.addAdditionalOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearAdditionalOriginsList = function() {
  return this.setAdditionalOriginsList([]);
};


/**
 * optional bool skip_native_app_success_page = 15;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getSkipNativeAppSuccessPage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setSkipNativeAppSuccessPage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string back_channel_logout_uri = 16;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getBackChannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setBackChannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional LoginVersion login_version = 17;
 * @return {?proto.zitadel.app.v2beta.LoginVersion}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.app.v2beta.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_app_v2beta_login_pb.LoginVersion, 17));
};


/**
 * @param {?proto.zitadel.app.v2beta.LoginVersion|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientSecret: jspb.Message.getFieldWithDefault(msg, 2, ""),
noneCompliant: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
complianceProblemsList: jspb.Message.toObjectList(msg.getComplianceProblemsList(),
    zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateOIDCApplicationResponse;
  return proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoneCompliant(value);
      break;
    case 4:
      var value = new zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage;
      reader.readMessage(value,zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage.deserializeBinaryFromReader);
      msg.addComplianceProblems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNoneCompliant();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getComplianceProblemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool none_compliant = 3;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.getNoneCompliant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.setNoneCompliant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated OIDCLocalizedMessage compliance_problems = 4;
 * @return {!Array<!proto.zitadel.app.v2beta.OIDCLocalizedMessage>}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.getComplianceProblemsList = function() {
  return /** @type{!Array<!proto.zitadel.app.v2beta.OIDCLocalizedMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_app_v2beta_oidc_pb.OIDCLocalizedMessage, 4));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.OIDCLocalizedMessage>} value
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.setComplianceProblemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCLocalizedMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.OIDCLocalizedMessage}
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.addComplianceProblems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.app.v2beta.OIDCLocalizedMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateOIDCApplicationResponse.prototype.clearComplianceProblemsList = function() {
  return this.setComplianceProblemsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.MetadataCase = {
  METADATA_NOT_SET: 0,
  METADATA_XML: 1,
  METADATA_URL: 2
};

/**
 * @return {proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.MetadataCase}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getMetadataCase = function() {
  return /** @type {proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
metadataXml: msg.getMetadataXml_asB64(),
metadataUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_app_v2beta_login_pb.LoginVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateSAMLApplicationRequest;
  return proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadataXml(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataUrl(value);
      break;
    case 3:
      var value = new zitadel_app_v2beta_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_app_v2beta_login_pb.LoginVersion.deserializeBinaryFromReader);
      msg.setLoginVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLoginVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_app_v2beta_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes metadata_xml = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getMetadataXml = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_xml = 1;
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getMetadataXml_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadataXml()));
};


/**
 * optional bytes metadata_xml = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getMetadataXml_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataXml()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.setMetadataXml = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.clearMetadataXml = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.hasMetadataXml = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string metadata_url = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getMetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.setMetadataUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.clearMetadataUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.hasMetadataUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoginVersion login_version = 3;
 * @return {?proto.zitadel.app.v2beta.LoginVersion}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.app.v2beta.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_app_v2beta_login_pb.LoginVersion, 3));
};


/**
 * @param {?proto.zitadel.app.v2beta.LoginVersion|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateSAMLApplicationResponse;
  return proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateSAMLApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateSAMLApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateSAMLApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateAPIApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
authMethodType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateAPIApplicationRequest;
  return proto.zitadel.app.v2beta.CreateAPIApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.app.v2beta.APIAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateAPIApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional APIAuthMethodType auth_method_type = 1;
 * @return {!proto.zitadel.app.v2beta.APIAuthMethodType}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.app.v2beta.APIAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.APIAuthMethodType} value
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.CreateAPIApplicationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateAPIApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateAPIApplicationResponse;
  return proto.zitadel.app.v2beta.CreateAPIApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateAPIApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateAPIApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.CreateAPIApplicationResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_ = [[4,5,6]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.UpdateRequestTypeCase = {
  UPDATE_REQUEST_TYPE_NOT_SET: 0,
  SAML_CONFIGURATION_REQUEST: 4,
  OIDC_CONFIGURATION_REQUEST: 5,
  API_CONFIGURATION_REQUEST: 6
};

/**
 * @return {proto.zitadel.app.v2beta.UpdateApplicationRequest.UpdateRequestTypeCase}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getUpdateRequestTypeCase = function() {
  return /** @type {proto.zitadel.app.v2beta.UpdateApplicationRequest.UpdateRequestTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.UpdateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
samlConfigurationRequest: (f = msg.getSamlConfigurationRequest()) && proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.toObject(includeInstance, f),
oidcConfigurationRequest: (f = msg.getOidcConfigurationRequest()) && proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.toObject(includeInstance, f),
apiConfigurationRequest: (f = msg.getApiConfigurationRequest()) && proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.UpdateApplicationRequest;
  return proto.zitadel.app.v2beta.UpdateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setSamlConfigurationRequest(value);
      break;
    case 5:
      var value = new proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setOidcConfigurationRequest(value);
      break;
    case 6:
      var value = new proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setApiConfigurationRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.UpdateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSamlConfigurationRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
  f = message.getOidcConfigurationRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
  f = message.getApiConfigurationRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional UpdateSAMLApplicationConfigurationRequest saml_configuration_request = 4;
 * @return {?proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getSamlConfigurationRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest, 4));
};


/**
 * @param {?proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setSamlConfigurationRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.clearSamlConfigurationRequest = function() {
  return this.setSamlConfigurationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.hasSamlConfigurationRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UpdateOIDCApplicationConfigurationRequest oidc_configuration_request = 5;
 * @return {?proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getOidcConfigurationRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest, 5));
};


/**
 * @param {?proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setOidcConfigurationRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.clearOidcConfigurationRequest = function() {
  return this.setOidcConfigurationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.hasOidcConfigurationRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UpdateAPIApplicationConfigurationRequest api_configuration_request = 6;
 * @return {?proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.getApiConfigurationRequest = function() {
  return /** @type{?proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest, 6));
};


/**
 * @param {?proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.setApiConfigurationRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.app.v2beta.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.clearApiConfigurationRequest = function() {
  return this.setApiConfigurationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateApplicationRequest.prototype.hasApiConfigurationRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.UpdateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationResponse}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.UpdateApplicationResponse;
  return proto.zitadel.app.v2beta.UpdateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationResponse}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.UpdateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.UpdateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateApplicationResponse.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.MetadataCase = {
  METADATA_NOT_SET: 0,
  METADATA_XML: 1,
  METADATA_URL: 2
};

/**
 * @return {proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.MetadataCase}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataCase = function() {
  return /** @type {proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
metadataXml: msg.getMetadataXml_asB64(),
metadataUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_app_v2beta_login_pb.LoginVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest;
  return proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadataXml(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataUrl(value);
      break;
    case 3:
      var value = new zitadel_app_v2beta_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_app_v2beta_login_pb.LoginVersion.deserializeBinaryFromReader);
      msg.setLoginVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLoginVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      zitadel_app_v2beta_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes metadata_xml = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_xml = 1;
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadataXml()));
};


/**
 * optional bytes metadata_xml = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataXml()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.setMetadataXml = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.clearMetadataXml = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.hasMetadataXml = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string metadata_url = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.setMetadataUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.clearMetadataUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.hasMetadataUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoginVersion login_version = 3;
 * @return {?proto.zitadel.app.v2beta.LoginVersion}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.app.v2beta.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_app_v2beta_login_pb.LoginVersion, 3));
};


/**
 * @param {?proto.zitadel.app.v2beta.LoginVersion|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateSAMLApplicationConfigurationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.repeatedFields_ = [1,2,3,6,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
responseTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
grantTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
appType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
authMethodType: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
version: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
devMode: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
accessTokenType: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
accessTokenRoleAssertion: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
idTokenRoleAssertion: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
idTokenUserinfoAssertion: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
clockSkew: (f = msg.getClockSkew()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
additionalOriginsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
skipNativeAppSuccessPage: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
backChannelLogoutUri: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_app_v2beta_login_pb.LoginVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest;
  return proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addResponseTypes(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrantTypes(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCAppType} */ (reader.readEnum());
      msg.setAppType(value);
      break;
    case 5:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCVersion} */ (reader.readEnum());
      msg.setVersion(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDevMode(value);
      break;
    case 9:
      var value = /** @type {!proto.zitadel.app.v2beta.OIDCTokenType} */ (reader.readEnum());
      msg.setAccessTokenType(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessTokenRoleAssertion(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIdTokenRoleAssertion(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIdTokenUserinfoAssertion(value);
      break;
    case 13:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setClockSkew(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addAdditionalOrigins(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipNativeAppSuccessPage(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackChannelLogoutUri(value);
      break;
    case 17:
      var value = new zitadel_app_v2beta_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_app_v2beta_login_pb.LoginVersion.deserializeBinaryFromReader);
      msg.setLoginVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.zitadel.app.v2beta.OIDCAppType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.zitadel.app.v2beta.OIDCAuthMethodType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = /** @type {!proto.zitadel.app.v2beta.OIDCVersion} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {!proto.zitadel.app.v2beta.OIDCTokenType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getClockSkew();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getLoginVersion();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      zitadel_app_v2beta_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string redirect_uris = 1;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 2;
 * @return {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.OIDCResponseType>} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCResponseType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 3;
 * @return {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.OIDCGrantType>} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCGrantType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional OIDCAppType app_type = 4;
 * @return {!proto.zitadel.app.v2beta.OIDCAppType}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getAppType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCAppType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCAppType} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setAppType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearAppType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasAppType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OIDCAuthMethodType auth_method_type = 5;
 * @return {!proto.zitadel.app.v2beta.OIDCAuthMethodType}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCAuthMethodType} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearAuthMethodType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasAuthMethodType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string post_logout_redirect_uris = 6;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * optional OIDCVersion version = 7;
 * @return {!proto.zitadel.app.v2beta.OIDCVersion}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getVersion = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCVersion} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool dev_mode = 8;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getDevMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setDevMode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearDevMode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasDevMode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional OIDCTokenType access_token_type = 9;
 * @return {!proto.zitadel.app.v2beta.OIDCTokenType}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getAccessTokenType = function() {
  return /** @type {!proto.zitadel.app.v2beta.OIDCTokenType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.OIDCTokenType} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setAccessTokenType = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearAccessTokenType = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasAccessTokenType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool access_token_role_assertion = 10;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getAccessTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setAccessTokenRoleAssertion = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearAccessTokenRoleAssertion = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasAccessTokenRoleAssertion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool id_token_role_assertion = 11;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getIdTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setIdTokenRoleAssertion = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearIdTokenRoleAssertion = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasIdTokenRoleAssertion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool id_token_userinfo_assertion = 12;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getIdTokenUserinfoAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setIdTokenUserinfoAssertion = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearIdTokenUserinfoAssertion = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasIdTokenUserinfoAssertion = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Duration clock_skew = 13;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getClockSkew = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 13));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setClockSkew = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearClockSkew = function() {
  return this.setClockSkew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasClockSkew = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string additional_origins = 14;
 * @return {!Array<string>}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getAdditionalOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setAdditionalOriginsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.addAdditionalOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearAdditionalOriginsList = function() {
  return this.setAdditionalOriginsList([]);
};


/**
 * optional bool skip_native_app_success_page = 15;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getSkipNativeAppSuccessPage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setSkipNativeAppSuccessPage = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearSkipNativeAppSuccessPage = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasSkipNativeAppSuccessPage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string back_channel_logout_uri = 16;
 * @return {string}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getBackChannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setBackChannelLogoutUri = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearBackChannelLogoutUri = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasBackChannelLogoutUri = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LoginVersion login_version = 17;
 * @return {?proto.zitadel.app.v2beta.LoginVersion}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.app.v2beta.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_app_v2beta_login_pb.LoginVersion, 17));
};


/**
 * @param {?proto.zitadel.app.v2beta.LoginVersion|undefined} value
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
*/
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.UpdateOIDCApplicationConfigurationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
authMethodType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest;
  return proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.app.v2beta.APIAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional APIAuthMethodType auth_method_type = 1;
 * @return {!proto.zitadel.app.v2beta.APIAuthMethodType}
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.app.v2beta.APIAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.APIAuthMethodType} value
 * @return {!proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest} returns this
 */
proto.zitadel.app.v2beta.UpdateAPIApplicationConfigurationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.GetApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.GetApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.GetApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.GetApplicationRequest}
 */
proto.zitadel.app.v2beta.GetApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.GetApplicationRequest;
  return proto.zitadel.app.v2beta.GetApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.GetApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.GetApplicationRequest}
 */
proto.zitadel.app.v2beta.GetApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.GetApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.GetApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.GetApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.GetApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.GetApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.GetApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
app: (f = msg.getApp()) && zitadel_app_v2beta_app_pb.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.GetApplicationResponse}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.GetApplicationResponse;
  return proto.zitadel.app.v2beta.GetApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.GetApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.GetApplicationResponse}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_app_v2beta_app_pb.Application;
      reader.readMessage(value,zitadel_app_v2beta_app_pb.Application.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.GetApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.GetApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_app_v2beta_app_pb.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional Application app = 1;
 * @return {?proto.zitadel.app.v2beta.Application}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.getApp = function() {
  return /** @type{?proto.zitadel.app.v2beta.Application} */ (
    jspb.Message.getWrapperField(this, zitadel_app_v2beta_app_pb.Application, 1));
};


/**
 * @param {?proto.zitadel.app.v2beta.Application|undefined} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.GetApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.GetApplicationResponse.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeleteApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationRequest}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeleteApplicationRequest;
  return proto.zitadel.app.v2beta.DeleteApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationRequest}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeleteApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeleteApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationResponse}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeleteApplicationResponse;
  return proto.zitadel.app.v2beta.DeleteApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationResponse}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeleteApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.DeleteApplicationResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeactivateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationRequest}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeactivateApplicationRequest;
  return proto.zitadel.app.v2beta.DeactivateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationRequest}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeactivateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.DeactivateApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeactivateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deactivationDate: (f = msg.getDeactivationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationResponse}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeactivateApplicationResponse;
  return proto.zitadel.app.v2beta.DeactivateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationResponse}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeactivationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeactivateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeactivateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeactivationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deactivation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.getDeactivationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.setDeactivationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.DeactivateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.clearDeactivationDate = function() {
  return this.setDeactivationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.DeactivateApplicationResponse.prototype.hasDeactivationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ReactivateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationRequest}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ReactivateApplicationRequest;
  return proto.zitadel.app.v2beta.ReactivateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationRequest}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ReactivateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationRequest} returns this
 */
proto.zitadel.app.v2beta.ReactivateApplicationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ReactivateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
reactivationDate: (f = msg.getReactivationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationResponse}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ReactivateApplicationResponse;
  return proto.zitadel.app.v2beta.ReactivateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationResponse}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReactivationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ReactivateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ReactivateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReactivationDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp reactivation_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.getReactivationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationResponse} returns this
*/
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.setReactivationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ReactivateApplicationResponse} returns this
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.clearReactivationDate = function() {
  return this.setReactivationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ReactivateApplicationResponse.prototype.hasReactivationDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.AppTypeCase = {
  APP_TYPE_NOT_SET: 0,
  IS_OIDC: 3,
  IS_API: 4
};

/**
 * @return {proto.zitadel.app.v2beta.RegenerateClientSecretRequest.AppTypeCase}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.getAppTypeCase = function() {
  return /** @type {proto.zitadel.app.v2beta.RegenerateClientSecretRequest.AppTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.RegenerateClientSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
isOidc: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
isApi: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.RegenerateClientSecretRequest;
  return proto.zitadel.app.v2beta.RegenerateClientSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOidc(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsApi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.RegenerateClientSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_oidc = 3;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.getIsOidc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.setIsOidc = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.clearIsOidc = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.hasIsOidc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_api = 4;
 * @return {boolean}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.getIsApi = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.setIsApi = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretRequest} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.clearIsApi = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.app.v2beta.RegenerateClientSecretRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretRequest.prototype.hasIsApi = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.RegenerateClientSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
clientSecret: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.RegenerateClientSecretResponse;
  return proto.zitadel.app.v2beta.RegenerateClientSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.RegenerateClientSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string client_secret = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} returns this
*/
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.RegenerateClientSecretResponse} returns this
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.RegenerateClientSecretResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ListApplicationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ListApplicationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_app_v2beta_app_pb.ApplicationSearchFilter.toObject, includeInstance),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ListApplicationsRequest;
  return proto.zitadel.app.v2beta.ListApplicationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ListApplicationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 3:
      var value = new zitadel_app_v2beta_app_pb.ApplicationSearchFilter;
      reader.readMessage(value,zitadel_app_v2beta_app_pb.ApplicationSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 4:
      var value = /** @type {!proto.zitadel.app.v2beta.AppSorting} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ListApplicationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ListApplicationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_app_v2beta_app_pb.ApplicationSearchFilter.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
*/
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ApplicationSearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.app.v2beta.ApplicationSearchFilter>}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.app.v2beta.ApplicationSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_app_v2beta_app_pb.ApplicationSearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.ApplicationSearchFilter>} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
*/
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.app.v2beta.ApplicationSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.ApplicationSearchFilter}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.app.v2beta.ApplicationSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * optional AppSorting sorting_column = 4;
 * @return {!proto.zitadel.app.v2beta.AppSorting}
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.app.v2beta.AppSorting} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.AppSorting} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ListApplicationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ListApplicationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationsList: jspb.Message.toObjectList(msg.getApplicationsList(),
    zitadel_app_v2beta_app_pb.Application.toObject, includeInstance),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ListApplicationsResponse;
  return proto.zitadel.app.v2beta.ListApplicationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ListApplicationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_app_v2beta_app_pb.Application;
      reader.readMessage(value,zitadel_app_v2beta_app_pb.Application.deserializeBinaryFromReader);
      msg.addApplications(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ListApplicationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ListApplicationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_app_v2beta_app_pb.Application.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Application applications = 1;
 * @return {!Array<!proto.zitadel.app.v2beta.Application>}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.getApplicationsList = function() {
  return /** @type{!Array<!proto.zitadel.app.v2beta.Application>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_app_v2beta_app_pb.Application, 1));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.Application>} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse} returns this
*/
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.setApplicationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.app.v2beta.Application=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.Application}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.addApplications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.app.v2beta.Application, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.clearApplicationsList = function() {
  return this.setApplicationsList([]);
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse} returns this
*/
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationsResponse} returns this
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
appId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateApplicationKeyRequest;
  return proto.zitadel.app.v2beta.CreateApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string app_id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyRequest.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.CreateApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
keyDetails: msg.getKeyDetails_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.CreateApplicationKeyResponse;
  return proto.zitadel.app.v2beta.CreateApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKeyDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.CreateApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getKeyDetails_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} returns this
*/
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes key_details = 3;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.getKeyDetails = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes key_details = 3;
 * This is a type-conversion wrapper around `getKeyDetails()`
 * @return {string}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.getKeyDetails_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKeyDetails()));
};


/**
 * optional bytes key_details = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKeyDetails()`
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.getKeyDetails_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKeyDetails()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.app.v2beta.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.CreateApplicationKeyResponse.prototype.setKeyDetails = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
applicationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
organizationId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeleteApplicationKeyRequest;
  return proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string application_id = 3;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string organization_id = 4;
 * @return {string}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletionDate: (f = msg.getDeletionDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.DeleteApplicationKeyResponse;
  return proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletionDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletionDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp deletion_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse} returns this
*/
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.DeleteApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.DeleteApplicationKeyResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.GetApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
applicationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
organizationId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.GetApplicationKeyRequest;
  return proto.zitadel.app.v2beta.GetApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.GetApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string application_id = 3;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string organization_id = 4;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyRequest} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.GetApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.GetApplicationKeyResponse;
  return proto.zitadel.app.v2beta.GetApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.GetApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpirationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} returns this
*/
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} returns this
*/
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.GetApplicationKeyResponse} returns this
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.GetApplicationKeyResponse.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.ResourceIdCase = {
  RESOURCE_ID_NOT_SET: 0,
  APPLICATION_ID: 3,
  PROJECT_ID: 4,
  ORGANIZATION_ID: 5
};

/**
 * @return {proto.zitadel.app.v2beta.ListApplicationKeysRequest.ResourceIdCase}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getResourceIdCase = function() {
  return /** @type {proto.zitadel.app.v2beta.ListApplicationKeysRequest.ResourceIdCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ListApplicationKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
applicationId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
projectId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
organizationId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ListApplicationKeysRequest;
  return proto.zitadel.app.v2beta.ListApplicationKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.app.v2beta.ApplicationKeysSorting} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ListApplicationKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
*/
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ApplicationKeysSorting sorting_column = 2;
 * @return {!proto.zitadel.app.v2beta.ApplicationKeysSorting}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.app.v2beta.ApplicationKeysSorting} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.app.v2beta.ApplicationKeysSorting} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string application_id = 3;
 * @return {string}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.clearApplicationId = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.hasApplicationId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string project_id = 4;
 * @return {string}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.clearProjectId = function() {
  return jspb.Message.setOneofField(this, 4, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.hasProjectId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string organization_id = 5;
 * @return {string}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysRequest} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.app.v2beta.ListApplicationKeysRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationKeysRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.app.v2beta.ListApplicationKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
keysList: jspb.Message.toObjectList(msg.getKeysList(),
    zitadel_app_v2beta_app_pb.ApplicationKey.toObject, includeInstance),
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.app.v2beta.ListApplicationKeysResponse;
  return proto.zitadel.app.v2beta.ListApplicationKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_app_v2beta_app_pb.ApplicationKey;
      reader.readMessage(value,zitadel_app_v2beta_app_pb.ApplicationKey.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    case 2:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.app.v2beta.ListApplicationKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_app_v2beta_app_pb.ApplicationKey.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ApplicationKey keys = 1;
 * @return {!Array<!proto.zitadel.app.v2beta.ApplicationKey>}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.zitadel.app.v2beta.ApplicationKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_app_v2beta_app_pb.ApplicationKey, 1));
};


/**
 * @param {!Array<!proto.zitadel.app.v2beta.ApplicationKey>} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} returns this
*/
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.app.v2beta.ApplicationKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.app.v2beta.ApplicationKey}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.app.v2beta.ApplicationKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} returns this
*/
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.app.v2beta.ListApplicationKeysResponse} returns this
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.app.v2beta.ListApplicationKeysResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.zitadel.app.v2beta);
