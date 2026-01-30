// source: zitadel/application/v2/application_service.proto
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

var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var zitadel_application_v2_api_pb = require('../../../zitadel/application/v2/api_pb.js');
goog.object.extend(proto, zitadel_application_v2_api_pb);
var zitadel_application_v2_application_pb = require('../../../zitadel/application/v2/application_pb.js');
goog.object.extend(proto, zitadel_application_v2_application_pb);
var zitadel_application_v2_login_pb = require('../../../zitadel/application/v2/login_pb.js');
goog.object.extend(proto, zitadel_application_v2_login_pb);
var zitadel_application_v2_oidc_pb = require('../../../zitadel/application/v2/oidc_pb.js');
goog.object.extend(proto, zitadel_application_v2_oidc_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
goog.exportSymbol('proto.zitadel.application.v2.CreateAPIApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateAPIApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationRequest.ApplicationTypeCase', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateApplicationResponse.ApplicationTypeCase', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateOIDCApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateOIDCApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateSAMLApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateSAMLApplicationRequest.MetadataCase', null, global);
goog.exportSymbol('proto.zitadel.application.v2.CreateSAMLApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeactivateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeactivateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeleteApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeleteApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeleteApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.DeleteApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GenerateClientSecretRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GenerateClientSecretResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GetApplicationKeyRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GetApplicationKeyResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GetApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.GetApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ListApplicationKeysRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ListApplicationKeysResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ListApplicationsRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ListApplicationsResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ReactivateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.ReactivateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateApplicationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateApplicationRequest.ApplicationTypeCase', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateApplicationResponse', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest', null, global);
goog.exportSymbol('proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.MetadataCase', null, global);
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
proto.zitadel.application.v2.CreateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.application.v2.CreateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateApplicationRequest.displayName = 'proto.zitadel.application.v2.CreateApplicationRequest';
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
proto.zitadel.application.v2.CreateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_);
};
goog.inherits(proto.zitadel.application.v2.CreateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateApplicationResponse.displayName = 'proto.zitadel.application.v2.CreateApplicationResponse';
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
proto.zitadel.application.v2.CreateOIDCApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.CreateOIDCApplicationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.CreateOIDCApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateOIDCApplicationRequest.displayName = 'proto.zitadel.application.v2.CreateOIDCApplicationRequest';
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
proto.zitadel.application.v2.CreateOIDCApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.CreateOIDCApplicationResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.CreateOIDCApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateOIDCApplicationResponse.displayName = 'proto.zitadel.application.v2.CreateOIDCApplicationResponse';
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
proto.zitadel.application.v2.CreateSAMLApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.application.v2.CreateSAMLApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateSAMLApplicationRequest.displayName = 'proto.zitadel.application.v2.CreateSAMLApplicationRequest';
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
proto.zitadel.application.v2.CreateSAMLApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.CreateSAMLApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateSAMLApplicationResponse.displayName = 'proto.zitadel.application.v2.CreateSAMLApplicationResponse';
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
proto.zitadel.application.v2.CreateAPIApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.CreateAPIApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateAPIApplicationRequest.displayName = 'proto.zitadel.application.v2.CreateAPIApplicationRequest';
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
proto.zitadel.application.v2.CreateAPIApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.CreateAPIApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateAPIApplicationResponse.displayName = 'proto.zitadel.application.v2.CreateAPIApplicationResponse';
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
proto.zitadel.application.v2.UpdateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.application.v2.UpdateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.UpdateApplicationRequest.displayName = 'proto.zitadel.application.v2.UpdateApplicationRequest';
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
proto.zitadel.application.v2.UpdateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.UpdateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.UpdateApplicationResponse.displayName = 'proto.zitadel.application.v2.UpdateApplicationResponse';
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
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.displayName = 'proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest';
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
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.displayName = 'proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest';
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
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.displayName = 'proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest';
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
proto.zitadel.application.v2.GetApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GetApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GetApplicationRequest.displayName = 'proto.zitadel.application.v2.GetApplicationRequest';
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
proto.zitadel.application.v2.GetApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GetApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GetApplicationResponse.displayName = 'proto.zitadel.application.v2.GetApplicationResponse';
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
proto.zitadel.application.v2.DeleteApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeleteApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeleteApplicationRequest.displayName = 'proto.zitadel.application.v2.DeleteApplicationRequest';
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
proto.zitadel.application.v2.DeleteApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeleteApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeleteApplicationResponse.displayName = 'proto.zitadel.application.v2.DeleteApplicationResponse';
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
proto.zitadel.application.v2.DeactivateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeactivateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeactivateApplicationRequest.displayName = 'proto.zitadel.application.v2.DeactivateApplicationRequest';
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
proto.zitadel.application.v2.DeactivateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeactivateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeactivateApplicationResponse.displayName = 'proto.zitadel.application.v2.DeactivateApplicationResponse';
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
proto.zitadel.application.v2.ReactivateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.ReactivateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ReactivateApplicationRequest.displayName = 'proto.zitadel.application.v2.ReactivateApplicationRequest';
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
proto.zitadel.application.v2.ReactivateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.ReactivateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ReactivateApplicationResponse.displayName = 'proto.zitadel.application.v2.ReactivateApplicationResponse';
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
proto.zitadel.application.v2.GenerateClientSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GenerateClientSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GenerateClientSecretRequest.displayName = 'proto.zitadel.application.v2.GenerateClientSecretRequest';
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
proto.zitadel.application.v2.GenerateClientSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GenerateClientSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GenerateClientSecretResponse.displayName = 'proto.zitadel.application.v2.GenerateClientSecretResponse';
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
proto.zitadel.application.v2.ListApplicationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.ListApplicationsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.ListApplicationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ListApplicationsRequest.displayName = 'proto.zitadel.application.v2.ListApplicationsRequest';
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
proto.zitadel.application.v2.ListApplicationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.ListApplicationsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.ListApplicationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ListApplicationsResponse.displayName = 'proto.zitadel.application.v2.ListApplicationsResponse';
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
proto.zitadel.application.v2.CreateApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.CreateApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateApplicationKeyRequest.displayName = 'proto.zitadel.application.v2.CreateApplicationKeyRequest';
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
proto.zitadel.application.v2.CreateApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.CreateApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.CreateApplicationKeyResponse.displayName = 'proto.zitadel.application.v2.CreateApplicationKeyResponse';
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
proto.zitadel.application.v2.DeleteApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeleteApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeleteApplicationKeyRequest.displayName = 'proto.zitadel.application.v2.DeleteApplicationKeyRequest';
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
proto.zitadel.application.v2.DeleteApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.DeleteApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.DeleteApplicationKeyResponse.displayName = 'proto.zitadel.application.v2.DeleteApplicationKeyResponse';
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
proto.zitadel.application.v2.GetApplicationKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GetApplicationKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GetApplicationKeyRequest.displayName = 'proto.zitadel.application.v2.GetApplicationKeyRequest';
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
proto.zitadel.application.v2.GetApplicationKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.application.v2.GetApplicationKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.GetApplicationKeyResponse.displayName = 'proto.zitadel.application.v2.GetApplicationKeyResponse';
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
proto.zitadel.application.v2.ListApplicationKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.ListApplicationKeysRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.ListApplicationKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ListApplicationKeysRequest.displayName = 'proto.zitadel.application.v2.ListApplicationKeysRequest';
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
proto.zitadel.application.v2.ListApplicationKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.application.v2.ListApplicationKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.application.v2.ListApplicationKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.application.v2.ListApplicationKeysResponse.displayName = 'proto.zitadel.application.v2.ListApplicationKeysResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_ = [[4,5,6]];

/**
 * @enum {number}
 */
proto.zitadel.application.v2.CreateApplicationRequest.ApplicationTypeCase = {
  APPLICATION_TYPE_NOT_SET: 0,
  OIDC_CONFIGURATION: 4,
  SAML_CONFIGURATION: 5,
  API_CONFIGURATION: 6
};

/**
 * @return {proto.zitadel.application.v2.CreateApplicationRequest.ApplicationTypeCase}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getApplicationTypeCase = function() {
  return /** @type {proto.zitadel.application.v2.CreateApplicationRequest.ApplicationTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_[0]));
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
proto.zitadel.application.v2.CreateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
oidcConfiguration: (f = msg.getOidcConfiguration()) && proto.zitadel.application.v2.CreateOIDCApplicationRequest.toObject(includeInstance, f),
samlConfiguration: (f = msg.getSamlConfiguration()) && proto.zitadel.application.v2.CreateSAMLApplicationRequest.toObject(includeInstance, f),
apiConfiguration: (f = msg.getApiConfiguration()) && proto.zitadel.application.v2.CreateAPIApplicationRequest.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest}
 */
proto.zitadel.application.v2.CreateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateApplicationRequest;
  return proto.zitadel.application.v2.CreateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest}
 */
