// source: zitadel/user.proto
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

var zitadel_object_pb = require('../zitadel/object_pb.js');
goog.object.extend(proto, zitadel_object_pb);
var validate_validate_pb = require('../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
goog.exportSymbol('proto.zitadel.user.v1.AccessTokenType', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AndQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactor', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactor.TypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactorOTP', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactorOTPEmail', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactorOTPSMS', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactorState', null, global);
goog.exportSymbol('proto.zitadel.user.v1.AuthFactorU2F', null, global);
goog.exportSymbol('proto.zitadel.user.v1.DisplayNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Email', null, global);
goog.exportSymbol('proto.zitadel.user.v1.EmailQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.FirstNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Gender', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Human', null, global);
goog.exportSymbol('proto.zitadel.user.v1.InUserEmailsQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.InUserIDQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.LastNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.LoginNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Machine', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Membership', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Membership.TypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipIAMQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipOrgQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipProjectGrantQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipProjectQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.MembershipQuery.QueryCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.NickNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.NotQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.OrQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.PersonalAccessToken', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Phone', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Profile', null, global);
goog.exportSymbol('proto.zitadel.user.v1.RefreshToken', null, global);
goog.exportSymbol('proto.zitadel.user.v1.SearchQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.SearchQuery.QueryCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Session', null, global);
goog.exportSymbol('proto.zitadel.user.v1.SessionState', null, global);
goog.exportSymbol('proto.zitadel.user.v1.StateQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.Type', null, global);
goog.exportSymbol('proto.zitadel.user.v1.TypeQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.User', null, global);
goog.exportSymbol('proto.zitadel.user.v1.User.TypeCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserFieldName', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrant', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantDisplayNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantEmailQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantFirstNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantInUserIDsQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantLastNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantOrgDomainQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantOrgNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantProjectGrantIDQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantProjectIDQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantProjectNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantQuery.QueryCase', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantRoleKeyQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantState', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantUserIDQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantUserNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantUserTypeQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserGrantWithGrantedQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserNameQuery', null, global);
goog.exportSymbol('proto.zitadel.user.v1.UserState', null, global);
goog.exportSymbol('proto.zitadel.user.v1.WebAuthNKey', null, global);
goog.exportSymbol('proto.zitadel.user.v1.WebAuthNToken', null, global);
goog.exportSymbol('proto.zitadel.user.v1.WebAuthNVerification', null, global);
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
proto.zitadel.user.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.User.repeatedFields_, proto.zitadel.user.v1.User.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.User.displayName = 'proto.zitadel.user.v1.User';
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
proto.zitadel.user.v1.Human = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Human, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Human.displayName = 'proto.zitadel.user.v1.Human';
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
proto.zitadel.user.v1.Machine = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Machine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Machine.displayName = 'proto.zitadel.user.v1.Machine';
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
proto.zitadel.user.v1.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Profile.displayName = 'proto.zitadel.user.v1.Profile';
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
proto.zitadel.user.v1.Email = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Email, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Email.displayName = 'proto.zitadel.user.v1.Email';
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
proto.zitadel.user.v1.Phone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Phone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Phone.displayName = 'proto.zitadel.user.v1.Phone';
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
proto.zitadel.user.v1.SearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v1.SearchQuery.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.SearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.SearchQuery.displayName = 'proto.zitadel.user.v1.SearchQuery';
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
proto.zitadel.user.v1.OrQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.OrQuery.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.OrQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.OrQuery.displayName = 'proto.zitadel.user.v1.OrQuery';
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
proto.zitadel.user.v1.AndQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.AndQuery.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.AndQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AndQuery.displayName = 'proto.zitadel.user.v1.AndQuery';
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
proto.zitadel.user.v1.NotQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.NotQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.NotQuery.displayName = 'proto.zitadel.user.v1.NotQuery';
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
proto.zitadel.user.v1.InUserIDQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.InUserIDQuery.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.InUserIDQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.InUserIDQuery.displayName = 'proto.zitadel.user.v1.InUserIDQuery';
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
proto.zitadel.user.v1.InUserEmailsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.InUserEmailsQuery.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.InUserEmailsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.InUserEmailsQuery.displayName = 'proto.zitadel.user.v1.InUserEmailsQuery';
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
proto.zitadel.user.v1.UserNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserNameQuery.displayName = 'proto.zitadel.user.v1.UserNameQuery';
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
proto.zitadel.user.v1.FirstNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.FirstNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.FirstNameQuery.displayName = 'proto.zitadel.user.v1.FirstNameQuery';
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
proto.zitadel.user.v1.LastNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.LastNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.LastNameQuery.displayName = 'proto.zitadel.user.v1.LastNameQuery';
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
proto.zitadel.user.v1.NickNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.NickNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.NickNameQuery.displayName = 'proto.zitadel.user.v1.NickNameQuery';
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
proto.zitadel.user.v1.DisplayNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.DisplayNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.DisplayNameQuery.displayName = 'proto.zitadel.user.v1.DisplayNameQuery';
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
proto.zitadel.user.v1.EmailQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.EmailQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.EmailQuery.displayName = 'proto.zitadel.user.v1.EmailQuery';
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
proto.zitadel.user.v1.LoginNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.LoginNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.LoginNameQuery.displayName = 'proto.zitadel.user.v1.LoginNameQuery';
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
proto.zitadel.user.v1.StateQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.StateQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.StateQuery.displayName = 'proto.zitadel.user.v1.StateQuery';
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
proto.zitadel.user.v1.TypeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.TypeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.TypeQuery.displayName = 'proto.zitadel.user.v1.TypeQuery';
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
proto.zitadel.user.v1.AuthFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v1.AuthFactor.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.AuthFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AuthFactor.displayName = 'proto.zitadel.user.v1.AuthFactor';
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
proto.zitadel.user.v1.AuthFactorOTP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.AuthFactorOTP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AuthFactorOTP.displayName = 'proto.zitadel.user.v1.AuthFactorOTP';
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
proto.zitadel.user.v1.AuthFactorOTPSMS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.AuthFactorOTPSMS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AuthFactorOTPSMS.displayName = 'proto.zitadel.user.v1.AuthFactorOTPSMS';
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
proto.zitadel.user.v1.AuthFactorOTPEmail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.AuthFactorOTPEmail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AuthFactorOTPEmail.displayName = 'proto.zitadel.user.v1.AuthFactorOTPEmail';
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
proto.zitadel.user.v1.AuthFactorU2F = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.AuthFactorU2F, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.AuthFactorU2F.displayName = 'proto.zitadel.user.v1.AuthFactorU2F';
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
proto.zitadel.user.v1.WebAuthNKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.WebAuthNKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.WebAuthNKey.displayName = 'proto.zitadel.user.v1.WebAuthNKey';
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
proto.zitadel.user.v1.WebAuthNVerification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.WebAuthNVerification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.WebAuthNVerification.displayName = 'proto.zitadel.user.v1.WebAuthNVerification';
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
proto.zitadel.user.v1.WebAuthNToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.WebAuthNToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.WebAuthNToken.displayName = 'proto.zitadel.user.v1.WebAuthNToken';
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
proto.zitadel.user.v1.Membership = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.Membership.repeatedFields_, proto.zitadel.user.v1.Membership.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.Membership, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Membership.displayName = 'proto.zitadel.user.v1.Membership';
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
proto.zitadel.user.v1.MembershipQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v1.MembershipQuery.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.MembershipQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.MembershipQuery.displayName = 'proto.zitadel.user.v1.MembershipQuery';
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
proto.zitadel.user.v1.MembershipOrgQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.MembershipOrgQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.MembershipOrgQuery.displayName = 'proto.zitadel.user.v1.MembershipOrgQuery';
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
proto.zitadel.user.v1.MembershipProjectQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.MembershipProjectQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.MembershipProjectQuery.displayName = 'proto.zitadel.user.v1.MembershipProjectQuery';
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
proto.zitadel.user.v1.MembershipProjectGrantQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.MembershipProjectGrantQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.MembershipProjectGrantQuery.displayName = 'proto.zitadel.user.v1.MembershipProjectGrantQuery';
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
proto.zitadel.user.v1.MembershipIAMQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.MembershipIAMQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.MembershipIAMQuery.displayName = 'proto.zitadel.user.v1.MembershipIAMQuery';
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
proto.zitadel.user.v1.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.Session.displayName = 'proto.zitadel.user.v1.Session';
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
proto.zitadel.user.v1.RefreshToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.RefreshToken.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.RefreshToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.RefreshToken.displayName = 'proto.zitadel.user.v1.RefreshToken';
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
proto.zitadel.user.v1.PersonalAccessToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.PersonalAccessToken.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.PersonalAccessToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.PersonalAccessToken.displayName = 'proto.zitadel.user.v1.PersonalAccessToken';
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
proto.zitadel.user.v1.UserGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.UserGrant.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrant.displayName = 'proto.zitadel.user.v1.UserGrant';
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
proto.zitadel.user.v1.UserGrantQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_);
};
goog.inherits(proto.zitadel.user.v1.UserGrantQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantQuery.displayName = 'proto.zitadel.user.v1.UserGrantQuery';
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
proto.zitadel.user.v1.UserGrantProjectIDQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantProjectIDQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantProjectIDQuery.displayName = 'proto.zitadel.user.v1.UserGrantProjectIDQuery';
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
proto.zitadel.user.v1.UserGrantUserIDQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantUserIDQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantUserIDQuery.displayName = 'proto.zitadel.user.v1.UserGrantUserIDQuery';
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
proto.zitadel.user.v1.UserGrantInUserIDsQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zitadel.user.v1.UserGrantInUserIDsQuery.repeatedFields_, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantInUserIDsQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantInUserIDsQuery.displayName = 'proto.zitadel.user.v1.UserGrantInUserIDsQuery';
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
proto.zitadel.user.v1.UserGrantWithGrantedQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantWithGrantedQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantWithGrantedQuery.displayName = 'proto.zitadel.user.v1.UserGrantWithGrantedQuery';
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
proto.zitadel.user.v1.UserGrantRoleKeyQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantRoleKeyQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantRoleKeyQuery.displayName = 'proto.zitadel.user.v1.UserGrantRoleKeyQuery';
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
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantProjectGrantIDQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.displayName = 'proto.zitadel.user.v1.UserGrantProjectGrantIDQuery';
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
proto.zitadel.user.v1.UserGrantUserNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantUserNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantUserNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantUserNameQuery';
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
proto.zitadel.user.v1.UserGrantFirstNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantFirstNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantFirstNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantFirstNameQuery';
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
proto.zitadel.user.v1.UserGrantLastNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantLastNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantLastNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantLastNameQuery';
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
proto.zitadel.user.v1.UserGrantEmailQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantEmailQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantEmailQuery.displayName = 'proto.zitadel.user.v1.UserGrantEmailQuery';
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
proto.zitadel.user.v1.UserGrantOrgNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantOrgNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantOrgNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantOrgNameQuery';
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
proto.zitadel.user.v1.UserGrantOrgDomainQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantOrgDomainQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantOrgDomainQuery.displayName = 'proto.zitadel.user.v1.UserGrantOrgDomainQuery';
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
proto.zitadel.user.v1.UserGrantProjectNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantProjectNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantProjectNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantProjectNameQuery';
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
proto.zitadel.user.v1.UserGrantDisplayNameQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantDisplayNameQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantDisplayNameQuery.displayName = 'proto.zitadel.user.v1.UserGrantDisplayNameQuery';
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
proto.zitadel.user.v1.UserGrantUserTypeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zitadel.user.v1.UserGrantUserTypeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zitadel.user.v1.UserGrantUserTypeQuery.displayName = 'proto.zitadel.user.v1.UserGrantUserTypeQuery';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.User.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.User.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.User.TypeCase = {
  TYPE_NOT_SET: 0,
  HUMAN: 7,
  MACHINE: 8
};

/**
 * @return {proto.zitadel.user.v1.User.TypeCase}
 */
proto.zitadel.user.v1.User.prototype.getTypeCase = function() {
  return /** @type {proto.zitadel.user.v1.User.TypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.User.oneofGroups_[0]));
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
proto.zitadel.user.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
state: jspb.Message.getFieldWithDefault(msg, 3, 0),
userName: jspb.Message.getFieldWithDefault(msg, 4, ""),
loginNamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
preferredLoginName: jspb.Message.getFieldWithDefault(msg, 6, ""),
human: (f = msg.getHuman()) && proto.zitadel.user.v1.Human.toObject(includeInstance, f),
machine: (f = msg.getMachine()) && proto.zitadel.user.v1.Machine.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.User}
 */
proto.zitadel.user.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.User;
  return proto.zitadel.user.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.User}
 */
proto.zitadel.user.v1.User.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.user.v1.UserState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addLoginNames(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLoginName(value);
      break;
    case 7:
      var value = new proto.zitadel.user.v1.Human;
      reader.readMessage(value,proto.zitadel.user.v1.Human.deserializeBinaryFromReader);
      msg.setHuman(value);
      break;
    case 8:
      var value = new proto.zitadel.user.v1.Machine;
      reader.readMessage(value,proto.zitadel.user.v1.Machine.deserializeBinaryFromReader);
      msg.setMachine(value);
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
proto.zitadel.user.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLoginNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getPreferredLoginName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.zitadel.user.v1.Human.serializeBinaryToWriter
    );
  }
  f = message.getMachine();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.zitadel.user.v1.Machine.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.User.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.User} returns this
