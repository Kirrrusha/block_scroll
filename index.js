function lockScroll( elem ) {
    if ( elem.addEventListener ) {
        elem.addEventListener( "DOMMouseScroll", elem.onmousewheel = function( e ) {
            e.preventDefault();
        }, false );
    } else {
        elem.onmousewheel = function( e ) {
           window.event.returnValue = false;
        }
    }
}

function unlockScroll( elem ) {
    if ( elem.removeEventListener ) {
        elem.removeEventListener( "DOMMouseScroll", elem.onmousewheel, false );
        elem.onmousewheel = null;
    } else {
        elem.onmousewheel = null;
    }
}

lockScroll( document.getElementById( 'mydiv' ) ); // заблокировать скролл
unlockScroll( document.getElementById( 'mydiv' ) ); // разблокировать скролл