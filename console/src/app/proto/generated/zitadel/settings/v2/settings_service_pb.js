// source: zitadel/settings/v2/settings_service.proto
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
var zitadel_object_v2_object_pb = require('../../../zitadel/object/v2/object_pb.js');
goog.object.extend(proto, zitadel_object_v2_object_pb);
var zitadel_settings_v2_branding_settings_pb = require('../../../zitadel/settings/v2/branding_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_branding_settings_pb);
var zitadel_settings_v2_domain_settings_pb = require('../../../zitadel/settings/v2/domain_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_domain_settings_pb);
var zitadel_settings_v2_legal_settings_pb = require('../../../zitadel/settings/v2/legal_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_legal_settings_pb);
var zitadel_settings_v2_lockout_settings_pb = require('../../../zitadel/settings/v2/lockout_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_lockout_settings_pb);
var zitadel_settings_v2_login_settings_pb = require('../../../zitadel/settings/v2/login_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_login_settings_pb);
var zitadel_settings_v2_password_settings_pb = require('../../../zitadel/settings/v2/password_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_password_settings_pb);
var zitadel_settings_v2_security_settings_pb = require('../../../zitadel/settings/v2/security_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_security_settings_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_field_behavior_pb = require('../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var zitadel_settings_v2_settings_pb = require('../../../zitadel/settings/v2/settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_settings_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var zitadel_filter_v2_filter_pb = require('../../../zitadel/filter/v2/filter_pb.js');
goog.object.extend(proto, zitadel_filter_v2_filter_pb);
var zitadel_settings_v2_organization_settings_pb = require('../../../zitadel/settings/v2/organization_settings_pb.js');
goog.object.extend(proto, zitadel_settings_v2_organization_settings_pb);
goog.exportSymbol('proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetBrandingSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetBrandingSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetDomainSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetDomainSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetGeneralSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetGeneralSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetHostedLoginTranslationRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.LevelCase', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetHostedLoginTranslationResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLockoutSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLockoutSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLoginSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetLoginSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetSecuritySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.GetSecuritySettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.ListOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.ListOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetHostedLoginTranslationRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.LevelCase', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetHostedLoginTranslationResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetOrganizationSettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetOrganizationSettingsResponse', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetSecuritySettingsRequest', null, global);
goog.exportSymbol('proto.zitadel.settings.v2.SetSecuritySettingsResponse', null, global);
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
proto.zitadel.settings.v2.GetLoginSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLoginSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLoginSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetLoginSettingsRequest';
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
proto.zitadel.settings.v2.GetLoginSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLoginSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLoginSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetLoginSettingsResponse';
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.displayName = 'proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest';
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.displayName = 'proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse';
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.displayName = 'proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest';
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.displayName = 'proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse';
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
proto.zitadel.settings.v2.GetBrandingSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetBrandingSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetBrandingSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetBrandingSettingsRequest';
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
proto.zitadel.settings.v2.GetBrandingSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetBrandingSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetBrandingSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetBrandingSettingsResponse';
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
proto.zitadel.settings.v2.GetDomainSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetDomainSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetDomainSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetDomainSettingsRequest';
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
proto.zitadel.settings.v2.GetDomainSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetDomainSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetDomainSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetDomainSettingsResponse';
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest';
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse';
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
proto.zitadel.settings.v2.GetLockoutSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLockoutSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLockoutSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetLockoutSettingsRequest';
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
proto.zitadel.settings.v2.GetLockoutSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetLockoutSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetLockoutSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetLockoutSettingsResponse';
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
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.displayName = 'proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest';
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
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.displayName = 'proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse';
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
proto.zitadel.settings.v2.GetGeneralSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetGeneralSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetGeneralSettingsRequest.displayName = 'proto.zitadel.settings.v2.GetGeneralSettingsRequest';
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
proto.zitadel.settings.v2.GetGeneralSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2.GetGeneralSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2.GetGeneralSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetGeneralSettingsResponse.displayName = 'proto.zitadel.settings.v2.GetGeneralSettingsResponse';
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
proto.zitadel.settings.v2.GetSecuritySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetSecuritySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetSecuritySettingsRequest.displayName = 'proto.zitadel.settings.v2.GetSecuritySettingsRequest';
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
proto.zitadel.settings.v2.GetSecuritySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetSecuritySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetSecuritySettingsResponse.displayName = 'proto.zitadel.settings.v2.GetSecuritySettingsResponse';
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
proto.zitadel.settings.v2.SetSecuritySettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.SetSecuritySettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetSecuritySettingsRequest.displayName = 'proto.zitadel.settings.v2.SetSecuritySettingsRequest';
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
proto.zitadel.settings.v2.SetSecuritySettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.SetSecuritySettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetSecuritySettingsResponse.displayName = 'proto.zitadel.settings.v2.SetSecuritySettingsResponse';
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
proto.zitadel.settings.v2.SetOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.SetOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2.SetOrganizationSettingsRequest';
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
proto.zitadel.settings.v2.SetOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.SetOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2.SetOrganizationSettingsResponse';
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest';
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse';
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
proto.zitadel.settings.v2.ListOrganizationSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2.ListOrganizationSettingsRequest.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2.ListOrganizationSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.ListOrganizationSettingsRequest.displayName = 'proto.zitadel.settings.v2.ListOrganizationSettingsRequest';
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
proto.zitadel.settings.v2.ListOrganizationSettingsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.settings.v2.ListOrganizationSettingsResponse.repeatedFields_, null);
};
goog.inherits(proto.zitadel.settings.v2.ListOrganizationSettingsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.ListOrganizationSettingsResponse.displayName = 'proto.zitadel.settings.v2.ListOrganizationSettingsResponse';
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
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.settings.v2.GetHostedLoginTranslationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.displayName = 'proto.zitadel.settings.v2.GetHostedLoginTranslationRequest';
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
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.GetHostedLoginTranslationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.displayName = 'proto.zitadel.settings.v2.GetHostedLoginTranslationResponse';
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
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_);
};
goog.inherits(proto.zitadel.settings.v2.SetHostedLoginTranslationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.displayName = 'proto.zitadel.settings.v2.SetHostedLoginTranslationRequest';
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
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.settings.v2.SetHostedLoginTranslationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.displayName = 'proto.zitadel.settings.v2.SetHostedLoginTranslationResponse';
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
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLoginSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsRequest}
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLoginSettingsRequest;
  return proto.zitadel.settings.v2.GetLoginSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsRequest}
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLoginSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLoginSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLoginSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_login_settings_pb.LoginSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLoginSettingsResponse;
  return proto.zitadel.settings.v2.GetLoginSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_login_settings_pb.LoginSettings;
      reader.readMessage(value,zitadel_settings_v2_login_settings_pb.LoginSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLoginSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLoginSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_login_settings_pb.LoginSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoginSettings settings = 2;
 * @return {?proto.zitadel.settings.v2.LoginSettings}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.LoginSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_login_settings_pb.LoginSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.LoginSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLoginSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLoginSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest;
  return proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_password_settings_pb.PasswordComplexitySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse;
  return proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_password_settings_pb.PasswordComplexitySettings;
      reader.readMessage(value,zitadel_settings_v2_password_settings_pb.PasswordComplexitySettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_password_settings_pb.PasswordComplexitySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasswordComplexitySettings settings = 2;
 * @return {?proto.zitadel.settings.v2.PasswordComplexitySettings}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.PasswordComplexitySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_password_settings_pb.PasswordComplexitySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.PasswordComplexitySettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordComplexitySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest;
  return proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_password_settings_pb.PasswordExpirySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse;
  return proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_password_settings_pb.PasswordExpirySettings;
      reader.readMessage(value,zitadel_settings_v2_password_settings_pb.PasswordExpirySettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_password_settings_pb.PasswordExpirySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PasswordExpirySettings settings = 2;
 * @return {?proto.zitadel.settings.v2.PasswordExpirySettings}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.PasswordExpirySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_password_settings_pb.PasswordExpirySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.PasswordExpirySettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetPasswordExpirySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetBrandingSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsRequest}
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetBrandingSettingsRequest;
  return proto.zitadel.settings.v2.GetBrandingSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsRequest}
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetBrandingSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetBrandingSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetBrandingSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_branding_settings_pb.BrandingSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetBrandingSettingsResponse;
  return proto.zitadel.settings.v2.GetBrandingSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_branding_settings_pb.BrandingSettings;
      reader.readMessage(value,zitadel_settings_v2_branding_settings_pb.BrandingSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetBrandingSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_branding_settings_pb.BrandingSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BrandingSettings settings = 2;
 * @return {?proto.zitadel.settings.v2.BrandingSettings}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.BrandingSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_branding_settings_pb.BrandingSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.BrandingSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetBrandingSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetBrandingSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetDomainSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsRequest}
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetDomainSettingsRequest;
  return proto.zitadel.settings.v2.GetDomainSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsRequest}
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetDomainSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetDomainSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetDomainSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_domain_settings_pb.DomainSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetDomainSettingsResponse;
  return proto.zitadel.settings.v2.GetDomainSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_domain_settings_pb.DomainSettings;
      reader.readMessage(value,zitadel_settings_v2_domain_settings_pb.DomainSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetDomainSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetDomainSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_domain_settings_pb.DomainSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DomainSettings settings = 2;
 * @return {?proto.zitadel.settings.v2.DomainSettings}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.DomainSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_domain_settings_pb.DomainSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.DomainSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetDomainSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetDomainSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest;
  return proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_legal_settings_pb.LegalAndSupportSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse;
  return proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_legal_settings_pb.LegalAndSupportSettings;
      reader.readMessage(value,zitadel_settings_v2_legal_settings_pb.LegalAndSupportSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_legal_settings_pb.LegalAndSupportSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LegalAndSupportSettings settings = 2;
 * @return {?proto.zitadel.settings.v2.LegalAndSupportSettings}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.LegalAndSupportSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_legal_settings_pb.LegalAndSupportSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.LegalAndSupportSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLegalAndSupportSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLockoutSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsRequest}
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLockoutSettingsRequest;
  return proto.zitadel.settings.v2.GetLockoutSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsRequest}
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLockoutSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsRequest} returns this
*/
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsRequest} returns this
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLockoutSettingsRequest.prototype.hasCtx = function() {
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
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetLockoutSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_lockout_settings_pb.LockoutSettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetLockoutSettingsResponse;
  return proto.zitadel.settings.v2.GetLockoutSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_lockout_settings_pb.LockoutSettings;
      reader.readMessage(value,zitadel_settings_v2_lockout_settings_pb.LockoutSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetLockoutSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_lockout_settings_pb.LockoutSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LockoutSettings settings = 2;
 * @return {?proto.zitadel.settings.v2.LockoutSettings}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.LockoutSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_lockout_settings_pb.LockoutSettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.LockoutSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetLockoutSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetLockoutSettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ctx: (f = msg.getCtx()) && zitadel_object_v2_object_pb.RequestContext.toObject(includeInstance, f),
creationAllowed: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
linkingAllowed: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
autoCreation: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
autoLinking: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest;
  return proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.RequestContext;
      reader.readMessage(value,zitadel_object_v2_object_pb.RequestContext.deserializeBinaryFromReader);
      msg.setCtx(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreationAllowed(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLinkingAllowed(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoCreation(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoLinking(value);
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
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.RequestContext.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional zitadel.object.v2.RequestContext ctx = 1;
 * @return {?proto.zitadel.object.v2.RequestContext}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.getCtx = function() {
  return /** @type{?proto.zitadel.object.v2.RequestContext} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.RequestContext, 1));
};


/**
 * @param {?proto.zitadel.object.v2.RequestContext|undefined} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
*/
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.setCtx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.clearCtx = function() {
  return this.setCtx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.hasCtx = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool creation_allowed = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.getCreationAllowed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.setCreationAllowed = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.clearCreationAllowed = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.hasCreationAllowed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool linking_allowed = 3;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.getLinkingAllowed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.setLinkingAllowed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.clearLinkingAllowed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.hasLinkingAllowed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool auto_creation = 4;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.getAutoCreation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.setAutoCreation = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.clearAutoCreation = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.hasAutoCreation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool auto_linking = 5;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.getAutoLinking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.setAutoLinking = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.clearAutoLinking = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersRequest.prototype.hasAutoLinking = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.repeatedFields_ = [2];



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
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.ListDetails.toObject(includeInstance, f),
identityProvidersList: jspb.Message.toObjectList(msg.getIdentityProvidersList(),
    zitadel_settings_v2_login_settings_pb.IdentityProvider.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse;
  return proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.ListDetails;
      reader.readMessage(value,zitadel_object_v2_object_pb.ListDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_login_settings_pb.IdentityProvider;
      reader.readMessage(value,zitadel_settings_v2_login_settings_pb.IdentityProvider.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.ListDetails.serializeBinaryToWriter
    );
  }
  f = message.getIdentityProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_settings_v2_login_settings_pb.IdentityProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.ListDetails details = 1;
 * @return {?proto.zitadel.object.v2.ListDetails}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.ListDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.ListDetails, 1));
};


/**
 * @param {?proto.zitadel.object.v2.ListDetails|undefined} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} returns this
*/
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IdentityProvider identity_providers = 2;
 * @return {!Array<!proto.zitadel.settings.v2.IdentityProvider>}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.getIdentityProvidersList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2.IdentityProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2_login_settings_pb.IdentityProvider, 2));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2.IdentityProvider>} value
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} returns this
*/
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.setIdentityProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.settings.v2.IdentityProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2.IdentityProvider}
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.addIdentityProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.settings.v2.IdentityProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse} returns this
 */
proto.zitadel.settings.v2.GetActiveIdentityProvidersResponse.prototype.clearIdentityProvidersList = function() {
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
proto.zitadel.settings.v2.GetGeneralSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetGeneralSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetGeneralSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsRequest}
 */
proto.zitadel.settings.v2.GetGeneralSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetGeneralSettingsRequest;
  return proto.zitadel.settings.v2.GetGeneralSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsRequest}
 */
proto.zitadel.settings.v2.GetGeneralSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.GetGeneralSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetGeneralSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetGeneralSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.repeatedFields_ = [3];



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
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetGeneralSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
defaultOrgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
defaultLanguage: jspb.Message.getFieldWithDefault(msg, 2, ""),
supportedLanguagesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
defaultOrganizationId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetGeneralSettingsResponse;
  return proto.zitadel.settings.v2.GetGeneralSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultOrganizationId(value);
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
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetGeneralSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDefaultOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string default_org_id = 1;
 * @return {string}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.getDefaultOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.setDefaultOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string default_language = 2;
 * @return {string}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.getDefaultLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.setDefaultLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string supported_languages = 3;
 * @return {!Array<string>}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.getSupportedLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.setSupportedLanguagesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.addSupportedLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.clearSupportedLanguagesList = function() {
  return this.setSupportedLanguagesList([]);
};


/**
 * optional string default_organization_id = 4;
 * @return {string}
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.getDefaultOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetGeneralSettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetGeneralSettingsResponse.prototype.setDefaultOrganizationId = function(value) {
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
proto.zitadel.settings.v2.GetSecuritySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetSecuritySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetSecuritySettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2.GetSecuritySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetSecuritySettingsRequest;
  return proto.zitadel.settings.v2.GetSecuritySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2.GetSecuritySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.GetSecuritySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetSecuritySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetSecuritySettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetSecuritySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f),
settings: (f = msg.getSettings()) && zitadel_settings_v2_security_settings_pb.SecuritySettings.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetSecuritySettingsResponse;
  return proto.zitadel.settings.v2.GetSecuritySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_security_settings_pb.SecuritySettings;
      reader.readMessage(value,zitadel_settings_v2_security_settings_pb.SecuritySettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetSecuritySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_settings_v2_security_settings_pb.SecuritySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SecuritySettings settings = 2;
 * @return {?proto.zitadel.settings.v2.SecuritySettings}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.getSettings = function() {
  return /** @type{?proto.zitadel.settings.v2.SecuritySettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_security_settings_pb.SecuritySettings, 2));
};


/**
 * @param {?proto.zitadel.settings.v2.SecuritySettings|undefined} value
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetSecuritySettingsResponse.prototype.hasSettings = function() {
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
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetSecuritySettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
embeddedIframe: (f = msg.getEmbeddedIframe()) && zitadel_settings_v2_security_settings_pb.EmbeddedIframeSettings.toObject(includeInstance, f),
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
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetSecuritySettingsRequest;
  return proto.zitadel.settings.v2.SetSecuritySettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsRequest}
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_settings_v2_security_settings_pb.EmbeddedIframeSettings;
      reader.readMessage(value,zitadel_settings_v2_security_settings_pb.EmbeddedIframeSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetSecuritySettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmbeddedIframe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_settings_v2_security_settings_pb.EmbeddedIframeSettings.serializeBinaryToWriter
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
 * @return {?proto.zitadel.settings.v2.EmbeddedIframeSettings}
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.getEmbeddedIframe = function() {
  return /** @type{?proto.zitadel.settings.v2.EmbeddedIframeSettings} */ (
    jspb.Message.getWrapperField(this, zitadel_settings_v2_security_settings_pb.EmbeddedIframeSettings, 1));
};


/**
 * @param {?proto.zitadel.settings.v2.EmbeddedIframeSettings|undefined} value
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} returns this
*/
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.setEmbeddedIframe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} returns this
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.clearEmbeddedIframe = function() {
  return this.setEmbeddedIframe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.hasEmbeddedIframe = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable_impersonation = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.getEnableImpersonation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsRequest} returns this
 */