*/
proto.zitadel.user.v1.User.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.User.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UserState state = 3;
 * @return {!proto.zitadel.user.v1.UserState}
 */
proto.zitadel.user.v1.User.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.UserState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.user.v1.UserState} value
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string user_name = 4;
 * @return {string}
 */
proto.zitadel.user.v1.User.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string login_names = 5;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.User.prototype.getLoginNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.setLoginNamesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.addLoginNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.clearLoginNamesList = function() {
  return this.setLoginNamesList([]);
};


/**
 * optional string preferred_login_name = 6;
 * @return {string}
 */
proto.zitadel.user.v1.User.prototype.getPreferredLoginName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.setPreferredLoginName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Human human = 7;
 * @return {?proto.zitadel.user.v1.Human}
 */
proto.zitadel.user.v1.User.prototype.getHuman = function() {
  return /** @type{?proto.zitadel.user.v1.Human} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.Human, 7));
};


/**
 * @param {?proto.zitadel.user.v1.Human|undefined} value
 * @return {!proto.zitadel.user.v1.User} returns this
*/
proto.zitadel.user.v1.User.prototype.setHuman = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.zitadel.user.v1.User.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.clearHuman = function() {
  return this.setHuman(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.User.prototype.hasHuman = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Machine machine = 8;
 * @return {?proto.zitadel.user.v1.Machine}
 */
proto.zitadel.user.v1.User.prototype.getMachine = function() {
  return /** @type{?proto.zitadel.user.v1.Machine} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.Machine, 8));
};


/**
 * @param {?proto.zitadel.user.v1.Machine|undefined} value
 * @return {!proto.zitadel.user.v1.User} returns this
*/
proto.zitadel.user.v1.User.prototype.setMachine = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.zitadel.user.v1.User.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.User} returns this
 */
proto.zitadel.user.v1.User.prototype.clearMachine = function() {
  return this.setMachine(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.User.prototype.hasMachine = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.zitadel.user.v1.Human.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Human.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Human} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Human.toObject = function(includeInstance, msg) {
  var f, obj = {
profile: (f = msg.getProfile()) && proto.zitadel.user.v1.Profile.toObject(includeInstance, f),
email: (f = msg.getEmail()) && proto.zitadel.user.v1.Email.toObject(includeInstance, f),
phone: (f = msg.getPhone()) && proto.zitadel.user.v1.Phone.toObject(includeInstance, f),
passwordChanged: (f = msg.getPasswordChanged()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.Human}
 */
proto.zitadel.user.v1.Human.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Human;
  return proto.zitadel.user.v1.Human.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Human} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Human}
 */
proto.zitadel.user.v1.Human.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.Profile;
      reader.readMessage(value,proto.zitadel.user.v1.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 2:
      var value = new proto.zitadel.user.v1.Email;
      reader.readMessage(value,proto.zitadel.user.v1.Email.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v1.Phone;
      reader.readMessage(value,proto.zitadel.user.v1.Phone.deserializeBinaryFromReader);
      msg.setPhone(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPasswordChanged(value);
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
proto.zitadel.user.v1.Human.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Human.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Human} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Human.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v1.Profile.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v1.Email.serializeBinaryToWriter
    );
  }
  f = message.getPhone();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v1.Phone.serializeBinaryToWriter
    );
  }
  f = message.getPasswordChanged();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Profile profile = 1;
 * @return {?proto.zitadel.user.v1.Profile}
 */
proto.zitadel.user.v1.Human.prototype.getProfile = function() {
  return /** @type{?proto.zitadel.user.v1.Profile} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.Profile, 1));
};


/**
 * @param {?proto.zitadel.user.v1.Profile|undefined} value
 * @return {!proto.zitadel.user.v1.Human} returns this
*/
proto.zitadel.user.v1.Human.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Human} returns this
 */
proto.zitadel.user.v1.Human.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Human.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Email email = 2;
 * @return {?proto.zitadel.user.v1.Email}
 */
proto.zitadel.user.v1.Human.prototype.getEmail = function() {
  return /** @type{?proto.zitadel.user.v1.Email} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.Email, 2));
};


/**
 * @param {?proto.zitadel.user.v1.Email|undefined} value
 * @return {!proto.zitadel.user.v1.Human} returns this
*/
proto.zitadel.user.v1.Human.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Human} returns this
 */
proto.zitadel.user.v1.Human.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Human.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Phone phone = 3;
 * @return {?proto.zitadel.user.v1.Phone}
 */
proto.zitadel.user.v1.Human.prototype.getPhone = function() {
  return /** @type{?proto.zitadel.user.v1.Phone} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.Phone, 3));
};


/**
 * @param {?proto.zitadel.user.v1.Phone|undefined} value
 * @return {!proto.zitadel.user.v1.Human} returns this
*/
proto.zitadel.user.v1.Human.prototype.setPhone = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Human} returns this
 */
proto.zitadel.user.v1.Human.prototype.clearPhone = function() {
  return this.setPhone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Human.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp password_changed = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v1.Human.prototype.getPasswordChanged = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v1.Human} returns this
*/
proto.zitadel.user.v1.Human.prototype.setPasswordChanged = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Human} returns this
 */
proto.zitadel.user.v1.Human.prototype.clearPasswordChanged = function() {
  return this.setPasswordChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Human.prototype.hasPasswordChanged = function() {
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
proto.zitadel.user.v1.Machine.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Machine.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Machine} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Machine.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
hasSecret: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
accessTokenType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.zitadel.user.v1.Machine}
 */
proto.zitadel.user.v1.Machine.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Machine;
  return proto.zitadel.user.v1.Machine.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Machine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Machine}
 */
proto.zitadel.user.v1.Machine.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSecret(value);
      break;
    case 4:
      var value = /** @type {!proto.zitadel.user.v1.AccessTokenType} */ (reader.readEnum());
      msg.setAccessTokenType(value);
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
proto.zitadel.user.v1.Machine.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Machine.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Machine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Machine.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHasSecret();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccessTokenType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Machine.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Machine} returns this
 */
proto.zitadel.user.v1.Machine.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.zitadel.user.v1.Machine.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Machine} returns this
 */
proto.zitadel.user.v1.Machine.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool has_secret = 3;
 * @return {boolean}
 */
proto.zitadel.user.v1.Machine.prototype.getHasSecret = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.Machine} returns this
 */
proto.zitadel.user.v1.Machine.prototype.setHasSecret = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional AccessTokenType access_token_type = 4;
 * @return {!proto.zitadel.user.v1.AccessTokenType}
 */
proto.zitadel.user.v1.Machine.prototype.getAccessTokenType = function() {
  return /** @type {!proto.zitadel.user.v1.AccessTokenType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.user.v1.AccessTokenType} value
 * @return {!proto.zitadel.user.v1.Machine} returns this
 */
proto.zitadel.user.v1.Machine.prototype.setAccessTokenType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.zitadel.user.v1.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
nickName: jspb.Message.getFieldWithDefault(msg, 3, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
preferredLanguage: jspb.Message.getFieldWithDefault(msg, 5, ""),
gender: jspb.Message.getFieldWithDefault(msg, 6, 0),
avatarUrl: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.zitadel.user.v1.Profile}
 */
proto.zitadel.user.v1.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Profile;
  return proto.zitadel.user.v1.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Profile}
 */
proto.zitadel.user.v1.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 6:
      var value = /** @type {!proto.zitadel.user.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
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
proto.zitadel.user.v1.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nick_name = 3;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string preferred_language = 5;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setPreferredLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Gender gender = 6;
 * @return {!proto.zitadel.user.v1.Gender}
 */
proto.zitadel.user.v1.Profile.prototype.getGender = function() {
  return /** @type {!proto.zitadel.user.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Gender} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string avatar_url = 7;
 * @return {string}
 */
proto.zitadel.user.v1.Profile.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Profile} returns this
 */
proto.zitadel.user.v1.Profile.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.zitadel.user.v1.Email.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Email.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Email} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Email.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
isEmailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.zitadel.user.v1.Email}
 */
proto.zitadel.user.v1.Email.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Email;
  return proto.zitadel.user.v1.Email.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Email} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Email}
 */
proto.zitadel.user.v1.Email.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
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
proto.zitadel.user.v1.Email.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Email.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Email} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Email.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Email.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Email} returns this
 */
proto.zitadel.user.v1.Email.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_email_verified = 2;
 * @return {boolean}
 */
proto.zitadel.user.v1.Email.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.Email} returns this
 */
proto.zitadel.user.v1.Email.prototype.setIsEmailVerified = function(value) {
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
proto.zitadel.user.v1.Phone.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Phone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Phone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Phone.toObject = function(includeInstance, msg) {
  var f, obj = {
phone: jspb.Message.getFieldWithDefault(msg, 1, ""),
isPhoneVerified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.zitadel.user.v1.Phone}
 */
proto.zitadel.user.v1.Phone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Phone;
  return proto.zitadel.user.v1.Phone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Phone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Phone}
 */
proto.zitadel.user.v1.Phone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhoneVerified(value);
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
proto.zitadel.user.v1.Phone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Phone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Phone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Phone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsPhoneVerified();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string phone = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Phone.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Phone} returns this
 */
proto.zitadel.user.v1.Phone.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_phone_verified = 2;
 * @return {boolean}
 */
proto.zitadel.user.v1.Phone.prototype.getIsPhoneVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.Phone} returns this
 */
proto.zitadel.user.v1.Phone.prototype.setIsPhoneVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.SearchQuery.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.SearchQuery.QueryCase = {
  QUERY_NOT_SET: 0,
  USER_NAME_QUERY: 1,
  FIRST_NAME_QUERY: 2,
  LAST_NAME_QUERY: 3,
  NICK_NAME_QUERY: 4,
  DISPLAY_NAME_QUERY: 5,
  EMAIL_QUERY: 6,
  STATE_QUERY: 7,
  TYPE_QUERY: 8,
  LOGIN_NAME_QUERY: 9,
  IN_USER_IDS_QUERY: 10,
  OR_QUERY: 11,
  AND_QUERY: 12,
  NOT_QUERY: 13,
  IN_USER_EMAILS_QUERY: 14
};

/**
 * @return {proto.zitadel.user.v1.SearchQuery.QueryCase}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getQueryCase = function() {
  return /** @type {proto.zitadel.user.v1.SearchQuery.QueryCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0]));
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
proto.zitadel.user.v1.SearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.SearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.SearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.SearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userNameQuery: (f = msg.getUserNameQuery()) && proto.zitadel.user.v1.UserNameQuery.toObject(includeInstance, f),
firstNameQuery: (f = msg.getFirstNameQuery()) && proto.zitadel.user.v1.FirstNameQuery.toObject(includeInstance, f),
lastNameQuery: (f = msg.getLastNameQuery()) && proto.zitadel.user.v1.LastNameQuery.toObject(includeInstance, f),
nickNameQuery: (f = msg.getNickNameQuery()) && proto.zitadel.user.v1.NickNameQuery.toObject(includeInstance, f),
displayNameQuery: (f = msg.getDisplayNameQuery()) && proto.zitadel.user.v1.DisplayNameQuery.toObject(includeInstance, f),
emailQuery: (f = msg.getEmailQuery()) && proto.zitadel.user.v1.EmailQuery.toObject(includeInstance, f),
stateQuery: (f = msg.getStateQuery()) && proto.zitadel.user.v1.StateQuery.toObject(includeInstance, f),
typeQuery: (f = msg.getTypeQuery()) && proto.zitadel.user.v1.TypeQuery.toObject(includeInstance, f),
loginNameQuery: (f = msg.getLoginNameQuery()) && proto.zitadel.user.v1.LoginNameQuery.toObject(includeInstance, f),
inUserIdsQuery: (f = msg.getInUserIdsQuery()) && proto.zitadel.user.v1.InUserIDQuery.toObject(includeInstance, f),
orQuery: (f = msg.getOrQuery()) && proto.zitadel.user.v1.OrQuery.toObject(includeInstance, f),
andQuery: (f = msg.getAndQuery()) && proto.zitadel.user.v1.AndQuery.toObject(includeInstance, f),
notQuery: (f = msg.getNotQuery()) && proto.zitadel.user.v1.NotQuery.toObject(includeInstance, f),
inUserEmailsQuery: (f = msg.getInUserEmailsQuery()) && proto.zitadel.user.v1.InUserEmailsQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.SearchQuery}
 */