proto.zitadel.application.v2.CreateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.zitadel.application.v2.CreateOIDCApplicationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.CreateOIDCApplicationRequest.deserializeBinaryFromReader);
      msg.setOidcConfiguration(value);
      break;
    case 5:
      var value = new proto.zitadel.application.v2.CreateSAMLApplicationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.CreateSAMLApplicationRequest.deserializeBinaryFromReader);
      msg.setSamlConfiguration(value);
      break;
    case 6:
      var value = new proto.zitadel.application.v2.CreateAPIApplicationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.CreateAPIApplicationRequest.deserializeBinaryFromReader);
      msg.setApiConfiguration(value);
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
proto.zitadel.application.v2.CreateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOidcConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.application.v2.CreateOIDCApplicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSamlConfiguration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.application.v2.CreateSAMLApplicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getApiConfiguration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.application.v2.CreateAPIApplicationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CreateOIDCApplicationRequest oidc_configuration = 4;
 * @return {?proto.zitadel.application.v2.CreateOIDCApplicationRequest}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getOidcConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateOIDCApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateOIDCApplicationRequest, 4));
};


/**
 * @param {?proto.zitadel.application.v2.CreateOIDCApplicationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setOidcConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.clearOidcConfiguration = function() {
  return this.setOidcConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.hasOidcConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CreateSAMLApplicationRequest saml_configuration = 5;
 * @return {?proto.zitadel.application.v2.CreateSAMLApplicationRequest}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getSamlConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateSAMLApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateSAMLApplicationRequest, 5));
};


/**
 * @param {?proto.zitadel.application.v2.CreateSAMLApplicationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setSamlConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.clearSamlConfiguration = function() {
  return this.setSamlConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.hasSamlConfiguration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CreateAPIApplicationRequest api_configuration = 6;
 * @return {?proto.zitadel.application.v2.CreateAPIApplicationRequest}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.getApiConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateAPIApplicationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateAPIApplicationRequest, 6));
};


/**
 * @param {?proto.zitadel.application.v2.CreateAPIApplicationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateApplicationRequest.prototype.setApiConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.application.v2.CreateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.clearApiConfiguration = function() {
  return this.setApiConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationRequest.prototype.hasApiConfiguration = function() {
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
proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.application.v2.CreateApplicationResponse.ApplicationTypeCase = {
  APPLICATION_TYPE_NOT_SET: 0,
  OIDC_CONFIGURATION: 3,
  SAML_CONFIGURATION: 4,
  API_CONFIGURATION: 5
};

/**
 * @return {proto.zitadel.application.v2.CreateApplicationResponse.ApplicationTypeCase}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getApplicationTypeCase = function() {
  return /** @type {proto.zitadel.application.v2.CreateApplicationResponse.ApplicationTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_[0]));
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
proto.zitadel.application.v2.CreateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
oidcConfiguration: (f = msg.getOidcConfiguration()) && proto.zitadel.application.v2.CreateOIDCApplicationResponse.toObject(includeInstance, f),
samlConfiguration: (f = msg.getSamlConfiguration()) && proto.zitadel.application.v2.CreateSAMLApplicationResponse.toObject(includeInstance, f),
apiConfiguration: (f = msg.getApiConfiguration()) && proto.zitadel.application.v2.CreateAPIApplicationResponse.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse}
 */
