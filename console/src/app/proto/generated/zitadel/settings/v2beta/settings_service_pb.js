// source: zitadel/settings/v2beta/settings_service.proto
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

var zitadel_protoc_gen_zitadel_v2_options_pb = require('../../../zitadel/protoc_gen_zitadel/v2/options_pb.js');
goog.object.extend(proto, zitadel_protoc_gen_zitadel_v2_options_pb);
var zitadel_object_v2beta_object_pb = require('../../../zitadel/object/v2beta/object_pb.js');
goog.object.extend(proto, zitadel_object_v2beta_object_pb);
var zitadel_settings_v2beta_branding_settings_pb = require('../../../zitadel/settings/v2beta/branding_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_branding_settings_pb);
var zitadel_settings_v2beta_domain_settings_pb = require('../../../zitadel/settings/v2beta/domain_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_domain_settings_pb);
var zitadel_settings_v2beta_legal_settings_pb = require('../../../zitadel/settings/v2beta/legal_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_legal_settings_pb);
var zitadel_settings_v2beta_lockout_settings_pb = require('../../../zitadel/settings/v2beta/lockout_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_lockout_settings_pb);
var zitadel_settings_v2beta_login_settings_pb = require('../../../zitadel/settings/v2beta/login_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_login_settings_pb);
var zitadel_settings_v2beta_password_settings_pb = require('../../../zitadel/settings/v2beta/password_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_password_settings_pb);
var zitadel_settings_v2beta_security_settings_pb = require('../../../zitadel/settings/v2beta/security_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_security_settings_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2beta_filter_pb = require('../../../zitadel/filter/v2beta/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2beta_filter_pb);
var zitadel_settings_v2beta_organization_settings_pb = require('../../../zitadel/settings/v2beta/organization_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2beta_organization_settings_pb);
goog.exportSymbol('proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetBrandingSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetBrandingSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetDomainSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetDomainSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetGeneralSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetGeneralSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLockoutSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLockoutSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLoginSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetLoginSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetSecuritySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.GetSecuritySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.SetSecuritySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2beta.SetSecuritySettingsResponse', null, global);
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
proto.zitadel.settings.v2beta.GetLoginSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLoginSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLoginSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetLoginSettingsRequest';
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
proto.zitadel.settings.v2beta.GetLoginSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLoginSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLoginSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetLoginSettingsResponse';
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest';
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse';
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest';
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse';
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
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetBrandingSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetBrandingSettingsRequest';
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
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetBrandingSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetBrandingSettingsResponse';
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
proto.zitadel.settings.v2beta.GetDomainSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetDomainSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetDomainSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetDomainSettingsRequest';
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
proto.zitadel.settings.v2beta.GetDomainSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetDomainSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetDomainSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetDomainSettingsResponse';
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest';
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse';
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
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLockoutSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetLockoutSettingsRequest';
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
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetLockoutSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetLockoutSettingsResponse';
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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.displayName = 'proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest';
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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.displayName = 'proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse';
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
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetGeneralSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetGeneralSettingsRequest';
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
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetGeneralSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetGeneralSettingsResponse';
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
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetSecuritySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.displayName = 'proto.zitadel.settings.v2beta.GetSecuritySettingsRequest';
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
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.GetSecuritySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.displayName = 'proto.zitadel.settings.v2beta.GetSecuritySettingsResponse';
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
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.SetSecuritySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.displayName = 'proto.zitadel.settings.v2beta.SetSecuritySettingsRequest';
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
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.SetSecuritySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.displayName = 'proto.zitadel.settings.v2beta.SetSecuritySettingsResponse';
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest';
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse';
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest';
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse';
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
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest';
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
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse';
}



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
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLoginSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLoginSettingsRequest;
  return proto.zitadel.settings.v2beta.GetLoginSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLoginSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLoginSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_login_settings_pb.LoginSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLoginSettingsResponse;
  return proto.zitadel.settings.v2beta.GetLoginSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_login_settings_pb.LoginSettings;
      reader.readMessage(value,zitadel_settings_v2beta_login_settings_pb.LoginSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLoginSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_login_settings_pb.LoginSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoginSettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.LoginSettings}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.LoginSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_login_settings_pb.LoginSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.LoginSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLoginSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLoginSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest;
  return proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_password_settings_pb.PasswordComplexitySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse;
  return proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_password_settings_pb.PasswordComplexitySettings;
      reader.readMessage(value,zitadel_settings_v2beta_password_settings_pb.PasswordComplexitySettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_password_settings_pb.PasswordComplexitySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasswordComplexitySettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.PasswordComplexitySettings}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.PasswordComplexitySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_password_settings_pb.PasswordComplexitySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.PasswordComplexitySettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest;
  return proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_password_settings_pb.PasswordExpirySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse;
  return proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_password_settings_pb.PasswordExpirySettings;
      reader.readMessage(value,zitadel_settings_v2beta_password_settings_pb.PasswordExpirySettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_password_settings_pb.PasswordExpirySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasswordExpirySettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.PasswordExpirySettings}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.PasswordExpirySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_password_settings_pb.PasswordExpirySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.PasswordExpirySettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetPasswordExpirySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetBrandingSettingsRequest;
  return proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_branding_settings_pb.BrandingSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetBrandingSettingsResponse;
  return proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_branding_settings_pb.BrandingSettings;
      reader.readMessage(value,zitadel_settings_v2beta_branding_settings_pb.BrandingSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_branding_settings_pb.BrandingSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BrandingSettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.BrandingSettings}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.BrandingSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_branding_settings_pb.BrandingSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.BrandingSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetBrandingSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetBrandingSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetDomainSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetDomainSettingsRequest;
  return proto.zitadel.settings.v2beta.GetDomainSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetDomainSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetDomainSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_domain_settings_pb.DomainSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetDomainSettingsResponse;
  return proto.zitadel.settings.v2beta.GetDomainSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_domain_settings_pb.DomainSettings;
      reader.readMessage(value,zitadel_settings_v2beta_domain_settings_pb.DomainSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetDomainSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_domain_settings_pb.DomainSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DomainSettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.DomainSettings}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.DomainSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_domain_settings_pb.DomainSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.DomainSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetDomainSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetDomainSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest;
  return proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_legal_settings_pb.LegalAndSupportSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse;
  return proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_legal_settings_pb.LegalAndSupportSettings;
      reader.readMessage(value,zitadel_settings_v2beta_legal_settings_pb.LegalAndSupportSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_legal_settings_pb.LegalAndSupportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LegalAndSupportSettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.LegalAndSupportSettings}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.LegalAndSupportSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_legal_settings_pb.LegalAndSupportSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.LegalAndSupportSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLockoutSettingsRequest;
  return proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_lockout_settings_pb.LockoutSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetLockoutSettingsResponse;
  return proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_lockout_settings_pb.LockoutSettings;
      reader.readMessage(value,zitadel_settings_v2beta_lockout_settings_pb.LockoutSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_lockout_settings_pb.LockoutSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LockoutSettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.LockoutSettings}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.LockoutSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_lockout_settings_pb.LockoutSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.LockoutSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetLockoutSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetLockoutSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2beta_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest;
  return proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2beta.RequestContext}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2beta.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest} returns this
*/
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersRequest.prototype.hasCtx = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.repeatedFields_ = [2];



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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.ListDetails.toObject(includeInstance, f),
identityProvidersList: jspb.Message.toObjectList(msg.getIdentityProvidersList(),
    zitadel_settings_v2beta_login_settings_pb.IdentityProvider.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse;
  return proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_login_settings_pb.IdentityProvider;
      reader.readMessage(value,zitadel_settings_v2beta_login_settings_pb.IdentityProvider.deserializeBinaryFromReader);
      msg.addIdentityProviders(value);
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
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getIdentityProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_settings_v2beta_login_settings_pb.IdentityProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2beta.ListDetails}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.ListDetails|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} returns this
*/
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} returns this
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IdentityProvider identity_providers = 2;
 * @return {!Array<!proto.zitadel.settings.v2beta.IdentityProvider>}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.getIdentityProvidersList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2beta.IdentityProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2beta_login_settings_pb.IdentityProvider, 2));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2beta.IdentityProvider>} value
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} returns this
*/
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.setIdentityProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.settings.v2beta.IdentityProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2beta.IdentityProvider}
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.addIdentityProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.settings.v2beta.IdentityProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse} returns this
 */
