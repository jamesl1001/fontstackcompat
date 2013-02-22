var Fontdetector = function() {
    var font          = "Mangal",
        families      = ["sans-serif", "serif", "monospace"],
        testStr       = "भारतकेदौरेपरआएडेविडकैमरननेकहाहैकिमहारानीएलिजाबेथप्रथमक",
        testSize      = "100px",
        b             = document.body;
        dW            = [],
        dH            = [],
        match         = 0;
    
    var span = document.createElement("span");
    span.style.fontSize = testSize;
    span.innerHTML = testStr;

    for (var i in families) {
        span.style.fontFamily = families[i];
        b.appendChild(span);
        dW[i] = span.offsetWidth;
        dH[i] = span.offsetHeight;
        span.style.fontFamily = font + ',' + families[i];
        if (span.offsetWidth != dW[i] || span.offsetHeight != dH[i]) {
            match++;
        }
        b.removeChild(span);
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

    Font object:
        font = {
            mangal: "probably",
            arial: "definitely"
        }
    */
}();