proto.zitadel.user.v1.SearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.SearchQuery;
  return proto.zitadel.user.v1.SearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.SearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.SearchQuery}
 */
proto.zitadel.user.v1.SearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.UserNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserNameQuery.deserializeBinaryFromReader);
      msg.setUserNameQuery(value);
      break;
    case 2:
      var value = new proto.zitadel.user.v1.FirstNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.FirstNameQuery.deserializeBinaryFromReader);
      msg.setFirstNameQuery(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v1.LastNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.LastNameQuery.deserializeBinaryFromReader);
      msg.setLastNameQuery(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v1.NickNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.NickNameQuery.deserializeBinaryFromReader);
      msg.setNickNameQuery(value);
      break;
    case 5:
      var value = new proto.zitadel.user.v1.DisplayNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.DisplayNameQuery.deserializeBinaryFromReader);
      msg.setDisplayNameQuery(value);
      break;
    case 6:
      var value = new proto.zitadel.user.v1.EmailQuery;
      reader.readMessage(value,proto.zitadel.user.v1.EmailQuery.deserializeBinaryFromReader);
      msg.setEmailQuery(value);
      break;
    case 7:
      var value = new proto.zitadel.user.v1.StateQuery;
      reader.readMessage(value,proto.zitadel.user.v1.StateQuery.deserializeBinaryFromReader);
      msg.setStateQuery(value);
      break;
    case 8:
      var value = new proto.zitadel.user.v1.TypeQuery;
      reader.readMessage(value,proto.zitadel.user.v1.TypeQuery.deserializeBinaryFromReader);
      msg.setTypeQuery(value);
      break;
    case 9:
      var value = new proto.zitadel.user.v1.LoginNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.LoginNameQuery.deserializeBinaryFromReader);
      msg.setLoginNameQuery(value);
      break;
    case 10:
      var value = new proto.zitadel.user.v1.InUserIDQuery;
      reader.readMessage(value,proto.zitadel.user.v1.InUserIDQuery.deserializeBinaryFromReader);
      msg.setInUserIdsQuery(value);
      break;
    case 11:
      var value = new proto.zitadel.user.v1.OrQuery;
      reader.readMessage(value,proto.zitadel.user.v1.OrQuery.deserializeBinaryFromReader);
      msg.setOrQuery(value);
      break;
    case 12:
      var value = new proto.zitadel.user.v1.AndQuery;
      reader.readMessage(value,proto.zitadel.user.v1.AndQuery.deserializeBinaryFromReader);
      msg.setAndQuery(value);
      break;
    case 13:
      var value = new proto.zitadel.user.v1.NotQuery;
      reader.readMessage(value,proto.zitadel.user.v1.NotQuery.deserializeBinaryFromReader);
      msg.setNotQuery(value);
      break;
    case 14:
      var value = new proto.zitadel.user.v1.InUserEmailsQuery;
      reader.readMessage(value,proto.zitadel.user.v1.InUserEmailsQuery.deserializeBinaryFromReader);
      msg.setInUserEmailsQuery(value);
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
proto.zitadel.user.v1.SearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.SearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.SearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.SearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserNameQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v1.UserNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getFirstNameQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v1.FirstNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getLastNameQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v1.LastNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getNickNameQuery();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v1.NickNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getDisplayNameQuery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.user.v1.DisplayNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getEmailQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.user.v1.EmailQuery.serializeBinaryToWriter
    );
  }
  f = message.getStateQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.zitadel.user.v1.StateQuery.serializeBinaryToWriter
    );
  }
  f = message.getTypeQuery();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.zitadel.user.v1.TypeQuery.serializeBinaryToWriter
    );
  }
  f = message.getLoginNameQuery();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.zitadel.user.v1.LoginNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getInUserIdsQuery();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.zitadel.user.v1.InUserIDQuery.serializeBinaryToWriter
    );
  }
  f = message.getOrQuery();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.zitadel.user.v1.OrQuery.serializeBinaryToWriter
    );
  }
  f = message.getAndQuery();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.zitadel.user.v1.AndQuery.serializeBinaryToWriter
    );
  }
  f = message.getNotQuery();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.zitadel.user.v1.NotQuery.serializeBinaryToWriter
    );
  }
  f = message.getInUserEmailsQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.zitadel.user.v1.InUserEmailsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserNameQuery user_name_query = 1;
 * @return {?proto.zitadel.user.v1.UserNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getUserNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserNameQuery, 1));
};


/**
 * @param {?proto.zitadel.user.v1.UserNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setUserNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearUserNameQuery = function() {
  return this.setUserNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasUserNameQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FirstNameQuery first_name_query = 2;
 * @return {?proto.zitadel.user.v1.FirstNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getFirstNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.FirstNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.FirstNameQuery, 2));
};


/**
 * @param {?proto.zitadel.user.v1.FirstNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setFirstNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearFirstNameQuery = function() {
  return this.setFirstNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasFirstNameQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LastNameQuery last_name_query = 3;
 * @return {?proto.zitadel.user.v1.LastNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getLastNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.LastNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.LastNameQuery, 3));
};


/**
 * @param {?proto.zitadel.user.v1.LastNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setLastNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearLastNameQuery = function() {
  return this.setLastNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasLastNameQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional NickNameQuery nick_name_query = 4;
 * @return {?proto.zitadel.user.v1.NickNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getNickNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.NickNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.NickNameQuery, 4));
};


/**
 * @param {?proto.zitadel.user.v1.NickNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setNickNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearNickNameQuery = function() {
  return this.setNickNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasNickNameQuery = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DisplayNameQuery display_name_query = 5;
 * @return {?proto.zitadel.user.v1.DisplayNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getDisplayNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.DisplayNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.DisplayNameQuery, 5));
};


/**
 * @param {?proto.zitadel.user.v1.DisplayNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setDisplayNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearDisplayNameQuery = function() {
  return this.setDisplayNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasDisplayNameQuery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EmailQuery email_query = 6;
 * @return {?proto.zitadel.user.v1.EmailQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getEmailQuery = function() {
  return /** @type{?proto.zitadel.user.v1.EmailQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.EmailQuery, 6));
};


/**
 * @param {?proto.zitadel.user.v1.EmailQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setEmailQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearEmailQuery = function() {
  return this.setEmailQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasEmailQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StateQuery state_query = 7;
 * @return {?proto.zitadel.user.v1.StateQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getStateQuery = function() {
  return /** @type{?proto.zitadel.user.v1.StateQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.StateQuery, 7));
};


/**
 * @param {?proto.zitadel.user.v1.StateQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setStateQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearStateQuery = function() {
  return this.setStateQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasStateQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TypeQuery type_query = 8;
 * @return {?proto.zitadel.user.v1.TypeQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getTypeQuery = function() {
  return /** @type{?proto.zitadel.user.v1.TypeQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.TypeQuery, 8));
};


/**
 * @param {?proto.zitadel.user.v1.TypeQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setTypeQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearTypeQuery = function() {
  return this.setTypeQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasTypeQuery = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LoginNameQuery login_name_query = 9;
 * @return {?proto.zitadel.user.v1.LoginNameQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getLoginNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.LoginNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.LoginNameQuery, 9));
};


/**
 * @param {?proto.zitadel.user.v1.LoginNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setLoginNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearLoginNameQuery = function() {
  return this.setLoginNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasLoginNameQuery = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional InUserIDQuery in_user_ids_query = 10;
 * @return {?proto.zitadel.user.v1.InUserIDQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getInUserIdsQuery = function() {
  return /** @type{?proto.zitadel.user.v1.InUserIDQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.InUserIDQuery, 10));
};


/**
 * @param {?proto.zitadel.user.v1.InUserIDQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setInUserIdsQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearInUserIdsQuery = function() {
  return this.setInUserIdsQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasInUserIdsQuery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional OrQuery or_query = 11;
 * @return {?proto.zitadel.user.v1.OrQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getOrQuery = function() {
  return /** @type{?proto.zitadel.user.v1.OrQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.OrQuery, 11));
};


/**
 * @param {?proto.zitadel.user.v1.OrQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setOrQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearOrQuery = function() {
  return this.setOrQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasOrQuery = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional AndQuery and_query = 12;
 * @return {?proto.zitadel.user.v1.AndQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getAndQuery = function() {
  return /** @type{?proto.zitadel.user.v1.AndQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.AndQuery, 12));
};


/**
 * @param {?proto.zitadel.user.v1.AndQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setAndQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearAndQuery = function() {
  return this.setAndQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasAndQuery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional NotQuery not_query = 13;
 * @return {?proto.zitadel.user.v1.NotQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getNotQuery = function() {
  return /** @type{?proto.zitadel.user.v1.NotQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.NotQuery, 13));
};


/**
 * @param {?proto.zitadel.user.v1.NotQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setNotQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearNotQuery = function() {
  return this.setNotQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasNotQuery = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional InUserEmailsQuery in_user_emails_query = 14;
 * @return {?proto.zitadel.user.v1.InUserEmailsQuery}
 */
proto.zitadel.user.v1.SearchQuery.prototype.getInUserEmailsQuery = function() {
  return /** @type{?proto.zitadel.user.v1.InUserEmailsQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.InUserEmailsQuery, 14));
};


/**
 * @param {?proto.zitadel.user.v1.InUserEmailsQuery|undefined} value
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
*/
proto.zitadel.user.v1.SearchQuery.prototype.setInUserEmailsQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.zitadel.user.v1.SearchQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.SearchQuery} returns this
 */
proto.zitadel.user.v1.SearchQuery.prototype.clearInUserEmailsQuery = function() {
  return this.setInUserEmailsQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.SearchQuery.prototype.hasInUserEmailsQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.OrQuery.repeatedFields_ = [1];



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
proto.zitadel.user.v1.OrQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.OrQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.OrQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.OrQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.zitadel.user.v1.SearchQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v1.OrQuery}
 */
proto.zitadel.user.v1.OrQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.OrQuery;
  return proto.zitadel.user.v1.OrQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.OrQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.OrQuery}
 */
proto.zitadel.user.v1.OrQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.SearchQuery;
      reader.readMessage(value,proto.zitadel.user.v1.SearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.zitadel.user.v1.OrQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.OrQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.OrQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.OrQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.user.v1.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchQuery queries = 1;
 * @return {!Array<!proto.zitadel.user.v1.SearchQuery>}
 */
proto.zitadel.user.v1.OrQuery.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.user.v1.SearchQuery, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.SearchQuery>} value
 * @return {!proto.zitadel.user.v1.OrQuery} returns this
*/
proto.zitadel.user.v1.OrQuery.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v1.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.SearchQuery}
 */
proto.zitadel.user.v1.OrQuery.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v1.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.OrQuery} returns this
 */
proto.zitadel.user.v1.OrQuery.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.AndQuery.repeatedFields_ = [1];



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
proto.zitadel.user.v1.AndQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AndQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AndQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AndQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.zitadel.user.v1.SearchQuery.toObject, includeInstance)
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
 * @return {!proto.zitadel.user.v1.AndQuery}
 */
proto.zitadel.user.v1.AndQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AndQuery;
  return proto.zitadel.user.v1.AndQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AndQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AndQuery}
 */
proto.zitadel.user.v1.AndQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.SearchQuery;
      reader.readMessage(value,proto.zitadel.user.v1.SearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.zitadel.user.v1.AndQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AndQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AndQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AndQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zitadel.user.v1.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchQuery queries = 1;
 * @return {!Array<!proto.zitadel.user.v1.SearchQuery>}
 */
proto.zitadel.user.v1.AndQuery.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.zitadel.user.v1.SearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zitadel.user.v1.SearchQuery, 1));
};


/**
 * @param {!Array<!proto.zitadel.user.v1.SearchQuery>} value
 * @return {!proto.zitadel.user.v1.AndQuery} returns this
*/
proto.zitadel.user.v1.AndQuery.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zitadel.user.v1.SearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.SearchQuery}
 */
proto.zitadel.user.v1.AndQuery.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zitadel.user.v1.SearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.AndQuery} returns this
 */
proto.zitadel.user.v1.AndQuery.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
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
proto.zitadel.user.v1.NotQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.NotQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.NotQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.NotQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = msg.getQuery()) && proto.zitadel.user.v1.SearchQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.NotQuery}
 */
proto.zitadel.user.v1.NotQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.NotQuery;
  return proto.zitadel.user.v1.NotQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.NotQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.NotQuery}
 */
