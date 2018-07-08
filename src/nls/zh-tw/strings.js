/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "（錯誤 {0}）",
    "NOT_FOUND_ERR": "找不到檔案/資料夾。",
    "NOT_READABLE_ERR": "無法讀取檔案/資料夾。",
    "EXCEEDS_MAX_FILE_SIZE": "無法在 {APP_NAME} 開啟超過 {0}MB 的檔案。",
    "NO_MODIFICATION_ALLOWED_ERR": "無法異動目標目錄。",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "您的權限不足，無法修改。",
    "CONTENTS_MODIFIED_ERR": "檔案已被 {APP_NAME} 以外的程式修改。",
    "UNSUPPORTED_ENCODING_ERR": "{APP_NAME} 目前只支援 UTF-8 編碼的文字檔。",
    "FILE_EXISTS_ERR": "檔案或資料夾已存在。",
    "FILE": "檔案",
    "FILE_TITLE": "檔案",
    "DIRECTORY": "資料夾",
    "DIRECTORY_TITLE": "資料夾",
    "DIRECTORY_NAMES_LEDE": "資料夾名稱",
    "FILENAMES_LEDE": "檔案名稱",
    "FILENAME": "檔案名稱",
    "DIRECTORY_NAME": "資料夾名稱",
    "ERROR_LOADING_PROJECT": "無法載入專案",
    "OPEN_DIALOG_ERROR": "顯示開啟檔案對話框時發生錯誤。（錯誤 {0}）",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "載入 <span class='dialog-filename'>{0}</span> 目錄時發生錯誤。 (錯誤 {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "讀取資料夾 <span class='dialog-filename'>{0}</span> 內容時發生錯誤。（錯誤 {1}）",
    "ERROR_OPENING_FILE_TITLE": "開啟檔案時發生錯誤",
    "ERROR_OPENING_FILE": "嘗試開啟檔案 <span class='dialog-filename'>{0}</span> 時發生錯誤。{1}",
    "ERROR_OPENING_FILES": "嘗試開啟下列檔案時發生錯誤:",
    "ERROR_RELOADING_FILE_TITLE": "無法從磁碟重新載入變更",
    "ERROR_RELOADING_FILE": "重新載入 <span class='dialog-filename'>{0}</span> 檔案時發生錯誤。 {1}",
    "ERROR_SAVING_FILE_TITLE": "儲存檔案時發生錯誤",
    "ERROR_SAVING_FILE": "嘗試儲存檔案 <span class='dialog-filename'>{0}</span> 時發生錯誤。{1}",
    "ERROR_RENAMING_FILE_TITLE": "修改檔案名稱時發生錯誤",
    "ERROR_RENAMING_FILE": "嘗試更改檔案 <span class='dialog-filename'>{0}</span> 名稱時發生錯誤。{1}",
    "ERROR_DELETING_FILE_TITLE": "刪除檔案時發生錯誤",
    "ERROR_DELETING_FILE": "嘗試刪除檔案 <span class='dialog-filename'>{0}</span> 時發生錯誤。{1}",
    "INVALID_FILENAME_TITLE": "檔案名稱無效",
    "INVALID_FILENAME_MESSAGE": "檔案名稱不可使用系統保留字、用小數點 (.) 結束，或包含下列任何字元: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "名稱為 <span class='dialog-filename'>{0}</span> 的檔案或資料夾已存在。",
    "ERROR_CREATING_FILE_TITLE": "建立檔案時發生錯誤",
    "ERROR_CREATING_FILE": "嘗試建立檔案 <span class='dialog-filename'>{1}</span> 時發生錯誤。{2}",
    "ERROR_MIXED_DRAGDROP": "開啟其他檔案的同時不能開啟資料夾。",
    "ERROR_KEYMAP_TITLE": "無法讀取使用者按鍵對應資料",
    "ERROR_KEYMAP_CORRUPT": "您的按鍵對應檔內容不是正確的 JSON 格式。將開啟該檔以便您修正格式問題。",
    "ERROR_LOADING_KEYMAP": "您的按鍵對應檔不是正確的 UTF-8 編碼文字檔，無法載入",
    "ERROR_RESTRICTED_COMMANDS": "您無法重新定義下列指令的快捷鍵: {0}",
    "ERROR_RESTRICTED_SHORTCUTS": "您無法重新定義快捷鍵: {0}",
    "ERROR_MULTIPLE_SHORTCUTS": "您定義了超過一組快捷鍵給下列指令: {0}",
    "ERROR_DUPLICATE_SHORTCUTS": "您定義了超過一種按鍵組合給下列快捷鍵: {0}",
    "ERROR_INVALID_SHORTCUTS": "下列快捷鍵無效: {0}",
    "ERROR_NONEXISTENT_COMMANDS": "您定義了快捷鍵給不存在的指令: {0}",
    "ERROR_PREFS_CORRUPT_TITLE": "讀取喜好設定時發生錯誤",
    "ERROR_PREFS_CORRUPT": "您的喜好設定檔內容不是正確的 JSON 格式。將開啟該檔以便您修正格式問題。 重新啟動 {APP_NAME} 後異動才會生效。",
    "ERROR_PROJ_PREFS_CORRUPT": "您的專案喜好設定檔內容不是正確的 JSON 格式。將開啟該檔以便您修正格式問題。 重新啟動 {APP_NAME} 後異動才會生效。",
    "ERROR_IN_BROWSER_TITLE": "不妙! {APP_NAME} 還不能在瀏覽器裡跑。",
    "ERROR_IN_BROWSER": "{APP_NAME} 是以 HTML 打造，不過要以應用程式的方式執行才能編輯電腦上的檔案。請透過 <b>github.com/adobe/brackets-shell</b> 儲存庫中的應用程式介面來執行 {APP_NAME}。",
    "ERROR_MAX_FILES_TITLE": "索引檔案時發生錯誤",
    "ERROR_MAX_FILES": "專案超過 30,000 個檔案。需要跨檔案執行的功能可能會被關閉或是變成跟專案內沒有任何檔案一樣。<a href='https://github.com/adobe/brackets/wiki/Large-Projects'>了解怎麼處理大型專案</a>。",
    "ERROR_LAUNCHING_BROWSER_TITLE": "無法啟動瀏覽器",
    "ERROR_CANT_FIND_CHROME": "找不到 Google Chrome 瀏覽器。請確定您有安裝。",
    "ERROR_LAUNCHING_BROWSER": "啟動瀏覽器時發生錯誤。 (錯誤 {0})",
    "LIVE_DEVELOPMENT_ERROR_TITLE": "即時預覽錯誤",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "正在連到瀏覽器",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "為了讓即時預覽功能順利連線，需要重新啟動 Chrome 並開啟遠端除錯功能。<br /><br />您是否要重新啟動 Chrome 並啟用遠端除錯功能?<br /><br />",
    "LIVE_DEV_LOADING_ERROR_MESSAGE": "無法載入即時預覽頁。",
    "LIVE_DEV_NEED_HTML_MESSAGE": "請開啟 HTML 檔，或是確定專案中有 index.html 檔才能啟動即時預覽功能。",
    "LIVE_DEV_NEED_BASEURL_MESSAGE": "您需要指定專案的 URL 根位址，才能啟動包含伺服器端資源的即時預覽功能。",
    "LIVE_DEV_SERVER_NOT_READY_MESSAGE": "無法啟動即時預覽用的 HTTP 伺服器。請再試一次。",
    "LIVE_DEVELOPMENT_INFO_TITLE": "歡迎使用即時預覽!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "即時預覽將 {APP_NAME} 與您的瀏覽器連線。讓您在瀏覽器中預覽 HTML 檔案，編輯的內容也會即時反應在預覽畫面上。<br /><br />因為 {APP_NAME} 才剛起步，即時預覽目前只能在 <strong>Google Chrome</strong> 上面執行，<strong>CSS 或 HTML 檔案</strong>的異動會即時反應。修改 JavaScript 檔案並儲存後會重新載入頁面。<br /><br />(您只會看到一次這段訊息。)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING": "想了解更多，請參考<a href='{0}' title='{0}'>即時預覽連結錯誤排解</a>。",
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "即時預覽",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "即時預覽: 連線中…",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "即時預覽: 初始化中…",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "關閉即時預覽",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "即時預覽 (檔案儲存後重新載入)",
    "LIVE_DEV_STATUS_TIP_SYNC_ERROR": "即時預覽 (語法錯誤，不更新)",
    "LIVE_DEV_DETACHED_REPLACED_WITH_DEVTOOLS": "已取消即時預覽，因為開發者工具被打開了",
    "LIVE_DEV_DETACHED_TARGET_CLOSED": "已取消即時預覽，因為頁面被關掉了",
    "LIVE_DEV_NAVIGATED_AWAY": "已取消即時預覽，因為您連到專案外的頁面了",
    "LIVE_DEV_CLOSED_UNKNOWN_REASON": "即時預覽因為不明的錯誤而取消 ({0})",
    "SAVE_CLOSE_TITLE": "儲存變更",
    "SAVE_CLOSE_MESSAGE": "您想要儲存 <span class='dialog-filename'>{0}</span> 檔案的變更嗎?",
    "SAVE_CLOSE_MULTI_MESSAGE": "您想要儲存下列檔案的變更嗎?",
    "EXT_MODIFIED_TITLE": "外部變更",
    "CONFIRM_DELETE_TITLE": "確定刪除",
    "CONFIRM_FOLDER_DELETE": "您確定要刪除資料夾 <span class='dialog-filename'>{0}</span> 嗎？",
    "FILE_DELETED_TITLE": "檔案已刪除",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> 已被 {APP_NAME} 以外的程式在磁碟中修改。<br /><br />您想要儲存檔案並蓋過這些修改嗎？",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> has been modified on disk outside of {APP_NAME}，但是尚未儲存您的變動 {APP_NAME}，<br /><br />您想要儲存哪個版本？",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> 已經被系統移除 {APP_NAME}，但是更動尚未被儲存 {APP_NAME}.<br /><br />您是否要儲存已經進行的更動？",
    "DONE": "完成",
    "OK": "確定",
    "CANCEL": "取消",
    "DONT_SAVE": "不要儲存",
    "SAVE": "儲存",
    "SAVE_AS": "另存新檔…",
    "SAVE_AND_OVERWRITE": "覆蓋",
    "DELETE": "刪除",
    "BUTTON_YES": "是",
    "BUTTON_NO": "否",
    "FIND_MATCH_INDEX": "{0} / {1}",
    "FIND_NO_RESULTS": "沒有結果",
    "FIND_QUERY_PLACEHOLDER": "尋找…",
    "REPLACE_PLACEHOLDER": "取代成…",
    "BUTTON_REPLACE_ALL": "批次…",
    "BUTTON_REPLACE_ALL_IN_FILES": "取代…",
    "BUTTON_REPLACE": "取代",
    "BUTTON_NEXT": "▶",
    "BUTTON_PREV": "◀",
    "BUTTON_NEXT_HINT": "下一筆符合的",
    "BUTTON_PREV_HINT": "上一筆符合的",
    "BUTTON_CASESENSITIVE_HINT": "大小寫須相符",
    "BUTTON_REGEXP_HINT": "正規表示式",
    "REPLACE_WITHOUT_UNDO_WARNING_TITLE": "取代後無法復原",
    "REPLACE_WITHOUT_UNDO_WARNING": "有超過 {0} 個檔案會被變更，{APP_NAME} 會修改到磁碟上沒被開啟的檔案。<br />這些檔案內容取代後無法再復原。",
    "BUTTON_REPLACE_WITHOUT_UNDO": "直接取代，不用復原",
    "OPEN_FILE": "開啟檔案",
    "SAVE_FILE_AS": "儲存檔案",
    "CHOOSE_FOLDER": "選取資料夾",
    "RELEASE_NOTES": "版本資訊",
    "NO_UPDATE_TITLE": "已經是最新版!",
    "NO_UPDATE_MESSAGE": "您的 {APP_NAME} 已經是最新版。",
    "FIND_REPLACE_TITLE_LABEL": "將",
    "FIND_REPLACE_TITLE_WITH": "取代成",
    "FIND_TITLE_LABEL": "找到",
    "FIND_TITLE_SUMMARY": "&mdash; {3}中共有{0} {1} 筆{2}",
    "FIND_NUM_FILES": "{0} 個{1}",
    "FIND_IN_FILES_SCOPED": "在 <span class='dialog-filename'>{0}</span> 中",
    "FIND_IN_FILES_NO_SCOPE": "在專案中",
    "FIND_IN_FILES_ZERO_FILES": "篩選條件排除了{0}的所有檔案",
    "FIND_IN_FILES_FILE": "檔案",
    "FIND_IN_FILES_FILES": "檔案",
    "FIND_IN_FILES_MATCH": "符合",
    "FIND_IN_FILES_MATCHES": "符合",
    "FIND_IN_FILES_MORE_THAN": "超過",
    "FIND_IN_FILES_PAGING": "{0}&mdash;{1}",
    "FIND_IN_FILES_FILE_PATH": "<span class='dialog-filename'>{0}</span> {2} <span class='dialog-path'>{1}</span>",
    "FIND_IN_FILES_EXPAND_COLLAPSE": "按住 Ctrl/Cmd 再用滑鼠點一下可以全部展開/收合",
    "REPLACE_IN_FILES_ERRORS_TITLE": "取代錯誤",
    "REPLACE_IN_FILES_ERRORS": "下列檔案沒有被修改，可能是搜尋後又被變更或是無法寫入。",
    "ERROR_FETCHING_UPDATE_INFO_TITLE": "無法取得更新資訊",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "由伺服器取得更新資訊時發生錯誤。請確定您已連線到 Internet 後再重試一次。",
    "NEW_FILE_FILTER": "新增排除集…",
    "CLEAR_FILE_FILTER": "不要排除檔案",
    "NO_FILE_FILTER": "沒有檔案被排除",
    "EXCLUDE_FILE_FILTER": "排除 {0}",
    "EDIT_FILE_FILTER": "編輯…",
    "FILE_FILTER_DIALOG": "編輯排除集",
    "FILE_FILTER_INSTRUCTIONS": "排除名稱完全或部分符合下列字串的檔案及資料夾，也可以使用<a href='{0}' title='{0}'>萬用字元</a>。 多組條件請分行輸入，一行一個。",
    "FILTER_NAME_PLACEHOLDER": "排除集名稱 (選填)",
    "FILE_FILTER_CLIPPED_SUFFIX": "及其他 {0} 個",
    "FILTER_COUNTING_FILES": "計算檔案數目中…",
    "FILTER_FILE_COUNT": "包含{2}全部 {1} 個檔案中的 {0} 個",
    "FILTER_FILE_COUNT_ALL": "包含{1}的全部 {0} 個檔案",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "無法針對目前游標位置進行快速編輯",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS 快速編輯：放置 cursor或者 single class name",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS 快速編輯: class 屬性不完整",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS 快速編輯: id 屬性不完整",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS 快速編輯: 將游標放到標籤、class 或 id 當中",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS 計時功能快速編輯: 語法無效",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS 快速編輯: 將游標放到函數名稱的位置",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "無目前游標位置的快速文件",
    "PROJECT_LOADING": "載入中…",
    "UNTITLED": "未命名",
    "WORKING_FILES": "工作檔案",
    "TOP": "上方",
    "BOTTOM": "下方",
    "LEFT": "左側",
    "RIGHT": "右側",
    "CMD_SPLITVIEW_NONE": "不分割",
    "CMD_SPLITVIEW_VERTICAL": "左右分割",
    "CMD_SPLITVIEW_HORIZONTAL": "上下分割",
    "SPLITVIEW_MENU_TOOLTIP": "將編輯器分割成上下或左右兩塊",
    "GEAR_MENU_TOOLTIP": "設定工作集",
    "SPLITVIEW_INFO_TITLE": "已經開啟",
    "SPLITVIEW_MULTIPANE_WARNING": "檔案已經在另一個窗格中開啟。{APP_NAME} 很快就會支援在多個窗格中開啟相同的檔案。在那之前，檔案還是會在原本已開啟的窗格中顯示。<br /><br />(您只會看到一次這個訊息。)",
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "空白鍵",
    "KEYBOARD_PAGE_UP": "Page Up",
    "KEYBOARD_PAGE_DOWN": "Page Down",
    "KEYBOARD_HOME": "Home",
    "KEYBOARD_END": "End",
    "KEYBOARD_INSERT": "Insert",
    "KEYBOARD_DELETE": "Delete",
    "STATUSBAR_CURSOR_POSITION": "第 {0} 行，第 {1} 個字元",
    "STATUSBAR_SELECTION_CH_SINGULAR": " — 選了 {0} 個字元",
    "STATUSBAR_SELECTION_CH_PLURAL": " — 選了 {0} 個字元",
    "STATUSBAR_SELECTION_LINE_SINGULAR": " — 選了 {0} 行",
    "STATUSBAR_SELECTION_LINE_PLURAL": " — 選了 {0} 行",
    "STATUSBAR_SELECTION_MULTIPLE": " — 選了 {0} 段",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "點一下切換成使用空白字元縮排",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "點一下切換成使用 Tab 縮排",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "點一下變更縮排用的空白字元數",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "點一下變更 Tab 字元所代表的長度",
    "STATUSBAR_SPACES": "空白字元:",
    "STATUSBAR_TAB_SIZE": "Tab 長度:",
    "STATUSBAR_LINE_COUNT_SINGULAR": "— {0} 行",
    "STATUSBAR_LINE_COUNT_PLURAL": "— {0} 行",
    "STATUSBAR_USER_EXTENSIONS_DISABLED": "已停用擴充功能",
    "STATUSBAR_INSERT": "INS",
    "STATUSBAR_OVERWRITE": "OVR",
    "STATUSBAR_INSOVR_TOOLTIP": "按一下可以在插入 (INS) 與覆寫 (OVR) 模式中切換",
    "STATUSBAR_LANG_TOOLTIP": "按一下可以變更檔案類型",
    "STATUSBAR_CODE_INSPECTION_TOOLTIP": "{0}。按一下可以開啟或關閉報告面板。",
    "STATUSBAR_DEFAULT_LANG": "(預設)",
    "STATUSBAR_SET_DEFAULT_LANG": "設定成 .{0} 檔的預設值",
    "ERRORS_PANEL_TITLE_MULTIPLE": "{0} 項問題",
    "SINGLE_ERROR": "1 項 {0} 問題",
    "MULTIPLE_ERRORS": "{1} 項 {0} 問題",
    "NO_ERRORS": "沒發現任何 {0} 問題，幹得好!",
    "NO_ERRORS_MULTIPLE_PROVIDER": "沒發現任何問題，幹得好!",
    "LINT_DISABLED": "已停用 Lint 功能",
    "NO_LINT_AVAILABLE": "沒有 {0} 適用的 Linter",
    "NOTHING_TO_LINT": "沒有東西好 Lint",
    "LINTER_TIMED_OUT": "{0} 等了 {1} 毫秒後逾時",
    "LINTER_FAILED": "{0} 已終止，錯誤: {1}",
    "FILE_MENU": "檔案",
    "CMD_FILE_NEW_UNTITLED": "新增",
    "CMD_FILE_NEW": "新增檔案",
    "CMD_FILE_NEW_FOLDER": "新增資料夾",
    "CMD_FILE_OPEN": "開啟…",
    "CMD_ADD_TO_WORKING_SET": "開啟進工作集",
    "CMD_OPEN_DROPPED_FILES": "開啟拖放的檔案",
    "CMD_OPEN_FOLDER": "開啟資料夾…",
    "CMD_FILE_CLOSE": "關閉",
    "CMD_FILE_CLOSE_ALL": "全部關閉",
    "CMD_FILE_CLOSE_LIST": "關閉清單",
    "CMD_FILE_CLOSE_OTHERS": "關閉其他檔案",
    "CMD_FILE_CLOSE_ABOVE": "關閉上列檔案",
    "CMD_FILE_CLOSE_BELOW": "關閉下列檔案",
    "CMD_FILE_SAVE": "儲存",
    "CMD_FILE_SAVE_ALL": "全部儲存",
    "CMD_FILE_SAVE_AS": "另存新檔…",
    "CMD_LIVE_FILE_PREVIEW": "即時預覽",
    "CMD_TOGGLE_LIVE_PREVIEW_MB_MODE": "啟用實驗版即時預覽",
    "CMD_RELOAD_LIVE_PREVIEW": "強制重新載入即時預覽",
    "CMD_PROJECT_SETTINGS": "專案設定…",
    "CMD_FILE_RENAME": "重新命名",
    "CMD_FILE_DELETE": "刪除",
    "CMD_INSTALL_EXTENSION": "安裝擴充功能…",
    "CMD_EXTENSION_MANAGER": "擴充功能管理員…",
    "CMD_FILE_REFRESH": "重新整理檔案樹",
    "CMD_QUIT": "結束",
    "CMD_EXIT": "結束",
    "EDIT_MENU": "編輯",
    "CMD_UNDO": "復原",
    "CMD_REDO": "取消復原",
    "CMD_CUT": "剪下",
    "CMD_COPY": "複製",
    "CMD_PASTE": "貼上",
    "CMD_SELECT_ALL": "選擇全部",
    "CMD_SELECT_LINE": "整行選取",
    "CMD_SPLIT_SEL_INTO_LINES": "逐行切成多段選取區塊",
    "CMD_ADD_CUR_TO_NEXT_LINE": "在下一行加入游標",
    "CMD_ADD_CUR_TO_PREV_LINE": "在上一行加入游標",
    "CMD_INDENT": "縮排",
    "CMD_UNINDENT": "取消縮排",
    "CMD_DUPLICATE": "整行複製",
    "CMD_DELETE_LINES": "整行刪除",
    "CMD_COMMENT": "加入或取消行註解",
    "CMD_BLOCK_COMMENT": "加入或取消區塊註解",
    "CMD_LINE_UP": "整行上移",
    "CMD_LINE_DOWN": "整行下移",
    "CMD_OPEN_LINE_ABOVE": "往上新增一行",
    "CMD_OPEN_LINE_BELOW": "往下新增一行",
    "CMD_TOGGLE_CLOSE_BRACKETS": "自動插入右括號",
    "CMD_SHOW_CODE_HINTS": "顯示程式提示",
    "FIND_MENU": "尋找",
    "CMD_FIND": "尋找",
    "CMD_FIND_NEXT": "找下一個",
    "CMD_FIND_PREVIOUS": "找上一個",
    "CMD_FIND_ALL_AND_SELECT": "找出並全部選取",
    "CMD_ADD_NEXT_MATCH": "一併選取下一筆符合的",
    "CMD_SKIP_CURRENT_MATCH": "跳過並選取下一筆符合的",
    "CMD_FIND_IN_FILES": "在檔案中尋找",
    "CMD_FIND_IN_SUBTREE": "尋找…",
    "CMD_REPLACE": "取代",
    "CMD_REPLACE_IN_FILES": "在檔案中取代",
    "CMD_REPLACE_IN_SUBTREE": "取代…",
    "VIEW_MENU": "檢視",
    "CMD_HIDE_SIDEBAR": "隱藏側欄",
    "CMD_SHOW_SIDEBAR": "顯示側欄",
    "CMD_INCREASE_FONT_SIZE": "放大字體",
    "CMD_DECREASE_FONT_SIZE": "縮小字體",
    "CMD_RESTORE_FONT_SIZE": "還原字體大小",
    "CMD_SCROLL_LINE_UP": "向上捲動一行",
    "CMD_SCROLL_LINE_DOWN": "向下捲動一行",
    "CMD_TOGGLE_LINE_NUMBERS": "行號",
    "CMD_TOGGLE_ACTIVE_LINE": "強調游標所在行",
    "CMD_TOGGLE_WORD_WRAP": "自動換行",
    "CMD_LIVE_HIGHLIGHT": "即時預覽強調顯示",
    "CMD_VIEW_TOGGLE_INSPECTION": "存檔時執行 Lint",
    "CMD_WORKINGSET_SORT_BY_ADDED": "依加入先後排序",
    "CMD_WORKINGSET_SORT_BY_NAME": "依檔名排序",
    "CMD_WORKINGSET_SORT_BY_TYPE": "依類型排序",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "自動排序",
    "CMD_THEMES": "佈景主題…",
    "NAVIGATE_MENU": "瀏覽",
    "CMD_QUICK_OPEN": "快速開啟",
    "CMD_GOTO_LINE": "到指定行",
    "CMD_GOTO_DEFINITION": "快速尋找定義",
    "CMD_GOTO_FIRST_PROBLEM": "到第一筆問題",
    "CMD_TOGGLE_QUICK_EDIT": "快速編輯",
    "CMD_TOGGLE_QUICK_DOCS": "快速文件",
    "CMD_QUICK_EDIT_PREV_MATCH": "上一筆符合",
    "CMD_QUICK_EDIT_NEXT_MATCH": "下一筆符合",
    "CMD_CSS_QUICK_EDIT_NEW_RULE": "新增規則",
    "CMD_NEXT_DOC": "下一個檔案",
    "CMD_PREV_DOC": "上一個檔案",
    "CMD_NEXT_DOC_LIST_ORDER": "清單中的下一個檔案",
    "CMD_PREV_DOC_LIST_ORDER": "清單中的上一個檔案",
    "CMD_SHOW_IN_TREE": "在檔案樹中顯示",
    "CMD_SHOW_IN_EXPLORER": "在檔案總管中顯示",
    "CMD_SHOW_IN_FINDER": "在 Finder 中顯示",
    "CMD_SHOW_IN_OS": "在作業系統中顯示",
    "HELP_MENU": "說明",
    "CMD_CHECK_FOR_UPDATE": "檢查是否有更新",
    "CMD_HOW_TO_USE_BRACKETS": "如何使用 {APP_NAME}",
    "CMD_SUPPORT": "{APP_NAME} 支援",
    "CMD_SUGGEST": "功能建議",
    "CMD_RELEASE_NOTES": "版本資訊",
    "CMD_GET_INVOLVED": "參與",
    "CMD_SHOW_EXTENSIONS_FOLDER": "顯示擴充功能資料夾",
    "CMD_HEALTH_DATA_STATISTICS": "狀況報告",
    "CMD_HOMEPAGE": "{APP_TITLE} 首頁",
    "CMD_TWITTER": "Twitter {TWITTER_NAME} 專頁",
    "CMD_ABOUT": "關於 {APP_TITLE}",
    "CMD_OPEN_PREFERENCES": "開啟喜好設定檔",
    "CMD_OPEN_KEYMAP": "開啟使用者按鍵對應檔",
    "EXPERIMENTAL_BUILD": "實驗建置",
    "RELEASE_BUILD": "建置",
    "DEVELOPMENT_BUILD": "開發建置",
    "RELOAD_FROM_DISK": "從磁碟重新載入",
    "KEEP_CHANGES_IN_EDITOR": "在編輯器中保留變更",
    "CLOSE_DONT_SAVE": "關閉 (不要儲存)",
    "RELAUNCH_CHROME": "重新啟動 Chrome",
    "ABOUT": "關於",
    "CLOSE": "關閉",
    "ABOUT_TEXT_LINE1": "發行 {VERSION_MAJOR}.{VERSION_MINOR} {BUILD_TYPE} {VERSION}",
    "ABOUT_TEXT_BUILD_TIMESTAMP": "建置時間: ",
    "ABOUT_TEXT_LINE3": "第三方軟體的注意事項、使用條款及條件公佈在 <a href='{ADOBE_THIRD_PARTY}'>{ADOBE_THIRD_PARTY}</a>，於此引用納入。",
    "ABOUT_TEXT_LINE4": "說明文件及原始碼都在 <a href='https://github.com/adobe/brackets/'>https://github.com/adobe/brackets/</a> 上。",
    "ABOUT_TEXT_LINE5": "用 ❤ 跟 JavaScript 打造。工匠名錄:",
    "ABOUT_TEXT_LINE6": "一大票人馬 (只可惜我們現在沒辦法正常載入名單)。",
    "ABOUT_TEXT_WEB_PLATFORM_DOCS": "Web Platform 文件及 Web Platform 圖示皆以 Creative Commons Attribution 授權條款 <a href='{WEB_PLATFORM_DOCS_LICENSE}'>CC-BY 3.0 Unported</a> 授權。",
    "UPDATE_NOTIFICATION_TOOLTIP": "有新版的 {APP_NAME}! 點這裡了解詳情。",
    "UPDATE_AVAILABLE_TITLE": "有新版",
    "UPDATE_MESSAGE": "嗨! 新版的 {APP_NAME} 已經可以下載。新功能有:",
    "GET_IT_NOW": "馬上取得!",
    "PROJECT_SETTINGS_TITLE": "專案設定: {0}",
    "PROJECT_SETTING_BASE_URL": "即時預覽 URL 根位址",
    "PROJECT_SETTING_BASE_URL_HINT": "如果要用本機伺服器，可以輸入 http://localhost:8000/ 這類 URL",
    "BASEURL_ERROR_INVALID_PROTOCOL": "即時預覽功能不支援 {0} 協定&mdash;請使用 http: 或 https: 。",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "URL 根位址不能有 &quot;{0}&quot; 這類搜尋參數。",
    "BASEURL_ERROR_HASH_DISALLOWED": "URL 根位址不能有半型井號 (#)，例如 &quot;{0}&quot;。",
    "BASEURL_ERROR_INVALID_CHAR": "'{0}' 這類特殊字元一定要用 % 格式編碼過。",
    "BASEURL_ERROR_UNKNOWN_ERROR": "解析 URL 根位址時發生不明錯誤",
    "EMPTY_VIEW_HEADER": "<em>選到本窗格後再開啟檔案</em>",
    "CURRENT_THEME": "目前的佈景主題",
    "USE_THEME_SCROLLBARS": "使用佈景主題的捲軸",
    "FONT_SIZE": "字體大小",
    "FONT_FAMILY": "字體",
    "THEMES_SETTINGS": "佈景主題設定",
    "BUTTON_NEW_RULE": "新增規則",
    "INSTALL": "安裝",
    "UPDATE": "更新",
    "REMOVE": "移除",
    "DISABLE": "停用",
    "ENABLE": "啟用",
    "OVERWRITE": "覆寫",
    "CANT_REMOVE_DEV": "在 &quot;dev&quot; 資料夾中的擴充功能必需手動刪除。",
    "CANT_UPDATE": "這項更新不相容於這一版的 {APP_NAME}。",
    "CANT_UPDATE_DEV": "在 &quot;dev&quot; 資料夾中的擴充功能無法自動更新。",
    "INSTALL_EXTENSION_TITLE": "安裝擴充功能",
    "UPDATE_EXTENSION_TITLE": "更新擴充功能",
    "INSTALL_EXTENSION_LABEL": "擴充功能 URL",
    "INSTALL_EXTENSION_HINT": "擴充功能 zip 壓縮檔或是 GitHub 儲存庫的 URL",
    "INSTALLING_FROM": "由 {0} 安裝擴充功能中…",
    "INSTALL_SUCCEEDED": "安裝成功!",
    "INSTALL_FAILED": "安裝失敗。",
    "CANCELING_INSTALL": "取消中…",
    "CANCELING_HUNG": "取消安裝花太多時間。可能發生了內部錯誤。",
    "INSTALL_CANCELED": "安裝已取消。",
    "VIEW_COMPLETE_DESCRIPTION": "顯示完整描述資訊",
    "VIEW_TRUNCATED_DESCRIPTION": "只顯示部分描述資訊",
    "INVALID_ZIP_FILE": "下載的內容不是正確的 zip 壓縮檔。",
    "INVALID_PACKAGE_JSON": "package.json 檔案無效 (錯誤: {0}).",
    "MISSING_PACKAGE_NAME": "package.json 檔案中沒有指定套件名稱。",
    "BAD_PACKAGE_NAME": "{0} 不是正確的套件名稱。",
    "MISSING_PACKAGE_VERSION": "package.json 檔案中沒有指定套件版本。",
    "INVALID_VERSION_NUMBER": "套件版號 ({0}) 無效。",
    "INVALID_BRACKETS_VERSION": "{APP_NAME} 相容性字串 ({0}) 無效。",
    "DISALLOWED_WORDS": "{0} 欄位中不能有 ({1}) 這些字。",
    "API_NOT_COMPATIBLE": "這個擴充功能不相容於本版 {APP_NAME}。已將其安裝在 &quot;disabled&quot; 已停用擴充功能資料夾中。",
    "MISSING_MAIN": "套件中沒有 main.js 檔案。",
    "EXTENSION_ALREADY_INSTALLED": "安裝這個套件將會蓋掉先前安裝的擴充功能。 是否要覆寫?",
    "EXTENSION_SAME_VERSION": "已經安裝過這個版本的套件了。 是否要覆寫已安裝的版本?",
    "EXTENSION_OLDER_VERSION": "{0} 版的套件比已安裝的版本 ({1}) 還要舊。 是否要覆寫已經安裝的版本?",
    "DOWNLOAD_ID_IN_USE": "內部錯誤: 下載識別碼正在使用中。",
    "NO_SERVER_RESPONSE": "無法連到伺服器。",
    "BAD_HTTP_STATUS": "伺服器 (HTTP {0}) 回應找不到檔案。",
    "CANNOT_WRITE_TEMP": "無法下載存成暫存檔。",
    "ERROR_LOADING": "擴充功能啟動時發生錯誤。",
    "MALFORMED_URL": "URL 無效。請檢查您是否輸入正確。",
    "UNSUPPORTED_PROTOCOL": "只支援 http 或 https 協定的 URL。",
    "UNKNOWN_ERROR": "不明的內部錯誤。",
    "EXTENSION_MANAGER_TITLE": "擴充功能管理員",
    "EXTENSION_MANAGER_ERROR_LOAD": "無法存取擴充功能登錄庫。請稍後再試。",
    "INSTALL_EXTENSION_DRAG": "將 .zip 拖過來，或",
    "INSTALL_EXTENSION_DROP": "放開 .zip 開始安裝",
    "INSTALL_EXTENSION_DROP_ERROR": "下列原因造成安裝或是更新失敗:",
    "INSTALL_FROM_URL": "由 URL 安裝…",
    "INSTALL_EXTENSION_VALIDATING": "Validating…",
    "EXTENSION_AUTHOR": "作者",
    "EXTENSION_DATE": "日期",
    "EXTENSION_INCOMPATIBLE_NEWER": "這個擴充功能需要較新版的 {APP_NAME} 才能使用。",
    "EXTENSION_INCOMPATIBLE_OLDER": "這個擴充功能目前只能在舊版 {APP_NAME} 中使用。",
    "EXTENSION_LATEST_INCOMPATIBLE_NEWER": "這個擴充功能 {0} 版只能在新版 {APP_NAME} 中使用。不過您可以選擇安裝較舊的 {1} 版。",
    "EXTENSION_LATEST_INCOMPATIBLE_OLDER": "這個擴充功能 {0} 版只能在舊版 {APP_NAME} 中使用。不過您可以選擇安裝較舊的 {1} 版。",
    "EXTENSION_NO_DESCRIPTION": "沒有描述資訊",
    "EXTENSION_MORE_INFO": "更多資訊…",
    "EXTENSION_ERROR": "擴充功能錯誤",
    "EXTENSION_KEYWORDS": "關鍵字",
    "EXTENSION_TRANSLATED_USER_LANG": "包含您使用的語言在內，總共支援 {0} 種語言",
    "EXTENSION_TRANSLATED_GENERAL": "支援 {0} 種語言",
    "EXTENSION_TRANSLATED_LANGS": "這個擴充功能已經被翻譯成下列語言: {0}",
    "EXTENSION_INSTALLED": "已安裝",
    "EXTENSION_UPDATE_INSTALLED": "這個擴充功能的更新已經下載完成，會在重新載入 {APP_NAME} 時安裝。",
    "EXTENSION_SEARCH_PLACEHOLDER": "搜尋",
    "EXTENSION_MORE_INFO_LINK": "更多",
    "BROWSE_EXTENSIONS": "瀏覽擴充功能",
    "EXTENSION_MANAGER_REMOVE": "移除擴充功能",
    "EXTENSION_MANAGER_REMOVE_ERROR": "無法移除擴充功能: {0}。 {APP_NAME} 還是會重新載入。",
    "EXTENSION_MANAGER_UPDATE": "更新擴充功能",
    "EXTENSION_MANAGER_UPDATE_ERROR": "無法更新擴充功能: {0}。 {APP_NAME} 還是會重新載入。",
    "EXTENSION_MANAGER_DISABLE": "停用擴充功能",
    "EXTENSION_MANAGER_DISABLE_ERROR": "無法停用擴充功能: {0}。 {APP_NAME} 還是會重新載入。",
    "MARKED_FOR_REMOVAL": "標為待移除",
    "UNDO_REMOVE": "復原",
    "MARKED_FOR_UPDATE": "標為待更新",
    "UNDO_UPDATE": "復原",
    "MARKED_FOR_DISABLING": "標為待停用",
    "UNDO_DISABLE": "復原",
    "CHANGE_AND_RELOAD_TITLE": "變更擴充功能",
    "CHANGE_AND_RELOAD_MESSAGE": "要更新、移除或停用標記的擴充功能，需要重新載入 {APP_NAME}。 會再提示您儲存所做的變更。",
    "REMOVE_AND_RELOAD": "移除擴充功能並重新載入",
    "CHANGE_AND_RELOAD": "變更擴充功能並重新載入",
    "UPDATE_AND_RELOAD": "更新擴充功能並重新載入",
    "DISABLE_AND_RELOAD": "停用擴充功能並重新載入",
    "PROCESSING_EXTENSIONS": "正在變更擴充功能…",
    "EXTENSION_NOT_INSTALLED": "無法移除還沒安裝的擴充功能 {0}。",
    "NO_EXTENSIONS": "還沒安裝任何擴充功能。<br>請點一下上方的「可使用」頁籤開始。",
    "NO_EXTENSION_MATCHES": "找不到符合您搜尋條件的擴充功能。",
    "REGISTRY_SANITY_CHECK_WARNING": "注意: 擴充功能可能是 {APP_NAME} 以外的作者提供，內容沒有經過檢閱，並且有完整的本地權限。由不明來源安裝時請小心警覺!",
    "EXTENSIONS_INSTALLED_TITLE": "已安裝",
    "EXTENSIONS_AVAILABLE_TITLE": "可使用",
    "EXTENSIONS_THEMES_TITLE": "佈景主題",
    "EXTENSIONS_UPDATES_TITLE": "更新",
    "INLINE_EDITOR_NO_MATCHES": "找不到符合的。",
    "INLINE_EDITOR_HIDDEN_MATCHES": "所有符合項目都被收合起來了。展開右側清單中的檔案檢視符合項目。",
    "CSS_QUICK_EDIT_NO_MATCHES": "既有 CSS 中沒有符合您選取內容的規則。<br> 按一下「新增規則」 建立一組。",
    "CSS_QUICK_EDIT_NO_STYLESHEETS": "您的專案中沒有 Stylesheet 樣式表檔案。<br>建立一個來新增 CSS 規則。",
    "IMAGE_VIEWER_LARGEST_ICON": "最大",
    "UNIT_PIXELS": "像素",
    "DEBUG_MENU": "除錯",
    "ERRORS": "錯誤",
    "CMD_SHOW_DEV_TOOLS": "顯示開發者工具",
    "CMD_REFRESH_WINDOW": "重新載入並啟用擴充功能",
    "CMD_RELOAD_WITHOUT_USER_EXTS": "重新載入並停用擴充功能",
    "CMD_NEW_BRACKETS_WINDOW": "開新 {APP_NAME} 視窗",
    "CMD_LAUNCH_SCRIPT_MAC": "安裝命令列捷徑",
    "CMD_SWITCH_LANGUAGE": "切換語言",
    "CMD_RUN_UNIT_TESTS": "執行測試",
    "CMD_SHOW_PERF_DATA": "顯示效能資料",
    "CMD_ENABLE_NODE_DEBUGGER": "啟用 Node 除錯工具",
    "CMD_LOG_NODE_STATE": "將 Node 狀態寫到 Console",
    "CMD_RESTART_NODE": "重新啟動 Node",
    "CMD_SHOW_ERRORS_IN_STATUS_BAR": "在狀態列顯示錯誤訊息",
    "CMD_OPEN_BRACKETS_SOURCE": "開啟 {APP_NAME} 原始碼",
    "CREATING_LAUNCH_SCRIPT_TITLE": "{APP_NAME} 命令列捷徑",
    "ERROR_CREATING_LAUNCH_SCRIPT": "安裝命令列捷徑時發生錯誤。請嘗試<a href='https://github.com/adobe/brackets/wiki/Command-Line-Arguments#troubleshooting'>這些疑難排解建議</a>。<br/><br/>原因: {0}",
    "ERROR_CLTOOLS_RMFAILED": "無法移除現有的 <code>/usr/local/bin/brackets</code> 符號連結。",
    "ERROR_CLTOOLS_MKDIRFAILED": "無法建立 <code>/usr/local/bin</code> 目錄。",
    "ERROR_CLTOOLS_LNFAILED": "無法建立 <code>/usr/local/bin/brackets</code> 符號連結。",
    "ERROR_CLTOOLS_SERVFAILED": "內部錯誤。",
    "ERROR_CLTOOLS_NOTSUPPORTED": "在這個作業系統中無法使用命令列捷徑功能。",
    "LAUNCH_SCRIPT_CREATE_SUCCESS": "成功! 現在開始您可以經由下列指令啟動 {APP_NAME}: <code>brackets myFile.txt</code> 開啟檔案，或 <code>brackets myFolder</code> 切換專案。<br/><br/><a href='https://github.com/adobe/brackets/wiki/Command-Line-Arguments'>了解更多</a> {APP_NAME} 命令列的使用方法。",
    "LANGUAGE_TITLE": "切換語言",
    "LANGUAGE_MESSAGE": "語言:",
    "LANGUAGE_SUBMIT": "重新載入 {APP_NAME}",
    "LANGUAGE_CANCEL": "取消",
    "LANGUAGE_SYSTEM_DEFAULT": "系統預設",
    "HEALTH_DATA_NOTIFICATION": "狀況報告喜好設定",
    "HEALTH_FIRST_POPUP_TITLE": "{APP_NAME} 狀況報告",
    "HEALTH_DATA_DO_TRACK": "匿名分享我如何使用 {APP_NAME} 的資訊",
    "HEALTH_DATA_NOTIFICATION_MESSAGE": "為了讓 {APP_NAME} 更好，我們會定期將您使用 {APP_NAME} 的統計資料傳送給 Adobe，資料內容是有限且<strong>匿名</strong>的。這些資訊能幫忙區別出各項功能的重要程度、找出程式錯誤及突顯出可用性問題。<br><br>您可以在 <strong>說明 > 狀況報告</strong> 裡看到資料內容，或是設成不回報。<br><br><a href='https://github.com/adobe/brackets/wiki/Health-Data'>更進一步了解 {APP_NAME} 狀況報告</a>",
    "HEALTH_DATA_PREVIEW": "{APP_NAME} 狀況報告",
    "HEALTH_DATA_PREVIEW_INTRO": "<p>為了讓 {APP_NAME} 更好，我們會定期將您使用 {APP_NAME} 的統計資料傳送給 Adobe，資料內容是有限且<strong>匿名</strong>的。這些資訊能幫忙區別出各項功能的重要程度、找出程式錯誤及突顯出可用性問題。<a href='https://github.com/adobe/brackets/wiki/Health-Data'>更進一步了解 {APP_NAME} 狀況報告</a>以及如何在不洩露您隱私的情況下幫助 {APP_NAME} 開發社群。</p><p><strong>在您同意的前提下</strong>，下次會送出的「狀況報告」資料內容預覽如下。</p>",
    "INLINE_TIMING_EDITOR_TIME": "時間",
    "INLINE_TIMING_EDITOR_PROGRESSION": "進度",
    "BEZIER_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> 移動選取的控制點<br><kbd class='text'>Shift</kbd> 移動 10 個單位<br><kbd class='text'>Tab</kbd> 切換控制點",
    "STEPS_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd> 增加或減少 Step 數<br><kbd>←</kbd><kbd>→</kbd> 'Start' 或 'End'",
    "INLINE_TIMING_EDITOR_INVALID": "原始值 <code>{0}</code> 無效，因此改以 <code>{1}</code> 函式顯示。 檔案在第一次編輯後將被更新。",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "目前色彩",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "原始色彩",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa 格式",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex 格式",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa 格式",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0}（已用 {1} 次）",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0}（已用 {1} 次）",
    "CMD_JUMPTO_DEFINITION": "跳到定義",
    "CMD_SHOW_PARAMETER_HINT": "顯示參數提示",
    "NO_ARGUMENTS": "<無參數>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript 檔案推斷問題",
    "DETECTED_EXCLUSION_INFO": "{APP_NAME} 處理 <span class='dialog-filename'>{0}</span> 時發生問題。<br><br>這個檔案在「程式提示」、「跳到定義位置」或「快速編輯」時都不會再被處理。如果想要繼續處理這個檔案，請開啟專案中的 <code>.brackets.json</code> 檔編輯 <code>jscodehints.detectedExclusions</code> 屬性。<br><br>也有可能是 {APP_NAME} 本身的 Bug 引起的。如果可以，請您將這個檔案複製一份，並<a href='https://github.com/adobe/brackets/wiki/How-to-Report-an-Issue'>開一張問題單</a>連結過去。",
    "JSLINT_NAME": "JSLint",
    "CMD_ENABLE_QUICK_VIEW": "滑動到元素上方時快速檢視",
    "CMD_TOGGLE_RECENT_PROJECTS": "最近開啟的專案",
    "DOCS_MORE_LINK": "了解更多",
    "COLLAPSE_ALL": "全部收合",
    "EXPAND_ALL": "全部展開",
    "COLLAPSE_CURRENT": "收合目前區塊",
    "EXPAND_CURRENT": "展開目前區塊",
    "DESCRIPTION_CLOSE_BRACKETS": "true 代表自動插入右括號",
    "DESCRIPTION_CLOSE_OTHERS_ABOVE": "false 代表由「工作檔案」內容功能表中移除「關閉上列檔案」",
    "DESCRIPTION_CLOSE_OTHERS_BELOW": "false 代表由「工作檔案」內容功能表中移除「關閉下列檔案」",
    "DESCRIPTION_CLOSE_OTHERS": "false 代表由「工作檔案」內容功能表中移除「關閉其他檔案」",
    "DESCRIPTION_CLOSE_TAGS": "設定結尾標籤自動插入選項",
    "DESCRIPTION_CLOSE_TAGS_DONT_CLOSE_TAGS": "不需要自動結尾的標籤陣列",
    "DESCRIPTION_CLOSE_TAGS_WHEN_OPENING": "輸入啟始標籤的 > 時自動結尾",
    "DESCRIPTION_CLOSE_TAGS_WHEN_CLOSING": "輸入結尾標籤的 / 時自動完成結尾",
    "DESCRIPTION_CLOSE_TAGS_INDENT_TAGS": "啟始時需要空一行的標籤陣列",
    "DESCRIPTION_CODE_FOLDING_ALWAY_USE_INDENT_FOLD": "true 代表縮排階層變更時立即產生區塊收合標記",
    "DESCRIPTION_CODE_FOLDING_ENABLED": "true 代表啟用程式區塊收合功能",
    "DESCRIPTION_CODE_FOLDING_HIDE_UNTIL_MOUSEOVER": "true 代表只在滑鼠游標移動到邊欄時才顯示區塊收合標記",
    "DESCRIPTION_CODE_FOLDING_MAX_FOLD_LEVEL": "「全部收合」時實際收合的階層上限",
    "DESCRIPTION_CODE_FOLDING_MIN_FOLD_SIZE": "顯示區塊收合標記的最小行數",
    "DESCRIPTION_CODE_FOLDING_SAVE_FOLD_STATES": "true 代表關閉再重開檔案或專案後還要記住收合狀態",
    "DESCRIPTION_CODE_FOLDING_MAKE_SELECTIONS_FOLDABLE": "true 代表在編輯器中啟用選取區塊收合功能",
    "DESCRIPTION_ATTR_HINTS": "啟用或停用 HTML 屬性提示",
    "DESCRIPTION_CSS_PROP_HINTS": "啟用或停用 CSS/LESS/SCSS 屬性提示",
    "DESCRIPTION_JS_HINTS": "啟用或停用 JavaScript 程式碼提示",
    "DESCRIPTION_PREF_HINTS": "啟用或停用「喜好設定」程式碼提示",
    "DESCRIPTION_SPECIAL_CHAR_HINTS": "啟用或停用 HTML 實體 (Entity) 提示",
    "DESCRIPTION_SVG_HINTS": "啟用或停用 SVG 程式碼提示",
    "DESCRIPTION_HTML_TAG_HINTS": "啟用或停用 HTML 標籤提示",
    "DESCRIPTION_URL_CODE_HINTS": "啟用或停用 HTML 與 CSS/LESS/SCSS 中的 URL 提示",
    "DESCRIPTION_DRAG_DROP_TEXT": "啟用或停用「拖放功能」",
    "DESCRIPTION_HEALTH_DATA_TRACKING": "啟用「狀況資料追蹤」",
    "DESCRIPTION_HIGHLIGHT_MATCHES": "啟用檔案中的其他符合字串突顯功能",
    "DESCRIPTION_HIGHLIGHT_MATCHES_SHOW_TOKEN": "突顯游標所在字符的所有符合字串 (不用選取)",
    "DESCRIPTION_HIGHLIGHT_MATCHES_WORDS_ONLY": "只在選到完整字符時才突顯其他符合字串",
    "DESCRIPTION_INSERT_HINT_ON_TAB": "true 代表按 Tab 鍵也能插入選取的程式碼提示",
    "DESCRIPTION_NO_HINTS_ON_DOT": "true 代表輸入 . 時不要自動顯示 JS 程式碼提示",
    "DESCRIPTION_JSLINT_OPTIONS": "JSLint 預設選項值物件",
    "DESCRIPTION_JSLINT_OPTIONS_ASS": "true 代表允許使用指派運算式",
    "DESCRIPTION_JSLINT_OPTIONS_BITWISE": "true 代表允許使用位元運算子",
    "DESCRIPTION_JSLINT_OPTIONS_BROWSER": "true 代表標準瀏覽器全域變數應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_CLOSURE": "true 代表允許使用 Google Closure 慣用語",
    "DESCRIPTION_JSLINT_OPTIONS_CONTINUE": "true 代表允許使用 &quot;continue&quot; 陳述式",
    "DESCRIPTION_JSLINT_OPTIONS_COUCH": "true 代表 CouchDB 全域變數應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_DEBUG": "true 代表允許使用 debugger 陳述式",
    "DESCRIPTION_JSLINT_OPTIONS_DEVEL": "true 代表瀏覽器開發輔助全域應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_EQEQ": "true 代表允許使用 == 及 !=",
    "DESCRIPTION_JSLINT_OPTIONS_ES6": "true 代表 ES6 全域變數應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_EVIL": "true 代表允許 eval",
    "DESCRIPTION_JSLINT_OPTIONS_FORIN": "true 代表允許使用不過濾的 &quot;for in&quot;",
    "DESCRIPTION_JSLINT_OPTIONS_INDENT": "指定 Tab 寬度",
    "DESCRIPTION_JSLINT_OPTIONS_MAXERR": "警告回報上限",
    "DESCRIPTION_JSLINT_OPTIONS_MAXLEN": "每一行字元數上限",
    "DESCRIPTION_JSLINT_OPTIONS_NEWCAP": "true 代表允許建構式首字不用大寫",
    "DESCRIPTION_JSLINT_OPTIONS_NODE": "true 代表 Node.js 全域變數應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_NOMEN": "true 代表允許在識別名稱中使用底線 (_) 開頭或結尾",
    "DESCRIPTION_JSLINT_OPTIONS_PASSFAIL": "true 代表停在第一筆錯誤",
    "DESCRIPTION_JSLINT_OPTIONS_PLUSPLUS": "true 代表允許使用 ++ 及 --",
    "DESCRIPTION_JSLINT_OPTIONS_REGEXP": "true 代表允許在 RegExp 中使用 . 及 [^...].",
    "DESCRIPTION_JSLINT_OPTIONS_RHINO": "true 代表 Rhino 全域變數應該事先定義",
    "DESCRIPTION_JSLINT_OPTIONS_SLOPPY": "true 代表允許不用 `use strict` 指示詞 (Pragma)",
    "DESCRIPTION_JSLINT_OPTIONS_STUPID": "true 代表允許使用阻斷式 ('...Sync') 方法",
    "DESCRIPTION_JSLINT_OPTIONS_SUB": "true 代表允許使用效率較差的方括號方式存取屬性值",
    "DESCRIPTION_JSLINT_OPTIONS_TODO": "true 代表允許使用 TODO 註解",
    "DESCRIPTION_JSLINT_OPTIONS_UNPARAM": "true 代表允許出現沒有使用到的參數",
    "DESCRIPTION_JSLINT_OPTIONS_VARS": "true 代表允許函式中出現兩個以上的 var",
    "DESCRIPTION_JSLINT_OPTIONS_WHITE": "true 代表要忽略空格規則",
    "DESCRIPTION_LANGUAGE": "語言相關設定",
    "DESCRIPTION_LANGUAGE_FILE_EXTENSIONS": "副檔與程式語言名稱的額外對應",
    "DESCRIPTION_LANGUAGE_FILE_NAMES": "檔名與程式語言名稱的額外對應",
    "DESCRIPTION_LINTING_ENABLED": "true 代表啟用「程式碼檢查」",
    "DESCRIPTION_ASYNC_TIMEOUT": "非同步檢查程式的執行時間上限亳秒數",
    "DESCRIPTION_LINTING_PREFER": "優先執行的檢查程式陣列",
    "DESCRIPTION_LIVE_DEV_MULTIBROWSER": "true 代表啟用實驗版「即時預覽」",
    "DESCRIPTION_USE_PREFERED_ONLY": "true 代表只執行 linting.prefer 中指定的提供者",
    "DESCRIPTION_MAX_CODE_HINTS": "同時顯示的程式碼提示數目上限",
    "DESCRIPTION_PATH": "路徑相關設定",
    "DESCRIPTION_PROXY": "用來安裝擴充功能的 Proxy 伺服器 URL",
    "DESCRIPTION_SCROLL_PAST_END": "true 代表允許捲動到檔案結尾之後",
    "DESCRIPTION_SHOW_CODE_HINTS": "false 代表停用所有的程式碼提示",
    "DESCRIPTION_SHOW_CURSOR_WHEN_SELECTING": "選取文字時還是要顯示閃動的游標",
    "DESCRIPTION_SHOW_LINE_NUMBERS": "true 代表在程式碼左方「邊欄」中顯示行號",
    "DESCRIPTION_SMART_INDENT": "建立新區塊時自動縮排",
    "DESCRIPTION_SOFT_TABS": "false 代表停用軟體 Tab 功能",
    "DESCRIPTION_SORT_DIRECTORIES_FIRST": "true 代表在專案樹中將目錄排在上面",
    "DESCRIPTION_SPACE_UNITS": "以空格縮排時一階的空格數",
    "DESCRIPTION_STATIC_SERVER_PORT": "供「即時預覽」內建伺服器使用的通訊埠號",
    "DESCRIPTION_STYLE_ACTIVE_LINE": "true 代表使用背景色突顯出游標所在行",
    "DESCRIPTION_TAB_SIZE": "顯示一個 Tab 所需的空格數",
    "DESCRIPTION_USE_TAB_CHAR": "true 代表使用 Tab 取代空格",
    "DESCRIPTION_UPPERCASE_COLORS": "true 代表在「就地色彩編輯器」中產出 16 進位色彩值時使用大寫",
    "DESCRIPTION_WORD_WRAP": "超過檢視區寛度時自動換行",
    "DESCRIPTION_DETECTED_EXCLUSIONS": "偵測出會讓 Tern 失控的檔案清單",
    "DESCRIPTION_INFERENCE_TIMEOUT": "Tern 檔案內容分析時間上限毫秒數",
    "DESCRIPTION_SHOW_ERRORS_IN_STATUS_BAR": "true 代表在狀態列顯示錯誤",
    "DESCRIPTION_QUICK_VIEW_ENABLED": "true 代表啟用「快速檢視」",
    "DESCRIPTION_EXTENSION_LESS_IMAGE_PREVIEW": "true 代表對沒有副檔名的 URL 顯示圖片預覽",
    "DESCRIPTION_THEME": "選用 {APP_NAME} 佈景主題",
    "DESCRIPTION_USE_THEME_SCROLLBARS": "true 代表允許自訂捲軸",
    "DESCRIPTION_LINTING_COLLAPSED": "true 代表收合檢查面板",
    "DESCRIPTION_FONT_FAMILY": "變更字族 (Font Family)",
    "DESCRIPTION_FONT_SIZE": "變更字體大小，例如: 13px",
    "DESCRIPTION_FIND_IN_FILES_NODE": "true 代表啟用節點搜尋",
    "DESCRIPTION_FIND_IN_FILES_INSTANT": "true 代表啟用立即搜尋",
    "DESCRIPTION_FONT_SMOOTHING": "只適用 Mac: &quot;subpixel-antialiased&quot; 代表啟用子像素鋸齒消除模式，或是設成 &quot;antialiased&quot; 使用灰階鋸齒消除模式。",
    "DESCRIPTION_OPEN_PREFS_IN_SPLIT_VIEW": "false 代表不要使用分割窗格開啟喜好設定檔",
    "DESCRIPTION_OPEN_USER_PREFS_IN_SECOND_PANE": "false 代表在左窗格或上窗格開啟使用者喜好設定檔",
    "DEFAULT_PREFERENCES_JSON_HEADER_COMMENT": "/*\n * 這是 {APP_NAME} 支援的喜好設定值，內容是唯讀的，請勿直接修改。\n * 供您參考並請修改開在另一個窗格的 &quot;brackets.json&quot; 個人喜好設定檔。\n * 如果想更了解 {APP_NAME} 喜好設定，請參考網頁 https://github.com/adobe/brackets/wiki/How-to-Use-Brackets#preferences\n */",
    "DEFAULT_PREFERENCES_JSON_DEFAULT": "預設",
    "ERROR_OUT_OF_SPACE_TITLE": "已達專案大小限制",
    "ERROR_PROJECT_SIZE_EXCEEDED": "您專案中檔案的大小加總，已達最可用空間大小。您需刪除一些檔案清出空間後，才能再新增檔案。",
    "FILE_EXISTS_HEADER": "檔案已經存在。",
    "ERROR_RENAMING_DIRECTORY_TITLE": "修改資料夾名稱時發生錯誤",
    "ERROR_RENAMING_DIRECTORY": "嘗試更改資料夾 <span class='dialog-filename'>{0}</span> 名稱時發生錯誤。{1}",
    "ERROR_DELETING_DIRECTORY_TITLE": "刪除資料夾時發生錯誤",
    "ERROR_DELETING_DIRECTORY": "嘗試刪除資料夾 <span class='dialog-filename'>{0}</span> 時發生錯誤。{1}",
    "INVALID_DIRNAME_TITLE": "資料夾名稱無效",
    "INVALID_DIRNAME_MESSAGE": "目錄名稱不可使用系統保留字、用小數點 (.) 結束，或包含下列任何字元: <code class='emphasized'>{1}</code>",
    "ERROR_CREATING_DIRECTORY_TITLE": "建立資料夾時發生錯誤",
    "ERROR_CREATING_DIRECTORY": "嘗試建立資料夾 <span class='dialog-filename'>{1}</span> 時發生錯誤。{2}",
    "CONFIRM_FOLDER_DELETE_TITLE": "確認刪除",
    "CONFIRM_FILE_DELETE": "您確定要刪除 <span class='dialog-filename'>{0}</span> 嗎？",
    "USE_IMPORTED": "使用新檔案",
    "KEEP_EXISTING": "保存現有檔案",
    "CMD_FILE_DOWNLOAD": "下載",
    "DND_MAX_SIZE_EXCEEDED": "檔案超過最大支援大小: {0} MB。",
    "DND_UNSUPPORTED_FILE_TYPE": "不支援的檔案類型",
    "DND_ERROR_UNZIP": "無法解壓縮檔案",
    "DND_ERROR_UNTAR": "無法解壓縮檔案",
    "DND_SUCCESS_UNZIP_TITLE": "已成功解壓縮",
    "DND_SUCCESS_UNTAR_TITLE": "已成功解壓縮",
    "DND_FILE_REPLACE": "名為 <span class='dialog-filename'>{0}</span> 的檔案已經存在。您想要使用新檔案，還是保存現有的檔案不變？",
    "IMAGE_FILE_TITLE": "圖片檔案",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} 像素",
    "IMAGE_ALT_TEXT": "圖片說明",
    "IMAGE_FILTERS_TITLE": "圖片濾鏡",
    "IMAGE_FILTER_PINHOLE": "針孔",
    "IMAGE_FILTER_SEPIA": "油畫",
    "IMAGE_FILTER_CONTRAST": "對比",
    "IMAGE_FILTER_VINTAGE": "懷舊",
    "IMAGE_FILTER_SUNRISE": "日出",
    "IMAGE_FILTER_EMBOSS": "浮雕",
    "IMAGE_FILTER_GLOWING_SUN": "耀光",
    "IMAGE_SAVE_WITH_FILTERS": "套用",
    "IMAGE_RESET_FILTERS": "取消",
    "FONT_FILE": "字型檔案",
    "USE_FONT_INSTRUCTIONS": "若要使用此字型，請複製這段程式碼，貼到您的 CSS 檔案中。",
    "FONT_TYPE_BOLD": "粗體",
    "FONT_TYPE_ITALIC": "斜體",
    "FONT_BOLD_HTML_TAG": "將文字放到 <code>&lt;strong&gt;&lt;/strong&gt;</code> 標籤當中。",
    "FONT_BOLD_CSS_RULE": "加入 <code>font-weight: bold;</code> 的 CSS 規則。",
    "FONT_ITALIC_HTML_TAG": "將文字放到 <code>&lt;em&gt;&lt;/em&gt;</code> 標籤當中。",
    "FONT_ITALIC_CSS_RULE": "加入 <code>font-weight: italic;</code> 的 CSS 規則。",
    "VIDEO_FILE": "影片檔案",
    "VIDEO_OPTIONS": "影片選項",
    "VIDEO_CODE_SAMPLE": "複製這段程式碼，貼到您的 HTML 檔案中即可新增這段影片。",
    "VIDEO_OPTION_SHOW_CONTROLS": "顯示影片撥放控制元件",
    "VIDEO_OPTION_AUTOPLAY": "自動播放影片",
    "VIDEO_OPTION_LOOPING": "影片播放完成時重播",
    "VIDEO_OPTION_DISABLE_AUDIO": "關閉音訊",
    "AUDIO_FILE": "音訊檔案",
    "AUDIO_OPTIONS": "音訊選項",
    "AUDIO_OPTION_SHOW_CONTROLS": "顯示音訊播放控制元件（停用時就看不到）",
    "AUDIO_OPTION_AUTOPLAY": "自動開始播放音訊",
    "AUDIO_OPTION_LOOPING": "播放結束時自動重播",
    "AUDIO_OPTION_DISABLE_AUDIO": "載入音訊播放器時，先靜音",
    "BINARY_FILE_TITLE": "無法編輯的檔案",
    "BINARY_FILE_CANNOT_EDIT": "Thimble 不知道要如何編輯這個檔案！",
    "BINARY_FILE_OPTIONS_TITLE": "但您可以…",
    "BINARY_FILE_DOWNLOAD": "下載它",
    "BINARY_FILE_OPEN": "用新分頁開啟它",
    "BINARY_FILE_TRY_EDIT": "嘗試編輯它",
    "PDF_FILE_TITLE": "PDF 檔案",
    "INDIVIDUAL_CORNERS": "分別設定四角",
    "ALL_CORNERS": "全部角落",
    "PIXEL_UNIT": "圖素",
    "PERCENTAGE_UNIT": "百分比",
    "EM_UNIT": "em 字形單位",
    "ALL_SIDE": "各側",
    "INDIVIDUAL_SIDES": "單側",
    "SET_PADDING_FOR": "設定間距: ",
    "SET_MARGIN_FOR": "設定邊界: ",
    "UPLOAD_FILES_DIALOG_HEADER": "上傳檔案",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "…或將檔案拖曳至此。",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "好，發布檔案吧！",
    "UPLOADING_INDICATOR": "上傳中…",
    "BUTTON_FROM_YOUR_COMPUTER": "從您的電腦…",
    "TAKE_A_SELFIE": "拍張自拍照…",
    "CMD_MOVE_FILE": "移動至…",
    "PROJECT_ROOT": "專案根目錄",
    "PICK_A_FOLDER_TO_MOVE_TO": "選擇資料夾",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "移動錯誤",
    "UNEXPECTED_ERROR_MOVING_FILE": "嘗試將 {0} 移動至 {1} 時發生未知錯誤",
    "ERROR_MOVING_FILE_SAME_NAME": "{1} 中已有名稱為 {0} 的檔案或資料夾。請修改任一個名稱後再繼續。",
    "CONSOLE_TITLE": "主控台",
    "CONSOLE_TOOLTIP": "開啟 JavaScript 主控台",
    "CONSOLE_CLEAR": "清除",
    "CONSOLE_CLEAR_TOOLTIP": "清除主控台",
    "CONSOLE_CLOSE_TOOLTIP": "關閉主控台",
    "CONSOLE_EMPTY_STRING": "空字串",
    "CONSOLE_HELPTEXT": "在 JavaScript 檔案中加入 <code>console.log(&quot;Hello World!&quot;);</code>，即可使用主控台。"
});
