({
    doInit : function( component, event, helper ) {  
          
        var resultMsg = sessionStorage.getItem( 'pageTransfer' );  
        component.set( "v.Text", JSON.parse( resultMsg ).sampleVar );  
          
    }  
})