proto.zitadel.settings.v2.SetSecuritySettingsRequest.prototype.setEnableImpersonation = function(value) {
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
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetSecuritySettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
details: (f = msg.getDetails()) && zitadel_object_v2_object_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetSecuritySettingsResponse;
  return proto.zitadel.settings.v2.SetSecuritySettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsResponse}
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_object_v2_object_pb.Details;
      reader.readMessage(value,zitadel_object_v2_object_pb.Details.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetSecuritySettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetSecuritySettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_object_v2_object_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.object.v2.Details details = 1;
 * @return {?proto.zitadel.object.v2.Details}
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.object.v2.Details} */ (
    jspb.Message.getWrapperField(this, zitadel_object_v2_object_pb.Details, 1));
};


/**
 * @param {?proto.zitadel.object.v2.Details|undefined} value
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsResponse} returns this
*/
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetSecuritySettingsResponse} returns this
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetSecuritySettingsResponse.prototype.hasDetails = function() {
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
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetOrganizationSettingsRequest;
  return proto.zitadel.settings.v2.SetOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool organization_scoped_usernames = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.getOrganizationScopedUsernames = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.setOrganizationScopedUsernames = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.clearOrganizationScopedUsernames = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsRequest.prototype.hasOrganizationScopedUsernames = function() {
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
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetOrganizationSettingsResponse;
  return proto.zitadel.settings.v2.SetOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.getSetDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.setSetDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.clearSetDate = function() {
  return this.setSetDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetOrganizationSettingsResponse.prototype.hasSetDate = function() {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest;
  return proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsRequest.prototype.setOrganizationId = function(value) {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse;
  return proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.getDeletionDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.setDeletionDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.clearDeletionDate = function() {
  return this.setDeletionDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.DeleteOrganizationSettingsResponse.prototype.hasDeletionDate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.repeatedFields_ = [4];



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
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.ListOrganizationSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationRequest.toObject(includeInstance, f),
sortingColumn: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    zitadel_settings_v2_organization_settings_pb.OrganizationSettingsSearchFilter.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.ListOrganizationSettingsRequest;
  return proto.zitadel.settings.v2.ListOrganizationSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.settings.v2.OrganizationSettingsFieldName} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = new zitadel_settings_v2_organization_settings_pb.OrganizationSettingsSearchFilter;
      reader.readMessage(value,zitadel_settings_v2_organization_settings_pb.OrganizationSettingsSearchFilter.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.ListOrganizationSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationRequest.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.zitadel.settings.v2.OrganizationSettingsFieldName} */ (jspb.Message.getField(message, 2));
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
      zitadel_settings_v2_organization_settings_pb.OrganizationSettingsSearchFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationRequest pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationRequest}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationRequest} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationRequest, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationRequest|undefined} value
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
*/
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrganizationSettingsFieldName sorting_column = 2;
 * @return {!proto.zitadel.settings.v2.OrganizationSettingsFieldName}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.zitadel.settings.v2.OrganizationSettingsFieldName} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.settings.v2.OrganizationSettingsFieldName} value
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.setSortingColumn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.clearSortingColumn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.hasSortingColumn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated OrganizationSettingsSearchFilter filters = 4;
 * @return {!Array<!proto.zitadel.settings.v2.OrganizationSettingsSearchFilter>}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2.OrganizationSettingsSearchFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2_organization_settings_pb.OrganizationSettingsSearchFilter, 4));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2.OrganizationSettingsSearchFilter>} value
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
*/
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.zitadel.settings.v2.OrganizationSettingsSearchFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2.OrganizationSettingsSearchFilter}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.zitadel.settings.v2.OrganizationSettingsSearchFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsRequest} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.repeatedFields_ = [2];



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
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.ListOrganizationSettingsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && zitadel_filter_v2_filter_pb.PaginationResponse.toObject(includeInstance, f),
organizationSettingsList: jspb.Message.toObjectList(msg.getOrganizationSettingsList(),
    zitadel_settings_v2_organization_settings_pb.OrganizationSettings.toObject, includeInstance)
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
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.ListOrganizationSettingsResponse;
  return proto.zitadel.settings.v2.ListOrganizationSettingsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zitadel_filter_v2_filter_pb.PaginationResponse;
      reader.readMessage(value,zitadel_filter_v2_filter_pb.PaginationResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    case 2:
      var value = new zitadel_settings_v2_organization_settings_pb.OrganizationSettings;
      reader.readMessage(value,zitadel_settings_v2_organization_settings_pb.OrganizationSettings.deserializeBinaryFromReader);
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
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.ListOrganizationSettingsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      zitadel_filter_v2_filter_pb.PaginationResponse.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      zitadel_settings_v2_organization_settings_pb.OrganizationSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional zitadel.filter.v2.PaginationResponse pagination = 1;
 * @return {?proto.zitadel.filter.v2.PaginationResponse}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.getPagination = function() {
  return /** @type{?proto.zitadel.filter.v2.PaginationResponse} */ (
    jspb.Message.getWrapperField(this, zitadel_filter_v2_filter_pb.PaginationResponse, 1));
};


/**
 * @param {?proto.zitadel.filter.v2.PaginationResponse|undefined} value
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OrganizationSettings organization_settings = 2;
 * @return {!Array<!proto.zitadel.settings.v2.OrganizationSettings>}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.getOrganizationSettingsList = function() {
  return /** @type{!Array<!proto.zitadel.settings.v2.OrganizationSettings>} */ (
    jspb.Message.getRepeatedWrapperField(this, zitadel_settings_v2_organization_settings_pb.OrganizationSettings, 2));
};