proto.zitadel.user.v1.NotQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.SearchQuery;
      reader.readMessage(value,proto.zitadel.user.v1.SearchQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
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
proto.zitadel.user.v1.NotQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.NotQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.NotQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.NotQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v1.SearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional SearchQuery query = 1;
 * @return {?proto.zitadel.user.v1.SearchQuery}
 */
proto.zitadel.user.v1.NotQuery.prototype.getQuery = function() {
  return /** @type{?proto.zitadel.user.v1.SearchQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.SearchQuery, 1));
};


/**
 * @param {?proto.zitadel.user.v1.SearchQuery|undefined} value
 * @return {!proto.zitadel.user.v1.NotQuery} returns this
*/
proto.zitadel.user.v1.NotQuery.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.NotQuery} returns this
 */
proto.zitadel.user.v1.NotQuery.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.NotQuery.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.InUserIDQuery.repeatedFields_ = [1];



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
proto.zitadel.user.v1.InUserIDQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.InUserIDQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.InUserIDQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.InUserIDQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.InUserIDQuery}
 */
proto.zitadel.user.v1.InUserIDQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.InUserIDQuery;
  return proto.zitadel.user.v1.InUserIDQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.InUserIDQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.InUserIDQuery}
 */
proto.zitadel.user.v1.InUserIDQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
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
proto.zitadel.user.v1.InUserIDQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.InUserIDQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.InUserIDQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.InUserIDQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.InUserIDQuery.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.InUserIDQuery} returns this
 */
proto.zitadel.user.v1.InUserIDQuery.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.InUserIDQuery} returns this
 */
proto.zitadel.user.v1.InUserIDQuery.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.InUserIDQuery} returns this
 */
proto.zitadel.user.v1.InUserIDQuery.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.InUserEmailsQuery.repeatedFields_ = [1];



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
proto.zitadel.user.v1.InUserEmailsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.InUserEmailsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.InUserEmailsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.InUserEmailsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userEmailsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.InUserEmailsQuery}
 */
proto.zitadel.user.v1.InUserEmailsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.InUserEmailsQuery;
  return proto.zitadel.user.v1.InUserEmailsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.InUserEmailsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.InUserEmailsQuery}
 */
proto.zitadel.user.v1.InUserEmailsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserEmails(value);
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
proto.zitadel.user.v1.InUserEmailsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.InUserEmailsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.InUserEmailsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.InUserEmailsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserEmailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_emails = 1;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.InUserEmailsQuery.prototype.getUserEmailsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.InUserEmailsQuery} returns this
 */
proto.zitadel.user.v1.InUserEmailsQuery.prototype.setUserEmailsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.InUserEmailsQuery} returns this
 */
proto.zitadel.user.v1.InUserEmailsQuery.prototype.addUserEmails = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.InUserEmailsQuery} returns this
 */
proto.zitadel.user.v1.InUserEmailsQuery.prototype.clearUserEmailsList = function() {
  return this.setUserEmailsList([]);
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
proto.zitadel.user.v1.UserNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserNameQuery}
 */
proto.zitadel.user.v1.UserNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserNameQuery;
  return proto.zitadel.user.v1.UserNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserNameQuery}
 */
proto.zitadel.user.v1.UserNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserNameQuery.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserNameQuery} returns this
 */
proto.zitadel.user.v1.UserNameQuery.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserNameQuery} returns this
 */
proto.zitadel.user.v1.UserNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.FirstNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.FirstNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.FirstNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.FirstNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.FirstNameQuery}
 */
proto.zitadel.user.v1.FirstNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.FirstNameQuery;
  return proto.zitadel.user.v1.FirstNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.FirstNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.FirstNameQuery}
 */
proto.zitadel.user.v1.FirstNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.FirstNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.FirstNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.FirstNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.FirstNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.FirstNameQuery.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.FirstNameQuery} returns this
 */
proto.zitadel.user.v1.FirstNameQuery.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.FirstNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.FirstNameQuery} returns this
 */
proto.zitadel.user.v1.FirstNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.LastNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.LastNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.LastNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.LastNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
lastName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.LastNameQuery}
 */
proto.zitadel.user.v1.LastNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.LastNameQuery;
  return proto.zitadel.user.v1.LastNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.LastNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.LastNameQuery}
 */
proto.zitadel.user.v1.LastNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.LastNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.LastNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.LastNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.LastNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string last_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.LastNameQuery.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.LastNameQuery} returns this
 */
proto.zitadel.user.v1.LastNameQuery.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.LastNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.LastNameQuery} returns this
 */
proto.zitadel.user.v1.LastNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.NickNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.NickNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.NickNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.NickNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
nickName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.NickNameQuery}
 */
proto.zitadel.user.v1.NickNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.NickNameQuery;
  return proto.zitadel.user.v1.NickNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.NickNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.NickNameQuery}
 */
proto.zitadel.user.v1.NickNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.NickNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.NickNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.NickNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.NickNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string nick_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.NickNameQuery.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.NickNameQuery} returns this
 */
proto.zitadel.user.v1.NickNameQuery.prototype.setNickName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.NickNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.NickNameQuery} returns this
 */
proto.zitadel.user.v1.NickNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.DisplayNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.DisplayNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.DisplayNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.DisplayNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
displayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.DisplayNameQuery}
 */
proto.zitadel.user.v1.DisplayNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.DisplayNameQuery;
  return proto.zitadel.user.v1.DisplayNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.DisplayNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.DisplayNameQuery}
 */
proto.zitadel.user.v1.DisplayNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.DisplayNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.DisplayNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.DisplayNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.DisplayNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string display_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.DisplayNameQuery.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.DisplayNameQuery} returns this
 */
proto.zitadel.user.v1.DisplayNameQuery.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.DisplayNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.DisplayNameQuery} returns this
 */
proto.zitadel.user.v1.DisplayNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.EmailQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.EmailQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.EmailQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.EmailQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
emailAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.EmailQuery}
 */
proto.zitadel.user.v1.EmailQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.EmailQuery;
  return proto.zitadel.user.v1.EmailQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.EmailQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.EmailQuery}
 */
proto.zitadel.user.v1.EmailQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.EmailQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.EmailQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.EmailQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.EmailQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string email_address = 1;
 * @return {string}
 */
proto.zitadel.user.v1.EmailQuery.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.EmailQuery} returns this
 */
proto.zitadel.user.v1.EmailQuery.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.EmailQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.EmailQuery} returns this
 */
proto.zitadel.user.v1.EmailQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.LoginNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.LoginNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.LoginNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.LoginNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
loginName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.LoginNameQuery}
 */
proto.zitadel.user.v1.LoginNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.LoginNameQuery;
  return proto.zitadel.user.v1.LoginNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.LoginNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.LoginNameQuery}
 */
proto.zitadel.user.v1.LoginNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoginName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.LoginNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.LoginNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.LoginNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.LoginNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoginName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string login_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.LoginNameQuery.prototype.getLoginName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.LoginNameQuery} returns this
 */
proto.zitadel.user.v1.LoginNameQuery.prototype.setLoginName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.LoginNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.LoginNameQuery} returns this
 */
proto.zitadel.user.v1.LoginNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.StateQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.StateQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.StateQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.StateQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.zitadel.user.v1.StateQuery}
 */
proto.zitadel.user.v1.StateQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.StateQuery;
  return proto.zitadel.user.v1.StateQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.StateQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.StateQuery}
 */
proto.zitadel.user.v1.StateQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.user.v1.UserState} */ (reader.readEnum());
      msg.setState(value);
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
proto.zitadel.user.v1.StateQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.StateQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.StateQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.StateQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional UserState state = 1;
 * @return {!proto.zitadel.user.v1.UserState}
 */
proto.zitadel.user.v1.StateQuery.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.UserState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.user.v1.UserState} value
 * @return {!proto.zitadel.user.v1.StateQuery} returns this
 */
proto.zitadel.user.v1.StateQuery.prototype.setState = function(value) {
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
proto.zitadel.user.v1.TypeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.TypeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.TypeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.TypeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.zitadel.user.v1.TypeQuery}
 */
proto.zitadel.user.v1.TypeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.TypeQuery;
  return proto.zitadel.user.v1.TypeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.TypeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.TypeQuery}
 */
proto.zitadel.user.v1.TypeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.user.v1.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.zitadel.user.v1.TypeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.TypeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.TypeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.TypeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Type type = 1;
 * @return {!proto.zitadel.user.v1.Type}
 */
proto.zitadel.user.v1.TypeQuery.prototype.getType = function() {
  return /** @type {!proto.zitadel.user.v1.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Type} value
 * @return {!proto.zitadel.user.v1.TypeQuery} returns this
 */
proto.zitadel.user.v1.TypeQuery.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.AuthFactor.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.AuthFactor.TypeCase = {
  TYPE_NOT_SET: 0,
  OTP: 2,
  U2F: 3,
  OTP_SMS: 4,
  OTP_EMAIL: 5
};

/**
 * @return {proto.zitadel.user.v1.AuthFactor.TypeCase}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getTypeCase = function() {
  return /** @type {proto.zitadel.user.v1.AuthFactor.TypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.AuthFactor.oneofGroups_[0]));
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
proto.zitadel.user.v1.AuthFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AuthFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AuthFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
state: jspb.Message.getFieldWithDefault(msg, 1, 0),
otp: (f = msg.getOtp()) && proto.zitadel.user.v1.AuthFactorOTP.toObject(includeInstance, f),
u2f: (f = msg.getU2f()) && proto.zitadel.user.v1.AuthFactorU2F.toObject(includeInstance, f),
otpSms: (f = msg.getOtpSms()) && proto.zitadel.user.v1.AuthFactorOTPSMS.toObject(includeInstance, f),
otpEmail: (f = msg.getOtpEmail()) && proto.zitadel.user.v1.AuthFactorOTPEmail.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.AuthFactor}
 */
proto.zitadel.user.v1.AuthFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AuthFactor;
  return proto.zitadel.user.v1.AuthFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AuthFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AuthFactor}
 */
proto.zitadel.user.v1.AuthFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.user.v1.AuthFactorState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.zitadel.user.v1.AuthFactorOTP;
      reader.readMessage(value,proto.zitadel.user.v1.AuthFactorOTP.deserializeBinaryFromReader);
      msg.setOtp(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v1.AuthFactorU2F;
      reader.readMessage(value,proto.zitadel.user.v1.AuthFactorU2F.deserializeBinaryFromReader);
      msg.setU2f(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v1.AuthFactorOTPSMS;
      reader.readMessage(value,proto.zitadel.user.v1.AuthFactorOTPSMS.deserializeBinaryFromReader);
      msg.setOtpSms(value);
      break;
    case 5:
      var value = new proto.zitadel.user.v1.AuthFactorOTPEmail;
      reader.readMessage(value,proto.zitadel.user.v1.AuthFactorOTPEmail.deserializeBinaryFromReader);
      msg.setOtpEmail(value);
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
proto.zitadel.user.v1.AuthFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AuthFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AuthFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOtp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v1.AuthFactorOTP.serializeBinaryToWriter
    );
  }
  f = message.getU2f();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v1.AuthFactorU2F.serializeBinaryToWriter
    );
  }
  f = message.getOtpSms();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v1.AuthFactorOTPSMS.serializeBinaryToWriter
    );
  }
  f = message.getOtpEmail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.user.v1.AuthFactorOTPEmail.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthFactorState state = 1;
 * @return {!proto.zitadel.user.v1.AuthFactorState}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.AuthFactorState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.user.v1.AuthFactorState} value
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
 */
