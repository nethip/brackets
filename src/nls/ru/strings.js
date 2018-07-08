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

    "GENERIC_ERROR": "(ошибка {0})",
    "NOT_FOUND_ERR": "Не удалось найти файл/директорию.",
    "NOT_READABLE_ERR": "Не удалось прочитать файл/директорию.",
    "NO_MODIFICATION_ALLOWED_ERR": "Целевая директория не может быть изменена.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "Ограничение прав не позволяет сделать изменения.",
    "CONTENTS_MODIFIED_ERR": "Файл был изменен вне {APP_NAME}.",
    "UNSUPPORTED_ENCODING_ERR": "{APP_NAME} пока поддерживает только текстовые файлы в кодировке UTF-8.",
    "FILE_EXISTS_ERR": "Файл или директория уже существует.",
    "FILE": "файл",
    "DIRECTORY": "каталог",
    "DIRECTORY_NAMES_LEDE": "Имена директорий",
    "FILENAMES_LEDE": "Имена файлов",
    "FILENAME": "Имя файла",
    "DIRECTORY_NAME": "Имя директории",
    "ERROR_LOADING_PROJECT": "Ошибка при загрузке проекта",
    "OPEN_DIALOG_ERROR": "Не удалось отобразить диалог открытия файла. (ошибка {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "Произошла ошибка при попытке загрузить директорию <span class='dialog-filename'>{0}</span>. (ошибка {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Произошла ошибка при попытке чтения содержимого каталога <span class='dialog-filename'>{0}</span>. (ошибка {1})",
    "ERROR_OPENING_FILE_TITLE": "Ошибка при открытии файла",
    "ERROR_OPENING_FILE": "Произошла ошибка при открытии файла <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Произошла ошибка при открытии следующих файлов:",
    "ERROR_RELOADING_FILE_TITLE": "Ошибка перезагрузки изменений с диска",
    "ERROR_RELOADING_FILE": "Произошла ошибка при попытке перезагрузить файл <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_SAVING_FILE_TITLE": "Ошибка при сохранении файла",
    "ERROR_SAVING_FILE": "Произошла ошибка при попытке сохранить файл <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Ошибка при переименовании {0}",
    "ERROR_RENAMING_FILE": "Произошла ошибка при попытке переименования файла <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Ошибка при удалении {0}",
    "ERROR_DELETING_FILE": "Произошла ошибка при попытке удаления файла <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Некорректное имя файла",
    "INVALID_FILENAME_MESSAGE": "Имена файлов не могут использовать любые зарезервированные системой слова, оканчиваться на точки (.) или использовать любые из следующих символов: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Файл или директория с именем <span class='dialog-filename'>{0}</span> уже существует.",
    "ERROR_CREATING_FILE_TITLE": "Ошибка при создании {0}",
    "ERROR_CREATING_FILE": "Произошла ошибка при попытке создать файл <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_PREFS_CORRUPT_TITLE": "Ошибка чтения настроек",
    "ERROR_PREFS_CORRUPT": "Обнаружена ошибка формата JSON в файле настроек. Он будет открыт для того, чтобы исправить ошибку вручную. Вам будет необходимо перезагрузить {APP_NAME}, чтобы исправления вступили в силу.",
    "ERROR_IN_BROWSER_TITLE": "К сожалению, запуск {APP_NAME} в браузере пока что не поддерживается.",
    "ERROR_IN_BROWSER": "{APP_NAME} разработан на HTML, но пока что может работать только как настольное приложение, чтобы вы могли редактировать локальные файлы. Пожалуйста, используйте специальную оболочку (проект <b>github.com/adobe/brackets-shell</b>) для запуска {APP_NAME}.",
    "ERROR_MAX_FILES_TITLE": "Ошибка при индексации файлов",
    "ERROR_MAX_FILES": "Количество файлов превышает предельно допустимое. Команды использующие индекс файлов могут работать некорректно.",
    "ERROR_LAUNCHING_BROWSER_TITLE": "Ошибка запуска браузера.",
    "ERROR_CANT_FIND_CHROME": "Браузер Google Chrome не найден. Пожалуйста, убедитесь, что он установлен.",
    "ERROR_LAUNCHING_BROWSER": "Произошла ошибка при запуске браузера. (ошибка {0})",
    "LIVE_DEVELOPMENT_ERROR_TITLE": "Ошибка функции Live Preview",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "Соединение с браузером",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "Функция Live Preview требует перезапуска Chrome с включенной функцией удаленной отладки. <br /><br />Перезапустить Chrome с удаленной отладкой?",
    "LIVE_DEV_LOADING_ERROR_MESSAGE": "Невозможно загрузить страницу Live Preview",
    "LIVE_DEV_NEED_HTML_MESSAGE": "Откройте HTML файл или убедитесь в наличии index.html в проекте для того чтобы запустить интерактивную разработку.",
    "LIVE_DEV_NEED_BASEURL_MESSAGE": "Для запуска Live Preview с серверным файлом, вы должны указать базовый URL проекта.",
    "LIVE_DEV_SERVER_NOT_READY_MESSAGE": "Ошибка запуска HTTP сервера для Live Preview. Попытайтесь снова.",
    "LIVE_DEVELOPMENT_INFO_TITLE": "Добро пожаловать в Live Preview!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "Live Preview, функция синхронного предпросмотра, подключает браузер к среде разработки {APP_NAME}. Эта функция загружает HTML файл для предварительного просмотра в браузере и мгновенно отображает все изменения при редактировании кода.<br /><br />В данной версии {APP_NAME}, функция Live Preview пока что работает только с <strong>Google Chrome</strong> и обновления в реальном времени отображаются только при редактировании <strong>CSS или HTML файлов</strong>. Изменения в JavaScript файлах автоматически перезагружают страницу при сохранении.<br /><br />(Это сообщение будет показано только один раз.)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING": "Для дополнительной информации, смотрите <a href='{0}' title='{0}'>Поиск и устранение неисправностей ошибок подключения Live Preview</a>.",
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "Live Preview",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "Live Preview: Подключение…",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "Live Preview: Инициализация…",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "Отсоединить Live Preview",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "Live Preview (Для отображения изменений сохраните их)",
    "LIVE_DEV_STATUS_TIP_SYNC_ERROR": "Live Preview (Не обновляется из-за синтаксической ошибки)",
    "LIVE_DEV_DETACHED_REPLACED_WITH_DEVTOOLS": "Функция Live Preview была отключена при открытии инструментов разработки в браузере",
    "LIVE_DEV_DETACHED_TARGET_CLOSED": "Функция Live Preview была отключена при закрытии страницы в браузере",
    "LIVE_DEV_NAVIGATED_AWAY": "Функция Live Preview была отключена при переходе на страницу не принадлежащую проекту",
    "LIVE_DEV_CLOSED_UNKNOWN_REASON": "Функция Live Preview была отменена по неизвестной причине ({0})",
    "SAVE_CLOSE_TITLE": "Сохранить изменения",
    "SAVE_CLOSE_MESSAGE": "Вы хотите сохранить изменения, которые вы сделали в документе <span class='dialog-filename'>{0}</span>?",
    "SAVE_CLOSE_MULTI_MESSAGE": "Вы хотите сохранить изменения для следующих файлов?",
    "EXT_MODIFIED_TITLE": "Внешние изменения",
    "CONFIRM_DELETE_TITLE": "Подтвердить удаление",
    "CONFIRM_FOLDER_DELETE": "Вы действительно хотите удалить папку <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Файл удалён",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> изменён на диске вне {APP_NAME}.<br /><br />Вы хотите сохранить файл и перезаписать эти изменения?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> изменён на диске вне {APP_NAME}, но у вас есть несохранённые изменения в {APP_NAME}.<br /><br />Какую версию вы хотите оставить?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> был удалён на диске вне {APP_NAME}, но у вас есть несохранённые изменения в {APP_NAME}.<br /><br />Хотите ли вы сохранить ваши изменения?",
    "DONE": "Готово",
    "OK": "ОК",
    "CANCEL": "Отмена",
    "DONT_SAVE": "Не сохранять",
    "SAVE": "Сохранить",
    "SAVE_AS": "Сохранить как…",
    "SAVE_AND_OVERWRITE": "Перезаписать",
    "DELETE": "Удалить",
    "BUTTON_YES": "Да",
    "BUTTON_NO": "Нет",
    "FIND_NO_RESULTS": "Не найдено",
    "FIND_QUERY_PLACEHOLDER": "Найти…",
    "REPLACE_PLACEHOLDER": "Заменить на…",
    "BUTTON_REPLACE_ALL": "Все…",
    "BUTTON_REPLACE": "Заменить",
    "BUTTON_NEXT": "▶",
    "BUTTON_PREV": "◀",
    "BUTTON_NEXT_HINT": "Следующее совпадение",
    "BUTTON_PREV_HINT": "Предыдущее совпадение",
    "BUTTON_CASESENSITIVE_HINT": "С учетом регистра",
    "BUTTON_REGEXP_HINT": "Регулярное выражение",
    "REPLACE_WITHOUT_UNDO_WARNING_TITLE": "Заменить без отмены",
    "REPLACE_WITHOUT_UNDO_WARNING": "Т.к. необходимо изменить более чем {0} файла(ов), {APP_NAME} выполнит замену непосредственно на диске.<br />Вы не сможете отменить изменения в этих файлах.",
    "BUTTON_REPLACE_WITHOUT_UNDO": "Заменить без отмены",
    "OPEN_FILE": "Открыть файл",
    "SAVE_FILE_AS": "Сохранить файл",
    "CHOOSE_FOLDER": "Выбрать директорию",
    "RELEASE_NOTES": "Примечания к выпуску",
    "NO_UPDATE_TITLE": "Обновления отсутствуют",
    "NO_UPDATE_MESSAGE": "Вы используете последнюю версию {APP_NAME}.",
    "FIND_REPLACE_TITLE_LABEL": "Заменить",
    "FIND_REPLACE_TITLE_WITH": "на",
    "FIND_TITLE_LABEL": "Найдено",
    "FIND_TITLE_SUMMARY": "&mdash; {0} {1} {2} в {3}",
    "FIND_NUM_FILES": "{0} {1}",
    "FIND_IN_FILES_SCOPED": "в <span class='dialog-filename'>{0}</span>",
    "FIND_IN_FILES_NO_SCOPE": "в проекте",
    "FIND_IN_FILES_ZERO_FILES": "Фильтр исключает все файлы {0}",
    "FIND_IN_FILES_FILE": "файле",
    "FIND_IN_FILES_FILES": "файлах",
    "FIND_IN_FILES_MATCH": "совпадение",
    "FIND_IN_FILES_MATCHES": "совпадений",
    "FIND_IN_FILES_MORE_THAN": "Более ",
    "FIND_IN_FILES_PAGING": "{0}&mdash;{1}",
    "FIND_IN_FILES_FILE_PATH": "<span class='dialog-filename'>{0}</span> {2} <span class='dialog-path'>{1}</span>",
    "FIND_IN_FILES_EXPAND_COLLAPSE": "Ctrl/Cmd-клик чтобы развернуть/свернуть все",
    "REPLACE_IN_FILES_ERRORS_TITLE": "Ошибка замены",
    "REPLACE_IN_FILES_ERRORS": "Данные файлы не были изменены, т.к. они изменились после поиска или не могут быть записаны.",
    "ERROR_FETCHING_UPDATE_INFO_TITLE": "Ошибка при получении информации об обновлениях",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "Ошибка при получении информации о последних обновлениях с сервера. Пожалуйста, убедитесь, что вы подключены к интернету и попробуйте снова. ",
    "NEW_FILE_FILTER": "Новый фильтр…",
    "CLEAR_FILE_FILTER": "Не исключать файлы",
    "NO_FILE_FILTER": "Нет исключенных файлов",
    "EXCLUDE_FILE_FILTER": "Исключить {0}",
    "EDIT_FILE_FILTER": "Редактировать…",
    "FILE_FILTER_DIALOG": "Редактировать фильтр",
    "FILE_FILTER_INSTRUCTIONS": "Исключить файлы и директории содержащие любую из перечисленных строк, возможно использование <a href='{0}' title='{0}'>групповых символов</a>. Указывайте по одной строке на линию.",
    "FILTER_NAME_PLACEHOLDER": "Назвать этот фильтр (опционально)",
    "FILE_FILTER_CLIPPED_SUFFIX": "и еще {0}",
    "FILTER_COUNTING_FILES": "Подсчет количества файлов…",
    "FILTER_FILE_COUNT": "Фильтр оставляет {0} из {1} файлов/а {2}",
    "FILTER_FILE_COUNT_ALL": "Фильтр оставляет все {0} файлов/а {1}",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Быстрое редактирование для текущей позиции курсора отсутствует",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Быстрое редактирование CSS: поместите курсор на имя одного класса",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Быстрое редактирование CSS: неполный атрибут класса",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Быстрое редактирование CSS: неполный атрибут идентификатора",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Быстрое редактирование CSS: поместите курсор в тег, класс или идентификатор",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Временная функция быстрого редактирования CSS: недопустимый синтаксис",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Быстрое редактирование JS: поместите курсор в имя функции",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Быстрые документы для текущей позиции курсора отсутствуют",
    "PROJECT_LOADING": "Загрузка…",
    "UNTITLED": "Без названия",
    "WORKING_FILES": "Рабочие файлы",
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "Space",
    "STATUSBAR_CURSOR_POSITION": "Строка {0}, Столбец {1}",
    "STATUSBAR_SELECTION_CH_SINGULAR": " — Выделен {0} столбец",
    "STATUSBAR_SELECTION_CH_PLURAL": " — Выделено {0} столбцов",
    "STATUSBAR_SELECTION_LINE_SINGULAR": " — Выделена {0} строка",
    "STATUSBAR_SELECTION_LINE_PLURAL": " — Выделено {0} строк",
    "STATUSBAR_SELECTION_MULTIPLE": " — {0} выбранных элементов",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "Нажмите чтобы использовать пробелы для отступа",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "Нажмите чтобы использовать табуляцию для отступа",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "Нажмите чтобы изменить количества пробелов для отступа",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "Нажмите чтобы изменить ширину табуляции в столбцах",
    "STATUSBAR_SPACES": "Пробелы:",
    "STATUSBAR_TAB_SIZE": "Табуляция:",
    "STATUSBAR_LINE_COUNT_SINGULAR": "— {0} строка",
    "STATUSBAR_LINE_COUNT_PLURAL": "— {0} строк",
    "STATUSBAR_USER_EXTENSIONS_DISABLED": "Расширения отключены",
    "STATUSBAR_INSERT": "ВСТ",
    "STATUSBAR_OVERWRITE": "ЗАМ",
    "ERRORS_PANEL_TITLE_MULTIPLE": "{0} ошибок",
    "SINGLE_ERROR": "1 ошибка {0}",
    "MULTIPLE_ERRORS": "{1} ошибок {0}",
    "NO_ERRORS": "{0} не нашел ошибок &mdash; отлично!",
    "NO_ERRORS_MULTIPLE_PROVIDER": "Ошибок не найдено &mdash; отлично!",
    "LINT_DISABLED": "Статический анализ отключен",
    "NO_LINT_AVAILABLE": "Нет статического анализатора для {0}",
    "NOTHING_TO_LINT": "Не подлежит статическому анализу",
    "LINTER_TIMED_OUT": "{0} превысил время ожидания {1} мс",
    "LINTER_FAILED": "{0} завершил исполнение с ошибкой: {1}",
    "FILE_MENU": "Файл",
    "CMD_FILE_NEW_UNTITLED": "Новый",
    "CMD_FILE_NEW": "Новый файл",
    "CMD_FILE_NEW_FOLDER": "Новая папка",
    "CMD_FILE_OPEN": "Открыть…",
    "CMD_ADD_TO_WORKING_SET": "Добавить в рабочий набор",
    "CMD_OPEN_DROPPED_FILES": "Открыть перетащенные файлы",
    "CMD_OPEN_FOLDER": "Открыть директорию…",
    "CMD_FILE_CLOSE": "Закрыть",
    "CMD_FILE_CLOSE_ALL": "Закрыть все",
    "CMD_FILE_CLOSE_LIST": "Закрыть список",
    "CMD_FILE_CLOSE_OTHERS": "Закрыть остальные",
    "CMD_FILE_CLOSE_ABOVE": "Закрыть остальные сверху",
    "CMD_FILE_CLOSE_BELOW": "Закрыть остальные снизу",
    "CMD_FILE_SAVE": "Сохранить",
    "CMD_FILE_SAVE_ALL": "Сохранить все",
    "CMD_FILE_SAVE_AS": "Сохранить как…",
    "CMD_LIVE_FILE_PREVIEW": "Live Preview",
    "CMD_PROJECT_SETTINGS": "Настройки проекта…",
    "CMD_FILE_RENAME": "Переименовать",
    "CMD_FILE_DELETE": "Удалить",
    "CMD_INSTALL_EXTENSION": "Установить расширение…",
    "CMD_EXTENSION_MANAGER": "Менеджер расширений…",
    "CMD_FILE_REFRESH": "Обновить дерево проекта",
    "CMD_QUIT": "Выход",
    "CMD_EXIT": "Выход",
    "EDIT_MENU": "Правка",
    "CMD_UNDO": "Отменить",
    "CMD_REDO": "Повторить",
    "CMD_CUT": "Вырезать",
    "CMD_COPY": "Копировать",
    "CMD_PASTE": "Вставить",
    "CMD_SELECT_ALL": "Выделить всё",
    "CMD_SELECT_LINE": "Выделить строку",
    "CMD_SPLIT_SEL_INTO_LINES": "Разбить выделенное на линии",
    "CMD_ADD_CUR_TO_NEXT_LINE": "Добавить курсор к следующей линии",
    "CMD_ADD_CUR_TO_PREV_LINE": "Добавить курсор к предыдущей линии",
    "CMD_INDENT": "Сделать отступ",
    "CMD_UNINDENT": "Убрать отступ",
    "CMD_DUPLICATE": "Дублировать",
    "CMD_DELETE_LINES": "Удалить строку",
    "CMD_COMMENT": "Вкл./выкл. строчный комментарий",
    "CMD_BLOCK_COMMENT": "Вкл./выкл. блочный комментарий",
    "CMD_LINE_UP": "Переместить строку вверх",
    "CMD_LINE_DOWN": "Переместить строку вниз",
    "CMD_OPEN_LINE_ABOVE": "Открыть строку сверху",
    "CMD_OPEN_LINE_BELOW": "Открыть строку снизу",
    "CMD_TOGGLE_CLOSE_BRACKETS": "Автоматически закрывать скобки",
    "CMD_SHOW_CODE_HINTS": "Показывать подсказки в коде",
    "FIND_MENU": "Поиск",
    "CMD_FIND": "Найти",
    "CMD_FIND_NEXT": "Найти след.",
    "CMD_FIND_PREVIOUS": "Найти пред.",
    "CMD_FIND_ALL_AND_SELECT": "Найти все и выделить",
    "CMD_ADD_NEXT_MATCH": "Добавить следущее найденное к выделению",
    "CMD_SKIP_CURRENT_MATCH": "Пропустить и добавить следующее найденное",
    "CMD_FIND_IN_FILES": "Найти в файлах",
    "CMD_FIND_IN_SUBTREE": "Найти в…",
    "CMD_REPLACE": "Заменить",
    "CMD_REPLACE_IN_FILES": "Заменить в файлах",
    "CMD_REPLACE_IN_SUBTREE": "Заменить в…",
    "VIEW_MENU": "Вид",
    "CMD_HIDE_SIDEBAR": "Скрыть боковую панель",
    "CMD_SHOW_SIDEBAR": "Показать боковую панель",
    "CMD_INCREASE_FONT_SIZE": "Увеличить размер шрифта",
    "CMD_DECREASE_FONT_SIZE": "Уменьшить размер шрифта",
    "CMD_RESTORE_FONT_SIZE": "Восстановить размер шрифта",
    "CMD_SCROLL_LINE_UP": "Прокрутить на строку вверх",
    "CMD_SCROLL_LINE_DOWN": "Прокрутить на строку вниз",
    "CMD_TOGGLE_LINE_NUMBERS": "Номера строк",
    "CMD_TOGGLE_ACTIVE_LINE": "Подсвечивать активную строку",
    "CMD_TOGGLE_WORD_WRAP": "Заворачивать строки",
    "CMD_LIVE_HIGHLIGHT": "Подсвечивать в Live Preview",
    "CMD_VIEW_TOGGLE_INSPECTION": "Анализировать при сохранении",
    "CMD_WORKINGSET_SORT_BY_ADDED": "Сортировать по порядку добавления",
    "CMD_WORKINGSET_SORT_BY_NAME": "Сортировать по имени",
    "CMD_WORKINGSET_SORT_BY_TYPE": "Сортировать по типу",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "Автоматическая сортировка",
    "NAVIGATE_MENU": "Навигация",
    "CMD_QUICK_OPEN": "Быстрое открытие",
    "CMD_GOTO_LINE": "Перейти к строке",
    "CMD_GOTO_DEFINITION": "Быстрый поиск определения",
    "CMD_GOTO_FIRST_PROBLEM": "Перейти к первой ошибке/предупреждению",
    "CMD_TOGGLE_QUICK_EDIT": "Быстрое редактирование",
    "CMD_TOGGLE_QUICK_DOCS": "Быстрые документы",
    "CMD_QUICK_EDIT_PREV_MATCH": "Предыдущее совпадение",
    "CMD_QUICK_EDIT_NEXT_MATCH": "Следующее совпадение",
    "CMD_CSS_QUICK_EDIT_NEW_RULE": "Новое правило",
    "CMD_NEXT_DOC": "Следующий документ",
    "CMD_PREV_DOC": "Предыдущий документ",
    "CMD_SHOW_IN_TREE": "Показать в дереве проекта",
    "CMD_SHOW_IN_EXPLORER": "Показать в Проводнике",
    "CMD_SHOW_IN_FINDER": "Показать в Finder",
    "CMD_SHOW_IN_OS": "Показать в операционной системе",
    "HELP_MENU": "Помощь",
    "CMD_CHECK_FOR_UPDATE": "Проверить наличие обновлений",
    "CMD_HOW_TO_USE_BRACKETS": "Как использовать {APP_NAME}",
    "CMD_SUPPORT": "Поддержка {APP_NAME}",
    "CMD_SUGGEST": "Предложить улучшение",
    "CMD_RELEASE_NOTES": "Примечания к выпуску",
    "CMD_GET_INVOLVED": "Принять участие в проекте",
    "CMD_SHOW_EXTENSIONS_FOLDER": "Показать директорию расширений",
    "CMD_HOMEPAGE": "Домашняя страница {APP_TITLE}",
    "CMD_TWITTER": "{TWITTER_NAME} в Twitter",
    "CMD_ABOUT": "О {APP_TITLE}",
    "CMD_OPEN_PREFERENCES": "Открыть файл настроек",
    "EXPERIMENTAL_BUILD": "Экспериментальная сборка",
    "DEVELOPMENT_BUILD": "Сборка для разработчиков",
    "RELOAD_FROM_DISK": "Перезагрузить с диска",
    "KEEP_CHANGES_IN_EDITOR": "Оставить изменения в редакторе",
    "CLOSE_DONT_SAVE": "Закрыть (Не сохранять)",
    "RELAUNCH_CHROME": "Перезапустить Chrome",
    "ABOUT": "О программе",
    "CLOSE": "Закрыть",
    "ABOUT_TEXT_LINE1": "sprint {VERSION_MINOR} {BUILD_TYPE} {VERSION}",
    "ABOUT_TEXT_LINE3": "Внимание, правила и условия, относящиеся к стороннему программному обеспечению находятся на <a href='{ADOBE_THIRD_PARTY}'>{ADOBE_THIRD_PARTY}</a> и включены здесь в качестве ссылки.",
    "ABOUT_TEXT_LINE4": "Документация и исходный код находятся на <a href='https://github.com/adobe/brackets/'>https://github.com/adobe/brackets/</a>",
    "ABOUT_TEXT_LINE5": "Сделано с ❤ и на JavaScript:",
    "ABOUT_TEXT_LINE6": "Длинный список инженеров, но, к сожалению, в данный момент мы не можем его показать.",
    "ABOUT_TEXT_WEB_PLATFORM_DOCS": "Web Platform Docs and the Web Platform graphical logo are licensed under a Creative Commons Attribution license, <a href='{WEB_PLATFORM_DOCS_LICENSE}'>CC-BY 3.0 Unported</a>.",
    "UPDATE_NOTIFICATION_TOOLTIP": "Новая сборка {APP_NAME} доступна! Нажмите здесь для подробностей.",
    "UPDATE_AVAILABLE_TITLE": "Доступно обновление",
    "UPDATE_MESSAGE": "Эй, новая версия {APP_NAME} доступна. Вот некоторые из новых функций:",
    "GET_IT_NOW": "Установить немедленно!",
    "PROJECT_SETTINGS_TITLE": "Настройки проекта для: {0}",
    "PROJECT_SETTING_BASE_URL": "Базовый URL для Live Preview",
    "PROJECT_SETTING_BASE_URL_HINT": "(оставьте пустым для просмотра локальных файлов)",
    "BASEURL_ERROR_INVALID_PROTOCOL": "Протокол {0} не поддерживается Live Preview &mdash; пожалуйста, используйте http: или https: .",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "Базовый URL не может содержать такие параметры поиска как &quot;{0}&quot;.",
    "BASEURL_ERROR_HASH_DISALLOWED": "Базовый URL не может содержать такие хеши как &quot;{0}&quot;.",
    "BASEURL_ERROR_INVALID_CHAR": "Специальные символы как '{0}' должны быть %-экранированы.",
    "BASEURL_ERROR_UNKNOWN_ERROR": "Неизвестная ошибка при синтаксическом разборе основного URL",
    "BUTTON_NEW_RULE": "Новое правило",
    "INSTALL": "Установить",
    "UPDATE": "Обновить",
    "REMOVE": "Удалить",
    "OVERWRITE": "Переустановить",
    "CANT_REMOVE_DEV": "Расширения, установленные в директории &quot;dev&quot;, должны удаляться вручную.",
    "CANT_UPDATE": "Это обновление не совместимо с данной версией {APP_NAME}.",
    "CANT_UPDATE_DEV": "Расширения, установленные в директории &quot;dev&quot;, не могут быть автоматически обновлены.",
    "INSTALL_EXTENSION_TITLE": "Установка расширения",
    "UPDATE_EXTENSION_TITLE": "Обновление расширения",
    "INSTALL_EXTENSION_LABEL": "URL расширения",
    "INSTALL_EXTENSION_HINT": "URL zip-файла расширения или репозитория GitHub",
    "INSTALLING_FROM": "Установка расширения с {0}…",
    "INSTALL_SUCCEEDED": "Установка завершена успешно!",
    "INSTALL_FAILED": "Не удалось установить.",
    "CANCELING_INSTALL": "Отмена…",
    "CANCELING_HUNG": "Отмена установки занимает продолжительное время. Возможно по причине внутренней ошибки.",
    "INSTALL_CANCELED": "Установка отменена.",
    "INVALID_ZIP_FILE": "Скачанный файл не является zip-файлом.",
    "INVALID_PACKAGE_JSON": "Файл package.json некорректен (ошибка: {0}).",
    "MISSING_PACKAGE_NAME": "Файл package.json не содержит имени пакета.",
    "BAD_PACKAGE_NAME": "{0} не является корректным именем пакета.",
    "MISSING_PACKAGE_VERSION": "Файл package.json не содержит версии пакета.",
    "INVALID_VERSION_NUMBER": "Версия пакета ({0}) некорректна.",
    "INVALID_BRACKETS_VERSION": "Строка совместимости с {APP_NAME} ({0}) некорректна.",
    "DISALLOWED_WORDS": "Слова ({1}) недопустимы в поле {0}.",
    "API_NOT_COMPATIBLE": "Расширение несовместимо с данной версией {APP_NAME}. Расширение установлено в директории disabled.",
    "MISSING_MAIN": "Пакет не содержит файл main.js.",
    "EXTENSION_ALREADY_INSTALLED": "Установка данного пакета перезапишет установленное расширение. Перезаписать существующее расширение?",
    "EXTENSION_SAME_VERSION": "Версия данного пакета совпадает с версией установленного расширения. Перезаписать существующее расширение?",
    "EXTENSION_OLDER_VERSION": "Версия данного пакета ({0}) старее версии уставновленного расширения ({1}). Перезаписать существующее расширение?",
    "DOWNLOAD_ID_IN_USE": "Внутренняя ошибка: идентификатор закачки уже используется.",
    "NO_SERVER_RESPONSE": "Невозможно присоединиться к серверу.",
    "BAD_HTTP_STATUS": "Файл не найден на сервере (HTTP {0}).",
    "CANNOT_WRITE_TEMP": "Невозможно сохранить закачку во временный файл.",
    "ERROR_LOADING": "Ошибка при запуске расширения.",
    "MALFORMED_URL": "Некорректный URL. Пожалуйста, убедитесь в его правильности.",
    "UNSUPPORTED_PROTOCOL": "URL должен использовать протокол http or https.",
    "UNKNOWN_ERROR": "Неизвестная внутренняя ошибка.",
    "EXTENSION_MANAGER_TITLE": "Менеджер расширений",
    "EXTENSION_MANAGER_ERROR_LOAD": "Невозможно подсоединиться к каталогу расширений. Пожалуйста, попытайтесь еще раз.",
    "INSTALL_FROM_URL": "Установить с URL…",
    "EXTENSION_AUTHOR": "Автор",
    "EXTENSION_DATE": "Дата",
    "EXTENSION_INCOMPATIBLE_NEWER": "Это расширение требует новой версии {APP_NAME}.",
    "EXTENSION_INCOMPATIBLE_OLDER": "Это расширение работает только с предыдущими версиями {APP_NAME}.",
    "EXTENSION_LATEST_INCOMPATIBLE_NEWER": "Версия {0} данного расширения требует новой версии {APP_NAME}. Вы можете установить предыдущую версию расширения{1}.",
    "EXTENSION_LATEST_INCOMPATIBLE_OLDER": "Версия {0} данного расширения требует предыдущей версии {APP_NAME}. Вы можете установить предыдущую версию {1}.",
    "EXTENSION_NO_DESCRIPTION": "Описание отсутвует",
    "EXTENSION_MORE_INFO": "Подробнее…",
    "EXTENSION_ERROR": "Ошибка расширения",
    "EXTENSION_KEYWORDS": "Ключевые слова",
    "EXTENSION_INSTALLED": "Установлено",
    "EXTENSION_UPDATE_INSTALLED": "Данное расширение было скачано и будет установлено после перегрузки {APP_NAME}.",
    "EXTENSION_SEARCH_PLACEHOLDER": "Поиск",
    "EXTENSION_MORE_INFO_LINK": "Подробнее",
    "BROWSE_EXTENSIONS": "Просмотреть расширения",
    "EXTENSION_MANAGER_REMOVE": "Удалить расширение",
    "EXTENSION_MANAGER_REMOVE_ERROR": "Невозможно удалить одно или более расширений: {0}. {APP_NAME} продолжит перезагрузку.",
    "EXTENSION_MANAGER_UPDATE": "Обновить расширение",
    "EXTENSION_MANAGER_UPDATE_ERROR": "Невозможно обновить одно или более расширений: {0}. {APP_NAME} продолжит перезагрузку.",
    "MARKED_FOR_REMOVAL": "Отмечено для удаления",
    "UNDO_REMOVE": "Не удалять",
    "MARKED_FOR_UPDATE": "Отмечено для обновления",
    "UNDO_UPDATE": "Не обновлять",
    "CHANGE_AND_RELOAD_TITLE": "Изменить расширения",
    "CHANGE_AND_RELOAD_MESSAGE": "Для обновления или удаления расширений, {APP_NAME} будет перезагружен. Вам будет предложено сохранить несохраненные изменения.",
    "REMOVE_AND_RELOAD": "Удалить расширения и перегрузиться",
    "CHANGE_AND_RELOAD": "Изменить расширения и перегрузиться",
    "UPDATE_AND_RELOAD": "Обновить расширения и перегрузиться",
    "PROCESSING_EXTENSIONS": "Обработка изменений в расширениях…",
    "EXTENSION_NOT_INSTALLED": "Невозможно удалить расширение {0}, оно не было установлено.",
    "NO_EXTENSIONS": "Нет установленных расширений.<br>Перейдите на закладку Доступные чтобы начать работу с расширениями.",
    "NO_EXTENSION_MATCHES": "Не найдено расширений по критерию поиска.",
    "REGISTRY_SANITY_CHECK_WARNING": "Будьте осторожны при установке расширений из неизвестных источников.",
    "EXTENSIONS_INSTALLED_TITLE": "Установленные",
    "EXTENSIONS_AVAILABLE_TITLE": "Доступные",
    "EXTENSIONS_UPDATES_TITLE": "Обновления",
    "INLINE_EDITOR_NO_MATCHES": "Совпадений не найдено.",
    "CSS_QUICK_EDIT_NO_MATCHES": "Существующих правил CSS соответвующих выделенному тексту не определено. <br> Выберите &quot;Новое правило&quot; чтобы создать новое.",
    "CSS_QUICK_EDIT_NO_STYLESHEETS": "Ваш проект не содержит таблиц стилей (stylesheets).<br>Создайте его чтобы добавить правила CSS.",
    "IMAGE_VIEWER_LARGEST_ICON": "наибольший размер",
    "UNIT_PIXELS": "пикселей",
    "DEBUG_MENU": "Отладка",
    "ERRORS": "Ошибки",
    "CMD_SHOW_DEV_TOOLS": "Показать инструменты разработчика",
    "CMD_REFRESH_WINDOW": "Перезагрузить с расширениями",
    "CMD_RELOAD_WITHOUT_USER_EXTS": "Перезагрузить без расширений",
    "CMD_NEW_BRACKETS_WINDOW": "Новое окно {APP_NAME}",
    "CMD_SWITCH_LANGUAGE": "Переключить язык",
    "CMD_RUN_UNIT_TESTS": "Запустить тесты",
    "CMD_SHOW_PERF_DATA": "Показать данные о производительности",
    "CMD_ENABLE_NODE_DEBUGGER": "Включить отладчик node",
    "CMD_LOG_NODE_STATE": "Отображать состояние node в консоли",
    "CMD_RESTART_NODE": "Перезапустить node",
    "CMD_SHOW_ERRORS_IN_STATUS_BAR": "Показывать ошибки в строке состояния",
    "LANGUAGE_TITLE": "Изменить язык",
    "LANGUAGE_MESSAGE": "Пожалуйста, выберите желаемый язык из списка ниже:",
    "LANGUAGE_SUBMIT": "Перезагрузить {APP_NAME}",
    "LANGUAGE_CANCEL": "Отмена",
    "LANGUAGE_SYSTEM_DEFAULT": "По умолчанию",
    "INLINE_TIMING_EDITOR_TIME": "Время",
    "INLINE_TIMING_EDITOR_PROGRESSION": "Прогресс",
    "BEZIER_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> Передвинуть выделенную точку<br><kbd class='text'>Shift</kbd> Передвинуться на десять единиц<br><kbd class='text'>Tab</kbd> Переключиться между точками",
    "STEPS_EDITOR_INFO": "<kbd>↑</kbd><kbd>↓</kbd> Увеличить или уменьшить шаги<br><kbd>←</kbd><kbd>→</kbd> 'Начало' или 'Конец'",
    "INLINE_TIMING_EDITOR_INVALID": "Старое значение <code>{0}</code> некорректно, отображаемая функция была заменена на <code>{1}</code>. Документ будет обновлен с первой правкой.",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Текущий цвет",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Исходный цвет",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa формат",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex формат",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa формат",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Использован {1} раз)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Использован {1} раз(а))",
    "CMD_JUMPTO_DEFINITION": "Перейти к определению",
    "CMD_SHOW_PARAMETER_HINT": "Показать подсказку для параметра",
    "NO_ARGUMENTS": "<без параметров>",
    "JSLINT_NAME": "JSLint",
    "CMD_ENABLE_QUICK_VIEW": "Быстрый просмотр при наведении",
    "CMD_TOGGLE_RECENT_PROJECTS": "Предыдущие проекты",
    "DOCS_MORE_LINK": "Подробнее",
    "COLLAPSE_ALL": "Свернуть все",
    "EXPAND_ALL": "Развернуть все",
    "COLLAPSE_CURRENT": "Свернуть текущий",
    "EXPAND_CURRENT": "Развернуть текущий",
    "EXCEEDS_MAX_FILE_SIZE": "Файлы больше {0} МБ нельзя открывать в {APP_NAME}.",
    "FILE_TITLE": "Файл",
    "DIRECTORY_TITLE": "Каталог",
    "ERROR_OUT_OF_SPACE_TITLE": "Достигнут предел размера проекта",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Общий размер файлов в вашем проекте превысил максимально допустимый. Вы не сможете добавлять новые файлы, пока вы не удалите некоторые из существующих файлов, чтобы освободить место.",
    "FILE_EXISTS_HEADER": "Файл уже существует.",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Ошибка при переименовании директории",
    "ERROR_RENAMING_DIRECTORY": "Произошла ошибка при попытке переименования директории <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY_TITLE": "Ошибка при удалении директории",
    "ERROR_DELETING_DIRECTORY": "Произошла ошибка при попытке удаления директории <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_DIRNAME_TITLE": "Некорректное имя директории",
    "INVALID_DIRNAME_MESSAGE": "Имена каталогов не могут использовать любые зарезервированные системой слова, оканчиваться на точки (.) или использовать любые из следующих символов: <code class='emphasized'>{1}</code>",
    "ERROR_CREATING_DIRECTORY_TITLE": "Ошибка при создании директории",
    "ERROR_CREATING_DIRECTORY": "Произошла ошибка при попытке создания директории <span class='dialog-filename'>{1}</span>. {2}",
    "CONFIRM_FOLDER_DELETE_TITLE": "Подтвердить удаление",
    "CONFIRM_FILE_DELETE": "Вы действительно хотите удалить <span class='dialog-filename'>{0}</span>?",
    "USE_IMPORTED": "Использовать новый файл",
    "KEEP_EXISTING": "Сохранить существующий файл",
    "CMD_FILE_DOWNLOAD": "Загрузить",
    "DND_MAX_SIZE_EXCEEDED": "размер файла превышает максимально допустимый: {0} МБ.",
    "DND_UNSUPPORTED_FILE_TYPE": "неподдерживаемый тип файла",
    "DND_ERROR_UNZIP": "не удалось распаковать zip-файл",
    "DND_ERROR_UNTAR": "не удалось распаковать tar-файл",
    "DND_SUCCESS_UNZIP_TITLE": "Распаковка zip-файла завершена успешно",
    "DND_SUCCESS_UNTAR_TITLE": "Распаковка tar-файла завершена успешно",
    "DND_FILE_REPLACE": "Файл с именем <span class='dialog-filename'>{0}</span> уже существует. Вы хотите использовать новый файл или сохранить существующий?",
    "IMAGE_FILE_TITLE": "Файл изображения",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} пикселей",
    "IMAGE_ALT_TEXT": "Описание изображения",
    "IMAGE_FILTERS_TITLE": "Фильтр изображений",
    "IMAGE_FILTER_PINHOLE": "Точечный источник",
    "IMAGE_FILTER_SEPIA": "Сепия",
    "IMAGE_FILTER_CONTRAST": "Контраст",
    "IMAGE_FILTER_VINTAGE": "Винтаж",
    "IMAGE_FILTER_SUNRISE": "Рассвет",
    "IMAGE_FILTER_EMBOSS": "Рельеф",
    "IMAGE_FILTER_GLOWING_SUN": "Светящееся солнце",
    "IMAGE_SAVE_WITH_FILTERS": "Применить",
    "IMAGE_RESET_FILTERS": "Отмена",
    "FONT_FILE": "Файл шрифта",
    "USE_FONT_INSTRUCTIONS": "Чтобы использовать этот шрифт, скопируйте и вставьте этот код в свой CSS-файл.",
    "FONT_TYPE_BOLD": "Полужирный",
    "FONT_TYPE_ITALIC": "Курсив",
    "FONT_BOLD_HTML_TAG": "Поместите текст внутрь тега <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Добавьте CSS-правило <code>font-weight: bold;</code>.",
    "FONT_ITALIC_HTML_TAG": "Поместите текст внутрь тега <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Добавьте CSS-правило <code>font-style: italic;</code>.",
    "VIDEO_FILE": "Видеофайл",
    "VIDEO_OPTIONS": "Параметры видео",
    "VIDEO_CODE_SAMPLE": "Скопируйте и вставьте этот код, чтобы добавить это видео на HTML-страницу",
    "VIDEO_OPTION_SHOW_CONTROLS": "Показать пульт управления видео",
    "VIDEO_OPTION_AUTOPLAY": "Начинать автоматическое воспроизведение видео",
    "VIDEO_OPTION_LOOPING": "Перезапускать видео после его завершения",
    "VIDEO_OPTION_DISABLE_AUDIO": "Отключить звук",
    "AUDIO_FILE": "Аудиофайл",
    "AUDIO_OPTIONS": "Параметры аудио",
    "AUDIO_OPTION_SHOW_CONTROLS": "Показывать элементы управления аудио (когда отключенный аудиоплеер невидим)",
    "AUDIO_OPTION_AUTOPLAY": "Начинать автоматическое воспроизведение аудио",
    "AUDIO_OPTION_LOOPING": "Перезапускать аудио после его завершения",
    "AUDIO_OPTION_DISABLE_AUDIO": "Запускать проигрывание аудио без звука",
    "BINARY_FILE_TITLE": "Неподдерживаемый файл",
    "BINARY_FILE_CANNOT_EDIT": "Thimble не умеет редактировать такие файлы!",
    "BINARY_FILE_OPTIONS_TITLE": "Но вы можете...",
    "BINARY_FILE_DOWNLOAD": "Загрузить его",
    "BINARY_FILE_OPEN": "Открыть его в новой вкладке",
    "BINARY_FILE_TRY_EDIT": "Попробовать отредактировать его",
    "PDF_FILE_TITLE": "PDF-файл",
    "INDIVIDUAL_CORNERS": "Отдельные углы",
    "ALL_CORNERS": "Все углы",
    "PIXEL_UNIT": "пиксели",
    "PERCENTAGE_UNIT": "проценты",
    "EM_UNIT": "em единицы шрифта",
    "ALL_SIDE": "Всех слайдов",
    "INDIVIDUAL_SIDES": "Отдельных слайдов",
    "SET_PADDING_FOR": "Установить отступ для",
    "SET_MARGIN_FOR": "Установить отступ для",
    "DETECTED_EXCLUSION_TITLE": "Проблема вывода файла JavaScript",
    "UPLOAD_FILES_DIALOG_HEADER": "Загрузите файлы",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...или перетащите файлы сюда.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "Ок, выпускайте файлы!",
    "UPLOADING_INDICATOR": "Загрузка…",
    "BUTTON_FROM_YOUR_COMPUTER": "С вашего компьютера... ",
    "TAKE_A_SELFIE": "Сделать селфи...",
    "CMD_MOVE_FILE": "Переместить в...",
    "PROJECT_ROOT": "Корневая папка проекта",
    "PICK_A_FOLDER_TO_MOVE_TO": "Выбрать папку",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Ошибка при перемещении",
    "UNEXPECTED_ERROR_MOVING_FILE": "Произошла непредвиденная ошибка при попытке переместить {0} в {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Файл или папка с именем {0} уже существует в {1}. Переименуйте, чтобы продолжить.",
    "CONSOLE_TITLE": "Консоль",
    "CONSOLE_TOOLTIP": "Открыть консоль JavaScript",
    "CONSOLE_CLEAR": "Очистить",
    "CONSOLE_CLEAR_TOOLTIP": "Очистить консоль",
    "CONSOLE_CLOSE_TOOLTIP": "Закрыть консоль",
    "CONSOLE_EMPTY_STRING": "Пустая Строка",
    "CONSOLE_HELPTEXT": "Чтобы использовать консоль, добавьте <code>console.log(&quot;Привет, мир!&quot;);</code> в ваш JavaScript файл."
});
