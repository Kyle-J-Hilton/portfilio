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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        // Create a transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"gmail\",\n            auth: {\n                user: \"kylehilton18@gmail.com\",\n                pass: \"Astronaut123!\"\n            }\n        });\n        // Define the email options\n        const mailOptions = {\n            from: \"kylehilton18@gmail.com\",\n            to: \"kylehilton18@gmail.com\",\n            subject: \"New Contact Form Submission\",\n            text: `Name: ${name}\\nEmail: ${email}\\nQuestion1: ${q1}\\nQeustion2: ${q2}\\nMessage: ${message}`\n        };\n        // Send the email\n        try {\n            await transporter.sendMail(mailOptions);\n            res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Error sending email\"\n            });\n        }\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVyQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO1FBRXpDLHVCQUF1QjtRQUN2QixNQUFNQyxXQUFXLEdBQUdULGlFQUEwQixDQUFDO1lBQzdDVyxPQUFPLEVBQUUsT0FBTztZQUNoQkMsSUFBSSxFQUFFO2dCQUNKQyxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QkMsSUFBSSxFQUFFLGVBQWU7YUFDdEI7U0FDRixDQUFDO1FBRUYsMkJBQTJCO1FBQzNCLE1BQU1DLFdBQVcsR0FBRztZQUNsQkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsRUFBRSxFQUFFLHdCQUF3QjtZQUM1QkMsT0FBTyxFQUFFLDZCQUE2QjtZQUN0Q0MsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFZCxJQUFJLENBQUMsU0FBUyxFQUFFQyxLQUFLLENBQUMsYUFBYSxFQUFFYyxFQUFFLENBQUMsYUFBYSxFQUFFQyxFQUFFLENBQUMsV0FBVyxFQUFFZCxPQUFPLENBQUMsQ0FBQztTQUNoRztRQUdELGlCQUFpQjtRQUNqQixJQUFJO1lBQ0YsTUFBTUUsV0FBVyxDQUFDYSxRQUFRLENBQUNQLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDWixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLElBQUk7YUFBRSxDQUFDLENBQUM7U0FDekMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1lBQ3JCdkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVFLEtBQUssRUFBRSxxQkFBcUI7YUFBRSxDQUFDLENBQUM7U0FDeEQ7S0FDRixNQUFNO1FBQ0x2QixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLEdBQUcsRUFBRSxDQUFDLENBQUMscUJBQXFCO0tBQzdDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9reWxlcy1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gQ3JlYXRlIGEgdHJhbnNwb3J0ZXJcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6ICdreWxlaGlsdG9uMThAZ21haWwuY29tJywgXG4gICAgICAgIHBhc3M6ICdBc3Ryb25hdXQxMjMhJywgXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gRGVmaW5lIHRoZSBlbWFpbCBvcHRpb25zXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiAna3lsZWhpbHRvbjE4QGdtYWlsLmNvbScsIFxuICAgICAgdG86ICdreWxlaGlsdG9uMThAZ21haWwuY29tJywgXG4gICAgICBzdWJqZWN0OiAnTmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uJyxcbiAgICAgIHRleHQ6IGBOYW1lOiAke25hbWV9XFxuRW1haWw6ICR7ZW1haWx9XFxuUXVlc3Rpb24xOiAke3ExfVxcblFldXN0aW9uMjogJHtxMn1cXG5NZXNzYWdlOiAke21lc3NhZ2V9YCxcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8vIFNlbmQgdGhlIGVtYWlsXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3Igc2VuZGluZyBlbWFpbCcgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTsgLy8gTWV0aG9kIE5vdCBBbGxvd2VkXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsInExIiwicTIiLCJzZW5kTWFpbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();