proto.zitadel.user.v1.AuthFactor.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AuthFactorOTP otp = 2;
 * @return {?proto.zitadel.user.v1.AuthFactorOTP}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getOtp = function() {
  return /** @type{?proto.zitadel.user.v1.AuthFactorOTP} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.AuthFactorOTP, 2));
};


/**
 * @param {?proto.zitadel.user.v1.AuthFactorOTP|undefined} value
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
*/
proto.zitadel.user.v1.AuthFactor.prototype.setOtp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v1.AuthFactor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
 */
proto.zitadel.user.v1.AuthFactor.prototype.clearOtp = function() {
  return this.setOtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.AuthFactor.prototype.hasOtp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuthFactorU2F u2f = 3;
 * @return {?proto.zitadel.user.v1.AuthFactorU2F}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getU2f = function() {
  return /** @type{?proto.zitadel.user.v1.AuthFactorU2F} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.AuthFactorU2F, 3));
};


/**
 * @param {?proto.zitadel.user.v1.AuthFactorU2F|undefined} value
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
*/
proto.zitadel.user.v1.AuthFactor.prototype.setU2f = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v1.AuthFactor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
 */
proto.zitadel.user.v1.AuthFactor.prototype.clearU2f = function() {
  return this.setU2f(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.AuthFactor.prototype.hasU2f = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuthFactorOTPSMS otp_sms = 4;
 * @return {?proto.zitadel.user.v1.AuthFactorOTPSMS}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getOtpSms = function() {
  return /** @type{?proto.zitadel.user.v1.AuthFactorOTPSMS} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.AuthFactorOTPSMS, 4));
};


/**
 * @param {?proto.zitadel.user.v1.AuthFactorOTPSMS|undefined} value
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
*/
proto.zitadel.user.v1.AuthFactor.prototype.setOtpSms = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v1.AuthFactor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
 */
proto.zitadel.user.v1.AuthFactor.prototype.clearOtpSms = function() {
  return this.setOtpSms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.AuthFactor.prototype.hasOtpSms = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AuthFactorOTPEmail otp_email = 5;
 * @return {?proto.zitadel.user.v1.AuthFactorOTPEmail}
 */
proto.zitadel.user.v1.AuthFactor.prototype.getOtpEmail = function() {
  return /** @type{?proto.zitadel.user.v1.AuthFactorOTPEmail} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.AuthFactorOTPEmail, 5));
};


/**
 * @param {?proto.zitadel.user.v1.AuthFactorOTPEmail|undefined} value
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
*/
proto.zitadel.user.v1.AuthFactor.prototype.setOtpEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v1.AuthFactor.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.AuthFactor} returns this
 */
proto.zitadel.user.v1.AuthFactor.prototype.clearOtpEmail = function() {
  return this.setOtpEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.AuthFactor.prototype.hasOtpEmail = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.zitadel.user.v1.AuthFactorOTP.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AuthFactorOTP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AuthFactorOTP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTP.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v1.AuthFactorOTP}
 */
proto.zitadel.user.v1.AuthFactorOTP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AuthFactorOTP;
  return proto.zitadel.user.v1.AuthFactorOTP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AuthFactorOTP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AuthFactorOTP}
 */
proto.zitadel.user.v1.AuthFactorOTP.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v1.AuthFactorOTP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AuthFactorOTP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AuthFactorOTP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTP.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v1.AuthFactorOTPSMS.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AuthFactorOTPSMS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AuthFactorOTPSMS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTPSMS.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v1.AuthFactorOTPSMS}
 */
proto.zitadel.user.v1.AuthFactorOTPSMS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AuthFactorOTPSMS;
  return proto.zitadel.user.v1.AuthFactorOTPSMS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AuthFactorOTPSMS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AuthFactorOTPSMS}
 */
proto.zitadel.user.v1.AuthFactorOTPSMS.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v1.AuthFactorOTPSMS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AuthFactorOTPSMS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AuthFactorOTPSMS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTPSMS.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v1.AuthFactorOTPEmail.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AuthFactorOTPEmail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AuthFactorOTPEmail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTPEmail.toObject = function(includeInstance, msg) {
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
 * @return {!proto.zitadel.user.v1.AuthFactorOTPEmail}
 */
proto.zitadel.user.v1.AuthFactorOTPEmail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AuthFactorOTPEmail;
  return proto.zitadel.user.v1.AuthFactorOTPEmail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AuthFactorOTPEmail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AuthFactorOTPEmail}
 */
proto.zitadel.user.v1.AuthFactorOTPEmail.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v1.AuthFactorOTPEmail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AuthFactorOTPEmail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AuthFactorOTPEmail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorOTPEmail.serializeBinaryToWriter = function(message, writer) {
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
proto.zitadel.user.v1.AuthFactorU2F.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.AuthFactorU2F.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.AuthFactorU2F} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorU2F.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v1.AuthFactorU2F}
 */
proto.zitadel.user.v1.AuthFactorU2F.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.AuthFactorU2F;
  return proto.zitadel.user.v1.AuthFactorU2F.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.AuthFactorU2F} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.AuthFactorU2F}
 */
proto.zitadel.user.v1.AuthFactorU2F.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
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
proto.zitadel.user.v1.AuthFactorU2F.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.AuthFactorU2F.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.AuthFactorU2F} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.AuthFactorU2F.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.AuthFactorU2F.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.AuthFactorU2F} returns this
 */
proto.zitadel.user.v1.AuthFactorU2F.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zitadel.user.v1.AuthFactorU2F.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.AuthFactorU2F} returns this
 */
proto.zitadel.user.v1.AuthFactorU2F.prototype.setName = function(value) {
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
proto.zitadel.user.v1.WebAuthNKey.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.WebAuthNKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.WebAuthNKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNKey.toObject = function(includeInstance, msg) {
  var f, obj = {
publicKey: msg.getPublicKey_asB64()
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
 * @return {!proto.zitadel.user.v1.WebAuthNKey}
 */
proto.zitadel.user.v1.WebAuthNKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.WebAuthNKey;
  return proto.zitadel.user.v1.WebAuthNKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.WebAuthNKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.WebAuthNKey}
 */
proto.zitadel.user.v1.WebAuthNKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
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
proto.zitadel.user.v1.WebAuthNKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.WebAuthNKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.WebAuthNKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v1.WebAuthNKey.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.zitadel.user.v1.WebAuthNKey.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.zitadel.user.v1.WebAuthNKey.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v1.WebAuthNKey} returns this
 */
proto.zitadel.user.v1.WebAuthNKey.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.zitadel.user.v1.WebAuthNVerification.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.WebAuthNVerification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.WebAuthNVerification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNVerification.toObject = function(includeInstance, msg) {
  var f, obj = {
publicKeyCredential: msg.getPublicKeyCredential_asB64(),
tokenName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zitadel.user.v1.WebAuthNVerification}
 */
proto.zitadel.user.v1.WebAuthNVerification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.WebAuthNVerification;
  return proto.zitadel.user.v1.WebAuthNVerification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.WebAuthNVerification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.WebAuthNVerification}
 */
proto.zitadel.user.v1.WebAuthNVerification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKeyCredential(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
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
proto.zitadel.user.v1.WebAuthNVerification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.WebAuthNVerification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.WebAuthNVerification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNVerification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKeyCredential_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes public_key_credential = 1;
 * @return {!(string|Uint8Array)}
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.getPublicKeyCredential = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key_credential = 1;
 * This is a type-conversion wrapper around `getPublicKeyCredential()`
 * @return {string}
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.getPublicKeyCredential_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKeyCredential()));
};


/**
 * optional bytes public_key_credential = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKeyCredential()`
 * @return {!Uint8Array}
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.getPublicKeyCredential_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKeyCredential()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.zitadel.user.v1.WebAuthNVerification} returns this
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.setPublicKeyCredential = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string token_name = 2;
 * @return {string}
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.WebAuthNVerification} returns this
 */
proto.zitadel.user.v1.WebAuthNVerification.prototype.setTokenName = function(value) {
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
proto.zitadel.user.v1.WebAuthNToken.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.WebAuthNToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.WebAuthNToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNToken.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
state: jspb.Message.getFieldWithDefault(msg, 2, 0),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zitadel.user.v1.WebAuthNToken}
 */
proto.zitadel.user.v1.WebAuthNToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.WebAuthNToken;
  return proto.zitadel.user.v1.WebAuthNToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.WebAuthNToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.WebAuthNToken}
 */
proto.zitadel.user.v1.WebAuthNToken.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.zitadel.user.v1.AuthFactorState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.zitadel.user.v1.WebAuthNToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.WebAuthNToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.WebAuthNToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.WebAuthNToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.WebAuthNToken} returns this
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AuthFactorState state = 2;
 * @return {!proto.zitadel.user.v1.AuthFactorState}
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.AuthFactorState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.user.v1.AuthFactorState} value
 * @return {!proto.zitadel.user.v1.WebAuthNToken} returns this
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.WebAuthNToken} returns this
 */
