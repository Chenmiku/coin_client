export function saveItem(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value))
}
export function getItem(key:string) {
    return JSON.parse(localStorage.getItem(key))
}
export function removeSession() {
    localStorage.clear()
}
export function setSession(key:string, value:any) {
    sessionStorage.setItem(key, JSON.stringify(value))
}
export function getSession(key:string) {
    return JSON.parse(sessionStorage.getItem(key))
}
export function clearSession(key: string) {
    sessionStorage.removeItem(key)
}

//add branch to storage
export function saveBranches(value){
    saveItem('branch', value )
}
export function getBranches(){
    return getItem('branch')
}
export function saveDevices(value){
    saveItem('devices', value )
}

export function getDevices(){
    return getItem('devices')
}
export function getDevicesById(id){
    let device =  getItem('devices');
    return device.filter(val => val.id === id)
}
export function saveCamp(value){
    saveItem('campaign', value )
}

export function getCamp(){
    return getItem('campaign')
}
export function saveContent(value){
    saveItem('content', value )
}

export function getContent(){
    return getItem('content')
}
export function filterArea(value){
    saveItem('filter-area',value)
}
export function getFilterArea(){
    return getItem('filter-area')
}
export function filterBranches(value){
    saveItem('filter-branch',value)
}
export function getFilterBranches(){
    return getItem('filter-branch')
}
export function filterStores(value){
    saveItem('filter-store',value)
}
export function getFilterStores(){
    return getItem('filter-store')
}
export function saveRoles(value){
    saveItem('role', value )
}
export function getRoles(){
    return getItem('role')
}
export function saveUser(value){
    saveItem('user',value)
}
export function getUser(){
    return getItem('user')
}
export function clearUser(){
    return clearSession('user')
}
export function savePermission(value){
    saveItem('permission',value)
}
export function getPermission(){
    return getItem('permission')
}
export function clearPermission(){
    return clearSession('permission')
}