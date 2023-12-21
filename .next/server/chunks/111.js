"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 3111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1046);
/* harmony import */ var next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function Modal(props) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultOpen || false);
    // const router = useRouter();
    // const animation = useSpring({
    //   config: {
    //     duration: 250
    //   },
    //   opacity: isOpen ? 1 : 0,
    //   transform: isOpen ? `translateY(0)` : `translateY(-100%)`
    // });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            props.defaultOpen || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `btn ${props.buttonClassName} ${(next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2___default().className)}`,
                children: props.btnname
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "checkbox",
                id: props.id,
                checked: isOpen,
                defaultChecked: props.defaultOpen,
                onChange: (e)=>{},
                className: "modal-toggle"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `modal ${props.modalClassName}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `modal-box bg-base border-2 nobar broder-white ${(next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2___default().className)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "font-bold text-2xl text-primary",
                            children: props.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col mt-3",
                            children: props.children
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-action flex justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: props.actions
                                }),
                                props.customClose ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    onClick: ()=>{
                                        window.location.href = props.customClose && props?.customClose[1] || "/";
                                    // router.push(
                                    //   (props.customClose && props.customClose[1]) || "/"
                                    // );
                                    // router.refresh();
                                    },
                                    className: `btn btn-error ${(next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2___default().className)}`,
                                    children: props.customClose[0]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        onClick: ()=>setIsOpen(false),
                                        className: `btn btn-error ${(next_font_google_target_css_path_app_components_Modal_tsx_import_Bungee_arguments_weight_400_subsets_latin_variableName_font1___WEBPACK_IMPORTED_MODULE_2___default().className)}`,
                                        children: "Close"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

};
;