proto.zitadel.user.v1.WebAuthNToken.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.Membership.repeatedFields_ = [3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.Membership.oneofGroups_ = [[5,6,7,8]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.Membership.TypeCase = {
  TYPE_NOT_SET: 0,
  IAM: 5,
  ORG_ID: 6,
  PROJECT_ID: 7,
  PROJECT_GRANT_ID: 8
};

/**
 * @return {proto.zitadel.user.v1.Membership.TypeCase}
 */
proto.zitadel.user.v1.Membership.prototype.getTypeCase = function() {
  return /** @type {proto.zitadel.user.v1.Membership.TypeCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.Membership.oneofGroups_[0]));
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
proto.zitadel.user.v1.Membership.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Membership.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Membership} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Membership.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
rolesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
displayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
iam: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
orgId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
projectId: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
projectGrantId: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.Membership}
 */
proto.zitadel.user.v1.Membership.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Membership;
  return proto.zitadel.user.v1.Membership.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Membership} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Membership}
 */
proto.zitadel.user.v1.Membership.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIam(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
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
proto.zitadel.user.v1.Membership.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Membership.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Membership} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Membership.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Membership.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.Membership.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
*/
proto.zitadel.user.v1.Membership.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.Membership.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string display_name = 4;
 * @return {string}
 */
proto.zitadel.user.v1.Membership.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool iam = 5;
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.getIam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setIam = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v1.Membership.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearIam = function() {
  return jspb.Message.setOneofField(this, 5, proto.zitadel.user.v1.Membership.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.hasIam = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string org_id = 6;
 * @return {string}
 */
proto.zitadel.user.v1.Membership.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setOrgId = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.zitadel.user.v1.Membership.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearOrgId = function() {
  return jspb.Message.setOneofField(this, 6, proto.zitadel.user.v1.Membership.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.hasOrgId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string project_id = 7;
 * @return {string}
 */
proto.zitadel.user.v1.Membership.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setProjectId = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.zitadel.user.v1.Membership.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearProjectId = function() {
  return jspb.Message.setOneofField(this, 7, proto.zitadel.user.v1.Membership.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.hasProjectId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string project_grant_id = 8;
 * @return {string}
 */
proto.zitadel.user.v1.Membership.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.setProjectGrantId = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.zitadel.user.v1.Membership.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zitadel.user.v1.Membership} returns this
 */
proto.zitadel.user.v1.Membership.prototype.clearProjectGrantId = function() {
  return jspb.Message.setOneofField(this, 8, proto.zitadel.user.v1.Membership.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Membership.prototype.hasProjectGrantId = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.MembershipQuery.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.MembershipQuery.QueryCase = {
  QUERY_NOT_SET: 0,
  ORG_QUERY: 1,
  PROJECT_QUERY: 2,
  PROJECT_GRANT_QUERY: 3,
  IAM_QUERY: 4
};

/**
 * @return {proto.zitadel.user.v1.MembershipQuery.QueryCase}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.getQueryCase = function() {
  return /** @type {proto.zitadel.user.v1.MembershipQuery.QueryCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.MembershipQuery.oneofGroups_[0]));
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
proto.zitadel.user.v1.MembershipQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.MembershipQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.MembershipQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
orgQuery: (f = msg.getOrgQuery()) && proto.zitadel.user.v1.MembershipOrgQuery.toObject(includeInstance, f),
projectQuery: (f = msg.getProjectQuery()) && proto.zitadel.user.v1.MembershipProjectQuery.toObject(includeInstance, f),
projectGrantQuery: (f = msg.getProjectGrantQuery()) && proto.zitadel.user.v1.MembershipProjectGrantQuery.toObject(includeInstance, f),
iamQuery: (f = msg.getIamQuery()) && proto.zitadel.user.v1.MembershipIAMQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.MembershipQuery}
 */
proto.zitadel.user.v1.MembershipQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.MembershipQuery;
  return proto.zitadel.user.v1.MembershipQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.MembershipQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.MembershipQuery}
 */
proto.zitadel.user.v1.MembershipQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.MembershipOrgQuery;
      reader.readMessage(value,proto.zitadel.user.v1.MembershipOrgQuery.deserializeBinaryFromReader);
      msg.setOrgQuery(value);
      break;
    case 2:
      var value = new proto.zitadel.user.v1.MembershipProjectQuery;
      reader.readMessage(value,proto.zitadel.user.v1.MembershipProjectQuery.deserializeBinaryFromReader);
      msg.setProjectQuery(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v1.MembershipProjectGrantQuery;
      reader.readMessage(value,proto.zitadel.user.v1.MembershipProjectGrantQuery.deserializeBinaryFromReader);
      msg.setProjectGrantQuery(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v1.MembershipIAMQuery;
      reader.readMessage(value,proto.zitadel.user.v1.MembershipIAMQuery.deserializeBinaryFromReader);
      msg.setIamQuery(value);
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
proto.zitadel.user.v1.MembershipQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.MembershipQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.MembershipQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v1.MembershipOrgQuery.serializeBinaryToWriter
    );
  }
  f = message.getProjectQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v1.MembershipProjectQuery.serializeBinaryToWriter
    );
  }
  f = message.getProjectGrantQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v1.MembershipProjectGrantQuery.serializeBinaryToWriter
    );
  }
  f = message.getIamQuery();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v1.MembershipIAMQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional MembershipOrgQuery org_query = 1;
 * @return {?proto.zitadel.user.v1.MembershipOrgQuery}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.getOrgQuery = function() {
  return /** @type{?proto.zitadel.user.v1.MembershipOrgQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.MembershipOrgQuery, 1));
};


/**
 * @param {?proto.zitadel.user.v1.MembershipOrgQuery|undefined} value
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
*/
proto.zitadel.user.v1.MembershipQuery.prototype.setOrgQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.zitadel.user.v1.MembershipQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
 */
proto.zitadel.user.v1.MembershipQuery.prototype.clearOrgQuery = function() {
  return this.setOrgQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.hasOrgQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MembershipProjectQuery project_query = 2;
 * @return {?proto.zitadel.user.v1.MembershipProjectQuery}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.getProjectQuery = function() {
  return /** @type{?proto.zitadel.user.v1.MembershipProjectQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.MembershipProjectQuery, 2));
};


/**
 * @param {?proto.zitadel.user.v1.MembershipProjectQuery|undefined} value
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
*/
proto.zitadel.user.v1.MembershipQuery.prototype.setProjectQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v1.MembershipQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
 */
proto.zitadel.user.v1.MembershipQuery.prototype.clearProjectQuery = function() {
  return this.setProjectQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.hasProjectQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MembershipProjectGrantQuery project_grant_query = 3;
 * @return {?proto.zitadel.user.v1.MembershipProjectGrantQuery}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.getProjectGrantQuery = function() {
  return /** @type{?proto.zitadel.user.v1.MembershipProjectGrantQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.MembershipProjectGrantQuery, 3));
};


/**
 * @param {?proto.zitadel.user.v1.MembershipProjectGrantQuery|undefined} value
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
*/
proto.zitadel.user.v1.MembershipQuery.prototype.setProjectGrantQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v1.MembershipQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
 */
proto.zitadel.user.v1.MembershipQuery.prototype.clearProjectGrantQuery = function() {
  return this.setProjectGrantQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.hasProjectGrantQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MembershipIAMQuery iam_query = 4;
 * @return {?proto.zitadel.user.v1.MembershipIAMQuery}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.getIamQuery = function() {
  return /** @type{?proto.zitadel.user.v1.MembershipIAMQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.MembershipIAMQuery, 4));
};


/**
 * @param {?proto.zitadel.user.v1.MembershipIAMQuery|undefined} value
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
*/
proto.zitadel.user.v1.MembershipQuery.prototype.setIamQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v1.MembershipQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.MembershipQuery} returns this
 */
proto.zitadel.user.v1.MembershipQuery.prototype.clearIamQuery = function() {
  return this.setIamQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.MembershipQuery.prototype.hasIamQuery = function() {
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
proto.zitadel.user.v1.MembershipOrgQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.MembershipOrgQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.MembershipOrgQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipOrgQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.MembershipOrgQuery}
 */
proto.zitadel.user.v1.MembershipOrgQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.MembershipOrgQuery;
  return proto.zitadel.user.v1.MembershipOrgQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.MembershipOrgQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.MembershipOrgQuery}
 */
proto.zitadel.user.v1.MembershipOrgQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
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
proto.zitadel.user.v1.MembershipOrgQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.MembershipOrgQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.MembershipOrgQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipOrgQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.MembershipOrgQuery.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.MembershipOrgQuery} returns this
 */
proto.zitadel.user.v1.MembershipOrgQuery.prototype.setOrgId = function(value) {
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
proto.zitadel.user.v1.MembershipProjectQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.MembershipProjectQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.MembershipProjectQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipProjectQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.MembershipProjectQuery}
 */
proto.zitadel.user.v1.MembershipProjectQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.MembershipProjectQuery;
  return proto.zitadel.user.v1.MembershipProjectQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.MembershipProjectQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.MembershipProjectQuery}
 */
proto.zitadel.user.v1.MembershipProjectQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v1.MembershipProjectQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.MembershipProjectQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.MembershipProjectQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipProjectQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.MembershipProjectQuery.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.MembershipProjectQuery} returns this
 */
proto.zitadel.user.v1.MembershipProjectQuery.prototype.setProjectId = function(value) {
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
proto.zitadel.user.v1.MembershipProjectGrantQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.MembershipProjectGrantQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.MembershipProjectGrantQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectGrantId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.MembershipProjectGrantQuery}
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.MembershipProjectGrantQuery;
  return proto.zitadel.user.v1.MembershipProjectGrantQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.MembershipProjectGrantQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.MembershipProjectGrantQuery}
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
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
proto.zitadel.user.v1.MembershipProjectGrantQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.MembershipProjectGrantQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.MembershipProjectGrantQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_grant_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.MembershipProjectGrantQuery} returns this
 */
proto.zitadel.user.v1.MembershipProjectGrantQuery.prototype.setProjectGrantId = function(value) {
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
proto.zitadel.user.v1.MembershipIAMQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.MembershipIAMQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.MembershipIAMQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipIAMQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
iam: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.zitadel.user.v1.MembershipIAMQuery}
 */
proto.zitadel.user.v1.MembershipIAMQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.MembershipIAMQuery;
  return proto.zitadel.user.v1.MembershipIAMQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.MembershipIAMQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.MembershipIAMQuery}
 */
proto.zitadel.user.v1.MembershipIAMQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIam(value);
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
proto.zitadel.user.v1.MembershipIAMQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.MembershipIAMQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.MembershipIAMQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.MembershipIAMQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIam();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool iam = 1;
 * @return {boolean}
 */
proto.zitadel.user.v1.MembershipIAMQuery.prototype.getIam = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.MembershipIAMQuery} returns this
 */
proto.zitadel.user.v1.MembershipIAMQuery.prototype.setIam = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.zitadel.user.v1.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
agentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
authState: jspb.Message.getFieldWithDefault(msg, 3, 0),
userId: jspb.Message.getFieldWithDefault(msg, 4, ""),
userName: jspb.Message.getFieldWithDefault(msg, 5, ""),
loginName: jspb.Message.getFieldWithDefault(msg, 7, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 8, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
avatarUrl: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.zitadel.user.v1.Session}
 */
proto.zitadel.user.v1.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.Session;
  return proto.zitadel.user.v1.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.Session}
 */
proto.zitadel.user.v1.Session.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentId(value);
      break;
    case 3:
      var value = /** @type {!proto.zitadel.user.v1.SessionState} */ (reader.readEnum());
      msg.setAuthState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoginName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 9:
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
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
proto.zitadel.user.v1.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLoginName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_id = 2;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getAgentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setAgentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SessionState auth_state = 3;
 * @return {!proto.zitadel.user.v1.SessionState}
 */
proto.zitadel.user.v1.Session.prototype.getAuthState = function() {
  return /** @type {!proto.zitadel.user.v1.SessionState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zitadel.user.v1.SessionState} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setAuthState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string user_id = 4;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_name = 5;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string login_name = 7;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getLoginName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setLoginName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string display_name = 8;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 9;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.Session.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 9));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.Session} returns this
*/
proto.zitadel.user.v1.Session.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.Session.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string avatar_url = 10;
 * @return {string}
 */
proto.zitadel.user.v1.Session.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.Session} returns this
 */
proto.zitadel.user.v1.Session.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.RefreshToken.repeatedFields_ = [7,8];



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
proto.zitadel.user.v1.RefreshToken.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.RefreshToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.RefreshToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.RefreshToken.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
authTime: (f = msg.getAuthTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
idleExpiration: (f = msg.getIdleExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
scopesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
audienceList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.RefreshToken}
 */
proto.zitadel.user.v1.RefreshToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.RefreshToken;
  return proto.zitadel.user.v1.RefreshToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.RefreshToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.RefreshToken}
 */
proto.zitadel.user.v1.RefreshToken.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAuthTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setIdleExpiration(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
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
proto.zitadel.user.v1.RefreshToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.RefreshToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.RefreshToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.RefreshToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIdleExpiration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
*/
proto.zitadel.user.v1.RefreshToken.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.RefreshToken.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp auth_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getAuthTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
*/
proto.zitadel.user.v1.RefreshToken.prototype.setAuthTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearAuthTime = function() {
  return this.setAuthTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.RefreshToken.prototype.hasAuthTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp idle_expiration = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getIdleExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
*/
proto.zitadel.user.v1.RefreshToken.prototype.setIdleExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearIdleExpiration = function() {
  return this.setIdleExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.RefreshToken.prototype.hasIdleExpiration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp expiration = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
*/
proto.zitadel.user.v1.RefreshToken.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.RefreshToken.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string scopes = 7;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated string audience = 8;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.RefreshToken.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.RefreshToken} returns this
 */
proto.zitadel.user.v1.RefreshToken.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.PersonalAccessToken.repeatedFields_ = [4];



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
proto.zitadel.user.v1.PersonalAccessToken.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.PersonalAccessToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.PersonalAccessToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.PersonalAccessToken.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
expirationDate: (f = msg.getExpirationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
scopesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.PersonalAccessToken}
 */
proto.zitadel.user.v1.PersonalAccessToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.PersonalAccessToken;
  return proto.zitadel.user.v1.PersonalAccessToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.PersonalAccessToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.PersonalAccessToken}
 */
proto.zitadel.user.v1.PersonalAccessToken.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
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
proto.zitadel.user.v1.PersonalAccessToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.PersonalAccessToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.PersonalAccessToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.PersonalAccessToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
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
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
*/
proto.zitadel.user.v1.PersonalAccessToken.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp expiration_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.getExpirationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
*/
proto.zitadel.user.v1.PersonalAccessToken.prototype.setExpirationDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.clearExpirationDate = function() {
  return this.setExpirationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string scopes = 4;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.PersonalAccessToken} returns this
 */
proto.zitadel.user.v1.PersonalAccessToken.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.UserGrant.repeatedFields_ = [3];



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
proto.zitadel.user.v1.UserGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
details: (f = msg.getDetails()) && zitadel_object_pb.ObjectDetails.toObject(includeInstance, f),
roleKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
state: jspb.Message.getFieldWithDefault(msg, 4, 0),
userId: jspb.Message.getFieldWithDefault(msg, 5, ""),
userName: jspb.Message.getFieldWithDefault(msg, 6, ""),
firstName: jspb.Message.getFieldWithDefault(msg, 7, ""),
lastName: jspb.Message.getFieldWithDefault(msg, 8, ""),
email: jspb.Message.getFieldWithDefault(msg, 9, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 10, ""),
orgId: jspb.Message.getFieldWithDefault(msg, 11, ""),
orgName: jspb.Message.getFieldWithDefault(msg, 12, ""),
orgDomain: jspb.Message.getFieldWithDefault(msg, 13, ""),
projectId: jspb.Message.getFieldWithDefault(msg, 14, ""),
projectName: jspb.Message.getFieldWithDefault(msg, 15, ""),
projectGrantId: jspb.Message.getFieldWithDefault(msg, 16, ""),
avatarUrl: jspb.Message.getFieldWithDefault(msg, 17, ""),
preferredLoginName: jspb.Message.getFieldWithDefault(msg, 18, ""),
userType: jspb.Message.getFieldWithDefault(msg, 19, 0),
grantedOrgId: jspb.Message.getFieldWithDefault(msg, 20, ""),
grantedOrgName: jspb.Message.getFieldWithDefault(msg, 21, ""),
grantedOrgDomain: jspb.Message.getFieldWithDefault(msg, 22, "")
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
 * @return {!proto.zitadel.user.v1.UserGrant}
 */
proto.zitadel.user.v1.UserGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrant;
  return proto.zitadel.user.v1.UserGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrant}
 */
proto.zitadel.user.v1.UserGrant.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new zitadel_object_pb.ObjectDetails;
      reader.readMessage(value,zitadel_object_pb.ObjectDetails.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
      break;
    case 4:
      var value = /** @type {!proto.zitadel.user.v1.UserGrantState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgDomain(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLoginName(value);
      break;
    case 19:
      var value = /** @type {!proto.zitadel.user.v1.Type} */ (reader.readEnum());
      msg.setUserType(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgId(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgName(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgDomain(value);
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
proto.zitadel.user.v1.UserGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      zitadel_object_pb.ObjectDetails.serializeBinaryToWriter
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPreferredLoginName();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getUserType();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getGrantedOrgId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getGrantedOrgName();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getGrantedOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.ObjectDetails details = 2;
 * @return {?proto.zitadel.v1.ObjectDetails}
 */
proto.zitadel.user.v1.UserGrant.prototype.getDetails = function() {
  return /** @type{?proto.zitadel.v1.ObjectDetails} */ (
    jspb.Message.getWrapperField(this, zitadel_object_pb.ObjectDetails, 2));
};


/**
 * @param {?proto.zitadel.v1.ObjectDetails|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
*/
proto.zitadel.user.v1.UserGrant.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrant.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.UserGrant.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setRoleKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.addRoleKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.clearRoleKeysList = function() {
  return this.setRoleKeysList([]);
};


/**
 * optional UserGrantState state = 4;
 * @return {!proto.zitadel.user.v1.UserGrantState}
 */
proto.zitadel.user.v1.UserGrant.prototype.getState = function() {
  return /** @type {!proto.zitadel.user.v1.UserGrantState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.zitadel.user.v1.UserGrantState} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_name = 6;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string first_name = 7;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string last_name = 8;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string email = 9;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string display_name = 10;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string org_id = 11;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string org_name = 12;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string org_domain = 13;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setOrgDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string project_id = 14;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string project_name = 15;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string project_grant_id = 16;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setProjectGrantId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string avatar_url = 17;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string preferred_login_name = 18;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getPreferredLoginName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setPreferredLoginName = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional Type user_type = 19;
 * @return {!proto.zitadel.user.v1.Type}
 */
proto.zitadel.user.v1.UserGrant.prototype.getUserType = function() {
  return /** @type {!proto.zitadel.user.v1.Type} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Type} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setUserType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional string granted_org_id = 20;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getGrantedOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setGrantedOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string granted_org_name = 21;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getGrantedOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setGrantedOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string granted_org_domain = 22;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrant.prototype.getGrantedOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrant} returns this
 */
proto.zitadel.user.v1.UserGrant.prototype.setGrantedOrgDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zitadel.user.v1.UserGrantQuery.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]];

/**
 * @enum {number}
 */
proto.zitadel.user.v1.UserGrantQuery.QueryCase = {
  QUERY_NOT_SET: 0,
  PROJECT_ID_QUERY: 1,
  USER_ID_QUERY: 2,
  WITH_GRANTED_QUERY: 3,
  ROLE_KEY_QUERY: 4,
  PROJECT_GRANT_ID_QUERY: 5,
  USER_NAME_QUERY: 6,
  FIRST_NAME_QUERY: 7,
  LAST_NAME_QUERY: 8,
  EMAIL_QUERY: 9,
  ORG_NAME_QUERY: 10,
  ORG_DOMAIN_QUERY: 11,
  PROJECT_NAME_QUERY: 12,
  DISPLAY_NAME_QUERY: 13,
  USER_TYPE_QUERY: 14,
  IN_USER_IDS_QUERY: 15
};

/**
 * @return {proto.zitadel.user.v1.UserGrantQuery.QueryCase}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getQueryCase = function() {
  return /** @type {proto.zitadel.user.v1.UserGrantQuery.QueryCase} */(jspb.Message.computeOneofCase(this, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0]));
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
proto.zitadel.user.v1.UserGrantQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectIdQuery: (f = msg.getProjectIdQuery()) && proto.zitadel.user.v1.UserGrantProjectIDQuery.toObject(includeInstance, f),
userIdQuery: (f = msg.getUserIdQuery()) && proto.zitadel.user.v1.UserGrantUserIDQuery.toObject(includeInstance, f),
withGrantedQuery: (f = msg.getWithGrantedQuery()) && proto.zitadel.user.v1.UserGrantWithGrantedQuery.toObject(includeInstance, f),
roleKeyQuery: (f = msg.getRoleKeyQuery()) && proto.zitadel.user.v1.UserGrantRoleKeyQuery.toObject(includeInstance, f),
projectGrantIdQuery: (f = msg.getProjectGrantIdQuery()) && proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.toObject(includeInstance, f),
userNameQuery: (f = msg.getUserNameQuery()) && proto.zitadel.user.v1.UserGrantUserNameQuery.toObject(includeInstance, f),
firstNameQuery: (f = msg.getFirstNameQuery()) && proto.zitadel.user.v1.UserGrantFirstNameQuery.toObject(includeInstance, f),
lastNameQuery: (f = msg.getLastNameQuery()) && proto.zitadel.user.v1.UserGrantLastNameQuery.toObject(includeInstance, f),
emailQuery: (f = msg.getEmailQuery()) && proto.zitadel.user.v1.UserGrantEmailQuery.toObject(includeInstance, f),
orgNameQuery: (f = msg.getOrgNameQuery()) && proto.zitadel.user.v1.UserGrantOrgNameQuery.toObject(includeInstance, f),
orgDomainQuery: (f = msg.getOrgDomainQuery()) && proto.zitadel.user.v1.UserGrantOrgDomainQuery.toObject(includeInstance, f),
projectNameQuery: (f = msg.getProjectNameQuery()) && proto.zitadel.user.v1.UserGrantProjectNameQuery.toObject(includeInstance, f),
displayNameQuery: (f = msg.getDisplayNameQuery()) && proto.zitadel.user.v1.UserGrantDisplayNameQuery.toObject(includeInstance, f),
userTypeQuery: (f = msg.getUserTypeQuery()) && proto.zitadel.user.v1.UserGrantUserTypeQuery.toObject(includeInstance, f),
inUserIdsQuery: (f = msg.getInUserIdsQuery()) && proto.zitadel.user.v1.UserGrantInUserIDsQuery.toObject(includeInstance, f)
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
 * @return {!proto.zitadel.user.v1.UserGrantQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantQuery;
  return proto.zitadel.user.v1.UserGrantQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zitadel.user.v1.UserGrantProjectIDQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantProjectIDQuery.deserializeBinaryFromReader);
      msg.setProjectIdQuery(value);
      break;
    case 2:
      var value = new proto.zitadel.user.v1.UserGrantUserIDQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantUserIDQuery.deserializeBinaryFromReader);
      msg.setUserIdQuery(value);
      break;
    case 3:
      var value = new proto.zitadel.user.v1.UserGrantWithGrantedQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantWithGrantedQuery.deserializeBinaryFromReader);
      msg.setWithGrantedQuery(value);
      break;
    case 4:
      var value = new proto.zitadel.user.v1.UserGrantRoleKeyQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantRoleKeyQuery.deserializeBinaryFromReader);
      msg.setRoleKeyQuery(value);
      break;
    case 5:
      var value = new proto.zitadel.user.v1.UserGrantProjectGrantIDQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.deserializeBinaryFromReader);
      msg.setProjectGrantIdQuery(value);
      break;
    case 6:
      var value = new proto.zitadel.user.v1.UserGrantUserNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantUserNameQuery.deserializeBinaryFromReader);
      msg.setUserNameQuery(value);
      break;
    case 7:
      var value = new proto.zitadel.user.v1.UserGrantFirstNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantFirstNameQuery.deserializeBinaryFromReader);
      msg.setFirstNameQuery(value);
      break;
    case 8:
      var value = new proto.zitadel.user.v1.UserGrantLastNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantLastNameQuery.deserializeBinaryFromReader);
      msg.setLastNameQuery(value);
      break;
    case 9:
      var value = new proto.zitadel.user.v1.UserGrantEmailQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantEmailQuery.deserializeBinaryFromReader);
      msg.setEmailQuery(value);
      break;
    case 10:
      var value = new proto.zitadel.user.v1.UserGrantOrgNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantOrgNameQuery.deserializeBinaryFromReader);
      msg.setOrgNameQuery(value);
      break;
    case 11:
      var value = new proto.zitadel.user.v1.UserGrantOrgDomainQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantOrgDomainQuery.deserializeBinaryFromReader);
      msg.setOrgDomainQuery(value);
      break;
    case 12:
      var value = new proto.zitadel.user.v1.UserGrantProjectNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantProjectNameQuery.deserializeBinaryFromReader);
      msg.setProjectNameQuery(value);
      break;
    case 13:
      var value = new proto.zitadel.user.v1.UserGrantDisplayNameQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantDisplayNameQuery.deserializeBinaryFromReader);
      msg.setDisplayNameQuery(value);
      break;
    case 14:
      var value = new proto.zitadel.user.v1.UserGrantUserTypeQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantUserTypeQuery.deserializeBinaryFromReader);
      msg.setUserTypeQuery(value);
      break;
    case 15:
      var value = new proto.zitadel.user.v1.UserGrantInUserIDsQuery;
      reader.readMessage(value,proto.zitadel.user.v1.UserGrantInUserIDsQuery.deserializeBinaryFromReader);
      msg.setInUserIdsQuery(value);
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
proto.zitadel.user.v1.UserGrantQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectIdQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zitadel.user.v1.UserGrantProjectIDQuery.serializeBinaryToWriter
    );
  }
  f = message.getUserIdQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zitadel.user.v1.UserGrantUserIDQuery.serializeBinaryToWriter
    );
  }
  f = message.getWithGrantedQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zitadel.user.v1.UserGrantWithGrantedQuery.serializeBinaryToWriter
    );
  }
  f = message.getRoleKeyQuery();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zitadel.user.v1.UserGrantRoleKeyQuery.serializeBinaryToWriter
    );
  }
  f = message.getProjectGrantIdQuery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.serializeBinaryToWriter
    );
  }
  f = message.getUserNameQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.zitadel.user.v1.UserGrantUserNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getFirstNameQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.zitadel.user.v1.UserGrantFirstNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getLastNameQuery();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.zitadel.user.v1.UserGrantLastNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getEmailQuery();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.zitadel.user.v1.UserGrantEmailQuery.serializeBinaryToWriter
    );
  }
  f = message.getOrgNameQuery();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.zitadel.user.v1.UserGrantOrgNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getOrgDomainQuery();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.zitadel.user.v1.UserGrantOrgDomainQuery.serializeBinaryToWriter
    );
  }
  f = message.getProjectNameQuery();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.zitadel.user.v1.UserGrantProjectNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getDisplayNameQuery();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.zitadel.user.v1.UserGrantDisplayNameQuery.serializeBinaryToWriter
    );
  }
  f = message.getUserTypeQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.zitadel.user.v1.UserGrantUserTypeQuery.serializeBinaryToWriter
    );
  }
  f = message.getInUserIdsQuery();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.zitadel.user.v1.UserGrantInUserIDsQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserGrantProjectIDQuery project_id_query = 1;
 * @return {?proto.zitadel.user.v1.UserGrantProjectIDQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getProjectIdQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantProjectIDQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantProjectIDQuery, 1));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantProjectIDQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setProjectIdQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearProjectIdQuery = function() {
  return this.setProjectIdQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasProjectIdQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserGrantUserIDQuery user_id_query = 2;
 * @return {?proto.zitadel.user.v1.UserGrantUserIDQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getUserIdQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantUserIDQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantUserIDQuery, 2));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantUserIDQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setUserIdQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearUserIdQuery = function() {
  return this.setUserIdQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasUserIdQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UserGrantWithGrantedQuery with_granted_query = 3;
 * @return {?proto.zitadel.user.v1.UserGrantWithGrantedQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getWithGrantedQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantWithGrantedQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantWithGrantedQuery, 3));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantWithGrantedQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setWithGrantedQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearWithGrantedQuery = function() {
  return this.setWithGrantedQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasWithGrantedQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UserGrantRoleKeyQuery role_key_query = 4;
 * @return {?proto.zitadel.user.v1.UserGrantRoleKeyQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getRoleKeyQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantRoleKeyQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantRoleKeyQuery, 4));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantRoleKeyQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setRoleKeyQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearRoleKeyQuery = function() {
  return this.setRoleKeyQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasRoleKeyQuery = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UserGrantProjectGrantIDQuery project_grant_id_query = 5;
 * @return {?proto.zitadel.user.v1.UserGrantProjectGrantIDQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getProjectGrantIdQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantProjectGrantIDQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantProjectGrantIDQuery, 5));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantProjectGrantIDQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setProjectGrantIdQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearProjectGrantIdQuery = function() {
  return this.setProjectGrantIdQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasProjectGrantIdQuery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UserGrantUserNameQuery user_name_query = 6;
 * @return {?proto.zitadel.user.v1.UserGrantUserNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getUserNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantUserNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantUserNameQuery, 6));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantUserNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setUserNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearUserNameQuery = function() {
  return this.setUserNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasUserNameQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional UserGrantFirstNameQuery first_name_query = 7;
 * @return {?proto.zitadel.user.v1.UserGrantFirstNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getFirstNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantFirstNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantFirstNameQuery, 7));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantFirstNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setFirstNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearFirstNameQuery = function() {
  return this.setFirstNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasFirstNameQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UserGrantLastNameQuery last_name_query = 8;
 * @return {?proto.zitadel.user.v1.UserGrantLastNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getLastNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantLastNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantLastNameQuery, 8));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantLastNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setLastNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearLastNameQuery = function() {
  return this.setLastNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasLastNameQuery = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional UserGrantEmailQuery email_query = 9;
 * @return {?proto.zitadel.user.v1.UserGrantEmailQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getEmailQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantEmailQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantEmailQuery, 9));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantEmailQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setEmailQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearEmailQuery = function() {
  return this.setEmailQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasEmailQuery = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional UserGrantOrgNameQuery org_name_query = 10;
 * @return {?proto.zitadel.user.v1.UserGrantOrgNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getOrgNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantOrgNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantOrgNameQuery, 10));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantOrgNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setOrgNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearOrgNameQuery = function() {
  return this.setOrgNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasOrgNameQuery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional UserGrantOrgDomainQuery org_domain_query = 11;
 * @return {?proto.zitadel.user.v1.UserGrantOrgDomainQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getOrgDomainQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantOrgDomainQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantOrgDomainQuery, 11));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantOrgDomainQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setOrgDomainQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearOrgDomainQuery = function() {
  return this.setOrgDomainQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasOrgDomainQuery = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional UserGrantProjectNameQuery project_name_query = 12;
 * @return {?proto.zitadel.user.v1.UserGrantProjectNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getProjectNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantProjectNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantProjectNameQuery, 12));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantProjectNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setProjectNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearProjectNameQuery = function() {
  return this.setProjectNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasProjectNameQuery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional UserGrantDisplayNameQuery display_name_query = 13;
 * @return {?proto.zitadel.user.v1.UserGrantDisplayNameQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getDisplayNameQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantDisplayNameQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantDisplayNameQuery, 13));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantDisplayNameQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setDisplayNameQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearDisplayNameQuery = function() {
  return this.setDisplayNameQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasDisplayNameQuery = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional UserGrantUserTypeQuery user_type_query = 14;
 * @return {?proto.zitadel.user.v1.UserGrantUserTypeQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getUserTypeQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantUserTypeQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantUserTypeQuery, 14));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantUserTypeQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setUserTypeQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearUserTypeQuery = function() {
  return this.setUserTypeQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasUserTypeQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional UserGrantInUserIDsQuery in_user_ids_query = 15;
 * @return {?proto.zitadel.user.v1.UserGrantInUserIDsQuery}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.getInUserIdsQuery = function() {
  return /** @type{?proto.zitadel.user.v1.UserGrantInUserIDsQuery} */ (
    jspb.Message.getWrapperField(this, proto.zitadel.user.v1.UserGrantInUserIDsQuery, 15));
};


/**
 * @param {?proto.zitadel.user.v1.UserGrantInUserIDsQuery|undefined} value
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
*/
proto.zitadel.user.v1.UserGrantQuery.prototype.setInUserIdsQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.zitadel.user.v1.UserGrantQuery.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zitadel.user.v1.UserGrantQuery} returns this
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.clearInUserIdsQuery = function() {
  return this.setInUserIdsQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantQuery.prototype.hasInUserIdsQuery = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.zitadel.user.v1.UserGrantProjectIDQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantProjectIDQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantProjectIDQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.UserGrantProjectIDQuery}
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantProjectIDQuery;
  return proto.zitadel.user.v1.UserGrantProjectIDQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantProjectIDQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantProjectIDQuery}
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.deserializeBinaryFromReader = function(msg, reader) {
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
proto.zitadel.user.v1.UserGrantProjectIDQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantProjectIDQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantProjectIDQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantProjectIDQuery} returns this
 */