proto.zitadel.application.v2.CreateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateApplicationResponse;
  return proto.zitadel.application.v2.CreateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse}
 */
proto.zitadel.application.v2.CreateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 3:
      var value = new proto.zitadel.application.v2.CreateOIDCApplicationResponse;
      reader.readMessage(value,proto.zitadel.application.v2.CreateOIDCApplicationResponse.deserializeBinaryFromReader);
      msg.setOidcConfiguration(value);
      break;
    case 4:
      var value = new proto.zitadel.application.v2.CreateSAMLApplicationResponse;
      reader.readMessage(value,proto.zitadel.application.v2.CreateSAMLApplicationResponse.deserializeBinaryFromReader);
      msg.setSamlConfiguration(value);
      break;
    case 5:
      var value = new proto.zitadel.application.v2.CreateAPIApplicationResponse;
      reader.readMessage(value,proto.zitadel.application.v2.CreateAPIApplicationResponse.deserializeBinaryFromReader);
      msg.setApiConfiguration(value);
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
proto.zitadel.application.v2.CreateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
  f = message.getOidcConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.application.v2.CreateOIDCApplicationResponse.serializeBinaryToWriter
    );
  }
  f = message.getSamlConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.application.v2.CreateSAMLApplicationResponse.serializeBinaryToWriter
    );
  }
  f = message.getApiConfiguration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.application.v2.CreateAPIApplicationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
*/
proto.zitadel.application.v2.CreateApplicationResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CreateOIDCApplicationResponse oidc_configuration = 3;
 * @return {?proto.zitadel.application.v2.CreateOIDCApplicationResponse}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getOidcConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateOIDCApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateOIDCApplicationResponse, 3));
};


/**
 * @param {?proto.zitadel.application.v2.CreateOIDCApplicationResponse|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
*/
proto.zitadel.application.v2.CreateApplicationResponse.prototype.setOidcConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.clearOidcConfiguration = function() {
  return this.setOidcConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.hasOidcConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CreateSAMLApplicationResponse saml_configuration = 4;
 * @return {?proto.zitadel.application.v2.CreateSAMLApplicationResponse}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getSamlConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateSAMLApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateSAMLApplicationResponse, 4));
};


/**
 * @param {?proto.zitadel.application.v2.CreateSAMLApplicationResponse|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
*/
proto.zitadel.application.v2.CreateApplicationResponse.prototype.setSamlConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.clearSamlConfiguration = function() {
  return this.setSamlConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.hasSamlConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CreateAPIApplicationResponse api_configuration = 5;
 * @return {?proto.zitadel.application.v2.CreateAPIApplicationResponse}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.getApiConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.CreateAPIApplicationResponse} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.CreateAPIApplicationResponse, 5));
};


