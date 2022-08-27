export const addInstall = (name, component) => {
    if (!name) throw new Error('component need name!!!')
    return Object.assign(component, {
        install(Vue) {
            Vue.component(name, component)
        }
    })
}