proto.zitadel.user.v1.UserGrantProjectIDQuery.prototype.setProjectId = function(value) {
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
proto.zitadel.user.v1.UserGrantUserIDQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantUserIDQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantUserIDQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.UserGrantUserIDQuery}
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantUserIDQuery;
  return proto.zitadel.user.v1.UserGrantUserIDQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantUserIDQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantUserIDQuery}
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.zitadel.user.v1.UserGrantUserIDQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantUserIDQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantUserIDQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantUserIDQuery} returns this
 */
proto.zitadel.user.v1.UserGrantUserIDQuery.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.repeatedFields_ = [1];



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
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantInUserIDsQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
inUserIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.zitadel.user.v1.UserGrantInUserIDsQuery}
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantInUserIDsQuery;
  return proto.zitadel.user.v1.UserGrantInUserIDsQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantInUserIDsQuery}
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInUserIds(value);
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
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantInUserIDsQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string in_user_ids = 1;
 * @return {!Array<string>}
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.getInUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} returns this
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.setInUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} returns this
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.addInUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zitadel.user.v1.UserGrantInUserIDsQuery} returns this
 */
proto.zitadel.user.v1.UserGrantInUserIDsQuery.prototype.clearInUserIdsList = function() {
  return this.setInUserIdsList([]);
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
proto.zitadel.user.v1.UserGrantWithGrantedQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantWithGrantedQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantWithGrantedQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
withGranted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.zitadel.user.v1.UserGrantWithGrantedQuery}
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantWithGrantedQuery;
  return proto.zitadel.user.v1.UserGrantWithGrantedQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantWithGrantedQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantWithGrantedQuery}
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithGranted(value);
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
proto.zitadel.user.v1.UserGrantWithGrantedQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantWithGrantedQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantWithGrantedQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithGranted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool with_granted = 1;
 * @return {boolean}
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.prototype.getWithGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.zitadel.user.v1.UserGrantWithGrantedQuery} returns this
 */