/**
 * @param {?proto.zitadel.application.v2.CreateAPIApplicationResponse|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
*/
proto.zitadel.application.v2.CreateApplicationResponse.prototype.setApiConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.application.v2.CreateApplicationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.clearApiConfiguration = function() {
  return this.setApiConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationResponse.prototype.hasApiConfiguration = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.repeatedFields_ = [1,2,3,6,14];



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
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateOIDCApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
responseTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
grantTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
applicationType: jspb.Message.getFieldWithDefault(msg, 4, 0),
authMethodType: jspb.Message.getFieldWithDefault(msg, 5, 0),
postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
version: jspb.Message.getFieldWithDefault(msg, 7, 0),
developmentMode: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
accessTokenType: jspb.Message.getFieldWithDefault(msg, 9, 0),
accessTokenRoleAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
idTokenRoleAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
idTokenUserinfoAssertion: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
clockSkew: (f = msg.getClockSkew()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
additionalOriginsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
skipNativeAppSuccessPage: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
backChannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 16, ""),
loginVersion: (f = msg.getLoginVersion()) && zitadel_application_v2_login_pb.LoginVersion.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateOIDCApplicationRequest;
  return proto.zitadel.application.v2.CreateOIDCApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.zitadel.application.v2.OIDCResponseType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addResponseTypes(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<!proto.zitadel.application.v2.OIDCGrantType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrantTypes(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.zitadel.application.v2.OIDCApplicationType} */ (reader.readEnum());
      msg.setApplicationType(value);
      break;
    case 5:
      var value = /** @type {!proto.zitadel.application.v2.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.application.v2.OIDCVersion} */ (reader.readEnum());
      msg.setVersion(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDevelopmentMode(value);
      break;
    case 9:
      var value = /** @type {!proto.zitadel.application.v2.OIDCTokenType} */ (reader.readEnum());
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
      var value = new zitadel_application_v2_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_application_v2_login_pb.LoginVersion.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateOIDCApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getApplicationType();
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
  f = message.getDevelopmentMode();
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
      zitadel_application_v2_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string redirect_uris = 1;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 2;
 * @return {!Array<!proto.zitadel.application.v2.OIDCResponseType>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.zitadel.application.v2.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.OIDCResponseType>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.application.v2.OIDCResponseType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 3;
 * @return {!Array<!proto.zitadel.application.v2.OIDCGrantType>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.zitadel.application.v2.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.OIDCGrantType>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.zitadel.application.v2.OIDCGrantType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional OIDCApplicationType application_type = 4;
 * @return {!proto.zitadel.application.v2.OIDCApplicationType}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getApplicationType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCApplicationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCApplicationType} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setApplicationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional OIDCAuthMethodType auth_method_type = 5;
 * @return {!proto.zitadel.application.v2.OIDCAuthMethodType}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCAuthMethodType} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated string post_logout_redirect_uris = 6;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * optional OIDCVersion version = 7;
 * @return {!proto.zitadel.application.v2.OIDCVersion}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getVersion = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCVersion} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool development_mode = 8;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getDevelopmentMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setDevelopmentMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional OIDCTokenType access_token_type = 9;
 * @return {!proto.zitadel.application.v2.OIDCTokenType}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getAccessTokenType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCTokenType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCTokenType} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setAccessTokenType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional bool access_token_role_assertion = 10;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getAccessTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setAccessTokenRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool id_token_role_assertion = 11;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getIdTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setIdTokenRoleAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool id_token_userinfo_assertion = 12;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getIdTokenUserinfoAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setIdTokenUserinfoAssertion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional google.protobuf.Duration clock_skew = 13;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getClockSkew = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 13));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setClockSkew = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearClockSkew = function() {
  return this.setClockSkew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.hasClockSkew = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string additional_origins = 14;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getAdditionalOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setAdditionalOriginsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.addAdditionalOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearAdditionalOriginsList = function() {
  return this.setAdditionalOriginsList([]);
};


/**
 * optional bool skip_native_app_success_page = 15;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getSkipNativeAppSuccessPage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setSkipNativeAppSuccessPage = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string back_channel_logout_uri = 16;
 * @return {string}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getBackChannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setBackChannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional LoginVersion login_version = 17;
 * @return {?proto.zitadel.application.v2.LoginVersion}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.application.v2.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_application_v2_login_pb.LoginVersion, 17));
};


/**
 * @param {?proto.zitadel.application.v2.LoginVersion|undefined} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.repeatedFields_ = [4];



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
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateOIDCApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientSecret: jspb.Message.getFieldWithDefault(msg, 2, ""),
nonCompliant: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
complianceProblemsList: jspb.Message.toObjectList(msg.getComplianceProblemsList(),
    zitadel_application_v2_oidc_pb.OIDCLocalizedMessage.toObject, includeInstance)
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
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateOIDCApplicationResponse;
  return proto.zitadel.application.v2.CreateOIDCApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNonCompliant(value);
      break;
    case 4:
      var value = new zitadel_application_v2_oidc_pb.OIDCLocalizedMessage;
      reader.readMessage(value,zitadel_application_v2_oidc_pb.OIDCLocalizedMessage.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateOIDCApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNonCompliant();
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
      zitadel_application_v2_oidc_pb.OIDCLocalizedMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool non_compliant = 3;
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.getNonCompliant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.setNonCompliant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated OIDCLocalizedMessage compliance_problems = 4;
 * @return {!Array<!proto.zitadel.application.v2.OIDCLocalizedMessage>}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.getComplianceProblemsList = function() {
  return /** @type{!Array<!proto.zitadel.application.v2.OIDCLocalizedMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_application_v2_oidc_pb.OIDCLocalizedMessage, 4));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.OIDCLocalizedMessage>} value
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} returns this
*/
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.setComplianceProblemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.application.v2.OIDCLocalizedMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.OIDCLocalizedMessage}
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.addComplianceProblems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.application.v2.OIDCLocalizedMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.CreateOIDCApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateOIDCApplicationResponse.prototype.clearComplianceProblemsList = function() {
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
proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.MetadataCase = {
  METADATA_NOT_SET: 0,
  METADATA_XML: 1,
  METADATA_URL: 2
};

/**
 * @return {proto.zitadel.application.v2.CreateSAMLApplicationRequest.MetadataCase}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getMetadataCase = function() {
  return /** @type {proto.zitadel.application.v2.CreateSAMLApplicationRequest.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_[0]));
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
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateSAMLApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
metadataXml: msg.getMetadataXml_asB64(),
metadataUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_application_v2_login_pb.LoginVersion.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateSAMLApplicationRequest;
  return proto.zitadel.application.v2.CreateSAMLApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_application_v2_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_application_v2_login_pb.LoginVersion.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateSAMLApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_application_v2_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes metadata_xml = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getMetadataXml = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_xml = 1;
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {string}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getMetadataXml_asB64 = function() {
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
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getMetadataXml_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataXml()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.setMetadataXml = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.clearMetadataXml = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.hasMetadataXml = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string metadata_url = 2;
 * @return {string}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getMetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.setMetadataUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.clearMetadataUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.application.v2.CreateSAMLApplicationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.hasMetadataUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoginVersion login_version = 3;
 * @return {?proto.zitadel.application.v2.LoginVersion}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.application.v2.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_application_v2_login_pb.LoginVersion, 3));
};


/**
 * @param {?proto.zitadel.application.v2.LoginVersion|undefined} value
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
*/
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateSAMLApplicationRequest.prototype.hasLoginVersion = function() {
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
proto.zitadel.application.v2.CreateSAMLApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateSAMLApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateSAMLApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationResponse}
 */
proto.zitadel.application.v2.CreateSAMLApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateSAMLApplicationResponse;
  return proto.zitadel.application.v2.CreateSAMLApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateSAMLApplicationResponse}
 */
proto.zitadel.application.v2.CreateSAMLApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.CreateSAMLApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateSAMLApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateSAMLApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateSAMLApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.CreateAPIApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateAPIApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationRequest}
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateAPIApplicationRequest;
  return proto.zitadel.application.v2.CreateAPIApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationRequest}
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.application.v2.APIAuthMethodType} */ (reader.readEnum());
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
proto.zitadel.application.v2.CreateAPIApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateAPIApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.zitadel.application.v2.APIAuthMethodType}
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.application.v2.APIAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.application.v2.APIAuthMethodType} value
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationRequest} returns this
 */
proto.zitadel.application.v2.CreateAPIApplicationRequest.prototype.setAuthMethodType = function(value) {
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
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateAPIApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationResponse}
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateAPIApplicationResponse;
  return proto.zitadel.application.v2.CreateAPIApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationResponse}
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateAPIApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateAPIApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateAPIApplicationResponse} returns this
 */
