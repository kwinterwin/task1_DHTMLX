dhtmlxEvent(window,"load",function(){
        var dhxWins, w1, myRibbon, myCP, myPop;

        dhxWins = new dhtmlXWindows();
        
        w1 = dhxWins.createWindow("w1", 20, 30, 500, 500);
        w1.setText("Some text");
        w1.setMinDimension(170,250);
        dhxWins.attachViewportTo("winVP");
        myRibbon = w1.attachRibbon({
            icons_path: "./",
            json: "./sample_1.json"
        });
 
        myRibbon.attachEvent("onClick", function(itemId) {
            if(itemId === "open"){
                myPop = new dhtmlXPopup({
                    ribbon: myRibbon,
                    id:itemId
                });
        
                myCP = myPop.attachColorPicker();
        
                myCP.attachEvent("onSelect", function(color){
                    document.getElementsByClassName("dhxwin_hdr")[0].style.backgroundColor = color;
                });
            }
            else{
                myPop = new dhtmlXPopup({
                    ribbon: myRibbon,
                    id:itemId
                });
        
                myCP = myPop.attachColorPicker();
        
                myCP.attachEvent("onSelect", function(color){
                    document.getElementsByClassName("dhx_cell_cont_wins")[0].style.backgroundColor = color;
                });
                
            }
        });
});	