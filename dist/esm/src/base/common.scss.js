import n from "../../node_modules/style-inject/dist/style-inject.es.js";
var r =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.ripple {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  cursor: pointer;\n}\n\n.ripple:after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.8s, opacity 1s;\n}\n\n.ripple:active:after {\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\nh1 {\n  font-size: 60px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nh2 {\n  font-size: 42px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nh3 {\n  font-size: 30px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nh4 {\n  font-size: 24px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nh5 {\n  font-size: 18px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nh6 {\n  font-size: 14px;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\nhtml,\nbody {\n  font-size: 10px;\n}\n\n.nitrozen-scrollbar {\n  /* scrollbar */\n  /* Track */\n  /* Handle */\n}\n.nitrozen-scrollbar::-webkit-scrollbar {\n  width: 0.5rem;\n  background-color: #ffffff;\n}\n.nitrozen-scrollbar::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.4);\n  background-color: #ffffff;\n}\n.nitrozen-scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 0.25rem;\n  background-color: #6b6b6b;\n}\n\n.nitrozen-menu-scrollbar {\n  /* scrollbar */\n  /* Track */\n  /* Handle */\n}\n.nitrozen-menu-scrollbar::-webkit-scrollbar {\n  width: 1rem;\n}\n.nitrozen-menu-scrollbar::-webkit-scrollbar-track {\n  border: 0.1rem solid var(--SecondaryDisabledColor, #e0e0e0);\n  background-color: #f9f9f9;\n}\n.nitrozen-menu-scrollbar::-webkit-scrollbar-thumb {\n  border: 0.3rem solid #f9f9f9;\n  background-clip: padding-box;\n  background: #979797;\n  width: 0.4rem;\n  border-radius: 0.5rem;\n}\n\n/* Components Group div styling*/\n.main-div {\n  margin-top: 2%;\n  padding: 4rem;\n}\n@media screen and (max-width: 625px) {\n  .main-div {\n    padding: 1rem;\n  }\n}\n.main-div.pad {\n  padding: 2.4rem;\n}\n.main-div.bg-white {\n  background: #ffffff;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 0.4em;\n}\n.space-between .box {\n  margin: 2rem;\n}';
n(r);
export { r as default };
//# sourceMappingURL=common.scss.js.map
