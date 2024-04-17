"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsendEmail&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FsendEmail.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsendEmail&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FsendEmail.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_sendEmail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/sendEmail.js */ \"(api)/./pages/api/sendEmail.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_sendEmail_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_sendEmail_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/sendEmail\",\n        pathname: \"/api/sendEmail\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_sendEmail_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnNlbmRFbWFpbCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGc2VuZEVtYWlsLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3FEO0FBQ3JEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxvREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsb0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3lsZXMtcG9ydGZvbGlvLz9mYTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZEVtYWlsXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZEVtYWlsXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsendEmail&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FsendEmail.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nconst transporter = nodemailer.createTransport({\n    host: \"smtp.ethereal.email\",\n    port: 587,\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASS\n    }\n});\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name, email, q1, q2, message } = req.body;\n        // Compose email\n        const mailOptions = {\n            from: '\"Your Name\" <' + process.env.EMAIL_USER + \">\",\n            to: process.env.EMAIL_MINE,\n            subject: \"New message from contact form\",\n            html: `\n        <p>Name: ${name}</p>\n        <p>Email: ${email}</p>\n        <p>Question 1: ${q1}</p>\n        <p>Question 2: ${q2}</p>\n        <p>Message: ${message}</p>\n      `\n        };\n        try {\n            await transporter.sendMail(mailOptions);\n            res.status(200).json({\n                message: \"Message sent successfully!\"\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Failed to send message.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsb0RBQXdCO0FBQ3hCLE1BQU1FLGFBQWFGLG1CQUFPQSxDQUFDLDhCQUFZO0FBRXZDLE1BQU1HLGNBQWNELFdBQVdFLGVBQWUsQ0FBQztJQUM3Q0MsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07UUFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7SUFDOUI7QUFDRjtBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsT0FBTyxFQUFFLEdBQUdQLElBQUlRLElBQUk7UUFFakQsZ0JBQWdCO1FBQ2hCLE1BQU1DLGNBQWM7WUFDbEJDLE1BQU0sa0JBQWtCaEIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEdBQUc7WUFDakRlLElBQUlqQixRQUFRQyxHQUFHLENBQUNpQixVQUFVO1lBQzFCQyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQztpQkFDSSxFQUFFWCxLQUFLO2tCQUNOLEVBQUVDLE1BQU07dUJBQ0gsRUFBRUMsR0FBRzt1QkFDTCxFQUFFQyxHQUFHO29CQUNSLEVBQUVDLFFBQVE7TUFDeEIsQ0FBQztRQUNIO1FBRUEsSUFBSTtZQUNGLE1BQU1uQixZQUFZMkIsUUFBUSxDQUFDTjtZQUMzQlIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVYsU0FBUztZQUE2QjtRQUMvRCxFQUFFLE9BQU9XLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEwQjtRQUMxRDtJQUNGLE9BQU87UUFDTGpCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUNyRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3lsZXMtcG9ydGZvbGlvLy4vcGFnZXMvYXBpL3NlbmRFbWFpbC5qcz8yMDMwIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xuXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgaG9zdDogXCJzbXRwLmV0aGVyZWFsLmVtYWlsXCIsXG4gIHBvcnQ6IDU4NyxcbiAgYXV0aDoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBxMSwgcTIsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gQ29tcG9zZSBlbWFpbFxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogJ1wiWW91ciBOYW1lXCIgPCcgKyBwcm9jZXNzLmVudi5FTUFJTF9VU0VSICsgJz4nLCBcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9NSU5FLFxuICAgICAgc3ViamVjdDogJ05ldyBtZXNzYWdlIGZyb20gY29udGFjdCBmb3JtJyxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPHA+TmFtZTogJHtuYW1lfTwvcD5cbiAgICAgICAgPHA+RW1haWw6ICR7ZW1haWx9PC9wPlxuICAgICAgICA8cD5RdWVzdGlvbiAxOiAke3ExfTwvcD5cbiAgICAgICAgPHA+UXVlc3Rpb24gMjogJHtxMn08L3A+XG4gICAgICAgIDxwPk1lc3NhZ2U6ICR7bWVzc2FnZX08L3A+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSEnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLicgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTUyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJxMSIsInEyIiwibWVzc2FnZSIsImJvZHkiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsIkVNQUlMX01JTkUiLCJzdWJqZWN0IiwiaHRtbCIsInNlbmRNYWlsIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsendEmail&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FsendEmail.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();