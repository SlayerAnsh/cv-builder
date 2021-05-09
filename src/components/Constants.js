export const OBJECT_TYPES = {
    DOCUMENT: 'Document',
    PAGE: 'Page',
    VIEW: 'View',
    TEXT: 'Text',
    LINK: 'Link'
}

export const PROPERTIES = {
    NAME: 'name',
    TEXT: 'text',
    LINK: 'Link',
    STYLE: 'style',
    PARENT: 'parent',
    POS: 'pos',
    TYPE: 'type'
}

export const COPY_ENUM = {
    NONE: 1 << 0,
    BELOW: 1 << 1,
    INSIDE: 1 << 2
}


export const OBJECT_PROTOTYPE = {
    DOCUMENT: {
        [PROPERTIES.TYPE]: OBJECT_TYPES.DOCUMENT,
        [PROPERTIES.PARENT]: null,
        [PROPERTIES.STYLE]: {},
        [PROPERTIES.POS]: 1,
        [PROPERTIES.NAME]: OBJECT_TYPES.DOCUMENT
    },
    PAGE: {
        [PROPERTIES.TYPE]: OBJECT_TYPES.PAGE,
        [PROPERTIES.PARENT]: null,
        [PROPERTIES.STYLE]: {},
        [PROPERTIES.POS]: 1,
        [PROPERTIES.NAME]: OBJECT_TYPES.PAGE
    },
    VIEW: {
        [PROPERTIES.TYPE]: OBJECT_TYPES.VIEW,
        [PROPERTIES.PARENT]: null,
        [PROPERTIES.STYLE]: {},
        [PROPERTIES.POS]: 1,
        [PROPERTIES.NAME]: OBJECT_TYPES.VIEW
    },
    TEXT: {
        [PROPERTIES.TYPE]: OBJECT_TYPES.TEXT,
        [PROPERTIES.PARENT]: null,
        [PROPERTIES.STYLE]: {},
        [PROPERTIES.POS]: 1,
        [PROPERTIES.NAME]: OBJECT_TYPES.TEXT,
        [PROPERTIES.TEXT]: '',
        [PROPERTIES.LINK]: ''
    },
}

export const COPY_ALLOWED = {
    [OBJECT_TYPES.DOCUMENT]: {
        [OBJECT_TYPES.DOCUMENT]: COPY_ENUM.BELOW,
        [OBJECT_TYPES.PAGE]: COPY_ENUM.INSIDE,
        [OBJECT_TYPES.VIEW]: COPY_ENUM.NONE,
        [OBJECT_TYPES.TEXT]: COPY_ENUM.NONE
    },
    [OBJECT_TYPES.PAGE]: {
        [OBJECT_TYPES.DOCUMENT]: COPY_ENUM.NONE,
        [OBJECT_TYPES.PAGE]: COPY_ENUM.BELOW,
        [OBJECT_TYPES.VIEW]: COPY_ENUM.INSIDE,
        [OBJECT_TYPES.TEXT]: COPY_ENUM.NONE
    },
    [OBJECT_TYPES.VIEW]: {
        [OBJECT_TYPES.DOCUMENT]: COPY_ENUM.NONE,
        [OBJECT_TYPES.PAGE]: COPY_ENUM.NONE,
        [OBJECT_TYPES.VIEW]: COPY_ENUM.INSIDE | COPY_ENUM.BELOW,
        [OBJECT_TYPES.TEXT]: COPY_ENUM.INSIDE
    },
    [OBJECT_TYPES.TEXT]: {
        [OBJECT_TYPES.DOCUMENT]: COPY_ENUM.NONE,
        [OBJECT_TYPES.PAGE]: COPY_ENUM.NONE,
        [OBJECT_TYPES.VIEW]: COPY_ENUM.NONE,
        [OBJECT_TYPES.TEXT]: COPY_ENUM.BELOW
    }
}

export const PROPERTIES_ALLOWED = {
    NAME: {
        [OBJECT_TYPES.DOCUMENT]: true,
        [OBJECT_TYPES.PAGE]: true,
        [OBJECT_TYPES.VIEW]: true,
        [OBJECT_TYPES.TEXT]: true
    },
    TEXT: {
        [OBJECT_TYPES.DOCUMENT]: false,
        [OBJECT_TYPES.PAGE]: false,
        [OBJECT_TYPES.VIEW]: false,
        [OBJECT_TYPES.TEXT]: true
    },
    LINK: {
        [OBJECT_TYPES.DOCUMENT]: false,
        [OBJECT_TYPES.PAGE]: false,
        [OBJECT_TYPES.VIEW]: false,
        [OBJECT_TYPES.TEXT]: true
    },
}

export const STYLE_PROPERTIES = {
    display:{
        [OBJECT_TYPES.DOCUMENT]:false,
        [OBJECT_TYPES.PAGE]:true,
        [OBJECT_TYPES.VIEW]: true,
        [OBJECT_TYPES.TEXT]: true
    }
}
