export class EFile {

    static extensionType = (ext) => {
        const exts = {
            'word': ['doc'],
            'excel': ['excel'],
            'ppt': ['ppt'],
            'music': ['mp3'],
            'video': ['mp4'],
            'html': ['html'],
            'gif': ['gif'],
            'exe': ['exe'],
            'pdf': ['pdf'],
            'txt': ['txt'],
        }
        const list = Object.entries(exts).flatMap(([type, exts]) => {
            return exts.map(ext => { ext, type })
        })

        const extension = (ext || '').trim()
        const type = list.find(v => extension.indexOf(v.ext) === 0)

        return type || 'unknown'
    }
    type = 'unknown'
}