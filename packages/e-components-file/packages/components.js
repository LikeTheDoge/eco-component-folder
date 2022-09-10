
import { EChoseLabel } from './EChoseLabel'
import { ECheckLabel } from './ECheckLabel'

import { EFileIcon } from './EFileIcon'
import { EIcon } from './EIcon'

import { ETreeItem } from './ETreeItem'

import { EUploadBtn } from './EUploadBtn'
import { EUploadArea } from './EUploadArea'

export default {
    install(vue) {
        [
            ECheckLabel, EChoseLabel,
            EFileIcon, EIcon,
            ETreeItem,
            EUploadBtn, EUploadArea,
        ].forEach(component => vue.use(component))
    }
}