proto.zitadel.user.v1.UserGrantWithGrantedQuery.prototype.setWithGranted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantRoleKeyQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantRoleKeyQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
roleKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantRoleKeyQuery}
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantRoleKeyQuery;
  return proto.zitadel.user.v1.UserGrantRoleKeyQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantRoleKeyQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantRoleKeyQuery}
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleKey(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantRoleKeyQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantRoleKeyQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string role_key = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.getRoleKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantRoleKeyQuery} returns this
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.setRoleKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantRoleKeyQuery} returns this
 */
proto.zitadel.user.v1.UserGrantRoleKeyQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectGrantId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery}
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantProjectGrantIDQuery;
  return proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery}
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
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
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_grant_id = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantProjectGrantIDQuery} returns this
 */
proto.zitadel.user.v1.UserGrantProjectGrantIDQuery.prototype.setProjectGrantId = function(value) {
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
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantUserNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantUserNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantUserNameQuery}
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantUserNameQuery;
  return proto.zitadel.user.v1.UserGrantUserNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantUserNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantUserNameQuery}
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantUserNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantUserNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantUserNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantUserNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantUserNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantFirstNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantFirstNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantFirstNameQuery}
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantFirstNameQuery;
  return proto.zitadel.user.v1.UserGrantFirstNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantFirstNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantFirstNameQuery}
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantFirstNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantFirstNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantFirstNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantFirstNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantFirstNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantLastNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantLastNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
lastName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantLastNameQuery}
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantLastNameQuery;
  return proto.zitadel.user.v1.UserGrantLastNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantLastNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantLastNameQuery}
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantLastNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantLastNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string last_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantLastNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantLastNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantLastNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantEmailQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantEmailQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantEmailQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
email: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantEmailQuery}
 */
proto.zitadel.user.v1.UserGrantEmailQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantEmailQuery;
  return proto.zitadel.user.v1.UserGrantEmailQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantEmailQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantEmailQuery}
 */
proto.zitadel.user.v1.UserGrantEmailQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantEmailQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantEmailQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantEmailQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantEmailQuery} returns this
 */
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantEmailQuery} returns this
 */
proto.zitadel.user.v1.UserGrantEmailQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantOrgNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantOrgNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
orgName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantOrgNameQuery}
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantOrgNameQuery;
  return proto.zitadel.user.v1.UserGrantOrgNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantOrgNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantOrgNameQuery}
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantOrgNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantOrgNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string org_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantOrgNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantOrgNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantOrgNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantOrgDomainQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantOrgDomainQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
orgDomain: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantOrgDomainQuery}
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantOrgDomainQuery;
  return proto.zitadel.user.v1.UserGrantOrgDomainQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantOrgDomainQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantOrgDomainQuery}
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgDomain(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantOrgDomainQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantOrgDomainQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string org_domain = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.getOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantOrgDomainQuery} returns this
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.setOrgDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantOrgDomainQuery} returns this
 */
proto.zitadel.user.v1.UserGrantOrgDomainQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantProjectNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantProjectNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
projectName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantProjectNameQuery}
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantProjectNameQuery;
  return proto.zitadel.user.v1.UserGrantProjectNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantProjectNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantProjectNameQuery}
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantProjectNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantProjectNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string project_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantProjectNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantProjectNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantProjectNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantDisplayNameQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantDisplayNameQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
displayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
method: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantDisplayNameQuery}
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantDisplayNameQuery;
  return proto.zitadel.user.v1.UserGrantDisplayNameQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantDisplayNameQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantDisplayNameQuery}
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {!proto.zitadel.v1.TextQueryMethod} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantDisplayNameQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantDisplayNameQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string display_name = 1;
 * @return {string}
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zitadel.user.v1.UserGrantDisplayNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional zitadel.v1.TextQueryMethod method = 2;
 * @return {!proto.zitadel.v1.TextQueryMethod}
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.getMethod = function() {
  return /** @type {!proto.zitadel.v1.TextQueryMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.zitadel.v1.TextQueryMethod} value
 * @return {!proto.zitadel.user.v1.UserGrantDisplayNameQuery} returns this
 */
proto.zitadel.user.v1.UserGrantDisplayNameQuery.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.zitadel.user.v1.UserGrantUserTypeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.zitadel.user.v1.UserGrantUserTypeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zitadel.user.v1.UserGrantUserTypeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.zitadel.user.v1.UserGrantUserTypeQuery}
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zitadel.user.v1.UserGrantUserTypeQuery;
  return proto.zitadel.user.v1.UserGrantUserTypeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zitadel.user.v1.UserGrantUserTypeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zitadel.user.v1.UserGrantUserTypeQuery}
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.zitadel.user.v1.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.zitadel.user.v1.UserGrantUserTypeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zitadel.user.v1.UserGrantUserTypeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zitadel.user.v1.UserGrantUserTypeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Type type = 1;
 * @return {!proto.zitadel.user.v1.Type}
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.prototype.getType = function() {
  return /** @type {!proto.zitadel.user.v1.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.zitadel.user.v1.Type} value
 * @return {!proto.zitadel.user.v1.UserGrantUserTypeQuery} returns this
 */
proto.zitadel.user.v1.UserGrantUserTypeQuery.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.zitadel.user.v1.UserState = {
  USER_STATE_UNSPECIFIED: 0,
  USER_STATE_ACTIVE: 1,
  USER_STATE_INACTIVE: 2,
  USER_STATE_DELETED: 3,
  USER_STATE_LOCKED: 4,
  USER_STATE_SUSPEND: 5,
  USER_STATE_INITIAL: 6
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.Gender = {
  GENDER_UNSPECIFIED: 0,
  GENDER_FEMALE: 1,
  GENDER_MALE: 2,
  GENDER_DIVERSE: 3
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.AccessTokenType = {
  ACCESS_TOKEN_TYPE_BEARER: 0,
  ACCESS_TOKEN_TYPE_JWT: 1
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_HUMAN: 1,
  TYPE_MACHINE: 2
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.UserFieldName = {
  USER_FIELD_NAME_UNSPECIFIED: 0,
  USER_FIELD_NAME_USER_NAME: 1,
  USER_FIELD_NAME_FIRST_NAME: 2,
  USER_FIELD_NAME_LAST_NAME: 3,
  USER_FIELD_NAME_NICK_NAME: 4,
  USER_FIELD_NAME_DISPLAY_NAME: 5,
  USER_FIELD_NAME_EMAIL: 6,
  USER_FIELD_NAME_STATE: 7,
  USER_FIELD_NAME_TYPE: 8,
  USER_FIELD_NAME_CREATION_DATE: 9
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.AuthFactorState = {
  AUTH_FACTOR_STATE_UNSPECIFIED: 0,
  AUTH_FACTOR_STATE_NOT_READY: 1,
  AUTH_FACTOR_STATE_READY: 2,
  AUTH_FACTOR_STATE_REMOVED: 3
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.SessionState = {
  SESSION_STATE_UNSPECIFIED: 0,
  SESSION_STATE_ACTIVE: 1,
  SESSION_STATE_TERMINATED: 2
};

/**
 * @enum {number}
 */
proto.zitadel.user.v1.UserGrantState = {
  USER_GRANT_STATE_UNSPECIFIED: 0,
  USER_GRANT_STATE_ACTIVE: 1,
  USER_GRANT_STATE_INACTIVE: 2
};

goog.object.extend(exports, proto.zitadel.user.v1);
