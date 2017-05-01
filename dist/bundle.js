/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_js__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPath;
/* harmony export (immutable) */ __webpack_exports__["c"] = setPath;
/* harmony export (immutable) */ __webpack_exports__["d"] = setLevelPath;
/* harmony export (immutable) */ __webpack_exports__["b"] = getData;
/* harmony export (immutable) */ __webpack_exports__["f"] = addFolder;
/* harmony export (immutable) */ __webpack_exports__["g"] = addFile;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteItem;
/* harmony export (immutable) */ __webpack_exports__["h"] = renameItem;

/*
    current path by default its a root path
 */
var path = 'root';

function getPath() {
    return path;
}

/*
    setPath:
        set full path
*/
function setPath(value) {
    path = value;
}
/*
    set path level 
*/
function setLevelPath(id) {
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
function getData(path) {
    if (path == null) {
        return __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].data;
    }
    else {
        var data = new Array();
        __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].data.forEach(function (element) {
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
function addFolder(name) {
    console.log('addFolder' + name);
    var folder = new __WEBPACK_IMPORTED_MODULE_0__Model_js__["b" /* Item */](getPath() + '/' + name, 'folder');
    __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].addItem(folder);
}
/*
    addFile:
        add file and concat path;
*/
function addFile(name) {
    console.log('addFile' + name);
    var folder = new __WEBPACK_IMPORTED_MODULE_0__Model_js__["b" /* Item */](getPath() + '/' + name, 'file');
    __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].addItem(folder);
}
/*
    deleteItem:
        delete current item
*/
function deleteItem(name, type) {
    var item = new __WEBPACK_IMPORTED_MODULE_0__Model_js__["b" /* Item */](name, type);
    __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].deleteItem(item);
}
/*
    renameItem:
        rename current item
*/
function renameItem(name, type, newName) {
    if (newName) {
        var item = new __WEBPACK_IMPORTED_MODULE_0__Model_js__["b" /* Item */](name, type);
        newName = item.name.substring(0, item.name.lastIndexOf('/')) + '/' + newName;
        console.log(item.name,newName);
        __WEBPACK_IMPORTED_MODULE_0__Model_js__["a" /* fileManager */].renameItem(item, newName);
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Controller_js__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = reloadData;
/* harmony export (immutable) */ __webpack_exports__["b"] = gotoFolder;
/* harmony export (immutable) */ __webpack_exports__["c"] = newPathLevel;
/* harmony export (immutable) */ __webpack_exports__["f"] = deleteItemView;
/* unused harmony export clearAndGetInputValue */
/* harmony export (immutable) */ __webpack_exports__["d"] = addFolderView;
/* harmony export (immutable) */ __webpack_exports__["e"] = addFileView;
/* harmony export (immutable) */ __webpack_exports__["g"] = renameItemView;

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
function reloadData(path) {
    renderPath(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
    renderData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["b" /* getData */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])()));
}
/*
    gotoFolder:
        change path and reload data

*/
function gotoFolder(id) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["c" /* setPath */])(id.split('_')[0]);
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}
/*
    newPathLevel:
        change path level and reload data

*/
function newPathLevel(id) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["d" /* setLevelPath */])(id);
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}
/*
    deleteItemView:
        delete item from id 
*/
function deleteItemView(id) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["e" /* deleteItem */])(id.split('__')[0], id.split('__')[1]);
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}
/*
    clearAndGetInputValue:
        clear Input field and return value 
*/
function clearAndGetInputValue() {
    var value = document.getElementById('itemName').value;
    document.getElementById('itemName').value = '';
    return value;
}
/*
    addFolderView:
        add folder and reload data
*/
function addFolderView() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["f" /* addFolder */])(clearAndGetInputValue());
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}
/*
    addFileView:
        add file and reload data
*/
function addFileView() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["g" /* addFile */])(clearAndGetInputValue());
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}
/*
    renameItemView:
        rename item and reload data 
*/
function renameItemView(id) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["h" /* renameItem */])(id.split('___')[0], id.split('___')[1], clearAndGetInputValue());
    reloadData(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Controller_js__["a" /* getPath */])());
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Item;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fileManager; });
/*
    class Item 
    where
        type : the type file or folder 
        name : name of the file including path eg root/myfile
*/
function Item(name, type) {
    this.type = type;
    if (name.indexOf('root/') == 0) {
        this.name = name;
    }
    else {
        this.name = 'root/' + name;
    }
}
/*
    class FileManger:
        store all Item in Array
        define method for manipulate items and save all data in local storage 
        property name and value saved in JSON
*/
function FileManager(name) {
    //localStorage.setItem('data',null);
    console.log(localStorage.getItem('data'));
    this.data = new Array();
    if (JSON.parse(localStorage.getItem(name)) == null) {
    }
    else {
        var rowData = JSON.parse(localStorage.getItem(name));
        rowData.forEach(function (element) {
            this.data.push(new Item(element.name, element.type));
        }, this);
        console.log(this.data);
    }
}
/*
    addItem:
        add Item and save in local storage
*/
FileManager.prototype.addItem = function (item) {
    for (var i in this.data) {
        if (this.data[i].name === item.name) {
            return false;
        }
    }
    if (item.name.lastIndexOf('/') != item.name.length - 1) {
        this.data.push(item);
        this.save();
        return true;
    }
    return false;
};
/*
    saveItem:
    save data in local storage
*/
FileManager.prototype.save = function () {
    localStorage.setItem('data', JSON.stringify(this.data));
    console.log('save\t\t' + JSON.stringify(this.data));
}
/*
    deleteItem:
    delete item and save changes in local storage
*/
FileManager.prototype.deleteItem = function (item) {
    if (item.type === 'file') {
        for (var i in this.data) {
            if (this.data[i].name === item.name) {
                this.data.splice(i,1);
            }
        }
        this.save();
    }
    else if (item.type === 'folder') {
        for (var i in this.data) {
            if (this.data[i].name.indexOf(item.name)!=-1) {
                 delete this.data[i];
            }
        }
        var newData=new Array();
        this.data.forEach(function(element) {
            if(element!=null){
                newData.push(element);
            }
        }, this);
        this.data=newData;
        this.save();
    }
}
/*
    renameItem:
    rename item and save in local storage
*/
FileManager.prototype.renameItem = function (item,newName) {
    for (var i in this.data) {
        if (this.data[i].name === newName) {
            return;
        }
    }
    if (item.type === 'file') {
        for (var i in this.data) {
            if (this.data[i].name === item.name) {
                this.data[i].name=newName;
            }
        }
         this.save();
    }
    else if (item.type === 'folder') {
        for (var i in this.data) {
            if (this.data[i].name.indexOf(item.name)!=-1) {
                 this.data[i].name=this.data[i].name.replace(item.name,newName);
            }
        }
        this.save();
    }
}
/*
    Export our filemanager
*/
var fileManager = new FileManager('data');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controller_js__ = __webpack_require__(0);




/*
    main point
    define all global function
    and load root data
*/


/*
    load root data
*/
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* reloadData */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Controller_js__["a" /* getPath */])());


/*
    define global function
*/
window.getPath=__WEBPACK_IMPORTED_MODULE_1__Controller_js__["a" /* getPath */];
window.reloadData=__WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* reloadData */];
window.gotoFolder=__WEBPACK_IMPORTED_MODULE_0__View_js__["b" /* gotoFolder */];
window.newPathLevel=__WEBPACK_IMPORTED_MODULE_0__View_js__["c" /* newPathLevel */];
window.addFolderView=__WEBPACK_IMPORTED_MODULE_0__View_js__["d" /* addFolderView */];
window.addFileView=__WEBPACK_IMPORTED_MODULE_0__View_js__["e" /* addFileView */];
window.deleteItemView=__WEBPACK_IMPORTED_MODULE_0__View_js__["f" /* deleteItemView */];
window.renameItemView=__WEBPACK_IMPORTED_MODULE_0__View_js__["g" /* renameItemView */];

/***/ })
/******/ ]);