proto.zitadel.application.v2.CreateAPIApplicationResponse.prototype.setClientSecret = function(value) {
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
proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_ = [[4,5,6]];

/**
 * @enum {number}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.ApplicationTypeCase = {
  APPLICATION_TYPE_NOT_SET: 0,
  SAML_CONFIGURATION: 4,
  OIDC_CONFIGURATION: 5,
  API_CONFIGURATION: 6
};

/**
 * @return {proto.zitadel.application.v2.UpdateApplicationRequest.ApplicationTypeCase}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getApplicationTypeCase = function() {
  return /** @type {proto.zitadel.application.v2.UpdateApplicationRequest.ApplicationTypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_[0]));
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
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.UpdateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.UpdateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
samlConfiguration: (f = msg.getSamlConfiguration()) && proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.toObject(includeInstance, f),
oidcConfiguration: (f = msg.getOidcConfiguration()) && proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.toObject(includeInstance, f),
apiConfiguration: (f = msg.getApiConfiguration()) && proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.UpdateApplicationRequest;
  return proto.zitadel.application.v2.UpdateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.UpdateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setSamlConfiguration(value);
      break;
    case 5:
      var value = new proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setOidcConfiguration(value);
      break;
    case 6:
      var value = new proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest;
      reader.readMessage(value,proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader);
      msg.setApiConfiguration(value);
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
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.UpdateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.UpdateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSamlConfiguration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
  f = message.getOidcConfiguration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
  f = message.getApiConfiguration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional UpdateSAMLApplicationConfigurationRequest saml_configuration = 4;
 * @return {?proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getSamlConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest, 4));
};


/**
 * @param {?proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
*/
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setSamlConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.clearSamlConfiguration = function() {
  return this.setSamlConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.hasSamlConfiguration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UpdateOIDCApplicationConfigurationRequest oidc_configuration = 5;
 * @return {?proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getOidcConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest, 5));
};