proto.zitadel.settings.v2beta.GetActiveIdentityProvidersResponse.prototype.clearIdentityProvidersList = function() {
  return this.setIdentityProvidersList([]);
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
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetGeneralSettingsRequest;
  return proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsRequest}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.repeatedFields_ = [3];



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
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
defaultOrgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultLanguage: jspb.Message.getFieldWithDefault(msg, 2, ""),
supportedLanguagesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetGeneralSettingsResponse;
  return proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLanguage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedLanguages(value);
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
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultLanguage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupportedLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string default_org_id = 1;
 * @return {string}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.getDefaultOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.setDefaultOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string default_language = 2;
 * @return {string}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.getDefaultLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.setDefaultLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string supported_languages = 3;
 * @return {!Array<string>}
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.getSupportedLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.setSupportedLanguagesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.addSupportedLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2beta.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetGeneralSettingsResponse.prototype.clearSupportedLanguagesList = function() {
  return this.setSupportedLanguagesList([]);
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
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetSecuritySettingsRequest;
  return proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2beta_security_settings_pb.SecuritySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.GetSecuritySettingsResponse;
  return proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_security_settings_pb.SecuritySettings;
      reader.readMessage(value,zitadel_settings_v2beta_security_settings_pb.SecuritySettings.deserializeBinaryFromReader);
      msg.setSettings(value);
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
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2beta_security_settings_pb.SecuritySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SecuritySettings settings = 2;
 * @return {?proto.zitadel.settings.v2beta.SecuritySettings}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2beta.SecuritySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_security_settings_pb.SecuritySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2beta.SecuritySettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.GetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.GetSecuritySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
embeddedIframe: (f = msg.getEmbeddedIframe()) && zitadel_settings_v2beta_security_settings_pb.EmbeddedIframeSettings.toObject(includeInstance, f),
enableImpersonation: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.SetSecuritySettingsRequest;
  return proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_settings_v2beta_security_settings_pb.EmbeddedIframeSettings;
      reader.readMessage(value,zitadel_settings_v2beta_security_settings_pb.EmbeddedIframeSettings.deserializeBinaryFromReader);
      msg.setEmbeddedIframe(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableImpersonation(value);
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
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmbeddedIframe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_settings_v2beta_security_settings_pb.EmbeddedIframeSettings.serializeBinaryToWriter
    );
  }
  f = message.getEnableImpersonation();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional EmbeddedIframeSettings embedded_iframe = 1;
 * @return {?proto.zitadel.settings.v2beta.EmbeddedIframeSettings}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.getEmbeddedIframe = function() {
  return /** @type{?proto.zitadel.settings.v2beta.EmbeddedIframeSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2beta_security_settings_pb.EmbeddedIframeSettings, 1));
};


/**
 * @param {?proto.zitadel.settings.v2beta.EmbeddedIframeSettings|undefined} value
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.setEmbeddedIframe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.clearEmbeddedIframe = function() {
  return this.setEmbeddedIframe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.hasEmbeddedIframe = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable_impersonation = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.getEnableImpersonation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsRequest.prototype.setEnableImpersonation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2beta_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.SetSecuritySettingsResponse;
  return proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2beta_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2beta_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2beta_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2beta.Details details = 1;
 * @return {?proto.zitadel.object.v2beta.Details}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2beta.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2beta_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2beta.Details|undefined} value
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.SetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetSecuritySettingsResponse.prototype.hasDetails = function() {
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
organizationScopedUsernames: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest;
  return proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrganizationScopedUsernames(value);
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool organization_scoped_usernames = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.getOrganizationScopedUsernames = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.setOrganizationScopedUsernames = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.clearOrganizationScopedUsernames = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsRequest.prototype.hasOrganizationScopedUsernames = function() {
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
setDate: (f = msg.getSetDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse;
  return proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSetDate(value);
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
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp set_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.SetOrganizationSettingsResponse.prototype.hasSetDate = function() {
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest;
  return proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsRequest.prototype.setOrganizationId = function(value) {
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse;
  return proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.DeleteOrganizationSettingsResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.repeatedFields_ = [4];



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
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_settings_v2beta_organization_settings_pb.OrganizationSettingsSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest;
  return proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationRequest;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.settings.v2beta.OrganizationSettingsFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_settings_v2beta_organization_settings_pb.OrganizationSettingsSearchFilter;
      reader.readMessage(value,zitadel_settings_v2beta_organization_settings_pb.OrganizationSettingsSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.settings.v2beta.OrganizationSettingsFieldName} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      zitadel_settings_v2beta_organization_settings_pb.OrganizationSettingsSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationRequest}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationRequest|undefined} value
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrganizationSettingsFieldName sorting_column = 2;
 * @return {!proto.zitadel.settings.v2beta.OrganizationSettingsFieldName}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.settings.v2beta.OrganizationSettingsFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.settings.v2beta.OrganizationSettingsFieldName} value
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated OrganizationSettingsSearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter>}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2beta_organization_settings_pb.OrganizationSettingsSearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter>} value
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
*/
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.settings.v2beta.OrganizationSettingsSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.repeatedFields_ = [2];



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
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2beta_filter_pb.PaginationResponse.toObject(includeInstance, f),
organizationSettingsList: jspb.Message.toObjectList(msg.getOrganizationSettingsList(),
    zitadel_settings_v2beta_organization_settings_pb.OrganizationSettings.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse;
  return proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2beta_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2beta_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_settings_v2beta_organization_settings_pb.OrganizationSettings;
      reader.readMessage(value,zitadel_settings_v2beta_organization_settings_pb.OrganizationSettings.deserializeBinaryFromReader);
      msg.addOrganizationSettings(value);
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
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2beta_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_settings_v2beta_organization_settings_pb.OrganizationSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2beta.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2beta.PaginationResponse}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2beta.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2beta_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2beta.PaginationResponse|undefined} value
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OrganizationSettings organization_settings = 2;
 * @return {!Array<!proto.zitadel.settings.v2beta.OrganizationSettings>}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.getOrganizationSettingsList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2beta.OrganizationSettings>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2beta_organization_settings_pb.OrganizationSettings, 2));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2beta.OrganizationSettings>} value
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.setOrganizationSettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.settings.v2beta.OrganizationSettings=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2beta.OrganizationSettings}
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.addOrganizationSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.settings.v2beta.OrganizationSettings, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2beta.ListOrganizationSettingsResponse.prototype.clearOrganizationSettingsList = function() {
  return this.setOrganizationSettingsList([]);
};


goog.object.extend(exports, proto.zitadel.settings.v2beta);
