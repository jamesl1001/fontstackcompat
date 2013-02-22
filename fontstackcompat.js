var Fontstackcompat = function() {
    var families      = ["sans-serif", "serif", "monospace"],
        allFamilies   = ["sans-serif", "serif", "monospace", "cursive", "fantasy"],
        testStr       = "wwwwwmmmmmllllliiiii",
        testSize      = "100px",
        b             = document.body;
        dW            = [],
        dH            = [],
        match         = 0,
        font          = {};

    var parseFontStack = function() {
        fontStack     = window.getComputedStyle(document.body).getPropertyValue("font-family");
        fontStackArr  = fontStack.split(", ");

        console.log("CSS font stack: ");
        console.log(fontStackArr);
        for (var f in allFamilies) {
            for (var i = fontStackArr.length - 1; i >= 0; i--) {
                if (fontStackArr[i] === allFamilies[f]) {
                    fontStackArr.splice(i, 1);
                }
            }
        }
        console.log("After removing font family: ");
        console.log(fontStackArr);
    }();

    for (var i in fontStackArr) {
        fontMatch(fontStackArr[i], testStr);
    }

    function fontMatch(testFont, testStr) {
        var span = document.createElement("span");
        span.style.fontSize = testSize;
        span.innerHTML = testStr;

        for (var i in families) {
            span.style.fontFamily = families[i];
            b.appendChild(span);
            dW[i] = span.offsetWidth;
            dH[i] = span.offsetHeight;
            span.style.fontFamily = testFont + ',' + families[i];
            if (span.offsetWidth != dW[i] || span.offsetHeight != dH[i]) {
                match++;
            }
            b.removeChild(span);
        }

        var testFontLC = testFont.toLowerCase();
   
        switch(match) {
            case 0:
                font[testFontLC] = "no";
                break;
            case 1:
                font[testFontLC] = "unlikely";
                break;
            case 2:
                font[testFontLC] = "maybe";
                break;
            case 3:
                font[testFontLC] = "probably";
                break;
        }

        match = 0;
    };

    console.log(font);

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