import { getData, getPath, setPath, setLevelPath, deleteItem, addFile, addFolder, renameItem } from './Controller.js'
/*
    renderPath:
        render Current path in breadcrumb component
*/
function renderPath(path) {
    var data = path.split('/');
    var chosePathComponent = document.getElementById('chosePathComponent');
    var componentHtmlData = '';
    data.forEach(function (element, index) {
        componentHtmlData += '<a href="#!" id="' + index + '"' + 'class="breadcrumb" onclick="newPathLevel(this.id)">' + element + '</a>';
    }, this);
    chosePathComponent.innerHTML = componentHtmlData;
}
/*
    renderData:
        render all item from the dataset
*/
function renderData(data) {
    var componentData = ''
    var choseDataComponent = document.getElementById('dataComponent');
    data.forEach(function (element) {
        if (element.type === 'folder') {
            var name = element.name.split('/');
            name = name[name.length - 1];
            componentData += `
        <div class="row">
            <div class="col s12">
             <div class="divider"></div>
                <div class="section">
                    <div class="col s1" style="color:black;" ><i class="material-icons">folder</i> </div>
                    <a href="#" style="color:black;" id="${element.name + '_' + element.type}" onclick="gotoFolder(this.id)"> <div class="col s9"><b>${name}<b></div> </a>
                    <a href="#" id="${element.name + '__' + element.type}" onclick="deleteItemView(this.id)" style="color:black;"><div class="col s1"><i class="material-icons">delete</i></div><a>
                    <a href="#" id="${element.name + '___' + element.type}" onclick="renameItemView(this.id)" style="color:black;"><div class="col s1"><i class="material-icons">edit</i></div><a>
                </div>
            </div>
        </div>`
        } else {
            var name = element.name.split('/');
            name = name[name.length - 1];
            componentData += `
        <div class="row">
            <div class="col s12">
                <div class="divider"></div>
                <div class="section">
                    <div class="col s1" style="color:black;"><i class="material-icons">note</i> </div>
                    <div class="col s9" style="color:black;">${name}</div>
                     <a href="#" id="${element.name + '__' + element.type}" onclick="deleteItemView(this.id)" style="color:black;"> <div class="col s1"><i class="material-icons">delete</i></div><a>
                    <a href="#" id="${element.name + '___' + element.type}" onclick="renameItemView(this.id)" style="color:black;"><div class="col s1"><i class="material-icons">edit</i></div><a>
                </div>
            </div>
        </div>
        `
        }
    }, this);
    choseDataComponent.innerHTML = componentData;
}
/*
    reloadData:
        render All page content
*/
export function reloadData(path) {
    renderPath(getPath());
    renderData(getData(getPath()));
}
/*
    gotoFolder:
        change path and reload data

*/
export function gotoFolder(id) {
    setPath(id.split('_')[0]);
    reloadData(getPath());
}
/*
    newPathLevel:
        change path level and reload data

*/
export function newPathLevel(id) {
    setLevelPath(id);
    reloadData(getPath());
}
/*
    deleteItemView:
        delete item from id 
*/
export function deleteItemView(id) {
    deleteItem(id.split('__')[0], id.split('__')[1]);
    reloadData(getPath());
}
/*
    clearAndGetInputValue:
        clear Input field and return value 
*/
export function clearAndGetInputValue() {
    var value = document.getElementById('itemName').value;
    document.getElementById('itemName').value = '';
    return value;
}
/*
    addFolderView:
        add folder and reload data
*/
export function addFolderView() {
    addFolder(clearAndGetInputValue());
    reloadData(getPath());
}
/*
    addFileView:
        add file and reload data
*/
export function addFileView() {
    addFile(clearAndGetInputValue());
    reloadData(getPath());
}
/*
    renameItemView:
        rename item and reload data 
*/
export function renameItemView(id) {
    renameItem(id.split('___')[0], id.split('___')[1], clearAndGetInputValue());
    reloadData(getPath());
}

