import React from "react"
const Icons = { 
	
	HomeIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5h-5v-7h-3v7h-5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146ZM18.5 9.621l-6.5-6.5-6.5 6.5V19.5H9V13a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v6.5h3.5V9.621Z" fillRule="evenodd"></path></svg>
	),
	DownloadIco: (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}>
			<path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z" />
		</svg>
	),
	SettingIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="m14.302 6.457-.668-.278L12.87 3.5h-1.737l-.766 2.68-.668.277c-.482.2-.934.463-1.344.778l-.575.44-2.706-.677-.868 1.504 1.938 2.003-.093.716c-.033.255-.05.514-.05.779 0 .264.017.524.05.779l.093.716-1.938 2.003.868 1.504 2.706-.677.575.44c.41.315.862.577 1.344.778l.668.278.766 2.679h1.737l.765-2.68.668-.277c.483-.2.934-.463 1.345-.778l.574-.44 2.706.677.869-1.504-1.938-2.003.092-.716c.033-.255.05-.514.05-.779 0-.264-.017-.524-.05-.779l-.092-.716 1.938-2.003-.869-1.504-2.706.677-.574-.44c-.41-.315-.862-.577-1.345-.778Zm4.436.214Zm-3.86-1.6-.67-2.346c-.123-.429-.516-.725-.962-.725h-2.492c-.446 0-.838.296-.961.725l-.67 2.347c-.605.251-1.17.58-1.682.972l-2.37-.593c-.433-.108-.885.084-1.108.47L2.717 8.08c-.223.386-.163.874.147 1.195l1.698 1.755c-.04.318-.062.642-.062.971 0 .329.021.653.062.97l-1.698 1.756c-.31.32-.37.809-.147 1.195l1.246 2.158c.223.386.675.578 1.109.47l2.369-.593c.512.393 1.077.72 1.681.972l.67 2.347c.124.429.516.725.962.725h2.492c.446 0 .839-.296.961-.725l.67-2.347c.605-.251 1.17-.58 1.682-.972l2.37.593c.433.108.885-.084 1.109-.47l1.245-2.158c.223-.386.163-.874-.147-1.195l-1.698-1.755c.04-.318.062-.642.062-.971 0-.329-.021-.653-.062-.97l1.698-1.756c.31-.32.37-.809.147-1.195L20.038 5.92c-.224-.386-.676-.578-1.11-.47l-2.369.593c-.512-.393-1.077-.72-1.681-.972ZM15.5 12c0 1.933-1.567 3.5-3.5 3.5S8.5 13.933 8.5 12s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM14 12c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" fillRule="evenodd"></path></svg>
	),
	BarIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
	),
	ThumbFilled : (props) => (
		<svg
		  fill={"currentColor"}
		  className={props?.className}
		  xmlns="http://www.w3.org/2000/svg"
		  viewBox="0 0 24 24"
		  width="24"
		  height="24"
		  style={{
			pointerEvents: "none",
			display: "inherit",
			width: "100%",
			height: "100%",
		  }}
		>
		  <path d="M8 11H3v10h5V11zm10.77 0h-4.23l1.52-4.94c.32-1.03-.52-2.06-1.68-2.06-.58 0-1.14.24-1.52.65L7 11v10h10.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.23-1.15-.82-2.39-2.19-2.39zM7 20H4v-8h3v8zm12.98-6.83l-1.34 6c-.1.47-.61.82-1.21.82H8V11.39l5.6-6.06c.19-.21.48-.33.78-.33.26 0 .5.11.63.3.07.1.15.26.09.47L13.58 10.7 13.18 12h4.23c.41 0 .8.17 1.03.46.12.15.25.4.18.72z" />
		</svg>
	),	
	DislikeIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M17 4H6.57c-1.07 0-1.98.67-2.19 1.61l-1.34 6C2.77 12.85 3.82 14 5.23 14h4.23l-1.52 4.94C7.62 19.97 8.46 21 9.62 21c.58 0 1.14-.24 1.52-.65L17 14h4V4h-4zm-6.6 15.67c-.19.21-.48.33-.78.33-.26 0-.5-.11-.63-.3-.07-.1-.15-.26-.09-.47l1.52-4.94.4-1.29H5.23c-.41 0-.8-.17-1.03-.46-.12-.15-.25-.4-.18-.72l1.34-6c.1-.47.61-.82 1.21-.82H16v8.61l-5.6 6.06zM20 13h-3V5h3v8z"></path></svg>
	),
	MicIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path></svg>
	),
	SortBarIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"style={{pointerEvents: "none", display: "inherit"}}><path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path></svg>
	),
	VideoIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
	),
	OutDoorIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>
	),
	HotspotIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><g><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path></g></svg>
	),
	HistoryIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height={props?.height || "24px"} viewBox="0 0 24 24" width={props?.width || "24px"} focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z" fillRule="evenodd"></path></svg>
	),
	IconIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M15.83 15c-.52 1.38-2.19 2-3.79 2-1.59 0-3.28-.62-3.85-2h7.64m.69-1H7.49c-.27 0-.49.22-.46.47C7.34 16.83 9.7 18 12.05 18c2.35 0 4.69-1.18 4.93-3.54.03-.25-.2-.46-.46-.46zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.94 9.73C7.19 9.25 7.72 9 8.5 9c.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C10.6 8.68 9.91 8 8.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27zm7 0c.25-.48.78-.73 1.56-.73.75 0 1.28.25 1.57.75.14.24.45.32.68.18.24-.14.32-.44.18-.68C17.6 8.68 16.91 8 15.5 8c-1.48 0-2.15.69-2.44 1.27-.13.25-.03.55.21.67.07.04.15.06.23.06.18 0 .36-.1.44-.27z"></path></svg>
	),
	PlusIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path></svg>
	),
	SaveIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" height="24" fill={props?.color || "currentColor"} viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M18 4v15.06l-5.42-3.87-.58-.42-.58.42L6 19.06V4h12m1-1H5v18l7-5 7 5V3z"></path></svg>
	),
	ShortIco : (props) => ( 
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fillRule="evenodd"></path></svg>
	),
	SubscriptionIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height={props?.height || "24"} viewBox="0 0 24 24" width={props?.width || "24"} focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fillRule="evenodd"></path></svg>
	),
	LibraryIco : (props) => (
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  height={props?.height || "24"}
		  width={props?.width || "24"}
		  viewBox="0 0 24 24"
		  focusable="false"
		  aria-hidden="true"
		  style={{ pointerEvents: "none", display: "inherit" }}
		>
		  <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
		</svg>
	),
	ThreeDotIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
	),
	UserIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z" fillRule="evenodd"></path></svg>
	),
	DownArrowIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path></svg>
	),
	BellIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="m13.497 4.898.053.8.694.4C15.596 6.878 16.5 8.334 16.5 10v2.892c0 .997.27 1.975.784 2.83L18.35 17.5H5.649l1.067-1.778c.513-.855.784-1.833.784-2.83V10c0-1.666.904-3.122 2.256-3.902l.694-.4.053-.8c.052-.78.703-1.398 1.497-1.398.794 0 1.445.618 1.497 1.398ZM6 10c0-2.224 1.21-4.165 3.007-5.201C9.11 3.236 10.41 2 12 2c1.59 0 2.89 1.236 2.993 2.799C16.79 5.835 18 7.776 18 10v2.892c0 .725.197 1.436.57 2.058l1.521 2.535c.4.667-.08 1.515-.857 1.515H15c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879s-1.559-.316-2.121-.879C9.316 20.56 9 19.796 9 19H4.766c-.777 0-1.257-.848-.857-1.515L5.43 14.95c.373-.622.57-1.333.57-2.058V10Zm4.5 9c0 .398.158.78.44 1.06.28.282.662.44 1.06.44s.78-.158 1.06-.44c.282-.28.44-.662.44-1.06h-3Z" fillRule="evenodd"></path></svg>
	),
	CameraIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}} ><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm2.59-4 2 2H21v12H3V6h4.41l2-2h5.18M15 3H9L7 5H2v14h20V5h-5l-2-2z"></path></svg>
	),
	SearchIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path></svg>
	),
	YoutubeIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} id="yt-ringo2-svg_yt19" width="93" height="20" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}>
		  <g>
			<path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
			<path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
		  </g>
		  <g id="youtube-paths_yt19">
			<path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
			<path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
			<path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"></path>
			<path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
			<path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
			<path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
			<path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
		  </g>
		</svg>
	),
	WatchIco : (props) => (
		<svg xmlns="http://www.w3.org/2000/svg" fill={props?.color || "currentColor"} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit"}}><path clipRule="evenodd" d="M20.5 12c0 4.694-3.806 8.5-8.5 8.5S3.5 16.694 3.5 12 7.306 3.5 12 3.5s8.5 3.806 8.5 8.5Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.25-5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.375l.3.225 4 3c.331.248.802.181 1.05-.15.248-.331.181-.801-.15-1.05l-3.7-2.775V7Z" fillRule="evenodd"></path></svg>
	),
	PlayListIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={props?.color || "currentColor"}
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
			aria-hidden="true"
			style={{
				pointerEvents: "none",
				display: "inherit",
				width: "100%",
				height: "100%",
			}}
			{...props}
			>
			<path
				clipRule="evenodd"
				fillRule="evenodd"
				d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z"
			/>
		</svg>
	),
	ForwardIco: (props) => (
		<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24"
		viewBox="0 0 24 24"
		width="24"
		focusable="false"
		aria-hidden="true"
		fill={"currentColor"}
		style={{
		  pointerEvents: "none",
		  display: "inherit",
		  width: "100%",
		  height: "100%",
		}}
		{...props}
	  >
		<path d="M15 5.63L20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z" />
	  </svg>
	
	),
	PlayIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			width="24px"
			viewBox="0 0 24 24"
			focusable="false"
			aria-hidden="true"
			fill={props?.color || "currentColor"}
			style={{
				pointerEvents: 'none',
				display: 'inherit',
			}}
			
		>
		<path d="M7 4l12 8-12 8V4z" />
	</svg>
	),
	WavIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={props?.size || "24px"}
			width={props?.size || "24px"}
			viewBox="0 0 24 24"
			fill={props?.color || "currentColor"} // color prop se control
			style={{ pointerEvents: "none", display: "inherit" }}
			{...props}
	  >
		<path d="M18.15 13.65 22 17.5l-3.85 3.85-.71-.71L20.09 18H19c-2.84 0-5.53-1.23-7.39-3.38l.76-.65C14.03 15.89 16.45 17 19 17h1.09l-2.65-2.65.71-.7zM19 7h1.09l-2.65 2.65.71.71L22 6.51l-3.85-3.85-.71.71L20.09 6H19c-3.58 0-6.86 1.95-8.57 5.09l-.73 1.34C8.16 15.25 5.21 17 2 17v1c3.58 0 6.86-1.95 8.57-5.09l.73-1.34C12.84 8.75 15.79 7 19 7zM8.59 9.98l.75-.66C7.49 7.21 4.81 6 2 6v1c2.52 0 4.92 1.09 6.59 2.98z" />
	  	</svg>
	),
	GridIco : (props) => (
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  viewBox="0 0 24 24"
		  focusable="false"
		  aria-hidden="true"
		  style={{
			pointerEvents: "none",
			display: "inherit",
			width: props.size || "24px",
			height: props.size || "24px",
			...props.style,  // agar extra style pass karna ho
		  }}
		  fill={props.color || "currentColor"}
		  {...props}
		>
		  <path d="M2,4h6v7H2V4z M2,20h6v-7H2V20z M9,11h6V4H9V11z M9,20h6v-7H9V20z M16,4v7h6V4H16z M16,20h6v-7h-6V20z" />
		</svg>
	),
	GridListIcon : (props) => (
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  height={props?.size || "24"}
		  width={props?.size || "24"}
		  viewBox="0 0 24 24"
		  focusable="false"
		  aria-hidden="true"
		  fill={props?.color || "currentColor"}
		  style={{
			pointerEvents: "none",
			display: "inherit",
			width: "100%",
			height: "100%",
			...props.style,
		  }}
		  {...props}
		>
		  <path d="M20 8H9V7h11v1zm0 3H9v1h11v-1zm0 4H9v1h11v-1zM7 7H4v1h3V7zm0 4H4v1h3v-1zm0 4H4v1h3v-1z" />
		</svg>
	),
	PaushIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
			aria-hidden="true"
			fill={ props?.color || "currentColor" }
			style={{ pointerEvents: "none", display: "inherit" }}
		>
			<path d="M11 17H9V8h2v9zm4-9h-2v9h2V8zm4-4v1h-1v16H6V5H5V4h4V3h6v1h4zm-2 1H7v15h10V5z" />
		</svg>
	),
	BinIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
			fill={props?.color || "currentColor"}
			aria-hidden="true"
			style={{ pointerEvents: "none", display: "inherit"}}
		>
			<path d="M9 19H7V5h2Zm8-14h-2v14h2Z" />
		</svg>
	),
	CrossIcon : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
			aria-hidden="true"
			fill={props?.color || "currentColor"}
			style={{
				pointerEvents: "none",
				display: "inherit",
			}}
		>
			<path d="M12.71 12l8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z" />
		</svg>

	),
	TwoLineIcon : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			focusable="false"
			aria-hidden="true"
			fill={props?.color || "currentColor"}
			style={{ pointerEvents: "none", display: "inherit"}}
	>
  		<path d="M21 10H3V9h18v1Zm0 4H3v1h18v-1Z" />
	</svg>

	),
	LoopArrow : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			fill={props?.color || "currentColor"}
			focusable="false"
			aria-hidden="true"
			style={{
				pointerEvents: "none",
				display: "inherit"
			}}
		>
  			<path d="M21 13h1v5l-18.07.03 2.62 2.62-.71.71-3.85-3.86 3.85-3.85.71.71-2.67 2.67L21 17v-4zM3 7l17.12-.03-2.67 2.67.71.71 3.85-3.85-3.85-3.85-.71.71 2.62 2.62L2 6v5h1V7z" />
		</svg>

	),
	LockIco : (props) => (
		<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16"
		viewBox="0 0 16 16"
		width="16"
		focusable="false"
		aria-hidden="true"
		fill={props?.color || "currentColor"}
		style={{
			pointerEvents: "none",
			display: "inherit",
		}}
		{...props}
		>
		<path d="M11.33 4.09C11.33 2.38 9.84 1 8 1S4.67 2.38 4.67 4.09V5H3v10h10V5h-1.67v-.91zm-5.66 0C5.67 2.94 6.71 2 8 2s2.33.94 2.33 2.09V5H5.67v-.91zM12 6v8H4V6h8zm-6 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
		</svg>

	),
	ThumbOutline : (props) => (
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		height="24"
		width="24"
		fill="currentColor"
		className={props?.className}
		focusable="false"
		aria-hidden="true"
		style={{
		  pointerEvents: "none",
		  display: "inherit",
		  width: "100%",
		  height: "100%",
		}}
	  >
		<path d="M3 11h3v10H3V11zm15.77 0h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11v10h10.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39z" />
	  </svg>
	),
	MarkDown : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill={props?.colot || "#000"}
			className="ml-2"
		>
		<path d="M7 10l5 5 5-5z" />
	  </svg>
	),
	Info : (props) => (
		<svg
			aria-hidden="true"
			fill={props?.color || "#a52821"}
			focusable="false"
			width="13px"
			height="13px"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
					10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
		</svg>

	),
	Google : () => (
		<svg viewBox="0 0 32 32" width={"48px"} dataName="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47"></path><path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4"></path><path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00"></path><polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"></polygon><path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435"></path><polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"></polygon><path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4"></path></g></svg>
	),
	Avatar : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			fill={props?.color || "#000"}
			aria-hidden="true"

		>
		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 
				 10-10S17.52 2 12 2zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 
				 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 
				 6-3.08s5.97 1.09 6 3.08C16.71 18.72 14.5 20 12 20z"/>
	  </svg>
	),
	StandardBellIcon : (props) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			focusable="false"
			aria-hidden="true"
			style={{ pointerEvents: "none", display: "inherit" }}
			>
			  <path d="M21.5 9h-2v-.19c0-1.91-1.11-3.62-2.9-4.48l.87-1.8c2.49 1.19 4.03 3.6 4.03 6.28V9zm-17-.19c0-1.91 1.11-3.62 2.9-4.48l-.87-1.8C4.04 3.72 2.5 6.13 2.5 8.81V9h2v-.19zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm8-4.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z" />
		</svg>
		  
	),
	ProfileBellIcon : (props) => (
		<svg
		  {...props}
		  xmlns="http://www.w3.org/2000/svg"
		  height="24px"
		  viewBox="0 0 24 24"
		  width="24px"
		  focusable="false"
		  aria-hidden="true"
		  style={{ pointerEvents: "none", display: "inherit" }}
		>
		  <path d="M13.72 11.93C15.58 11.59 17 9.96 17 8c0-2.21-1.79-4-4-4S9 5.79 9 8c0 1.96 1.42 3.59 3.28 3.93C6.77 12.21 4 15.76 4 20h18c0-4.24-2.77-7.79-8.28-8.07zM10 8c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 4.9c5.33 0 7.56 2.99 7.94 6.1H5.06c.38-3.11 2.61-6.1 7.94-6.1zM7 12H2v-1h5v1z"></path>
		</svg>
	),
	BellOffIcon : (props) => (
		<svg
		  {...props}
		  xmlns="http://www.w3.org/2000/svg"
		  height="24px"
		  viewBox="0 0 24 24"
		  width="24px"
		  focusable="false"
		  aria-hidden="true"
		  style={{ pointerEvents: "none", display: "inherit" }}
		>
		  <path d="m3.85 3.15-.7.7 3.48 3.48C6.22 8.21 6 9.22 6 10.32v5.15l-2 1.88V19h14.29l1.85 1.85.71-.71-17-16.99zM5 18v-.23l2-1.88v-5.47c0-.85.15-1.62.41-2.3L17.29 18H5zm5 2h4c0 1.1-.9 2-2 2s-2-.9-2-2zM9.28 5.75l-.7-.7c.43-.29.9-.54 1.42-.7v-.39c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v4.14l-1-1v-3.05c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03-.27.11-.51.24-.75.4z"></path>
		</svg>
	),
	EarthIco : (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="18"
			viewBox="0 0 18 18"
			width="18"
			focusable="false"
			aria-hidden="true"
			{...props}
			style={{ pointerEvents: "none", display: "inherit"}}
			>
			<path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm7 8c0 1.31-.37 2.54-1 3.59V11h-2c-.55 0-1-.45-1-1 0-1.1-.9-2-2-2H8.73c.17-.29.27-.64.27-1V5h1c1.1 0 2-.9 2-2v-.31c2.36 1.12 4 3.52 4 6.31zm-13.98.45L7 12.77V13c0 1.1.9 2 2 2v1c-3.71 0-6.74-2.9-6.98-6.55zM10 15.92V14H9c-.55 0-1-.45-1-1v-.77L2.04 8.26C2.41 4.75 5.39 2 9 2c.7 0 1.37.11 2 .29V3c0 .55-.45 1-1 1H8v3c0 .55-.45 1-1 1H5.5v1H10c.55 0 1 .45 1 1 0 1.1.9 2 2 2h1v1.89c-1.05 1.07-2.44 1.81-4 2.03z"></path>
		</svg>

	)
	  
	  
	
	
	  
	  
	
}


export default Icons;