/**
 * @param {!Array<!proto.zitadel.settings.v2.OrganizationSettings>} value
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} returns this
*/
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.setOrganizationSettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zitadel.settings.v2.OrganizationSettings=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.settings.v2.OrganizationSettings}
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.addOrganizationSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zitadel.settings.v2.OrganizationSettings, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.settings.v2.ListOrganizationSettingsResponse} returns this
 */
proto.zitadel.settings.v2.ListOrganizationSettingsResponse.prototype.clearOrganizationSettingsList = function() {
  return this.setOrganizationSettingsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.LevelCase = {
  LEVEL_NOT_SET: 0,
  SYSTEM: 1,
  INSTANCE: 2,
  ORGANIZATION_ID: 3
};

/**
 * @return {proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.LevelCase}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getLevelCase = function() {
  return /** @type {proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.LevelCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0]));
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
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
system: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
instance: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
organizationId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
locale: jspb.Message.getFieldWithDefault(msg, 4, ""),
ignoreInheritance: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetHostedLoginTranslationRequest;
  return proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSystem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInstance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreInheritance(value);
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
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIgnoreInheritance();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool system = 1;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.setSystem = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.clearSystem = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.hasSystem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool instance = 2;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getInstance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.clearInstance = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string organization_id = 3;
 * @return {string}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setOneofField(this, 3, proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string locale = 4;
 * @return {string}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool ignore_inheritance = 5;
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.getIgnoreInheritance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationRequest.prototype.setIgnoreInheritance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
etag: jspb.Message.getFieldWithDefault(msg, 1, ""),
translations: (f = msg.getTranslations()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.GetHostedLoginTranslationResponse;
  return proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setTranslations(value);
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
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTranslations();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string etag = 1;
 * @return {string}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct translations = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.getTranslations = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} returns this
*/
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.setTranslations = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.GetHostedLoginTranslationResponse} returns this
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.clearTranslations = function() {
  return this.setTranslations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.GetHostedLoginTranslationResponse.prototype.hasTranslations = function() {
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
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.LevelCase = {
  LEVEL_NOT_SET: 0,
  INSTANCE: 1,
  ORGANIZATION_ID: 2
};

/**
 * @return {proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.LevelCase}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.getLevelCase = function() {
  return /** @type {proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.LevelCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_[0]));
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
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instance: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
organizationId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
locale: jspb.Message.getFieldWithDefault(msg, 3, ""),
translations: (f = msg.getTranslations()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetHostedLoginTranslationRequest;
  return proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocale(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setTranslations(value);
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
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = message.getLocale();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTranslations();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool instance = 1;
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.getInstance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.setInstance = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.clearInstance = function() {
  return jspb.Message.setOneofField(this, 1, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setOneofField(this, 2, proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string locale = 3;
 * @return {string}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.getLocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.setLocale = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Struct translations = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.getTranslations = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
*/
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.setTranslations = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationRequest} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.clearTranslations = function() {
  return this.setTranslations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationRequest.prototype.hasTranslations = function() {
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
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
etag: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.settings.v2.SetHostedLoginTranslationResponse;
  return proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
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
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string etag = 1;
 * @return {string}
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.settings.v2.SetHostedLoginTranslationResponse} returns this
 */
proto.zitadel.settings.v2.SetHostedLoginTranslationResponse.prototype.setEtag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.zitadel.settings.v2);
