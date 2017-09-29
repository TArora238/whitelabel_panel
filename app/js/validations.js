function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}
function lengthCheck(object) {
    if (object.value.length < object.maxLength) {
        object.value="";
    }
    else if(parseInt(object.value)<5999999999)
        {
            object.value="";
        }
}
function disableSpace(evt){
    if (evt.keyCode == 32) return false;
}

function disableDelete(evt){
    if (evt.keyCode == 9||evt.keyCode == 46) return false;
}
function isNumberKey (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;

    var regex = /[0-9]|\./;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9||key==46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        if(key==".")return false;
        return;
    }
    key = String.fromCharCode (key);
    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
function isNumberKeyWithDot (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;

    var regex = /[0-9]|\./;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9||key==46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        // if(key==".")return false;
        return;
    }
    key = String.fromCharCode (key);
    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function emailFormatCheck (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        return;
    }
    if (evt.keyCode == 32) return false;
    key = String.fromCharCode (key);
    var regex = /[0-9a-z@-A-Z+]|\./;

    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    /*else{var rege = /[.]|\./;
        if ( rege.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }}*/
}
function isNumberTextwithspaceKey (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        if(key==".")return false;
        return;
    }
    key = String.fromCharCode (key);
    var regex = /[0-9a-z A-Z]|\./;

    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    /*else{var rege = /[.]|\./;
     if ( rege.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
     }}*/
}
function FirsText (evt) {

    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        if(key==".")return false;
        return;
    }

    key = String.fromCharCode (key);
    var regex = /[a-z ',A-Z-]|\./;

    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    else{var rege = /[.]|\./;
        if ( rege.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }}
}
function LastNameText (evt) {

    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if(key ==24 || key == 25 || key == 26 || key == 27 || key == 8 || key == 9 || key == 46) { // Left / Up / Right / Down Arrow, Backspace, Delete keys
        key = String.fromCharCode (key);
        if(key==".")return false;
        return;
    }

    key = String.fromCharCode (key);
    var regex = /[a-z',A-Z-]|\./;

    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    else{var rege = /[.]|\./;
        if ( rege.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }}
}
