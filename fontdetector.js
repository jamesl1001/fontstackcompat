var Fontdetector = function() {
    var font          = "Mangal",
        families      = ["sans-serif", "serif", "monospace"],
        testStr       = "भारतकेदौरेपरआएडेविडकैमरननेकहाहैकिमहारानीएलिजाबेथप्रथमक",
        testSize      = "100px",
        b             = document.body;
        defaultWidth  = {},
        defaultHeight = {},
        match         = 0;
    
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testStr;

    for (var i in families) {
        s.style.fontFamily = families[i];
        b.appendChild(s);
        defaultWidth[families[i]] = s.offsetWidth;
        defaultHeight[families[i]] = s.offsetHeight;
        s.style.fontFamily = font + ',' + families[i];
        if (s.offsetWidth != defaultWidth[families[i]] || s.offsetHeight != defaultHeight[families[i]]) {
            match++;
        }
        b.removeChild(s);
    }

    function doesMatch() {    
        switch(match) {
            case 0: return "no";
            case 1: return "unlikely";
            case 2: return "maybe";
            case 3: return "probably";
        }
    }
    
    console.log(doesMatch());

    /*
    Usage should be one of the following:
        if(mangal == true)          // true = probably
        if(mangal == "probably")    // match by keyword
        if(mangal == 3)             // same as above
        if(mangal > 1 )             // match maybe and probably
    */
}();