/**
 * @param {?proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
*/
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setOidcConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.clearOidcConfiguration = function() {
  return this.setOidcConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.hasOidcConfiguration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UpdateAPIApplicationConfigurationRequest api_configuration = 6;
 * @return {?proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.getApiConfiguration = function() {
  return /** @type{?proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest, 6));
};


/**
 * @param {?proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
*/
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.setApiConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.application.v2.UpdateApplicationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateApplicationRequest} returns this
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.clearApiConfiguration = function() {
  return this.setApiConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateApplicationRequest.prototype.hasApiConfiguration = function() {
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
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.UpdateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.UpdateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.UpdateApplicationResponse}
 */
proto.zitadel.application.v2.UpdateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.UpdateApplicationResponse;
  return proto.zitadel.application.v2.UpdateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.UpdateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.UpdateApplicationResponse}
 */
proto.zitadel.application.v2.UpdateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.UpdateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.UpdateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateApplicationResponse} returns this
*/
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.setChangeDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateApplicationResponse} returns this
 */
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.clearChangeDate = function() {
  return this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateApplicationResponse.prototype.hasChangeDate = function() {
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
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.MetadataCase = {
  METADATA_NOT_SET: 0,
  METADATA_XML: 1,
  METADATA_URL: 2
};

/**
 * @return {proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.MetadataCase}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataCase = function() {
  return /** @type {proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0]));
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
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
metadataXml: msg.getMetadataXml_asB64(),
metadataUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_application_v2_login_pb.LoginVersion.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest;
  return proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_application_v2_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_application_v2_login_pb.LoginVersion.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
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
      zitadel_application_v2_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes metadata_xml = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_xml = 1;
 * This is a type-conversion wrapper around `getMetadataXml()`
 * @return {string}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml_asB64 = function() {
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
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataXml_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataXml()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.setMetadataXml = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.clearMetadataXml = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.hasMetadataXml = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string metadata_url = 2;
 * @return {string}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getMetadataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.setMetadataUrl = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.clearMetadataUrl = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.hasMetadataUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LoginVersion login_version = 3;
 * @return {?proto.zitadel.application.v2.LoginVersion}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.application.v2.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_application_v2_login_pb.LoginVersion, 3));
};


/**
 * @param {?proto.zitadel.application.v2.LoginVersion|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
*/
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateSAMLApplicationConfigurationRequest.prototype.hasLoginVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.repeatedFields_ = [1,2,3,6,14];



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
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
responseTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
grantTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
applicationType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
authMethodType: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
version: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
developmentMode: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
accessTokenType: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
accessTokenRoleAssertion: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
idTokenRoleAssertion: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
idTokenUserinfoAssertion: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
clockSkew: (f = msg.getClockSkew()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
additionalOriginsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
skipNativeAppSuccessPage: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
backChannelLogoutUri: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
loginVersion: (f = msg.getLoginVersion()) && zitadel_application_v2_login_pb.LoginVersion.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest;
  return proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<!proto.zitadel.application.v2.OIDCResponseType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addResponseTypes(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<!proto.zitadel.application.v2.OIDCGrantType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGrantTypes(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.zitadel.application.v2.OIDCApplicationType} */ (reader.readEnum());
      msg.setApplicationType(value);
      break;
    case 5:
      var value = /** @type {!proto.zitadel.application.v2.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 7:
      var value = /** @type {!proto.zitadel.application.v2.OIDCVersion} */ (reader.readEnum());
      msg.setVersion(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDevelopmentMode(value);
      break;
    case 9:
      var value = /** @type {!proto.zitadel.application.v2.OIDCTokenType} */ (reader.readEnum());
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
      var value = new zitadel_application_v2_login_pb.LoginVersion;
      reader.readMessage(value,zitadel_application_v2_login_pb.LoginVersion.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.zitadel.application.v2.OIDCApplicationType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.zitadel.application.v2.OIDCAuthMethodType} */ (jspb.Message.getField(message, 5));
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
  f = /** @type {!proto.zitadel.application.v2.OIDCVersion} */ (jspb.Message.getField(message, 7));
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
  f = /** @type {!proto.zitadel.application.v2.OIDCTokenType} */ (jspb.Message.getField(message, 9));
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
      zitadel_application_v2_login_pb.LoginVersion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string redirect_uris = 1;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 2;
 * @return {!Array<!proto.zitadel.application.v2.OIDCResponseType>}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.zitadel.application.v2.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.OIDCResponseType>} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.zitadel.application.v2.OIDCResponseType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 3;
 * @return {!Array<!proto.zitadel.application.v2.OIDCGrantType>}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.zitadel.application.v2.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.OIDCGrantType>} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.zitadel.application.v2.OIDCGrantType} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional OIDCApplicationType application_type = 4;
 * @return {!proto.zitadel.application.v2.OIDCApplicationType}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getApplicationType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCApplicationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCApplicationType} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setApplicationType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearApplicationType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasApplicationType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OIDCAuthMethodType auth_method_type = 5;
 * @return {!proto.zitadel.application.v2.OIDCAuthMethodType}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCAuthMethodType} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setAuthMethodType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearAuthMethodType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasAuthMethodType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string post_logout_redirect_uris = 6;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * optional OIDCVersion version = 7;
 * @return {!proto.zitadel.application.v2.OIDCVersion}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getVersion = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCVersion} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool development_mode = 8;
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getDevelopmentMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setDevelopmentMode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearDevelopmentMode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasDevelopmentMode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional OIDCTokenType access_token_type = 9;
 * @return {!proto.zitadel.application.v2.OIDCTokenType}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getAccessTokenType = function() {
  return /** @type {!proto.zitadel.application.v2.OIDCTokenType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.zitadel.application.v2.OIDCTokenType} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setAccessTokenType = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearAccessTokenType = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasAccessTokenType = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool access_token_role_assertion = 10;
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getAccessTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setAccessTokenRoleAssertion = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearAccessTokenRoleAssertion = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasAccessTokenRoleAssertion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool id_token_role_assertion = 11;
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getIdTokenRoleAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setIdTokenRoleAssertion = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearIdTokenRoleAssertion = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasIdTokenRoleAssertion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool id_token_userinfo_assertion = 12;
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getIdTokenUserinfoAssertion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setIdTokenUserinfoAssertion = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearIdTokenUserinfoAssertion = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasIdTokenUserinfoAssertion = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Duration clock_skew = 13;
 * @return {?proto.google.protobuf.Duration}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getClockSkew = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 13));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
*/
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setClockSkew = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearClockSkew = function() {
  return this.setClockSkew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasClockSkew = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated string additional_origins = 14;
 * @return {!Array<string>}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getAdditionalOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setAdditionalOriginsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.addAdditionalOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearAdditionalOriginsList = function() {
  return this.setAdditionalOriginsList([]);
};


/**
 * optional bool skip_native_app_success_page = 15;
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getSkipNativeAppSuccessPage = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setSkipNativeAppSuccessPage = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearSkipNativeAppSuccessPage = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasSkipNativeAppSuccessPage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string back_channel_logout_uri = 16;
 * @return {string}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getBackChannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setBackChannelLogoutUri = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearBackChannelLogoutUri = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasBackChannelLogoutUri = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LoginVersion login_version = 17;
 * @return {?proto.zitadel.application.v2.LoginVersion}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.getLoginVersion = function() {
  return /** @type{?proto.zitadel.application.v2.LoginVersion} */ (
    jspb.Message.getWrapperField(this, zitadel_application_v2_login_pb.LoginVersion, 17));
};


/**
 * @param {?proto.zitadel.application.v2.LoginVersion|undefined} value
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
*/
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.setLoginVersion = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.clearLoginVersion = function() {
  return this.setLoginVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.UpdateOIDCApplicationConfigurationRequest.prototype.hasLoginVersion = function() {
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
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest;
  return proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest}
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.application.v2.APIAuthMethodType} */ (reader.readEnum());
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
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
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
 * @return {!proto.zitadel.application.v2.APIAuthMethodType}
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.prototype.getAuthMethodType = function() {
  return /** @type {!proto.zitadel.application.v2.APIAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.application.v2.APIAuthMethodType} value
 * @return {!proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest} returns this
 */
proto.zitadel.application.v2.UpdateAPIApplicationConfigurationRequest.prototype.setAuthMethodType = function(value) {
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
proto.zitadel.application.v2.GetApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GetApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GetApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.application.v2.GetApplicationRequest}
 */
proto.zitadel.application.v2.GetApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GetApplicationRequest;
  return proto.zitadel.application.v2.GetApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GetApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GetApplicationRequest}
 */
proto.zitadel.application.v2.GetApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
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
proto.zitadel.application.v2.GetApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GetApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GetApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.GetApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GetApplicationRequest} returns this
 */
proto.zitadel.application.v2.GetApplicationRequest.prototype.setApplicationId = function(value) {
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
proto.zitadel.application.v2.GetApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GetApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GetApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
application: (f = msg.getApplication()) && zitadel_application_v2_application_pb.Application.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.application.v2.GetApplicationResponse}
 */
proto.zitadel.application.v2.GetApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GetApplicationResponse;
  return proto.zitadel.application.v2.GetApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GetApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GetApplicationResponse}
 */
proto.zitadel.application.v2.GetApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_application_v2_application_pb.Application;
      reader.readMessage(value,zitadel_application_v2_application_pb.Application.deserializeBinaryFromReader);
      msg.setApplication(value);
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
proto.zitadel.application.v2.GetApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GetApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GetApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_application_v2_application_pb.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional Application application = 1;
 * @return {?proto.zitadel.application.v2.Application}
 */
proto.zitadel.application.v2.GetApplicationResponse.prototype.getApplication = function() {
  return /** @type{?proto.zitadel.application.v2.Application} */ (
    jspb.Message.getWrapperField(this, zitadel_application_v2_application_pb.Application, 1));
};


/**
 * @param {?proto.zitadel.application.v2.Application|undefined} value
 * @return {!proto.zitadel.application.v2.GetApplicationResponse} returns this
*/
proto.zitadel.application.v2.GetApplicationResponse.prototype.setApplication = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.GetApplicationResponse} returns this
 */
