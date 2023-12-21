exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 1334:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8733))

/***/ }),

/***/ 2356:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 8733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GlobalContextProvider: () => (/* binding */ GlobalContextProvider),
  useGlobalContext: () => (/* binding */ useGlobalContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/components/BGMusic.tsx


function BGMusic(props) {
    const canPlay = props.state;
    const audioRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        canPlay ? audioRef?.current?.play() : audioRef?.current?.pause();
    }, [
        canPlay
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute",
        children: /*#__PURE__*/ jsx_runtime_.jsx("audio", {
            ref: audioRef,
            autoPlay: canPlay,
            loop: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                src: "/bg.mpga",
                type: "audio/mpeg"
            })
        })
    });
}
/* harmony default export */ const components_BGMusic = (BGMusic);

;// CONCATENATED MODULE: ./app/Context/store.tsx
/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ 


const GlobalContext = /*#__PURE__*/ (0,react_.createContext)({
    ...{}
});
const GlobalContextProvider = ({ children })=>{
    // Game State
    const remainingState = (0,react_.useState)(10);
    const scoreState = (0,react_.useState)(5);
    const roundState = (0,react_.useState)(3);
    const tabState = (0,react_.useState)(0);
    // Object Detection
    const isSubmitingState = (0,react_.useState)(false);
    const matchedState = (0,react_.useState)(-1);
    // User State
    const username = "soham";
    // const username = window.localStorage.getItem("username") || "unknown";
    const [_BGMusic, _setBGMusic] = (0,react_.useState)(true);
    const BGMusicState = {
        state: _BGMusic,
        toggle: ()=>{
            _setBGMusic(!_BGMusic);
        // window.localStorage.setItem("bgMusic", _BGMusic.toString());
        }
    };
    const restartGame = ()=>{
        remainingState[1](10);
        // roundState[1](3);
        isSubmitingState[1](false);
        matchedState[1](-1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalContext.Provider, {
        value: {
            remainingState,
            scoreState,
            roundState,
            isSubmitingState,
            matchedState,
            tabState,
            restartGame,
            username: username,
            BGMusicState
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_BGMusic, {
                state: BGMusicState.state
            }),
            children
        ]
    });
};
const useGlobalContext = ()=>(0,react_.useContext)(GlobalContext);


/***/ }),

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Bungee","arguments":[{"subsets":["latin"],"weight":"400"}],"variableName":"font"}
var target_path_app_layout_tsx_import_Bungee_arguments_subsets_latin_weight_400_variableName_font_ = __webpack_require__(6954);
var target_path_app_layout_tsx_import_Bungee_arguments_subsets_latin_weight_400_variableName_font_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Bungee_arguments_subsets_latin_weight_400_variableName_font_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./app/Context/store.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`F:\ObjectHunt\app\Context\store.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["GlobalContextProvider"];

const e1 = proxy["useGlobalContext"];

;// CONCATENATED MODULE: ./app/layout.tsx





// const font = Inter({ subsets: ["latin"] });
// const font = Poppins({ subsets: ["latin"], weight: "500" });
// const font = Nunito({ subsets: ["latin"], weight: "500" });
const metadata = {
    title: "Object Hunt",
    description: "Object Hunt"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: "bg-slate-950",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
                    integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
                    crossOrigin: "anonymous",
                    referrerPolicy: "no-referrer"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                suppressHydrationWarning: true,
                className: (target_path_app_layout_tsx_import_Bungee_arguments_subsets_latin_weight_400_variableName_font_default()).className,
                "data-theme": "light",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-lg mx-auto h-screen overflow-hidden xl:w-1/4 lg:w-1/3 md:w-3/4 sm:w-3/5 so bg-base border-2 border-secondary",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                        children: children
                    })
                })
            })
        ]
    });
} // sm:m-auto sm:w-3/12 md:w-1/4


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;