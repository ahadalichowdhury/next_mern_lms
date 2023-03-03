"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _ContextApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContextApi */ \"./ContextApi/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ForgotPassword = ()=>{\n    _s();\n    // state\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // context\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextApi__WEBPACK_IMPORTED_MODULE_4__.Context);\n    const { user  } = state;\n    // redirect if user is logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user !== null) router.push(\"/\");\n    }, [\n        user\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            setLoading(true);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/v1/forgot-password\", {\n                email\n            });\n            setSuccess(data);\n            setLoading(false);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Check your email for password reset link\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response.data);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Forgot Password\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary\",\n                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n                                spin: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                                lineNumber: 64,\n                                columnNumber: 24\n                            }, undefined) : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ForgotPassword, \"DNFMGyB8SipzAW85VsgWHKRtMRg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ForgotPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPassword);\nvar _c;\n$RefreshReg$(_c, \"ForgotPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNoQjtBQUNEO0FBQ2I7QUFDdUI7QUFDVDtBQUV4QyxNQUFNUSxpQkFBaUIsSUFBTTs7SUFDM0IsUUFBUTtJQUNSLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxTQUFTO0lBQ1QsTUFBTW1CLFNBQVNoQixzREFBU0E7SUFFeEIsVUFBVTtJQUNWLE1BQU0sRUFBRWlCLE1BQUssRUFBRSxHQUFHbEIsaURBQVVBLENBQUNLLGdEQUFPQTtJQUNwQyxNQUFNLEVBQUVjLEtBQUksRUFBRSxHQUFHRDtJQUVqQixnQ0FBZ0M7SUFDaENuQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSW9CLFNBQVMsSUFBSSxFQUFFRixPQUFPRyxJQUFJLENBQUM7SUFDakMsR0FBRztRQUFDRDtLQUFLO0lBRVQsTUFBTUUsZUFBZSxPQUFPQyxJQUFNO1FBQ2hDQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRlAsV0FBVyxJQUFJO1lBQ2YsTUFBTSxFQUFFUSxLQUFJLEVBQUUsR0FBRyxNQUFNckIsa0RBQVUsQ0FBRSwyQkFBMEI7Z0JBQzNESTtZQUNGO1lBQ0FLLFdBQVdZO1lBQ1hSLFdBQVcsS0FBSztZQUNoQmQscURBQUtBLENBQUM7UUFDUixFQUFFLE9BQU93QixLQUFLO1lBQ1p4Qix1REFBVyxDQUFDd0IsSUFBSUUsUUFBUSxDQUFDSixJQUFJO1lBQzdCUixXQUFXLEtBQUs7UUFDbEI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2E7Z0JBQUdDLFdBQVU7MEJBQTBDOzs7Ozs7MEJBR3hELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUtDLFVBQVVaOztzQ0FDZCw4REFBQ2E7NEJBQ0NDLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZNLE9BQU83Qjs0QkFDUDhCLFVBQVUsQ0FBQ2YsSUFBTWQsU0FBU2MsRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDeENHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ0M7NEJBQ0NOLE1BQUs7NEJBQ0xMLFdBQVU7c0NBR1RmLHdCQUFVLDhEQUFDWCwyREFBWUE7Z0NBQUNzQyxJQUFJOzs7Ozs0Q0FBTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZEO0dBOURNcEM7O1FBU1dMLGtEQUFTQTs7O0tBVHBCSztBQWdFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanM/MWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFN5bmNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRBcGlcIjtcclxuXHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gcm91dGVyXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGNvbnRleHRcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gc3RhdGU7XHJcblxyXG4gIC8vIHJlZGlyZWN0IGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyICE9PSBudWxsKSByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS92MS9mb3Jnb3QtcGFzc3dvcmRgLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRTdWNjZXNzKGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgdG9hc3QoXCJDaGVjayB5b3VyIGVtYWlsIGZvciBwYXNzd29yZCByZXNldCBsaW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcXVhcmVcIj5cclxuICAgICAgICBGb3Jnb3QgUGFzc3dvcmRcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIlxyXG5cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyA8U3luY091dGxpbmVkIHNwaW4gLz4gOiBcIlN1Ym1pdFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsInRvYXN0IiwiYXhpb3MiLCJTeW5jT3V0bGluZWQiLCJDb250ZXh0IiwiRm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInNldEVtYWlsIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiY29kZSIsInNldENvZGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInN0YXRlIiwidXNlciIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9zdCIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJoMSIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwic3BpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});