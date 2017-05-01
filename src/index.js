import {reloadData, gotoFolder,newPathLevel,deleteItemView,addFileView,addFolderView,renameItemView} from './View.js';
import {getPath} from './Controller.js'


/*
    main point
    define all global function
    and load root data
*/


/*
    load root data
*/
reloadData(getPath());


/*
    define global function
*/
window.getPath=getPath;
window.reloadData=reloadData;
window.gotoFolder=gotoFolder;
window.newPathLevel=newPathLevel;
window.addFolderView=addFolderView;
window.addFileView=addFileView;
window.deleteItemView=deleteItemView;
window.renameItemView=renameItemView;