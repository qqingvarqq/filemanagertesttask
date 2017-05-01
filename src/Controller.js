import { fileManager, Item } from './Model.js';
/*
    current path by default its a root path
 */
var path = 'root';

export function getPath() {
    return path;
}

/*
    setPath:
        set full path
*/
export function setPath(value) {
    path = value;
}
/*
    set path level 
*/
export function setLevelPath(id) {
    var newPath = '';
    getPath().split('/').forEach(function (element, index) {
        if (index <= id) {
            newPath += element + '/';
        }
    }, this);
    newPath = newPath.substring(0, newPath.length - 1);
    path = newPath;
}
/*
    getData:
        get all data for the current path
*/
export function getData(path) {
    if (path == null) {
        return fileManager.data;
    }
    else {
        var data = new Array();
        fileManager.data.forEach(function (element) {
            if (element.name.indexOf(path) != -1 && element.name.split('/').length == path.split('/').length + 1) {
                data.push(element);
            }
        }, this);
        return data;
    }
}
/*
    addFolder:
        add folder and concat path;
*/
export function addFolder(name) {
    console.log('addFolder' + name);
    var folder = new Item(getPath() + '/' + name, 'folder');
    fileManager.addItem(folder);
}
/*
    addFile:
        add file and concat path;
*/
export function addFile(name) {
    console.log('addFile' + name);
    var folder = new Item(getPath() + '/' + name, 'file');
    fileManager.addItem(folder);
}
/*
    deleteItem:
        delete current item
*/
export function deleteItem(name, type) {
    var item = new Item(name, type);
    fileManager.deleteItem(item);
}
/*
    renameItem:
        rename current item
*/
export function renameItem(name, type, newName) {
    if (newName) {
        var item = new Item(name, type);
        newName = item.name.substring(0, item.name.lastIndexOf('/')) + '/' + newName;
        console.log(item.name,newName);
        fileManager.renameItem(item, newName);
    }
}
