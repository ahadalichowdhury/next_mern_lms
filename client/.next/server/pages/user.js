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
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./ContextApi/index.js":
/*!*****************************!*\
  !*** ./ContextApi/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst initialState = {\n    user: null\n};\n//create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n//for router\n//root reducer\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n//context provider\nconst Provider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    //router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //when jwt expire\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        //any satus code that lie within the range of 2xx cause this function to trigger\n        return response;\n    }, function(error) {\n        //any status code that falls outside the range of 2xx cause this function to trigger\n        let res = error.message;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            return new Promise((resolve, reject)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/v1/logout\").then((data)=>{\n                    console.log(\"LOGOUT SUCCESS\", data);\n                    dispatch({\n                        type: \"LOGOUT\"\n                    });\n                    window.localStorage.removeItem(\"user\");\n                    router.push(\" /login\");\n                    resolve();\n                }).catch((err)=>{\n                    console.log(\"LOGOUT ERROR\", err);\n                    reject(err);\n                });\n            });\n        }\n    });\n    // useEffect(() => {\n    //   const getCsrfToken = async () => {\n    //     const data = await axios.get(\"http://localhost:8000/api/v1/csrf-token\");\n    //     axios.defaults.headers[\"X-CSRF-TOKEN\"] = data.csrfToken;\n    //     console.log(data);\n    //   };\n    //   getCsrfToken();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\ContextApi\\\\index.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0QXBpL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDbkM7QUFDYztBQUV4QyxNQUFNSyxlQUFlO0lBQ25CQyxNQUFNLElBQUk7QUFDWjtBQUVBLGdCQUFnQjtBQUNoQixNQUFNQyx3QkFBVU4sb0RBQWFBO0FBRTdCLFlBQVk7QUFFWixjQUFjO0FBQ2QsTUFBTU8sY0FBYyxDQUFDQyxPQUFPQyxTQUFXO0lBQ3JDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQ0wsR0FBR0YsS0FBSztnQkFDUkgsTUFBTUksT0FBT0UsT0FBTztZQUN0QjtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdILEtBQUs7Z0JBQ1JILE1BQU0sSUFBSTtZQUNaO1FBQ0Y7WUFDRSxPQUFPRztJQUNYO0FBQ0Y7QUFFQSxrQkFBa0I7QUFDbEIsTUFBTUksV0FBVyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ2pDLE1BQU0sQ0FBQ0wsT0FBT00sU0FBUyxHQUFHZixpREFBVUEsQ0FBQ1EsYUFBYUg7SUFFbERILGdEQUFTQSxDQUFDLElBQU07UUFDZGEsU0FBUztZQUNQSixNQUFNO1lBQ05DLFNBQVNJLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDbEQ7SUFDRixHQUFHLEVBQUU7SUFFTCxRQUFRO0lBQ1IsTUFBTUMsU0FBU2pCLHNEQUFTQTtJQUV4QixpQkFBaUI7SUFDakJELHVFQUErQixDQUM3QixTQUFVb0IsUUFBUSxFQUFFO1FBQ2xCLGdGQUFnRjtRQUVoRixPQUFPQTtJQUNULEdBQ0EsU0FBVUUsS0FBSyxFQUFFO1FBQ2Ysb0ZBQW9GO1FBRXBGLElBQUlDLE1BQU1ELE1BQU1FLE9BQU87UUFDdkIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU9GLElBQUlHLE1BQU0sSUFBSSxDQUFDSCxJQUFJRyxNQUFNLENBQUNDLGdCQUFnQixFQUFFO1lBQ3BFLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO2dCQUN0QzlCLGlEQUNNLENBQUMsa0JBQ0pnQyxJQUFJLENBQUMsQ0FBQ0MsT0FBUztvQkFDZEMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkY7b0JBQzlCckIsU0FBUzt3QkFDUEosTUFBTTtvQkFDUjtvQkFDQU8sT0FBT0MsWUFBWSxDQUFDb0IsVUFBVSxDQUFDO29CQUMvQmxCLE9BQU9tQixJQUFJLENBQUM7b0JBQ1pSO2dCQUNGLEdBQ0NTLEtBQUssQ0FBQyxDQUFDQyxNQUFRO29CQUNkTCxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSTtvQkFDNUJULE9BQU9TO2dCQUNUO1lBQ0o7UUFDRixDQUFDO0lBQ0g7SUFHRixvQkFBb0I7SUFDcEIsdUNBQXVDO0lBQ3ZDLCtFQUErRTtJQUUvRSwrREFBK0Q7SUFDL0QseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsVUFBVTtJQUVWLHFCQUNFLDhEQUFDbkMsUUFBUU0sUUFBUTtRQUFDOEIsT0FBTztZQUFFbEM7WUFBT007UUFBUztrQkFBSUQ7Ozs7OztBQUVuRDtBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL0NvbnRleHRBcGkvaW5kZXguanM/NjE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG59O1xyXG5cclxuLy9jcmVhdGUgY29udGV4dFxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy9mb3Igcm91dGVyXHJcblxyXG4vL3Jvb3QgcmVkdWNlclxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiTE9HT1VUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vL2NvbnRleHQgcHJvdmlkZXJcclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkxPR0lOXCIsXHJcbiAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vcm91dGVyXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vd2hlbiBqd3QgZXhwaXJlXHJcbiAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAvL2FueSBzYXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvL2FueSBzdGF0dXMgY29kZSB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcclxuXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS92MS9sb2dvdXRcIilcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPR09VVCBTVUNDRVNTXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTE9HT1VUXCIsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIiAvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTE9HT1VUIEVSUk9SXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGdldENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY3NyZi10b2tlblwiKTtcclxuXHJcbiAgLy8gICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVE9LRU5cIl0gPSBkYXRhLmNzcmZUb2tlbjtcclxuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgZ2V0Q3NyZlRva2VuKCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IENvbnRleHQsIFByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWR1Y2VyIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsIkNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjb25maWciLCJfX2lzUmV0cnlSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIiwicHVzaCIsImNhdGNoIiwiZXJyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ContextApi/index.js\n");

/***/ }),