proto.zitadel.application.v2.GetApplicationResponse.prototype.clearApplication = function() {
  return this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.GetApplicationResponse.prototype.hasApplication = function() {
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
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeleteApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeleteApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.application.v2.DeleteApplicationRequest}
 */
proto.zitadel.application.v2.DeleteApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeleteApplicationRequest;
  return proto.zitadel.application.v2.DeleteApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeleteApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeleteApplicationRequest}
 */
proto.zitadel.application.v2.DeleteApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeleteApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeleteApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationRequest} returns this
 */
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationRequest} returns this
 */
proto.zitadel.application.v2.DeleteApplicationRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeleteApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeleteApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.DeleteApplicationResponse}
 */
proto.zitadel.application.v2.DeleteApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeleteApplicationResponse;
  return proto.zitadel.application.v2.DeleteApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeleteApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeleteApplicationResponse}
 */
proto.zitadel.application.v2.DeleteApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeleteApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeleteApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationResponse} returns this
*/
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.DeleteApplicationResponse} returns this
 */
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.DeleteApplicationResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeactivateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeactivateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.application.v2.DeactivateApplicationRequest}
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeactivateApplicationRequest;
  return proto.zitadel.application.v2.DeactivateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeactivateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeactivateApplicationRequest}
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeactivateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeactivateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeactivateApplicationRequest} returns this
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeactivateApplicationRequest} returns this
 */
proto.zitadel.application.v2.DeactivateApplicationRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeactivateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeactivateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.DeactivateApplicationResponse}
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeactivateApplicationResponse;
  return proto.zitadel.application.v2.DeactivateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeactivateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeactivateApplicationResponse}
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeactivateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeactivateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.getDeactivationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.DeactivateApplicationResponse} returns this
*/
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.setDeactivationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.DeactivateApplicationResponse} returns this
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.clearDeactivationDate = function() {
  return this.setDeactivationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.DeactivateApplicationResponse.prototype.hasDeactivationDate = function() {
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
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ReactivateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ReactivateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.application.v2.ReactivateApplicationRequest}
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ReactivateApplicationRequest;
  return proto.zitadel.application.v2.ReactivateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ReactivateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ReactivateApplicationRequest}
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ReactivateApplicationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ReactivateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.ReactivateApplicationRequest} returns this
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.ReactivateApplicationRequest} returns this
 */
proto.zitadel.application.v2.ReactivateApplicationRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ReactivateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ReactivateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.ReactivateApplicationResponse}
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ReactivateApplicationResponse;
  return proto.zitadel.application.v2.ReactivateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ReactivateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ReactivateApplicationResponse}
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ReactivateApplicationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ReactivateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.getReactivationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.ReactivateApplicationResponse} returns this
*/
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.setReactivationDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.ReactivateApplicationResponse} returns this
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.clearReactivationDate = function() {
  return this.setReactivationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.ReactivateApplicationResponse.prototype.hasReactivationDate = function() {
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
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GenerateClientSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GenerateClientSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.application.v2.GenerateClientSecretRequest}
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GenerateClientSecretRequest;
  return proto.zitadel.application.v2.GenerateClientSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GenerateClientSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GenerateClientSecretRequest}
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GenerateClientSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GenerateClientSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
};


/**
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GenerateClientSecretRequest} returns this
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GenerateClientSecretRequest} returns this
 */
proto.zitadel.application.v2.GenerateClientSecretRequest.prototype.setProjectId = function(value) {
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
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GenerateClientSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GenerateClientSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.GenerateClientSecretResponse}
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GenerateClientSecretResponse;
  return proto.zitadel.application.v2.GenerateClientSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GenerateClientSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GenerateClientSecretResponse}
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GenerateClientSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GenerateClientSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GenerateClientSecretResponse} returns this
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.GenerateClientSecretResponse} returns this
*/
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.GenerateClientSecretResponse} returns this
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.GenerateClientSecretResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.ListApplicationsRequest.repeatedFields_ = [2];



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
proto.zitadel.application.v2.ListApplicationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ListApplicationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ListApplicationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_application_v2_application_pb.ApplicationSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest}
 */
proto.zitadel.application.v2.ListApplicationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ListApplicationsRequest;
  return proto.zitadel.application.v2.ListApplicationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ListApplicationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest}
 */
proto.zitadel.application.v2.ListApplicationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.zitadel.application.v2.ApplicationSorting} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 2:
      var value = new zitadel_application_v2_application_pb.ApplicationSearchFilter;
      reader.readMessage(value,zitadel_application_v2_application_pb.ApplicationSearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
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
proto.zitadel.application.v2.ListApplicationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ListApplicationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ListApplicationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationsRequest.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_application_v2_application_pb.ApplicationSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest} returns this
*/
proto.zitadel.application.v2.ListApplicationsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ApplicationSorting sorting_column = 3;
 * @return {!proto.zitadel.application.v2.ApplicationSorting}
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.application.v2.ApplicationSorting} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.application.v2.ApplicationSorting} value
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated ApplicationSearchFilter filters = 2;
 * @return {!Array<!proto.zitadel.application.v2.ApplicationSearchFilter>}
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.application.v2.ApplicationSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_application_v2_application_pb.ApplicationSearchFilter, 2));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.ApplicationSearchFilter>} value
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest} returns this
*/
proto.zitadel.application.v2.ListApplicationsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.application.v2.ApplicationSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.ApplicationSearchFilter}
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.application.v2.ApplicationSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.ListApplicationsRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.ListApplicationsResponse.repeatedFields_ = [1];



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
proto.zitadel.application.v2.ListApplicationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ListApplicationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ListApplicationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationsList: jspb.Message.toObjectList(msg.getApplicationsList(),
    zitadel_application_v2_application_pb.Application.toObject, includeInstance),
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
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse}
 */
proto.zitadel.application.v2.ListApplicationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ListApplicationsResponse;
  return proto.zitadel.application.v2.ListApplicationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ListApplicationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse}
 */
