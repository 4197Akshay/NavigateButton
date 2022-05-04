({
    navigateToComTwo : function(component, event, helper) {  
          
        event.preventDefault();  
        var navService = component.find( "navService" );  
        var pageReference = {  
            type: "comm__namedPage",  
            attributes: {  
                pageName: "formpage"  
            },  
            state: {  
                sampleVar: component.get( "v.Txt" )  
            }  
        };  
        sessionStorage.setItem('pageTransfer', JSON.stringify(pageReference.state));  
        navService.navigate(pageReference);  
          
    }  
})
