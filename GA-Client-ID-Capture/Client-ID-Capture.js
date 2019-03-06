MktoForms2.whenReady( function (form) {
    var gaIdMktoFieldId = "gaClientId";
    function getAid(){
        try {
            var gaObj = window[window["GoogleAnalyticsObject"]];
            if (gaObj !== undefined) return gaObj.getAll()[0].get("clientId");
            else return "";
        }catch (e){
            return "";
        }
    }
    var a = {};
    a[gaIdMktoFieldId] = getAid();
    form.addHiddenFields(a);
});

/*
 * Copyright (c), Yanir Calisar (ycalisar at overstack.io)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this code and associated documentation files, to deal in the code without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the code. The user assumes responsibility for determining appropriate use of the code, for consequences of its use, and for checking functionality against other reliable sources. We suggest citation in publications as with any code developement work. No warrantee is given. Please help improve the code by sending suggestions or new code back.
 */