proto.zitadel.application.v2.ListApplicationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_application_v2_application_pb.Application;
      reader.readMessage(value,zitadel_application_v2_application_pb.Application.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.ListApplicationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ListApplicationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ListApplicationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_application_v2_application_pb.Application.serializeBinaryToWriter
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
 * @return {!Array<!proto.zitadel.application.v2.Application>}
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.getApplicationsList = function() {
  return /** @type{!Array<!proto.zitadel.application.v2.Application>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_application_v2_application_pb.Application, 1));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.Application>} value
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse} returns this
*/
proto.zitadel.application.v2.ListApplicationsResponse.prototype.setApplicationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.application.v2.Application=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.Application}
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.addApplications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.application.v2.Application, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse} returns this
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.clearApplicationsList = function() {
  return this.setApplicationsList([]);
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse} returns this
*/
proto.zitadel.application.v2.ListApplicationsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.ListApplicationsResponse} returns this
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.ListApplicationsResponse.prototype.hasPagination = function() {
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
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
applicationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateApplicationKeyRequest;
  return proto.zitadel.application.v2.CreateApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
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
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplicationId();
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
 * optional string application_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest} returns this
*/
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationKeyRequest.prototype.hasExpirationDate = function() {
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
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.CreateApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.CreateApplicationKeyResponse;
  return proto.zitadel.application.v2.CreateApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
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
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.CreateApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.CreateApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
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
 * optional string key_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse} returns this
*/
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes key_details = 3;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.getKeyDetails = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes key_details = 3;
 * This is a type-conversion wrapper around `getKeyDetails()`
 * @return {string}
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.getKeyDetails_asB64 = function() {
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
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.getKeyDetails_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKeyDetails()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.application.v2.CreateApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.CreateApplicationKeyResponse.prototype.setKeyDetails = function(value) {
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
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeleteApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyRequest}
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeleteApplicationKeyRequest;
  return proto.zitadel.application.v2.DeleteApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyRequest}
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeleteApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
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
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_id = 2;
 * @return {string}
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string project_id = 3;
 * @return {string}
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.DeleteApplicationKeyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.DeleteApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyResponse}
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.DeleteApplicationKeyResponse;
  return proto.zitadel.application.v2.DeleteApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyResponse}
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.DeleteApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.DeleteApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyResponse} returns this
*/
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.DeleteApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.DeleteApplicationKeyResponse.prototype.hasDeletionDate = function() {
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
proto.zitadel.application.v2.GetApplicationKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GetApplicationKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GetApplicationKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.application.v2.GetApplicationKeyRequest}
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GetApplicationKeyRequest;
  return proto.zitadel.application.v2.GetApplicationKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GetApplicationKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GetApplicationKeyRequest}
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
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
proto.zitadel.application.v2.GetApplicationKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GetApplicationKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GetApplicationKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GetApplicationKeyRequest} returns this
 */
proto.zitadel.application.v2.GetApplicationKeyRequest.prototype.setKeyId = function(value) {
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
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.GetApplicationKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.GetApplicationKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.GetApplicationKeyResponse;
  return proto.zitadel.application.v2.GetApplicationKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.GetApplicationKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
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
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.GetApplicationKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.GetApplicationKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
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
 * optional string key_id = 1;
 * @return {string}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse} returns this
*/
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.setCreationDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.clearCreationDate = function() {
  return this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse} returns this
*/
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.GetApplicationKeyResponse} returns this
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.GetApplicationKeyResponse.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.repeatedFields_ = [3];



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
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ListApplicationKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ListApplicationKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: jspb.Message.getFieldWithDefault(msg, 2, 0),
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_application_v2_application_pb.ApplicationKeySearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ListApplicationKeysRequest;
  return proto.zitadel.application.v2.ListApplicationKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ListApplicationKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.application.v2.ApplicationKeysSorting} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 3:
      var value = new zitadel_application_v2_application_pb.ApplicationKeySearchFilter;
      reader.readMessage(value,zitadel_application_v2_application_pb.ApplicationKeySearchFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
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
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ListApplicationKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ListApplicationKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      zitadel_application_v2_application_pb.ApplicationKeySearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest} returns this
*/
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ApplicationKeysSorting sorting_column = 2;
 * @return {!proto.zitadel.application.v2.ApplicationKeysSorting}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.application.v2.ApplicationKeysSorting} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.application.v2.ApplicationKeysSorting} value
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ApplicationKeySearchFilter filters = 3;
 * @return {!Array<!proto.zitadel.application.v2.ApplicationKeySearchFilter>}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.application.v2.ApplicationKeySearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_application_v2_application_pb.ApplicationKeySearchFilter, 3));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.ApplicationKeySearchFilter>} value
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest} returns this
*/
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.zitadel.application.v2.ApplicationKeySearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.ApplicationKeySearchFilter}
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.zitadel.application.v2.ApplicationKeySearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysRequest} returns this
 */
proto.zitadel.application.v2.ListApplicationKeysRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.repeatedFields_ = [1];



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
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.application.v2.ListApplicationKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.application.v2.ListApplicationKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
keysList: jspb.Message.toObjectList(msg.getKeysList(),
    zitadel_application_v2_application_pb.ApplicationKey.toObject, includeInstance),
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
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.application.v2.ListApplicationKeysResponse;
  return proto.zitadel.application.v2.ListApplicationKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.application.v2.ListApplicationKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_application_v2_application_pb.ApplicationKey;
      reader.readMessage(value,zitadel_application_v2_application_pb.ApplicationKey.deserializeBinaryFromReader);
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
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.application.v2.ListApplicationKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.application.v2.ListApplicationKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zitadel_application_v2_application_pb.ApplicationKey.serializeBinaryToWriter
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
 * @return {!Array<!proto.zitadel.application.v2.ApplicationKey>}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.zitadel.application.v2.ApplicationKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_application_v2_application_pb.ApplicationKey, 1));
};


/**
 * @param {!Array<!proto.zitadel.application.v2.ApplicationKey>} value
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse} returns this
*/
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.application.v2.ApplicationKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.application.v2.ApplicationKey}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.application.v2.ApplicationKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse} returns this
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 2;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 2));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse} returns this
*/
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.application.v2.ListApplicationKeysResponse} returns this
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.application.v2.ListApplicationKeysResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.zitadel.application.v2);
