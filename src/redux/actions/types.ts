export enum AppActionTypes {
    APP_ADD_FOLDER = 'APP/ADD_FOLDER',
    APP_DEL_FOLDER = 'APP/DEL_FOLDER',
    APP_SELECT_FOLDER = 'APP/SELECT_FOLDER',
    APP_SELECT_NOTE = 'APP/SELECT_NOTE',
    APP_ALL_FOLDERS_RECIEVED = 'APP/ALL_FOLDER_RECIEVED',
    APP_GET_ALL_FOLDERS = 'APP/GET_ALL_FOLDERS',
}
export enum FolderActionTypes {
    FOLDER_ADD_NOTE = 'FOLDER/ADD_NOTE',
    FOLDER_DEL_NOTE = 'FOLDER/DEL_NOTE',
    FOLDER_ALL_NOTES_RECIEVED = 'FOLDER/ALL_NOTES_RECIEVED',
    FOLDER_GET_ALL_NOTES = 'FOLDER/GET_ALL_NOTES',
}

export enum NoteActionTypes {
    NOTE_UPDATE = 'NOTE/UPDATE',
    NOTE_GET = 'NOTE/GET',
    NOTE_RECIEVED = 'NOTE/RECIEVED',
}

export enum UserActionTypes {
    GET_USER = 'USER/GET',
    USER_RECIEVED = 'USER/RECIEVED',
}

export type Actions = AppActionTypes | FolderActionTypes | NoteActionTypes | UserActionTypes;