/***/ "./pages/user/index.js":
/*!*****************************!*\
  !*** ./pages/user/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _ContextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ContextApi */ \"./ContextApi/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _ContextApi__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, _ContextApi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst UserIndex = ()=>{\n    const [hidden, setHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextApi__WEBPACK_IMPORTED_MODULE_3__.Context);\n    const { user  } = state;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            try {\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/v1/current-user\");\n                console.log(data);\n                setHidden(false);\n            } catch (error) {\n                console.log(error);\n                setHidden(false);\n            }\n        };\n        fetchUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"jumbotron text-center square\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: JSON.stringify(user)\n            }, void 0, false, {\n                fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\user\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\user\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\react_courseudemy-CourseProject\\\\client\\\\pages\\\\user\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIndex);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQzlCO0FBQ2lCO0FBQzNDLE1BQU1LLFlBQVksSUFBTTtJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLEVBQUVNLE1BQUssRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0csZ0RBQU9BO0lBQ3BDLE1BQU0sRUFBRUssS0FBSSxFQUFFLEdBQUdEO0lBQ2pCUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsWUFBWSxVQUFZO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNUixpREFBUyxDQUFDO2dCQUNqQ1UsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWkosVUFBVSxLQUFLO1lBQ2pCLEVBQUUsT0FBT1EsT0FBTztnQkFDZEYsUUFBUUMsR0FBRyxDQUFDQztnQkFDWlIsVUFBVSxLQUFLO1lBQ2pCO1FBQ0Y7UUFDQUc7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUNDO1lBQUdDLFdBQVU7c0JBQ1osNEVBQUNDOzBCQUFHQyxLQUFLQyxTQUFTLENBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0FBRUEsaUVBQWVKLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy91c2VyL2luZGV4LmpzP2FlOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29udGV4dEFwaVwiO1xyXG5jb25zdCBVc2VySW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS92MS9jdXJyZW50LXVzZXJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0SGlkZGVuKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgc2V0SGlkZGVuKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgc3F1YXJlXCI+XHJcbiAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHVzZXIpfTwvcD5cclxuICAgICAgPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRleHQiLCJVc2VySW5kZXgiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJzdGF0ZSIsInVzZXIiLCJmZXRjaFVzZXIiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJwIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/index.js"));
module.exports = __webpack_exports__;

})();