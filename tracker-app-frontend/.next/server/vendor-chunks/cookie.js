"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookie";
exports.ids = ["vendor-chunks/cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module exports.\n * @public\n */ exports.parse = parse;\nexports.serialize = serialize;\n/**\n * Module variables.\n * @private\n */ var decode = decodeURIComponent;\nvar encode = encodeURIComponent;\n/**\n * RegExp to match field-content in RFC 7230 sec 3.2\n *\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\n * field-vchar   = VCHAR / obs-text\n * obs-text      = %x80-FF\n */ var fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\n/**\n * Parse a cookie header.\n *\n * Parse the given cookie header string into an object\n * The object has the various cookies as keys(names) => values\n *\n * @param {string} str\n * @param {object} [options]\n * @return {object}\n * @public\n */ function parse(str, options) {\n    if (typeof str !== \"string\") {\n        throw new TypeError(\"argument str must be a string\");\n    }\n    var obj = {};\n    var opt = options || {};\n    var pairs = str.split(\";\");\n    var dec = opt.decode || decode;\n    for(var i = 0; i < pairs.length; i++){\n        var pair = pairs[i];\n        var index = pair.indexOf(\"=\");\n        // skip things that don't look like key=value\n        if (index < 0) {\n            continue;\n        }\n        var key = pair.substring(0, index).trim();\n        // only assign once\n        if (undefined == obj[key]) {\n            var val = pair.substring(index + 1, pair.length).trim();\n            // quoted values\n            if (val[0] === '\"') {\n                val = val.slice(1, -1);\n            }\n            obj[key] = tryDecode(val, dec);\n        }\n    }\n    return obj;\n}\n/**\n * Serialize data into a cookie header.\n *\n * Serialize the a name value pair into a cookie string suitable for\n * http headers. An optional options object specified cookie parameters.\n *\n * serialize('foo', 'bar', { httpOnly: true })\n *   => \"foo=bar; httpOnly\"\n *\n * @param {string} name\n * @param {string} val\n * @param {object} [options]\n * @return {string}\n * @public\n */ function serialize(name, val, options) {\n    var opt = options || {};\n    var enc = opt.encode || encode;\n    if (typeof enc !== \"function\") {\n        throw new TypeError(\"option encode is invalid\");\n    }\n    if (!fieldContentRegExp.test(name)) {\n        throw new TypeError(\"argument name is invalid\");\n    }\n    var value = enc(val);\n    if (value && !fieldContentRegExp.test(value)) {\n        throw new TypeError(\"argument val is invalid\");\n    }\n    var str = name + \"=\" + value;\n    if (null != opt.maxAge) {\n        var maxAge = opt.maxAge - 0;\n        if (isNaN(maxAge) || !isFinite(maxAge)) {\n            throw new TypeError(\"option maxAge is invalid\");\n        }\n        str += \"; Max-Age=\" + Math.floor(maxAge);\n    }\n    if (opt.domain) {\n        if (!fieldContentRegExp.test(opt.domain)) {\n            throw new TypeError(\"option domain is invalid\");\n        }\n        str += \"; Domain=\" + opt.domain;\n    }\n    if (opt.path) {\n        if (!fieldContentRegExp.test(opt.path)) {\n            throw new TypeError(\"option path is invalid\");\n        }\n        str += \"; Path=\" + opt.path;\n    }\n    if (opt.expires) {\n        if (typeof opt.expires.toUTCString !== \"function\") {\n            throw new TypeError(\"option expires is invalid\");\n        }\n        str += \"; Expires=\" + opt.expires.toUTCString();\n    }\n    if (opt.httpOnly) {\n        str += \"; HttpOnly\";\n    }\n    if (opt.secure) {\n        str += \"; Secure\";\n    }\n    if (opt.sameSite) {\n        var sameSite = typeof opt.sameSite === \"string\" ? opt.sameSite.toLowerCase() : opt.sameSite;\n        switch(sameSite){\n            case true:\n                str += \"; SameSite=Strict\";\n                break;\n            case \"lax\":\n                str += \"; SameSite=Lax\";\n                break;\n            case \"strict\":\n                str += \"; SameSite=Strict\";\n                break;\n            case \"none\":\n                str += \"; SameSite=None\";\n                break;\n            default:\n                throw new TypeError(\"option sameSite is invalid\");\n        }\n    }\n    return str;\n}\n/**\n * Try decoding a string using a decoding function.\n *\n * @param {string} str\n * @param {function} decode\n * @private\n */ function tryDecode(str, decode) {\n    try {\n        return decode(str);\n    } catch (e) {\n        return str;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQTs7O0NBR0MsR0FFREEsYUFBYSxHQUFHQztBQUNoQkQsaUJBQWlCLEdBQUdFO0FBRXBCOzs7Q0FHQyxHQUVELElBQUlDLFNBQVNDO0FBQ2IsSUFBSUMsU0FBU0M7QUFFYjs7Ozs7O0NBTUMsR0FFRCxJQUFJQyxxQkFBcUI7QUFFekI7Ozs7Ozs7Ozs7Q0FVQyxHQUVELFNBQVNOLE1BQU1PLEdBQUcsRUFBRUMsT0FBTztJQUN6QixJQUFJLE9BQU9ELFFBQVEsVUFBVTtRQUMzQixNQUFNLElBQUlFLFVBQVU7SUFDdEI7SUFFQSxJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxNQUFNSCxXQUFXLENBQUM7SUFDdEIsSUFBSUksUUFBUUwsSUFBSU0sS0FBSyxDQUFDO0lBQ3RCLElBQUlDLE1BQU1ILElBQUlULE1BQU0sSUFBSUE7SUFFeEIsSUFBSyxJQUFJYSxJQUFJLEdBQUdBLElBQUlILE1BQU1JLE1BQU0sRUFBRUQsSUFBSztRQUNyQyxJQUFJRSxPQUFPTCxLQUFLLENBQUNHLEVBQUU7UUFDbkIsSUFBSUcsUUFBUUQsS0FBS0UsT0FBTyxDQUFDO1FBRXpCLDZDQUE2QztRQUM3QyxJQUFJRCxRQUFRLEdBQUc7WUFDYjtRQUNGO1FBRUEsSUFBSUUsTUFBTUgsS0FBS0ksU0FBUyxDQUFDLEdBQUdILE9BQU9JLElBQUk7UUFFdkMsbUJBQW1CO1FBQ25CLElBQUlDLGFBQWFiLEdBQUcsQ0FBQ1UsSUFBSSxFQUFFO1lBQ3pCLElBQUlJLE1BQU1QLEtBQUtJLFNBQVMsQ0FBQ0gsUUFBUSxHQUFHRCxLQUFLRCxNQUFNLEVBQUVNLElBQUk7WUFFckQsZ0JBQWdCO1lBQ2hCLElBQUlFLEdBQUcsQ0FBQyxFQUFFLEtBQUssS0FBSztnQkFDbEJBLE1BQU1BLElBQUlDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdEI7WUFFQWYsR0FBRyxDQUFDVSxJQUFJLEdBQUdNLFVBQVVGLEtBQUtWO1FBQzVCO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0NBY0MsR0FFRCxTQUFTVCxVQUFVMEIsSUFBSSxFQUFFSCxHQUFHLEVBQUVoQixPQUFPO0lBQ25DLElBQUlHLE1BQU1ILFdBQVcsQ0FBQztJQUN0QixJQUFJb0IsTUFBTWpCLElBQUlQLE1BQU0sSUFBSUE7SUFFeEIsSUFBSSxPQUFPd0IsUUFBUSxZQUFZO1FBQzdCLE1BQU0sSUFBSW5CLFVBQVU7SUFDdEI7SUFFQSxJQUFJLENBQUNILG1CQUFtQnVCLElBQUksQ0FBQ0YsT0FBTztRQUNsQyxNQUFNLElBQUlsQixVQUFVO0lBQ3RCO0lBRUEsSUFBSXFCLFFBQVFGLElBQUlKO0lBRWhCLElBQUlNLFNBQVMsQ0FBQ3hCLG1CQUFtQnVCLElBQUksQ0FBQ0MsUUFBUTtRQUM1QyxNQUFNLElBQUlyQixVQUFVO0lBQ3RCO0lBRUEsSUFBSUYsTUFBTW9CLE9BQU8sTUFBTUc7SUFFdkIsSUFBSSxRQUFRbkIsSUFBSW9CLE1BQU0sRUFBRTtRQUN0QixJQUFJQSxTQUFTcEIsSUFBSW9CLE1BQU0sR0FBRztRQUUxQixJQUFJQyxNQUFNRCxXQUFXLENBQUNFLFNBQVNGLFNBQVM7WUFDdEMsTUFBTSxJQUFJdEIsVUFBVTtRQUN0QjtRQUVBRixPQUFPLGVBQWUyQixLQUFLQyxLQUFLLENBQUNKO0lBQ25DO0lBRUEsSUFBSXBCLElBQUl5QixNQUFNLEVBQUU7UUFDZCxJQUFJLENBQUM5QixtQkFBbUJ1QixJQUFJLENBQUNsQixJQUFJeUIsTUFBTSxHQUFHO1lBQ3hDLE1BQU0sSUFBSTNCLFVBQVU7UUFDdEI7UUFFQUYsT0FBTyxjQUFjSSxJQUFJeUIsTUFBTTtJQUNqQztJQUVBLElBQUl6QixJQUFJMEIsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDL0IsbUJBQW1CdUIsSUFBSSxDQUFDbEIsSUFBSTBCLElBQUksR0FBRztZQUN0QyxNQUFNLElBQUk1QixVQUFVO1FBQ3RCO1FBRUFGLE9BQU8sWUFBWUksSUFBSTBCLElBQUk7SUFDN0I7SUFFQSxJQUFJMUIsSUFBSTJCLE9BQU8sRUFBRTtRQUNmLElBQUksT0FBTzNCLElBQUkyQixPQUFPLENBQUNDLFdBQVcsS0FBSyxZQUFZO1lBQ2pELE1BQU0sSUFBSTlCLFVBQVU7UUFDdEI7UUFFQUYsT0FBTyxlQUFlSSxJQUFJMkIsT0FBTyxDQUFDQyxXQUFXO0lBQy9DO0lBRUEsSUFBSTVCLElBQUk2QixRQUFRLEVBQUU7UUFDaEJqQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJSSxJQUFJOEIsTUFBTSxFQUFFO1FBQ2RsQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJSSxJQUFJK0IsUUFBUSxFQUFFO1FBQ2hCLElBQUlBLFdBQVcsT0FBTy9CLElBQUkrQixRQUFRLEtBQUssV0FDbkMvQixJQUFJK0IsUUFBUSxDQUFDQyxXQUFXLEtBQUtoQyxJQUFJK0IsUUFBUTtRQUU3QyxPQUFRQTtZQUNOLEtBQUs7Z0JBQ0huQyxPQUFPO2dCQUNQO1lBQ0YsS0FBSztnQkFDSEEsT0FBTztnQkFDUDtZQUNGLEtBQUs7Z0JBQ0hBLE9BQU87Z0JBQ1A7WUFDRixLQUFLO2dCQUNIQSxPQUFPO2dCQUNQO1lBQ0Y7Z0JBQ0UsTUFBTSxJQUFJRSxVQUFVO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUO0FBRUE7Ozs7OztDQU1DLEdBRUQsU0FBU21CLFVBQVVuQixHQUFHLEVBQUVMLE1BQU07SUFDNUIsSUFBSTtRQUNGLE9BQU9BLE9BQU9LO0lBQ2hCLEVBQUUsT0FBT3FDLEdBQUc7UUFDVixPQUFPckM7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tlci1hcHAtZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzPzVkMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge31cbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnOycpXG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgaW5kZXggPSBwYWlyLmluZGV4T2YoJz0nKVxuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyaW5nKDAsIGluZGV4KS50cmltKClcblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICB2YXIgdmFsID0gcGFpci5zdWJzdHJpbmcoaW5kZXggKyAxLCBwYWlyLmxlbmd0aCkudHJpbSgpXG5cbiAgICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICAgIGlmICh2YWxbMF0gPT09ICdcIicpIHtcbiAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuXG4gICAgaWYgKGlzTmFOKG1heEFnZSkgfHwgIWlzRmluaXRlKG1heEFnZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZCcpXG4gICAgfVxuXG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYXJzZSIsInNlcmlhbGl6ZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImZpZWxkQ29udGVudFJlZ0V4cCIsInN0ciIsIm9wdGlvbnMiLCJUeXBlRXJyb3IiLCJvYmoiLCJvcHQiLCJwYWlycyIsInNwbGl0IiwiZGVjIiwiaSIsImxlbmd0aCIsInBhaXIiLCJpbmRleCIsImluZGV4T2YiLCJrZXkiLCJzdWJzdHJpbmciLCJ0cmltIiwidW5kZWZpbmVkIiwidmFsIiwic2xpY2UiLCJ0cnlEZWNvZGUiLCJuYW1lIiwiZW5jIiwidGVzdCIsInZhbHVlIiwibWF4QWdlIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImRvbWFpbiIsInBhdGgiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwidG9Mb3dlckNhc2UiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cookie/index.js\n");

/***/ })

};
;