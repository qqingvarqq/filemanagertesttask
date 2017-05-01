/*
    class Item 
    where
        type : the type file or folder 
        name : name of the file including path eg root/myfile
*/
export function Item(name, type) {
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
export var fileManager = new FileManager('data');